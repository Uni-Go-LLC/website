import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { BetaCTASection } from "@/components/home/BetaCTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorksSection />
      <UseCasesSection />
      <BetaCTASection />
    </Layout>
  );
};

export default Index;
