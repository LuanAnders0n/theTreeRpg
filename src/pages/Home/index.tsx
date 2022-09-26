import React from 'react';
import { CardGroup, Container } from './styles';
import madMageBanner from '../../images/MadMageBanner.svg';
import Banner from '../../components/Banner';
import Card from '../../components/Card';

const Home = () => {
  return (
    <Container>
      <Banner
        img={madMageBanner}
        header="Criando Seu Personagem!"
        principalText="Organize sua campanha e crie novas aventuras!"
        footer="Usando o sistema de escolha é possível fazer uma criação de personagem intuitiva e interativa, com informações sobre cada classe e raça."
        buttonText="Cadastre-se agora!"
        toLink="/signUp"
        shadow
      />
      <CardGroup>
        <Card
          img="imagem.png"
          title="Insira aqui"
          text="Caraca olha que site maneiro mano"
        />
        <Card
          img="imagem.png"
          title="Insira aqui"
          text="Caraca olha que site maneiro mano"
        />
        <Card
          img="imagem.png"
          title="Insira aqui"
          text="Caraca olha que site maneiro mano"
        />
      </CardGroup>
    </Container>
  );
};

export default Home;
