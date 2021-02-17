import "./Carousel.css";

import banner3 from "./../../../assets/images/banner3.jpeg";

const Carousel = () => {
  return (
    <>
      <header>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={banner3}
                className="d-block w-100"
                alt="..."
                style={{ height: "548px", width: "100%" }}
              />
              <div className="carousel-caption d-md-block">
                <h1 style={{ fontSize: "3.2rem" }}>Guia Comercial SP</h1>
                <p className="banner-description">
                  Encontre Comércio, Escolas e Agências Bancárias
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={banner3}
                className="d-block w-100"
                alt="..."
                style={{ height: "548px", width: "100%" }}
              />
              <div className="carousel-caption d-md-block">
                <h1 style={{ fontSize: "3.2rem" }}>Guia Comercial SP</h1>
                <p className="banner-description">
                  Encontre Comércio, Escolas e Agências Bancárias
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={banner3}
                className="d-block w-100"
                alt="..."
                style={{ height: "548px", width: "100%" }}
              />
              <div className="carousel-caption d-md-block">
                <h1 style={{ fontSize: "3.2rem" }}>Guia Comercial SP</h1>
                <p className="banner-description">
                  Encontre Comércio, Escolas e Agências Bancárias
                </p>
              </div>
            </div>
            <div className="form-banner">
              <form name="form-banner" action="envia-contato.php" method="post">
                <div className="row">
                  <div className="col-md-6 px-0">
                    <div className="form-group">
                      <input
                        name="form_nome"
                        id="form_nome"
                        type="text"
                        placeholder="Pesquisar"
                        className="form-control"
                        maxlength="40"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="selc col-md-3 px-0">
                    <div className="form-group">
                      <select
                        name="form_origem"
                        id="form_origem"
                        className="form-select"
                      >
                        <option value="GOOGLE" selected="selected">
                          Categorias:
                        </option>
                        <option value="FACEBOOK">Escolas</option>
                        <option value="INSTAGRAM">Comércios</option>
                        <option value="FRANQUEADO">Bares</option>
                        <option value="E-MAIL">Eventos</option>
                      </select>
                    </div>
                  </div>
                  <div className="selc col-md-2 px-0">
                    <button
                      type="submit"
                      className="w-100 btn btn-primary"
                      style={{ backgroundColor: "#ff6207" }}
                    >
                      ENCONTRAR
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Carousel;
