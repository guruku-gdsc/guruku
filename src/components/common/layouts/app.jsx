import { SeoMeta } from "../seo-meta";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AppLayout({ children }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <SeoMeta />
      <div>{children}</div>
    </>
  );
}
