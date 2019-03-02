import React from 'react'
import { Link } from 'react-router-dom'

const AnuncioHome = ({id, anuncio}) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <Link to={`/categorias/${anuncio.categoria}/${id}`}><img className="card-img-top" src={anuncio.foto} alt="Foto" /></Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/anuncios/ver/`}>{anuncio.nome}</Link>
          </h4>
          <h5>{anuncio.preco}</h5>
          <p className="card-text">{anuncio.descricao}</p>
        </div>
      </div>
    </div>
  )
}

export default AnuncioHome