import "@/styles/globals.css";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  return <Component {...pageProps} />;
}
