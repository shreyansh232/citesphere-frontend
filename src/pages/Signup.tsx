import { Input } from "../components/CreateContentModal";
import { Button } from "../components/ui/Button";

export const Signup = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="border border-gray-300 rounded-xl min-w-96 min-h-96 p-10 flex flex-col gap-2 justify-between items-center shadow-md">
        <h1>Create your account</h1>
        <div className="flex flex-col gap-2 items-center">
          <Input
            placeholder="Username"
            onChange={() => console.log("Clicked")}
          />
          <Input
            placeholder="Password"
            onChange={() => console.log("Clicked")}
          />
        <Button text="Submit" className="px-20" />
        </div>
      </div>
    </div>
  );
};
