import { Routes,Route, } from 'react-router-dom';
import Home from './pages/home'
import ComercioPag from './pages/comercio';
import NoticiasRecentes from './pages/noticiasRecentes.js';
import Industria from './pages/industria';
import EducacaoPag from './pages/educacao';
import TurismoPag from "./pages/turismo"
// eslint-disable-next-line no-unused-vars

function App() {
  localStorage.setItem("nome", true)
  return (
    <div>
      <Routes>
          <Route exact path="/"  element = {<Home/>}/>
          <Route exact path="/comercio"  element = {<ComercioPag/>}/>
          <Route exact path="/noticias"  element = {<NoticiasRecentes/>}/>
          <Route exact path="/industria"  element = {<Industria/>}/>
          <Route exact path="/educacao"  element = {<EducacaoPag/>}/>
          <Route exact path="/turismo"  element = {<TurismoPag/>}/>

      </Routes>

    </div>
  );
}

export default App;
