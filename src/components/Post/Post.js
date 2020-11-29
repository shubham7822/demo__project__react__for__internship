import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Post.css";
import SendIcon from "@material-ui/icons/Send";

function Post({ postitem }) {
  return (
    <div className='Post'>
      <div className='Post__header'>
        <Avatar className='Post__avatar' src='./person.png' />
        <div className='Post__Content'>
          <p className='Post__teacher'>Teacher</p>
        </div>
      </div>
      <p className='Post__item'>{postitem}</p>
      <div className='Comment__Section'>
        <Avatar className='Post__avatar' src='./person.png' />
        <input
          type='text'
          className='Post__Comment'
          placeholder='Write a comment'
        />
        <SendIcon className='Comment__Send' />
      </div>
    </div>
  );
}

export default Post;
