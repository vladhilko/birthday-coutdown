import PropTypes from 'prop-types';

function Countdown({ countdownData = { days: 0, hours: 0, minutes: 0, seconds: 0 },
  name = "User"}) {
  return (
    <div>
      <h1 className="heading">
        Countdown to <span className="highlight">{name}&apos;s</span> Birthday! 🎂🎉
      </h1>

      <div className="countdown-wrapper">
        <div className="countdown-box">
          {countdownData.days}
          <span className="legend">Days</span>
        </div>
        <div className="countdown-box">
          {countdownData.hours}
          <span className="legend">Hours</span>
        </div>
        <div className="countdown-box">
          {countdownData.minutes}
          <span className="legend">Minutes</span>
        </div>
          <div className="countdown-box">
          {countdownData.seconds}
          <span className="legend">Seconds</span>
        </div>
      </div>

    </div>
  );
}

Countdown.propTypes = {
  countdownData: PropTypes.shape({
    days: PropTypes.number,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }).isRequired,
  name: PropTypes.string
};

export default Countdown;
