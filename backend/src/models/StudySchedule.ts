import mongoose, { Schema, Document } from 'mongoose';

export interface IStudySchedule extends Document {
  userId: string;
  targetDays: number | string; // 60, 90, 120, 'ALL'
  currentDay: number;
  startDate: string; // YYYY-MM-DD
  lastActiveDate: string; // YYYY-MM-DD
  autoAdvance: boolean;
  customPace: {
    enabled: boolean;
    hiraganaPerDay?: number;
    katakanaPerDay?: number;
    kanaPerDay?: number;
    kanjiPerDay?: number;
    wordsPerDay?: number;
    lessonIntervalDays?: number;
    sentencesPerDay?: number;
    quizzesPerDay?: number;
    skipKana?: boolean;
    [key: string]: any;
  };
  learnedKana: string[];
  learnedKanji: string[];
  learnedWords: string[];
  createdAt: Date;
  updatedAt: Date;
}

const StudyScheduleSchema = new Schema<IStudySchedule>(
  {
    userId: { type: String, required: true, unique: true, index: true, default: 'default_user' },
    targetDays: { type: Schema.Types.Mixed, default: 60 },
    currentDay: { type: Number, default: 1 },
    startDate: { type: String, default: () => new Date().toISOString().slice(0, 10) },
    lastActiveDate: { type: String, default: () => new Date().toISOString().slice(0, 10) },
    autoAdvance: { type: Boolean, default: true },
    customPace: {
      type: Schema.Types.Mixed,
      default: () => ({
        enabled: false,
        hiraganaPerDay: 10,
        katakanaPerDay: 10,
        kanaPerDay: 10,
        kanjiPerDay: 2,
        wordsPerDay: 14,
        lessonIntervalDays: 3,
        sentencesPerDay: 50,
        quizzesPerDay: 2,
        skipKana: false,
      }),
    },
    learnedKana: { type: [String], default: [] },
    learnedKanji: { type: [String], default: [] },
    learnedWords: { type: [String], default: [] },
  },
  { timestamps: true }
);

StudyScheduleSchema.set('toJSON', {
  transform: (_doc, ret: any) => {
    ret.id = ret._id ? ret._id.toString() : '';
    delete ret.__v;
    return ret;
  }
});

export const StudySchedule = mongoose.model<IStudySchedule>('StudySchedule', StudyScheduleSchema);
