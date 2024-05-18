"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme, themes } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Function to set the theme to dark mode on initial render
  React.useEffect(() => {
    setTheme("dark");
  }, []); // Empty dependency array ensures it runs only once on initial render

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-none">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#BFD8AF] dark:bg-[#040D12]">
        {/* {themes.map((theme, index) => (
          <DropdownMenuItem key={index} onClick={() => setTheme(theme)} className="dark:hover:text-primary">
            {theme}
          </DropdownMenuItem>
        ))} */}
        <DropdownMenuItem onClick={() => setTheme("dark")} className="font-semibold dark:font-medium dark:hover:text-primary">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")} className="font-semibold dark:font-medium dark:hover:text-primary">
          Light
        </DropdownMenuItem>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
