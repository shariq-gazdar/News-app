import "./App.css";
import { NavComponent } from "./components/Nav";
import HeadAndSearch from "./components/HeadAndSearch";
import CardContainer from "./components/CardContainer";
function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeadAndSearch />
      <CardContainer />
    </div>
  );
}

export default App;
