import React from "react";
import { NewsCard } from "./Card";
function CardContainer(props) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {props.articles.map((value, index) => (
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
