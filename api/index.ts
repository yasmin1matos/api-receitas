import fetch from 'node-fetch'
require ('dotenv').config()
import axios from 'axios'

 
export async function buscarDadosDaApiReceitasFetch(){
  const response = await fetch (
      'https://api.spoonacular.com/recipes/complexSearch',{
         method:'GET',
         headers:{
          'x-api-key': process.env.API_KEY,
          'Content-type':'application/json'
          
         }})    
}
buscarDadosDaApiReceitasFetch()

/*const api =axios.create({
  baseURL: 'https:api.spoonacular.com/recipes/complexSearch/'
})*/






//chave api
//c142deaaaefd4ccc8b3557ad5dfc7268