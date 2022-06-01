import React from "react";
import { Link } from "@remix-run/react";

import Cart from "~/Icons/Cart";
import User from "~/Icons/User";
import DropDown from "./DropDown";
import Arrow from "~/Icons/Arrow";
import CartDropDown from "./CartDropDown";
import TransportTycoonLogo from "../../public/images/TT.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-gradient-to-br from-neutral-200/40 to-neutral-100/60 w-full h-20 flex flex-row items-center justify-between px-10 border-b-2 border-black/20">
      <Link to="/">
        <div className="w-14 h-14 bg-neutral-100 rounded-full drop-shadow-[0_0_3px_#72A5D9]">
          <img src={TransportTycoonLogo} alt="transportTycoonLogo" />
        </div>
      </Link>
      <ul className="flex flex-row items-center text-neutral-700 font-semibold gap-4">
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-100/40 transition-colors duration-200">
          HOME
        </li>
        <li className="group">
          <p className="h-12 flex items-center cursor-pointer p-3 rounded-md hover:bg-neutral-100/40 transition-colors duration-200">
            IN-GAME
            <Arrow className="w-4 h-4 stroke-neutral-700 stroke-[3px] ml-2 group-hover:rotate-180 transition-transform duration-300" />
          </p>
          <DropDown>
            <li>BONUSES</li>
            <li>CUSTOMIZATIONS</li>
            <li>UPGRADES</li>
            <li>FUEL SYSTEM</li>
          </DropDown>
        </li>
        <li className="group">
          <p className="h-12 flex items-center cursor-pointer p-3 rounded-md hover:bg-neutral-100/40 transition-colors duration-200">
            OTHER
            <Arrow className="w-4 h-4 stroke-neutral-700 stroke-[3px] ml-2 group-hover:rotate-180 transition-transform duration-300" />
          </p>
          <DropDown>
            <li>CAPTAIN'S HOUR</li>
            <li>ACCESS</li>
            <li>GIFT CARDS</li>
          </DropDown>
        </li>
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-100/40 transition-colors duration-200">
          PREMIUM & SUBSCRIPTIONS
        </li>
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-100/40 transition-colors duration-200">
          [LITE] TRANSPORTATION
        </li>
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-100/40 transition-colors duration-200">
          ABOUT
        </li>
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-100/40 transition-colors duration-200">
          FAQ
        </li>
      </ul>
      <div className="flex flex-row gap-7 items-center">
        <CartDropDown />
        <div className="flex flex-col justify-center items-center w-auto h-16 py-1 px-2 rounded-md hover:bg-neutral-100/40 cursor-pointer transition-colors duration-200">
          <User className="fill-neutral-700 w-8 h-8 mb-2" />
          <p className="text-base text-neutral-700 font-medium leading-none">
            FellowUser159
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
