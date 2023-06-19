import { SeoMeta } from "../seo-meta";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Footer } from ".";

export default function AppLayout({ children }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <SeoMeta />
      <main>{children}</main>
      <Footer />
    </>
  );
}
