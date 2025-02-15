import { Schema, model, Document } from 'mongoose';

interface IRating extends Document {
  ratingCount: number;
  rating: number;
}

const RatingSchema = new Schema<IRating>({
  ratingCount: { type: Number, required: true, default: 0 },
  rating: { type: Number, required: true }
}, { timestamps: true });

export default model<IRating>('Rating', RatingSchema);
