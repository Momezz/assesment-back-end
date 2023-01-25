import { Schema, model } from 'mongoose';

export interface FavoriteDocument extends Document{
  titleList: String;
  description: String;
  link: String;
  ceatedAT: Date;
  updateAT: Date;
}

const FavoriteSchema = new Schema({
  titleList: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },

  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, {
  timestamps: true,
  versionKey: false,
});

const Favorite = model<FavoriteDocument>('Favorite', FavoriteSchema);

export default Favorite;
