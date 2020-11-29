import React from "react";
import "./Notes.css";
import DeleteIcon from "@material-ui/icons/Delete";

export const Notes = ({ item, Topic, SetDisplaytopic }) => {
  const deleteHandler = (e) => {
    console.log(item);
    SetDisplaytopic(Topic.filter((note) => note.id !== item.id));
    e.preventDefault();
  };
  return (
    <div className='Notepad__Notes'>
      <DeleteIcon onClick={deleteHandler} className='Notes__delete__btn' />
      <div className='Notepad__Notes__content'>
        <div className='Notepad__Notes__title'>{item.title}:</div>
        <div className='Notes__subject'>{item.subject}</div>
      </div>
    </div>
  );
};
