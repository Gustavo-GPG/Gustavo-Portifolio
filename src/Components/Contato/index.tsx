import logo from "../../assets/fotoPessoal.jpeg";
import "./Contato.css"

function Contact() {
    return (
        <section className="contato">
          <div className="contato-container">
            <div className="contato-img">
              <img src={logo} alt="Foto de perfil" />
            </div>
    
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
    
          <p className="contato-texto">
            Tenho experiência em desenvolvimento web e backend, trabalhando com tecnologias como Java, Spring Boot, JavaScript, TypeScript e React. 
            Além disso, possuo conhecimentos em arquitetura de software, microserviços, API Gateway e mensageria. 
            Também sou familiarizado com banco de dados MySQL e Docker. Estou sempre disposto a aprender e a me adaptar a novas tecnologias e desafios.
          </p>
        </section>
      );
}

export default Contact;