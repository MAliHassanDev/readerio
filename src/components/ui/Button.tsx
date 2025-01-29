import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  pending?: boolean;
  shape?: "primary" | "secondary";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
};

const Button = ({
  children,
  onClick,
  pending = false,
  shape = "secondary",
  type = "button",
}: Props) => {
  return (
    <button
      className={
        shape == "secondary"
          ? "btn btn-neutral rounded-full px-6"
          : "btn btn-primary"
      }
      type={type}
      disabled={pending}
      onClick={onClick}
    >
      {pending ? <span className="loading loading-spinner"></span> : children}
    </button>
  );
};

export default Button;
