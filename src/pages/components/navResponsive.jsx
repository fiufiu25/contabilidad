"use client"
import React from 'react'

export default function NavResponsive({link,open,linkHangleClick}) {
    
  return (
    <nav   className={`absolute bg-black w-full h-[400px] top-0 left-0 z-20 flex justify-center items-center shadow-md shadow-white/10 transition-transform duration-500 ${
        open ? "translate-y-0" : "-translate-y-[200%]"
      }`} >
          <ul>
            {link?.map((item) => (
              <li key={item.title} className="    px-2 py-3    ">
                <a
                onClick={()=>linkHangleClick()}
                  className="  text-lg font-semibold  text-white  p-2  border-t-4 border-b-4  border-transparent transition-all hover:border-orange-700 hover:text-orange-700  "
                  href={item.path}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
    </nav>
  )
}
