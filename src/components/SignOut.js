import React from "react";
import { auth } from "../api/api";
import classes from "./SignOut.module.css";

const SignOut = () => {
  return (
    auth.currentUser && (
      <button onClick={() => auth.signOut()} className={classes.btn}>
        Sign Out
      </button>
    )
  );
};

export default SignOut;
