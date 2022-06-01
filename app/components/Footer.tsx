import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex items-center bg-slate-300 text-neutral-700 mt-auto h-14 z-50">
      <div className="w-10/12 mx-auto flex flex-row gap-6">
        <p className="font-bold">Terms</p>
        <p className="font-bold">Privacy</p>
        <p className="ml-auto">Designed and Developed by <a href="https://github.com/HenriqueFLTorres" target="_blank" className="font-bold" >Henrique Torres</a></p>
      </div>
    </footer>
  );
};

export default Footer;
