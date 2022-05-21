import { Router } from 'express';
import questionRoutes from './questionRoutes';
import scoreRoutes from './scoreRoutes';
import movieRoutes from './movieRoutes';

const router = Router();

const routes = [
    {
        path: '/question',
        route: questionRoutes,
    },
    {
        path: '/score',
        route: scoreRoutes,
    },
    {
        path: '/movie',
        route: movieRoutes,
    },
];

routes.forEach(({ path, route }) => router.use(path, route));

export default router;
