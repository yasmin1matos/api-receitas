import { Receitas } from './../entities/Receitas';
import { AppDataSource } from './../data-source';

export const receitasRepository = AppDataSource.getRepository(Receitas)