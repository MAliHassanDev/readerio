import { FormField } from "@/components/ui/form/FormField";
import { useForm, type SubmitHandler } from "@/hooks/useForm";
import {
  registerUserSchema,
  type RegisterUserData,
} from "@/lib/schemas/authSchema";
import { userService } from "@/services/userService";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

export const RegisterPage = () => {
  const { errors, values, handleFormFieldChange, handleSubmit, pending } =
    useForm(registerUserSchema, {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterUserData> = async data => {
    try {
      await userService.registerUser(data);
      toast.success("Account created successfully");
      await navigate("/account/login");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <main className="flex w-full flex-1 items-center justify-center">
      <form
        method="post"
        action="/account/register"
        onSubmit={handleSubmit(onSubmit)}
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
            name="name"
            label="Name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleFormFieldChange}
            errorMessage={errors.name}
          />

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

          <button className="btn btn-primary" disabled={pending} type="submit">
            {pending ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "create"
            )}
          </button>
        </div>
      </form>
    </main>
  );
};
