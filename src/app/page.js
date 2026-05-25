import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VillainSection from '@/components/VillainSection';
import GuideSection from '@/components/GuideSection';
import PlanSection from '@/components/PlanSection';
import Accordion from '@/components/Accordion';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

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
