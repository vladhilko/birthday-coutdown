import { useState } from 'react';
import { Link } from 'react-router-dom';

function GenerateNewBirthday() {
  const [name, setName] = useState('');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [link, setLink] = useState('');

  const generateLink = () => {
    setLink(`http://localhost:5173/birthday/${name}/${day}/${month}`);
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleDayChange = (e) => setDay(e.target.value);
  const handleMonthChange = (e) => setMonth(e.target.value);

  const renderGeneratedLink = () => {
    if (link === '') return null;

    return (
      <>
        <p className='gen-link'>{link}</p>
        <Link to={`/birthday/${name}/${day}/${month}`}>
          <button className='btn'>Visit Link</button>
        </Link>
      </>
    );
  };

  return (
    <div className='page'>
      <h1>Generate Here</h1>
      <div className='form'>
        <input
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type='number'
          placeholder='Enter Day'
          value={day}
          onChange={handleDayChange}
          max={31}
          min={1}
        />
        <select value={month} onChange={handleMonthChange}>
          <option value=''>Select Month</option>
          <option value='1'>January</option>
          <option value='2'>February</option>
          <option value='3'>March</option>
          <option value='4'>April</option>
          <option value='5'>May</option>
          <option value='6'>June</option>
          <option value='7'>July</option>
          <option value='8'>August</option>
          <option value='9'>September</option>
          <option value='10'>October</option>
          <option value='11'>November</option>
          <option value='12'>December</option>
        </select>
      </div>
      <button className='btn' onClick={generateLink}>
        Generate Link
      </button>
      {renderGeneratedLink()}
    </div>
  );
};

export default GenerateNewBirthday;
