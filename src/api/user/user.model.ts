import { Schema, model } from 'mongoose';

export interface UserDocument extends Document {
  name: String;
  email: String;
  Password: String;
  ceatedAT: Date;
  updateAT: Date;
  favorites?: Array<Object>;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true,
  },

  favorites: [{
    type: Schema.Types.ObjectId,
    ref: 'Favorite',
  }]
}, {
  timestamps: true,
  versionKey: false,
});

const User = model<UserDocument>('User', UserSchema);

export default User;
