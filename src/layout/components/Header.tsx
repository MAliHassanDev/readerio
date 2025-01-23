import Pen from "@/assets/icons/pen.svg?react";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <a className="text-3xl font-semibold">Readerio</a>
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
          <a className="text-light-content hover:text-base-content flex cursor-pointer">
            <Pen />
            <p className="px-2">Write</p>
          </a>
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
