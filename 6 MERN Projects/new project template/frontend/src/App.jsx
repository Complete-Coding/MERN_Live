import ExampleComponent from "./components/ExampleComponent";
import { ExampleProvider } from "./store/ExampleContext";

function App() {
  return (
    <ExampleProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Example App</h1>
          <ExampleComponent />
        </div>
      </div>
    </ExampleProvider>
  );
}

export default App;
