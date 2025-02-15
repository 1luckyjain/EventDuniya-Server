import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import connectToDatabase from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/auth/auth.route.js';
import eventRoutes from './routes/event/event.route.js';
import userRoutes from './routes/user/user.route.js';
import artistRoutes from './routes/artist/artist.route.js';
import eventRegistratoinRoute from './routes/eventregistration/eventregistration.route.js'
import artistReviews from './routes/review/review.js'
import artistRating from './routes/rating/rating.js'
import cookieParser from 'cookie-parser';


const app: Express = express();

app.use(cookieParser(process.env.SECRET_COOKIE));

// Set up CORS to allow requests from your React Vite dev server (default port 5173)
app.use(
  cors({
    origin: 'http://localhost:5173', // Adjust if your frontend is hosted elsewhere
    credentials: true, // Allow cookies to be sent
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectToDatabase();


app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/user', userRoutes);
app.use('/api/artist', artistRoutes);
app.use('/api/bookticket', eventRegistratoinRoute);
app.use('/api/review', artistReviews);
app.use('/api/rating', artistRating);

const PORT: number | string = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
