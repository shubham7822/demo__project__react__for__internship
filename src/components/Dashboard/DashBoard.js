import React from "react";
import "../Dashboard/Search/Search";
import Search from "../Dashboard/Search/Search";
import PercentChart from "./Chart/PercentChart";
import NotePad from "./Notepad/NotePad";
import "./Dashboard.css";
import SideChart from "./SideChart/SideChart";
import Inbox from "./Inbox/Inbox";
import ThisMonth from "./ThisMonth/ThisMonth";
import LastMonth from "./LastMonth/LastMonth";
import NotificationsTab from "../Notification/NotificationTab";
function DashBoard() {
  return (
    <div className='Dashboard'>
      <Search />
      <div className='DashBoard__columns'>
        <div>
          <PercentChart />
          <div className='Dashboard__SecondPart'>
            <NotePad />
            <div className='Dashboard__SecondPart__columnone'>
              <SideChart />
              <Inbox />
            </div>
            <div className='Dashboard__SecondPart__columnTwo'>
              <ThisMonth />
              <LastMonth />
            </div>
          </div>
        </div>
        <NotificationsTab />
      </div>
    </div>
  );
}

export default DashBoard;
