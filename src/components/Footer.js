import React from 'react'

export const Footer = () => {

    return (
        <footer className="bd-footer py-md-5  bg-light">
            <div className="container-fluid text-center text-md-left bg-image-footer">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="card mt-3 mb-3">
                            <div className="card-body text-center ">
                                <a src="" width="60%" height="60%" alt="">Restaurante Siglo XXI</a>
                            </div>
                            <div className="card-footer text-center ">
                                <div className="btn-group">
                                    <a href="/">
                                        <button type="button" className="btn btn-dark text-white ">Pagina Principal</button>
                                    </a>
                                    <a href="/">
                                        <button type="button" className="btn btn-dark text-white mx-4">Contacto</button>
                                    </a>
                                    <a href="/">
                                        <button type="button" className="btn btn-dark text-white ">Sobre nosotros</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}