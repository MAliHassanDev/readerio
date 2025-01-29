import { Link, useNavigate } from "react-router";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  async function goBackToPreviousPage() {
    await navigate(-1);
  }

  return (
    <section className="flex-1 bg-white">
      <div className="container mx-auto flex h-full items-center px-6 py-12">
        <div className="mx-auto flex max-w-sm flex-col items-center text-center">
          <p className="rounded-full bg-blue-50 p-3 text-sm font-medium text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500">
            The page you are looking for doesn't exist. Here are some helpful
            links:
          </p>

          <div className="mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto">
            <button
              className="btn btn-outline"
              onClick={() => goBackToPreviousPage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5 rtl:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back</span>
            </button>

            <Link className="btn btn-primary" to="/">
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
