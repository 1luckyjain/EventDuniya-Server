import { Request, Response } from 'express';
import Rating from '../../models/Rating.js';

interface RequestWithArtistId extends Request {
    body: {
        artistId: string;
        rating: number;
    };
}

const updateRating = async (req: RequestWithArtistId, res: Response) : Promise<void> => {
    try {
        const { artistId, rating } = req.body;
        if (!artistId || rating === undefined) {
             res.status(400).json({ message: 'Artist ID and rating are required' });
             return ; 
        }

        let existingRating = await Rating.findOne({ artistId });

        if (!existingRating) {
            existingRating = new Rating({ artistId, ratingCount: 1, rating });
        } else {
            existingRating.rating = 
                (existingRating.rating * existingRating.ratingCount + rating) / 
                (existingRating.ratingCount + 1);
            
            existingRating.ratingCount += 1;
        }

        await existingRating.save();
        res.status(200).json({ message: 'Rating updated successfully', rating: existingRating });
        return ; 
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return ; 
    }
};

export default updateRating;
