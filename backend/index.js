import express from 'express';
import cors from 'cors';
const app = express();
// const port = 3000;
import apiRoutes from './routes/index.js';

import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


// function extractPlaylistId(input) {
  
//   if (input.startsWith('http')) {
//     const parsedUrl = url.parse(input, true);

//     const listParam = parsedUrl.query.list;
//     if (listParam) {
//     //   console.log("from list param:", listParam);
//       return listParam;
//     }
//   }

 
// //   console.log("from input:", input);
//   return input;
// }

app.use('/api', apiRoutes);
app.get('/', (req, res) => {
  res.redirect('https://youtube-playlist-fetcher.vercel.app');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
