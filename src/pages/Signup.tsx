import { useState } from "react";
import { Input } from "../components/CreateContentModal";
import { Button } from "../components/ui/Button";
import { Logo } from "../icons/Logo";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 
    console.log("Form submitted"); 
    const response = await fetch("http://localhost:8001/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    //@ts-ignore
    if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(errorData.message || "There was an error during signup");
    }
    const data = await response.json();
    console.log("Success", data);
    navigate("/signin")
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
          <div>
            <label htmlFor="username" className="text-lg">
              Enter your username
            </label>
            <Input
              id="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="min-w-80"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-lg">
              Enter your password
            </label>
            <Input
              id="password" // Add id for accessibility
              type="password" // Set type to password
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="min-w-80"
            />
          </div>
          <Button text="Submit" className="min-w-80" type="submit" />
        </div>
      </form>
    </div>
  );
};
