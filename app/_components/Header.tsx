'use client';

import { useState } from "react";
import { Avatar, IconButton, Heading } from "@radix-ui/themes"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"

export default function Header() {

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  }

  return (
    <header className='flex items-center justify-between w-full p-4 border-b'>
      <div className="flex items-center justify-center space-x-2">
        <img src="/favicon/favicon.ico" alt="Logo d'un cerveau vu du haut" className="h-8" />
        <Heading as="h1" size="5">Calcul Mental</Heading>
      </div>
      <div className='flex items-center justify-end space-x-4'>
        <IconButton variant="ghost" onClick={toggleDarkMode}>
          {darkMode ? <SunIcon height="16" width="16" /> : <MoonIcon height="16" width="16" />}
        </IconButton>
        <Avatar fallback="A" />
      </div>
    </header>
  )
}