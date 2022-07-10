import React from "react";
import {Link} from "react-router-dom";
function NavBar() {
  return (
    <div>
      <div className="flex justify-between px-6 py-4">
        <div>
          <ul className="flex flex-row font-bold items-center text-sm">
            <img
              className="pr-7"
              src="https://www.starbucks.in/media/logo_tcm87-366_w1024_n.png"
              alt=""
            />
            <li className="px-2">Coffee</li>
            <li className="px-2">Rewards</li>
            <li className="px-2">Careers</li>
          </ul>
        </div>
        <div className="hidden lg:inline-flex">
          <ul className="flex flex-row font-bold text-sm items-center">
            <li className="px-2"><i class="fa-solid fa-location-dot"></i></li>
            <li className="pr-5">Find Nearest Store</li>
            <li className="px-2">
              <a className="border-solid border-black border-2 rounded-full px-4 py-1 text-center hover:bg-black hover:text-white transition hover:ease-in-out duration-300">
              Sign In
              </a>
            </li>
            <li className="px-2">
              <button className="border-solid bg-black text-white border-black border-2 rounded-full px-4 py-1 text-center hover:bg-white hover:text-black transition hover:ease-in-out duration-300">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="border my-1"></div>
    </div>
  );
}

export default NavBar;
