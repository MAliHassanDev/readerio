import { Link } from "react-router";

export const SignInPage = () => {
  return (
    <main className="flex w-full flex-1 items-center justify-center">
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

        <label className="form-control">
          <div className="label">
            <span className="label-text block">Email</span>
          </div>

          <input className="input input-bordered" />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Password</span>
          </div>

          <input type="password" className="input input-bordered" />
        </label>

        <div className="form-control">
          <label className="label cursor-pointer gap-2 self-start">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Remember me</span>
          </label>
        </div>

        <button className="btn btn-primary">Log in</button>
      </div>
    </main>
  );
};
