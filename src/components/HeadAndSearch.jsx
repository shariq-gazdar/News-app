"use client";
import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import searchIcon from "./media/Svgs/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
// https://api.currentsapi.services/v1/search?apiKey=viiwtif3yx0vLEbigMPE5TO3lRDPyMz1_3MGbYz4EtU6-hSA&category=world
function HeadAndSearch({ onSearch, changeFunction }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.innerText);
    handleSearchClick();
    changeFunction(searchTerm);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm); // Pass the search term to the parent component
  };

  return (
    <div className="HeadAndSearch flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold dark:text-white">Get Daily News</h1>
      <div className="w-screen gap-y-10 gap-x-2 my-5 flex justify-center flex-wrap">
        <Button id="regional" value="regional" onClick={handleSearchChange}>
          Regional
        </Button>
        <Button id="technology" value="technology" onClick={handleSearchChange}>
          Technology
        </Button>
        <Button id="lifestyle" value="lifestyle" onClick={handleSearchChange}>
          Lifestyle
        </Button>
        <Button id="business" value="business" onClick={handleSearchChange}>
          Business
        </Button>
        <Button id="general" value="general" onClick={handleSearchChange}>
          General
        </Button>
        <Button
          id="programming"
          value="programming"
          onClick={handleSearchChange}
        >
          Programming
        </Button>
        <Button id="science" value="science" onClick={handleSearchChange}>
          Science
        </Button>
        <Button
          id="entertainment"
          value="entertainment"
          onClick={handleSearchChange}
        >
          Entertainment
        </Button>
        <Button id="world" value="world" onClick={handleSearchChange}>
          World
        </Button>
        <Button id="sports" value="sports" onClick={handleSearchChange}>
          Sports
        </Button>
        <Button id="finance" value="finance" onClick={handleSearchChange}>
          Finance
        </Button>
        <Button id="academia" value="academia" onClick={handleSearchChange}>
          Academia
        </Button>
        <Button id="politics" value="politics" onClick={handleSearchChange}>
          Politics
        </Button>
        <Button id="health" value="health" onClick={handleSearchChange}>
          Health
        </Button>
        <Button id="opinion" value="opinion" onClick={handleSearchChange}>
          Opinion
        </Button>
        <Button id="food" value="food" onClick={handleSearchChange}>
          Food
        </Button>
        <Button id="game" value="game" onClick={handleSearchChange}>
          Game
        </Button>
      </div>
    </div>
  );
}

export default HeadAndSearch;
