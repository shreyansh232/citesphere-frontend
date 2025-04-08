import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
function App() {
  return (
    <>
      <div className="w-full h-screen bg-black">
        <Button
          startIcon={<PlusIcon size="lg" />}
          variant="secondary"
          text="Add Content"
          size="sm"
        ></Button>
        <Button variant="primary" text="Share" size="md"></Button>
        <Button variant="primary" text="Share Brain" size="lg"></Button>
      </div>
    </>
  );
}

export default App;
