import React from "react";

function Header({ showButton }) {
  return (
    <div className="navbar">
      <a href="/#">
        <img
          src="https://www.hiveclass.co/wp-content/themes/hiveclass.co/assets/images/hiveclass-logo-new-black.png"
          alt="Hiveclass Logo"
          className="hover:brightness-90"
        />
      </a>
      {showButton && (
        <button className="button-hiveclass max-w-fit">
          Enter email and password
        </button>
      )}
    </div>
  );
}

export default Header;
