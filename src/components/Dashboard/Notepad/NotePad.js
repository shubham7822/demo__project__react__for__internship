import React, { useState } from "react";
import "./Notepad.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, TextField } from "@material-ui/core";
import { Notes } from "./Notes/Notes";
import uuid from "react-uuid";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const NotePad = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [displayTopic, SetDisplaytopic] = useState([]);

  const takeNote = (e) => {
    setOpen(false);

    SetDisplaytopic([
      ...displayTopic,
      { title: title, id: uuid(), subject: subject },
    ]);
    e.preventDefault();
  };
  return (
    <div className='NotePad'>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <div className='Modal__container'>
            <TextField
              variant='outlined'
              label='Title'
              type='text'
              name='title'
              id='title'
              className='Modal__input'
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              variant='outlined'
              label='Subject'
              type='text'
              name='title'
              id='title'
              className='Modal__input'
              onChange={(e) => setSubject(e.target.value)}
            />

            <Button color='primary' onClick={takeNote}>
              Note
            </Button>
          </div>
        </div>
      </Modal>
      <p className='NotePad_Para'>Notepad</p>
      <p>Add your Notes here</p>
      <div className='notes'>
        {displayTopic.map((item, i) => {
          return (
            <Notes
              item={item}
              Topic={displayTopic}
              SetDisplaytopic={SetDisplaytopic}
            />
          );
        })}
      </div>
      <div className='NotePad__btn'>
        <AddCircleIcon
          onClick={() => setOpen(true)}
          className='NotePad__AddBtn'
        />
      </div>
    </div>
  );
};

export default NotePad;
