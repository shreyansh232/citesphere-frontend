import { Button } from "../components/ui/Button";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 min-h-screen py-8 mb-20">
      <div className="flex flex-col items-center justify-center mt-36">
        <div className="bg-gradient-to-t from-[#868686]  to-[#ffffff] bg-clip-text text-6xl font-medium text-transparent lg:text-[5rem] leading-none p-3">
          <h1>Never Lose an </h1>
          <h1>Important Link Again </h1>
        </div>
        <h2 className="text-gray-500 mt-4 max-w-3xl text-lg">
          Save, organize, and access your important links from anywhere. From
          tweets to articles, keep everything that matters in one secure vault.
        </h2>
        <a href="/dashboard">
          <Button text="Get Started" size="lg" className="text-black mt-4" />
        </a>
      </div>
      <div className="w-2/3 mt-10 h-1/2">
        <img
          src="/Hero.png"
          alt="hero"
          className="rounded-3xl border border-yellow-500"
        />
      </div>
    </div>
  );
};
