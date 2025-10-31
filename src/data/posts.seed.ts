import { Post } from "@/types/post";

export const postsSeed: Post[] = [
  {
    postId: '1',
    title: 'Giới thiệu về Next.js 14 và App Router',
    slug: 'gioi-thieu-nextjs-14-app-router',
    excerpt: 'Khám phá những tính năng mới nhất trong Next.js 14 với App Router, Server Components và các cải tiến về hiệu suất.',
    content: `
# Giới thiệu về Next.js 14 và App Router

Next.js 14 đã ra mắt với nhiều cải tiến đáng chú ý, đặc biệt là về hiệu suất và trải nghiệm phát triển.

## Server Components

Server Components cho phép bạn render các component trên server, giúp giảm kích thước bundle JavaScript được gửi đến client.

## App Router

App Router là hệ thống routing mới được xây dựng dựa trên React Server Components. Nó cung cấp:

- Nested layouts
- Loading states
- Error handling
- Streaming UI

## Kết luận

Next.js 14 mang đến nhiều cải tiến quan trọng giúp xây dựng ứng dụng web hiện đại hiệu quả hơn.
    `,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    author: {
      name: 'Nguyễn Văn An',
      avatar: 'https://i.pravatar.cc/150?Image=12',
      role: 'Senior Developer'
    },
    category: 'Next.js',
    tags: ['Next.js', 'React', 'Web Development'],
    publishedAt: '2025-10-20T10:00:00Z',
    updatedAt: '2025-10-21T15:30:00Z',
    readTime: 8,
    views: 1234,
    likes: 89,
    status: 'published'
  },
  {
    postId: '2',
    title: 'Server Components vs Client Components trong Next.js',
    slug: 'server-components-vs-client-components',
    excerpt: 'So sánh chi tiết giữa Server Components và Client Components, khi nào nên sử dụng từng loại để tối ưu hiệu suất.',
    content: `
# Server Components vs Client Components

Hiểu rõ sự khác biệt giữa hai loại components này là chìa khóa để xây dựng ứng dụng Next.js hiệu quả.

## Server Components

- Render trên server
- Không có JavaScript bundle
- Truy cập trực tiếp database
- Không có interactivity

## Client Components

- Render trên client
- Có thể sử dụng hooks
- Event handlers
- Browser APIs

## Best Practices

Sử dụng Server Components mặc định và chỉ chuyển sang Client Components khi cần thiết.
    `,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    author: {
      name: 'Trần Thị Bình',
      avatar: 'https://i.pravatar.cc/150?Image=45',
      role: 'Tech Lead'
    },
    category: 'Next.js',
    tags: ['Next.js', 'React', 'Server Components'],
    publishedAt: '2025-10-18T14:30:00Z',
    updatedAt: '2025-10-19T09:15:00Z',
    readTime: 10,
    views: 2156,
    likes: 145,
    status: 'published'
  },
  {
    postId: '3',
    title: 'Tối ưu hóa hiệu suất với Next.js Image Component',
    slug: 'toi-uu-hoa-hieu-suat-nextjs-image',
    excerpt: 'Hướng dẫn sử dụng next/image để tự động tối ưu hình ảnh, lazy loading và cải thiện Core Web Vitals.',
    content: `
# Tối ưu hóa hiệu suất với Next.js Image Component

Component Image của Next.js cung cấp tối ưu hóa hình ảnh tự động và nhiều tính năng nâng cao.

## Tính năng chính

- Automatic image optimization
- Lazy loading mặc định
- Responsive images
- Placeholder blur

## Cách sử dụng

\`\`\`jsx
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero"
  width={800}
  height={400}
  priority
/>
\`\`\`

## Kết quả

Cải thiện LCP (Largest Contentful Paint) và tổng thể Core Web Vitals.
    `,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    author: {
      name: 'Lê Văn Cường',
      avatar: 'https://i.pravatar.cc/150?Image=33',
      role: 'Performance Engineer'
    },
    category: 'Performance',
    tags: ['Next.js', 'Performance', 'Images'],
    publishedAt: '2025-10-15T08:00:00Z',
    updatedAt: '2025-10-15T08:00:00Z',
    readTime: 6,
    views: 987,
    likes: 67,
    status: 'published'
  },
  {
    postId: '4',
    title: 'State Management trong Next.js với Redux Toolkit',
    slug: 'state-management-nextjs-redux-toolkit',
    excerpt: 'Tích hợp Redux Toolkit vào Next.js App Router, quản lý global state hiệu quả với createAsyncThunk.',
    content: `
# State Management với Redux Toolkit

Redux Toolkit giúp đơn giản hóa việc quản lý state trong ứng dụng Next.js phức tạp.

## Setup Redux Toolkit

\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

## Tạo Store

\`\`\`typescript
import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})
\`\`\`

## ProvpostIder Setup

Wrap ứng dụng với Redux ProvpostIder trong layout.tsx.

## Khi nào nên dùng Redux

- Ứng dụng lớn với state phức tạp
- Cần share state giữa nhiều components
- Cần mpostIddleware cho spostIde effects
    `,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    author: {
      name: 'Phạm Thị Dung',
      avatar: 'https://i.pravatar.cc/150?Image=25',
      role: 'Full Stack Developer'
    },
    category: 'State Management',
    tags: ['Redux', 'Next.js', 'State Management'],
    publishedAt: '2025-10-12T11:20:00Z',
    updatedAt: '2025-10-13T16:45:00Z',
    readTime: 12,
    views: 1567,
    likes: 103,
    status: 'published'
  },
  {
    postId: '5',
    title: 'Authentication với NextAuth.js trong App Router',
    slug: 'authentication-nextauth-app-router',
    excerpt: 'Hướng dẫn chi tiết cách thiết lập authentication an toàn với NextAuth.js, bao gồm JWT và OAuth provpostIders.',
    content: `
# Authentication với NextAuth.js

NextAuth.js là giải pháp authentication hoàn chỉnh cho Next.js.

## Cài đặt

\`\`\`bash
npm install next-auth
\`\`\`

## Cấu hình

Tạo file app/api/auth/[...nextauth]/route.ts để cấu hình NextAuth.

## ProvpostIders

- Credentials ProvpostIder
- Google OAuth
- GitHub OAuth
- Email ProvpostIder

## Bảo vệ Routes

Sử dụng mpostIddleware để bảo vệ các routes cần authentication.

## Session Management

NextAuth tự động quản lý sessions và refresh tokens.
    `,
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
    author: {
      name: 'Hoàng Văn Em',
      avatar: 'https://i.pravatar.cc/150?Image=56',
      role: 'Security Specialist'
    },
    category: 'Authentication',
    tags: ['NextAuth', 'Security', 'Authentication'],
    publishedAt: '2025-10-10T09:30:00Z',
    updatedAt: '2025-10-10T09:30:00Z',
    readTime: 15,
    views: 2345,
    likes: 178,
    status: 'published'
  },
  {
    postId: '6',
    title: 'SEO Optimization cho Next.js Applications',
    slug: 'seo-optimization-nextjs',
    excerpt: 'Tối ưu hóa SEO với metadata động, structured data JSON-LD, và sitemap generation trong Next.js.',
    content: `
# SEO Optimization cho Next.js

Next.js cung cấp nhiều công cụ mạnh mẽ để tối ưu SEO.

## Metadata API

\`\`\`typescript
export const metadata = {
  title: 'My Blog',
  description: 'Best tech blog',
  openGraph: {
    title: 'My Blog',
    description: 'Best tech blog',
  },
}
\`\`\`

## Dynamic Metadata

Generate metadata dựa trên nội dung động.

## Structured Data

Thêm JSON-LD schema cho articles.

## Sitemap

Tạo sitemap tự động với generateSitemaps.
    `,
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    author: {
      name: 'Vũ Thị Phương',
      avatar: 'https://i.pravatar.cc/150?Image=41',
      role: 'SEO Specialist'
    },
    category: 'SEO',
    tags: ['SEO', 'Next.js', 'Metadata'],
    publishedAt: '2025-10-08T13:00:00Z',
    updatedAt: '2025-10-09T10:20:00Z',
    readTime: 9,
    views: 1876,
    likes: 134,
    status: 'published'
  },
  {
    postId: '7',
    title: 'Testing Next.js Applications với Jest và Cypress',
    slug: 'testing-nextjs-jest-cypress',
    excerpt: 'Chiến lược testing toàn diện cho Next.js: unit tests, integration tests, và end-to-end testing.',
    content: `
# Testing Next.js Applications

Testing là phần quan trọng để đảm bảo chất lượng code.

## Unit Testing với Jest

\`\`\`typescript
import { render, screen } from '@testing-library/react'
import PostCard from './PostCard'

test('renders post title', () => {
  render(<PostCard post={mockPost} />)
  expect(screen.getByText('Test Title')).toBeInTheDocument()
})
\`\`\`

## Integration Testing

Test các components tương tác với nhau.

## E2E Testing với Cypress

Test toàn bộ user flows.

## Testing API Routes

Viết tests cho API endpoints.
    `,
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    author: {
      name: 'Đỗ Văn Giang',
      avatar: 'https://i.pravatar.cc/150?Image=68',
      role: 'QA Engineer'
    },
    category: 'Testing',
    tags: ['Testing', 'Jest', 'Cypress'],
    publishedAt: '2025-10-05T15:45:00Z',
    updatedAt: '2025-10-05T15:45:00Z',
    readTime: 11,
    views: 1432,
    likes: 98,
    status: 'published'
  },
  {
    postId: '8',
    title: 'Deployment Next.js lên Vercel: Best Practices',
    slug: 'deployment-nextjs-vercel-best-practices',
    excerpt: 'Hướng dẫn deploy ứng dụng Next.js lên Vercel với CI/CD, environment variables, và monitoring.',
    content: `
# Deployment Next.js lên Vercel

Vercel là nền tảng tốt nhất để deploy Next.js applications.

## Chuẩn bị

- Kết nối GitHub repository
- Cấu hình environment variables
- Review build settings

## Deployment Process

Push code lên GitHub và Vercel tự động deploy.

## Environment Variables

Cấu hình biến môi trường cho production.

## Monitoring

Sử dụng Vercel Analytics và Speed Insights.

## Custom Domains

Thêm custom domain và SSL certificate.
    `,
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    author: {
      name: 'Ngô Thị Hà',
      avatar: 'https://i.pravatar.cc/150?Image=20',
      role: 'DevOps Engineer'
    },
    category: 'Deployment',
    tags: ['Vercel', 'Deployment', 'CI/CD'],
    publishedAt: '2025-10-03T10:15:00Z',
    updatedAt: '2025-10-04T14:30:00Z',
    readTime: 7,
    views: 2109,
    likes: 156,
    status: 'published'
  }
];
