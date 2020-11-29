import React from "react";
import { Line } from "@reactchartjs/react-chart.js";
import "./SideChart.css";

const data = {
  labels: ["27", "28", "1", "2", "3", "4"],
  datasets: [
    {
      label: "# of Votes",
      data: [0, 100, 270, 310, 480, 560],
      bezierCurve: true,
      fill: true,
      backgroundColor: "rgb(0,255,17,0.08)",
      borderColor: "rgba(52,168,83,1)",
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
function SideChart() {
  return (
    <div className='SideChart'>
      <div className='SideChart__graph'>
        <Line data={data} options={options} />
      </div>
      <div className='SideChart__graph__months'>
        <p>February</p>
        <p>March</p>
      </div>
    </div>
  );
}

export default SideChart;
