'use client';

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaCloudUploadAlt } from "react-icons/fa";

interface ImageUploadProps {
  onUpload: (url: string) => void;
  error?: string;
}

export default function ImageUpload({ onUpload, error }: ImageUploadProps) {
  const t = useTranslations('Form.ImageUpload');
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        onUpload(data.url);
      } else {
        alert(data.message || t('uploadFailed'));
        setPreview(null);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert(t('uploadError'));
      setPreview(null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {t('label')}
      </label>

      <div className="mt-1 flex items-center">
        <div className="w-full">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className={`flex flex-col items-center justify-center w-full h-64 border-2 ${
                error ? 'border-red-500' : 'border-gray-300'
              } border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100`}
            >
              {preview ? (
                <div className="relative w-full h-full">
                  <Image
                    src={preview}
                    alt={t('previewAlt')}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FaCloudUploadAlt />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">{t('clickToUpload')}</span> {t('orDragDrop')}
                  </p>
                  <p className="text-xs text-gray-500">{t('fileHint')}</p>
                </div>
              )}
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
      </div>

      {uploading && <p className="text-sm text-gray-500 mt-2">{t('uploading')}</p>}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
