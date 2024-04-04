import Header from '../componentes/headerLogin'
import { Link } from 'react-router-dom';
import ImageUploader from '../componentes/imagemUpLoad'


export default function RedefinirSenha() {
    return (
      <>
      <div class='max-h-screen overflow-y-clip bg-gray-100'>
        <Header/>
        <div class=" flex justify-center items-center h-screen ">
        
        
        <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 mb-20">
          <h1 class="text-2xl font-semibold mb-4">Redefinar sua senha</h1>
          <form action="#" method="POST" >
           
            <div class="mb-4">
              <label for="username" class="block text-gray-600">Email</label>
              <div class="mt-14 mb-14 "  >
      <ImageUploader  />
      {/* Outros componentes ou conteúdo */}
    </div>
            </div>
            
            <button type="submit" class="bg-gray-800 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full">Redefinir senha</button>
          </form>
          
          <div class="mt-6 text-gray-700 text-center">
            <Link to="../login" class="hover:underline">Login</Link>
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
  