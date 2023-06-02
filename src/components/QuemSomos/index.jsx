import React, { useState, useEffect } from "react";

import impresilk from "../../assets/impresilk.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

import Modal from "react-modal";

export default function QuemSomos() {
 
  Modal.setAppElement('body');
  const [texts, setTexts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('modal-open');
  };


  const quemSomosRef = collection(db, "quemSomos");

  useEffect(() => {
    const getQuemSomos = async () => {
      const data = await getDocs(quemSomosRef);
      setTexts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getQuemSomos();
  }, []);

  return (
    <div
      className="w-full bg-zinc-100 md:pb-24 pt-10 md:h-fit pb-96 mt-10"
      id="sobre"
    >
      <div className="mt-10 sm:w-9/12 sm:m-auto">
        <p className="w-[60px] h-[2px] bg-blue-600 my-10"></p>
        <div className="flex items-center sm:flex-row flex-col justify-between h-80">
          <div className="sm:w-1/2 sm:px-0 px-8">
            <p className="tracking-widest text-zinc-500 text-xs mt-5">
              QUEM SOMOS
            </p>
            <h1 className="text-lg mt-5">Porque nos</h1>
            <strong className="text-lg mb-10">Escolher?</strong>

            {texts.map((item) => (
              <div key={item.id}>
                <p className="mt-5">{item.texto}</p>
                <button
                  onClick={openModal}
                  className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10"
                >
                  LER MAIS
                </button>
                <Modal
                  isOpen={isOpen} onRequestClose={closeModal}
                  contentLabel="Texto Completo"
                  className="seu-modal z-50"
                  overlayClassName="seu-modal-overlay"
                >
                  <div className="modal-content">
                    <h2 className="modal-title">História Completa</h2>
                    <p className="modal-text">{item.textoCompleto}</p>
                  </div>
                </Modal>
              </div>
            ))}
          </div>
          <div className="md:w-[600px]  md:h-[300px]  flex items-center justify-center">
            <img src={impresilk} alt="logo" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
