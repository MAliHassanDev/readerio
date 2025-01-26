import type { ReactNode } from "react";

type Props = {
  children?: ReactNode[] | ReactNode;
};
export const HeaderContainer = ({ children }: Props) => {
  return (
    <header>
      <div className="border-b-base-300 flex items-center justify-between border-b-1 px-6 py-3">
        {children}
      </div>
    </header>
  );
};
