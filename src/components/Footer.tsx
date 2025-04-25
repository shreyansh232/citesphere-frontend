import { Logo } from "../icons/Logo";
import { FaGithub, FaLink, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="w-full h-auto bg-black p-10 border-t border-gray-800">
      <div className="mx-5 md:mx-24 flex flex-col md:flex-row justify-between mt-5">
        <div className="max-w-sm mb-5 md:mb-0">
          <div>
            <a href="/">
              <div className="text-white text-2xl flex gap-1 items-center hover:text-gray-300">
                {" "}
                <Logo size="xl" />
                Citesphere
              </div>
              <div></div>
            </a>
            <h2 className="text-gray-400 mt-4 max-w-xl text-sm">
              Save, organize, and access your important links from anywhere.
              From tweets to articles, keep everything that matters in one
              secure vault.
            </h2>
            <div className="mt-5 text-yellow-500 flex gap-5">
              <a href="https://x.com/srynshx" target="_blank">
                <FaXTwitter className=" hover:text-yellow-300" />
              </a>
              <a href="https://github.com/shreyansh232" target="_blank">
                <FaGithub className=" hover:text-yellow-300" />
              </a>
              <a href="https://shreyanshpandey.vercel.app" target="_blank">
                <FaLink className=" hover:text-yellow-300" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-gray-300">
          <ul>
            <li>
              <a href="/" className="hover:text-yellow-300">
                FAQs
              </a>
            </li>
            <li className="mt-2">
              <a href="https://x.com/srynshx" className="hover:text-yellow-300">
                Contact
              </a>
            </li>
            <li className="mt-2">
              <a href="/" className="hover:text-yellow-300">
                Privacy Policy
              </a>
            </li>
            <li className="mt-2">
              <a href="/" className="hover:text-yellow-300">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
