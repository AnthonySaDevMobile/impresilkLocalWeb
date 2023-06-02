import React from 'react'
import Coments from '../Coments'

export default function Depoimentos() {
  return (
    <div className="w-full h-fit pb-20 bg-zinc-100" id="depoimentos">
    <p className="tracking-widest text-center font-semibold text-xs pt-10 text-zinc-400">
      DEPOIMENTOS
    </p>
    <div className="flex gap-2 items-center justify-center mt-5 text-xl md:text-3xl">
      <p>O que</p>
      <strong>os clientes dizem?</strong>
    </div>
    <Coments />
  </div>
  )
}
