import React, { useState, useEffect } from "react";
import { FaUpload, FaStar, FaTrash, FaEdit } from "react-icons/fa";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  query
} from "firebase/firestore";
import { db, storage } from "../../services/firebaseConnection";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function EditCases() {
  const casesCollectionRef = collection(db, "cases");

  const [avatarUrlCases, setAvatarUrlCases] = useState("");
  const [avatarUrlCasesFirebase, setAvatarUrlCasesFirebase] = useState("");
  const [imageAvatarCases, setImageAvatarCases] = useState(null);
  const [nome, setNome] = useState("");
  const [nome2, setNome2] = useState("");
  const [nota, setNota] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tempo, setTempo] = useState("");
  const [cases, setCases] = useState([]);
  const [textButton, setTextButton] = useState("Enviar alterações");

  useEffect(() => {
    const getDepoiments = async () => {
      const data = await getDocs(casesCollectionRef);
      const casesData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setCases(casesData);
    };
    getDepoiments();

  }, []);

  async function sendCase(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    const imageUrl = await handleUpload();
    const caseData = {
      nome: nome,
      segundoNome: nome2,
      nota: nota,
      descricao: descricao,
      tempo: tempo,
      imagem: imageUrl,
    };

    await addDoc(collection(db, "cases"), caseData);
    setTextButton("Enviado!");

    const casesQuery = query(collection(db, "cases"));
    const casesSnapshot = await getDocs(casesQuery);
    const updatedCases = casesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCases(updatedCases);
    setNome("");
    setNome2("");
    setDescricao("");
    setTempo("");
    setNota("");
    setImageAvatarCases(null);
    setAvatarUrlCases("");
  }

  async function handleUpload() {
    if (avatarUrlCases !== null) {
      const imagesRef = ref(storage, `imagesCases/${imageAvatarCases.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, imageAvatarCases);

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
      return url;
    }
    return null;

  }

  async function deleteItem(id) {

    try {
      const itemRef = doc(db, "cases", id);
      await deleteDoc(itemRef);

      setCases((prevCases) => prevCases.filter((item) => item.id !== id));
    } catch (error) {

    }
  }

  function handleFileCases(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setTextButton("Enviar alterações");
      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarCases(image);
        setAvatarUrlCases(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarCases(null);
        return null;
      }
    }
  }

  return (
    <div className="py-10 flex flex-col gap-2 items-center justify-center text-white bg-bg-slide px-2">
      <h1 className="text-3xl">Cases</h1>
      <p>Alterações para o scroll de items</p>
      <form
        className="mt-5 grid grid-rows-2 md:gap-2 text-black"
        onSubmit={sendCase}
      >
        <div>
          <label className="w-9/12 m-auto h-[150px]  z-10 bg-blue-950 rounded flex items-center justify-center cursor-pointer">
            <span className="absolute opacity-10">
              <FaUpload size={30} />
            </span>
            <input
              required
              className="hidden"
              type="file"
              onChange={handleFileCases}
            />

            <img
              src={avatarUrlCases}
              className="w-full h-full object-cover"
              alt="Foto do Case"
            />
          </label>
        </div>
        <div className="flex flex-col gap-4 px-2 rounded">
          <div className="flex gap-1">
            <input
              type="number"
              maxLength={1}
              placeholder="Nota"
              required
              onChange={(e) => setNota(e.target.value)}
              className="p-2"
            ></input>
            <input
              type="text"
              required
              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
              className="p-2"
            ></input>
            <input
              type="text"
              required
              placeholder="Segundo nome"
              onChange={(e) => setNome2(e.target.value)}
              className="p-2"
            ></input>
          </div>
          <input
            type="text"
            required
            placeholder="Descrição"
            onChange={(e) => setDescricao(e.target.value)}
            className="p-2"
          ></input>
          <input
            type="text"
            required
            placeholder="Tempo de entrega"
            onChange={(e) => setTempo(e.target.value)}
            className="p-2"
          ></input>
        </div>
        <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10  font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
          {textButton}
        </button>
      </form>

      <div className="mt-5 text-center">
        <p>Cases já existentes</p>

        {cases.map((item) => (
          <div
            key={item.id}
            className="mt-5 grid grid-cols-3 gap-4 bg-blue-950 p-4 rounded"
          >
            <div
              className="flex flex-col items-center justify-center gap-2"
              onClick={() => deleteItem(item.id)}
            >
              <span className="flex flex-col items-center gap-2">
                <FaTrash color="red" />
                <p>Deletar</p>
              </span>
            </div>
            <div className="w-[100px] h-[100px] bg-zinc-100">

              <img
                src={item.imagem}
                width="250"
                height="250"
                alt="Foto da Home"
                className="w-full h-full object-cover"
              />


            </div>
            <div className="flex flex-col px-2">
              <div className="flex items-center gap-1 text-yellow-500">
                <p>{item.nota}</p>
                <FaStar color="yellow" />
                <strong className="text-white">{item.nome} </strong>
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
        ))}
      </div>
    </div>
  );
}
