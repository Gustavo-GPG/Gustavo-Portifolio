import { useState } from "react";
import "./Pojetos.css"; // Importando o CSS
import projeto1 from "../../assets/Capa ProjetoAPPReceitas.png";
import projeto2 from "../../assets/Capa ProjetoTFC.png";
import projeto3 from "../../assets/Capa ProjetoAgrix.png";
import { useNavigate } from "react-router-dom";

function ProjetosCarrosel() {
  const navigate = useNavigate();
  const images = [
    projeto1,
    projeto2,
    projeto3,
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
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image-active"
          onClick={() => navigate(`/Gustavo-Portifolio/projetos/${currentIndex + 1}`)}
        />
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