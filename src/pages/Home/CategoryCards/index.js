import "./CategoryCards.css";

import cat1 from './../../../assets/images/cat1.jpg';
import cat3 from './../../../assets/images/cat3.webp';
import cat4 from './../../../assets/images/cat4.jpg';
import cat5 from './../../../assets/images/cat5.jpg';

const CategoryCards = () => {
  return (
    <>
      <h3 id="category-area-title">CATEGORIAS</h3>
      <h3 id="category-area-subtitle">Absolutamente tudo que o estado de São Paulo oferece.</h3>

      <div className="grid-container-category">
        <div className="grid-item">
          <img src={cat1} alt="cat1" />
          <div className="item-title">Escolas</div>
          <div className="btn-access-information">
            <a href="acesso.html" className="text-decoration-none text-white">
              ACESSE
            </a>
          </div>
        </div>
        <div className="grid-item">
          <img src={cat3} alt="cat3" />
          <div className="item-title">Bares</div>
          <div className="btn-access-information">
            <a href="acesso.html" className="text-decoration-none text-white">
              ACESSE
            </a>
          </div>
        </div>
        <div className="grid-item">
          <img src={cat4} alt="cat4" />
          <div className="item-title">Eventos</div>
          <div className="btn-access-information">
            <a href="acesso.html" className="text-decoration-none text-white">
              ACESSE
            </a>
          </div>
        </div>
        <div className="grid-item">
          <img src={cat5} alt="cat5" />
          <div className="item-title">Comércios</div>
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

export default CategoryCards;