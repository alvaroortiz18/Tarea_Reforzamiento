import { StatusToggle } from "./components/StatusToggle";

function App() {
  return (
    <div className="flex justify-center items-center h-svh flex-col gap-5">
      <h1 className="text-4xl mb-5">React + TS</h1>
      <StatusToggle />
    </div>
  );
}

export default App;