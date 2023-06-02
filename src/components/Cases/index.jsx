import React, { useState, useEffect } from "react";
import ScrollCasesHorizontal from "../ScrollCases/horizontal";
import ScrollCasesVertical from "../ScrollCases/vertical";
import caseBackground from "../../assets/caseBackground.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";


export default function Cases() {
  const casesCollectionRef = collection(db, "cases");
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const getDepoiments = async () => {
      const data = await getDocs(casesCollectionRef);
      const casesData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setCases(casesData);
    };
    getDepoiments();
  }, []);

  return (
    <div
      className="bg-bg-slide relative h-[600px] md:h-fit w-full md:px-0 px-2 md:pb-20 pb-16 text-white"
      id="cases"
    >
      <img
        src={caseBackground}
        alt="caseBackground"
        className="w-full inset-0 absolute opacity-20 h-full object-cover brightness-50"
      />
      <div className="sm:w-9/12 sm:m-auto pt-10">
        <p className="w-[60px] h-[2px] bg-yellow-600 "></p>
        <div className="relative ">
          <p className="tracking-widest  font-semibold text-xs mt-5">
            CASES DE SUCESSOS
          </p>
          <div className="flex justify-between items-center text-xs sm:gap-40 gap-11 mt-10">
            <p className="text-xs sm:text-3xl">
              Trabalhos que se tornam <strong>Referência</strong>
            </p>
            <p className="sm:text-3xl">
              Cidade: <strong>Montes Claros</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        {/*Scroll Vertical */}
        <div className="md:flex w-full hidden h-96 ">
          <ScrollCasesVertical />
        </div>
        {/*Scroll Horizontal */}
        <div className="md:hidden w-full h-64">
          <ScrollCasesHorizontal />
        </div>
      </div>
    </div>
  );
}
