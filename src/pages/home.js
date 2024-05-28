import FormHome from '../componentes/formHome'
import Header from '../componentes/header'
import { HistoriaComponente } from '../componentes/historiaHome';
import CardComponentHome from '../componentes/CardComponentHome';
import MyComponent from '../componentes/Map';
import React from 'react';
import TermosDeUso from '../componentes/PopUp/aceitarTemos';
import { useState } from 'react';




export default  function Home(){
    
    

    const [showTerms, setShowTerms] = useState(localStorage.getItem("nome"));

    function  handleCloseTerms() {
       
        setShowTerms(localStorage.getItem("nome"))
        
    };

    
    return (
        <>
        <TermosDeUso/>
        <div class = "max-h-screen  ">
            <div className='h-screen '>
                <Header numero = {10}  />
                <div className='Altura md:px-12 px-0 '>
                    <div className=' h-full w-full TropeirosBackGorund '>
                        <div className='h-full w-full   '>
                            <div className='pt-10 md:w-2/5 px-4  w-full'>
                                <p className='text-6xl  font-abc'>Bem Vindo! </p>
                                <p className='text-xl mt-4 md:ml-0 m-2'>A Invista CG elabora planos de investimento público, planeja e gere estratégias de desenvolvimento económico, social e ambiental da cidade de Campina Grande.</p>
                            </div>
                
                        </div>

                    </div>
                </div>
         
         </div>
         
        </div>
        <HistoriaComponente/>
        <div className='AlturaMaps  w-full flex items-center justify-center'>
      <div className='h-full w-full  flex items-center justify-center'>
        <MyComponent />
      </div>
    </div>
        <CardComponentHome/>

        <FormHome/>
        


            
    </>
    )
}