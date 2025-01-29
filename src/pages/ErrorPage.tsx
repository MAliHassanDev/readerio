import { Link, useRouteError } from "react-router";
import { ApiException } from "../utils/exceptions";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <main className="flex flex-[0.8] flex-col items-center justify-center">
      {error instanceof ApiException ? (
        <ApiExceptionMessage error={error} />
      ) : (
        <GeneralErrorMessage error={error} />
      )}
    </main>
  );
};

function ApiExceptionMessage({ error }: { error: ApiException }) {
  return (
    <div className="text-center">
      <h1 className="mb-5 text-9xl font-semibold">{error.statusCode}</h1>
      <p className="mb-4 text-2xl">{error.message}</p>
      <Link className="btn btn-outline" to="/">
        Back to Home
      </Link>
    </div>
  );
}

function GeneralErrorMessage({ error }: { error: unknown }) {
  return (
    <div className="text-center">
      <h1 className="mb-5 text-4xl">
        {error instanceof Error ? error.message : "Something went wrong!"}
      </h1>
      <Link to="/" className="btn btn-outline">
        Refresh
      </Link>
    </div>
  );
}
