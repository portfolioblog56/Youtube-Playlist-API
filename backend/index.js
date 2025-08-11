import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import apiRoutes from './src/routes/index.js';
import config from './src/config/index.js';
import { errorHandler } from './src/middlewares/errorHandler.js';
import limiter from './src/middlewares/rateLimiter.js';

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(limiter);

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.redirect('https://youtube-playlist-fetcher.vercel.app');
});

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});

