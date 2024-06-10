import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="d-flex vh-100">
      <div className="container my-auto">
        <div className="row justify-content-center">
          <div className="col text-center">
            <h1>¡Bienvenido(a)!</h1>
            <Link to="/bill">
              <button className="btn btn-primary mt-3">Registrar factura</button>
            </Link>

            <p className="mt-5">Integrantes:</p>
            <div className="p-3">
              <p>Elkin Torres</p>
              <p>Sebastián Gil Rueda</p>
              <p>Juan Diego Varón Solorzano</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
