"use client"
import React, { useEffect, useRef, useState } from 'react'
import NavResponsive from './navResponsive';
import UxMenu from './UxMenu';
import Image from 'next/image';
import logo from "../../../public/logo.jpg"
export default function UxNav() {
    const [open , setOpen]=useState(false)
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
          title: "Quiénes Somos",
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
          title: "Contacto",
          path: "#contacto",
        },
      ];
      const  linkHangleClick=()=>{
        setOpen(false)
       
      }
      console.log(open)
  return (

    <>
    <header  ref={navRef} className=" py-5 flex justify-between  items-center shadow-md px-6 md:py-2">
        <div>
          <Image src={logo} width={80} height={80}  className={" rounded-lg"} />
        </div>
        <nav className=" hidden md:block p-4">
    <ul>
      {link?.map((item) => (
        <li key={item.title} className=" inline-block   px-1    ">
          <a
            className="  text-base font-semibold  text-black  p-2  border-t-4 border-b-4  border-transparent transition-all hover:border-orange-700 hover:text-orange-700  "
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
