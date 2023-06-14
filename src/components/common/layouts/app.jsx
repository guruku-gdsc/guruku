import { SeoMeta } from "../seo-meta";

export default function AppLayout({ children }) {
  return (
    <>
      <SeoMeta />
      <div>{children}</div>
    </>
  );
}
