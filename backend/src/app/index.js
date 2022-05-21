import express, { urlencoded, json } from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import routes from '../routes';

const app = express();
app.set('case sensitive routing', false);
app.set('strict routing', false);
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(compression());
app.use(cors());
app.use(routes);
export default app;
