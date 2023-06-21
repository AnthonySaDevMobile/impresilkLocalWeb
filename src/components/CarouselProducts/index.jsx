import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";


export default function CarouselProducts() {
  const produtosRef = collection(db, "produtos");
  const categoriasRef = collection(db, "categorias");
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filtered, setFiltered] = useState(produtos);

  useEffect(() => {
    const getProdutos = async () => {
      const data = await getDocs(produtosRef);
      const produtosData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setProdutos(produtosData);
      setFiltered(produtosData); // Definir os produtos filtrados com os dados iniciais
    };
    getProdutos();
  }, []);

 


  const pagination = {
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
    },
    clickable: true,
    bulletClass: "swiper-pagination-bullet-2",
    bulletActiveClass: "swiper-pagination-bullet-active-2",
  };
  function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  useEffect(() => {
    const getCategorias = async () => {
      const data = await getDocs(categoriasRef);
      setCategorias(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCategorias();
  }, []);

  useEffect(() => {
    handleCategoryChange(selectedCategory); // Passar a categoria selecionada como argumento
  }, [selectedCategory]); // Alterar o nome do estado de "produtos" para "selectedCategory"
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const produtosFiltrados =
      category === "Todos"
        ? produtos
        : produtos.filter((item) => item.categoria === category);
  
    setFiltered(produtosFiltrados);
  };

 

  return (
    <div>
      <div className="flex items-center md:justify-end justify-around m:gap-4 gap-2 md:text-base text-xs h-8">
      {categorias.map((categoria) => (
        <button
          key={categoria.id}
          className={`${
            selectedCategory === categoria.categoria
              ? "border-b-2 underline underline-offset-4 decoration-bg-slide transition ease-in text-zinc-900"
              : "hover:border-b-2 hover:underline hover:underline-offset-4 decoration-bg-slide transition ease-in text-zinc-500 hover:text-zinc-900"
          }`}
          onClick={() => handleCategoryChange(categoria.categoria)}
        >
          {categoria.categoria}
        </button>
      ))}
    </div>

      <Swiper
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        pagination={pagination}
        modules={[Navigation, Pagination]}
        className="w-full mt-10"
      >
{chunkArray(filtered, 6).map((grupo, index) => (
  <SwiperSlide key={index} className="pb-20">
    <div className="md:grid md:grid-cols-2 md:grid-rows-2 gap-3">
      {grupo.length === 0 ? (
        <div className="flex justify-center items-center p-4 bg-white">
          <p>Ainda não há produtos cadastrados...</p>
        </div>
      ) : (
        grupo.map((item) => (
          <div key={item.id} className="flex justify-around p-4 bg-white">
            <div className="h-[250px] w-[240px] bg-zinc-200">
              <img
                src={item.imagem}
                width="250"
                height="250"
                alt="Foto"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/3 flex flex-col justify-around px-2 py-6">
              <strong className="text-xl">{item.categoria}</strong>
              <p className="text-blue-800 font-extrabold text-sm">
                {item.caracteristica}
              </p>
              <p className="text-zinc-500 mt-5 text-sm">
                {item.descricao}
              </p>
              <a href="https://api.whatsapp.com/send/?phone=553832235477&text&type=phone_number&app_absent=0" target="_blank">
              <button className="mt-5 z-20 bg-zinc-200 text-zinc-500 md:px-5 px-1 py-2 rounded-xl text-xs">
                ORÇAMENTO
              </button>
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  </SwiperSlide>
))}
      </Swiper>
    </div>
  );
}
