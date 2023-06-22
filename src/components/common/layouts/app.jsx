import { SeoMeta } from "../seo-meta";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Footer } from ".";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Popup } from "../popup";

export default function AppLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <SeoMeta />
      <main className="hidden xl:block">{children}</main>
      {router.pathname !== "/masuk" && router.pathname !== "/daftar" && (
        <Footer />
      )}
      <Popup>
        <p className="text-lg font-bold text-center text-black1">
          Oops! You can only access <span className="text-green1">Guruku</span>{" "}
          on desktop
        </p>
      </Popup>
      <ToastContainer />
    </>
  );
}
