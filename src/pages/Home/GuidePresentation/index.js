import "./GuidePresentation.css";

const GuidePresentation = () => {
  return (
    <>
      <div className="container-presentation">
        <div className="card-title">NOSSO GUIA DE VANTAGENS</div>
        <div className="card-description">
            O Guia Cidade Online foi criado para facilitar a sua procura por empresas, profissionais,
            serviços, produtos, mapas e locais, notícias, eventos, avaliações, descontos e ofertas,
            sorteios, vagas de empregos, banco de currículos e muito mais. Encontre tudo o que você
            estiver procurando em qualquer uma das cidades da nossa rede!
        </div>
        <button className="btn btn-outline-light" style={{ border: 'none', marginTop: '25px' }}>DIVULGUE SUA
          EMPRESA!
        </button>
      </div>
    </>
  );
};

export default GuidePresentation;
