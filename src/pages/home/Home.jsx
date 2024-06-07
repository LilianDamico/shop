import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Topo from '../../components/topo/Topo';
import Banner from '../../components/banner/Banner';
import Rodape from '../../components/rodape/Rodape';
import './Home.css';

import fonte from '../../assets/fonte.jpg';
import placamae from '../../assets/placamae.jpg';
import keyboard from '../../assets/keyboard.png'; 
import laptop from '../../assets/laptop.png';
import gabinete from '../../assets/gabinete.png';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Home() {
  return (
    <div>
      <Topo />
      <Banner />
      <section className='carrocel'>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // significa renderizar o carrossel no lado do servidor
          infinite={true}
          autoPlay={true} // Você pode ajustar isso conforme necessário
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className='frame0'>
            <img src={fonte} alt='fonte' />
            <span>Fonte CX 750</span>
          </div>
          <div className='frame0'>
            <img src={placamae} alt='placamae' />
            <span>Motherboard MSI</span>
          </div>
          <div className='frame0'>
            <img src={keyboard} alt='keyboard' />
            <span>Acessórios "gamer"</span>
          </div>
          <div className='frame0'>
            <img src={laptop} alt='laptop' />
            <span>Laptops de todas as marcas</span>
          </div>
          <div className='frame0'>
            <img src={gabinete} alt='gabinete' />
            <span>Gabinetes para seu estilo de montagem!</span>
          </div>
        </Carousel>
      </section>
      <Rodape />
    </div>
  );
}

export default Home;

