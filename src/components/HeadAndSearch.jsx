"use client";
import React, { useState } from "react";
import { TextInput } from "flowbite-react";
import searchIcon from "./media/Svgs/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

function HeadAndSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm); // Pass the search term to the parent component
  };

  return (
    <div className="HeadAndSearch flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold dark:text-white">Get Daily News</h1>
      <div className="max-w-md my-5 flex relative">
        <TextInput
          id="email4"
          type="search"
          placeholder="Search News From Topics"
          required
          className="w-96"
          onChange={handleSearchChange}
        />
        <button className="absolute left-80 top-2 " onClick={handleSearchClick}>
          <img src={searchIcon} alt="Search" />
        </button>
      </div>
    </div>
  );
}

export default HeadAndSearch;
