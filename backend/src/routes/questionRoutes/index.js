import { Router } from 'express';
import { getQuestions } from '../../controllers';

const router = Router();

router.get('/', getQuestions);

export default router;
