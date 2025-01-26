import { FormField } from "@/components/ui/form/FormField";
import { useForm } from "@/hooks/useForm";
import { authService } from "@/services/authService";
import type { FormEvent } from "react";
import { Form, Link } from "react-router";
import { z } from "zod";

const registerUserSchema = z
  .object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Email address is invalid")
      .or(z.literal("")),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password must be between 6 and 40 characters")
      .max(40)
      .or(z.literal("")),
    confirmPassword: z
      .string({ required_error: "Confirm Password is required" })
      .min(6, "Password must be between 6 and 40 characters.")
      .max(40)
      .or(z.literal("")),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const RegisterPage = () => {
  const { errors, values, handleFormFieldChange, validateForm } = useForm(
    registerUserSchema,
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
  );

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = validateForm();
    void authService.registerUser(data);
  }

  return (
    <main className="flex w-full flex-1 items-center justify-center">
      <Form
        method="post"
        action="/account/register"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className="rounded-box border-light-content flex max-w-md flex-col gap-4 border p-6 shadow md:min-w-sm">
          <h1 className="self-center text-3xl font-bold">Create an account</h1>

          <span className="self-center">
            Already have an account?
            <Link to="../signin" className="link link-secondary">
              Log in
            </Link>
          </span>

          <a className="btn btn-neutral">
            <i className="fa-brands fa-google text-primary"></i>
            Create with Google
          </a>

          <div className="divider my-0">OR</div>

          <FormField
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleFormFieldChange}
            errorMessage={errors.email}
          />

          <FormField
            name="password"
            type="password"
            label="Password"
            value={values.password}
            onChange={handleFormFieldChange}
            autoComplete="new-password"
            errorMessage={errors.password}
          />

          <FormField
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleFormFieldChange}
            label="Confirm Password"
            autoComplete="new-password"
            errorMessage={errors.confirmPassword}
          />
          <div className="form-control">
            <label className="label cursor-pointer gap-2 self-start">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">
                I accept the
                <a className="link link-accent">Terms and Conditions</a>
              </span>
            </label>
          </div>

          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </div>
      </Form>
    </main>
  );
};
