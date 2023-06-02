import React, { useState, useEffect } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  query,
} from "firebase/firestore";
import { db, storage } from "../../services/firebaseConnection";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


export default function EditProdutos() {
  const produtosRef = collection(db, "produtos");
  const [avatarUrlProdutos, setAvatarUrlProdutos] = useState("");
  const [avatarUrlProdutosFirebase, setAvatarUrlProdutosFirebase] = useState("");
  const [imageAvatarProdutos, setImageAvatarProdutos] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [caracteristica, setCaracteristica] = useState("");
  const [textButton, setTextButton] = useState("Enviar alterações");

  useEffect(() => {
    const getProdutos = async () => {
      const data = await getDocs(produtosRef);
      const produtosData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setProdutos(produtosData);
    };
    getProdutos();
  }, []);

  async function sendProdutos(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    const imageUrl = await handleUpload();
    const produtosData = {
      categoria: categoria,
      caracteristica: caracteristica,
      descricao: descricao,
      imagem: imageUrl,
    };
    await addDoc(collection(db, "produtos"), produtosData);
    setTextButton("Enviado!");

    const produtosQuery = query(collection(db, "produtos"));
    const produtosSnapshot = await getDocs(produtosQuery);

    const updateProdutos = produtosSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProdutos(updateProdutos);
    setDescricao("");
    setCaracteristica("");
    setCategoria("");
    setImageAvatarProdutos(null);
    setAvatarUrlProdutos("");
  }

  async function handleUpload() {
    if (avatarUrlProdutos !== null) {
      const imagesRef = ref(storage, `imagesProdutos/${imageAvatarProdutos.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, imageAvatarProdutos);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => { },
          (error) => {
            reject(error);
          },
          () => {
            resolve();
          }
        );
      });

      const url = await getDownloadURL(imagesRef);
      setAvatarUrlProdutosFirebase(url);
      return url;
    }

    return null;
  }


  async function deleteItem(id) {

    try {
      const itemRef = doc(db, "produtos", id);
      await deleteDoc(itemRef);
  
      setProdutos((prevProdutos) =>
        prevProdutos.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar o item:", error);
    }
  }

  function handleFileProdutos(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarProdutos(image);
        setAvatarUrlProdutos(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarProdutos(null);
        return null;
      }
    }
  }
  return (
    <div className="py-10 bg-zinc-200 flex flex-col items-center justify-center">
      <h1 className="text-3xl">Produtos</h1>
      <p>Alterações para cada item</p>
      <form
        className="mt-5 w-fit flex flex-col items-center justify-center gap-2"
        onSubmit={sendProdutos}
      >
        <div className="flex items-center gap-5">
          <label className="w-9/12 mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
            <span className="absolute opacity-50">
              <FaUpload size={30} color="white" />
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileProdutos}
            />
            {imageAvatarProdutos === null ? (
              <img
                src={imageAvatarProdutos}
                width="250"
                height="250"
                alt="Foto do Produto"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={avatarUrlProdutos}
                className="w-full h-full object-cover"
                alt="Foto do Produto"
              />
            )}
          </label>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Categoria"
              onChange={(e) => setCategoria(e.target.value)}
              className="p-2 rounded"
            ></input>
            <input
              type="text"
              onChange={(e) => setCaracteristica(e.target.value)}
              placeholder="Característica"
              className="p-2 rounded"
            ></input>
            <input
              type="text"
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descrição"
              className="p-2 rounded"
            ></input>
          </div>
        </div>
        <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10  font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
          {textButton}
        </button>
      </form>

      <div className="mt-10 text-center">
        <p>Produtos já cadastrados:</p>

        {produtos.map((item) => (
          <div className="flex flex-col items-center" key={item.id}>
            <div className="flex mt-5 justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200">
                <img
                  src={item.imagem}
                  width="250"
                  height="250"
                  alt="Foto da Home"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-xl">{item.categoria}</strong>
                <p className="text-blue-800 font-extrabold text-sm">
                  {item.caracteristica}
                </p>
                <p className="text-zinc-500 mt-5 text-sm">{item.descricao}</p>
                <a
                  href={`https://api.whatsapp.com/send?phone=38999337788&text=Orçamento para ${encodeURIComponent(
                    item.categoria
                  )}, ${encodeURIComponent(
                    item.caracteristica
                  )}, ${encodeURIComponent(item.descricao)}`}
                  target="_blank"
                >
                  <button className="mt-5 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                    ORÇAMENTO
                  </button>
                </a>
              </div>
            </div>
            <span
              className="mt-5 flex gap-2"
              onClick={() => deleteItem(item.id)}
            >
              <FaTrash color="red" size={30} />
              <p className="font-extrabold">Deletar</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
