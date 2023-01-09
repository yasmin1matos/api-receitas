
import{Request, Response} from 'express'
import { UpdateReceitasService } from '../services/UpdateReceitasService'


export class UpdateReceitasController{
    async handle(request: Request, response:Response){
        const {id} = request.params
        const{name}=request.body

        try{
            const service= new UpdateReceitasService();
            const result= await service.execute({id,name})
            return response.status(200).json(result)

        }catch(error){
            return response.status(400).json({message:'Internal Server Error'})
        }

       
    }
}