import { useState } from "react";
import "./Pojetos.css"; // Importando o CSS
import foto1 from "../../assets/caroca1.jpg";
import foto2 from "../../assets/caroca2.jpg";
import foto3 from "../../assets/caroca3.jpeg";
import foto4 from "../../assets/caroca4.jpeg";

function ProjetosCarrosel() {
  const images = [
    foto1,
    foto2,
    foto3,
    foto4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel-projeots">
      <h1>Alguns projetos que desenvolvi em meus estudos</h1>
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-images">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>

        <button className="carousel-btn next" onClick={nextSlide}>
          &#10095;
        </button>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjetosCarrosel;