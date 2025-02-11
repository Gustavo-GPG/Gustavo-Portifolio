import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Projeto1 from "../../assets/Capa ProjetoAPPReceitas.png";
import Projeto2 from "../../assets/Capa ProjetoTFC.png";
import Projeto3 from "../../assets/Capa ProjetoAgrix.png";
import './ProjetosLista.css';

function ProjetosLista() {
  const navigate = useNavigate();
  const projetos = [
    {
      id: 1,
      imagem: Projeto1,
      descricao: 'Aplicação Responsiva React para explorar receitas',
      linkGithub: 'https://github.com/Gustavo-GPG/AppReceitasDeploy',
      linkSite: 'https://gustavo-gpg.github.io/AppReceitasDeploy/',
    },
    {
      id: 2,
      imagem: Projeto2,
      descricao: 'Projeto de back-end com sequelize para alimentar um site de partidas de futebol',
      linkGithub: 'https://github.com/Gustavo-GPG/FutebolClube',
      linkSite: 'https://github.com/exemplo/repo2',
    },
    {
      id: 3,
      imagem: Projeto3,
      descricao: 'Sistema de gerenciamento de fazendas e plantações com Spring Boot',
      linkGithub: 'https://github.com/Gustavo-GPG/Agrix',
      linkSite: 'https://github.com/exemplo/repo2',
    },
  ];

  return (
    <div className='projetosList-Container'>
        <div className="projetos-lista">
            {projetos.map((projeto) => (
                <div 
                  key={projeto.id}
                  className="projeto-card"
                >
                <img 
                  src={projeto.imagem} 
                  alt="Projeto" 
                  className="projeto-imagem"
                  onClick={() => navigate(`/Gustavo-Portifolio/Projetos/${projeto.id}`)}
                />
                <div className="projeto-conteudo">
                    <p>{projeto.descricao}</p>
                    <p className='detalhes-link'
                      onClick={() => navigate(`/Gustavo-Portifolio/Projetos/${projeto.id}`)}
                    >
                      Detalhes
                    </p>
                    <div className="icones">
                    <a href={projeto.linkGithub} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                        Repositório
                    </a>
                    <a href={projeto.linkSite} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt size={20} />
                        Site
                    </a>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </div>
    
  );
};

export default ProjetosLista;
