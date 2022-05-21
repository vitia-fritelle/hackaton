import { Router } from 'express';
import { getMovies } from '../../controllers/movieControllers';

const router = Router();

router.get('/', getMovies);

export default router;
