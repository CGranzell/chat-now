import React from "react";
import { auth } from "../api/api";
import classes from "./ChatMessage.module.css";

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;

  const messageClass =
    uid === auth.currentUser.uid ? `${classes.sent}` : `${classes.received}`;

  return (
    <>
      <div className={`${classes.message} ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
          alt=""
          className={classes.photo}
        />
        <p className={classes.text}>{text}</p>
      </div>
    </>
  );
};

export default ChatMessage;
