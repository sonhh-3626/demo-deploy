'use client';

import AuthGuard from '@/app/components/auth/AuthGuard';
import Breadcrumb from '@/app/components/Breadcrumb';

interface PostListLayoutProps {
  children: React.ReactNode;
}

export default function PostListLayout(
  { children }: PostListLayoutProps
) {
  return (
    <div>
      <div className="mt-10">
        <Breadcrumb />
      </div>
      <AuthGuard>
        {children}
      </AuthGuard>
    </div>
  )
}
