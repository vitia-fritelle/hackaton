import { Router } from 'express';

import { getScore, postScore } from '../../controllers/scoreControllers';

const router = Router();

router.get('/', getScore);
router.post('/', postScore);

export default router;
