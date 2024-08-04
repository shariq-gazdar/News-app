"use client";

import { Button, Navbar, DarkThemeToggle } from "flowbite-react";
import NewsLogo from "./media/NewsLog.png";
export function NavComponent() {
  return (
    <Navbar fluid className="rounded-b bg-zinc-300/50">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={NewsLogo} className="mr-3 w-16 " alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
