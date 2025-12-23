export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
};

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};