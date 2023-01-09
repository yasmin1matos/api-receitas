import {Request, Response} from 'express'
import { ReadReceitasService } from '../services/ReadReceitasService';


export class ListarReceitasController{
  async handle (request:Request, response:Response){

    try{
      const listarReceitasService = new ReadReceitasService();
       const receitas = await listarReceitasService.execute()
       return response.status(200).json(receitas)

    }catch(error){
      return response.status(500).json({message:'Internal Server Error'})
    }


  }
}