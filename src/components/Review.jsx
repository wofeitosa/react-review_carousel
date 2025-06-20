import { useState } from "react";
import { reviews } from "../data";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, img, text } = reviews[index];

  const checkIndex = (number) => {
    if (number > reviews.length - 1) return 0;
    if (number < 0) return reviews.length - 1;
    return number;
  };

  const nextReview = () => {
    setIndex((prevIndex) => checkIndex(prevIndex + 1));
  };

  const prevReview = () => {
    setIndex((prevIndex) => checkIndex(prevIndex - 1));
  };

  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) randomIndex = index + 1;
    setIndex(checkIndex(randomIndex));
  };

  return (
    <section className="container">
      <div className="title">
        <h2>Nossos Depoimentos</h2>
        <div className="underline"></div>
      </div>
      <article className="review">
        <div className="img-container">
          <img src={img} alt={name} id="person-img" />
        </div>
        <h4 id="author">{name}</h4>
        <p id="job">{job}</p>
        <p id="info">{text}</p>
        <div className="button-container">
          <button onClick={prevReview} className="prev-btn">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={nextReview} className="next-btn">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <button onClick={randomReview} className="random-btn">
          Me surpreenda
        </button>
      </article>
    </section>
  );
}
