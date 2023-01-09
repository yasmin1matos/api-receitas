
import { UpdateReceitasController } from './controllers/UpdateReceitasController';
import { DeleteReceitaController } from './controllers/DeleteReceitaController';
import {Router,Request, Response} from 'express'
import { CreateReceitaController } from './controllers/CreateReceitaController';
import { ListarReceitasController } from './controllers/ListarReceitasController';




const router= Router();

router.get('/teste',(request:Request, response:Response) =>{
    return response.json({mensagem:'bem vindo '})
})

router.post('/receitas', new CreateReceitaController().handle )
router.get('/receitas', new ListarReceitasController().handle)
router.put('/receitas/:id', new UpdateReceitasController().handle)
router.delete('/receitas/:id',new DeleteReceitaController().handle)





export{router}
