import React from "react";

import data from "../Data/NotificationData.json";
import NotificationInfo from "./NotificationInfo/NotificationInfo";
import "./NotificationTab.css";

function NotificationTab() {
  return (
    <div className='Notification'>
      <div className='Notification__header__bar'>
        <span className='Notification__header__active'>Notifications</span>
        <span className='Notification__header'>Events</span>
      </div>

      <div className='Notification__column'>
        {data.map((item, i) => {
          return <NotificationInfo item={item} />;
        })}
      </div>
    </div>
  );
}

export default NotificationTab;
