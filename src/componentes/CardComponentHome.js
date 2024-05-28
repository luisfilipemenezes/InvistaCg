export default function CardComponentHome (){
    return (
        <div>
            <div class="min-h-screen bg-black flex justify-center items-center py-12">
            <div class="container mx-auto p-12 bg-gray-100 rounded-xl">
                <h1 class="text-4xl uppercase font-bold from-current mb-8">Setores para Investir</h1>
                <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4  space-y-4 sm:space-y-0 ">
                <div class="bg-white    " >
                    <div>
                    <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 arredondado-lg">
                        <div>
                        <img class="w-full " src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div class="px-4 py-2">
                            <h1 class="text-xl font-gray-700 font-bold">Comércio</h1>
                            <div class="flex space-x-2 mt-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <h3 class="text-lg text-gray-600 font-semibold mb-2">Campina Grande</h3>
                            </div>
                            <p class="text-sm h-24 tracking-normal">
                                Campina Grande é um centro comercial da Paraíba com lojas, shoppings e mercados. Eventos como o Maior São João do Mundo impulsionam a economia local.
                            </p>
                            <button class="mt-12 w-full text-center hover:bg-yellow-500 py-2 rounded-lg text-white bg-black">Leia Mais!</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="bg-white">
                    <div>
                    <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                        <div>
                        <img class="w-full" src="https://rest.unifacisa.edu.br/wp-content/uploads/2021/11/help_06.jpg" />
                        <div class="px-4 py-2">
                            <h1 class="text-xl font-gray-700 font-bold">Saúde</h1>
                            <div class="flex space-x-2 mt-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <h3 class="text-lg text-gray-600 font-semibold mb-2">Campina Grande</h3>
                            </div>
                            <p class="text-sm h-24 tracking-normal">
                            A cidade possui hospitais de referência como o Hospital de Trauma, Hospital Universitário e  Hospital de Ensino e Laboratórios de Pesquisa (HELP). Destaca-se também pelos programas de saúde pública e privada.
                            </p>
                            <button class="mt-12 w-full hover:bg-yellow-500 text-center text-white bg-black py-2 rounded-lg">Leia Mais!</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="bg-white">
                    <div>
                    <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                        <div>
                        <img class="w-full" src="https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div class="px-4 py-2">
                            <h1 class="text-xl font-gray-700 font-bold">Indústria</h1>
                            <div class="flex space-x-2 mt-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <h3 class="text-lg text-gray-600 font-semibold mb-2">Campina Grande</h3>
                            </div>
                            <p class="text-sm h-24 tracking-normal">
                                A indústria de Campina Grande é diversificada, abrangendo tecnologia, têxtil e alimentos. A UFCG e UNIFACISA contribuem para a inovação e formação de mão-de-obra qualificada.

                            </p>
                            <button class="mt-12 w-full text-center hover:bg-yellow-500 text-white bg-black py-2 rounded-lg">Leia Mais!</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}