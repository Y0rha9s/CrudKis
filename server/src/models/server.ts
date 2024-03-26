import express from 'express';
import routesPersonas from '../routes/persona.routes'
import connection from '../db/connection';
import cors from 'cors';

class Server {
    private app: express.Application;
    private port: string;

    
    constructor(){
        this.app = express();
        this.port = process.env.PORT  || '3000'
        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('aplicacion corriendo por el puerto', this.port)
        })
    }

    middlewares(){
        //parseo dl body
        this.app.use(express.json());

        //cors
        this.app.use(cors());
    }

    routes(){
        this.app.use('/api/personas', routesPersonas)
    }

    conectarDB(){
        connection.connect((err)=>{
            if(err) throw err;
            console.log('conectado a la base de datos');
        })
    }

    
}

export default Server;