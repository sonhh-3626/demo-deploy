export interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface GenerateBreadcrumbsProps {
  pathname: string;
  homeLabel?: string;
  homeIcon?: React.ReactNode;
  customItems?: BreadcrumbItem[];
  labelMap?: Record<string, string>;
}

export function generateBreadcrumbs({
  pathname,
  homeLabel = 'Home',
  homeIcon,
  customItems,
  labelMap = {}
}: GenerateBreadcrumbsProps): BreadcrumbItem[] {
  if (customItems) {
    return customItems;
  }

  const segments = pathname.split('/').filter(segment => segment !== '');

  const breadcrumbs: BreadcrumbItem[] = [
    { label: homeLabel, href: '/', icon: homeIcon }
  ];

  let currentPath = '';
  segments.forEach((segment) => {
    currentPath += `/${segment}`;

    const customLabel = labelMap[segment];

    const label = customLabel || formatSegmentLabel(segment);

    breadcrumbs.push({
      label,
      href: currentPath
    });
  });

  return breadcrumbs;
}

export function formatSegmentLabel(segment: string): string {
  return segment
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getCurrentBreadcrumb(breadcrumbs: BreadcrumbItem[]): BreadcrumbItem | null {
  return breadcrumbs.length > 0 ? breadcrumbs[breadcrumbs.length - 1] : null;
}

export function getParentBreadcrumbs(breadcrumbs: BreadcrumbItem[]): BreadcrumbItem[] {
  return breadcrumbs.slice(0, -1);
}
