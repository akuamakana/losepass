import { useState, useEffect } from 'react';
import { dateCountdown } from '../utils/dateCountdown';

export const useCountdown = (date: string) => {
  const [countdownDate, setCountdownDate] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownDate(dateCountdown(date));
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return countdownDate;
};
