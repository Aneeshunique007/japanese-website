import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar: string;
  targetLevel: string;
  title: string;
  xp: number;
  streak: number;
  completedLessons: string[];
  studyTimeMinutes: number;
  goalsInMonth: number;
  lastActiveDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    },
    targetLevel: {
      type: String,
      enum: ['N5', 'N4', 'N3', 'N2', 'N1'],
      default: 'N5',
    },
    title: {
      type: String,
      default: 'JLPT N5 Starter',
    },
    xp: {
      type: Number,
      default: 0,
    },
    streak: {
      type: Number,
      default: 1,
    },
    completedLessons: {
      type: [String],
      default: [],
    },
    studyTimeMinutes: {
      type: Number,
      default: 0,
    },
    goalsInMonth: {
      type: Number,
      default: 0,
    },
    lastActiveDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Transform returned object to strip password
UserSchema.set('toJSON', {
  transform: (_doc, ret: any) => {
    ret.id = ret._id ? ret._id.toString() : '';
    delete ret.password;
    delete ret.__v;
    return ret;
  },
});

export const User = mongoose.model<IUser>('User', UserSchema);
