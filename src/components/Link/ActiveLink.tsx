"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


interface Props {
  title: string;
  icon: JSX.Element;
  subtitle: string;
  path: string;
}


export const ActiveLink = ({ icon, path, subtitle, title }: Props) => {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <Link
      href={path}
      className={`flex items-center space-x-4 py-2 px-4 rounded-lg hover:bg-gray-800 ${ pathName === path ? "bg-blue-800" : ""}`}
    >
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg text-slate-300 font-bold leading-5">
          {title}
        </span>
        <span className="text-sm text-slate-500 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
}
