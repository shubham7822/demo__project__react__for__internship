import React from "react";
import { Line } from "@reactchartjs/react-chart.js";
import "./PercentChart.css";

//random data for the chart
const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 22, 33, 66],
      fill: false,
      backgroundColor: "rgb(255,108,64,1)",
      borderColor: "rgba(255,108,64,1)",
    },
    {
      label: "# of No Votes",
      data: [12, 20, 33, 44, 77],
      fill: false,
      backgroundColor: "rgb(255,231,0,1)",
      borderColor: "rgba(255,231,0,1)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function PercentChart() {
  return (
    <div className='Chart'>
      <div>
        <h1 className='Chart__heading'>
          Sales Report <span className='Chart__graySpan'>September 2020</span>
        </h1>
        <div className='Chart__firstdiv'>
          <Line className='Chart__data' data={data} options={options} />
        </div>
      </div>

      <div className='Chart__seconddiv'>
        <p className='Chart__seconddiv__heading'>17 Sep</p>
        <span className='Chart__seconddiv__box1'>
          <p className='Chart_boxNumber'>$1,204.33</p>
          <p className='Chart_boxHeading'>Revenue</p>
        </span>
        <span className='Chart__seconddiv__box2'>
          <p className='Chart_boxNumber'>33</p>
          <p className='Chart_boxHeading'>Quatations </p>
        </span>
      </div>
    </div>
  );
}

export default PercentChart;
