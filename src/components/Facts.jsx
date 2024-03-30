import { useEffect, useState } from "react";

const Facts = () => {
  const [wokingMonth, setWorkingMonth] = useState("");

  function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  useEffect(() => {
    let monthDifference = monthDiff(
      new Date(2021, 10, 4),
      new Date(2024, 2, 1)
    );
    setWorkingMonth(monthDifference);
  }, []);

  return (
    <section className='facts'>
      <div className='container'>
        <div className='main-title'>
          <h2>Fun Facts</h2>
        </div>
        <div className='row'>
          <div className='col-md-3 col-sm-6'>
            <div className='fact-item'>
              <span
                className='fact-number'
                data-from='0'
                data-to='5'
                data-speed='2500'></span>
              <h4>Projects Done</h4>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='fact-item'>
              <span
                className='fact-number'
                data-from='0'
                data-to='1'
                data-speed='2500'></span>
              <h4>Open Source</h4>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='fact-item'>
              <span
                className='fact-number'
                data-from='0'
                data-to={wokingMonth}
                data-speed='2500'></span>
              <h4>Months Of Work</h4>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='fact-item'>
              <span
                className='fact-number'
                data-from='0'
                data-to='1'
                data-speed='2500'></span>
              <h4>Awards Received</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
