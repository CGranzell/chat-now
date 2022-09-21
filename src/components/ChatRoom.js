import React, { useState, useRef} from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth } from '../api/api';
import { firestore } from '../api/api'
import firebase from '../api/api'
import ChatMessage from './ChatMessage';
import classes from './ChatRoom.module.css';

const ChatRoom = () => {
  const scrollToBottom = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(50);

  const [formValue, setFormValue] = useState("");

  const [messages] = useCollectionData(query, { idField: "id"});

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL

    })
    setFormValue("");
    scrollToBottom.current.scrollIntoView({ behavior: "smooth"});
  }

  return (
    <>
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}

      <span ref={scrollToBottom}></span>
    </div>

    <form onSubmit={sendMessage} className={classes.form}>
        <input type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} className={classes.input}/>
        <button type='submit' disabled={!formValue} className={classes.button}>Send</button>
    </form>
    </>
  )
}

export default ChatRoom