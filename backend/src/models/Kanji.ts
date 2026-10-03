import mongoose, { Schema, Document } from 'mongoose';

export interface IKanjiSentence {
  id?: string;
  sentence: string;
  furigana: string;
  romaji: string;
  english: string;
  targetWord?: string;
  targetWordEnglish?: string;
}

export interface IKanji extends Document {
  kanjiId: string;
  char: string;
  meaning: string;
  onyomi: string[];
  kunyomi: string[];
  strokes: number;
  jlpt: string;
  radical: string;
  mnemonic: string;
  sentences: IKanjiSentence[];
}

const KanjiSchema = new Schema<IKanji>(
  {
    kanjiId: { type: String, required: true, unique: true, index: true },
    char: { type: String, required: true, unique: true, index: true },
    meaning: { type: String, required: true },
    onyomi: { type: [String], default: [] },
    kunyomi: { type: [String], default: [] },
    strokes: { type: Number, default: 1 },
    jlpt: { type: String, required: true, index: true },
    radical: { type: String, default: '' },
    mnemonic: { type: String, default: '' },
    sentences: [
      {
        id: String,
        sentence: String,
        furigana: String,
        romaji: String,
        english: String,
        targetWord: String,
        targetWordEnglish: String,
      },
    ],
  },
  { timestamps: true }
);

KanjiSchema.set('toJSON', {
  transform: (_doc, ret: any) => {
    ret.id = ret.kanjiId || ret._id.toString();
    delete ret.__v;
    return ret;
  },
});

export const Kanji = mongoose.model<IKanji>('Kanji', KanjiSchema);
