import Button from "@/components/ui/Button";
import { FormField } from "@/components/ui/form/FormField";
import { useForm, type SubmitHandler } from "@/hooks/useForm";
import { notify } from "@/lib/notify";
import {
  signInUserSchema,
  type SignInUserData,
} from "@/lib/schemas/authSchema";
import { userService } from "@/services/userService";
import { Link, useNavigate } from "react-router";

export const SignInPage = () => {
  const { values, errors, pending, handleSubmit, handleFormFieldChange } =
    useForm(signInUserSchema, {
      email: "visitor@gmail.com",
      password: "Visitor00",
    });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInUserData> = async function (data) {
    try {
      await userService.signInUser(data);
      notify.success("Sign in successful");
      await navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        notify.error(error.message);
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
          <h1 className="self-center text-3xl font-bold">Log in</h1>

          <span className="self-center">
            Don't have an account?
            <Link to="../register" className="link link-secondary">
              Register
            </Link>
          </span>

          <a className="btn btn-neutral">
            <i className="fa-brands fa-google text-primary"></i>
            Log in with Google
          </a>

          <div className="divider">OR</div>

          <FormField
            errorMessage={errors.email}
            name="email"
            type="email"
            onChange={handleFormFieldChange}
            value={values.email}
            label="Email"
            autoComplete="email"
          />

          <FormField
            errorMessage={errors.password}
            name="password"
            type="password"
            onChange={handleFormFieldChange}
            label="Password"
            autoComplete="password"
            value={values.password}
          />

          <div className="form-control">
            <label className="label cursor-pointer gap-2 self-start">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">Remember me</span>
            </label>
          </div>

          <Button shape="primary" type="submit" pending={pending}>
            Log In
          </Button>
        </div>
      </form>
    </main>
  );
};
