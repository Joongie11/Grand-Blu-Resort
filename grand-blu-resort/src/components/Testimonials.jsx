import React, { useState, useEffect } from 'react';
import '../App.css';

const testimonials = [
  {
    text: '“Absolutely breathtaking! The room, the view, the service — everything was top-notch.”',
    author: '— Isabella R., Italy',
  },
  {
    text: '“The spa was heavenly and the food unforgettable. A true paradise by the sea.”',
    author: '— Mark T., UK',
  },
  {
    text: '“I travel often, but this place has something magical. Thank you for an unforgettable experience.”',
    author: '— Yuki N., Japan',
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // 👇 автоматична зміна слайду кожні 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // очищення при виході
  }, [current]);

  return (
    <section className="testimonials-slider">
      <div className="container">
        <h2>What Our Guests Say</h2>
        <div className="slider">
          <div className="slides">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`slide ${index === current ? 'active' : ''}`}
                style={{ display: index === current ? 'block' : 'none' }}
              >
                <p>{item.text}</p>
                <h4>{item.author}</h4>
              </div>
            ))}
          </div>
          <div className="slider-buttons">
            <button className="prev" onClick={prevSlide}>‹</button>
            <button className="next" onClick={nextSlide}>›</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
