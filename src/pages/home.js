import FormHome from '../componentes/formHome'
import Header from '../componentes/header'
import { HistoriaComponente } from '../componentes/historiaHome';
import CardComponentHome from '../componentes/CardComponentHome';


export default  function Home(){
    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
    return (
        <>
        <div class = "max-h-screen overflow-clip">
         <Header/>
         <div class= "w-screen h-screen">
             <img class="object-cover h-screen w-screen" src='https://images.unsplash.com/photo-1515344905723-babc01aac23d?auto=format&fit=crop&q=80&w=2076&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <div class = "w-full h-full bg-black">
                
            </div>
         </div>
        </div>
            <HistoriaComponente/>
            <CardComponentHome/>
            <FormHome/>

            
    </>
    )
}