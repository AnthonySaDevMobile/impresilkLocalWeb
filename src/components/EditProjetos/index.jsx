import React, { useState, useEffect } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  query,
  serverTimestamp
} from "firebase/firestore";
import { db, storage } from "../../services/firebaseConnection";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function EditProjetos() {
  const projetosRef = collection(db, "projetos");
  
  const [projetos, setProjetos] = useState([]);
  const [dia, setDia] = useState(null);
  const [mes, setMes] = useState("");
  const [textButton, setTextButton] = useState("Enviar alterações");
  const [avatarUrlProjetos, setAvatarUrlProjetos] = useState("");
  const [avatarUrlProjetosFirebase, setAvatarUrlProjetosFirebase] = useState("");
  const [imageAvatarProjetos, setImageAvatarProjetos] = useState(null);

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

  async function sendProjetos(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    const imageUrl = await handleUpload();
    
    const projetosData = {
      dia: dia,
      mes: mes,
      imagem: imageUrl,
      dataCriacao: serverTimestamp()
    };
  
    await addDoc(collection(db, "projetos"), projetosData);
    setTextButton("Enviado!");
  
    const projetosQuery = query(collection(db, "projetos"));
    const projetosSnapshot = await getDocs(projetosQuery);
    const updateProjetos = projetosSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProjetos(updateProjetos);
  
    setImageAvatarProjetos(null);
    setAvatarUrlProjetos("");
  }
  
  async function handleUpload() {
    if (imageAvatarProjetos !== null) {
      const imagesRef = ref(storage, `imagesProjetos/${imageAvatarProjetos.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, imageAvatarProjetos);
  
      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            reject(error);
          },
          () => {
            resolve();
          }
        );
      });
  
      const url = await getDownloadURL(imagesRef);
      return url;
    }
  
    return null;
  }

  async function deleteItem(id) {
    try {
      const itemRef = doc(db, "projetos", id);
      await deleteDoc(itemRef);
     
      setProjetos((prevProjetos) =>
        prevProjetos.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar o item:", error);
    }
  }

  function handleFileProjetos(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarProjetos(image);
        setAvatarUrlProjetos(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setAvatarUrlProjetos(null);
        return null;
      }
    }
  }
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl">Projetos</h1>
      <p>Alterações para a tag e para a imagem de fundo</p>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={sendProjetos}
      >
        <div className="flex flex-col mt-5">
          <input
            type="number"
            onChange={(e)=>setDia(e.target.value)}
            placeholder="Dia"
            className="bg-zinc-200 p-2 rounded"
          ></input>
          <input
            type="text"
            onChange={(e)=>setMes(e.target.value.toUpperCase())}
            maxLength={3}
            placeholder="Mês"
            className="bg-zinc-200 p-2 mt-5 rounded"
          ></input>
        </div>
        <label className="w-[400px] mt-10 m-auto h-[300px] z-10 bg-zinc-400 rounded flex items-center justify-center cursor-pointer">
          <span className="absolute opacity-">
            <FaUpload size={30} color="white" />
          </span>
          <input type="file" className="hidden" onChange={handleFileProjetos} />
          {imageAvatarProjetos === null ? (
            <img
              src={imageAvatarProjetos}
              alt="Foto do Projeto"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={avatarUrlProjetos}
              alt="Foto do Projeto"
              className="w-full h-full object-cover"
            />
          )}
        </label>
        <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10  font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
          {textButton}
        </button>
      </form>
      <div className="text-center mt-10 relative">
        <p className="mb-5">Projetos já cadastrados</p>
        {projetos.map((item) => (
          <div key={item.id}>
            <div className="w-[400px]  h-[300px] bg-zinc-100 mt-5 object-cover brightness-50">
              <img
                src={item.imagem}
                width="250"
                height="250"
                alt="Foto do projeto"
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" mt-5 cursor-pointer text-center flex items-center justify-center">
              <FaTrash
                color="red"
                size={30}
                onClick={() => deleteItem(item.id)}
              />
              <span className="font-extrabold">Deletar</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
