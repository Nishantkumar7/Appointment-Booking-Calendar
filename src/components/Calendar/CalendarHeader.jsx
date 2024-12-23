import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';

export function CalendarHeader({ currentMonth, onPreviousMonth, onNextMonth }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        Book an Appointment
      </h2>
      <div className="flex items-center space-x-2 md:space-x-4">
        <button
          onClick={onPreviousMonth}
          className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        </button>
        <span className="text-sm md:text-lg font-medium text-gray-700">
          {format(currentMonth, 'MMMM yyyy')}
        </span>
        <button
          onClick={onNextMonth}
          className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}