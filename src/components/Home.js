import React from 'react';
import BannerImage from '../images/banner.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='banner'>
      <div className='banner-overlay'>
        <div className='banner-text'>
          <h2>Welcome to the office of </h2>
          <h1>Dr.Alexandra Alexdria</h1>
          <Link to='/contact'>
            <button>Request an appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
