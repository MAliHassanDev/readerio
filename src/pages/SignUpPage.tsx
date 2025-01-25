export const SignUpPage = () => {
  return (
    <div className="rounded-box bg-base-200 flex max-w-md flex-col gap-4 p-6">
      <h1 className="self-center text-3xl font-bold">Create an account</h1>

      <span className="self-center">
        Already have an account?
        <a className="link link-secondary">Log in</a>
      </span>

      <a className="btn btn-neutral">
        <i className="fa-brands fa-google text-primary"></i>
        Create with Google
      </a>

      <div className="divider my-0">OR</div>

      <label className="form-control">
        <div className="label">
          <span className="label-text">Email</span>
        </div>

        <input className="input input-bordered" />
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text">Password</span>
        </div>

        <input type="password" className="input input-bordered" />
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text">Confirm password</span>
        </div>

        <input type="password" className="input input-bordered" />
      </label>

      <div className="form-control">
        <label className="label cursor-pointer gap-2 self-start">
          <input type="checkbox" className="checkbox" />
          <span className="label-text">
            I accept the
            <a className="link link-accent">Terms and Conditions</a>
          </span>
        </label>
      </div>

      <button className="btn btn-primary">Create</button>
    </div>
  );
};
