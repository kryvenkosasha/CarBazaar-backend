import { Router } from 'express';
import {
  getCarsController,
  getCarByIdController,
} from '../controllers/cars.js';

const router = Router();

router.get('/cars', getCarsController);

router.get('/cars/:carId', getCarByIdController);

export default router;
