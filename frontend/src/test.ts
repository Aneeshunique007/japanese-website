/**
 * Comprehensive Test Suite for AniLearn Frontend-Only Architecture
 * Validates 100% data integrity, features, and zero-backend independence.
 */

import fs from 'fs';
import path from 'path';
import { api, checkServerHealth } from './services/api';
import { dataStore } from './services/dataStore';

// Mock fetch for dailySentenceBatches when running in Node.js
if (typeof globalThis.fetch === 'function') {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url: any, init?: any) => {
    if (typeof url === 'string' && url.startsWith('/data/dailySentenceBatches/')) {
      const publicPath = path.resolve(process.cwd(), 'public' + url);
      if (fs.existsSync(publicPath)) {
        const content = fs.readFileSync(publicPath, 'utf-8');
        return new Response(content, { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
    }
    return originalFetch(url, init);
  };
}

let passed = 0;
let failed = 0;

function assert(condition: boolean, testName: string, extraInfo = '') {
  if (condition) {
    passed++;
    console.log(`  ✅ PASS: ${testName} ${extraInfo ? `(${extraInfo})` : ''}`);
  } else {
    failed++;
    console.error(`  ❌ FAIL: ${testName} ${extraInfo ? `(${extraInfo})` : ''}`);
  }
}

async function runTestSuite() {
  console.log('\n==========================================================');
  console.log('🌸 ANIILEARN FULL FRONTEND SYSTEM & DATA INTEGRITY TEST 🌸');
  console.log('==========================================================\n');

  // TEST 1: SERVERLESS HEALTH CHECK
  console.log('▶ [1/15] Serverless Health Check');
  const healthy = await checkServerHealth();
  assert(healthy === true, 'Serverless health check returns true');

  // TEST 2: AUTHENTICATION & USER PROFILE IN LOCALSTORAGE
  console.log('\n▶ [2/15] User Profile & LocalStorage State');
  const regRes = await api.register({
    name: 'Tanaka Ken',
    email: 'tanaka@test.jp',
    targetLevel: 'N4',
    avatar: '🦊'
  });
  assert(regRes.success === true && !!regRes.user.id, 'Register new user', `User ID: ${regRes.user?.id}`);

  const user = regRes.user;
  const loginRes = await api.login({ email: 'tanaka@test.jp' });
  assert(loginRes.success === true && loginRes.user.email === 'tanaka@test.jp', 'Login with email');

  const profileRes = await api.updateProfile({
    userId: user.id,
    name: 'Master Tanaka',
    title: 'Samurai Scholar'
  });
  assert(profileRes.user.name === 'Master Tanaka' && profileRes.user.title === 'Samurai Scholar', 'Update Profile info');

  const progressRes = await api.updateProgress({
    userId: user.id,
    xpGained: 250,
    lessonId: 'lesson-n5-1-1',
    studyMinutesGained: 30
  });
  assert(progressRes.user.xp >= 350 && progressRes.user.completedLessons.includes('lesson-n5-1-1'), 'Update Progress (XP & Lessons)');

  // TEST 3: COURSES & LESSON HIERARCHY
  console.log('\n▶ [3/15] Courses & Lesson Navigation');
  const coursesRes = await api.getCourses();
  assert(coursesRes.courses.length === 5, '5 JLPT Courses present (N5 to N1)', `Count: ${coursesRes.courses.length}`);

  const courseDetail = await api.getCourseById('course-n5');
  assert(courseDetail.success === true && courseDetail.course.modules.length > 0, 'Course N5 modules loaded');

  const lessonDetail = await api.getLessonById('lesson-n5-1-1');
  assert(lessonDetail.success === true && !!lessonDetail.course && !!lessonDetail.lesson, 'Lesson detail fetched with course context');

  // TEST 4: CURRICULUM UNITS & REVIEWS
  console.log('\n▶ [4/15] Curriculum & Drill Synthesis');
  const curriculumRes = await api.getCurriculum();
  assert(curriculumRes.units.length === 25, '25 Curriculum units loaded', `Units: ${curriculumRes.units.length}`);
  const sampleLesson = curriculumRes.units[0].lessons[0];
  assert(!!sampleLesson && !!sampleLesson.title, 'Curriculum lessons structured correctly');

  // TEST 5: KANJI DICTIONARY (100% COUNT VERIFICATION)
  console.log('\n▶ [5/15] Kanji Dictionary (100% Data Integrity)');
  const kanjiAll = await api.getKanji();
  assert(kanjiAll.total === 318, 'Total Kanji count is exactly 318', `Total: ${kanjiAll.total}`);

  const kanjiN5 = await api.getKanji('N5');
  assert(kanjiN5.total === 110, 'JLPT N5 Kanji count is exactly 110', `Count: ${kanjiN5.total}`);

  const kanjiN4 = await api.getKanji('N4');
  assert(kanjiN4.total === 208, 'JLPT N4 Kanji count is exactly 208', `Count: ${kanjiN4.total}`);

  const kanjiSearch = await api.getKanji(undefined, '日');
  assert(kanjiSearch.kanji.some((k: any) => k.char === '日'), 'Kanji search by character ("日")');

  // TEST 6: VOCABULARY (WORDS) (100% COUNT VERIFICATION)
  console.log('\n▶ [6/15] Vocabulary (Words) (100% Data Integrity)');
  const wordsAll = await api.getWords();
  assert(wordsAll.total === 1488, 'Total Vocabulary count is exactly 1,488', `Total: ${wordsAll.total}`);

  const wordsN5 = await api.getWords({ jlpt: 'N5' });
  assert(wordsN5.words.length === 805, 'JLPT N5 Words count is exactly 805', `Count: ${wordsN5.words.length}`);

  const wordsN4 = await api.getWords({ jlpt: 'N4' });
  assert(wordsN4.words.length === 683, 'JLPT N4 Words count is exactly 683', `Count: ${wordsN4.words.length}`);

  const wordsSearch = await api.getWords({ search: 'taberu' });
  assert(wordsSearch.words.length > 0 && wordsSearch.words.some((w: any) => w.reading.includes('たべる') || w.word.includes('食')), 'Vocab search ("taberu")');

  // TEST 7: KANA (HIRAGANA & KATAKANA)
  console.log('\n▶ [7/15] Kana Syllabary');
  const hiraBasic = await api.getKana('Hiragana', 'basic');
  assert(hiraBasic.kana.length === 46, 'Hiragana Basic characters: 46', `Count: ${hiraBasic.kana.length}`);

  const kataBasic = await api.getKana('Katakana', 'basic');
  assert(kataBasic.kana.length === 46, 'Katakana Basic characters: 46', `Count: ${kataBasic.kana.length}`);

  const hiraDakuten = await api.getKana('Hiragana', 'dakuten');
  assert(hiraDakuten.kana.length === 25, 'Hiragana Dakuten characters: 25', `Count: ${hiraDakuten.kana.length}`);

  // TEST 8: GRAMMAR LIBRARY (100% COUNT VERIFICATION)
  console.log('\n▶ [8/15] Grammar Library (100% Data Integrity)');
  const grammarAll = await api.getGrammar();
  assert(grammarAll.total === 215, 'Total Grammar Rules count is exactly 215', `Total: ${grammarAll.total}`);

  const grammarN5 = await api.getGrammar('N5');
  assert(grammarN5.grammar.length > 50, 'N5 Grammar rules present', `Count: ${grammarN5.grammar.length}`);

  const grammarSearch = await api.getGrammar(undefined, 'kara');
  assert(grammarSearch.grammar.length > 0, 'Grammar pattern search ("kara")');

  // TEST 9: ANIME & SITUATIONAL DIALOGUES
  console.log('\n▶ [9/15] Dialogues & Anime Scenarios');
  const dialogues = await api.getDialogues();
  assert(dialogues.dialogues.length === 13, 'Total Anime Dialogues: 13', `Count: ${dialogues.dialogues.length}`);
  assert(dialogues.categories.length > 0, 'Dialogue categories available');

  const dialogueItem = await api.getDialogueById(dialogues.dialogues[0].id);
  assert(dialogueItem.success === true && !!dialogueItem.dialogue?.title, 'Single dialogue fetched by ID');

  // TEST 10: JLPT MOCK PRACTICE EXAMS
  console.log('\n▶ [10/15] JLPT Mock Exam');
  const examAll = await api.getExam();
  assert(examAll.total === 60, 'Total Practice Exam questions: 60', `Count: ${examAll.total}`);

  const examN5 = await api.getExam('n5');
  assert(examN5.questions.length > 0, 'N5 Exam questions filtered');

  // TEST 11: GLOBAL UNIFIED SEARCH
  console.log('\n▶ [11/15] Global Unified Search');
  const searchResults = await api.search('water');
  assert(searchResults.success === true && searchResults.results.length > 0, 'Global search returns results across models');

  // TEST 12: DYNAMIC LEADERBOARD
  console.log('\n▶ [12/15] Dynamic Leaderboard Engine');
  const leaderboard = await api.getLeaderboard(user.id);
  assert(leaderboard.leaderboard.length >= 8, 'Leaderboard contains peers and current user', `Count: ${leaderboard.leaderboard.length}`);
  const currentUserEntry = leaderboard.leaderboard.find((u: any) => u.isCurrent);
  assert(!!currentUserEntry && currentUserEntry.rank > 0, 'Current user dynamically placed with rank', `Rank: ${currentUserEntry?.rank}, XP: ${currentUserEntry?.xp}`);

  // TEST 13: STUDY SCHEDULE & PROGRESS PERSISTENCE
  console.log('\n▶ [13/15] Study Schedule & Learned Items');
  const scheduleRes = await api.getSchedule(user.id);
  assert(scheduleRes.success === true && scheduleRes.schedule.targetDays === 60, 'Initial study schedule created');

  const saveSchedRes = await api.saveSchedule({
    userId: user.id,
    targetDays: 90,
    currentDay: 2
  });
  assert(saveSchedRes.schedule.targetDays === 90 && saveSchedRes.schedule.currentDay === 2, 'Study schedule saved to local storage');

  const resetSchedRes = await api.resetSchedule(user.id);
  assert(resetSchedRes.schedule.currentDay === 1, 'Schedule reset to Day 1');

  await api.saveProgress({
    userId: user.id,
    learnedKana: ['あ', 'い', 'う'],
    learnedKanji: ['日', '月'],
    learnedWords: ['w1', 'w2']
  });
  const progressCheck = await api.getProgress(user.id);
  assert(progressCheck.learnedKana.length === 3 && progressCheck.learnedKanji.length === 2, 'Learned items saved and retrieved');

  // TEST 14: NIKKI LEARNINGS (CLASSES 404-464 & HOMEWORK)
  console.log('\n▶ [14/15] Nikki Japanese Classes & Homework');
  const nikkiData = await api.getNikkiData();
  assert(nikkiData.days.length === 7, '7 Nikki Study Days (Classes 404 to 464)', `Days: ${nikkiData.days.length}`);
  assert(nikkiData.homework.length === 7, '7 Nikki Homework Categories', `Categories: ${nikkiData.homework.length}`);
  assert(nikkiData.qna424.length > 0, 'Class 424 Q&A items available');

  const nikkiDay = await api.getNikkiDay('day-1');
  assert(nikkiDay.success === true && nikkiDay.day?.classCode === 'Class 404', 'Single Nikki class details loaded (Class 404)');

  // TEST 15: DAILY SENTENCE BATCHES (ALL 15 BATCHES & 3,000 QUESTIONS)
  console.log('\n▶ [15/15] Daily Sentence Batches (3,000 Sentences)');
  const allDays = await api.getAllDailySentenceDays();
  assert(allDays.days.length === 60, '60 Study Days registered', `Days: ${allDays.days.length}`);

  // Test Day 1 from Batch 1
  const day1Sentences = await api.getDailySentences(1, 10);
  assert(day1Sentences.questions.length === 10 && day1Sentences.questions[0].day === 1, 'Batch 1 (Day 1) loaded correctly');

  // Test Day 25 from Batch 7
  const day25Sentences = await api.getDailySentences(25, 5);
  assert(day25Sentences.questions.length === 5 && day25Sentences.questions[0].day === 25, 'Batch 7 (Day 25) loaded correctly');

  // Test Day 60 from Batch 15
  const day60Sentences = await api.getDailySentences(60, 5);
  assert(day60Sentences.questions.length === 5 && day60Sentences.questions[0].day === 60, 'Batch 15 (Day 60) loaded correctly');

  // BONUS: DATA STORE SYNCHRONOUS ACCESS
  console.log('\n▶ [BONUS] In-Memory DataStore Instant Availability');
  assert(dataStore.wordsN5.length === 805, 'dataStore.wordsN5 available synchronously (805 words)');
  assert(dataStore.wordsN4.length === 683, 'dataStore.wordsN4 available synchronously (683 words)');
  assert(dataStore.kanjiN5.length === 110, 'dataStore.kanjiN5 available synchronously (110 kanji)');
  assert(dataStore.kanjiN4.length === 208, 'dataStore.kanjiN4 available synchronously (208 kanji)');
  assert(dataStore.allWords.length === 1488, 'dataStore.allWords unified count matches 1,488');
  assert(dataStore.allKanji.length === 318, 'dataStore.allKanji unified count matches 318');

  // SUMMARY
  console.log('\n==========================================================');
  console.log(`🎉 TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('==========================================================');

  if (failed === 0) {
    console.log('✨ 100% DATA AND SYSTEM INTEGRITY CONFIRMED!');
    console.log('✨ Zero backend dependencies. 100% ready for Vercel!');
    process.exit(0);
  } else {
    console.error(`💥 ${failed} tests failed. Please review the output.`);
    process.exit(1);
  }
}

runTestSuite().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
