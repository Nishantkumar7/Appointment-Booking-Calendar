import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isAfter, startOfDay, isBefore } from 'date-fns';

export { addMonths, subMonths, isSameDay, format };

export const generateCalendarDays = (month) => {
  const start = startOfMonth(month);
  const end = endOfMonth(month);
  const today = startOfDay(new Date());
  
  return eachDayOfInterval({ start, end }).map(date => ({
    date,
    isCurrentMonth: true,
    isPast: isBefore(date, today)
  }));
};
