import React, { useState, useEffect } from "react";
import { NewsCard } from "./Card";

function CardContainer() {
  const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0a4ece348d504c7c9f16781fb19c222b`;

  const [articles, setArticles] = useState([]);

  async function updateCards() {
    try {
      let result = await fetch(baseUrl);
      result = await result.json();

      if (result.articles) {
        let articleNumber = result.articles.length;
        let articlesArray = [];

        for (let index = 0; index < articleNumber; index++) {
          articlesArray.push(result.articles[index]);
        }

        setArticles(articlesArray);
      }
    } catch (error) {
      console.log("Api Not Working", error);
    }
  }

  useEffect(() => {
    updateCards();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {articles.map((value, index) => (
        <NewsCard
          key={index}
          title={value.title}
          description={value.description}
          image={value.urlToImage}
          url={value.url}
        />
      ))}
    </div>
  );
}

export default CardContainer;
