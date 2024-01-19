import Image from 'next/image';
import React from 'react';
import {FaHome, FaCalculator, FaHeart} from "react-icons/fa"
import { ActiveLink } from '..';


const linksMenu = [
  {
    title: "Main",
    icon: <FaHome />,
    subtitle: "Dashboard main",
    path: "/dashboard/main",
  },
  {
    title: "Calculator",
    icon: <FaCalculator />,
    subtitle: "Calculator manager",
    path: "/dashboard/counter",
  },
  {
    title: "Pokemons",
    icon: <FaCalculator />,
    subtitle: "Pokemons manager",
    path: "/dashboard/pokemons",
  },
  {
    title: "Pokemones Favoritos",
    icon: <FaHeart />,
    subtitle: "Pokemons manager",
    path: "/dashboard/favorites",
  },
];



export const AsideBar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900  col-span-2 text-slate-300  left-0 h-screen  "
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt=""
              width={32}
              height={32}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Edward Tompson</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {
          linksMenu.map((link) => (
            <ActiveLink {...link} key={link.path} />
          ))
        }
      </div>
    </div>
  );
}
