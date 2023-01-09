import 'dotenv/config'
import 'reflect-metadata'
import { DataSource, DataSourceOptions } from "typeorm"
import { SeederOptions } from 'typeorm-extension'
import { MainSeeder } from './seeds/MainSeeder'


const port= process.env.DB_PORT as undefined 

const options: DataSourceOptions & SeederOptions={
    type:'mysql',
    host: process.env.DB_HOST,
    port: port ,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    entities:[`${__dirname}/**/entities/*.{ts,js}`],
    migrations:[`${__dirname}/**/migration/*.{ts,js}`],
    seeds:[MainSeeder]
}

export const AppDataSource= new DataSource(options)
