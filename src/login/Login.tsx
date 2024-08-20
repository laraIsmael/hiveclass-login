import React from "react";
import { Link } from "react-router-dom";

export default function Login({ handleShowButton }) {
  return (
    <div className="my-10 position-center">
      <div className="card">
        <div className="position-center p-12  border-b">
          <div className="login-input-box">
            <label>EMAIL</label>
            <input type="email" />
          </div>
          <div className="login-input-box">
            <label>PASSWORD</label>
            <input type="password" />
          </div>
          <button
            onClick={() => {
              handleShowButton();
            }}
            className="button-hiveclass"
          >
            LOGIN
          </button>
        </div>
        <button
          className="button-full-container"
          onClick={() => alert("coming soon")}
        >
          Forgot your
          <p className="text-yellow-500">&nbsp;&nbsp;password</p>?
        </button>
      </div>
        <button className="button-hiveclass max-w-fit">
          <Link to="Graph">
            Show Graph        
          </Link>
        </button>
      </div>
  );
}
