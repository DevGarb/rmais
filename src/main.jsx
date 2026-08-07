import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Planos from "./pages/Planos.jsx";
import Garantia from "./pages/Garantia.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import Politica from "./pages/Politica.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/rmais">
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="planos" element={<Planos />} />
          <Route path="garantia" element={<Garantia />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="politicas/privacidade" element={<Politica variant="privacidade" />} />
          <Route path="politicas/termos" element={<Politica variant="termos" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
