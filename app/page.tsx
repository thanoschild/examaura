import { Suspense } from "react";
import Header from "./components/header/header";
import ExamSelector from "./components/search/ExamSelector";
import LogoCarousel from "./components/carousel/LogoCarousel";
import TestimonialCarousel from "./components/carousel/TestimonialCarousel";
import Footer from "./components/footer/Footer";
import GrowthSection from "./components/others/GrowthSection";
import FeaturesSection from "./components/others/FeaturesSection";

async function getUsers() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export default async function Home() {
  const users = await getUsers();

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
