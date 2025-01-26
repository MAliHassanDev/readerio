import { Link, Outlet } from "react-router";
import Pen from "@/assets/icons/pen.svg?react";
import Avatar from "@/components/ui/Avatar";
import { HeaderContainer } from "./components/HeaderContainer";
import { SearchBar } from "@/components/ui/SearchBar";

export const RootLayout = () => {
  return (
    <>
      <HeaderContainer>
        <div className="flex items-center gap-5">
          <Link to={"/"} className="text-3xl font-semibold">
            Readerio
          </Link>
          <SearchBar />
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
      </HeaderContainer>
      <Outlet />
    </>
  );
};
