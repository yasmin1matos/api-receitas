
import { AppDataSource } from "../data-source";
import { Receitas } from "../entities/Receitas";

type ReceitasRequest={
    name: string;
}

export class CreateReceitasService{
    async execute({name}:ReceitasRequest): Promise<Receitas>{
        const receitasRepository = AppDataSource.getRepository(Receitas)
        const receita= receitasRepository.create({name})
        await receitasRepository.save(receita)
        return receita;
    }
}

