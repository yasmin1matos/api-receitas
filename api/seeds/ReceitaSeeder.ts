import { receitasRepository } from './../repositories/receitasRepository';
import { DataSource } from "typeorm"
import{ Seeder, SeederFactoryManager} from "typeorm-extension"
import { Receitas } from '../entities/Receitas';

export class ReceitaSeeder implements Seeder{
    async run(dataSource:DataSource, factoryManager:SeederFactoryManager): Promise<void>{
        const receitasRepository= dataSource.getRepository(Receitas)

        const receitasData={
            name:'Strogonoff'
            
        }

        const receitasData1={
            name:'Bolo de cenoura c/ chocolate'
        }

        const receitasData2={
            name:'Bife Acebolado'
        }

        const receitasData3={
            name:'Macarrão'
        }

        const receitasData4={
            name:'Sorvete de Oreo'
        }

        
        const newReceitas= receitasRepository.create(receitasData)
        await receitasRepository.save(newReceitas)

        const newReceitas1= receitasRepository.create(receitasData1)
        await receitasRepository.save(newReceitas1)

        const newReceitas2= receitasRepository.create(receitasData2)
        await receitasRepository.save(newReceitas2)

        const newReceitas3= receitasRepository.create(receitasData3)
        await receitasRepository.save(newReceitas3)

        const newReceitas4= receitasRepository.create(receitasData4)
        await receitasRepository.save(newReceitas4)
    }
}
