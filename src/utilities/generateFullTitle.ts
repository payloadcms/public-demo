export const generateFullTitle = (breadcrumbs: unknown): string | undefined => {
  if (Array.isArray(breadcrumbs)) {
    return breadcrumbs.reduce((title, breadcrumb, i) => {
      if (i === 0) return `${breadcrumb.label}`;
      return `${title} > ${breadcrumb.label}`;
    }, '');
  }

  return undefined;
};
