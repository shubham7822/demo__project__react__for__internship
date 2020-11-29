import React from "react";
import "./NotificationInfo.css";

function NotificationInfo({ item }) {
  return (
    <div className='NotificationInfo'>
      <div
        style={{
          background: `rgba(${item.color})`,
          width: "46px",
          height: "54px",
          margin: "10px",
        }}
      ></div>
      <div className='NotificationInfo__container'>
        <p className='NotificationInfo__container__name'>{item.name}</p>
        <p className='NotificationInfo__container__topic'>{item.topic}</p>
        <p className='NotificationInfo__container__time'>
          {item.time} minutes ago
        </p>
      </div>
    </div>
  );
}

export default NotificationInfo;
