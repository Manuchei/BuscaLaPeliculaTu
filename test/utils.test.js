import { describe, expect, it } from 'vitest'
import { filterFilms } from '../src/utils'
import filmsMock from './filmsMock.json'

/*
Dado que los test tienen que ejecutarse muy rápido,
no podemos hacer peticiones a una API externa.
Para simular el comportamiento de la API, hemos creado un archivo
con un array de 10 objetos que simulan la lista de peliculas de la API.
El archivo se encuentra en la carpeta test y se llama filmsMock.json
Este objeto mockeado será el que usemos para hacer los test.
*/
const listFilmsMock = filmsMock

describe('empty spec', () => {
  
  /** 
   si filtramos las peliculas sin especificar ninguna palabra prohibida,
   la función filterFilms debe devolver todas las peliculas, un total de 10
  */
  it('test 1', () => {
    // <<<<Tu código aquí>>>> 
  })

  /** 
   si filtramos las peliculas especifiando como palabra prohibida ['Autopsy'],
   la función filterFilms debe devolver todas las peliculas menos 1, un total de 9
  */
  it('test 2', () => {
    // <<<<Tu código aquí>>>> 
  })


   /** 
    si filtramos las peliculas especifiando como palabra prohibida ['Autopsy','Stepmother'],
   la función filterFilms debe devolver todas las peliculas menos 2, un total de 8
   
   Comprueba ademásque la primera pelicula devuelta el siguiente objeto:
   {
      "Title": "Alien",
      "Year": "1979",
      "imdbID": "tt0078748",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
    }

  */
   it('test 3', () => {
    // <<<<Tu código aquí>>>> 
  })

   

})
