import React from 'react';
import './Preloader.scss';
import loader from '../../Assets/images/loader.svg';

function Preloader() {
  return (
    <div className="preloader">
      <img src={loader} alt="Loading..." className="preloader-img" />
    </div>
  );
}

export default Preloader;
