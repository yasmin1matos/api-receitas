
import { AppDataSource } from "../data-source";
import { Receitas } from "../entities/Receitas";

type ReceitasUpdateRequest={
    id:string
    name:string
}

export class UpdateReceitasService{
    async execute ({id,name}: ReceitasUpdateRequest){
       
            const repo =AppDataSource.getRepository(Receitas)
            const receita = await repo.findOneBy({id:id});

            receita.name=name
            await repo.save(receita)
            return receita

        
    }
}