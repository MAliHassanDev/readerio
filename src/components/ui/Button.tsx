import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-neutral rounded-full px-6" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
