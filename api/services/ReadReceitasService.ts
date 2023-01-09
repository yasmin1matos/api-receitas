import { AppDataSource } from "../data-source";
import { Receitas } from "../entities/Receitas";


export class ReadReceitasService{
    async execute(){
        const repo= AppDataSource.getRepository(Receitas)
        const listaReceitas= await repo.find()
        return listaReceitas;
    }
}  