import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/carrossel.css";

export default function NossasHistorias() {
  const [size, setSize] = useState(100);
  const { ref, inView } = useInView({
    threshold: 0.1, // Zoom começa quando 10% do componente é visível
  });

  useEffect(() => {
    if (inView) {
      const handleScroll = () => {
        const newSize = 100 + (window.scrollY - window.innerHeight) * 0.05;
        setSize(newSize);
      };

      // Adiciona o evento de rolagem enquanto o componente está visível
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll); // Limpeza
      };
    } else {
      setSize(100); // Reseta o zoom ao sair da visualização
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="container-historias"
      style={{ backgroundSize: `${size}vw ${size}vh` }}
      id="historias"
    >
      <h1>Nossas Histórias</h1>
      <div className="container-carrossel">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="carousel"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="slide-content">
              <div className="slide-image">
                <img src="/placeholders/img.jpg" />
              </div>
              <div className="slide-text">
                <h3>Lorem ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slide-content">
              <div className="slide-image">
                <img src="/placeholders/img.jpg" />
              </div>
              <div className="slide-text">
                <h3>Lorem ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
