
import { CreateReceitasService } from '../services/CreateReceitasService' 
import {Request, Response} from 'express'


export class CreateReceitaController{
    async handle (request:Request, response:Response){
     const {name}= request.body;
     
     try{
       const service= new CreateReceitasService();
       const result= await service.execute({name});
       return response.status(201).json(result)
       
      }catch(error){
          console.log(error)
          return response.status(500).json({message:'Internal Server Error'})
      } 
    }
    
   
   
      

      

    }






