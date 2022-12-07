import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "./data";

function App() {
  const [reviews, setReviews] = useState(people);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      index === reviews.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index, reviews]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className="section-center">
        {reviews.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === reviews.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            index === 0 ? setIndex(reviews.length - 1) : setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            index === reviews.length - 1 ? setIndex(0) : setIndex(index + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
