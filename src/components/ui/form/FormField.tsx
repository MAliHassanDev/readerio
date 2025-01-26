import type { ChangeEvent, InputHTMLAttributes } from "react";

type Props = {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;
export const FormField = ({ label, errorMessage, ...rest }: Props) => {
  return (
    <p>
      <label className="form-control">
        <span className="label">
          <span className={`label-text ${errorMessage ? "text-red-500" : ""}`}>
            {label}
          </span>
        </span>

        <input
          className={`input input-bordered ${errorMessage ? "border-red-500" : ""}`}
          required
          {...rest}
        />
      </label>
      {errorMessage && (
        <small className="mt-0.5 block text-red-500">{errorMessage}</small>
      )}
    </p>
  );
};
