import mongoose, { Schema, Document } from 'mongoose';

export interface IKanaWord {
  word: string;
  furigana: string;
  romaji: string;
  english: string;
  kanji?: string;
  exampleSentence?: string;
  exampleEnglish?: string;
}

export interface IKana extends Document {
  char: string;
  romaji: string;
  example?: string;
  strokeCount?: number;
  script: 'Hiragana' | 'Katakana';
  category: 'basic' | 'dakuten' | 'yoon';
  meaning?: string;
  words?: IKanaWord[];
}

const KanaSchema = new Schema<IKana>(
  {
    char: { type: String, required: true, unique: true, index: true },
    romaji: { type: String, required: true, index: true },
    example: { type: String, default: '' },
    strokeCount: { type: Number, default: 1 },
    script: { type: String, enum: ['Hiragana', 'Katakana'], required: true, index: true },
    category: { type: String, enum: ['basic', 'dakuten', 'yoon'], default: 'basic', index: true },
    meaning: { type: String, default: '' },
    words: [
      {
        word: String,
        furigana: String,
        romaji: String,
        english: String,
        kanji: String,
        exampleSentence: String,
        exampleEnglish: String,
      },
    ],
  },
  { timestamps: true }
);

KanaSchema.set('toJSON', {
  transform: (_doc, ret: any) => {
    ret.id = ret._id.toString();
    delete ret.__v;
    return ret;
  },
});

export const Kana = mongoose.model<IKana>('Kana', KanaSchema);
