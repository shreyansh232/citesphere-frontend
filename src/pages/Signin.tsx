import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Logo } from "../icons/Logo";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
      username,
      password,
    });
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);

    navigate("/dashboard");
  };

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border border-purple-300 rounded-xl min-w-[430px] min-h-[430px] p-10 flex flex-col justify-between items-center shadow-md"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-2xl flex items-center gap-2">
            <div className="text-purple-600">
              <Logo size="lg" />
            </div>
            <h1>Brainly</h1>
          </div>
          <h1 className="text-3xl">Create your account</h1>
        </div>

        <div className="flex flex-col gap-3 items-center w-full">
          <div className="w-full">
            <label htmlFor="username" className="text-lg">
              Enter your username
            </label>
            <Input
              id="username"
              placeholder="Username"
              reference={usernameRef}
              fullWidth={true}
            />
          </div>
          <div className="mb-2 w-full">
            <label htmlFor="password" className="text-lg">
              Enter your password
            </label>
            <Input
              id="password" // Add id for accessibility
              type="password" // Set type to password
              placeholder="Password"
              reference={passwordRef}
              fullWidth={true}
            />
          </div>
          <Button text="Submit" fullWidth={true} type="submit" />
        </div>
      </form>
    </div>
  );
};
