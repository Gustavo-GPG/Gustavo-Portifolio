import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Projeto1 from "../../assets/Capa ProjetoAPPReceitas.png";
import Projeto2 from "../../assets/Capa ProjetoTFC.png";
import Projeto3 from "../../assets/Capa ProjetoAgrix.png";
import './ProjetosLista.css';

const ProjetosLista = () => {
  const projetos = [
    {
      imagem: Projeto1,
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkGithub: 'https://github.com/Gustavo-GPG/AppReceitasDeploy',
      linkSite: 'https://gustavo-gpg.github.io/AppReceitasDeploy/',
    },
    {
      imagem: Projeto2,
      descricao: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
      linkGithub: 'https://github.com/Gustavo-GPG/FutebolClube',
      linkSite: 'https://github.com/exemplo/repo2',
    },
    {
      imagem: Projeto3,
      descricao: 'Aenean ut eros et nisl sagittis vestibulum. Integer ante arcu.',
      linkGithub: 'https://github.com/Gustavo-GPG/Agrix',
      linkSite: 'https://github.com/exemplo/repo2',
    },
  ];

  return (
    <div className='projetosList-Container'>
        <div className="projetos-lista">
            {projetos.map((projeto, index) => (
                <div key={index} className="projeto-card">
                <img src={projeto.imagem} alt="Projeto" className="projeto-imagem" />
                <div className="projeto-conteudo">
                    <p>{projeto.descricao}</p>
                    <div className="icones">
                    <a href={projeto.linkGithub} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                    </a>
                    <a href={projeto.linkSite} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt size={20} />
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
