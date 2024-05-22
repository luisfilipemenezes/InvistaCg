import FormHome from '../componentes/formHome'
import Header from '../componentes/header'
import { HistoriaComponente } from '../componentes/historiaHome';
import CardComponentHome from '../componentes/CardComponentHome';
import MyComponent from '../componentes/Map';


export default  function Home(){
    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
    return (
        <>
        <div class = "max-h-screen overflow-clip ">
             
         <div className='h-screen'>
            <Header/>
            <div className='h-full mx-12 '>
                <div className='pt-28 md:w-2/5  w-full'>
                    <p className='text-6xl font-abc'>Bem Vindo!</p>
                    <p className='text-xl mt-10 '>A Invista CG elabora planos de investimento público, planeja e gere estratégias de desenvolvimento económico, social e ambiental da cidade de Campina Grande.</p>
                </div>
            </div>
         </div>
         
        </div>
        <HistoriaComponente/>
        <div className=' flex justify-center m-10'>
                <MyComponent/>
        </div>
          
            <CardComponentHome/>
            <FormHome/>

            
    </>
    )
}