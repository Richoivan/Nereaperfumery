import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { StorySection } from "@/components/sections/StorySection";
import { CollectionSection } from "@/components/sections/CollectionSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { WhySection } from "@/components/sections/WhySection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { IntroOverlay } from "@/components/animations/IntroOverlay";
import { Cursor } from "@/components/ui/Cursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export default function Home() {
  return (
    <main id="top">
      <IntroOverlay />
      <Cursor />
      <ScrollProgress />
      <HeroSection />
      <MarqueeSection />
      <StorySection />
      <CollectionSection />
      <ShowcaseSection />
      <VideoSection />
      <WhySection />
      <TestimonialSection />
      <FaqSection />
      <WhatsAppFab />
      <BackToTop />
    </main>
  );
}
