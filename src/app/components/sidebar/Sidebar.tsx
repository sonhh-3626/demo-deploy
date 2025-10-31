'use client'

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRegFileAlt, FaPlus } from 'react-icons/fa';

export default function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations('SidenavItem');

  const menuItems = [
    {
      label: t('posts'),
      href: '/posts',
      icon: <FaRegFileAlt className="w-4 h-4" />,
    },
    {
      label: t('createNewPost'),
      href: '/posts/create',
      icon: <FaPlus className="w-4 h-4" />,
    },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200">
      <nav className="px-5 py-5">
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 px-3 py-3 rounded-md font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
