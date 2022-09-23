import React from 'react'

export const Footer = () => {

    return (
        <footer class="bd-footer py-4 py-md-5 mt-5 bg-light">
            <div class="container-fluid text-center text-md-left bg-image-footer">
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-12 col-sm-12">
                        <div class="card mt-3 mb-3">
                            <div class="card-body text-center ">
                                <a src="" width="60%" height="60%" alt="">Restaurante Siglo XXI</a>
                            </div>
                            <div class="card-footer text-center ">
                                <div class="btn-group">
                                    <a href="/">
                                        <button type="button" class="btn btn-dark text-white ">Pagina Principal</button>
                                    </a>
                                    <a href="/">
                                        <button type="button" class="btn btn-dark text-white mx-4">Contacto</button>
                                    </a>
                                    <a href="/">
                                        <button type="button" class="btn btn-dark text-white ">Sobre nosotros</button>
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