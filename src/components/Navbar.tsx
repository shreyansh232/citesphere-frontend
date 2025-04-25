import { Logo } from "../icons/Logo";
import { Button } from "./ui/Button";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { isSignedIn } = useAuth();

  return isSignedIn ? (
    <div className="w-full fixed bg-transparent z-50 items-center p-5">
      <div className="mx-5 md:mx-20 flex justify-between">
        <a href="/">
          <div className="text-white text-2xl flex gap-1 items-center hover:text-gray-300">
            {" "}
            <Logo size="xl" />
            Citesphere
          </div>
        </a>
      </div>
    </div>
  ) : (
    <div className="w-full fixed bg-transparent z-50 items-center p-5">
      <div className="mx-5 md:mx-20 flex justify-between">
        <a href="/">
          <div className="text-white text-2xl flex gap-1 items-center hover:text-gray-300">
            {" "}
            <Logo size="xl" />
            Citesphere
          </div>
        </a>
        <div className="flex gap-5 items-center">
          <a href="/signup">
            <button className="cursor-pointer text-gray-300">Signup</button>
          </a>
          <a href="/signin">
            <Button
              size="lg"
              variant="primary"
              text="Login"
              className="text-black !rounded-full px-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
