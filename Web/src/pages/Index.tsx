import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { QuickLinksSection } from "@/components/home/QuickLinksSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <QuickLinksSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
