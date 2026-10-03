import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/anilearn';

export async function connectDB(): Promise<boolean> {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log(`🍃 Connected to Local MongoDB at ${MONGODB_URI}`);
    return true;
  } catch (err: any) {
    console.warn(`⚠️ Local MongoDB connection warning: ${err.message}. Running in memory fallback if required.`);
    return false;
  }
}
