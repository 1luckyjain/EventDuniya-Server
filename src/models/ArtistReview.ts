import { Schema, model, Document } from 'mongoose';

interface IArtistReview extends Document {
  userId : string;
  artistId: string;
  reviewDescription: string;
  rating: number;  
}

const ArtistReviewSchema = new Schema<IArtistReview>({
  artistId: { type: String, required: true },
  userId: { type: String, required: true },
  reviewDescription: { type: String, required: true },
  rating: { type: Number, required: true, } 
}, { timestamps: true });

export default model<IArtistReview>('ArtistReview', ArtistReviewSchema);
