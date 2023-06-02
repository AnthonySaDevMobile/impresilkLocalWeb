import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import { Pagination, Navigation, Autoplay,A11y } from "swiper";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export default function CarouselHome() {
  
  const homeCollectionRef = collection(db, "home");
  const [homeImages, setHomeImages] = useState([])

  useEffect(() => {
    const getHomeImages = async () => {
      const data = await getDocs(homeCollectionRef);
      setHomeImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getHomeImages();
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState(false);

  const pagination = {
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "0"+(index + 1) + "</span>";

    },
    clickable: true,
    bulletClass: "swiper-pagination-bullet-1",
    bulletActiveClass: "swiper-pagination-bullet-active-1",
  };

  return (
    <>
      <Swiper
        centeredSlides={true}
        loop={true}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        autoplay={{
          delay: 2000,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={pagination}
        onInit={() => setInit(true)}
        className="w-full h-screen"
      >
       {homeImages.map((imagem)=>(
        <SwiperSlide key={imagem.id} className="bg-bg-slide">
          <img
            src={imagem.imagem}
            alt="carousel-image"
            className="w-full inset-0 opacity-60 h-full object-cover brightness-50"
          />
        </SwiperSlide>
       ))}

        
        
      </Swiper>
      <button ref={prevRef} className="cursor-pointer absolute top-1/2 sm:left-20 left-0 z-10">
      <FaArrowCircleLeft color="white" size={32} className="opacity-20"/>
      </button>
      <button ref={nextRef} className="cursor-pointer absolute top-1/2 sm:right-20 right-0 z-10">
      <FaArrowCircleRight color="white" size={32} className="opacity-20"/>
      </button>
    </>
  );
}
