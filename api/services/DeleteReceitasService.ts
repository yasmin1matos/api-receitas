import { AppDataSource } from "../data-source";
import { Receitas } from "../entities/Receitas";

export class DeleteReceitasService{
    async execute(id:string){

        const repo= AppDataSource.getRepository(Receitas)

        await repo.delete(id);

    }
}