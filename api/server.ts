
import express from 'express'
import { AppDataSource }  from './data-source'
import {router} from './routes'



AppDataSource.initialize().then(() =>{
    const server =express();

server.use (express.json())
server.use(router)
const port  = process.env.PORT || 3000;













server.listen(port, () =>{
    console.log('servidor na porta 3000')
})
    module.exports = server;
})





