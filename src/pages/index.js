
import { Inter } from "next/font/google";
import Image from "next/image";
import {IoMenu} from "react-icons/io5"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const  link=[{
    title:"inicio",
    path:"#inicio"

  },
  {
    title:"Quienes Somos",
    path:"#quienesSomos"

  },
  {
    title:"Conctacto",
    path:"#contacto"

  },
  


]
const servicios=[
  {
    title:"AUDITORIA",
    descripcion:{
      title1:"AUDITORIA DE ESTADOS FINANCIEROS",
      title2:"Procedimientos Acordados de Auditoría y/o Atestiguació",
      title3:" Diagnóstico e Implementación de Normas Internacionales de Información Financiera"
    },

  },
  {
    title:"AUDITORIA",
    descripcion:{
      title1:"AUDITORIA DE ESTADOS FINANCIEROS",
      title2:"Procedimientos Acordados de Auditoría y/o Atestiguació",
      title3:" Diagnóstico e Implementación de Normas Internacionales de Información Financiera"
    },
    
  },
  {
    title:"AUDITORIA",
    descripcion:{
      title1:"AUDITORIA DE ESTADOS FINANCIEROS",
      title2:"Procedimientos Acordados de Auditoría y/o Atestiguació",
      title3:" Diagnóstico e Implementación de Normas Internacionales de Información Financiera"
    },
    
  },
  {
    title:"AUDITORIA",
    descripcion:{
      title1:"AUDITORIA DE ESTADOS FINANCIEROS",
      title2:"Procedimientos Acordados de Auditoría y/o Atestiguació",
      title3:" Diagnóstico e Implementación de Normas Internacionales de Información Financiera"
    },
    
  },
 
]
const equipo=[
  {
    title:"C.P.C Javier Villegas, cuenta con una Maestría en Administración y Finanzas en (UNMS), un Post Grado en Finanzas (U. Lima), Especialización en Normas Internacionales de Contabilidad (U. Lima), Especialización en Tributación (ESAN) donde obtuvo el primer puesto y cuenta con especialización en Precio de Transferencia(ESAN) . Contando con más 20 años de experiencia brindado servicios de asesoría y desarrollo empresarial"
  },
  {
    title:"C.P.C Javier Villegas, cuenta con una Maestría en Administración y Finanzas en (UNMS), un Post Grado en Finanzas (U. Lima), Especialización en Normas Internacionales de Contabilidad (U. Lima), Especialización en Tributación (ESAN) donde obtuvo el primer puesto y cuenta con especialización en Precio de Transferencia(ESAN) . Contando con más 20 años de experiencia brindado servicios de asesoría y desarrollo empresarial"
  },
  {
    title:"C.P.C Javier Villegas, cuenta con una Maestría en Administración y Finanzas en (UNMS), un Post Grado en Finanzas (U. Lima), Especialización en Normas Internacionales de Contabilidad (U. Lima), Especialización en Tributación (ESAN) donde obtuvo el primer puesto y cuenta con especialización en Precio de Transferencia(ESAN) . Contando con más 20 años de experiencia brindado servicios de asesoría y desarrollo empresarial"
  },
  {
    title:"C.P.C Javier Villegas, cuenta con una Maestría en Administración y Finanzas en (UNMS), un Post Grado en Finanzas (U. Lima), Especialización en Normas Internacionales de Contabilidad (U. Lima), Especialización en Tributación (ESAN) donde obtuvo el primer puesto y cuenta con especialización en Precio de Transferencia(ESAN) . Contando con más 20 años de experiencia brindado servicios de asesoría y desarrollo empresarial"
  },

]
  return (
    <>

    <header className=" flex justify-between  items-center shadow-md px-6 py-2">
      <div>
        <p  className="  text-lg  text-sky-950 font-bold"> PY</p>
      </div>
       <nav className=" p-4">
        <ul>
           {link?.map(item=>(
           
           <li key={item.title}  className=" inline-block   px-2    " > 
              <a className="  text-lg font-semibold  text-sky-950  p-2  border-t-4 border-b-4  border-transparent transition-all hover:border-orange-700 hover:text-orange-700  " href={item.path}>{item.title}</a>
            </li>
           ))}
        </ul>
       </nav>
       <div className="  hidden  md:none">
       <IoMenu size={ 30}/>
       </div>
    </header>

      <main >
      <div className="relative px-[200px]  h-[900px] py-20 flex  justify-center items-center">
      {/* Contenedor de la imagen */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] after:bg-black/80 after:absolute after:top-0 after:left-0 after:w-full after:h-full" >
        <Image
          src="/contabilidad.jpg" // Ajusta la ruta si es necesario
          alt="Imagen de contabilidad"
          layout="fill" // O usa "responsive" si prefieres que se ajuste proporcionalmente
          objectFit="cover" // Ajusta el ajuste de la imagen
        />
      </div>

      {/* Contenedor del contenido */}
      <div className="relative z-10">
        <h1 style={{ filter: 'drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.2))' }} className="text-7xl font-[impact] font-bold text-orange-600 mb-2">
          Contáctanos para Consultas y Asesoramiento Contable
        </h1>
        <p className="text-2xl  text-sky-950   font-bold filter  drop-shadow-sm   mb-2" style={{ filter: 'drop-shadow(1px 2px 1px rgba(255, 255, 255, 0.3))' }}>
          Bienvenido a [Nombre de la Empresa], tu aliado confiable en contabilidad y gestión financiera. Ofrecemos servicios profesionales para ayudarte a mantener tus finanzas organizadas y optimizadas. Descubre cómo nuestros expertos pueden ayudarte a alcanzar tus objetivos financieros con confianza.
        </p>
        <button className="bg-sky-950 p-4 rounded-md text-white text-xl font-semibold px-8 mt-3 shadow-sm">
          Consultar
        </button>
      </div>
    </div>
      
  <section className="    flex flex-col-reverse  gap-4  my-10 px-[150px] ">
    <div className=" flex gap-2  flex-wrap  ">
     
      
      
     
    </div>
    <div className=" ">
      <h2 className=" text-5xl  text-center  font-bold  text-sky-950 mb-4 font-[impact]">Quiénes somos</h2>
  <p className=" text-xl  text-center text-sky-950">
  somos un aempresa con mas de 20 años de experiencia en el mercado en los servicios de auditoria, outosurcing contable tributario, administrativo y procesamiento de nominas auomatizado. Una firma con experiencia local que pone a su dispoisicion profesionales especializados , conocimiento y soporte teconologico.
      </p>
    </div>
  </section>
  <section className="px-[150px] ">
         <h2 className=" text-5xl   font-bold  text-sky-950 mb-2 font-[impact] text-center">Nuestro Servicios</h2>
       <div className=" flex  gap-3 flex-wrap  mt-14">
       {
        servicios?.map((item,index)=>(
        <div key={index} className=" relative  min-w-[300px]   rounded-sm  px-2 py-6  max-w-[380px]">
         <div className="absolute top-0 left-0 w-full h-full z-[-1]" >
        <Image
          src="/contabilidad.jpg" // Ajusta la ruta si es necesario
          alt="Imagen de contabilidad"
          layout="fill" // O usa "responsive" si prefieres que se ajuste proporcionalmente
          objectFit="cover" // Ajusta el ajuste de la imagen
        />
      </div>
    <div className="  m-4 px-5 bg-sky-950/60 py-10">
    <p className="  text-white font-bold text-lg text-center mb-2 rounded-sm" >
        {item.title}
      </p>
      <ul>
        <li className="  text-white  font-semibold  mb-1" >{item.descripcion.title1}</li>
        <li className="  text-white font-semibold mb-1 " >{item.descripcion.title2}</li>
        <li className="  text-white font-semibold " >{item.descripcion.title3}</li>
      </ul>
      </div>

        </div>
        ))
       }
      

      
       </div>
       </section>
   <section className=" bg-sky-950   p-10 my-10">
    <p className=" text-white text-center text-lg"> conoce como podemos ayudarte</p>
      <h4 className="text-white text-center text-3xl font-bold ">
        Descarga nuestro  brochure corporativo
      </h4>
   </section>
   <section className="px-[150px] ">
         <h2 className=" text-5xl   font-bold  text-sky-950 mb-2 font-[impact] text-center">Equipo de Talento</h2>
       <div className=" flex  gap-3 flex-wrap  mt-14">
       {
        equipo?.map((item,index)=>(
        <div key={index} className=" relative   w-[350px] h-[350px]  rounded-full overflow-hidden  px-2 py-6 flex justify-center  items-center ">
         <div className="absolute top-0 left-0 w-full h-full z-[-1] after:bg-black/40 after:absolute after:top-0 after:left-0 after:w-full after:h-full" >
        <Image
          src="/contabilidad.jpg" // Ajusta la ruta si es necesario
          alt="Imagen de contabilidad"
          layout="fill" // O usa "responsive" si prefieres que se ajuste proporcionalmente
          objectFit="cover" // Ajusta el ajuste de la imagen
        />
      </div>
    
    <p className=" text-white  p-6 text-sm  text-center  ">
{item.title}
    </p>
     

        </div>
        ))
       }
      

      
       </div>
       </section>
      </main>
    </>
  );
}
