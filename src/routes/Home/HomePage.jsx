import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/Banner/'
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

const { categories, homepage } = dadosIniciais;

function Home() {
  return (
    <div>
      <Menu />

      <BannerMain 
        videoTitle={homepage.title}
        url={homepage.url}
        videoDescription={"FATEC - MOGI MIRIM"} 
      />

      {
        categories.map(cat => {
          return (
            <Carousel category={cat}/>
          )
        })
      }

      <Footer />
    </div>
  );
}

export default Home;