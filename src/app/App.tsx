import { RootLayout } from "@/ui/layout/RootLayout";
import { Home } from "@/pages/Home";
import Write from "@/pages/Write";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="write" element={<Write />} />
    </Route>,
  ),
);

const App = () => {
  return (
    <div className="min-h-svh font-serif">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
