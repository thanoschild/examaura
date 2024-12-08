
import Header from "./components/header/header";
import ExamSelector from "./components/search/ExamSelector";
import LogoCarousel from "./components/carousel/LogoCarousel";
import TestimonialCarousel from "./components/carousel/TestimonialCarousel";
import Footer from "./components/footer/footer";
import GrowthSection from "./components/others/GrowthSection";
import FeaturesSection from "./components/others/FeaturesSection";

export default async function Home() {
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <ExamSelector />
          </div>
          <LogoCarousel />
          <FeaturesSection />
          <TestimonialCarousel />
        </div>
        <GrowthSection />
      </main>
      <Footer />
    </div>
  );
}
