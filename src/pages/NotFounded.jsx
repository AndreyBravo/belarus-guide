import React from "react";
import { Link } from "react-router-dom";

function NotFounded() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          {" "}
          <span className="text-danger">Opps!</span> Страница не найдена.
        </p>
        <p className="lead">Страница, которую вы ищете, не существует.</p>
        <Link to="/" className="btn btn-primary">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}

export default NotFounded;
