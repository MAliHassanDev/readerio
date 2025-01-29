import { Link, Outlet } from "react-router";
import Pen from "@/assets/icons/pen.svg?react";
import { HeaderContainer } from "./components/HeaderContainer";
import { SearchBar } from "@/components/ui/SearchBar";
import { userService, type UserProfile } from "@/services/userService";
import { useService } from "@/hooks/useService";
import { avatarService } from "@/services/avatarService";
import { UserMenu } from "./components/UserMenu";

export const RootLayout = () => {
  const { data, loading } = useService(userService.getUserProfile);

  return (
    <>
      <HeaderContainer>
        <div className="flex items-center gap-5">
          <Link to={"/"} className="text-3xl font-semibold">
            Readerio
          </Link>
          <SearchBar />
        </div>

        {loading && (
          <div className="flex items-center gap-4">
            <div className="skeleton h-10 w-18"></div>
            <div className="skeleton h-8 w-8 rounded-full"></div>
          </div>
        )}

        {!loading && !data && (
          <Link to="account/login" className="btn btn-outline">
            Log In
          </Link>
        )}

        {data && <LogInUserHeaderSection user={data.user} />}
      </HeaderContainer>
      <Outlet />
    </>
  );
};

function LogInUserHeaderSection({ user }: { user: UserProfile }) {
  const { loading, data } = useService(avatarService.getAvatar, user.name);

  return (
    <div className="flex items-center gap-1 md:gap-4">
      <Link
        to="write"
        className="text-light-content hover:text-base-content flex cursor-pointer"
      >
        <Pen />
        <p className="px-2">Write</p>
      </Link>

      {loading && <div className="skeleton h-8 w-8 rounded-full"></div>}

      {data && <UserMenu avatar={data.image} />}
    </div>
  );
}
