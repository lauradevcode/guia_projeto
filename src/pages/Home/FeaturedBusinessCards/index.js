import "./FeaturedBusinessCards.css";

import em1 from './../../../assets/images/em1.jpg';
import em2 from './../../../assets/images/em2.jpg';
import em3 from './../../../assets/images/em3.jpg';
import loja1 from './../../../assets/images/loja1.jpg';

const FeaturedBusinessCards = () => {
  return (
    <>
      <h3 id="featured-companies-title">EMPRESAS DESTAQUES</h3>
      <h3 id="featured-companies-subtitle">As melhores aqui!</h3>

      <div className="grid-container-featured">
        <div className="grid-item">
          <img src={em1} alt="emp1" />
          <div className="item-title">Salão Paulista</div>
          <div className="btn-access-information">
            <a href="acesso.html" className="text-decoration-none text-white">
              ACESSE
            </a>
          </div>
        </div>
        <div className="grid-item">
          <img src={em2} alt="emp2" />
          <div className="item-title">Gráfica JP</div>
          <div className="btn-access-information">
            <a href="acesso.html" className="text-decoration-none text-white">
              ACESSE
            </a>
          </div>
        </div>
        <div className="grid-item">
          <img src={em3} alt="emp3" />
          <div className="item-title">Empréstimo</div>
          <div className="btn-access-information">
            <a href="acesso.html" className="text-decoration-none text-white">
              ACESSE
            </a>
          </div>
        </div>
        <div className="grid-item">
          <img src={loja1} alt="loja1" />
          <div className="item-title">Web Designer</div>
          <div className="btn-access-information">
            <a href="acesso.html" className="text-decoration-none text-white">
              ACESSE
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedBusinessCards;
