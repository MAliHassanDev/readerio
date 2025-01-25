import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  items: {
    title: string;
    onClick: () => void;
  }[];
};

export const DropDownTop = ({ items, children }: Props) => {
  return (
    <div className="dropdown dropdown-top dropdown-end">
      <button tabIndex={0} role="button" className="m-1 cursor-pointer">
        {children}
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {items.map(item => {
          return (
            <li>
              <button onClick={item.onClick}>{item.title}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
