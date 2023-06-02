import React, {useState, useEffect} from 'react'
import CarouselProducts from '../CarouselProducts'


export default function Produtos() {



  return (
    <div id="produtos">
    <div className="w-full bg-zinc-100 pb-5 pt-10 md:h-fit">
      <div className="mt-10 sm:w-9/12 sm:m-auto">
        <p className="w-[60px] h-[2px] bg-blue-600 mb-10"></p>
        <div className="flex items-center sm:flex-row flex-col justify-between">
          <div className="sm:w-1/2 sm:px-0 px-8">
            <p className="tracking-widest text-zinc-500 text-xs">
              PRODUTOS
            </p>
            <div className="flex gap-1">
              <strong className="text-xl md:text-3xl ">O que</strong>
              <p className="text-xl md:text-3xl">fazemos?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-9/12 md:m-auto">
        <CarouselProducts />
      </div>
    </div>
  </div>
  )
}
