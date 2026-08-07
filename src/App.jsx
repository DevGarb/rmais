import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
      <CookieBanner />
    </div>
  );
}
