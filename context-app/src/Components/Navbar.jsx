import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { DarkContext } from "./DarkContext";

const MyComponent = () => {
  const { isDarkMode, handleDarkMode } = useContext(DarkContext);

  const navbarClass = isDarkMode ? 'navbar navbar-expand-lg navbar-dark bg-dark' : 'navbar navbar-expand-lg navbar-light bg-light';

  return (
    <nav className={navbarClass}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Re:educate</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/Home">Home</a>
            <a className="nav-link" href="/About">About</a>
            <a className="nav-link" href="#" onClick={handleDarkMode}>Dark Mode</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyComponent;
