import Countdown from "./Countdown";

function Birthday() {
  const state = {
    days: 10,
    hours: 12,
    minutes: 44,
    seconds: 22
  };
  const name = "Event Countdown";

  return (
    <>
      <Countdown countdownData={state} name={name} />
    </>
  );
}

export default Birthday
