import React from 'react';
import { format } from 'date-fns';
import { generateCalendarDays, isSameDay } from './dateUtils';

export function CalendarGrid({ currentMonth, selectedDate, onDateSelect }) {
  return (
    <div className="grid grid-cols-7 gap-1">
      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
        <div
          key={day}
          className="text-center text-xs md:text-sm font-medium text-gray-500 py-2"
        >
          {day}
        </div>
      ))}
      {generateCalendarDays(currentMonth).map((day, index) => (
        <button
          key={index}
          disabled={day.isPast}
          onClick={() => onDateSelect(day.date)}
          className={`
            aspect-square flex items-center justify-center text-xs md:text-sm rounded-lg transition-colors
            ${day.isPast ? 'text-gray-300 cursor-not-allowed' : day.isCurrentMonth ? 'hover:bg-blue-50' : 'text-gray-400'}
            ${isSameDay(selectedDate, day.date) ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
          `}
        >
          {format(day.date, 'd')}
        </button>
      ))}
    </div>
  );
}