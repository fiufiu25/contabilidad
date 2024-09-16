import React from 'react'
import { IoCall, IoLocation, IoLogoFacebook, IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5'

export default function UxFooter() {
    // Obtener el año actual
  return (
  <>
    <div  className=' flex  justify-around  items-start gap-4 flex-wrap' >
      <div className=' relative'>
      <p className="  text-xl  text-white font-bold">
           
           Bonnie<span className=" text-[#58ecff]">Dev</span>
         </p>
      </div>
      <div>
        <h5 className='  text-white font-bold mb-2 text-xl'>
            Sobre Nosotros
        </h5>
        <p className='  text-white  max-w-[300px] '>
        somos un aempresa con mas de 20 años de experiencia en el mercado en los servicios de auditoria
        </p>
      </div>
      <div>
        <h5 className='mb-2  text-white font-bold text-xl' >Contacto</h5>
        <div className=" flex  items-center mb-2 ">
                  <IoLocation size={20} color="#EF6077" />
                  <p className=" text-white  ">
                    Direccion: <small> av viena 332 - tinguiña</small>
                  </p>
                </div>
                <div className=" flex  items-center mb-1 ">
                  <IoCall size={20} color="#EF6077" />
                  <p className=" text-white  ">
                    teléfono: <small>953442242</small>
                  </p>
                </div>
      </div>
      <div>
      <h5 className='  text-white font-bold text-xl'>
            Siguenos
        </h5>
        <div className=' flex  gap-4 mt-5'>
        <div className='p-2 rounded-lg bg-sky-950 cursor-pointer  '>
            <IoLogoFacebook  color='white' size={30}/>
        </div>
        <div className='p-2 rounded-lg bg-sky-950 cursor-pointer '>
            <IoLogoInstagram  color='white' size={30}/>
        </div>
        <div className='p-2 rounded-lg bg-sky-950 cursor-pointer '>
            <IoLogoTiktok  color='white' size={30}/>
        </div>
        </div>
      </div>
    </div>
   
    </>
  )
}
