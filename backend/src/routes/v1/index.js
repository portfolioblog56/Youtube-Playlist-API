import express from 'express';
import { fetcherController } from '../../controllers/fetcherController.js';

const router = express.Router();

router.use('/youtube-playlist', fetcherController);

export default router;