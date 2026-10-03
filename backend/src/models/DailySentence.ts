import mongoose, { Schema, Document } from 'mongoose';

export interface IDailySentenceOption {
  text: string;
  romaji: string;
  meaning?: string;
}

export interface IDailySentence extends Document {
  questionId: string;
  day: number;
  questionNumber: number;
  sentenceWithBlank: string;
  sentenceRomajiWithBlank: string;
  fullSentence: string;
  furigana?: string;
  romaji?: string;
  english: string;
  targetWord: string;
  targetWordRomaji: string;
  options: string[];
  optionsWithRomaji: IDailySentenceOption[];
  correctIndex: number;
  explanation: string;
  category: string;
}

const DailySentenceSchema = new Schema<IDailySentence>(
  {
    questionId: { type: String, required: true, unique: true, index: true },
    day: { type: Number, required: true, index: true },
    questionNumber: { type: Number, required: true },
    sentenceWithBlank: { type: String, required: true },
    sentenceRomajiWithBlank: { type: String, default: '' },
    fullSentence: { type: String, required: true },
    furigana: { type: String, default: '' },
    romaji: { type: String, default: '' },
    english: { type: String, required: true },
    targetWord: { type: String, required: true },
    targetWordRomaji: { type: String, default: '' },
    options: { type: [String], required: true },
    optionsWithRomaji: [
      {
        text: String,
        romaji: String,
        meaning: String,
      },
    ],
    correctIndex: { type: Number, required: true },
    explanation: { type: String, default: '' },
    category: { type: String, default: 'vocabulary' },
  },
  { timestamps: true }
);

DailySentenceSchema.set('toJSON', {
  transform: (_doc, ret: any) => {
    ret.id = ret.questionId || ret._id.toString();
    delete ret.__v;
    return ret;
  },
});

export const DailySentence = mongoose.model<IDailySentence>('DailySentence', DailySentenceSchema);
