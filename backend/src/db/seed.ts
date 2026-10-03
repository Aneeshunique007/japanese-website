import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './connection.js';

import { Word } from '../models/Word.js';
import { Kanji } from '../models/Kanji.js';
import { DailySentence } from '../models/DailySentence.js';
import { Kana } from '../models/Kana.js';

import { WORDS_N5_LIST } from '../data/wordsN5.js';
import { WORDS_N4_LIST } from '../data/wordsN4.js';
import { ALL_JLPT_KANJI_DATABASE } from '../data/kanjiDatabase.js';
import { HIRAGANA_DATA, KATAKANA_DATA } from '../data/kanaData.js';
import { KANA_WORDS_MAP } from '../data/kanaWords.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function seedDatabase() {
  console.log('🚀 Starting MongoDB Data Seeding...');
  const connected = await connectDB();
  if (!connected) {
    console.error('❌ Could not connect to MongoDB. Aborting seed.');
    process.exit(1);
  }

  try {
    // 1. Seed Vocabulary (Words)
    console.log('📦 Seeding Vocabulary (Words N5 & N4)...');
    const allWords = [...WORDS_N5_LIST, ...WORDS_N4_LIST];
    const wordOps = allWords.map((item) => ({
      updateOne: {
        filter: { wordId: item.id },
        update: {
          $set: {
            wordId: item.id,
            word: item.word,
            reading: item.reading,
            romaji: item.romaji,
            meaning: item.meaning,
            pos: item.pos,
            posLabel: item.posLabel,
            jlpt: item.jlpt,
            kanjiBreakdown: item.kanjiBreakdown || [],
            sentences: item.sentences || [],
          },
        },
        upsert: true,
      },
    }));

    if (wordOps.length > 0) {
      await Word.bulkWrite(wordOps);
      console.log(`✅ Seeded ${wordOps.length} Words into MongoDB.`);
    }

    // 2. Seed Kanji
    console.log('📦 Seeding Kanji (N5 & N4)...');
    const kanjiOps = ALL_JLPT_KANJI_DATABASE.map((item) => ({
      updateOne: {
        filter: { char: item.char },
        update: {
          $set: {
            kanjiId: item.id,
            char: item.char,
            meaning: item.meaning,
            onyomi: item.onyomi || [],
            kunyomi: item.kunyomi || [],
            strokes: item.strokes || 1,
            jlpt: item.jlpt,
            radical: item.radical || '',
            mnemonic: item.mnemonic || '',
            sentences: item.sentences || [],
          },
        },
        upsert: true,
      },
    }));

    if (kanjiOps.length > 0) {
      await Kanji.bulkWrite(kanjiOps);
      console.log(`✅ Seeded ${kanjiOps.length} Kanji into MongoDB.`);
    }

    // 3. Seed Daily Sentences from batch JSON files
    console.log('📦 Seeding Daily Sentences (Batches 1 - 15)...');
    const batchesDir = path.join(__dirname, '../data/dailySentenceBatches');
    let totalSentences = 0;

    if (fs.existsSync(batchesDir)) {
      const files = fs.readdirSync(batchesDir).filter((f) => f.endsWith('.json'));
      for (const file of files) {
        const filePath = path.join(batchesDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const questions = JSON.parse(content);

        const sentenceOps = questions.map((q: any) => ({
          updateOne: {
            filter: { questionId: q.id },
            update: {
              $set: {
                questionId: q.id,
                day: q.day,
                questionNumber: q.questionNumber,
                sentenceWithBlank: q.sentenceWithBlank,
                sentenceRomajiWithBlank: q.sentenceRomajiWithBlank || '',
                fullSentence: q.fullSentence,
                furigana: q.furigana || '',
                romaji: q.romaji || '',
                english: q.english,
                targetWord: q.targetWord,
                targetWordRomaji: q.targetWordRomaji || '',
                options: q.options || [],
                optionsWithRomaji: q.optionsWithRomaji || [],
                correctIndex: q.correctIndex,
                explanation: q.explanation || '',
                category: q.category || 'vocabulary',
              },
            },
            upsert: true,
          },
        }));

        if (sentenceOps.length > 0) {
          await DailySentence.bulkWrite(sentenceOps);
          totalSentences += sentenceOps.length;
        }
      }
      console.log(`✅ Seeded ${totalSentences} Daily Sentence Questions across ${files.length} batches.`);
    } else {
      console.warn(`⚠️ Daily sentence batches directory not found at ${batchesDir}`);
    }

    // 4. Seed Kana (Hiragana & Katakana)
    console.log('📦 Seeding Kana (Hiragana & Katakana)...');
    const kanaItems: any[] = [];

    const processKanaGroup = (group: any, script: 'Hiragana' | 'Katakana') => {
      ['basic', 'dakuten', 'yoon'].forEach((cat) => {
        if (Array.isArray(group[cat])) {
          group[cat].forEach((k: any) => {
            const detail = KANA_WORDS_MAP[k.char];
            kanaItems.push({
              char: k.char,
              romaji: k.romaji,
              example: k.example || '',
              strokeCount: k.strokeCount || detail?.strokeCount || 1,
              script,
              category: cat,
              meaning: detail?.mnemonic || '',
              words: detail?.words || [],
            });
          });
        }
      });
    };

    processKanaGroup(HIRAGANA_DATA, 'Hiragana');
    processKanaGroup(KATAKANA_DATA, 'Katakana');

    const kanaOps = kanaItems.map((item) => ({
      updateOne: {
        filter: { char: item.char },
        update: { $set: item },
        upsert: true,
      },
    }));

    if (kanaOps.length > 0) {
      await Kana.bulkWrite(kanaOps);
      console.log(`✅ Seeded ${kanaOps.length} Kana characters into MongoDB.`);
    }

    console.log('🎉 Database seeding completed successfully!');
  } catch (err: any) {
    console.error('❌ Seeding failed:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}

// Auto-run if executed directly
if (process.argv[1] && process.argv[1].endsWith('seed.ts')) {
  seedDatabase().then(() => process.exit(0));
}
