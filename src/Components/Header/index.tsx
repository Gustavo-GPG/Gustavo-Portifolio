import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to={'/Gustavo-Portifolio'}>Home</NavLink>
        <NavLink to={'/Gustavo-Portifolio/Projetos'}>Projetos</NavLink>
        <NavLink to={'/Gustavo-Portifolio/Contato'}>Contato</NavLink>
      </nav>
    </header>
  );
}

export default Header;