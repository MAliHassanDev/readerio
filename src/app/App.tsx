import { RootLayout } from "@/layout/RootLayout";
import { Home } from "@/pages/Home";
import Write from "@/pages/Write";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { Toaster } from "react-hot-toast";
import { SignInPage } from "@/pages/SignInPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { AccountPage } from "@/pages/AccountPage";
import { AccountLayout } from "@/layout/AccountLayout";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path={"/"} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="write" element={<Write />} />
    </Route>,

    <Route path="/account" element={<AccountLayout />}>
      <Route index element={<AccountPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="signin" element={<SignInPage />} />
    </Route>,
  ]),
);

const App = () => {
  return (
    <div className="flex min-h-svh flex-col font-serif">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
