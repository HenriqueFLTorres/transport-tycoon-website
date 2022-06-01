import React, { useState } from "react";

import Cart from "~/Icons/Cart";
import Close from "~/Icons/Close";

type Props = {};

const CartDropDown = (props: Props) => {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <div className="flex justify-center z-50">
      <Cart
        className={`fill-neutral-700 w-12 h-12 p-2 rounded-md border-[1px] hover:bg-neutral-100/80 cursor-pointer transition-all duration-150 ${cartVisible ? "bg-neutral-600/20 border-neutral-500 fill-neutral-500 drop-shadow-[0_0_1px_rgba(0,0,0,0.4)]" : "border-transparent"}`}
        onClick={() => setCartVisible(!cartVisible)}
      />
      <div
        className={`absolute flex flex-col bg-gradient-to-br from-neutral-200/80 to-neutral-100/90 rounded-md divide-y divide-neutral-300 border-t-2 p-2 border-neutral-300 text-neutral-700 translate-y-14 ${
          cartVisible ? "clip-path-inset" : "clip-hide-top"
        } transition-all duration-300 shadow-[0_0_5px_rgb(255,255,255)] backdrop-blur`}
      >
        <div>
          <div className="flex flex-row gap-10 items-center rounded p-2">
            <span className="font-semibold">Double XP Party</span>
            <span>4.99 USD</span>
            <div className="group p-2 rounded hover:bg-neutral-400/20 cursor-pointer transition-colors duration-150">
              <Close className="h-4 w-4 stroke-neutral-500 group-hover:stroke-red-400 transition-colors duration-150" />
            </div>
          </div>
          <div className="flex flex-row gap-10 items-center rounded p-2">
            <span className="font-semibold">Double XP Party</span>
            <span>4.99 USD</span>
            <div className="group p-2 rounded hover:bg-neutral-400/20 cursor-pointer transition-colors duration-150">
              <Close className="h-4 w-4 stroke-neutral-500 group-hover:stroke-red-400 transition-colors duration-150" />
            </div>
          </div>
          <div className="flex flex-row gap-10 items-center rounded p-2">
            <span className="font-semibold">Double XP Party</span>
            <span>4.99 USD</span>
            <div className="group p-2 rounded hover:bg-neutral-400/20 cursor-pointer transition-colors duration-150">
              <Close className="h-4 w-4 stroke-neutral-500 group-hover:stroke-red-400 transition-colors duration-150" />
            </div>
          </div>
          <div className="flex flex-row gap-10 items-center rounded p-2">
            <span className="font-semibold">Double XP Party</span>
            <span>4.99 USD</span>
            <div className="group p-2 rounded hover:bg-neutral-400/20 cursor-pointer transition-colors duration-150">
              <Close className="h-4 w-4 stroke-neutral-500 group-hover:stroke-red-400 transition-colors duration-150" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between pt-3 px-2 pb-1">
            <span className="flex justify-center items-center font-bold text-base">Total: 428.95 USD</span>
            <button className="bg-neutral-300 text-neutral-400 hover:bg-[#119453] hover:text-neutral-100 hover:drop-shadow-[0_0_3px_#119453] px-4 py-2 rounded transition-all duration-200">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartDropDown;
