import React from "react";
import TransportTycoonLogo from "~/Icons/TransportTycoonLogo";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-glass w-full h-16 flex flex-col justify-center">
      <TransportTycoonLogo className="w-12 h-12" />
      <ul>
        <li>HOME</li>
        <li>IN-GAME</li>
        <li>OTHER</li>
        <li>PREMIUM & SUBSCRIPTIONS</li>
        <li>[LITE] TRANSPORTATION</li>
        <li>ABOUT</li>
        <li>FAQ</li>
      </ul>
    </nav>
  );
};

export default Navbar;
