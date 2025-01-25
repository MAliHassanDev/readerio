import Pen from "@/assets/icons/pen.svg?react";
import Avatar from "@/components/ui/Avatar";
import { Link } from "react-router";
const Header = () => {
  return (
    <header>
      <div className="border-b-base-300 flex items-center justify-between border-b-1 px-6 py-3">
        <div className="flex items-center gap-4">
          <Link to={"/"} className="text-3xl font-semibold">
            Readerio
          </Link>
          <div>
            <label className="input text-light-content rounded-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="rounded"
                required
                placeholder="Search"
              />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="write"
            className="text-light-content hover:text-base-content flex cursor-pointer"
          >
            <Pen />
            <p className="px-2">Write</p>
          </Link>
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
