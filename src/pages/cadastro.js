import Header from '../componentes/headerLogin'
import { Link } from 'react-router-dom';


export default function Cadastro() {
    return (
      <>
      <div class='max-h-screen overflow-y-clip bg-gray-100'>
        <Header/>
        <div class=" flex justify-center items-center h-screen  ">
        
        <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 mb-20 ">
          <h1 class="text-2xl font-semibold mb-4">Cadastre-se </h1>
          <form action="#" method="POST" >
           
            <div class="mb-4">
              <label for="username" class="block text-gray-600">Email</label>
              <input type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500" autocomplete="off"/>
            </div>
            
            <div class="mb-4">
              <label for="password" class="block text-gray-600">Senha</label>
              <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500" autocomplete="off"/>
            </div>

            <div class="mb-4">
              <label for="password" class="block text-gray-600">Confirmar Senha</label>
              <input type="password" id="confirm" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500" autocomplete="off"/>
            </div>
            
            <div class="mb-4 flex items-center">
              <input type="checkbox" id="remember" name="remember" class="text-gray-500"/>
              <label for="remember" class="text-gray-600 ml-2">Lembrar-me</label>
            </div>
            
            <button type="submit" class="bg-gray-800 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
          </form>
          
          <div class="mt-6 text-gray-700 text-center">
            <Link to="../login" class="hover:underline">Já possuo conta</Link>
          </div>
        </div>
        <div class="w-1/2 h-full hidden lg:block">
          <img src="https://paraibacriativa.com.br/wp-content/uploads/2015/09/pioneiros-da-borborema-1.jpg" alt="Placeholder Image" class="object-cover w-full h-full"/>
        </div>
        </div>
        </div>
      </>
    )
  }
  