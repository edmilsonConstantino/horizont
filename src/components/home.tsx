import Hero from "./Hero";
import Services from "./Services";
import Timeline from "./Timeline";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { Toaster } from "./ui/toaster";

function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Hero />
      <Services />
      <Timeline />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default Home;