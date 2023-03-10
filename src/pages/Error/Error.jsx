import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

function Error() {
  return (
    <div>
      <Header />
      <main className="error_page">
        <h1 className="error_title">404</h1>
        <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="error_return" to="/">
          Retourner sur la page d'accueil
        </Link>
      </main>
    </div>
  );
}

export default Error;