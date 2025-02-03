import Header from "../Components/Header/index";
import Sobre from "../Components/Sobre/index";
import ProjetosCarrosel from "../Components/ProjetosCarrosel/index";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Sobre />
      <ProjetosCarrosel />
      <Footer />
    </div>
  );
}

export default Home;