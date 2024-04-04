import { Routes,Route, } from 'react-router-dom';
import Login from './pages/login'
import Home from './pages/home'
import Cadastro from './pages/cadastro'
import RedefinirSenha from './pages/redefinirSenha';
import SidebarComponente from './pages/teste'
// eslint-disable-next-line no-unused-vars

function App() {
  return (
    <div>
      <Routes>
          <Route exact path="/"  element = {<Home/>}/>
          <Route exact path="/login"  element = {<Login/>}/>
          <Route exact path="/cadastro"  element = {<Cadastro/>}/>
          <Route exact path="/redefinirSenha"  element = {<RedefinirSenha/>}/>
          <Route exact path="/teste"  element = {<SidebarComponente/>}/>

      </Routes>

    </div>
  );
}

export default App;
