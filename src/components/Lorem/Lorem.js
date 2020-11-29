import React, { useState, useEffect } from "react";
import "./Lorem.css";
import AttachmentIcon from "@material-ui/icons/Attachment";
import Post from "../Post/Post";

function Lorem() {
  const [Input, SetInput] = useState("");

  const [Topic, setTopic] = useState([]);

  const ShareHandler = (e) => {
    setTopic([...Topic, Input]);
    SetInput("");
    e.preventDefault();
  };

  return (
    <div>
      <h3>Hello, please share something with the students </h3>
      <div className='Lorem'>
        <div className='Lorem__Container'>
          <div className='Lorem__Input'>
            <input
              type='text'
              onChange={(event) => SetInput(event.target.value)}
              className='Lorem__TextInput'
              placeholder='Share SomeThing with Your Class'
            />
          </div>

          <div className='Lorem__Buttons'>
            <button className='Lorem__Cancle__btn'>Cancel</button>
            <div className='Lorem__socialButtons'>
              <AttachmentIcon className='Lorem__AttachIcon' />
              <button className='Lorem__share' onClick={ShareHandler}>
                Share
              </button>
            </div>
          </div>
        </div>
        <div className='Lorem__post'>
          {Topic.map((item, i) => {
            return <Post postitem={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Lorem;
