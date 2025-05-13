// CountdownTimer.tsx
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  eventDate: Date;
  countdownTitle?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeUnitProps {
    value: number;
    label: string;
  }
  

const calculateTimeLeft = (targetDate: Date): TimeLeft | null => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const formatTimeUnit = (value: number): string => String(value).padStart(2, "0");

const TimeUnit = ({ value, label }: TimeUnitProps) => (
    <div className="flex flex-col text-center">
      <span className="text-brand-green text-2xl sm:text-4xl font-segment bg-black px-4 py-2 rounded w-fit border border-brand-green shadow-inner glow">
        {formatTimeUnit(value)}
      </span>
      <span className="text-gray-300 text-sm font-blatant mt-2">{label}</span>
    </div>
  );

const CountdownTimer = ({ eventDate, countdownTitle = "Event" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(eventDate));

  useEffect(() => {
    const updateTimer = () => setTimeLeft(calculateTimeLeft(eventDate));
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  if (!timeLeft) return <div className="text-brand-red text-center text-lg font-blatant">¡Tiempo de espera terminado!</div>;

  return (
    <div className="flex flex-col text-center items-center bg-black p-4 rounded-lg m-4 w-full max-w-xs sm:max-w-md md:max-w-lg px-4 mx-auto my-4 sm:my-6">
      <h2 className="text-brand-green text-2xl font-blatant">{countdownTitle}</h2>
      <div className="flex gap-2 text-sm text-center sm:text-md items-center bg-black p-4 rounded font-blatant">
        <TimeUnit value={timeLeft.days} label="DIAS" />
        <TimeUnit value={timeLeft.hours} label="HORAS" />
        <TimeUnit value={timeLeft.minutes} label="MIN." />
        <TimeUnit value={timeLeft.seconds} label="SEG." />
      </div>
    </div>
  );
};

export default CountdownTimer;