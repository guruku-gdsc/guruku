import { SeoMeta } from "@/components/common/seo-meta";
import {
  Hero,
  HowItWorks,
  Testimonial,
  WhyChooseUs,
} from "@/components/pages/home";

export default function Home() {
  return (
    <>
      <SeoMeta />
      <main>
        <Hero />
        <WhyChooseUs />
        {/* <HowItWorks /> */}
        <Testimonial />
      </main>
    </>
  );
}
