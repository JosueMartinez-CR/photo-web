
//Create the app with the 'express' framework to avoid creating it from scratch. Express gives us everything
import express from 'express';

 //Morgan helps us by displaying the requests in the console
import morgan from 'morgan';

//Will allow us to get files on the frontend from the backend
import cors from 'cors';

//Will allow us work wiht differents routes
import  path  from 'path';

//importamos el modulo de las rutas
import routes from './routes/photo-routes';


const app = express();

//middlewares,
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); // We are going to interact via .json with the API.

//settings
app.set('port',process.env.port || 4000);

//routes
app.use ('/api',routes);

// We will use photo-uploas to store photos
app.use('/photos-uploads', express.static(path.resolve('photos-uploads')));


export default app;