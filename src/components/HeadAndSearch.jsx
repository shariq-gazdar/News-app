"use client";
import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";
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
        <Button id="regional" />
        <Button id="technology" />
        <Button id="lifestyle" />
        <Button id="business" />
        <Button id="general" />
        <Button id="programming" />
        <Button id="science" />
        <Button id="entertainment" />
        <Button id="world" />
        <Button id="sports" />
        <Button id="finance" />
        <Button id="academia" />
        <Button id="politics" />
        <Button id="health" />
        <Button id="opinion" />
        <Button id="food" />
        <Button id="game" />
      </div>
    </div>
  );
}

export default HeadAndSearch;
