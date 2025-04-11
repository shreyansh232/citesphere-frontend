import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";

export const Landing = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar />
      <Hero />
    </div>
  );
};
