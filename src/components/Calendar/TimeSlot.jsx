import React from 'react';
import { Clock } from 'lucide-react';

export function TimeSlot({ slot, onClick }) {
  return (
    <button
      disabled={!slot.isAvailable || slot.isBooked}
      className={`
        flex items-center justify-center p-3 md:p-4 rounded-lg text-sm md:text-base
        transition-colors duration-200
        ${
          slot.isAvailable && !slot.isBooked
            ? 'bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }
      `}
      onClick={() => onClick(slot)}
    >
      <Clock className="w-4 h-4 mr-1.5 md:mr-2" />
      {slot.time}
    </button>
  );
}