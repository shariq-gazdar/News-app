import "./App.css";
import { useState } from "react";
import { NavComponent } from "./components/Nav";
import HeadAndSearch from "./components/HeadAndSearch";
import CardContainer from "./components/CardContainer";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const handleSearchTerm = (term) => {
    setSearchTerm(term);
  };
  console.log(searchTerm);
  async function updateCards() {
    const baseUrl = process.env.REACT_APP_API_LINK;
    try {
      let result = await fetch(baseUrl);
      result = await result.json();
      console.log(result);

      if (result.news) {
        let articleNumber = result.news.length;
        let articlesArray = [];

        for (let index = 0; index < articleNumber; index++) {
          articlesArray.push(result.news[index]);
        }

        setArticles(articlesArray);
      }
    } catch (error) {
      console.log("Api Not Working", error);
    }
  }
  async function updateCategories(searchTerm) {
    const searchUrl = `https://api.currentsapi.services/v1/search?apiKey=viiwtif3yx0vLEbigMPE5TO3lRDPyMz1_3MGbYz4EtU6-hSA&category="${searchTerm}`;
    try {
      let result = await fetch(`${searchUrl}  `);
      result = await result.json();
      console.log(searchTerm);

      console.log(result);

      if (result.news) {
        let articleNumber = result.news.length;
        let articlesArray = [];

        for (let index = 0; index < articleNumber; index++) {
          articlesArray.push(result.news[index]);
        }

        setArticles(articlesArray);
      }
    } catch (error) {
      console.log("Api Not Working", error);
    }
  }
  return (
    <div
      className="App dark:bg-slate-700 overflow-x-hidden"
      onLoad={updateCards}
    >
      <NavComponent />
      <HeadAndSearch
        onSearch={handleSearchTerm}
        changeFunction={updateCategories}
      />
      <CardContainer searchTerm={searchTerm} articles={articles} />
    </div>
  );
}

export default App;
