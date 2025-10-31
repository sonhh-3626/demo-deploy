'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Post } from '@/types/post';
import { slugify } from '@/utils/convertMarkdownToHtml';
import { calculateReadTime } from '@/utils/calculateReadTime';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormActions from './FormActions';
import ImageUpload from './ImageUpload';
import FormSelect from './FormSelect';
import { getCategories } from '@/utils/getCategories';
import TagInput from './TagInput';

export default function PostCreateForm() {
  const t = useTranslations('Form');
  const categories = getCategories();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof Post, string>>>({});
  const [post, setPost] = useState<Post>({
    postId: '',
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    coverImage: '',
    author: {
      name: 'Ẩn danh',
      avatar: 'https://avatar.iran.liara.run/public/15',
      role: 'BrSE',
    },
    category: '',
    tags: [],
    publishedAt: '',
    updatedAt: '',
    readTime: 0,
    views: 0,
    likes: 0,
    status: 'draft',
  });

  const validatePost = (post: Post) => {
    const errors: Partial<Record<keyof Post, string>> = {};

    if (!post.title.trim()) {
      errors.title = t('Validation.titleRequired');
    }
    if (!post.excerpt.trim()) {
      errors.excerpt = t('Validation.excerptRequired');
    }
    if (!post.content.trim()) {
      errors.content = t('Validation.contentRequired');
    }
    if (!post.category.trim()) {
      errors.category = t('Validation.categoryRequired');
    }
    if (post.tags.length === 0 || (post.tags.length === 1 && post.tags[0] === '')) {
      errors.tags = t('Validation.tagsRequired');
    }
    if (!post.coverImage) {
      errors.coverImage = t('Validation.coverImageRequired');
    }

    return errors;
  };


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'title') {
      setPost((prev) => ({
        ...prev,
        title: value,
        slug: slugify(value),
      }));
    } else if (name === 'content') {
      setPost((prev) => ({
        ...prev,
        content: value,
        readTime: calculateReadTime(value),
      }));
    } else {
      setPost((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validatePost(post);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });

      if (res.ok) {
        router.push('/posts');
      } else {
        console.log(res)
        alert(`${t('errorMessage')}: ${res || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('An error occurred during post creation:', error);
      alert(t('unexpectedError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-md">
      <FormInput
        label={t('Title')}
        name="title"
        value={post.title}
        onChange={handleInputChange}
        error={errors.title}
      />

      <FormInput
        name="slug"
        value={post.slug}
        onChange={handleInputChange}
        hidden
        readOnly
      />

      <FormTextArea
        label={t('Excerpt')}
        name="excerpt"
        value={post.excerpt}
        onChange={handleInputChange}
        error={errors.excerpt}
        rows={3}
      />

      <FormTextArea
        label={t('Content')}
        name="content"
        value={post.content}
        onChange={handleInputChange}
        error={errors.content}
        rows={10}
      >
        <p className="text-sm text-gray-500 mt-1">
          🕒 {t('ReadTime')}: {post.readTime} {t('Minutes')}
        </p>
      </FormTextArea>

      <ImageUpload
        onUpload={(url) => setPost((prev) => ({ ...prev, coverImage: url }))}
        error={errors.coverImage}
      />

      <fieldset className="border-t border-gray-200 pt-6">
        <legend className="text-lg font-medium text-gray-900 mb-4">{t('Metadata')}</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSelect
            label={t('Category')}
            name="category"
            value={post.category}
            onChange={handleInputChange}
            error={errors.category}
            options={categories}
          />
          <TagInput
            label={t('Tags')}
            tags={post.tags}
            setTags={(newTags) => setPost((prev) => ({ ...prev, tags: newTags }))}
            error={errors.tags}
          />
        </div>
      </fieldset>

      <FormActions
        isSubmitting={isSubmitting}
        onCancel={() => router.push('/posts')}
      />
    </form>
  );
}
