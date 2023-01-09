import { DeleteReceitasService } from './../services/DeleteReceitasService';
import {Request, Response} from 'express'

export class DeleteReceitaController{
    async handle(request:Request, response:Response){
        const {id}= request.params

       
        try{
            const service= new DeleteReceitasService();
            const result= await service.execute(id)
            return response.status(204).end()

        }catch(error){
            return response.status(401)
        }
    }
}