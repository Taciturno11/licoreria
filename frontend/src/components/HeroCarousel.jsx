import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import banner1 from '../assets/portada1.png'; 

function HeroCarousel() {
  return (
    // 1. EL CONTENEDOR PRINCIPAL
    // 'w-full': Ocupa todo el ancho de la pantalla.
    // 'mt-0': Pegado al navbar (o puedes darle mt-4 si quieres aire).
    <div className="w-full mt-4">
      
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 50000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
        // 2. LA ALTURA FIJA (RESPONSIVE)
        // h-[300px]: En celular.
        // md:h-[400px]: En tablet.
        // lg:h-[500px]: En pantallas grandes (PC).
        className="mySwiper w-full h-[300px] md:h-[400px] lg:h-[300px]"
      >
        
        {/* --- SLIDE 1 --- */}
        <SwiperSlide>
          <div className="w-full h-full">
            <img 
              src={banner1} 
              alt="Chupa Causa Ofertas" 
              // 3. LA CLAVE DEL ÉXITO: 'object-cover'
              // Esto hace que la imagen llene el 100% del cuadro sin deformarse.
              className="w-full h-full object-cover" 
            />
          </div>
        </SwiperSlide>

        {/* --- SLIDE 2 (Ejemplo) --- */}
        <SwiperSlide>
           <div className="w-full h-full bg-gradient-to-r from-blue-900 to-black flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                  ¡Tus Tragos Favoritos<br/>
                  <span className="text-yellow-400">En la puerta de tu casa!</span> 🛵
              </h2>
           </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default HeroCarousel;