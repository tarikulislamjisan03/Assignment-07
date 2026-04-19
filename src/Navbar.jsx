import { ChartColumnBig, Clock, House } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row h-32 items-center justify-between px-6 md:h-16  bg-white border-b border-gray-100 shadow-lg">
        {/* Logo */}
        <div className="text-[25px] tracking-tight">
          <span className="font-bold text-gray-900">Keen</span>
          <span className="font-normal text-gray-900">Keeper</span>
        </div>

        {/* Nav Links */}
        <div className=" items-center gap-1">
          <div className="flex bg-white rounded-xl p-1 gap-2 ">
            {/* Home Link */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#2d4f43] text-white shadow-md"
                    : "text-slate-500 hover:bg-gray-50"
                }`
              }
            >
              <House />
              <span className="font-semibold text-lg">Home</span>
            </NavLink>

            {/* Timeline  */}
            <NavLink
              to="/Timeline"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#2d4f43] text-white shadow-md"
                    : "text-slate-500 hover:bg-gray-50"
                }`
              }
            >
              <Clock />
              <span className="font-semibold text-lg">Timeline</span>
            </NavLink>

            {/* Stats / Dashboard Link */}
            <NavLink
              to="/Stats"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#2d4f43] text-white shadow-md"
                    : "text-slate-500 hover:bg-gray-50"
                }`
              }
            >
              <ChartColumnBig />
              <span className="font-semibold text-lg">Stats</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
