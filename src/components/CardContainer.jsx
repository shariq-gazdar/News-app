import React, { useState, useEffect } from "react";
import { NewsCard } from "./Card";
function CardContainer() {
  const baseUrl = process.env.REACT_APP_API_LINK;

  const [articles, setArticles] = useState([]);

  async function updateCards() {
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
          image={value.image}
          url={value.url}
        />
      ))}
    </div>
  );
}

export default CardContainer;
