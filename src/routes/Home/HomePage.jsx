import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/Banner/'
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

const [music, series, animes, moves, games] = dadosIniciais.categorias;
const [ homeVideo ] = music.videos;


function Home() {
  return (
    <div>
      <Menu />

      <BannerMain 
        videoTitle={homeVideo.titulo}
        url={homeVideo.url}
        videoDescription={"Circus Maximus"} 
      />

      <Carousel 
        ignoreFirstVideo
        category={music}
        />

      <Carousel 
        ignoreFirstVideo
        category={series}
      />

      <Carousel 
        ignoreFirstVideo
        category={animes}
      />

      <Carousel 
        ignoreFirstVideo
        category={moves}
      />

      <Carousel 
        ignoreFirstVideo
        category={games}
      />

      <Footer />
    </div>
  );
}

export default Home;