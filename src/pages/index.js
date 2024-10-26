import { Inter } from "next/font/google";
import Image from "next/image";
import { IoCall, IoLocation, IoLogoWhatsapp } from "react-icons/io5";
import UxFooter from "./components/uxFooter";
import cristian from "../../public/cristian.png";
import javier from "../../public/javier.png";
import evelin from "../../public/evelin.png";
import eduardo from "../../public/eduardo.png";
import UxNav from "./components/uxNav";
import servicio1 from "../../public/servicio1.png";
import servicio2 from "../../public/servicio2.jpg";
import servicio3 from "../../public/servicio3.jpg";
import servicio4 from "../../public/servicio4.jpg";
import imagenMedio from "../../public/imagenmedio.jpg";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const currentYear = new Date().getFullYear();

  const servicios = [
    {
      title: "AUDITORIA",
      descripcion: {
        title1: "Auditoría de Estados Financieros",
        title2: "Procedimientos Acordados de Auditoría y/o Atestiguación",
        title3:
          " Diagnóstico e Implementación de Normas Internacionales de Información Financiera",
      },
      img: servicio1,
    },
    {
      title: "IMPUESTOS Y LEGAL",
      descripcion: {
        title1: "Consultoría Tributaria",
        title2: "Fiscalizaciones y Defensa Tributaria",
        title3: "Planeamiento Tributario",
      },
      img: servicio2,
    },
    {
      title: "CONSULTORÍA",
      descripcion: {
        title1: " Consultoría de Negocios",
        title2: "Consultoría de Procesos",
        title3: "Consultoría Financiera y Valorizaciones",
      },
      img: servicio3,
    },
    {
      title: "OUTSOURCING CONTABLE Y SERVICIOS DE NEGOCIOS",
      descripcion: {
        title1: "Outsourcing Contable Digital",
        title2:
          " Administración y Tesorería, Domicilio Fiscal y Representación Legal",
        title3: "Inventarios Físicos",
      },
      img: servicio4,
    },
  ];
  const equipo = [
    {
      nombre: "C.P.C Javier Villegas ",
      descripcion:
        "Cuenta con una Maestría en Administración y Finanzas en (UNMSM), un Post Grado en Finanzas (U. Lima), Especialización en Normas Internacionales de Contabilidad (U. Lima), Especialización en Tributación (ESAN) donde obtuvo el primer puesto y cuenta con especialización en Precio de Transferencia (ESAN). Contando con más 20 años de experiencia brindado servicios de asesoría y desarrollo empresarial.",
      img: javier,
    },

    {
      nombre: " C.P.C Victor Aliaga Zenteno",
      descripcion:
        "Contador Público Colegiado de la Universidad Nacional Mayor de San Marcos, Auditor Independiente, Estudios de Maestría en Gestión Pública, exfuncionario de la Contraloría General de la República y SUNTA, Auditor Financiero y Gubernamental.",
      img: eduardo,
    },
    {
      nombre: "C.P.C Christian Misael Torres Yupanqui ",
      descripcion:
        "Supervisor de Auditoría Licenciado de Contabilidad de la UNAC, ex funcionario de la SUNAT contador y auditor, docente universitario de NICs y NIIFs, Maestría en Finanzas.",
      img: cristian,
    },
    {
      nombre: "C.P.C Evelyn Flor Misari Hilifoncio",
      descripcion:
        "Contadora pública titulada de la Universidad Privada Nobert Wiener y perteneciente al tercio superior. Experiencia laboral en empresas corporativas el área de administración y contabilidad.",
      img: evelin,
    },
  ];
  return (
    <>
      <UxNav />

      <main>
        <section
          id="inicio"
          className="relative px-[20px] h-[400px] lg:px-[150px]  lg:h-[900px] py-20 flex  justify-center items-center"
        >
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
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500"
              className="   xl:leading-[70px]  max-w-[1000px] text-lg  md:text-3xl   lg:text-4xl xl:text-5xl  font-bold text-white mb-4"
            >
              “Expertos en contabilidad e impuestos, comprometidos a solucionar
              problemas de tu negocio y el bienestar financiero de tu empresa.”
            </h1>

            <button
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1500"
              //className="bg-[#E42F1B]  px-40  text-lg  md:p-4 text-center   rounded-tl-full   rounded-bl-full  rounded-tr-full rounded-br-full text-white lg:text-xl font-semibold  mt-3 shadow-sm"
              className="bg-[#E42F1B] text-white text-base font-semibold  px-16   lg:px-20  py-4  rounded-tl-full   rounded-bl-full my-2  rounded-tr-full rounded-br-full lg:my-10 lg:text-lg"
            >
              Consultar
            </button>
          </div>
        </section>

        <section
          id="quienesSomos"
          className="   px-[20px] bg-[#E42F1B]  py-16  flex flex-col-reverse  gap-4  my-10 lg:px-[100px] "
        >
          <div className=" flex gap-2   flex-wrap  "></div>
          <div className=" ">
            <div className="flex justify-center">
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="  text-3xl lg:text-5xl  text-center  font-bold  text-white mb-4  border-b-4 pb-4 px-8 md:px-16  mr-auto ml-auto inline-block border-[#FFB600]"
              >
                ¿Quienes Somos?
              </h2>
            </div>
            <div className=" flex justify-center flex-wrap  items-center gap-[10%]  ">
              <div className=" w-full    lg:w-[40%] ">
                <p
                  style={{ lineHeight: "35px" }}
                  data-aos-duration="500"
                  data-aos="zoom-in "
                  data-aos-delay="300"
                  className=" text-lg mb-4 md:mb-2 md:text-xl  md:text-justify   text-white"
                >
                  Somos una empresa con mas de 20 años de experiencia en el
                  mercado en los servicios de auditoria, outosurcing contable
                  tributario, administrativo y procesamiento de nominas
                  automatizado. Una firma con experiencia local que pone a su
                  disposicion profesionales especializados , conocimiento y
                  soporte tecnologico.
                </p>
              </div>
              <div
                data-aos-duration="500"
                data-aos-delay="300"
                data-aos="zoom-in-right"
                className="   w-full lg:w-[500px] h-[300px] relative rounded-lg overflow-hidden"
              >
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
        <section
          id="nuestroServicios"
          className=" px-[20px]  py-16  lg:px-[150px] bg-[#DE6014] "
        >
          {" "}
          <div className="flex justify-center">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="  text-3xl lg:text-5xl  text-center  font-bold  text-white mb-4  border-b-4 pb-4 px-8 md:px-16  mr-auto ml-auto inline-block border-[#FFB600]"
            >
              Nuestro Servicios
            </h2>
          </div>
          <div className=" flex    justify-center    2xl:flex-nowrap  flex-wrap gap-5 f mt-14">
            {servicios?.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className=" relative  flex justify-center  items-center w-[310px]  h-[500px]  md:min-w-[350px]  overflow-hidden rounded-md  px-2 py-16  md:max-w-[500px]"
              >
                <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                  <Image
                    src={item.img} // Ajusta la ruta si es necesario
                    alt="Imagen de contabilidad"
                    layout="fill" // O usa "responsive" si prefieres que se ajuste proporcionalmente
                    objectFit="cover" // Ajusta el ajuste de la imagen
                  />
                </div>
                <div className="  m-3 px-5 bg-[#45403C]/60 rounded py-10  h-[250px]">
                  <p
                    style={{ marginTop: index == 3 ? "-24px" : null }}
                    className="  text-base text-white font-bold    lg:text-lg text-left mb-2 rounded-sm border-b-2 border-white"
                  >
                    {item.title}
                  </p>
                  <ul className=" ml-3">
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
        <section className="  relative w-full h-[400px] lg:h-[700px]  after:absolute after:bg-black/60 after:w-full after:h-full  after:top-0 after:left-0  my-10">
          <Image
            src={imagenMedio}
            alt={"servicio"}
            layout="fill"
            objectFit="cover" // Ajusta el ajuste de la imagen
          />
        </section>
        <section
          className=" bg-[#3C3C3A]  py-16  px-[20px] lg:px-[150px] "
          id="profesionales"
        >
          <div className="flex justify-center">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="  text-3xl lg:text-5xl  text-center  font-bold  text-white mb-4  border-b-4 pb-4 px-8 md:px-16 mr-auto ml-auto inline-block border-[#FFB600]"
            >
              Profesionales
            </h2>
          </div>
          <div className=" flex  justify-center   gap-5  flex-wrap  2xl:flex-nowrap mt-14">
            {equipo?.map((item, index) => (
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                key={index}
                className=" relative shadow-lg  bg-white flex   flex-col  w-[350px]  h-[550px] rounded-md overflow-hidden  px-4 py-6 "
              >
                <div
                  style={{
                    backgroundColor: index % 2 == 0 ? "#FFB600" : "red",
                  }}
                  className=" bg-sky-950  w-[400px] h-[350px] rounded-full  absolute -left-7   -top-[45%] "
                />

                <div className=" w-full text-center   flex justify-center items-center  h-[160px] relative  p-1 rounded-full overflow-hidden mb-2">
                  <Image
                    src={item.img} // Ajusta la ruta si es necesario
                    alt="Imagen de contabilidad"
                    // O usa "responsive" si prefieres que se ajuste proporcionalmente

                    // Ajusta el ajuste de la imagen
                    width={160}
                    height={160}
                    className=" rounded-full w-[160px] h-[160px]  bg-gray-400 "
                  />
                </div>

                <p className="   text-[#3D3C58]  font-bold p-2  text-lg    ">
                  {item.nombre}
                </p>

                <p className="  text-[#3D3C58]  p-2    text-justify  ">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="contacto"
          className=" relative  bg-[#CE3855] py-16  px-[20px] lg:px-[150px]  "
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
            <div className="flex justify-center">
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="  text-3xl lg:text-5xl  text-center  font-bold  text-white mb-4  border-b-4 pb-4 px-8 md:px-16 mr-auto ml-auto inline-block border-[#FFB600]"
              >
                Contacto
              </h2>
            </div>

            <div className=" flex  flex-wrap lg:flex-nowrap justify-center items-center  gap-10 p-4 mb-10">
              <div
                data-aos="zoom-out-right"
                className="shadow-lg p-10  min-h-[350px]  flex  flex-col justify-center max-h-[500px] bg-[#3C3C3A]"
              >
                <p className=" text-white   text-lg font-semibold mb-3">
                  CTY Asesoria y Consultoria Empresarial
                </p>
                <p className=" text-white   text-lg   mb-3">
                  Auditoria, Servicios Contables tributarios y Administrativos
                </p>
                <div className=" flex  gap-1  items-start mb-4 ">
                  <IoLocation size={20} color="#EF6077" className=" mt-1" />
                  <p className=" text-white  font-bold ">
                    Direccion:{" "}
                    <small className=" font-normal text-base">
                      {" "}
                      Calle German Schreiber 276 San Isidro, Lima - Perú
                    </small>
                  </p>
                </div>
                <div className=" flex gap-1 items-start mb-1 ">
                  <IoCall size={20} color="#EF6077" />
                  <p className=" text-white font-bold  ">
                    Teléfono:{" "}
                    <small className=" font-normal text-base">
                      +51 993 735 181
                    </small>
                  </p>
                </div>
                <button className="bg-[#FFB600] w-[80%] ml-auto mr-auto rounded-tl-full  rounded-bl-full rounded-tr-full  rounded-br-full text-lg p-2 rounded-md text-white lg:text-xl font-semibold px-8 mt-5 shadow-sm">
                  Contactar
                </button>
              </div>
              <div
                data-aos="zoom-out-right"
                className=" w-[100%] min-h-[330px]  max-h-[350px]  lg:min-w-[400px] max-w-[600px] lg:h-[500px]"
              >
                <iframe
                  width={"100%"}
                  height={"100%"}
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15604.72211162344!2d-77.0286693!3d-12.0997906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c911c4f64cfb%3A0xd7432189af2e542c!2sC.%20German%20Schreiber%20Gulsmanco%20276%2C%20San%20Isidro%2015047!5e0!3m2!1ses!2spe!4v1729955876544!5m2!1ses!2spe"
                  className=" w-[100%] min-h-[330px]  max-h-[350px]  lg:min-w-[400px] max-w-[600px] lg:h-[500px] "
                  allowfullscreen=""
                  loading="lazy"
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
      <div className=" fixed   justify-center flex items-center cursor-pointer w-[60px] h-[60px] rounded-full  bottom-10 right-4 bg-white shadow-lg">
        <IoLogoWhatsapp size={50} className=" text-green-600" />
      </div>
    </>
  );
}
