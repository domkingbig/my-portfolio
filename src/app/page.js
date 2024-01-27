import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className=" mt-24 flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <ProjectsSection />
        <AboutSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
