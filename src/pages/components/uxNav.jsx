"use client"
import React, { useEffect, useRef, useState } from 'react'
import NavResponsive from './navResponsive';
import UxMenu from './UxMenu';

export default function UxNav() {
    const [open , setOpen]=useState(true)
    const  navRef=useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (navRef.current && !navRef.current.contains(event.target)) {
            setOpen(false); // Cierra el navbar si se hace clic fuera
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [setOpen]);

    const link = [
        {
          title: "inicio",
          path: "#inicio",
        },
        {
          title: "Quienes Somos",
          path: "#quienesSomos",
        },
        {
          title: "Nuestro Servicios",
          path: "#nuestroServicios",
        },
        {
          title: "Profesionales",
          path: "#profesionales",
        },
    
        {
          title: "Conctacto",
          path: "#contacto",
        },
      ];
      const  linkHangleClick=()=>{
        setOpen(false)
      }
      
  return (

    <>
    <header  ref={navRef} className=" py-5 flex justify-between  items-center bg-black shadow-md px-6 md:py-2">
        <div>
          <p className="  text-xl  text-white font-bold">
            Bonnie<span className=" text-[#58ecff]">Dev</span>
          </p>
        </div>
        <nav className=" hidden md:block p-4">
    <ul>
      {link?.map((item) => (
        <li key={item.title} className=" inline-block   px-1    ">
          <a
            className="  text-base font-semibold  text-white  p-2  border-t-4 border-b-4  border-transparent transition-all hover:border-orange-700 hover:text-orange-700  "
            href={item.path}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>

  </nav>
        <NavResponsive open={open}  linkHangleClick={linkHangleClick}  link={link} />
        <UxMenu  setOpen={setOpen}  open={open}/>
      </header>
    </>
   
  )
}
