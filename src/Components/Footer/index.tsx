import "./Footer.css"; 

function Footer() {
    return (
        <footer className="footer">
          <div className="footer-content">
            <p>Entre em contato:</p>
            <ul className="footer-links">
              <li>
                📧 <a href="mailto:gustavogpg23@gmail.com">gustavogpg23@gmail.com</a>
              </li>
              <li>
                🔗 <a href="https://www.linkedin.com/in/gustavogpg/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                💻 <a href="https://github.com/Gustavo-GPG" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </footer>
      );
}

export default Footer;