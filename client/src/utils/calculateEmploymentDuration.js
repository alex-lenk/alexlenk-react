import { getNoun } from './getNoun';

function isCurrentDate(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function getTotalMonthsBetweenDates(startDate, endDate) {
  let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  totalMonths -= startDate.getMonth();
  totalMonths += endDate.getMonth();
  return totalMonths;
}

function formatDurationInYearsAndMonths(totalMonths) {
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  let durationString = '';
  if (years > 0) {
    durationString += `${ years } год `;
  }
  if (remainingMonths > 0) {
    durationString += `${ remainingMonths } ${getNoun(remainingMonths, 'месяц', 'месяца', 'месяцев')}`;
  }
  return durationString.trim();
}

export function calculateEmploymentDuration(startDate, endDate) {
  const start = new Date(+startDate);
  const end = endDate ? new Date(+endDate) : new Date();

  if (isCurrentDate(end)) {
    return 'по настоящее время';
  }

  const totalMonths = getTotalMonthsBetweenDates(start, end);
  return formatDurationInYearsAndMonths(totalMonths);
}
