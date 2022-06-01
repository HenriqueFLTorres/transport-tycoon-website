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
    <ul className="absolute flex flex-col p-1 bg-gradient-to-br from-neutral-200/80 to-neutral-100/90 rounded-md divide-y divide-neutral-300 border-t-2 border-neutral-300 clip-hide-top -translate-x-5 translate-y-1 group-hover:clip-path-inset transition-all duration-300 shadow-md backdrop-blur z-50">
      {React.Children.map(
        children,
        (item: React.ReactFragment, index: React.Key): any => {
          let redirect = item.props.children;
          redirect = redirect.toLowerCase().replace(" ", "-");

          return (
            <Link to={`category/${redirect}`}>
              <li
                key={index}
                className={`p-3 cursor-pointer hover:bg-neutral-100/80 font-normal text-neutral-700 hover:text-neutral-900 text-center ${itemPositionBorderRadius(
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
