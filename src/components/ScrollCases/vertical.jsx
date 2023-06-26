import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import SwiperCore, { Mousewheel, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import tag from "../../assets/tag.png";
import { db } from "../../services/firebaseConnection";

SwiperCore.use([Scrollbar]);

const ScrollCasesVertical = () => {
  const casesCollectionRef = collection(db, "cases");
  const [cases, setCases] = useState([]);
  const [casesForBox, setCasesForBox] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
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


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

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

        <div onClick={() => setIsOpen(true)} className="w-full cursor-pointer h-full absolute top-0 flex opacity-0 hover:opacity-100 items-center justify-center transition-opacity duration-500">
          <p className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md">
            BOOK
          </p>
        </div>
      </div>
      {isOpen ?
        <div className="h-screen w-full fixed top-0 left-0 z-20 modal-container" style={{ overflowY: 'auto' }}>
        <div className="bg-black bg-opacity-[.79] h-fit w-full z-0 flex flex-col items-center justify-start pt-40 pb-10">
          <div className="z-50 w-11/12 text-left py-5" >
            <button className="bg-red-500 p-2 rounded font-bold" onClick={() => setIsOpen(false)}>Fechar</button>
          </div>
          <h1 className="font-extrabold text-[2rem] mb-10">{casesForBox?.nome} {casesForBox?.segundoNome}</h1>
          <div className="grid gap-20 w-11/12" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))` }}>
            <div className="bg-zinc-100 rounded">
              <img
                src={casesForBox?.imagem}
                className="object-cover w-full h-full rounded opacity-100"
              />
            </div>
            {casesForBox?.book && (
              <div className="bg-zinc-100 rounded">
                <img
                  src={casesForBox.book}
                  className="object-cover w-full h-full rounded opacity-100"
                />
              </div>
            )}
            {casesForBox?.book2 && (
              <div className="bg-zinc-100 rounded">
                <img
                  src={casesForBox.book2}
                  className="object-cover w-full h-full rounded opacity-100"
                />
              </div>
            )}
            {casesForBox?.book3 && (
              <div className="bg-zinc-100 rounded">
                <img
                  src={casesForBox.book3}
                  className="object-cover w-full h-full rounded opacity-100"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 font-semibold mt-10 text-center text-xl text-zinc-500">
            <span className="text-sm">Descrição:</span>
            <p className="text-white">{casesForBox?.descricao}</p>
            <spa className="mt-5 text-sm">Tempo de entrega:</spa>
            <p className="text-white">{casesForBox?.tempo}</p>
          </div>
        </div>
      </div>
      

        : <></>}

    </div>
  );
};

export default ScrollCasesVertical;
