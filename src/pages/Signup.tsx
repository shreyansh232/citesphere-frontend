import { useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { Logo } from "../icons/Logo";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username,
      password,
    });
    navigate("/signin");
  };

  const validateForm = () => {
    const usernameValue = usernameRef.current?.value || "";
    const passwordValue = passwordRef.current?.value || "";
    const isValid = usernameValue.trim() !== "" && passwordValue.trim() !== "";
    setIsButtonDisabled(!isValid);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black bg-[radial-gradient(circle_closest-corner_at_100%,_rgba(250,204,21,0.2),_#0000),radial-gradient(circle_closest-corner_at_0%,_rgba(250,204,21,0.2),_#0000)]">
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl min-w-[600px] min-h-[700px] p-20 flex flex-col justify-between items-center shadow-md bg-black text-white"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-2xl flex items-center gap-2">
            <div className="text-white">
              <Logo size="lg" />
            </div>
            <h1>Citesphere</h1>
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
              className="bg-neutral-800 border border-gray-700 focus:gray-600"
              onBlur={validateForm}
              onChange={validateForm}
            />
          </div>
          <div className="mb-2 w-full">
            <label htmlFor="password" className="text-lg">
              Enter your password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              reference={passwordRef}
              fullWidth={true}
              className="bg-neutral-800 border border-gray-700 focus:gray-600"
              onBlur={validateForm}
              onChange={validateForm}
            />
          </div>
          <Button
            text="Submit"
            fullWidth={true}
            type="submit"
            className="rounded-2xl py-3"
            disabled={isButtonDisabled}
          />
        </div>
        <div className="text-gray-300">
          Already have an account?
          <span className="text-yellow-300">
            <a href="/signin"> Login</a>
          </span>
        </div>
      </form>
    </div>
  );
};
