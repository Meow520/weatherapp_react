import { useEffect, useState } from "react";
import "./styles/App.css";
import { Header } from "./components/Header/Header";
import { Result } from "./components/Result/Result";
import { Search } from "./components/Search/Search";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [area, setArea] = useState("tokyo");

  return (
    <div className="bg-bgcolor w-screen h-max min-h-screen">
      <Header />
      <Search area={area} setArea={setArea} setIsOpen={setIsOpen} />
      <Result isOpen={isOpen} area={area} />
    </div>
  );
}

export default App;
