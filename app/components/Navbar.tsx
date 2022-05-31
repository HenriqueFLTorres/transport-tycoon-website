import React from "react";
import { Link } from "@remix-run/react";

import Cart from "~/Icons/Cart";
import TransportTycoonLogo from "~/Icons/TransportTycoonLogo";
import User from "~/Icons/User";
import DropDown from "./DropDown";
import Arrow from "~/Icons/Arrow";
import CartDropDown from "./CartDropDown";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/90 w-full h-20 flex flex-row items-center justify-between px-10 border-b-2 border-neutral-200/20">
      <Link to="/">
          <TransportTycoonLogo className="flex justify-center items-center w-14 h-14 rounded-full bg-neutral-100 shadow-[0_0_5px_#ffffff]" />
      </Link>
      <ul className="flex flex-row items-center text-neutral-100 font-semibold gap-4">
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-900/50 transition-colors duration-200">
          HOME
        </li>
        <li className="group">
          <p className="h-12 flex items-center cursor-pointer p-3 rounded-md hover:bg-neutral-900/50 transition-colors duration-200">
            IN-GAME
            <Arrow className="w-4 h-4 stroke-neutral-100 stroke-[3px] ml-2 group-hover:rotate-180 transition-transform duration-300" />
          </p>
          <DropDown>
            <li>BONUSES</li>
            <li>CUSTOMIZATIONS</li>
            <li>UPGRADES</li>
            <li>FUEL SYSTEM</li>
          </DropDown>
        </li>
        <li className="group">
          <p className="h-12 flex items-center cursor-pointer p-3 rounded-md hover:bg-neutral-900/50 transition-colors duration-200">
            OTHER
            <Arrow className="w-4 h-4 stroke-neutral-100 stroke-[3px] ml-2 group-hover:rotate-180 transition-transform duration-300" />
          </p>
          <DropDown>
            <li>CAPTAIN'S HOUR</li>
            <li>ACCESS</li>
            <li>GIFT CARDS</li>
          </DropDown>
        </li>
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-900/50 transition-colors duration-200">
          PREMIUM & SUBSCRIPTIONS
        </li>
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-900/50 transition-colors duration-200">
          [LITE] TRANSPORTATION
        </li>
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-900/50 transition-colors duration-200">
          ABOUT
        </li>
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-900/50 transition-colors duration-200">
          FAQ
        </li>
      </ul>
      <div className="flex flex-row gap-7 items-center">
        <CartDropDown/>
        <div className="flex flex-col justify-center items-center w-auto h-16 py-1 px-2 rounded-md hover:hover:bg-neutral-900/50 cursor-pointer">
          <User className="fill-neutral-100 w-8 h-8 mb-2" />
          <p className="text-base text-neutral-100 font-medium leading-none">
            FellowUser159
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
