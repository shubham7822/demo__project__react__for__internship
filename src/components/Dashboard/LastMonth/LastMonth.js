import React from "react";
import "./LastMonth.css";
function LastMonth() {
  return (
    <div className='LastMonth'>
      <p className='LastMonth__head'>This Month</p>
      <div className='LastMonth__Inside'>
        <span className='rating'>+67.4%</span>
        <img src='./Path2.png' />
      </div>
    </div>
  );
}

export default LastMonth;
