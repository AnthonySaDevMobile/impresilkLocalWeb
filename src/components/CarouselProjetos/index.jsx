import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import { Navigation, Autoplay } from "swiper";

import { collection, query, where, getDocs, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export default function CarouselProjetos() {
  
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const slidesPerView = isMobile ? 1 : 1.5;
  const projetosRef = collection(db, "projetos");
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const getProjetos = async () => {
      const data = await getDocs(projetosRef);
      const projetosData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
  
      setProjetos(projetosData);

    };
    getProjetos();
  }, []);
  
  const sortedProjetos = [...projetos].sort((a, b) => a.dataCriacao.toDate() - b.dataCriacao.toDate());
  
  return (
    <div className="relative">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        className="w-full h-1/2 relative mb-10"
      >
        {sortedProjetos.map((item) => (
          <div key={item.id} >
            <SwiperSlide>
              <div className="absolute bg-blue-800 p-4  z-10 text-white font-extrabold top-4 left-4 text-xs sm:top-6 sm:left-6 sm:text-lg" >
                <p>{item.dia}</p>
                <p>{item.mes}</p>
              </div>
              <img
                src={item.imagem}
                alt="Foto"
                className="w-full object-cover h-[500px]"
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <div>
        <div className="prev absolute top-1/2 left-2 z-10">
          {" "}
          <FaArrowCircleLeft color="white" size={32} className="opacity-50" />
        </div>
        <div className="next absolute top-1/2 right-2 z-10">
          {" "}
          <FaArrowCircleRight color="white" size={32} className="opacity-50" />
        </div>
      </div>
    </div>
  );
}
