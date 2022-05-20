import { Router } from 'express';
import { getQuestions } from '../../controllers';

const router = Router();

router.get('/:collection', getQuestions);

export default router;
