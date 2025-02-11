
import { useParams } from 'react-router-dom';
import Projeto1 from "../../assets/Capa ProjetoAPPReceitas.png";
import Projeto2 from "../../assets/Capa ProjetoTFC.png";
import Projeto3 from "../../assets/Capa ProjetoAgrix.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Detalhes.css";


function Detalhes() {
    const { id } = useParams();
    const descricaoProjeto1 = "Este é um aplicativo web responsivo desenvolvido durante meus estudos na Trybe. Ele permite explorar receitas de alimentos e bebidas, seguir instruções detalhadas e favoritar preferidas. O projeto utiliza as APIs Meals (https://www.themealdb.com/) e Cocktail (https://www.thecocktaildb.com/). Foi desenvolvido em um sprint com 6 pessoas, onde usamos Kanban no Trello e comunicação via Slack para organização. Minha contribuição principal foi na comunicação com a API, montagem de componentes e testes. Embora não tenha desenvolvido toda a lógica da aplicação, fui responsável por todo o CSS. O projeto ainda não está completamente finalizado e pode apresentar alguns bugs ou erros visuais no CSS.";
    const descricaoTFC = "O TFC é um site informativo sobre partidas e classificações de futebol! ⚽️ No desenvolvimento desse projeto, fui responsável por criar a API seguindo a abordagem TDD e garantir a integração das aplicações usando Docker Compose, para que todas funcionassem consumindo um banco de dados. Para isso, desenvolvi um back-end dockerizado, modelando os dados com Sequelize e implementando todas as regras de negócio definidas no projeto. O objetivo era garantir que a API fornecesse corretamente os dados necessários para o front-end já disponível, permitindo que a tabela de classificação fosse exibida corretamente para os usuários do sistema.";
    ``
    const descricaoAgrix = "Essa é uma aplicação Spring Boot que desenvolvi ao final dos meus estudos na Trybe. A aplicação possui as funcionalidades básicas de criar, ler, atualizar e deletar dados relacionados a fazendas, plantações e fertilizantes, tudo com base no ambiente Spring, usando Spring Data JPA, Spring Web, Spring Security e Spring Boot.";

    
    const projetos = [
        {
          id: 1,
          nome: "App Receitas",
          imagem: Projeto1,
          descricao: descricaoProjeto1,
          linkGithub: 'https://github.com/Gustavo-GPG/AppReceitasDeploy',
          linkSite: 'https://gustavo-gpg.github.io/AppReceitasDeploy/',
        },
        {
          id: 2,
          nome: "Futebol Clube",
          imagem: Projeto2,
          descricao: descricaoTFC,
          linkGithub: 'https://github.com/Gustavo-GPG/FutebolClube',
          linkSite: 'https://github.com/exemplo/repo2',
        },
        {
          id: 3,
          nome: "Agrix",
          imagem: Projeto3,
          descricao: descricaoAgrix,
          linkGithub: 'https://github.com/Gustavo-GPG/Agrix',
          linkSite: 'https://github.com/exemplo/repo2',
        },
      ];

      const projeto = projetos.find(proj => proj.id === parseInt(id || '0'));

      if (!projeto) {
        return <h2>Projeto não encontrado</h2>;
      }


  return (
    <div>
        <div className="detalhe-projeto">
            <h1>{projeto.nome}</h1>
            <img src={projeto.imagem} alt={projeto.nome} />
            <p>{projeto.descricao}</p>

            <div className="icones-detales">
                <a href={projeto.linkGithub} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} />
                    Visite o repositório
                </a>
                <a href={projeto.linkSite} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt size={20} />
                    Acesse o site
                </a>
            </div>
        </div>
    </div>
  );
}

export default Detalhes;