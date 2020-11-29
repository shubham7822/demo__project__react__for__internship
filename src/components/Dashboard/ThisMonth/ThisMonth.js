import React from "react";
import "./ThisMonth.css";

function ThisMonth() {
  return (
    <div className='ThisMonth'>
      <p className='ThisMonth__head'>This Month</p>
      <div className='ThisMonth__Inside'>
        <span className='rating'>+7.8%</span>
        <img src='./Path1.png' />
      </div>
    </div>
  );
}

export default ThisMonth;
