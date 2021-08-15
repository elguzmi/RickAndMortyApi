/* const fecthData = require('fetchData'); */
/* import { data } from "./fetchData"; */
const API = 'https://rickandmortyapi.com/api/character';

window.addEventListener('load',()=>{
    
    const anotherfunction = async(url)=>{
        try{

            let datos = await data(url);
            console.log(datos.results.length);
            
            for(let i= 0; i<=datos.results.length;i++){
                let character = await data(`${url}/${datos.results[i].id}`);
                card(character.name,character.image,character.location.name);
            }
            
            

            
        }catch(error){
            console.error(error);
        }
    }

    anotherfunction(API);


    const card = (name,img,dimension)=>{
        let container = document.querySelector('.cards__container');
        let platilla = `
        <div class="cards__card">
                <div class="cards__card-title">
                    <h4>${name}</h4>
                </div>
                <div class="cards__card-body">
                    <img src =${img} alt='foto'>
                    <p>
                        dimesion: ${dimension}
                    </p>
                </div>
                <div class="cards__card-footer">
                    <h4>Rick y morty</h4>
                </div>
            </div>`;
        container.innerHTML+=platilla;
    }
});