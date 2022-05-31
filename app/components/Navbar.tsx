import React from "react";
import { Link } from "@remix-run/react";

import Cart from "~/Icons/Cart";
import TransportTycoonLogo from "~/Icons/TransportTycoonLogo";
import User from "~/Icons/User";
import DropDown from "./DropDown";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-glass w-full h-20 flex flex-row items-center justify-between px-10">
      <Link to="/">
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-neutral-100 shadow-[0_0_5px_#ffffff]">
          <TransportTycoonLogo className="" />
        </div>
      </Link>
      <ul className="flex flex-row text-neutral-100 font-medium gap-10">
        <li className="cursor-pointer">HOME</li>
        <li className="group">
          <p className="h-12 flex items-center">IN-GAME</p>
          <DropDown>
            <li>BONUSES</li>
            <li>CUSTOMIZATIONS</li>
            <li>UPGRADES</li>
            <li>FUEL SYSTEM</li>
          </DropDown>
        </li>
        <li className="cursor-pointer">OTHER</li>
        <li className="cursor-pointer">PREMIUM & SUBSCRIPTIONS</li>
        <li className="cursor-pointer">[LITE] TRANSPORTATION</li>
        <li className="cursor-pointer">ABOUT</li>
        <li className="cursor-pointer">FAQ</li>
      </ul>
      <div className="flex flex-row gap-7 items-center">
        <div className="flex justify-center w-12 h-12 items-center p-2 rounded-md hover:bg-neutral-200/50 cursor-pointer">
          <Cart className="fill-neutral-100" />
        </div>
        <div className="flex flex-col justify-center items-center w-auto h-16 py-1 px-2 rounded-md hover:bg-neutral-200/50 cursor-pointer">
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
