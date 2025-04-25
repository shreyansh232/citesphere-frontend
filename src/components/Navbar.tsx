import { Logo } from "../icons/Logo";
import { Button } from "./ui/Button";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { isSignedIn } = useAuth();

  return isSignedIn ? (
    <nav className="w-full fixed bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/">
            <div className="text-white text-xl md:text-2xl flex gap-1 items-center hover:text-gray-300 transition-colors">
              <Logo size="xl" />
              <span className="hidden sm:inline">Citesphere</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="w-full fixed bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/">
            <div className="text-white text-xl md:text-2xl flex gap-1 items-center hover:text-gray-300 transition-colors">
              <Logo size="xl" />
              <span className="hidden sm:inline">Citesphere</span>
            </div>
          </a>
          <div className="flex gap-3 sm:gap-5 items-center">
            <a href="/signup">
              <button className="text-sm sm:text-base cursor-pointer text-gray-300 hover:text-white transition-colors">
                Signup
              </button>
            </a>
            <a href="/signin">
              <Button
                size="lg"
                variant="primary"
                text="Login"
                className="text-black !rounded-full px-4 sm:px-8 text-sm sm:text-base"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
