import React from 'react'
import {
  FaRoute,
  FaStar,
  FaStarHalf,
  FaStreetView,
} from "react-icons/fa";

import mapa from '../../assets/mapa.png'
export default function Mapa() {
  return (
    <div className="md:h-fit h-40 relative w-full">
      <img src={mapa} alt='mapa' className="object-cover h-full w-full" />
      <div className="bg-blue-700 w-2/5 md:w-fit md:h-fit p-2 md:p-4 absolute top-0 md:top-1/4 md:left-20 flex md:gap-3 justify-between">
        <div>
          <div className="text-white text-xs">
            <strong>Impresilk</strong>
            <p className="text-zinc-200 md:mt-5">
              Av. Felíciano Martins de Freitas, 127
            </p>
            <p className="text-zinc-200">Vila Regina</p>
            <p className="text-zinc-200 ">Montes Claros | MG</p>
          </div>
          <div className="hidden md:flex items-center text-white mt-5 gap-1">
            <strong>4.5</strong>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
          <p className="text-zinc-200 text-xs">105 views</p>
        </div>

        <div className="hidden md:flex md:flex-col  justify-center text-xs">
          <div className="flex md:gap-2">
            <a href="https://www.google.com/maps/dir/Impresilk+Solu%C3%A7%C3%B5es+Visuais+-+Av.+Fel%C3%ADciano+Martins+de+Freitas,+127+-+Vila+Regina,+Montes+Claros+-+MG,+39400-207/@-16.7014315,-43.8750843,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x754ab5a9cf15555:0x647818a8b55dca40!2m2!1d-43.8594299!2d-16.7126121!3e0
" target='_blank'>
              <div className="bg-blue-600  w-14 text-center h-24 flex flex-col items-center justify-center text-white gap-2">
                <FaRoute size={30} />
                <p className="text-zinc-200">Rota</p>
              </div>
            </a>
            <a href="https://www.google.com/maps/@-16.712691,-43.8593548,3a,75y,308.24h,88.74t/data=!3m7!1e1!3m5!1sTZR2bAi2to2PCxpzv7bo6Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DTZR2bAi2to2PCxpzv7bo6Q%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D58.44444%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192" target='_blank'>
              <div className="bg-blue-600 w-14 text-center h-24 flex flex-col items-center justify-center text-white gap-2">
                <FaStreetView size={30} />
                <p className="text-zinc-200">Street View</p>
              </div>
            </a>
          </div>
          <a href="https://www.google.com/maps/place/Impresilk+Solu%C3%A7%C3%B5es+Visuais/@-16.7126069,-43.8620048,17z/data=!3m1!4b1!4m6!3m5!1s0x754ab5a9cf15555:0x647818a8b55dca40!8m2!3d-16.7126121!4d-43.8594299!16s%2Fg%2F1vhkkrhg" target='_blank'>
            <button className="bg-white mt-5 rounded-xl font-semibold text-blue-700 px-5 py-2">VER NO MAPA</button>
          </a>
        </div>
      </div>
    </div>
  )
}
