import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NewNav from "./components/NewNav";
import ProjectSection from "./components/ProjectSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NewNav />
      <HeroSection />
      <div className="container mt-24 mx-auto px-12 py-4">
        <AboutSection />
        <ProjectSection />
      </div>
      <EmailSection />
      <Footer />
    </main>
  );
}
