import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Countdown from "./Countdown";

function Birthday({ name = 'Nic', month = 12, day = 1 }) {
  const [countdownData, setCountdownData] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
  });

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

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let fullMonthBirtday = monthNames[month-1];

  return (
    <>
      <div className='page'>
        <Countdown countdownData={countdownData} name={name} />
        <div className='birthdate'>
          Birthday: {fullMonthBirtday} {day}, {currentYear}
        </div>
        <Link to="/generate">Generate New Birthday</Link>
      </div>
    </>
  );
}


Birthday.propTypes = {
  name: PropTypes.string,
  month: PropTypes.number,
  day: PropTypes.number
};

export default Birthday;
