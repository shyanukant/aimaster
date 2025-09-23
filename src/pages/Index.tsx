import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { InstructorSection } from "@/components/InstructorSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { OfferSection } from "@/components/OfferSection";
import { ReferralSection } from "@/components/ReferralSection";
import { PartnerProgramSection } from "@/components/PartnerProgramSection";
import { WhatsAppCommunitySection } from "@/components/WhatsAppCommunitySection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <InstructorSection />
      <TestimonialSection />
      <OfferSection />
      <ReferralSection />
      <PartnerProgramSection />
      <WhatsAppCommunitySection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;