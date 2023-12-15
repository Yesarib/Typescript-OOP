import express, {NextFunction, Request, Response} from "express"
import createHttpError, { isHttpError } from 'http-errors';
import customerRoutes from './routes/customer'
import productRoutes from './routes/product'
import orderRoutes from './routes/order'

const app = express();
app.use(express.json());


// End Points
app.use("/api/customer",customerRoutes);
app.use("/api/product",productRoutes);
app.use("/api/order",orderRoutes);


app.use((req,res,next) => {
    next(createHttpError(404,'Endpoint not found'))
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res:Response, next:NextFunction) => {
    console.log(error);
    let errorMessage: string = "An unknown error occurred";
    let statusCode:number = 500;
    if(isHttpError(error)) {
        statusCode = error.status
        errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage });    
})

const Port = 5000;
app.listen(Port, () => {
    console.log(`Server on ${Port}`);
    
})