import Hero from "../sections/Hero";
import StatBar from "../sections/StatBar";
import Simulador from "../sections/Simulador";
// Features ("Capacidades") desativada da interface a pedido — componente mantido em
// src/sections/Features.jsx para religar depois, só não é renderizada aqui.
import ComoFunciona from "../sections/ComoFunciona";
import Personas from "../sections/Personas";
import PlanosHome from "../sections/PlanosHome";
import GarantiaTeaser from "../sections/GarantiaTeaser";
import Depoimentos from "../sections/Depoimentos";
import AppDemo from "../sections/AppDemo";
import Cobertura from "../sections/Cobertura";
import FAQHome from "../sections/FAQHome";
import CTAFinal from "../sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <Personas />
      <Simulador />
      <GarantiaTeaser />
      <ComoFunciona />
      <StatBar />
      <PlanosHome />
      <Depoimentos />
      <AppDemo />
      <Cobertura />
      <FAQHome />
      <CTAFinal />
    </>
  );
}
