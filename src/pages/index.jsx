import { SeoMeta } from "@/components/common/seo-meta";
import { Hero, HowItWorks, WhyChooseUs } from "@/components/pages/home";

export default function Home() {
  return (
    <>
      <SeoMeta />
      <main>
        <Hero />
        <WhyChooseUs />
        <HowItWorks />
      </main>
    </>
  );
}
