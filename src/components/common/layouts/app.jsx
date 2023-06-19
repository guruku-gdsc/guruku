import { SeoMeta } from "../seo-meta";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Footer } from ".";
import { useRouter } from "next/router";

export default function AppLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <SeoMeta />
      <main>{children}</main>
      {router.pathname !== "/masuk" && router.pathname !== "/daftar" && (
        <Footer />
      )}
    </>
  );
}
