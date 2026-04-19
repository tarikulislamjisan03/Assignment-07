import { Home, Link } from "lucide-react";
import { NavLink } from "react-router";

export default function Errorpage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
      <p className="text-8xl font-bold text-teal-800">404</p>
      <h1 className="text-2xl font-semibold text-gray-800">Unexpected Error</h1>
      <p className="text-gray-400 text-sm">
        The page you're looking for was not found.
      </p>
      <NavLink to={"./"}>
        <button className="mt-4 flex items-center gap-2 bg-teal-800 hover:bg-teal-900 active:scale-95 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all">
          <Home> </Home>
          Back to Homepage
        </button>
      </NavLink>
    </div>
  );
}
