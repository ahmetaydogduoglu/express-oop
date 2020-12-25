import express, { Router } from 'express';
import { AuthController } from './src/controller';
const port: number = 8080;
const app = express();

const authController = new AuthController();
app.use(authController.path, authController.setRoutes());

app.listen(port, () => {
    console.log(`listening ${port}`)
})