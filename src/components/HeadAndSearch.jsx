"use client";
import React from "react";
import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";

function HeadAndSearch() {
  return (
    <div className="HeadAndSearch flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold">Get Daily News</h1>
      <div className="max-w-md my-5 ">
        <TextInput
          id="email4"
          type="search"
          rightIcon={HiSearch}
          placeholder="Search News From Topics"
          required
          className="w-96"
        />
      </div>
    </div>
  );
}

export default HeadAndSearch;
