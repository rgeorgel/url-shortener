import mongoose, { Document, Schema } from 'mongoose';
import { ShortUrlInterface } from '@app/application/interfaces/shortUrl.interface';

export interface ShortUrlMongoose extends ShortUrlInterface, Document {}

const SubmissionSchema: Schema = new Schema(
  {
    shortUrlId: { type: String, unique: true },
    code: { type: String, unique: true },
    originalUrl: String,
    url: String,

    deletedAt: Date,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<ShortUrlMongoose>('ShortUrl', SubmissionSchema);
