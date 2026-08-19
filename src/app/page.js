import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import VillainSection from '@/components/sections/VillainSection';
import GuideSection from '@/components/sections/GuideSection';
import PlanSection from '@/components/sections/PlanSection';
import Accordion from '@/components/sections/Accordion';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VillainSection />
        <GuideSection />
        <PlanSection />
        <Accordion />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
