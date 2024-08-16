import "./App.css";
import { useState } from "react";
import { NavComponent } from "./components/Nav";
import HeadAndSearch from "./components/HeadAndSearch";
import CardContainer from "./components/CardContainer";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (term) => {
    setSearchTerm(term);
  };
  console.log(searchTerm);
  return (
    <div className="App dark:bg-slate-700 overflow-x-hidden">
      <NavComponent />
      <HeadAndSearch onSearch={handleSearchTerm} />
      <CardContainer searchTerm={searchTerm} />
    </div>
  );
}

export default App;
