import { filterFilms } from './src/utils'
import './style.css'

let fullExchangesList = []

    // <<<<Tu código aquí>>>>
    const form = document.querySelector('form');
    const tituloInput = document.querySelector('#titulo');
    const anhoInput = document.querySelector('#anho');
    const palabrasProhibidasInput = document.querySelector('#palabras_prohibidas');
    const list = document.querySelector('#list');
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const titulo = tituloInput.value;
      const anho = anhoInput.value;
      const palabrasProhibidas = palabrasProhibidasInput.value.split(',');
      
      const filteredData = filterFilms.filter((exchange) => {
        if (titulo && !exchange.title.includes(titulo)) {
          return false;
        }
        if (anho && exchange.year !== anho) {
          return false;
        }
        for (const palabraProhibida of palabrasProhibidas) {
          if (exchange.title.includes(palabraProhibida.trim())) {
            return false;
          }
        }
        return true;
      });
      
      list.innerHTML = '';
      for (const exchange of filterFilms) {
        document.querySelector('#list').innerHTML=msg
        item.textContent = exchange.title;
        list.appendChild(item);
      }
    });
    




async function readDataFromApi(){
    // <<<<Tu código aquí>>>> 
    const response = await fetch(' http://www.omdbapi.com/?i=tt3896198&apikey=cfeb3801')
    return await response.json()
   
}
(async function onLoadPage(){
    // Te recomiendo que no modifiques esta función
    fullExchangesList = await readDataFromApi()
    console.log(fullExchangesList)
})()

