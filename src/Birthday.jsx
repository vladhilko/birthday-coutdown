import React, { useState, useEffect } from 'react';
import Countdown from "./Countdown";


function Birthday() {
  const [countdownData, setCountdownData] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
  });

  const name = 'Nic';
  const month = 12;
  const day = 1;

  const currentYear = new Date().getFullYear();

  const calculateTimeRemaining = (targetDate) => {
    const now = new Date().getTime();
    const timeDifference = targetDate.getTime() - now;

    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const getNextBirthday = () => {
      const now = new Date();
      let birthdayThisYear = new Date(currentYear, month - 1, day);

      if (now > birthdayThisYear) {
        return new Date(currentYear + 1, month - 1, day);
      }

      return birthdayThisYear;
    };

    const interval = setInterval(() => {
      const nextBirthday = getNextBirthday();
      const timeRemaining = calculateTimeRemaining(nextBirthday);
      setCountdownData(timeRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentYear, day, month]);

  return (
    <>
      <div className='page'>
        <Countdown countdownData={countdownData} name={name} />
      </div>
    </>
  );
}

export default Birthday;
