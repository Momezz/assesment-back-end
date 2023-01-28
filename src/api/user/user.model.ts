import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface UserDocument extends Document {
  _id: String;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },

    favorite: [{
      type: Schema.Types.ObjectId,
      ref: 'Favorite',
    }]
  },

  {
    timestamps: true,
  }
);

//Middlewares
UserSchema.pre('save', async function save(next: Function) {
  const user = this;

  try {
    if (!user.isModified("password")) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  } catch (error) {
    next(error);
  }
});

//Methods
async function comparePassword(this: UserDocument, candidatePassword: string, next: Function): Promise<boolean> {
  const user = this;
  try {
    const match = await bcrypt.compare(candidatePassword, user.password);
    return match;
  } catch (error: any) {
    next(error);
    return false
  }
}
UserSchema.methods.comparePassword = comparePassword

const User = model<UserDocument>("User", UserSchema);

export default User;
