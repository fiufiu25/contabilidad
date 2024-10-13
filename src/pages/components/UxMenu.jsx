"use client"
import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'

export default function UxMenu({setOpen,open}) {
  
    
  return (
    <>
    <div className="  block  md:hidden cursor-pointer z-50">
          <IoMenu size={30} color=" black"  onClick={()=>setOpen(!open)}/>
        </div>
    </>
  )
}
