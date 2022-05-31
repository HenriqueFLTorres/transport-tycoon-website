import React, { useState } from "react";
import { Link } from "@remix-run/react";

import Cart from "~/Icons/Cart";
import TransportTycoonLogo from "~/Icons/TransportTycoonLogo";
import User from "~/Icons/User";
import DropDown from "./DropDown";
import Arrow from "~/Icons/Arrow";
import Close from "~/Icons/Close";

type Props = {};

const Navbar = (props: Props) => {
  const [cartVisible, setCartVisible] = useState(true);
  return (
    <nav className="bg-glass w-full h-20 flex flex-row items-center justify-between px-10">
      <Link to="/">
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-neutral-100 shadow-[0_0_5px_#ffffff]">
          <TransportTycoonLogo className="" />
        </div>
      </Link>
      <ul className="flex flex-row items-center text-neutral-100 font-semibold gap-4">
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-100/20 transition-colors duration-200">
          HOME
        </li>
        <li className="group">
          <p className="h-12 flex items-center cursor-pointer p-3 rounded-md hover:bg-neutral-100/20 transition-colors duration-200">
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
          <p className="h-12 flex items-center cursor-pointer p-3 rounded-md hover:bg-neutral-100/20 transition-colors duration-200">
            OTHER
            <Arrow className="w-4 h-4 stroke-neutral-100 stroke-[3px] ml-2 group-hover:rotate-180 transition-transform duration-300" />
          </p>
          <DropDown>
            <li>CAPTAIN'S HOUR</li>
            <li>ACCESS</li>
            <li>GIFT CARDS</li>
          </DropDown>
        </li>
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-100/20 transition-colors duration-200">
          PREMIUM & SUBSCRIPTIONS
        </li>
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-100/20 transition-colors duration-200">
          [LITE] TRANSPORTATION
        </li>
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-100/20 transition-colors duration-200">
          ABOUT
        </li>
        <li className="cursor-pointer p-3 rounded-md hover:bg-neutral-100/20 transition-colors duration-200">
          FAQ
        </li>
      </ul>
      <div className="flex flex-row gap-7 items-center">
        <div className="flex justify-center">
          <Cart
            className="fill-neutral-100 w-12 h-12 p-2 rounded-md hover:bg-neutral-100/20 cursor-pointer transition-colors duration-150"
            onClick={() => setCartVisible(!cartVisible)}
          />
          <div
            className={`absolute flex flex-col bg-neutral-200 rounded-md divide-y divide-neutral-300 border-t-2 p-2 border-neutral-300 text-neutral-900 translate-y-14 ${
              cartVisible ? "clip-path-inset" : "clip-hide-top"
            } transition-all duration-300 shadow-md`}
          >
            <div className="flex flex-row gap-10 items-center rounded p-2">
              <span className="font-semibold">Double XP Party</span>
              <span>4.99 USD</span>
              <div className="p-2 rounded hover:bg-neutral-400/20 cursor-pointer">
                <Close className="h-4 w-4 stroke-[#db3a34] transition-colors duration-150" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-auto h-16 py-1 px-2 rounded-md hover:hover:bg-neutral-100/20 cursor-pointer">
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
