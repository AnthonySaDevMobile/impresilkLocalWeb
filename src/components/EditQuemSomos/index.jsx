import React, { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export default function EditQuemSomos() {

  const quemSomosRef = collection(db, "quemSomos");
  const quemSomosId = "AYn362K1Qq1jvcuVgISa";
  const [texts, setTexts] = useState([]);
  const [textSmall, setTextSmall] = useState("")
  const [textLarge, setTextLarge] = useState("")
  const [textButton, setTextButton] = useState("Enviar alterações");

  useEffect(() => {
    const getQuemSomos = async () => {
      const data = await getDocs(quemSomosRef);
      setTexts([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0],
      ]);
    };
    getQuemSomos();
  }, []);

  async function handleSave() {
    setTextButton("Enviando...");
    const quemSomosRed = doc(db, "quemSomos", quemSomosId);
    const updatedData = {
      texto: textSmall,
      textoCompleto: textLarge,
    };

    await setDoc(quemSomosRed, updatedData)
      .then(() => {
  
      })
      .catch((e) => {
    
      });
    setTextButton("Enviado!");
  }



  return (
    <div className="py-10 bg-zinc-200 flex gap-5 flex-col items-center justify-center">
          <h1 className="text-3xl">Quem Somos</h1>
          <p>Alterações para texto exibido na tela</p>
          <textarea style={{resize:"none"}} className='w-9/12 h-[300px] px-2' onChange={(e)=>setTextSmall(e.target.value)}/>
          <p>Alterações para texto exibido ao abrir "Leia Mais"</p>
          <textarea style={{resize:"none"}} className='w-9/12 h-[300px] px-2' onChange={(e)=>setTextLarge(e.target.value)}/>
          <button onClick={()=>handleSave()} className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10  font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
            {textButton}
          </button>
        </div>

  )
}
