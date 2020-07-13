
import React, { Component } from 'react'
import Buscador from './componentes/Buscador'
import Resultado from './componentes/Resultado'
import Background from './img/background.jpg'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       termino : "",
       imagenes : [],
       pagina : ""
    }
  }
  
  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }
  paginaAnterior = () =>{
    let pagina = this.state.pagina;
    if(pagina === 1) return null;
    pagina -= 1;
    this.setState({
      pagina : pagina
    },()=>{
      this.consultarApi();
      this.scroll();
    });
  }
  paginaSiguiente = () =>{
    let pagina = this.state.pagina;
    pagina += 1;
    this.setState({
      pagina : pagina
    },()=>{
      this.consultarApi();
      this.scroll();
    });
  }
  consultarApi = () =>{
    const termino = this.state.termino.replace(" ","&");
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=17214196-b709fffc021d36f1b321eb308&q=${termino}&per_page=30&page=${pagina}`;
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes : resultado.hits}))
  }

  datosBusqueda = (termino) =>{
    this.setState({
      termino : termino,
      pagina : 1
    },() =>{
      this.consultarApi()
    })
  }

  render() {
    var background = Background;
    document.body.style.backgroundImage= `url(${background})`;
    return (
      <div className="app container">
        <div className="jumbotron">
          <h1 className="lead text-center">Image finder</h1>
          <Buscador datosBusqueda={this.datosBusqueda}/>
        </div>
        <div className="row justify-content-center">
          <Resultado 
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
      
    )
  }
}


export default App;
