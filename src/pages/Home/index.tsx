import React from "react";
import { Container } from "./styles";
import madMageBanner from "../../images/MadMageBanner.svg";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <Container>
      <Banner
        img={madMageBanner}
        header="Criando Seu Personagem!"
        principalText="Crie seu personagem facilmente com sistema de escolhas!"
        footer="Usando o sistema de escolha é possível fazer uma criação de personagem intuitiva e interativa, com informações sobre cada classe e raça."
        buttonText="Testar agora!"
        toLink="/characters"
      />
    </Container>
  );
};

export default Home;
