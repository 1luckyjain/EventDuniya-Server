import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectToDatabase from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/auth/auth.route.js';
import eventRoutes from './routes/event/event.route.js';
import userRoutes from './routes/user/user.route.js';
import artistRoutes from './routes/artist/artist.route.js';
import eventRegistratoinRoute from './routes/event/eventregistration/eventregistration.route.js';
import artistReviews from './routes/artist/review/review.js';
import fileUpload from './routes/fileupload/fileuplad.js';
import contact from './routes/artist/contact/contact.js';
import savedArtist from './routes/user/favartist/favartist.js';
import cookieParser from 'cookie-parser';
const app = express();
app.use(cookieParser(process.env.SECRET_COOKIE));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToDatabase();
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/user', userRoutes);
app.use('/api/artist', artistRoutes);
app.use('/api/bookticket', eventRegistratoinRoute);
app.use('/api/review', artistReviews);
app.use('/api/image', fileUpload);
app.use('/api/contact', contact);
app.use('/api/savedartist', savedArtist);
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
