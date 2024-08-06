import "./App.css";
import { NavComponent } from "./components/Nav";
import HeadAndSearch from "./components/HeadAndSearch";
import CardContainer from "./components/CardContainer";
import { DarkThemeToggle } from "flowbite-react";
function App() {
  return (
    <div className="App dark:bg-slate-700">
      <NavComponent />
      <HeadAndSearch />
      <CardContainer />
    </div>
  );
}

export default App;
