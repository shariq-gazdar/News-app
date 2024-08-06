"use client";
import "../App.css";
import { Button } from "flowbite-react";
import Dummy from "./media/dummy.png";
export function NewsCard(props) {
  {
    var image = props.image;
    if (image == null) {
      image = Dummy;
    }
  }
  return (
    <div className="flex flex-col dark:bg-gray-800 max-w-72">
      <img src={image} alt="No Image Loaded!" />
      <div className="content flex flex-col px-6 min-w-36 ">
        <h1 className="title font-bold text-3xl dark:text-white  ">
          {props.title}
        </h1>
        <p>{props.description}</p>
        <Button className="my-6">
          Read more
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
