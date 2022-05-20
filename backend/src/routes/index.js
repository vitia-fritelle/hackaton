import { Router } from 'express';
import questionRoutes from './questionRoutes';
import scoreRoutes from './scoreRoutes';

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
];

routes.forEach(({ path, route }) => router.use(path, route));

export default router;
