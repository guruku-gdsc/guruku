import { AppLayout } from "@/components/common/layouts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
