import Birthday from './Birthday';
import { useParams } from 'react-router-dom';

function GeneratedBirthday() {
  const { name, day, month } = useParams();
  return (
    <>
      <Birthday name={name} month={month} day={day} />
    </>
  );
}


export default GeneratedBirthday;
