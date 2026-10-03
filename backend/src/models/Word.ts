import mongoose, { Schema, Document } from 'mongoose';

export interface IWordSentence {
  id?: string;
  sentence: string;
  furigana?: string;
  romaji?: string;
  english?: string;
  context?: string;
}

export interface IWord extends Document {
  wordId: string;
  word: string;
  reading: string;
  romaji: string;
  meaning: string;
  pos: string;
  posLabel: string;
  jlpt: string;
  kanjiBreakdown?: { char?: string; kanji?: string; meaning: string; onyomi?: string | string[]; kunyomi?: string | string[] }[];
  sentences: IWordSentence[];
}

const WordSchema = new Schema<IWord>(
  {
    wordId: { type: String, required: true, unique: true, index: true },
    word: { type: String, required: true, index: true },
    reading: { type: String, required: true, index: true },
    romaji: { type: String, required: true, index: true },
    meaning: { type: String, required: true },
    pos: { type: String, default: 'other' },
    posLabel: { type: String, default: '' },
    jlpt: { type: String, required: true, index: true },
    kanjiBreakdown: { type: Array, default: [] },
    sentences: [
      {
        id: String,
        sentence: String,
        furigana: String,
        romaji: String,
        english: String,
        context: String,
      },
    ],
  },
  { timestamps: true }
);

WordSchema.set('toJSON', {
  transform: (_doc, ret: any) => {
    ret.id = ret.wordId || ret._id.toString();
    delete ret.__v;
    return ret;
  },
});

export const Word = mongoose.model<IWord>('Word', WordSchema);
