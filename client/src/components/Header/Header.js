import React from 'react';
import './Header.css';

function Header({ openForm }) {
  return (
    <div className="header">
      <div className="wrapper header_wrapper">
        <h2>Posts</h2>
        <button className="create" onClick={openForm}>
          CREATE
        </button>
      </div>
    </div>
  );
}

export default Header;
