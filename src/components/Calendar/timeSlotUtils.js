import { format, isAfter, parseISO, set, startOfDay } from 'date-fns';

export const generateTimeSlots = (selectedDate) => {
  const slots = [];
  const now = new Date();
  const selectedDateStart = startOfDay(selectedDate);
  const isToday = selectedDateStart.getDate() === now.getDate() &&
                  selectedDateStart.getMonth() === now.getMonth() &&
                  selectedDateStart.getFullYear() === now.getFullYear();

  for (let hour = 9; hour <= 17; hour++) {
    for (let minute of ['00', '30']) {
      const slotTime = set(selectedDate, { 
        hours: hour, 
        minutes: parseInt(minute), 
        seconds: 0, 
        milliseconds: 0 
      });

      const isPastTime = !isAfter(slotTime, now);
      
      // Skip past time slots for today
      if (isToday && isPastTime) {
        continue;
      }

      slots.push({
        time: `${hour.toString().padStart(2, '0')}:${minute}`,
        isAvailable: !isPastTime && Math.random() > 0.3,
        isBooked: !isPastTime && Math.random() > 0.7
      });
    }
  }
  return slots;
};

export const handleTimeSlotClick = (slot) => {
  if (slot.isAvailable && !slot.isBooked) {
    // In a real app, this would open a booking modal or form
    alert(`Booking slot for ${slot.time}`);
  }
};