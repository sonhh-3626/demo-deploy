import { ReactNode } from 'react';

interface PostDetailLayoutProps {
  children: ReactNode;
}

export default function PostDetailLayout({
  children,
}: PostDetailLayoutProps) {
  return (
    <div className="min-h-screen mx-15">
        {children}
    </div>
  );
}
