import React, {  ReactNode, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Box } from "@radix-ui/themes";
import { CaretDownIcon } from "@radix-ui/react-icons";

interface DropDownMenuProps {
  name: string;
  items: string[];
}

export default function DropDownMenu({ name, items }: DropDownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button className="flex items-center justify-center space-x-2 text-primary" onClick={() => setIsOpen(!isOpen)}>
        <p>{name}</p>
        <CaretDownIcon />
      </button>
      <Box className={`absolute top-[30px] left-0 w-fit border border-stone-200 dark:border-stone-800 rounded-md shadow ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col w-full p-1 space-y-1">
          {items.map((item: string, index: number) => (
            <div key={index} onClick={() => setIsOpen(false)}>
              <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm px-2 py-1 block w-full rounded whitespace-nowrap hover:bg-primary hover:text-white">
                {item as ReactNode}
              </Link>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}
