/**
 * concatenate breadcrumbs labels from an array of objects
 * @param breadcrumbs
 */
export const generateFullTitle = (breadcrumbs: {label: string}[]): string | undefined => {
  if (Array.isArray(breadcrumbs)) {
    return breadcrumbs.reduce((title, breadcrumb, i) => {
      if (i === 0) return `${breadcrumb.label}`;
      return `${title} > ${breadcrumb.label}`;
    }, '');
  }

  return undefined;
};
