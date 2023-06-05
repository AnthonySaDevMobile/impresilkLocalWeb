import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Mousewheel } from "swiper";
import "swiper/swiper-bundle.css";
import { FaStar } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import tag from "../../assets/tag.png"

SwiperCore.use([Scrollbar]);

const ScrollCasesVertical = () => {
  const casesCollectionRef = collection(db, "cases");
  const [cases, setCases] = useState([]);
  const [casesForBox, setCasesForBox] = useState(null);

  useEffect(() => {
    const getDepoiments = async () => {
      const data = await getDocs(casesCollectionRef);
      const casesData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setCases(casesData);

      if (casesData.length > 0) {
        setCasesForBox(casesData[0]); // Define o primeiro item como selectedBox
      }
    };

    getDepoiments();
  }, []);

   function handleBox(index) {
    setCasesForBox(cases[index]);

  }

  return (
    <div className="flex w-full justify-around">
      <div className="h-screen flex items-center justify-start flex-col">
        <Swiper
          direction="vertical"
          slidesPerView={3}
          mousewheel={true}
          scrollbar={{
            draggable: true,
            dragClass: "swiper-scrollbar-drag",
            verticalClass: "swiper-scrollbar-vertical",
            dragSize: 80,
            hide: false,
          }}
          modules={{ Scrollbar, Mousewheel }}
          className="h-[400px] w-full"
        >
          {cases.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                onClick={() => handleBox(index)}
                className="bg-bg-item cursor-pointer h-32 mx-10 p-3 gap-2 flex items-center justify-evenly"
              >
                <div className="w-[80px] h-[80px] bg-zinc-100">
                  <img
                    src={item.imagem}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col px-2">
                  <div className="flex items-center text-center justify-center gap-1 text-yellow-500">
                    <p>{item.nota}</p>
                    <FaStar color="yellow" />
                    <strong className="text-white">{item.nome}</strong>
                    <p className="text-white">{item.segundoNome}</p>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">{item.descricao}</p>
                    <p className="text-sm text-yellow-400">
                      Entregue em {item.tempo}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className="w-[600px] sm:h-[400px] md:mt-0 mt-5 bg-white relative"
        style={{
          backgroundImage: `url(${casesForBox?.imagem})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="ml-10 sm:h-1/4 h-[50px] w-[80px] relative">
          <img src={tag} className="object-cover" alt="tag" />
          <div className=" flex flex-col items-center pl-4 justify-center w-9/12 absolute top-0 left-0 right-0 bottom-0">
            <FaStar color="white" />
            <p className="text-xl">{casesForBox?.nota}.0</p>
            <p className="text-xs">{casesForBox?.nome}</p>
            <p className="text-xs">{casesForBox?.segundoNome}</p>
          </div>
        </div>

        <div className="w-full h-full absolute top-0 flex opacity-0 hover:opacity-100 items-center justify-center transition-opacity duration-500">
          
            <p className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md">
              BOOK
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default ScrollCasesVertical;
