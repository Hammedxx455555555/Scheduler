// eslint-disable-next-line no-unused-vars
import React, { useEffect,useState } from 'react';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler.css';
import scheduler from 'dhtmlx-scheduler';


const Scheduler = () => {
  

  useEffect(() => {

    scheduler.init('scheduler_here', new Date(), 'week');

   
    const events = [
      { id: 1, text: 'Room 199', start_date: '2024-07-10 09:00', end_date: '2024-07-12 12:00' },
      { id: 2, text: 'Room 206', start_date: '2024-07-5  14:00', end_date: '2024-07-10 19:00' },
      { id: 3, text: 'Room 401', start_date: '2024-07-11 09:00', end_date: '2024-07-11 12:00' },
      { id: 4, text: 'Room 209', start_date: '2024-07-8  14:00', end_date: '2024-07-14 16:00' },
      { id: 5, text: 'Room 153', start_date: '2024-07-9  09:00', end_date: '2024-07-15 15:00' },
      { id: 6, text: 'Room 215', start_date: '2024-07-10 14:00', end_date: '2024-07-14 16:00' },
      { id: 7, text: 'Room 183', start_date: '2024-07-10 09:00', end_date: '2024-07-13 17:00' },
      { id: 8, text: 'Room 222', start_date: '2024-07-11 14:00', end_date: '2024-07-15 16:00' },
    ];

    scheduler.clearAll();
    scheduler.parse(events, 'json');
  }, []);

  return (
    <>
    <div className="scheduler-container">
      <div id="scheduler_here" className="dhx_cal_container" style={{ width: '100%', height: '100%' }}>
        <div className="dhx_cal_navline">
          <div className="dhx_cal_prev_button">&nbsp;</div>
          <div className="dhx_cal_next_button">&nbsp;</div>
          <div className="dhx_cal_today_button"></div>
          <div className="dhx_cal_date"></div>
          <div className="dhx_cal_tab" name="day_tab" ></div>
          <div className="dhx_cal_tab" name="week_tab" ></div>
          <div className="dhx_cal_tab" name="month_tab" ></div>
        </div>
        <div className="dhx_cal_header"></div>
        <div className="dhx_cal_data"></div>
      </div>
    </div>

  
  </>
  );
};

export default Scheduler;
