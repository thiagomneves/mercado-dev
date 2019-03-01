import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import HeaderInterno from './HeaderInterno'
import base, { storage } from './base'

class NovoAnuncio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sucess: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const file = this.foto.files[0]
    const { name, size } = file
    const ref = storage.ref(name)

    ref
      .put(file)
      .then( img => {
        ref.getDownloadURL().then(url => { 
          const novoAnuncio = {
            nome: this.nome.value,
            descricao: this.descricao.value,
            preco: this.preco.value,
            vendedor: this.vendedor.value,
            foto: url,
            telefone: this.telefone.value,
            categoria: this.categoria.value
          }
          base.push('anuncios', {
            data: novoAnuncio
          })
          .then(() => {
            this.setState({ sucess: true })
          })
        })
      })

    e.preventDefault()
  }

  render() {
    if(this.state.sucess) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <HeaderInterno />
        <div className="container" style={{ paddingTop: '120px' }}>
          <h1>Novo anúncio</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="foto">Foto</label>
              <input type="file" className="form-control" id="foto" placeholder='Foto' ref={(ref) => this.foto = ref } />
            </div>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" className="form-control" id="nome" placeholder='Nome' ref={(ref) => this.nome = ref } />
            </div>
            <div className="form-group">
              <label htmlFor="categorias">Categorias</label>
              <select className="form-control" id="categorias" placeholder='Categorias' ref={(ref) => this.categoria = ref }>
                {
                  this.props.categorias.map( cat => <option key={cat.url} value={cat.url}>{cat.categoria}</option>)
                }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Descrição</label>
              <input type="text" className="form-control" id="descricao" placeholder='Descrição' ref={(ref) => this.descricao = ref } />
            </div>
            <div className="form-group">
              <label htmlFor="preco">Preço</label>
              <input type="text" className="form-control" id="preco" placeholder='Preço' ref={(ref) => this.preco = ref } />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input type="text" className="form-control" id="telefone" placeholder='Telefone' ref={(ref) => this.telefone = ref } />
            </div>
            <div className="form-group">
              <label htmlFor="vendedor">Vendedor</label>
              <input type="text" className="form-control" id="vendedor" placeholder='Vendedor' ref={(ref) => this.vendedor = ref } />
            </div>
            <button className="btn btn-primary" type="submit">Salvar anúncio</button>
          </form>
        </div>
      </div>
    )
  }
}
export default NovoAnuncio