import { format, formatDistance, formatISO, parseISO } from 'date-fns';

/* The date format to use when displaying dates. */
export const DATE_FORMAT = 'LLLL dd, yyyy';

/* Format the given date as IS0 8601. */
export const formatISODate = (date: Date | string): string => {
  if (typeof date === 'string') {
    date = parseISO(date);
  }

  return formatISO(date, { representation: 'date' });
}

/* Format the given date in ISO 8601 into a human-readable string using the `DATE_FORMAT`. */
export const formatDate = (date: Date | string): string => {
  if (typeof date === 'string') {
    date = parseISO(date);
  }

  return format(date, DATE_FORMAT);
}

/* Format the given date in ISO 8601 so that it is relative to the current date. */
export const formatTimeAgo = (date: Date | string): string => {
  if (typeof date === 'string') {
    date = parseISO(date);
  }

  return formatDistance(date, new Date(), { addSuffix: true });
}
