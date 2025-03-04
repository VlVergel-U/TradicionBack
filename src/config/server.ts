import express, { Request, Response, NextFunction } from 'express'
import router from '../routes/index.routes'
import db from './db'
import colors from 'colors'
import defineAssociations from '../associations/defineAssociations'
import config from './config'
import cors from 'cors'
import ValidateRoutes from '../middelwares/index.middelware'
import createAdmin from '../libs/createAdmin.lib'

export default class Server {

    private server: express.Application;
    private dbConnected: boolean = false;

    constructor() {
        this.server = express();
    }

    private async connectionDatabase() {
        try {
            await db.authenticate();
            await db.query('SET FOREIGN_KEY_CHECKS = 0');
            defineAssociations();
            await db.sync({ force: false }).then(() => {
                console.log(colors.cyan.bold('Tables and database were created'));
            });
            await createAdmin();
            await db.query('SET FOREIGN_KEY_CHECKS = 1');
            console.log(colors.green.bold('Connected to the database'));
            this.dbConnected = true;
        } catch (error) {
            console.log(colors.red.bold('Error connecting to database ' + error));
            this.dbConnected = false;
        }
    }

    //middleware for routes when database is not available
    private handlerRoutes(req: Request, res: Response, next: NextFunction) {
        if (!this.dbConnected) {
            return res.status(500).json({ message: 'Server error, please try again later' });
        }
        next();
    }

    private middleware() {
        this.server.use(
            cors()
        );
        this.server.use(express.json());
        this.server.use(express.urlencoded({extended:true}))
        this.server.use(ValidateRoutes)
        this.server.use(this.handlerRoutes.bind(this));
    }

    private routes() {
        this.server.use(router);
    }


    async run() {
        const port = config.port;
        await this.connectionDatabase();
        this.middleware();
        this.routes();
        this.server.listen(port, () => {
            console.log(colors.magenta.bold(`Started at the port ${port}`));
        });
    }
}
