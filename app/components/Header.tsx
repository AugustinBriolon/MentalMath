'use client';

import { useState, useEffect } from "react";
import Link from 'next/link'
import { Button, IconButton, Heading } from "@radix-ui/themes"
import { SunIcon, MoonIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import DropDownMenu from "./DropDownMenu";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [randomPageLink, setRandomPageLink] = useState('');
  const pages = [
    'Choix Multiples',
    'Vrai Faux',
    'Contre la Montre',
  ];
  const randomPage = () => {
    const randomIndex = Math.floor(Math.random() * pages.length);
    const randomPageTitle = pages[randomIndex].toLowerCase().replace(/\s+/g, '-');
    return randomPageTitle;
  }

  useEffect(() => {
    setRandomPageLink(randomPage());
  }, []);

  
  const handleRandomPageClick = () => {
    setRandomPageLink(randomPage());
  }

  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  }

  return (
    <div className="w-full max-w-default mx-auto">
      <header className='grid grid-cols-2 sm:grid-cols-header items-center justify-between w-full p-4 border-b'>
        <Link href="/" className="flex items-center justify-start space-x-2">
          <img src="/favicon/favicon.svg" alt="Logo d'un cerveau vu du haut" className="h-8" />
          <Heading as="h1" size="5">MentalMath</Heading>
        </Link>
        <nav className='hidden sm:flex items-center justify-center space-x-4'>
          <Link href="/" className="text-primary">Home</Link>
          <DropDownMenu name="Jeux" items={pages} />
        </nav>
        <div className="flex justify-end items-center space-x-4">
          <div className='hidden sm:flex items-center justify-end space-x-4'>
            <IconButton variant="ghost">
              <a href="https://github.com/AugustinBriolon/MentalMath" target="_blank">
                <GitHubLogoIcon height="16" width="16" />
              </a>
            </IconButton>
            <IconButton variant="ghost" onClick={toggleDarkMode}>
              {darkMode ? <SunIcon height="16" width="16" /> : <MoonIcon height="16" width="16" />}
            </IconButton>
          </div>
          <Button color="indigo" variant="soft" onClick={handleRandomPageClick}>
            <Link href={`/${randomPage()}`}>Calcul Random</Link>
          </Button>
        </div>
      </header>
      <nav className='flex sm:hidden items-center justify-between w-full py-2 px-4 border-b '>
        <div className="flex space-x-4">
          <Link href="/" className="text-primary">Home</Link>
          <DropDownMenu name="Jeux" items={pages} />
        </div>
        <div className='flex sm:hidden items-center justify-end space-x-4'>
          <IconButton variant="ghost">
            <a href="https://github.com/AugustinBriolon/MentalMath" target="_blank">
              <GitHubLogoIcon height="16" width="16" />
            </a>
          </IconButton>
          <IconButton variant="ghost" onClick={toggleDarkMode}>
            {darkMode ? <SunIcon height="16" width="16" /> : <MoonIcon height="16" width="16" />}
          </IconButton>
        </div>
      </nav>
    </div>
  )
}