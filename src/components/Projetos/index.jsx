import React from 'react'
import CarouselProjetos from '../CarouselProjetos'

export default function Projetos() {
  return (
    <div className="py-10 sm:w-9/12 sm:m-auto text-center" id="projetos">
    <h1 className="tracking-widest text-sm text-zinc-500">PROJETOS</h1>
    <p className="mt-10 text-2xl">Últimos</p>
    <strong>Projetos Entregues</strong>
    <div className="mt-5">
      <CarouselProjetos />
    </div>
  </div>
  )
}
