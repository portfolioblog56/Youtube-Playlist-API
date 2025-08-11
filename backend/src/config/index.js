import dotenv from 'dotenv';
dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    youtubeApiUrl: process.env.YOUTUBE_API_URL,
};

export default config;
