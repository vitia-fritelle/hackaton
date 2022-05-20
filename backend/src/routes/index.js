import { Router } from 'express';
import questionRoutes from './questionRoutes';

const router = Router();

const routes = [
    {
        path: '/question',
        route: questionRoutes,
    },
];

routes.forEach(({ path, route }) => router.use(path, route));

export default router;
