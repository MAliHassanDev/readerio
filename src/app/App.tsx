import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import Write from "@/pages/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-svh font-serif">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="write" element={<Write />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
