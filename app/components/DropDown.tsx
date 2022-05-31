import { Link } from "@remix-run/react";
import React from "react";

const DropDown = ({ children }: any) => {
  const itemPositionBorderRadius = (index: React.Key) => {
    if (index === 0) {
      return "rounded-t-md";
    } else if (index === children.length - 1) {
      return "rounded-b-md";
    } else {
      return "";
    }
  };

  return (
    <ul className="absolute flex flex-col p-1 bg-gradient-to-br from-[#272727f0] to-[#1a1a1ad3] rounded-md divide-y divide-neutral-900 border-t-2 border-neutral-900 clip-hide-top -translate-x-5 translate-y-1 group-hover:clip-path-inset transition-all duration-300 shadow-md backdrop-blur">
      {React.Children.map(
        children,
        (item: React.ReactFragment, index: React.Key): any => {
          let redirect = item.props.children;
          redirect = redirect.toLowerCase().replace(" ", "-");

          return (
            <Link to={`category/${redirect}`}>
              <li
                key={index}
                className={`p-3 cursor-pointer hover:bg-neutral-900/50 font-normal text-neutral-400 hover:text-neutral-200 text-center ${itemPositionBorderRadius(
                  index
                )} transition-all duration-200`}
              >
                {item.props.children}
              </li>
            </Link>
          );
        }
      )}
    </ul>
  );
};

export default DropDown;
