import './ProvisionalContent.css'

const ProvisionalContent = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <section className="bar">
                            <div className="heading">
                                <h2>FALE CONOSCO </h2>
                                <span></span>
                                <div className="clear"></div>
                            </div>
                                <p className="lead">
                                Você gostaria de mais informações sobre o nosso guia? Podemos ajudar com alguma dúvida?
                                    Nossa central de atendimento e suporte estará pronta para responder quaisquer dúvidas 
                                    ou perguntas sobre nosss serviços e soluções. 
                                </p>
                            <div className="heading">
                                <h3>Formulário de Contato</h3>
                                <span></span>
                                <div className="clear"></div>
                            </div>
                            <form name="formContato" action="envia-contato.php" method="post">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="nome"><b>Nome/Empresa</b></label>
                                            <input name="form_nome" id="form_nome" type="text" className="form-control" maxlength="40" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="cidade"><b>Cidade/Estado</b></label>
                                            <input name="form_cidade" id="form_cidade" type="text" className="form-control" maxlength="35" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email"><b>E-mail Retorno</b></label>
                                            <input name="form_email" id="form_email" type="email" className="form-control" maxlength="50" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="fone"><b>Celular (whatsapp)</b></label>
                                            <input name="form_fone" id="form_fone" type="tel" className="form-control" maxlength="20" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="subject"><b>Onde nos encontrou</b></label>
                                            <select name="form_origem" id="form_origem" className="form-select">
                                            <option value="GOOGLE" selected="selected">Google</option>
                                            <option value="FACEBOOK">Facebook</option>
                                            <option value="INSTAGRAM">Instagram</option>
                                            <option value="FRANQUEADO">Franqueado Ativo</option>
                                            <option value="E-MAIL">E-mail promocional</option>
                                            <option value="SITES-FRANQUIA">Sites de Franquia</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="message"><b>Mensagem</b></label>
                                            <textarea name="form_mensagem" rows="5" className="form-control" id="form_mensagem" required=""></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="g-recaptcha" data-sitekey="6LdVfmMUAAAAAFOWeWpLRMI1M7-SHOajqWoFJPd-" align="center">
                                            <div style={{width: '304px', height: '78px'}}>
                                            <div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdVfmMUAAAAAFOWeWpLRMI1M7-SHOajqWoFJPd-&amp;co=aHR0cHM6Ly93d3cuZ3VpYWNpZGFkZW9ubGluZS5jb20uYnI6NDQz&amp;hl=pt-BR&amp;v=_KUxfxvAoJ4k7SaKyLbja4Mi&amp;size=normal&amp;cb=dpp1b878opwh" role="presentation" name="a-nxqwsrsz6f3o" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" width="304" height="78" frameborder="0"></iframe></div>
                                            {/* <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea> */}
                                            </div>
                                            <iframe style={{display: 'none'}}></iframe>
                                        </div>
                                        <br />
                                        <input type="hidden" name="identificador" value="form_contato" />
                                        <button type="submit" className="btn btn-primary">
                                        <i className="far fa-envelope"></i> ENVIAR MENSAGEM
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div className="col-lg-4">
                        <section className="bar mb-0">
                            <h3 className="text-uppercase"><i className="fas fa-map-marker-alt"></i> ENDEREÇO MATRIZ</h3>
                            <p className="text-sm">Rua Itapura 505 - Jardim Paulista <br /> CEP 14090-082<br />Ribeirão Preto-SP<br />Brasil</p>
                            <h3 className="text-uppercase"><i className="fas fa-phone-alt"></i> FONE ATENDIMENTO</h3>
                            <p className="text-muted text-sm">Telefone fixo de atendimento da matriz para franqueados e anunciantes.</p>
                            <p><strong>(16) 3617-1655</strong></p>
                            <br />
                            <h3 className="text-uppercase"><i className="far fa-comments"></i> CHAT ONLINE</h3>
                            <p className="text-muted text-sm">Acesse nosso atendimento online no canto inferior direito da tela e envie sua mensagem.</p>
                            <h3 className="text-uppercase"> <i className="fab fa-whatsapp"></i> WHATS APP (VENDAS)</h3>
                            <p className="text-muted text-sm">Para contato direto com nosso consultor franquias ou anúncios solicite atendimento no link abaixo:</p>
                            <div align="center">
                            <a href="https://api.whatsapp.com/send?phone=5516991622244&amp;text=Seja Bem Vindo! Envie Sua Mensagem que em Breve Retornarei..." target="_blank" className="btn btn-success">Conversar WhatsApp</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProvisionalContent;