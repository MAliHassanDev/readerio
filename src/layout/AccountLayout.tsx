import { Link, Outlet } from "react-router";
import { HeaderContainer } from "./components/HeaderContainer";

export const AccountLayout = () => {
  return (
    <>
      <HeaderContainer>
        <Link to={"/"} className="text-3xl font-semibold">
          Readerio
        </Link>
      </HeaderContainer>
      <Outlet />
    </>
  );
};
