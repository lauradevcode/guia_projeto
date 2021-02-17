import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoSmall from "./../../../assets/images/logo-small.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src={logoSmall} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            arial-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-md-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" tabindex="-1" aria-disabled="true">Início</Link>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="empresa.html">Empresas</a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="eventos.html">Eventos</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contato" tabindex="-1" aria-disabled="true">Contato</Link>
              </li>

              <div className="btn-mobile">
                <li className="nav-item">
                  <a className="nav-link" href="anuncie.html" tabindex="-1" aria-disabled="true">ANUNCIE</a>  
                </li>
              </div>
            </ul>
          </div>
          <div className="btn-desktop">
            <form className="d-flex">
              <li className="nav-item">
                <a className="nav-link" href="anuncie.html" tabindex="-1" aria-disabled="true">ANUNCIE</a>
              </li>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
