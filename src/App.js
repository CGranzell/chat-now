import React from "react";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";


import { auth } from "./api/api";

import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";
import Header from "./components/Header";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Header />
      {!user && <div className="welcome">
      <h1>Welcome To Chat-Now</h1>
      <p>Log in to join the chat</p>
      </div>}
      <section>{user ? <ChatRoom /> : <SignIn /> }</section>
    </div>
  );
}

export default App;
