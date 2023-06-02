import React, { useState, useEffect } from "react";
import { FaImage, FaPlayCircle, FaSearch, FaStar } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Portfolio() {
  const portfolioCollectionRef = collection(db, "portfolio");
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [portfolioImages2, setPortfolioImages2] = useState([]);
  const [portfolioImages3, setPortfolioImages3] = useState([]);
  const [portfolioImages4, setPortfolioImages4] = useState([]);
  const [portfolioImages5, setPortfolioImages5] = useState([]);
  const [portfolioImages6, setPortfolioImages6] = useState([]);
  const [portfolioImages7, setPortfolioImages7] = useState([]);
  const [portfolioImages8, setPortfolioImages8] = useState([]);
  const [portfolioImages9, setPortfolioImages9] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);
  const allImages = [
    ...portfolioImages,
    ...portfolioImages2,
    ...portfolioImages3,
    ...portfolioImages4,
    ...portfolioImages5,
    ...portfolioImages6,
    ...portfolioImages7,
    ...portfolioImages8,
    ...portfolioImages9,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const getPortfolioImages = async () => {
      const data = await getDocs(portfolioCollectionRef);
      setPortfolioImages([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0],
      ]);
      setPortfolioImages2([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[1],
      ]);
      setPortfolioImages3([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[2],
      ]);
      setPortfolioImages4([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[3],
      ]);
      setPortfolioImages5([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[4],
      ]);
      setPortfolioImages6([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[5],
      ]);
      setPortfolioImages7([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[6],
      ]);
      setPortfolioImages8([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[7],
      ]);
      setPortfolioImages9([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[8],
      ]);
    };
    getPortfolioImages();
  }, []);

  const fullScreenView = (id, state) => {
    let selected;
    switch (state) {
      case "portfolio1":
        selected = portfolioImages.find((foto) => foto.id === id);
        break;
      case "portfolio2":
        selected = portfolioImages2.find((foto) => foto.id === id);
        break;

      case "portfolio3":
        selected = portfolioImages3.find((foto) => foto.id === id);
        break;

      case "portfolio4":
        selected = portfolioImages4.find((foto) => foto.id === id);
        break;

      case "portfolio5":
        selected = portfolioImages5.find((foto) => foto.id === id);
        break;

      case "portfolio6":
        selected = portfolioImages6.find((foto) => foto.id === id);
        break;

      case "portfolio7":
        selected = portfolioImages7.find((foto) => foto.id === id);
        break;

      case "portfolio8":
        selected = portfolioImages8.find((foto) => foto.id === id);
        break;

      case "portfolio9":
        selected = portfolioImages9.find((foto) => foto.id === id);
        break;

      default:
        selected = null;
    }

    setSelectedImage(selected);
    setIsFullScreen(true);
  };

  return (
    <div className="bg-white w-full h-fit text-center" id="portifolio">
      <p className="tracking-widest  font-semibold text-xs mt-5 text-zinc-400">
        PORTIFÓLIO
      </p>
      <div className="flex gap-2 mt-5 text-xl md:text-3xl items-center justify-center">
        <p>Bonito</p>
        <p>&</p>
        <strong>Confiável</strong>
        <p>&</p>
        <strong>Durável</strong>
      </div>

      <div className="bg-white flex flex-col h-fit">
        <div className="flex mt-10">
          {portfolioImages.map((foto) => (
            <div key={foto.id} className="relative w-1/4 h-36 md:h-56 ">
              <img
                src={foto.imagem}
                alt="image portfolio"
                className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                <FaSearch
                  color="white"
                  size={30}
                  className="absolute top-1/2 right-1/2"
                  onClick={() => fullScreenView(foto.id, "portfolio1")}
                />
              </div>
            </div>
          ))}
          {portfolioImages2.map((foto) => (
            <div key={foto.id} className="relative w-2/4 h-36 md:h-56">
              <img
                src={foto.imagem}
                alt="image portfolio"
                className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                <FaSearch
                  color="white"
                  size={30}
                  className="absolute top-1/2 right-1/2"
                  onClick={() => fullScreenView(foto.id, "portfolio2")}
                />
              </div>
            </div>
          ))}
          {portfolioImages3.map((foto) => (
            <div key={foto.id} className="relative w-1/4 h-36 md:h-56">
              <img
                src={foto.imagem}
                alt="image portfolio"
                className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                <FaSearch
                  color="white"
                  size={30}
                  className="absolute top-1/2 right-1/2"
                  onClick={() => fullScreenView(foto.id, "portfolio3")}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex">
          {portfolioImages4.map((foto) => (
            <div key={foto.id} className="relative w-1/4 h-36 md:h-56">
              <img
                src={foto.imagem}
                alt="image portfolio"
                className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                <FaSearch
                  color="white"
                  size={30}
                  className="absolute top-1/2 right-1/2"
                  onClick={() => fullScreenView(foto.id, "portfolio4")}
                />
              </div>
            </div>
          ))}
          {portfolioImages5.map((foto) => (
            <div key={foto.id} className="relative w-1/4 h-36 md:h-56">
              <img
                src={foto.imagem}
                alt="image portfolio"
                className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                <FaSearch
                  color="white"
                  size={30}
                  className="absolute top-1/2 right-1/2"
                  onClick={() => fullScreenView(foto.id, "portfolio5")}
                />
              </div>
            </div>
          ))}
          {portfolioImages6.map((foto) => (
            <div key={foto.id} className="relative w-2/4 h-36 md:h-56">
              <img
                src={foto.imagem}
                alt="image portfolio"
                className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                <FaSearch
                  color="white"
                  size={30}
                  className="absolute top-1/2 right-1/2"
                  onClick={() => fullScreenView(foto.id, "portfolio6")}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          {portfolioImages7.map((foto) => (
            <div key={foto.id} className="relative w-2/4 h-36 md:h-56">
              <img
                src={foto.imagem}
                alt="image portfolio"
                className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                <FaSearch
                  color="white"
                  size={30}
                  className="absolute top-1/2 right-1/2"
                  onClick={() => fullScreenView(foto.id, "portfolio7")}
                />
              </div>
            </div>
          ))}
          {portfolioImages8.map((foto) => (
            <div key={foto.id} className="relative w-2/4 h-36 md:h-56">
              <img
                src={foto.imagem}
                alt="image portfolio"
                className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                <FaSearch
                  color="white"
                  size={30}
                  className="absolute top-1/2 right-1/2"
                  onClick={() => fullScreenView(foto.id, "portfolio8")}
                />
              </div>
            </div>
          ))}
          {portfolioImages9.map((foto) => (
            <div key={foto.id} className="relative w-1/4 h-36 md:h-56">
              <img
                src={foto.imagem}
                alt="image portfolio"
                className="w-full h-full object-cover absolute "
              />
              <div className="relative bg-zinc-800 opacity-0 hover:opacity-100 hover:bg-opacity-70 w-full h-full z-20 transition-all ease-in delay-100">
                <FaSearch
                  color="white"
                  size={30}
                  className="absolute top-1/2 right-1/2"
                  onClick={() => fullScreenView(foto.id, "portfolio9")}
                />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowCarousel(true)}
          className=" md:w-1/4 m-auto text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10"
        >
          VER TUDO
        </button>
      </div>
      {isFullScreen && (
        <Modal
          isOpen={isFullScreen}
          onRequestClose={() => setIsFullScreen(false)}
          className="modal-overlay"
          overlayClassName="modal-backdrop"
        >
          <img
            src={selectedImage.imagem}
            alt="image portfolio"
            className="w-full h-full object-cover object-center"
            onClick={() => setIsFullScreen(false)}
          />
        </Modal>
      )}
      {showCarousel && (
        <div>
          <button
            onClick={() => setShowCarousel(false)}
            className="bg-red-500 px-4 py-1 my-5 rounded text-white font-semibold "
          >
            FECHAR
          </button>
          <Slider
            dots={true}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {allImages.map((foto) => (
              <div key={foto.id} className="relative w-full h-[700px]">
                <img
                  src={foto.imagem}
                  alt="image portfolio"
                  className="w-full h-full absolute object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
