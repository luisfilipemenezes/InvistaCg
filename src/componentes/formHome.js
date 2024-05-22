<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>

export default function FormHome(){
    return (      
        <div class="h-screen   flex">
                <div class="hidden lg:flex w-full lg:w-1/2  login_img_section
                justify-around items-center">
                   
                    <div class="w-full mx-auto px-12  flex-col items-center space-y-6">
                    <div class="flex  justify-center lg:justify-start mt-6">
                        <a href="#" class=" hover:text-gray-900 hover:-translate-y-1 transition-all duration-500 bg-white text-black mt-4 px-4 py-2 rounded-2xl font-bold mb-2 text-6xl">Entre em contato conosco</a>
                    </div>
                    </div>
                </div>
                <div class="flex w-full lg:w-1/2 justify-center  items-center  space-y-8">
                    <div class="w-full justify-end flex md:mx-12 mx-6">
                    <form class="bg-white rounded-md shadow-2xl md:p-20 p-8">
                    <h1 class="text-gray-800 font-bold md:text-4xl text-3xl mb-1">CADASTRE-SE AGORA</h1>
                    <p class="text-sm font-normal text-gray-600 mb-8">Sua sugestão é muito importante!</p>
                    <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input id="email" class=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email" />
                    </div>
                    <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <input class="pl-2 w-full outline-none border-none" type="text" name="password" id="password" placeholder="Sugestão" />
                        
                    </div>
                    <button type="submit" class="block w-full bg-black mt-5 py-2 rounded-2xl hover:bg-yellow-500 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Enviar</button>
                   
                    
                    </form>
                    </div>
                    
                </div> 

            </div>
    )
}