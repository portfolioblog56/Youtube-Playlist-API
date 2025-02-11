import express from 'express';
import v1Router from './v1/index.js';

const router = express.Router();

router.use('/v1', v1Router);

router.get('/',(req,res)=>{
    res.json({message:'use EndPoint /v1/youtube-playlist then pass the playlistid as /youtube-playlist?playlistid="Your API ID or LINK" '})
})

export default router;
