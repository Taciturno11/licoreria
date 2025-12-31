import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import banner1 from '../assets/portada1.jpg'; 

function HeroCarousel() {
  return (
    // 1. Quitamos mt-[70px] fijo y usamos pt-[70px] para que sea parte del flujo
    // 2. CAMBIO CLAVE: Quitamos h-[500px] y usamos 'aspect' para mantener la proporción
    <div className="w-full pt-[75px] bg-black"> 
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        {/* --- SLIDE 1 --- */}
        <SwiperSlide>
          {/* Usamos w-full y h-auto para que la imagen mande en la altura */}
          <div className="w-full relative">
            <img 
              src={banner1} 
              alt="Chupa Causa Ofertas" 
              // CAMBIO: 'object-contain' asegura que se vea TODO sin recortar nada
              // 'w-full' asegura que ocupe todo el ancho
              className="w-full h-auto object-contain md:max-h-[600px] mx-auto" 
            />
          </div>
        </SwiperSlide>

        {/* --- SLIDE 2 (Ejemplo) --- */}
        <SwiperSlide>
           {/* Ajustamos este slide para que tenga una altura similar a la imagen (aprox) */}
           <div className="w-full aspect-[21/9] bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center text-white text-3xl font-bold">
              ¡Pronto más promos! 🚀
           </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default HeroCarousel;