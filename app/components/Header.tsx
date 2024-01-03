'use client';

import { useState } from "react";
import Link from 'next/link'
import { Button, IconButton, Heading } from "@radix-ui/themes"
import { SunIcon, MoonIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import DropDownMenu from "./DropDownMenu";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  }

  const pages = [
    'Choix Multiples',
    'Vrai Faux',
    'Contre la Montre',
  ];

  return (
    <div className="w-full max-w-default mx-auto">
      <header className='grid grid-cols-2 md:grid-cols-header items-center justify-between w-full p-4 border-b'>
        <Link href="/" className="flex items-center justify-start space-x-2">
          <img src="/favicon/favicon.svg" alt="Logo d'un cerveau vu du haut" className="h-8" />
          <Heading as="h1" size="5">MentalMath</Heading>
        </Link>
        <nav className='hidden md:flex items-center justify-center space-x-4'>
          <Link href="/" className="text-primary">Home</Link>
          <DropDownMenu name="Jeux" items={pages} />
        </nav>
        <div className='flex items-center justify-end space-x-4'>
          <IconButton variant="ghost">
            <a href="https://github.com/AugustinBriolon/MentalMath" target="_blank">
              <GitHubLogoIcon height="16" width="16" />
            </a>
          </IconButton>
          <IconButton variant="ghost" onClick={toggleDarkMode}>
            {darkMode ? <SunIcon height="16" width="16" /> : <MoonIcon height="16" width="16" />}
          </IconButton>
          <Button color="indigo" variant="soft">Calcul Random</Button>
        </div>
      </header>
      <nav className='flex md:hidden items-center justify-start w-full py-2 px-4 border-b space-x-4'>
        <Link href="/" className="text-primary">Home</Link>
        <DropDownMenu name="Jeux" items={pages} />
      </nav>
    </div>
  )
}