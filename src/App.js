import { Route, BrowserRouter, Routes } from "react-router-dom";
import PageInit from "./Pages/init";
import HomePage from "./Pages/home/home";
import RegisterFamily from "./Pages/registry/register-family";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageInit />} path="/" />
        <Route element={<HomePage />} path="/home" />
        <Route element={<RegisterFamily />} path="/registry" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
