import React from "react";

const DropDown = ({ children }: any) => {

    const itemPositionBorderRadius = (index: React.Key) => {
        if ( index === 0 ) {
            return "rounded-t-md"
        }
        else if ( index === children.length - 1 ) {
            return "rounded-b-md"
        }
        else {
            return ""
        }
    }

  return (
    <ul className="absolute flex flex-col bg-neutral-100 p-2 rounded-md divide-y text-neutral-900 clip-hide-top -translate-x-2 group-hover:clip-path-inset transition-all duration-300">
      {children.map((item: React.ReactChild, index: React.Key):any => (
        <li key={index} className={`p-3 cursor-pointer hover:bg-neutral-200 ${itemPositionBorderRadius(index)} transition-all duration-200`}>
          {item.props.children}
        </li>
        ))}
    </ul>
  );
};

export default DropDown;
