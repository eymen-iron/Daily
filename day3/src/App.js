import Dashboard from "./cmpt/dashbar";
import Header from "./cmpt/header";

function App() {
  return (
    <div className="flex w-full h-full">
    <Dashboard  />
      
      <div className="basis-10/12 border-l-4 border-red flex flex-col">
      <Header/> 
        content
      </div>

    </div>
  );
}

export default App;
