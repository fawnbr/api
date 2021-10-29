import { Router } from 'express';

import homeController from '../controllers/HomeController';
import studentController from '../controllers/StudentController';

const router = new Router();

router.get('/', homeController.index);
router.get('/students', studentController.index);

export default router;
