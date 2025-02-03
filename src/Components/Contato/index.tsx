import ractlogo from "../../assets/react.svg";
import "./Contato.css"

function Contact() {
    return (
        <section className="contato">
          <div className="contato-container">
            {/* Foto à esquerda */}
            <div className="contato-img">
              <img src={ractlogo} alt="Foto de perfil" />
            </div>
    
            {/* Bloco de contato à direita */}
            <div className="contato-info">
              <h2>Entre em Contato</h2>
              <p>Se quiser saber mais sobre meu trabalho ou colaborar em projetos, sinta-se à vontade para entrar em contato!</p>
              <ul>
                <li>📧 <a href="mailto:gustavogpg23@gmial.com">gustavogpg23@gmail.com</a></li>
                <li>📞 <a href="tel:+5534998438874">(34) 99843-8864</a></li>
                <li>🔗 <a href="https://www.linkedin.com/in/gustavogpg/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li>💻 <a href="https://github.com/Gustavo-GPG" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
          </div>
    
          {/* Texto abaixo */}
          <p className="contato-texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget turpis sapien. 
            Vivamus eget sapien ac odio ultricies fermentum. Sed sit amet tortor et risus commodo 
            suscipit ac vel elit. Morbi tincidunt, justo in congue ultrices, libero dui lacinia justo, 
            ac aliquet orci lorem eget arcu.
          </p>
        </section>
      );
}

export default Contact;