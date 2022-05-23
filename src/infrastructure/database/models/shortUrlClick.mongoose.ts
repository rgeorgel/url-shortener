import mongoose, { Document, Schema } from 'mongoose';
import { ShortUrlClickInterface } from '@app/application/interfaces';

export interface ShortUrlClickMongoose extends ShortUrlClickInterface, Document {}

const mongooseSchema: Schema = new Schema(
  {
    shortUrlClickId: { type: String, unique: true },
    shortUrlId: String,
    code: String,
    originalUrl: String,
  },
  {
    timestamps: true,
  },
);

mongooseSchema.index({ code: 'text', shortUrlId: 'text' });

export default mongoose.model<ShortUrlClickMongoose>('ShortUrlClick', mongooseSchema);
