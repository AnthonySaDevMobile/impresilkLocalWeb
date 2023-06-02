"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { MdLocationPin, MdEmail, MdCall } from "react-icons/md";

import axios from "axios";

function Footer() {
  const [feedList, setFeedList] = useState([]);

  async function getInstaFeed() {
    try {
      const fields = "media_url, media_type,permalink";
      const response = await axios.get(
        `https://graph.instagram.com/me/media`,
        {
          params: {
            access_token: process.env.IMPRESILK_TOKEN,
            fields,
          },
        }
      );
      setFeedList(response.data.data);
    } catch (error) {
      console.log("error:", error);
    }
  }

  useEffect(() => {
    getInstaFeed();
  }, []);


  return (
    <footer className="w-full sm:h-fit pt-5 bg-bg-black-ct text-white">
      <div className="sm:w-9/12 sm:m-auto pl-5 pb-2 flex justify-between">
        <div className="sm:w-5/12  flex flex-col justify-start text-left sm:pb-20 pt-5">
          <img src={Logo} alt="logo" className="md:mt-0 mt-2 h-1/4 w-28" />
          <p className="text-zinc-500 mt-5">
            A Impresilk é uma empresa familiar que nasceu há mais de 30 anos, dá vontade e união dos três irmãos, Adilson Pereira, Anita Pereira e Pedro Ramos Pereira, de empreenderem. Iniciaram o seu negócio na cidade de São Francisco, a 167 km de Montes Claros, sendo a primeira empresa de serigrafia do Norte de Minas Gerais. Com o crescimento da empresa, os irmãos mudaram para Montes Claros e começaram a reescrever a história da Impresilk.
          </p>
          <div>
            <div className="flex gap-2 text-base px-2 items-center mt-5">
              <MdLocationPin color="yellow" size={30} />
              <p>
                Av. Felíciano Martins de Freitas, 127 - Vila Regina, Montes
                Claros - MG
              </p>
            </div>
            <div className="flex gap-1 text-base px-2 items-center mt-5">
              <MdEmail color="yellow" size={20} />
              <p>contact@impresilk.com</p>
            </div>
            <div className="flex gap-1 text-base px-2 items-center mt-5">
              <MdCall color="yellow" size={20} />
              <p>(38) 98877-6655</p>
            </div>
          </div>
          <div>
            <h1 className="mt-5 mb-5 font-semibold text-center">
              Redes Sociais
            </h1>
            <div className="flex gap-2 py-2 justify-around w-1/2 m-auto">

              <a href="https://www.facebook.com/impresilk" target="_blank">
                <FaFacebook color="#8e8e8e" size={20} />
              </a>

              <a href="https://www.instagram.com/impresilk/" target="_blank">
                <FaInstagram color="#8e8e8e" size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-zinc-400 text-sm w-1/5 hidden md:flex md:flex-col">
          <h1 className="font-bold text-xl mb-5 text-white">Links</h1>
          <a
            href="/#home"
            className="flex items-center gap-2 border-t border-zinc-800 mt-2 pt-2 hover:ml-5 hover:bg-zinc-800 hover:text-white p-2 transition-all duration-500"
          >
            <FaArrowAltCircleRight />
            <p>Impresilk</p>
          </a>
          <a
            href="/#footer"
            className="flex items-center gap-2 border-t border-zinc-800 mt-2 pt-2 hover:ml-5 hover:bg-zinc-800 hover:text-white p-2 transition-all duration-500"
          >
            <FaArrowAltCircleRight />
            <p>Contato</p>
          </a>
          <a
            href="/#projetos"
            className="flex items-center gap-2 border-t border-zinc-800 mt-2 pt-2 hover:ml-5 hover:bg-zinc-800 hover:text-white p-2 transition-all duration-500"
          >
            <FaArrowAltCircleRight />
            <p>Projetos</p>
          </a>
          <a
            href="/#sobre"
            className="flex items-center gap-2 border-t border-zinc-800 mt-2 pt-2 hover:ml-5 hover:bg-zinc-800 hover:text-white p-2 transition-all duration-500"
          >
            <FaArrowAltCircleRight />
            <p>Quem Somos</p>
          </a>
          <a
            href="/#cases"
            className="flex items-center gap-2 border-t border-zinc-800 mt-2 pt-2 hover:ml-5 hover:bg-zinc-800 hover:text-white p-2 transition-all duration-500"
          >
            <FaArrowAltCircleRight />
            <p>Cases</p>
          </a>
          <a
            href="/#produtos"
            className="flex items-center gap-2 border-t border-zinc-800 mt-2 pt-2 hover:ml-5 hover:bg-zinc-800 hover:text-white p-2 transition-all duration-500"
          >
            <FaArrowAltCircleRight />
            <p>Produtos</p>
          </a>
          <a
            href="/#portifolio"
            className="flex items-center gap-2 border-t border-zinc-800 mt-2 pt-2 hover:ml-5 hover:bg-zinc-800 hover:text-white p-2 transition-all duration-500"
          >
            <FaArrowAltCircleRight />
            <p>Portifólio</p>
          </a>
          <a
            href="/#depoimentos"
            className="flex items-center gap-2 border-t border-zinc-800 mt-2 pt-2 hover:ml-5 hover:bg-zinc-800 hover:text-white p-2 transition-all duration-500"
          >
            <FaArrowAltCircleRight />
            <p>Depoimentos</p>
          </a>
        </div>
        <div className="mt-10 text-zinc-400 text-sm w-fit m-auto text-center hidden md:flex md:flex-col">
          <h1 className="text-xl mb-5 text-white">
            Atualizações do <strong className="font-bold ">instagram</strong>
          </h1>

          <div className="grid grid-cols-3 grid-rows-2  w-fit gap-3" >
           <a href="https://www.instagram.com/impresilk/" target="_blank">           
            <div
              className="bg-zinc-500 w-[150px] h-[135px] flex items-center justify-center object-cover hover:brightness-150 transiton-all duration-500"
              style={{
                background:
                  "radial-gradient(circle, rgba(176,0,172,1) 39%, rgba(252,70,107,1) 100%, rgba(241,70,252,1) 100%)",
              }}
            >
              {" "}
              <FaInstagram size={50} color="white" />{" "}
            </div>
           </a>
            {feedList.slice(0, 5).map((item) => (
              <div key={item.id}>
               <a href={item.permalink} target="_blank">
                <div className="bg-zinc-500 w-[150px] h-[135px] flex items-center justify-center object-cover">

                  {item.media_type === "VIDEO"
                    ?
                    <video controls autoPlay muted className="object-cover w-full h-full">
                    <source src={item.media_url} />
                  </video>
                    :
                    <img src={item.media_url} alt="imagem Instagram" className="object-cover w-full h-full" />
                  }

                </div>
               </a>
              </div>

            ))}
          </div>

          <p className="text-left mt-5">
            Siga-nos <strong className="text-yellow-500">@impresilk</strong>
          </p>
        </div>


      </div>
      <div className="bg-black text-xs py-8 h-full text-center">
        <p>
          ©2023{" "}
          <strong className="text-yellow-500 font-extrabold">impresilk </strong>
          all right reserved, made with❤by nobilismkt.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
