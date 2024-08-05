import React, { useState, useEffect } from "react";
import { NewsCard } from "./Card";

function CardContainer() {
  let baseUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0a4ece348d504c7c9f16781fb19c222b`;

  const [articles, setArticles] = useState([]);

  async function updateCards() {
    let result = await fetch(baseUrl);
    result = await result.json();
    try {
      let articleNumber = result.totalResults; // Corrected to use result.articles.length

      let articlesArray = [];

      for (let index = 0; index <= articleNumber; index++) {
        articlesArray.push(result.articles[index]);
      }

      setArticles(articlesArray);
    } catch {
      console.log("Api Not Working");
    }
  }

  useEffect(() => {
    updateCards();
  }, []);

  return (
    <div className="flex">
      {articles.map((value, index) => (
        <NewsCard
          key={index}
          title={value.title}
          description={value.description}
          image={value.urlToImage}
        />
      ))}
    </div>
  );
}

export default CardContainer;
