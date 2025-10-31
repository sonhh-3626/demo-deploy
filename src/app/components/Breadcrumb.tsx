'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

import {
  generateBreadcrumbs,
  type BreadcrumbItem,
  getCurrentBreadcrumb,
  getParentBreadcrumbs
} from '@/utils/generateBreadcrumbs';

interface BreadcrumbProps {
  customItems?: BreadcrumbItem[];
  homeLabel?: string;
  homeIcon?: React.ReactNode;
  labelMap?: Record<string, string>;
  separator?: React.ReactNode;
  className?: string;
}

export default function Breadcrumb({
  customItems,
  homeLabel = 'Home',
  homeIcon = <FaHome className="w-4 h-4" />,
  labelMap,
  separator = <FiChevronRight className="w-4 h-4 text-gray-400" />,
  className = ''
}: BreadcrumbProps) {
  const pathname = usePathname();

  const breadcrumbs = generateBreadcrumbs({
    pathname,
    homeLabel,
    homeIcon,
    customItems,
    labelMap
  });

  const parentBreadcrumbs = getParentBreadcrumbs(breadcrumbs);
  const currentBreadcrumb = getCurrentBreadcrumb(breadcrumbs);

  return (
    <nav aria-label="breadcrumb" className={`${className}`}>
      <ol className="flex items-center space-x-2 text-lg">
        {parentBreadcrumbs.map((item) => (
          <li key={item.href} className="flex items-center">
            <Link
              href={item.href}
              className="flex items-center text-gray-600 hover:text-blue-600 hover:underline transition-colors"
            >
              {item.icon && <span className="mr-1.5">{item.icon}</span>}
              {item.label}
            </Link>
            <span className="mx-2 text-gray-400">
              {separator}
            </span>
          </li>
        ))}

        {currentBreadcrumb && (
          <li className="flex items-center">
            <span className="flex items-center text-gray-700 font-medium">
              {currentBreadcrumb.icon && (
                <span className="mr-1.5">{currentBreadcrumb.icon}</span>
              )}
              {currentBreadcrumb.label}
            </span>
          </li>
        )}
      </ol>
    </nav>
  );
}
