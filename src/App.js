import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg'

import Footer from './Footer'
import Home from './Home'
import NovoAnuncio from './NovoAnuncio'
import base from './base'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact component={Home} />
          <Route path='/novo-anuncio' exact component={NovoAnuncio} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App