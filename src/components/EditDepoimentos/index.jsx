import React, { useState, useEffect } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db, storage } from "../../services/firebaseConnection";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FaUpload } from "react-icons/fa";
export default function EditDepoimentos() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatarUrl2, setAvatarUrl2] = useState(null);
  const [avatarUrl3, setAvatarUrl3] = useState(null);
  const [avatarUrlFirebase, setAvatarUrlFirebase] = useState(null);
  const [avatarUrl2Firebase, setAvatarUrl2Firebase] = useState(null);
  const [avatarUrl3Firebase, setAvatarUrl3Firebase] = useState(null);
  const [avatarUrlsDepoimento, setAvatarUrlDepoimento] = useState("");
  const [imageAvatarDepoimento, setImageAvatarDepoimento] = useState(null);
  const [avatarUrlsDepoimento2, setAvatarUrlDepoimento2] = useState("");
  const [imageAvatarDepoimento2, setImageAvatarDepoimento2] = useState(null);
  const [avatarUrlsDepoimento3, setAvatarUrlDepoimento3] = useState("");
  const [imageAvatarDepoimento3, setImageAvatarDepoimento3] = useState(null);
  const [empresa, setEmpresa] = useState("");
  const [empresa2, setEmpresa2] = useState("");
  const [empresa3, setEmpresa3] = useState("");
  const [nome, setNome] = useState("");
  const [nome2, setNome2] = useState("");
  const [nome3, setNome3] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [sobreNome2, setSobreNome2] = useState("");
  const [sobreNome3, setSobreNome3] = useState("");
  const [comentario, setComentario] = useState("");
  const [comentario2, setComentario2] = useState("");
  const [comentario3, setComentario3] = useState("");
  const [cargo, setCargo] = useState("");
  const [cargo2, setCargo2] = useState("");
  const [cargo3, setCargo3] = useState("");
  const [subCargo, setSubCargo] = useState("");
  const [subCargo2, setSubCargo2] = useState("");
  const [subCargo3, setSubCargo3] = useState("");
  const [facebook, setFacebook] = useState("");
  const [facebook2, setFacebook2] = useState("");
  const [facebook3, setFacebook3] = useState("");
  const [twitter, setTwitter] = useState("");
  const [twitter2, setTwitter2] = useState("");
  const [twitter3, setTwitter3] = useState("");
  const [twitch, setTwitch] = useState("");
  const [twitch2, setTwitch2] = useState("");
  const [twitch3, setTwitch3] = useState("");
  const [google, setGoogle] = useState("");
  const [google2, setGoogle2] = useState("");
  const [google3, setGoogle3] = useState("");
  const [instagram, setInstagram] = useState("");
  const [instagram2, setInstagram2] = useState("");
  const [instagram3, setInstagram3] = useState("");
  const [depoiments, setDepoiments] = useState([]);
  const [depoiments2, setDepoiments2] = useState([]);
  const [depoiments3, setDepoiments3] = useState([]);
  const [textButton, setTextButton] = useState("Enviar alterações");
  const [textButton2, setTextButton2] = useState("Enviar alterações");
  const [textButton3, setTextButton3] = useState("Enviar alterações");

  const depoimentCollectionRef = collection(db, "depoiments");

  const depoimentId1 = "AlgnFdwix44sbmXS3w94";
  const depoimentId2 = "BzxZrxWoQs9Gp8UAV3Ia";
  const depoimentId3 = "yJ2HO6c0jQEoBRufm6gc";

  useEffect(() => {
    const getDepoiments = async () => {
      const data = await getDocs(depoimentCollectionRef);
      setDepoiments([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0],
      ]);
      setDepoiments2([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[1],
      ]);
      setDepoiments3([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[2],
      ]);
    };
    getDepoiments();
  }, []);

  const getFileChangeHandler = (index) => (event) => {
    switch (index) {
      case depoimentId1:
        handleFileDepoimento(event);

        break;
      case depoimentId2:
        handleFileDepoimento2(event);

        break;
      case depoimentId3:
        handleFileDepoimento3(event);

        break;
      default:
        alert("Depoimento inválido");
    }
  };

  function handleFileDepoimento(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarDepoimento(image);
        setAvatarUrlDepoimento(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarDepoimento(null);
        return null;
      }
    }
    setTextButton("Enviar alterações");
  }
  function handleFileDepoimento2(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarDepoimento2(image);
        setAvatarUrlDepoimento2(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarDepoimento2(null);
        return null;
      }
    }
    setTextButton2("Enviar alterações");
  }
  function handleFileDepoimento3(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarDepoimento3(image);
        setAvatarUrlDepoimento3(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarDepoimento3(null);
        return null;
      }
    }
    setTextButton3("Enviar alterações");
  }

  async function handleSave(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    const depoimento = depoiments[0];
    const depoimentRef = doc(db, "depoiments", depoimentId1);
    handleUpload();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      empresa: empresa || depoimento.empresa,
      nome: nome || depoimento.nome,
      sobrenome: sobreNome || depoimento.sobrenome,
      comentario: comentario || depoimento.comentario,
      cargo: cargo || depoimento.cargo,
      subcargo: subCargo || depoimento.subcargo,
      facebook: facebook || depoimento.facebook,
      twitter: twitter || depoimento.twitter,
      twitch: twitch || depoimento.twitch,
      google: google || depoimento.google,
      instagram: instagram || depoimento.instagram,
      imagem: avatarUrlFirebase || depoimento.imagem,
    };

    await setDoc(depoimentRef, updatedData)
      .then(() => {
  
      })
      .catch((e) => {
   
      });
    setTextButton("Enviado!");
  }
  async function handleSave2(e) {
    e.preventDefault();
    setTextButton2("Enviando...");
    const depoimento = depoiments2[0];
    const depoimentRef2 = doc(db, "depoiments", depoimentId2);
    handleUpload2();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      empresa: empresa2 || depoimento.empresa,
      nome: nome2 || depoimento.nome,
      sobrenome: sobreNome2 || depoimento.sobrenome,
      comentario: comentario2 || depoimento.comentario,
      cargo: cargo2 || depoimento.cargo,
      subcargo: subCargo2 || depoimento.subcargo,
      facebook: facebook2 || depoimento.facebook,
      twitter: twitter2 || depoimento.twitter,
      twitch: twitch2 || depoimento.twitch,
      google: google2 || depoimento.google,
      instagram: instagram2 || depoimento.instagram,
      imagem: avatarUrl2Firebase || depoimento.imagem,
    };

    await setDoc(depoimentRef2, updatedData)
      .then(() => {
    
      })
      .catch((e) => {
     
      });
    setTextButton2("Enviado!");
  }
  async function handleSave3(e) {
    e.preventDefault();
    setTextButton3("Enviando...");
    const depoimento = depoiments3[0];
    const depoimentRef3 = doc(db, "depoiments", depoimentId3);
    handleUpload3();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      empresa: empresa3 || depoimento.empresa,
      nome: nome3 || depoimento.nome,
      sobrenome: sobreNome3 || depoimento.sobrenome,
      comentario: comentario3 || depoimento.comentario,
      cargo: cargo3 || depoimento.cargo,
      subcargo: subCargo3 || depoimento.subcargo,
      facebook: facebook3 || depoimento.facebook,
      twitter: twitter3 || depoimento.twitter,
      twitch: twitch3 || depoimento.twitch,
      google: google3 || depoimento.google,
      instagram: instagram3 || depoimento.instagram,
      imagem: avatarUrl3Firebase || depoimento.imagem,
    };
    await setDoc(depoimentRef3, updatedData)
      .then(() => {
    
      })
      .catch((e) => {

      });
    setTextButton3("Enviado!");
  }

  async function handleUpload() {
    if (avatarUrlsDepoimento !== null) {
      const imagesRef = ref(storage, `imagesDepoiments/${depoimentId1}`);
      await uploadBytes(imagesRef, imageAvatarDepoimento).then((snapshot) => {
      });
      const url = await getDownloadURL(ref(storage, `imagesDepoiments/${depoimentId1}`));
      setAvatarUrlFirebase(url);
    } else {
      return null;
    }
  }

  async function handleUpload2() {
    if (avatarUrlsDepoimento2 !== null) {
      const imagesRef = ref(storage, `imagesDepoiments/${depoimentId2}`);
      await uploadBytes(imagesRef, imageAvatarDepoimento2).then((snapshot) => {
      });
      const url = await getDownloadURL(ref(storage, `imagesDepoiments/${depoimentId2}`));
      setAvatarUrlFirebase(url);
    } else {
      return null;
    }
  }

  async function handleUpload3() {
    if (avatarUrlsDepoimento3 !== null) {
      const imagesRef = ref(storage, `imagesDepoiments/${depoimentId3}`);
      await uploadBytes(imagesRef, imageAvatarDepoimento3).then((snapshot) => {
      });
      const url = await getDownloadURL(ref(storage, `imagesDepoiments/${depoimentId3}`));
      setAvatarUrl3Firebase(url);
    } else {
      return null;
    }
  }

  return (
    <div className="py-10 bg-zinc-200 flex flex-col items-center justify-center">
      <h1 className="text-3xl">Depoimentos</h1>
      <p>Alterações para cada comentário</p>
     
     <div className="grid grid-cols-1 gap-5 font-semibold">

      {depoiments.map((depoiment) => (
        <form key={depoiment.id} onSubmit={handleSave} className="flex flex-col justify-center items-center">
          <div className="mt-5 flex flex-col gap-2">
           <label>Nome da Empresa</label>
            <input
              type="text"
              value={empresa}
              className="px-2 rounded"
              placeholder={depoiment.empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            ></input>
            <div className="flex gap-1">
           <label>Nome</label>
              <input
                type="text"
              className="px-2 rounded ml-2"
                value={nome}
                placeholder={depoiment.nome}
                onChange={(e) => setNome(e.target.value)}
              ></input>
           <label>Sobrenome</label>
              <input
                type="text"
              className="px-2 rounded ml-2"
                value={sobreNome}
                placeholder={depoiment.sobrenome}
                onChange={(e) => setSobreNome(e.target.value)}
              ></input>
            </div>
           <label>Depoimento</label>
            <textarea
              value={comentario}
              className="px-2 rounded"
              style={{resize:"none"}}
              placeholder={depoiment.comentario}
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>
           <label>Cargo</label>
            <input
              type="text"
              className="px-2 rounded"
              value={cargo}
              placeholder={depoiment.cargo}
              onChange={(e) => setCargo(e.target.value)}
            ></input>
           <label>Subcargo</label>
            <input
              type="text"
              className="px-2 rounded"
              value={subCargo}
              placeholder={depoiment.subcargo}
              onChange={(e) => setSubCargo(e.target.value)}
            ></input>
           <label>Link do Facebook</label>
            <input
              type="text"
              className="px-2 rounded"
              value={facebook}
              placeholder={depoiment.facebook}
              onChange={(e) => setFacebook(e.target.value)}
       
            ></input>
           <label>Link do Twitter</label>
            <input
              type="text"
              className="px-2 rounded"
              value={twitter}
              placeholder={depoiment.twitter}
              onChange={(e) => setTwitter(e.target.value)}
         
            ></input>
           <label>Link do Twitch</label>
            <input
              type="text"
              className="px-2 rounded"
              value={twitch}
              placeholder={depoiment.twitch}
              onChange={(e) => setTwitch(e.target.value)}
     
            ></input>
           <label>Link do Google</label>
            <input
              type="text"
              className="px-2 rounded"
              value={google}
              placeholder={depoiment.google}
              onChange={(e) => setGoogle(e.target.value)}
        
            ></input>
           <label>Link do Instagram</label>
            <input
              type="text"
              className="px-2 rounded"
              value={instagram}
              placeholder={depoiment.instagram}
              onChange={(e) => setInstagram(e.target.value)}
        
            ></input>
            <div className="mt-5 flex gap-2">
              <label className="w-9/12 m-auto h-[400px]  z-10 bg-blue-950 rounded flex items-center justify-center cursor-pointer">
                <span className="absolute opacity-30">
                  <FaUpload size={30} />
                </span>
                <input
                  className="hidden"
                  type="file"
                  onChange={getFileChangeHandler(depoiment.id)}
                />
                {imageAvatarDepoimento === null ? (
                  <img
                    src={depoiment.imagem}
                    width="300"
                    height="300"
                    alt="Foto de Perfil"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={avatarUrlsDepoimento}
                    width="300"
                    height="300"
                    alt="Foto de Perfil"
                    className="w-full h-full object-cover"
                  />
                )}
              </label>
            </div>
          </div>
          <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10  font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
            {textButton}
          </button>
        </form>
      ))}

      {depoiments2.map((depoiment) => (
        <form key={depoiment.id} onSubmit={handleSave2} className="flex flex-col justify-center items-center">
          <div className="mt-5 flex flex-col gap-2">
            <label>Nome da Empresa</label>
            <input
              type="text"
              value={empresa2}
              className="px-2 rounded"
              placeholder={depoiment.empresa}
              onChange={(e) => setEmpresa2(e.target.value)}
            ></input>
            <div className="flex gap-1">
              <label>Nome</label>
              <input
                type="text"
              className="px-2 rounded ml-2"
                value={nome2}
                placeholder={depoiment.nome}
                onChange={(e) => setNome2(e.target.value)}
              ></input>
              <label>Sobrenome</label>
              <input
                type="text"
              className="px-2 rounded ml-2"
                value={sobreNome2}
                placeholder={depoiment.sobrenome}
                onChange={(e) => setSobreNome2(e.target.value)}
              ></input>
            </div>
            <label>Depoimento</label>
            <textarea
              value={comentario2}
              className="px-2 rounded"
              style={{resize:"none"}}
              placeholder={depoiment.comentario}
              onChange={(e) => setComentario2(e.target.value)}
            ></textarea>
            <label>Cargo</label>
            <input
              type="text"
              className="px-2 rounded"
              value={cargo2}
              placeholder={depoiment.cargo}
              onChange={(e) => setCargo2(e.target.value)}
            ></input>
            <label>Subcargo</label>
            <input
              type="text"
              className="px-2 rounded"
              value={subCargo2}
              placeholder={depoiment.subcargo}
              onChange={(e) => setSubCargo2(e.target.value)}
            ></input>
            <label>Link do Facebook</label>
            <input
              type="text"
              className="px-2 rounded"
              value={facebook2}
              placeholder={depoiment.facebook}
              onChange={(e) => setFacebook2(e.target.value)}
              
            ></input>
            <label>Link do Twitter</label>
            <input
              type="text"
              className="px-2 rounded"
              value={twitter2}
              placeholder={depoiment.twitter}
              onChange={(e) => setTwitter2(e.target.value)}
         
            ></input>
            <label>Link da Twitch</label>
            <input
              type="text"
              className="px-2 rounded"
              value={twitch2}
              placeholder={depoiment.twitch}
              onChange={(e) => setTwitch2(e.target.value)}
           
            ></input>
            <label>Link do Google</label>
            <input
              type="text"
              className="px-2 rounded"
              value={google2}
              placeholder={depoiment.google}
              onChange={(e) => setGoogle2(e.target.value)}
          
            ></input>
            <label>Link do Instagram</label>
            <input
              type="text"
              className="px-2 rounded"
              value={instagram2}
              placeholder={depoiment.instagram}
              onChange={(e) => setInstagram2(e.target.value)}
        
            ></input>
            <div className="mt-5 flex gap-2">
              <label className="w-9/12 m-auto h-[400px]  z-10 bg-blue-950 rounded flex items-center justify-center cursor-pointer">
                <span className="absolute opacity-30">
                  <FaUpload size={30} />
                </span>
                <input
                  className="hidden"
                  type="file"
                  onChange={getFileChangeHandler(depoiment.id)}
                />
                {imageAvatarDepoimento2 === null ? (
                  <img
                    src={depoiment.imagem}
                    width="300"
                    height="300"
                    alt="Foto de Perfil"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={avatarUrlsDepoimento2}
                    width="300"
                    height="300"
                    alt="Foto de Perfil"
                    className="w-full h-full object-cover"

                  />
                )}
              </label>
            </div>
          </div>
          <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
            {textButton2}
          </button>
        </form>
      ))}
      {depoiments3.map((depoiment) => (
        <form key={depoiment.id} onSubmit={handleSave3} className="flex flex-col justify-center items-center">
          <div className="mt-5 flex flex-col gap-2">
          <label>Nome da Empresa</label>
            <input
              type="text"
              className="px-2 rounded"
              value={empresa3}
              placeholder={depoiment.empresa}
              onChange={(e) => setEmpresa3(e.target.value)}
            ></input>
            <div className="flex gap-1">
            <label>Nome</label>
              <input
                type="text"
                className="ml-2 px-2"
                value={nome3}
                placeholder={depoiment.nome}
                onChange={(e) => setNome3(e.target.value)}
              ></input>
              <label>Sobrenome</label>
              <input
                type="text"
                className="ml-2 px-2"
                value={sobreNome3}
                placeholder={depoiment.sobrenome}
                onChange={(e) => setSobreNome3(e.target.value)}
              ></input>
            </div>
            <label>Depoimento</label>
            <textarea
              value={comentario3}
              className="px-2 rounded"
              placeholder={depoiment.comentario}
              onChange={(e) => setComentario3(e.target.value)}
            ></textarea>
            <label>Cargo</label>
            <input
              type="text"
              className="px-2 rounded"
              value={cargo3}
              placeholder={depoiment.cargo}
              onChange={(e) => setCargo3(e.target.value)}
            ></input>
            <label>Subcargo</label>
            <input
              type="text"
              className="px-2 rounded"
              value={subCargo3}
              placeholder={depoiment.subcargo}
              onChange={(e) => setSubCargo3(e.target.value)}
            ></input>
            <label>Link do Facebook</label>
            <input
              type="text"
              className="px-2 rounded"
              value={facebook3}
              placeholder={depoiment.facebook}
              onChange={(e) => setFacebook3(e.target.value)}
         
            ></input>
            <label>Link do Twitter</label>
            <input
              type="text"
              className="px-2 rounded"
              value={twitter3}
              placeholder={depoiment.twitter}
              onChange={(e) => setTwitter3(e.target.value)}
         
            ></input>
            <label>Link da Twitch</label>
            <input
              type="text"
              className="px-2 rounded"
              value={twitch3}
              placeholder={depoiment.twitch}
              onChange={(e) => setTwitch3(e.target.value)}
         
            ></input>
            <label>Link do Google</label>
            <input
              type="text"
              className="px-2 rounded"
              value={google3}
              placeholder={depoiment.google}
              onChange={(e) => setGoogle3(e.target.value)}
           
              
            ></input>
            <label>Link do Instagram</label>
            <input
              type="text"
              className="px-2 rounded"
              value={instagram3}
              placeholder={depoiment.instagram}
              onChange={(e) => setInstagram3(e.target.value)}
  
              
            ></input>
            <div className="mt-5 flex gap-2">
             
              <label className="w-9/12 m-auto h-[400px]  z-10 bg-blue-950 rounded flex items-center justify-center cursor-pointer">
                <span className="absolute opacity-30">
                  <FaUpload size={30}/>
                </span>
                <input
                  className="hidden"
                  type="file"
                  onChange={getFileChangeHandler(depoiment.id)}
                />
                {imageAvatarDepoimento3 === null ? (
                  <img
                    src={depoiment.imagem}
                    width="300"
                    height="300"
                    alt="Foto de Perfil"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={avatarUrlsDepoimento3}
                    width="300"
                    height="300"
                    alt="Foto de Perfil"
                    className="w-full h-full object-cover"

                  />
                )}
              </label>
            </div>
          </div>
          <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
            {textButton3}
          </button>
        </form>
      ))}
     </div>   
    </div>
  );
}
