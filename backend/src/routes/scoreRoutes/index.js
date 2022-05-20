import { Router } from 'express';

import { getScore, postScore } from '../../controllers/scoreControllers.js';

const router = Router();

router.get('/', getScore);
router.post('/', postScore);

export default router;
