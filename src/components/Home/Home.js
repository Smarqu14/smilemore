import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <div className='banner'>
        <div className='banner-overlay'>
          <div className='banner-text'>
            <h2>Welcome to the office of </h2>
            <h1>Dr.Leonarda Alexander</h1>
            <Link to='/contact'>
              <button>Request an appointment</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='content-container'>
        <div className='content-mission'>
          <h1>Your dental health is our mission</h1>
          <h3>Welcome to our dental offices</h3>
          <p>
            As your trusted dentist in Lahaina, we welcome patients of all ages
            for care and offer a wide range of dental services designed to meet
            the needs of every member of your family. Our office team are
            dedicated to helping patients maintain optimal oral health and enjoy
            the benefits of a beautiful smile. Providing the highest quality of
            care, we do our very best to make every visit to our office a
            comfortable and satisfying experience.
          </p>
          <p>
            Offering the most advanced dental services, we provide precise and
            gentle care in an environment that is compassionate, relaxing and
            stress-free. Whether you or any member of your family need
            preventive care, a cosmetic smile makeover, the replacement of
            missing teeth or any other outstanding services we offer, we are
            well equipped to address your dental needs.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            You can rest assured that your smile and those of your loved ones
            are in the very best of hands at Lahaina Dental Group. As your
            family dentist in Lahaina, we maintain an unwavering commitment to
            excellence, providing skilled, state-of-the-art treatment to achieve
            exceptional results of care. We will do our best to accommodate
            emergency visits and walk-in patients are welcome.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
