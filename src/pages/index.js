import { Inter } from "next/font/google";
import Image from "next/image";
import {
  IoCall,
  IoCellular,
  IoLocate,
  IoLocation,
  IoMenu,
} from "react-icons/io5";
import UxFooter from "./components/uxFooter";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const currentYear = new Date().getFullYear();
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
      title: "Conctacto",
      path: "#contacto",
    },
  ];
  const servicios = [
    {
      title: "AUDITORIA",
      descripcion: {
        title1: "AUDITORIA DE ESTADOS FINANCIEROS",
        title2: "Procedimientos Acordados de Auditoría y/o Atestiguació",
        title3:
          " Diagnóstico e Implementación de Normas Internacionales de Información Financiera",
      },
    },
    {
      title: "IMPUESTOS Y LEGAL",
      descripcion: {
        title1: "CONSULTORIA TRIBUTARIA",
        title2: "Fiscalizaciones y Defensa Tributaria",
        title3: "PLANEAMIENTO TRIBUTARIO",
      },
    },
    {
      title: "CONSULTORIA",
      descripcion: {
        title1: " CONSULTORIA DE NEGOCIOS",
        title2: "CONSULTORIA DE PROCESOS",
        title3: "  CONSULTORIA FINANCIERA Y VALORIZACIONES"
      },
    },
    {
      title: "OUTSOURCING CONTABLE Y SERVICIOS DE NEGOCIOS",
      descripcion: {
        title1: "OUTSOURCING CONTABLE DIGITAL",
        title2: " Administración y Tesorería, Domicilio Fiscal y Representación Legal",
        title3:
          "INVENTARIOS FISICOS",
      },
    },
  ];
  const equipo = [
    {
      nombre: "C.P.C Javier Villegas ",
      descripcion:
        "Cuenta con una Maestría en Administración y Finanzas en (UNMS), un Post Grado en Finanzas (U. Lima), Especialización en Normas Internacionales de Contabilidad (U. Lima), Especialización en Tributación (ESAN) donde obtuvo el primer puesto y cuenta con especialización en Precio de Transferencia(ESAN) . Contando con más 20 años de experiencia brindado servicios de asesoría y desarrollo empresarial",
    },
    {
      nombre: "Victor Aliaga Zenteno",
      descripcion:
       
        "Contador público Colegiado de la Universidad Nacional Mayor de San Marcos ,Auditor independiente, Estudios de Maestria en Gestión Publica, ex funcionario  de la Controlaria General de la República y SUNAT, Auditor Financiero y  Gubernamental"
        
    },
    {
      nombre: "Christian Misael Torres Yupanqui ",
      descripcion:
        "Supervisor de Auditoria Licenciado de Contabilidad de la UNAC , ex funcionario de la SUNAT  contador  y audito, docente universitario de NICs y NIFs, Maestria Finanzas",
    },
    {
      nombre: "C.P.C Javier Villegas ",
      descripcion:
        "Cuenta con una Maestría en Administración y Finanzas en (UNMS), un Post Grado en Finanzas (U. Lima), Especialización en Normas Internacionales de Contabilidad (U. Lima), Especialización en Tributación (ESAN) donde obtuvo el primer puesto y cuenta con especialización en Precio de Transferencia(ESAN) . Contando con más 20 años de experiencia brindado servicios de asesoría y desarrollo empresarial",
    },
  ];
  return (
    <>
      <header className=" py-5 flex justify-between  items-center bg-black shadow-md px-6 md:py-2">
        <div>
          <p className="  text-xl  text-white font-bold">
            Bonnie<span className=" text-[#58ecff]">Dev</span>
          </p>
        </div>
        <nav className=" hidden md:block p-4">
          <ul>
            {link?.map((item) => (
              <li key={item.title} className=" inline-block   px-2    ">
                <a
                  className="  text-lg font-semibold  text-white  p-2  border-t-4 border-b-4  border-transparent transition-all hover:border-orange-700 hover:text-orange-700  "
                  href={item.path}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="  block  md:hidden">
          <IoMenu size={30} color=" white" />
        </div>
      </header>

      <main>
        <div className="relative px-[50px] h-[400px]   lg:px-[150px]  lg:h-[900px] py-20 flex  justify-center items-center">
          {/* Contenedor de la imagen */}
          <div className="absolute top-0 left-0 w-full h-full z-[-1] after:bg-black/70 after:absolute after:top-0 after:left-0 after:w-full after:h-full">
            <Image
              src="/contabilidad.jpg" // Ajusta la ruta si es necesario
              alt="Imagen de contabilidad"
              layout="fill" // O usa "responsive" si prefieres que se ajuste proporcionalmente
              objectFit="cover" // Ajusta el ajuste de la imagen
            />
          </div>

          {/* Contenedor del contenido */}
          <div className="relative z-10">
            <h1
             
              className=" text-2xl   md:text-5xl    lg:text-7xl font-[impact] font-bold text-white mb-4"
            >
              Contáctanos para Consultas y Asesoramiento Contable
            </h1>
            <p
              className=" hidden md:block text-sm  md:text-lg lg:text-xl  text-white   font-bold filter  drop-shadow-sm   mb-2"
             
            >
              Bienvenido a [Nombre de la Empresa], tu aliado confiable en
              contabilidad y gestión financiera. Ofrecemos servicios
              profesionales para ayudarte a mantener tus finanzas organizadas y
              optimizadas. Descubre cómo nuestros expertos pueden ayudarte a
              alcanzar tus objetivos financieros con confianza.
            </p>
            <button className="bg-sky-800 text-lg p-4 rounded-md text-white lg:text-xl font-semibold px-8 mt-3 shadow-sm">
              Consultar
            </button>
          </div>
        </div>

        <section className="   px-[20px]   flex flex-col-reverse  gap-4  my-10 lg:px-[150px] ">
          <div className=" flex gap-2  flex-wrap  "></div>
          <div className=" ">
            <h2 className=" text-3xl lg:text-5xl  text-center  font-bold  text-sky-950 mb-10 font-[impact]">
              Quiénes somos
            </h2>
            <div className=" flex justify-center flex-wrap  items-center gap-[10%]  ">
              <div className=" w-full    lg:w-[40%] ">
                <p className=" text-2xl   text-black">
                  Una firma con experiencia local que pone a su dispoisicion
                  profesionales especializados contando con mas de 20 años de
                  experiencia en el mercado en los servicios como :
                </p>
                <ul className=" p-2">
                  <li className=" p-1 text-lg text-black   list-disc">
                    auditoria
                  </li>
                  <li className=" p-1 text-lg text-black list-disc">
                    outosurcing
                  </li>
                  <li className=" p-1 text-lg text-black list-disc">
                    contable tributario
                  </li>
                  <li className=" p-1 text-lg text-black list-disc">
                    administrativo
                  </li>
                  <li className=" p-1 text-lg text-black list-disc">
                    procesamiento de nominas automatizado
                  </li>
                  <li className=" p-1 text-lg text-black list-disc">
                    soporte teconologico
                  </li>
                </ul>
              </div>
              <div className="  w-full lg:w-[40%] h-[400px] relative rounded-lg overflow-hidden">
                <Image
                  src="/contabilidad.jpg" // Ajusta la ruta si es necesario
                  alt="Imagen de contabilidad"
                  layout="fill"
                  objectFit="cover" // Ajusta el ajuste de la imagen
                />
              </div>
            </div>
          </div>
        </section>
        <section className=" px-[20px]  lg:px-[150px] ">
          <h2 className="text-3xl lg:text-5xl  font-bold  text-sky-950 mb-2 font-[impact] text-center">
            Nuestro Servicios
          </h2>
          <div className=" flex    justify-center   gap-5 flex-wrap  mt-14">
            {servicios?.map((item, index) => (
              <div
                key={index}
                className=" relative  w-[300px]   md:min-w-[380px]   rounded-lg  px-2 py-16  md:max-w-[500px]"
              >
                <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                  <Image
                    src="/contabilidad.jpg" // Ajusta la ruta si es necesario
                    alt="Imagen de contabilidad"
                    layout="fill" // O usa "responsive" si prefieres que se ajuste proporcionalmente
                    objectFit="cover" // Ajusta el ajuste de la imagen
                  />
                </div>
                <div className="  m-4 px-5 bg-sky-950/60 py-10">
                  <p className="  text-base text-white font-bold  lg:text-lg text-center mb-2 rounded-sm">
                    {item.title}
                  </p>
                  <ul>
                    <li className=" text-sm  lg:text-base text-white  font-semibold  mb-1 list-disc">
                      {item.descripcion.title1}
                    </li>
                    <li className=" text-sm lg:text-base text-white font-semibold mb-1 list-disc ">
                      {item.descripcion.title2}
                    </li>
                    <li className=" text-sm lg:text-base text-white font-semibold list-disc ">
                      {item.descripcion.title3}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className=" bg-sky-950   p-10 my-10">
          <p className=" text-white text-center text-lg">
            {" "}
            conoce como podemos ayudarte
          </p>
          <h4 className="text-white text-xl text-center  lg:text-3xl font-bold ">
            Descarga nuestro brochure corporativo
          </h4>
        </section>
        <section className=" px-[20px] lg:px-[150px] ">
          <h2 className=" text-3xl lg:text-5xl   font-bold  text-sky-950 mb-2 font-[impact] text-center">
            Equipo de Talento
          </h2>
          <div className=" flex  justify-center   gap-5 flex-wrap  mt-14">
            {equipo?.map((item, index) => (
              <div
                key={index}
                className=" relative shadow-lg  flex justify-center items-center  flex-col  w-[350px]  rounded-md overflow-hidden  px-4 py-6 "
              >
                <div className=" bg-sky-950  w-full h-[330px] rounded-full  absolute  -top-[40%] " />

                <div className="  w-[160px] h-[160px] relative  p-1 rounded-full overflow-hidden bg-red-100">
                  <Image
                    src="/contabilidad.jpg" // Ajusta la ruta si es necesario
                    alt="Imagen de contabilidad"
                    layout="fill" // O usa "responsive" si prefieres que se ajuste proporcionalmente
                    objectFit="cover" // Ajusta el ajuste de la imagen
                  />
                </div>

                <p className="   text-sky-950  font-bold p-2  text-lg  text-center  ">
                  {item.nombre}
                </p>

                <p className="  text-sky-950  p-2 text-sm  text-center  ">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="contacto"
          className=" relative px-[20px] lg:px-[150px] py-10 pb-10"
        >
          <div class="custom-shape-divider-bottom-1726509634">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <div>
            <h2 className="  text-3xl lg:text-5xl  text-center  font-bold  text-sky-950 mb-6 font-[impact]">
              Contacto
            </h2>
            <div className=" flex  flex-wrap lg:flex-nowrap justify-center items-center  gap-10 p-4 mb-10">
              <div className=" shadow-lg p-10  min-h-[400px]  flex  flex-col justify-center max-h-[500px]">
                <p className=" text-sky-950   text-lg font-semibold mb-3">
                  CTY Asesoria yConsultoria Empresarial
                </p>
                <p className=" text-sky-950   text-lg   mb-3">
                  Auditoria, Servicios Contables tributarios y Administrativos
                </p>
                <div className=" flex  items-center mb-2 ">
                  <IoLocation size={20} color="#EF6077" />
                  <p className=" text-sky-950  ">
                    Direccion: <small> av viena 332 - tinguiña</small>
                  </p>
                </div>
                <div className=" flex  items-center mb-1 ">
                  <IoCall size={20} color="#EF6077" />
                  <p className=" text-sky-950  ">
                    teléfono: <small>953442242</small>
                  </p>
                </div>
              </div>
              <div className=" w-[100%] min-h-[300px]  max-h-[350px]  lg:min-w-[400px] max-w-[600px] lg:h-[400px]">
                <iframe
                className=" w-[100%] min-h-[250px]  max-h-[350px]  lg:min-w-[400px] max-w-[600px] lg:h-[400px] "
                  width={"100%"}
                  height={"100%"}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.3726100411807!2d-75.73930066116168!3d-14.033110944434963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110fd37e4eae65f%3A0xd60ef56481fbde25!2sFonavi%20San%20Martin%20IV%20Etapa%2C%2011002!5e0!3m2!1ses-419!2spe!4v1726524278790!5m2!1ses-419!2spe"
                  allowfullscreen=""
                  
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className=" bg-[#221F1F] ">
        <div className="  p-10">
          <UxFooter />
        </div>
        <div className=" bg-sky-950 p-6">
          <p className=" text-white text-center text-lg">
            ©{currentYear} Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
