import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  FaTwitter,
  FaFacebook,
  FaTwitch,
  FaGooglePlus,
  FaInstagram,
} from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

import { motion } from "framer-motion";

export default function Coments() {
  const depoimentCollectionRef = collection(db, "depoiments");

  useEffect(() => {
    const getDepoiments = async () => {
      const data = await getDocs(depoimentCollectionRef);
      setDepoiments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDepoiments();
  }, []);

  const [depoiments, setDepoiments] = useState([]);

  return (
    <div className="md:w-9/12 md:m-auto md:flex md:gap-4 ">
      <Tabs>
        {depoiments.map((depoiment) => (
          <TabPanel key={depoiment.id}>
            <div className="flex gap-20">
              <div className="hidden md:flex mt-5">
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.9 }}
                  className="w-12 flex items-center justify-center text-center"
                >
                  <p className="-rotate-90  text-3xl font-bold">
                    {depoiment.nome}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -400 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.2 }}
                  className="w-[430px] h-[600px]"
                >
                  <img
                    src={depoiment.imagem}
                    width={100}
                    height={100}
                    alt="foto-perfil"
                    className="object-cover w-[430px] h-[600px]"
                  />
                </motion.div>
              </div>
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:2.5}}
              className="pb-14 md:w-9/12 md:m-auto">
                
                <div>
                  <p className="w-[60px] h-[2px] bg-blue-600 my-10"></p>
                  <div className="md:w-3/5 w-9/12 flex flex-col gap-5 px-2 md:px-0">
                    <h2 className="tracking-widest text-xs">LEIA</h2>
                    <p>
                      {" "}
                      <strong className="text-xl">{depoiment.empresa}</strong>
                    </p>

                    <p>
                      <strong>{depoiment.nome}</strong> {depoiment.sobrenome}
                    </p>
                    <p className="">{depoiment.comentario}</p>

                    <p className="text-xl">
                      <strong>{depoiment.cargo}</strong> {depoiment.subcargo}
                    </p>
                  </div>

                  <div className="px-2  md:px-0 flex gap-10 py-2 w-1/2 md:w-1/3">
                    {depoiment.facebook && (
                      <a href={depoiment.facebook} target="_blank">
                        <FaFacebook color="#8e8e8e" size={16} />
                      </a>
                    )}
                    {depoiment.twitter && (
                      <a href={depoiment.twitter} target="_blank">
                        <FaTwitter color="#8e8e8e" size={16} />
                      </a>
                    )}
                    {depoiment.twitch && (
                      <a href={depoiment.twitch} target="_blank">
                        <FaTwitch color="#8e8e8e" size={16} />
                      </a>
                    )}
                    {depoiment.google && (
                      <a href={depoiment.google} target="_blank">
                        <FaGooglePlus color="#8e8e8e" size={16} />
                      </a>
                    )}
                    {depoiment.instagram && (
                      <a href={depoiment.instagram} target="_blank">
                        <FaInstagram color="#8e8e8e" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </TabPanel>
        ))}

        <TabList>
          <div className="flex items-center justify-around md:justify-end">
            {depoiments.map((depoiment) => (
              <Tab key={depoiment.id}>
                <div className="bg-transparent sm:drop-shadow-3xl drop-shadow-xl md:px-6 px-2 py-3 text-center flex flex-col items-center transition-all ">
                  <div className="w-[64px] h-[64px] rounded-full ">
                    <img
                      src={depoiment.imagem}
                      width={100}
                      height={100}
                      alt="perfil"
                      className="object-cover rounded-full w-[64px] h-[64px]"
                    />
                  </div>
                  <h1 className="font-bold">{depoiment.nome}</h1>
                  <p className="text-sm">{depoiment.cargo}</p>
                </div>
              </Tab>
            ))}
          </div>
        </TabList>
      </Tabs>
    </div>
  );
}
