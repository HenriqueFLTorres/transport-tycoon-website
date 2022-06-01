import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex items-center bg-neutral-200 text-neutral-700 mt-auto h-14">
      <ul className="w-10/12 mx-auto flex flex-row gap-6">
        <li className="font-bold">Terms</li>
        <li className="font-bold">Privacy</li>
        <li className="ml-auto">Designed and Developed by <span className="font-bold">Henrique Torres</span></li>
      </ul>
    </footer>
  );
};

export default Footer;
