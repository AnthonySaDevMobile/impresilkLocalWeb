import React, { useState, useEffect } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db, storage } from "../../services/firebaseConnection";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FaUpload } from "react-icons/fa";

export default function EditPortfolio() {
  const [imageAvatarPortfolio, setImageAvatarPortfolio] = useState(null);
  const [imageAvatarPortfolio2, setImageAvatarPortfolio2] = useState(null);
  const [imageAvatarPortfolio3, setImageAvatarPortfolio3] = useState(null);
  const [imageAvatarPortfolio4, setImageAvatarPortfolio4] = useState(null);
  const [imageAvatarPortfolio5, setImageAvatarPortfolio5] = useState(null);
  const [imageAvatarPortfolio6, setImageAvatarPortfolio6] = useState(null);
  const [imageAvatarPortfolio7, setImageAvatarPortfolio7] = useState(null);
  const [imageAvatarPortfolio8, setImageAvatarPortfolio8] = useState(null);
  const [imageAvatarPortfolio9, setImageAvatarPortfolio9] = useState(null);
  const [avatarUrlPortfolio, setAvatarUrlPortfolio] = useState("");
  const [avatarUrlPortfolio2, setAvatarUrlPortfolio2] = useState("");
  const [avatarUrlPortfolio3, setAvatarUrlPortfolio3] = useState("");
  const [avatarUrlPortfolio4, setAvatarUrlPortfolio4] = useState("");
  const [avatarUrlPortfolio5, setAvatarUrlPortfolio5] = useState("");
  const [avatarUrlPortfolio6, setAvatarUrlPortfolio6] = useState("");
  const [avatarUrlPortfolio7, setAvatarUrlPortfolio7] = useState("");
  const [avatarUrlPortfolio8, setAvatarUrlPortfolio8] = useState("");
  const [avatarUrlPortfolio9, setAvatarUrlPortfolio9] = useState("");
  const [avatarUrlPortfolioFirebase, setAvatarUrlPortfolioFirebase] = useState("");
  const [avatarUrlPortfolio2Firebase, setAvatarUrlPortfolio2Firebase] = useState("");
  const [avatarUrlPortfolio3Firebase, setAvatarUrlPortfolio3Firebase] = useState("");
  const [avatarUrlPortfolio4Firebase, setAvatarUrlPortfolio4Firebase] = useState("");
  const [avatarUrlPortfolio5Firebase, setAvatarUrlPortfolio5Firebase] = useState("");
  const [avatarUrlPortfolio6Firebase, setAvatarUrlPortfolio6Firebase] = useState("");
  const [avatarUrlPortfolio7Firebase, setAvatarUrlPortfolio7Firebase] = useState("");
  const [avatarUrlPortfolio8Firebase, setAvatarUrlPortfolio8Firebase] = useState("");
  const [avatarUrlPortfolio9Firebase, setAvatarUrlPortfolio9Firebase] = useState("");
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [portfolioImages2, setPortfolioImages2] = useState([]);
  const [portfolioImages3, setPortfolioImages3] = useState([]);
  const [portfolioImages4, setPortfolioImages4] = useState([]);
  const [portfolioImages5, setPortfolioImages5] = useState([]);
  const [portfolioImages6, setPortfolioImages6] = useState([]);
  const [portfolioImages7, setPortfolioImages7] = useState([]);
  const [portfolioImages8, setPortfolioImages8] = useState([]);
  const [portfolioImages9, setPortfolioImages9] = useState([]);
  const [textButton, setTextButton] = useState("Enviar alterações");
  const [textButton2, setTextButton2] = useState("Enviar alterações");
  const [textButton3, setTextButton3] = useState("Enviar alterações");
  const [textButton4, setTextButton4] = useState("Enviar alterações");
  const [textButton5, setTextButton5] = useState("Enviar alterações");
  const [textButton6, setTextButton6] = useState("Enviar alterações");
  const [textButton7, setTextButton7] = useState("Enviar alterações");
  const [textButton8, setTextButton8] = useState("Enviar alterações");
  const [textButton9, setTextButton9] = useState("Enviar alterações");

  const portfolioCollectionRef = collection(db, "portfolio");

  const portfolioId = "0jQrsgkEs0XF3dRLzAAm";
  const portfolioId2 = "32KMzUBswZtDN4VeMsoK";
  const portfolioId3 = "PfJgxCfBzxyp7ndPXqKu";
  const portfolioId4 = "PuPKwnxlwKSDfbzdm2tr";
  const portfolioId5 = "Q0TlE3PYavaoJH2pw8UL";
  const portfolioId6 = "deqH9SMM8FnONvCMx6jL";
  const portfolioId7 = "gOH8fn4VS3JCRRtjArsb";
  const portfolioId8 = "gzDEAtB4wGOPv9lxAK3R";
  const portfolioId9 = "j6qvarr66IQaYx1JOC6M";

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

  function handleFilePortfolio(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
      image.type === "image/jpeg" ||
      image.type === "image/png" ||
      image.type === "image/jpg" ||
      image.type === "video/mp4" ||
      image.type === "video/mov" ||
      image.type === "video/3gpp"
      ) {
        setImageAvatarPortfolio(image);
        setAvatarUrlPortfolio(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio(null);
        return null;
      }
    }
  }

  function handleFilePortfolio2(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
      image.type === "image/jpeg" ||
      image.type === "image/png" ||
      image.type === "image/jpg" ||
      image.type === "video/mp4" ||
      image.type === "video/mov" ||
      image.type === "video/3gpp"
      ) {
        setImageAvatarPortfolio2(image);
        setAvatarUrlPortfolio2(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio2(null);
        return null;
      }
    }
  }

  function handleFilePortfolio3(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
      image.type === "image/jpeg" ||
      image.type === "image/png" ||
      image.type === "image/jpg" ||
      image.type === "video/mp4" ||
      image.type === "video/mov" ||
      image.type === "video/3gpp"
      ) {
        setImageAvatarPortfolio3(image);
        setAvatarUrlPortfolio3(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio3(null);
        return null;
      }
    }
  }
  function handleFilePortfolio4(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
      image.type === "image/jpeg" ||
      image.type === "image/png" ||
      image.type === "image/jpg" ||
      image.type === "video/mp4" ||
      image.type === "video/mov" ||
      image.type === "video/3gpp"
      ) {
        setImageAvatarPortfolio4(image);
        setAvatarUrlPortfolio4(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio4(null);
        return null;
      }
    }
  }

  function handleFilePortfolio5(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
      image.type === "image/jpeg" ||
      image.type === "image/png" ||
      image.type === "image/jpg" ||
      image.type === "video/mp4" ||
      image.type === "video/mov" ||
      image.type === "video/3gpp"
      ) {
        setImageAvatarPortfolio5(image);
        setAvatarUrlPortfolio5(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio5(null);
        return null;
      }
    }
  }

  function handleFilePortfolio6(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
      image.type === "image/jpeg" ||
      image.type === "image/png" ||
      image.type === "image/jpg" ||
      image.type === "video/mp4" ||
      image.type === "video/mov" ||
      image.type === "video/3gpp"
      ) {
        setImageAvatarPortfolio6(image);
        setAvatarUrlPortfolio6(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio6(null);
        return null;
      }
    }
  }
  function handleFilePortfolio7(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
      image.type === "image/jpeg" ||
      image.type === "image/png" ||
      image.type === "image/jpg" ||
      image.type === "video/mp4" ||
      image.type === "video/mov" ||
      image.type === "video/3gpp"
      ) {
        setImageAvatarPortfolio7(image);
        setAvatarUrlPortfolio7(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio7(null);
        return null;
      }
    }
  }

  function handleFilePortfolio8(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
      image.type === "image/jpeg" ||
      image.type === "image/png" ||
      image.type === "image/jpg" ||
      image.type === "video/mp4" ||
      image.type === "video/mov" ||
      image.type === "video/3gpp"
      ) {
        setImageAvatarPortfolio8(image);
        setAvatarUrlPortfolio8(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio8(null);
        return null;
      }
    }
  }

  function handleFilePortfolio9(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];  
      if (
      image.type === "image/jpeg" ||
      image.type === "image/png" ||
      image.type === "image/jpg" ||
      image.type === "video/mp4" ||
      image.type === "video/mov" ||
      image.type === "video/3gpp"
      ) {
        setImageAvatarPortfolio9(image);
        setAvatarUrlPortfolio9(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio9(null);
        return null;
      }
    }
  }

  //1

  async function handleSave(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    const portfolio = portfolioImages[0];
    const portfolioRef = doc(db, "portfolio", portfolioId);

     handleUpload();

    // Wait for handleUpload() to complete and set the download URL before updating Firestore
    const updatedData = {
      imagem: avatarUrlPortfolioFirebase || portfolio.imagem,
    };
    await setDoc(portfolioRef, updatedData)
      .then(() => {
       
      })
      .catch((e) => {
        
      });
    setTextButton("Enviado!");
  }

  async function handleUpload() {
    if (avatarUrlPortfolio !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio).then((snapshot) => {});
      const url = await getDownloadURL(
        ref(storage, `imagesPortfolio/${portfolioId}`)
      );
      setAvatarUrlPortfolioFirebase(url);
    } else {
      return null;
    }
  }

  //2

  async function handleSave2(e) {
    e.preventDefault();
    setTextButton2("Enviando...");
    const portfolio = portfolioImages2[0];
    const portfolioRef = doc(db, "portfolio", portfolioId2);
     handleUpload2();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlPortfolio2Firebase || portfolio.imagem,
    };

    await setDoc(portfolioRef, updatedData)
      .then(() => {
       
      })
      .catch((e) => {
        
      });
    setTextButton2("Enviado!");
  }

  async function handleUpload2() {
    if (avatarUrlPortfolio2 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId2}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio2).then((snapshot) => {
      });
      const url = await getDownloadURL(
        ref(storage, `imagesPortfolio/${portfolioId2}`)
      );
      setAvatarUrlPortfolio2Firebase(url);
    } else {
      return null;
    }
  }

  //3
  async function handleSave3(e) {
    e.preventDefault();
    setTextButton3("Enviando...");
    const portfolio = portfolioImages3[0];
    const portfolioRef = doc(db, "portfolio", portfolioId3);
     handleUpload3();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlPortfolio3Firebase || portfolio.imagem,
    };

    await setDoc(portfolioRef, updatedData)
      .then(() => {
       
      })
      .catch((e) => {
        
      });
    setTextButton3("Enviado!");
  }

  async function handleUpload3() {
    if (avatarUrlPortfolio3 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId3}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio3).then((snapshot) => {
      });
      const url = await getDownloadURL(
        ref(storage, `imagesPortfolio/${portfolioId3}`)
      );
      setAvatarUrlPortfolio3Firebase(url);
    } else {
      return null;
    }
  }

  //4
  async function handleSave4(e) {
    e.preventDefault();
    setTextButton4("Enviando...");
    const portfolio = portfolioImages4[0];
    const portfolioRef = doc(db, "portfolio", portfolioId4);

     handleUpload4();

    // Wait for handleUpload() to complete and set the download URL before updating Firestore
    const updatedData = {
      imagem: avatarUrlPortfolio4Firebase || portfolio.imagem,
    };
    await setDoc(portfolioRef, updatedData)
      .then(() => {
       
      })
      .catch((e) => {
        
      });
    setTextButton4("Enviado!");
  }

  async function handleUpload4() {
    if (avatarUrlPortfolio !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId4}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio4).then(
        (snapshot) => {}
      );
      const url = await getDownloadURL(
        ref(storage, `imagesPortfolio/${portfolioId4}`)
      );
      setAvatarUrlPortfolio4Firebase(url);
    } else {
      return null;
    }
  }

  //5
  async function handleSave5(e) {
    e.preventDefault();
    setTextButton5("Enviando...");
    const portfolio = portfolioImages5[0];
    const portfolioRef = doc(db, "portfolio", portfolioId5);
    await handleUpload5();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlPortfolio5Firebase || portfolio.imagem,
    };

    await setDoc(portfolioRef, updatedData)
      .then(() => {
       
      })
      .catch((e) => {
        
      });
    setTextButton5("Enviado!");
  }

  async function handleUpload5() {
    if (avatarUrlPortfolio5 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId5}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio5).then((snapshot) => {
      });
      const url = await getDownloadURL(
        ref(storage, `imagesPortfolio/${portfolioId5}`)
      );
      setAvatarUrlPortfolio5Firebase(url);
    } else {
      return null;
    }
  }

  //6
  async function handleSave6(e) {
    e.preventDefault();
    setTextButton6("Enviando...");
    const portfolio = portfolioImages6[0];
    const portfolioRef = doc(db, "portfolio", portfolioId6);
     handleUpload6();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlPortfolio6Firebase || portfolio.imagem,
    };

    await setDoc(portfolioRef, updatedData)
      .then(() => {
       
      })
      .catch((e) => {
        
      });
    setTextButton6("Enviado!");
  }

  async function handleUpload6() {
    if (avatarUrlPortfolio6 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId6}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio6).then((snapshot) => {
      });
      const url = await getDownloadURL(
        ref(storage, `imagesPortfolio/${portfolioId6}`)
      );
      setAvatarUrlPortfolio6Firebase(url);
    } else {
      return null;
    }
  }

  //7
  async function handleSave7(e) {
    e.preventDefault();
    setTextButton7("Enviando...");
    const portfolio = portfolioImages7[0];
    const portfolioRef = doc(db, "portfolio", portfolioId7);
     handleUpload7();
    const updatedData = {
      imagem: avatarUrlPortfolio7Firebase || portfolio.imagem,
    };
    await setDoc(portfolioRef, updatedData)
      .then(() => {
       
      })
      .catch((e) => {
        
      });
    setTextButton7("Enviado!");
  }

  async function handleUpload7() {
    if (avatarUrlPortfolio7 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId7}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio7).then(
        (snapshot) => {}
      );
      const url = await getDownloadURL(
        ref(storage, `imagesPortfolio/${portfolioId7}`)
      );
      setAvatarUrlPortfolio7Firebase(url);
    } else {
      return null;
    }
  }

  //8
  async function handleSave8(e) {
    e.preventDefault();
    setTextButton8("Enviando...");
    const portfolio = portfolioImages8[0];
    const portfolioRef = doc(db, "portfolio", portfolioId8);
     handleUpload8();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlPortfolio8Firebase || portfolio.imagem,
    };

    await setDoc(portfolioRef, updatedData)
      .then(() => {
       
      })
      .catch((e) => {
        
      });
    setTextButton8("Enviado!");
  }

  async function handleUpload8() {
    if (avatarUrlPortfolio8 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId8}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio8).then((snapshot) => {
      });
      const url = await getDownloadURL(
        ref(storage, `imagesPortfolio/${portfolioId8}`)
      );
      setAvatarUrlPortfolio8Firebase(url);
    } else {
      return null;
    }
  }

  //9
  async function handleSave9(e) {
    e.preventDefault();
    setTextButton9("Enviando...");
    const portfolio = portfolioImages9[0];
    const portfolioRef = doc(db, "portfolio", portfolioId9);
     handleUpload9();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlPortfolio9Firebase || portfolio.imagem,
    };

    await setDoc(portfolioRef, updatedData)
      .then(() => {
       
      })
      .catch((e) => {
        
      });
    setTextButton9("Enviado!");
  }

  async function handleUpload9() {
    if (avatarUrlPortfolio9 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId9}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio9).then((snapshot) => {
      });
      const url = await getDownloadURL(
        ref(storage, `imagesPortfolio/${portfolioId9}`)
      );
      setAvatarUrlPortfolio9Firebase(url);
    } else {
      return null;
    }
  }

  return (
    <div className="text-center">
      <h1 className="mt-5 font-bold text-lg">Portifólio</h1>
      <p className="mt-5 font-semibold text-lg">Altera as imagens que aparecem na tela:</p>
      <div className="grid grid-rows-3 grid-cols-3">
      <div>
        {portfolioImages.map((foto) => (
          <form key={foto.id} onSubmit={handleSave}>
            <div className="grid grid-rows-1">
              <label className="w-[500px] mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
                <span className="absolute opacity-50">
                  <FaUpload size={30} color="white" />
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFilePortfolio}
                />
                {imageAvatarPortfolio === null ? (
                  <img
                    src={foto.image}
                    width="250"
                    height="250"
                    alt="Foto do Produto"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={avatarUrlPortfolio}
                    className="w-full h-full object-cover"
                    alt="Foto do Produto"
                  />
                )}
              </label>
              <button className="text-center w-1/4 m-auto bg-blue-800  py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
                {textButton}
              </button>
            </div>
          </form>
        ))}
      </div>
      <div>
        {portfolioImages2.map((foto) => (
          <form key={foto.id} onSubmit={handleSave2}>
            <div className="grid grid-rows-1 ">
            <label className="w-[500px] mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
                <span className="absolute opacity-50">
                  <FaUpload size={30} color="white" />
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFilePortfolio2}
                />
                {imageAvatarPortfolio2 === null ? (
                  <img
                    src={foto.image}
                    width="250"
                    height="250"
                    alt="Foto do Produto"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={avatarUrlPortfolio2}
                    className="w-full h-full object-cover"
                    alt="Foto do Produto"
                  />
                )}
              </label>
              <button className="text-center w-1/4 m-auto bg-blue-800  py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
                {textButton2}
              </button>
            </div>
          </form>
        ))}
      </div>
      <div>
        {portfolioImages3.map((foto) => (
          <form key={foto.id} onSubmit={handleSave3}>
            <div className="grid grid-rows-1 ">
            <label className="w-[500px] mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
                <span className="absolute opacity-50">
                  <FaUpload size={30} color="white" />
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFilePortfolio3}
                />
                {imageAvatarPortfolio3 === null ? (
                  <img
                    src={foto.image}
                    width="250"
                    height="250"
                    alt="Foto do Produto"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={avatarUrlPortfolio3}
                    className="w-full h-full object-cover"
                    alt="Foto do Produto"
                  />
                )}
              </label>
              <button className="text-center w-1/4 m-auto bg-blue-800  py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
                {textButton3}
              </button>
            </div>
          </form>
        ))}
      </div>
      <div>
        {portfolioImages4.map((foto) => (
          <form key={foto.id} onSubmit={handleSave4}>
            <div className="grid grid-rows-1 ">
            <label className="w-[500px] mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
                <span className="absolute opacity-50">
                  <FaUpload size={30} color="white" />
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFilePortfolio4}
                />
                {imageAvatarPortfolio4 === null ? (
                  <img
                    src={foto.image}
                    width="250"
                    height="250"
                    alt="Foto do Produto"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={avatarUrlPortfolio4}
                    className="w-full h-full object-cover"
                    alt="Foto do Produto"
                  />
                )}
              </label>
              <button className="text-center w-1/4 m-auto bg-blue-800  py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
                {textButton4}
              </button>
            </div>
          </form>
        ))}
      </div>
      <div>
        {portfolioImages5.map((foto) => (
          <form key={foto.id} onSubmit={handleSave5}>
            <div className="grid grid-rows-1 ">
            <label className="w-[500px] mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
                <span className="absolute opacity-50">
                  <FaUpload size={30} color="white" />
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFilePortfolio5}
                />
                {imageAvatarPortfolio5 === null ? (
                  <img
                    src={foto.image}
                    width="250"
                    height="250"
                    alt="Foto do Produto"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={avatarUrlPortfolio5}
                    className="w-full h-full object-cover"
                    alt="Foto do Produto"
                  />
                )}
              </label>
              <button className="text-center w-1/4 m-auto bg-blue-800  py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
                {textButton5}
              </button>
            </div>
          </form>
        ))}
      </div>
      <div>
        {portfolioImages6.map((foto) => (
          <form key={foto.id} onSubmit={handleSave6}>
            <div className="grid grid-rows-1 ">
            <label className="w-[500px] mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
                <span className="absolute opacity-50">
                  <FaUpload size={30} color="white" />
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFilePortfolio6}
                />
                {imageAvatarPortfolio6 === null ? (
                  <img
                    src={foto.image}
                    width="250"
                    height="250"
                    alt="Foto do Produto"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={avatarUrlPortfolio6}
                    className="w-full h-full object-cover"
                    alt="Foto do Produto"
                  />
                )}
              </label>
              <button className="text-center w-1/4 m-auto bg-blue-800  py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
                {textButton6}
              </button>
            </div>
          </form>
        ))}
      </div>
      <div>
        {portfolioImages7.map((foto) => (
          <form key={foto.id} onSubmit={handleSave7}>
            <div className="grid grid-rows-1 ">
            <label className="w-[500px] mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
                <span className="absolute opacity-50">
                  <FaUpload size={30} color="white" />
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFilePortfolio7}
                />
                {imageAvatarPortfolio7 === null ? (
                  <img
                    src={foto.image}
                    width="250"
                    height="250"
                    alt="Foto do Produto"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={avatarUrlPortfolio7}
                    className="w-full h-full object-cover"
                    alt="Foto do Produto"
                  />
                )}
              </label>
              <button className="text-center w-1/4 m-auto bg-blue-800  py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
                {textButton7}
              </button>
            </div>
          </form>
        ))}
      </div>
      <div>
        {portfolioImages8.map((foto) => (
          <form key={foto.id} onSubmit={handleSave8}>
            <div className="grid grid-rows-1 ">
            <label className="w-[500px] mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
                <span className="absolute opacity-50">
                  <FaUpload size={30} color="white" />
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFilePortfolio8}
                />
                {imageAvatarPortfolio8 === null ? (
                  <img
                    src={foto.image}
                    width="250"
                    height="250"
                    alt="Foto do Produto"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={avatarUrlPortfolio8}
                    className="w-full h-full object-cover"
                    alt="Foto do Produto"
                  />
                )}
              </label>
              <button className="text-center w-1/4 m-auto bg-blue-800  py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
                {textButton8}
              </button>
            </div>
          </form>
        ))}
      </div>
      <div>
        {portfolioImages9.map((foto) => (
          <form key={foto.id} onSubmit={handleSave9}>
            <div className="grid grid-rows-1 ">
            <label className="w-[500px] mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
                <span className="absolute opacity-50">
                  <FaUpload size={30} color="white" />
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFilePortfolio9}
                />
                {imageAvatarPortfolio9 === null ? (
                  <img
                    src={foto.image}
                    width="250"
                    height="250"
                    alt="Foto do Produto"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={avatarUrlPortfolio9}
                    className="w-full h-full object-cover"
                    alt="Foto do Produto"
                  />
                )}
              </label>
              <button className="text-center w-1/4 m-auto bg-blue-800  py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
                {textButton9}
              </button>
            </div>
          </form>
        ))}
      </div>
      </div>
    </div>
  );
}
