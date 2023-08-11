import React from 'react';
import Menu from '../../components/Menu/index';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  return (
    <div>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[3].titulo}
        url={dadosIniciais.categorias[0].videos[3].url}
        videoDescription={"Rebirth"} 
      />
      <Carousel 
        ignoreFirstVideo
        category={
          // arrumado o carrosel maroto lindo
          dadosIniciais.categorias[0]}
        />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Footer />
    </div>
  );
}

export default Home;
