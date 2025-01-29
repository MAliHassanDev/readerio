/* eslint-disable @typescript-eslint/no-misused-promises */
import Avatar from "@/components/ui/Avatar";
import { userService } from "@/services/userService";
import { LogOut, Settings, User } from "lucide-react";
import { Link, useNavigate } from "react-router";

type Props = {
  avatar: string;
};
export function UserMenu({ avatar }: Props) {
  const navigate = useNavigate();

  async function handleLogOut() {
    userService.logoutUser();
    await navigate("/");
    window.location.reload();
  }

  return (
    <div className="dropdown dropdown-end">
      <button tabIndex={0} className="cursor-pointer">
        <Avatar image={avatar} />
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content text-light-content menu bg-base-100 rounded-box mt-2 w-56 p-2 shadow"
      >
        <li className="menu-title">
          <span>My Account</span>
        </li>
        <li>
          <Link to="/account">
            <User />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Settings />
            <span>Settings</span>
          </Link>
        </li>
        <li className="menu-divider"></li>
        <li>
          <button onClick={handleLogOut}>
            <LogOut />
            <span>Log out</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
