import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { TimeSlot } from './TimeSlot';
import { generateTimeSlots, handleTimeSlotClick } from './timeSlotUtils';

export function TimeSlots({ selectedDate }) {
  const timeSlots = generateTimeSlots(selectedDate);

  return (
    <div className="p-4 md:p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Available Time Slots
      </h3>
      {timeSlots.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {timeSlots.map((slot, index) => (
            <TimeSlot
              key={index}
              slot={slot}
              onClick={handleTimeSlotClick}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 text-gray-500">
          <CalendarIcon className="w-12 h-12 mb-3 text-gray-400" />
          <p className="text-lg font-medium">No Time Slots Available</p>
          <p className="text-sm mt-1">Please select another date to view available slots.</p>
        </div>
      )}
    </div>
  );
}