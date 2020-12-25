import express, { Router } from 'express';
import { AuthController } from './src/controller';
import bodyParser from 'body-parser';
const port: number = 8080;
const app = express();

//use body-parser
app.use(bodyParser.json());

//routers
const authController = new AuthController();
app.use(authController.path, authController.setRoutes());

app.listen(port, () => {
    console.log(`listening ${port}`);
})