import express from 'express';
import { fethcherController } from '../../controller/fetcherController.js';
const router = express.Router();
router.use('/youtube-playlist', fethcherController);


export default router;