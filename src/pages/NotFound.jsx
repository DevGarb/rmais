import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-6 px-5 py-24 text-center">
      <h1 className="text-[var(--text-3xl)] font-extrabold">Página não encontrada</h1>
      <p className="text-[var(--text-secondary)]">O endereço que você tentou acessar não existe.</p>
      <Button as={Link} to="/">
        Voltar para a home
      </Button>
    </div>
  );
}
