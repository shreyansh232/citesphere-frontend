import { Background } from "../components/Background";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";

export const Landing = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar />
      <Background>
        <Hero />
      </Background>
      <Footer />
    </div>
  );
};
