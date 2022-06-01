import React from "react";
import Crown from "~/Icons/Crown";
import Dollar from "~/Icons/Dollar";
import User from "~/Icons/User";
import Wrench from "~/Icons/Wrench";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br ml-auto fill-neutral-100 text-neutral-100 font-normal w-96 py-16 my-10 ">
      <div className="mb-12">
        <div className="flex items-center mb-8">
          <Crown className="h-8 w-8 mr-4" />
          <p className="font-bold text-3xl">Tycoon of the Day</p>
        </div>
        <div className="flex items-center w-max mx-auto">
          <User className="h-10 w-10 mr-4" />
          <div>
            <p className="font-bold">FellowUser159</p>
            <p>
              Donated <span className="font-bold">359.56 USD</span> today!
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center mb-8">
          <Wrench className="h-8 w-8 mr-4" />
          <p className="font-bold text-3xl">Cover upkeep fees</p>
        </div>
        <div className="flex flex-col justify-center w-max mx-auto text-center">
          <div className="h-8 w-56 border-2 border-neutral-100 bg-[#85BB65] rounded-full mb-4"></div>
          <div>
            <p className="text-xl">
              <span className="font-bold">100%</span> completed!
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center mb-8">
          <Dollar className="h-8 w-8 mr-4" />
          <p className="font-bold text-3xl">Recent Payments</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center w-max mx-auto">
            <User className="h-10 w-10 mr-4" />
            <div>
              <p className="font-bold">FellowUser159</p>
              <p>
                Donated <span className="font-bold">359.56 USD</span> today!
              </p>
            </div>
          </div>
          <div className="flex items-center w-max mx-auto">
            <User className="h-10 w-10 mr-4" />
            <div>
              <p className="font-bold">FellowUser159</p>
              <p>
                Donated <span className="font-bold">359.56 USD</span> today!
              </p>
            </div>
          </div>
          <div className="flex items-center w-max mx-auto">
            <User className="h-10 w-10 mr-4" />
            <div>
              <p className="font-bold">FellowUser159</p>
              <p>
                Donated <span className="font-bold">359.56 USD</span> today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
