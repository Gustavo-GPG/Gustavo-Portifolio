import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import foto1 from "../../assets/caroca1.jpg";
import foto2 from "../../assets/caroca2.jpg";
import foto3 from "../../assets/caroca3.jpeg";
import foto4 from "../../assets/caroca4.jpeg";
import './ProjetosLista.css';

const ProjetosLista = () => {
  const projetos = [
    {
      imagem: foto1,
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkGithub: 'https://github.com/exemplo/repo1',
      linkSite: 'https://meuprojeto.com',
    },
    {
      imagem: foto2,
      descricao: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
      linkGithub: 'https://github.com/exemplo/repo2',
      linkSite: 'https://meuprojeto2.com',
    },
    {
      imagem: foto3,
      descricao: 'Aenean ut eros et nisl sagittis vestibulum. Integer ante arcu.',
      linkGithub: 'https://github.com/exemplo/repo3',
      linkSite: 'https://meuprojeto3.com',
    },
    {
        imagem: foto4,
        descricao: 'Aenean ut eros et nisl sagittis vestibulum. Integer ante arcu.',
        linkGithub: 'https://github.com/exemplo/repo4',
        linkSite: 'https://meuprojeto4.com',
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
