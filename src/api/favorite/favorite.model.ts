import { Schema, model } from 'mongoose';

export interface FavoriteDocument extends Document{
  name: String;
  favorite: Object;
  ceatedAT: Date;
  updateAT: Date;
}

const FavoriteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  favorite: {
    type: Object,
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
  }

}, {
  timestamps: true,
  versionKey: false,
});

const Favorite = model<FavoriteDocument>('Favorite', FavoriteSchema);

export default Favorite;
