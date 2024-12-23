import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { TimeSlots } from './TimeSlots';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { format, addMonths, subMonths } from './dateUtils';

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  const handlePreviousMonth = () => {
    setCurrentMonth(prev => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => addMonths(prev, 1));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Show time slots on mobile when a date is selected
    if (window.innerWidth < 768) {
      setShowTimeSlots(true);
    }
  };

  const handleBackToCalendar = () => {
    setShowTimeSlots(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className={`md:flex ${showTimeSlots ? 'hidden md:block' : 'block'}`}>
          <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200 md:flex-1">
            <CalendarHeader
              currentMonth={currentMonth}
              onPreviousMonth={handlePreviousMonth}
              onNextMonth={handleNextMonth}
            />
            <CalendarGrid
              currentMonth={currentMonth}
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
            />
          </div>
          <div className="hidden md:block md:flex-1">
            <TimeSlots selectedDate={selectedDate} />
          </div>
        </div>
        
        {/* Mobile Time Slots View */}
        <div className={`md:hidden ${showTimeSlots ? 'block' : 'hidden'}`}>
          <div className="p-4 border-b border-gray-200">
            <button
              onClick={handleBackToCalendar}
              className="flex items-center text-blue-500 font-medium"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Calendar
            </button>
            <h3 className="text-lg font-medium text-gray-900 mt-2">
              {format(selectedDate, 'MMMM d, yyyy')}
            </h3>
          </div>
          <TimeSlots selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
}