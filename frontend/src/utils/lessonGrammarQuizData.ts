// Comprehensive 10-Question Beginner-Friendly Grammar Quizzes for all 16 JLPT N5 Lessons

export interface LessonGrammarQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const LESSON_GRAMMAR_QUIZZES: Record<string, LessonGrammarQuestion[]> = {
  // ─── LESSON 1-1: は (wa), です (desu), か (ka) ──────────────────────
  'lesson-n5-1-1': [
    {
      question: 'Which particle is used to mark the main topic of a Japanese sentence?',
      options: ['は (pronounced wa)', 'を (pronounced o)', 'が (ga)', 'で (de)'],
      correctIndex: 0,
      explanation: 'は is written with the hiragana "ha", but pronounced "wa" when pointing out the topic of a sentence.'
    },
    {
      question: 'How is the topic particle は pronounced in "私は学生です"?',
      options: ['wa', 'ha', 'ba', 'pa'],
      correctIndex: 0,
      explanation: 'When used as the topic marker, は is always pronounced "wa".'
    },
    {
      question: 'How do you turn a polite statement like "田中さんは日本人です" into a question?',
      options: ['Add か (ka) at the end of the sentence', 'Change です to でした', 'Place は at the front', 'Add ね (ne) at the start'],
      correctIndex: 0,
      explanation: 'Attaching the sentence-ending particle か creates a polite question without needing a question mark.'
    },
    {
      question: 'Complete the sentence: "私 ___ 学生です。" (I am a student.)',
      options: ['は (wa)', 'を (o)', 'に (ni)', 'で (de)'],
      correctIndex: 0,
      explanation: 'は marks "私" (I) as the topic being introduced.'
    },
    {
      question: 'What is the function of です (desu) in "私は学生です"?',
      options: ['Polite copula meaning "is / am / are"', 'Past tense verb meaning "was"', 'Negative word meaning "not"', 'Question marker'],
      correctIndex: 0,
      explanation: 'です (desu) acts like "is/am/are" and adds politeness to the sentence.'
    },
    {
      question: 'How do you politely ask "Are you American?" in Japanese?',
      options: ['あなたはアメリカ人ですか。', 'あなたはアメリカ人でした。', 'あなたをアメリカ人です。', 'あなたはアメリカ人がですか。'],
      correctIndex: 0,
      explanation: 'Structure: [Topic] は [Nationality] ですか。(Anata wa amerikajin desu ka).'
    },
    {
      question: 'If someone asks "学生ですか" (Are you a student?), which is the correct affirmative reply?',
      options: ['はい、学生です。', 'いいえ、学生です。', 'はい、先生です。', 'いいえ、そうです。'],
      correctIndex: 0,
      explanation: '「はい、学生です」(Hai, gakusei desu) means "Yes, I am a student."'
    },
    {
      question: 'In the sentence "スミスさんは先生です", what is the grammatical topic?',
      options: ['スミスさん (Mr. Smith)', '先生 (Teacher)', 'です (is)', 'None'],
      correctIndex: 0,
      explanation: 'The word right before the particle は is the topic ("スミスさん").'
    },
    {
      question: 'Which of the following is the polite negative of "学生です" (I am not a student)?',
      options: ['学生じゃありません (gakusei ja arimasen)', '学生でした (gakusei deshita)', '学生ですない', '学生ではありませんでした'],
      correctIndex: 0,
      explanation: '「じゃありません」(ja arimasen) is the standard polite negative of です.'
    },
    {
      question: 'Why is a question mark "?" not required in standard Japanese writing?',
      options: ['Because particle か at the end signals a question', 'Because Japanese has no punctuation', 'Because questions only exist in spoken speech', 'Because Japanese sentences cannot be questions'],
      correctIndex: 0,
      explanation: 'The sentence-ending particle か already explicitly marks the sentence as a question.'
    }
  ],

  // ─── LESSON 1-2: Demonstratives これ, それ, あれ, どれ ─────────────────
  'lesson-n5-1-2': [
    {
      question: 'Which word refers to an object right next to the speaker ("this near me")?',
      options: ['これ (kore)', 'それ (sore)', 'あれ (are)', 'どれ (dore)'],
      correctIndex: 0,
      explanation: 'これ refers to something close to or held by the speaker ("this").'
    },
    {
      question: 'Which word refers to an object close to the listener ("that near you")?',
      options: ['それ (sore)', 'これ (kore)', 'あれ (are)', 'どれ (dore)'],
      correctIndex: 0,
      explanation: 'それ refers to an object close to the person being spoken to ("that").'
    },
    {
      question: 'Which word refers to an object far from both people ("that over there")?',
      options: ['あれ (are)', 'これ (kore)', 'それ (sore)', 'どれ (dore)'],
      correctIndex: 0,
      explanation: 'あれ refers to something distant from both speaker and listener.'
    },
    {
      question: 'Which question word means "Which one (of three or more)?"',
      options: ['どれ (dore)', '何 (nani)', '誰 (dare)', 'どこ (doko)'],
      correctIndex: 0,
      explanation: 'どれ (dore) asks "which one" among multiple items.'
    },
    {
      question: 'How do you say "This is my book"?',
      options: ['これは私の本です。', 'それは私の本です。', 'あれは私の本です。', 'どれは私の本です。'],
      correctIndex: 0,
      explanation: 'これ (this) + は + 私の本 (my book) + です.'
    },
    {
      question: 'What is the correct way to ask "What is that over there?"',
      options: ['あれは何ですか。', 'これは何ですか。', 'それは何ですか。', 'どれは何ですか。'],
      correctIndex: 0,
      explanation: 'あれ (that over there) + は + 何ですか (what is it?).'
    },
    {
      question: 'Can これ directly modify a noun (like "kore hon")?',
      options: ['No, you must use この (kono hon) to modify a noun', 'Yes, kore hon is natural', 'No, kore is only for animals', 'Yes, but only in questions'],
      correctIndex: 0,
      explanation: 'これ / それ / あれ stand alone. To modify a noun directly, use この / その / あの.'
    },
    {
      question: 'Complete: "あなたのペンは ___ ですか。" (Which one is your pen?)',
      options: ['どれ (dore)', 'これ (kore)', 'それ (sore)', 'あれ (are)'],
      correctIndex: 0,
      explanation: 'どれ is the question word for "which one".'
    },
    {
      question: 'If someone asks "それは何ですか" about what you are holding, you answer starting with:',
      options: ['これは... (This is...)', 'あれは... (That over there is...)', 'どれは... (Which is...)', 'それは... (That is...)'],
      correctIndex: 0,
      explanation: 'Since it is near you now, you refer to it with これ (this).'
    },
    {
      question: 'What does the Ko-So-A-Do system stand for?',
      options: ['Ko (near me), So (near you), A (far), Do (question)', 'Korean-style Japanese', 'Past, present, future tenses', 'Noun classification prefixes'],
      correctIndex: 0,
      explanation: 'Ko-So-A-Do is the 4-part distance system in Japanese.'
    }
  ],

  // ─── LESSON 1-3: Question Particle か & Everyday Inquiries ─────────────
  'lesson-n5-1-3': [
    {
      question: 'How do you ask "What is this?" in Japanese?',
      options: ['これは何ですか。', 'これは本ですか。', 'これは誰ですか。', 'これはどこですか。'],
      correctIndex: 0,
      explanation: '何 (nan) means "what", so "これは何ですか" asks "What is this?".'
    },
    {
      question: 'How do you ask "Where is the restroom?"',
      options: ['お手洗いはどこですか。', 'お手洗いは誰ですか。', 'お手洗いは何ですか。', 'お手洗いはいつですか。'],
      correctIndex: 0,
      explanation: 'どこ (doko) means "where".'
    },
    {
      question: 'How do you ask "Who is that person?"',
      options: ['あの人は誰ですか。', 'あの人は何ですか。', 'あの人はどこですか。', 'あの人はどれですか。'],
      correctIndex: 0,
      explanation: '誰 (dare) means "who".'
    },
    {
      question: 'How do you ask the price of something ("How much is this?")?',
      options: ['これはいくらですか。', 'これはいくつですか。', 'これはなんじですか。', 'これはなんさいですか。'],
      correctIndex: 0,
      explanation: 'いくら (ikura) is the question word for price ("how much").'
    },
    {
      question: 'How do you politely ask "What time is it now?"',
      options: ['今何時ですか。', '今何分ですか。', '今何日ですか。', '今何月ですか。'],
      correctIndex: 0,
      explanation: '今 (ima = now) + 何時 (nanji = what hour/time) + ですか.'
    },
    {
      question: 'What does "失礼ですが" mean when asking a personal question?',
      options: ['Excuse me, but... (polite opener)', 'Goodbye', 'Good morning', 'Thank you'],
      correctIndex: 0,
      explanation: '「失礼ですが」(shitsurei desu ga) is a polite cushion phrase meaning "Excuse me, but...".'
    },
    {
      question: 'How do you ask "Is this an apple, or an orange?"',
      options: ['これはりんごですか、みかんですか。', 'これはりんごとみかんですか。', 'これはりんごのみかんですか。', 'これはりんごでもみかんですか。'],
      correctIndex: 0,
      explanation: 'Repeating [Choice A] ですか、[Choice B] ですか is the standard pattern for "A or B?".'
    },
    {
      question: 'If you want to say "I don\'t know", what is the natural phrase?',
      options: ['わかりません (wakarimasen)', '知りです (shiri desu)', 'わかります (wakarimasu)', '知ります (shirimasu)'],
      correctIndex: 0,
      explanation: '「わかりません」(wakarimasen) is the standard polite phrase for "I don\'t know / understand".'
    },
    {
      question: 'Which question word asks "When?"',
      options: ['いつ (itsu)', 'どこ (doko)', 'だれ (dare)', 'どう (dou)'],
      correctIndex: 0,
      explanation: 'いつ (itsu) means "when".'
    },
    {
      question: 'Which phrase politely means "Please say it once more"?',
      options: ['もう一度お願いします (Mou ichido onegai shimasu)', 'ありがとうございます', 'こんにちは', 'どういたしまして'],
      correctIndex: 0,
      explanation: '「もう一度お願いします」asks someone to repeat something once more.'
    }
  ],

  // ─── LESSON 2-1: Daily Routines & Polite Verbs (~ます / ~ません) ───────
  'lesson-n5-2-1': [
    {
      question: 'What is the polite present/future ending for verbs in Japanese?',
      options: ['〜ます (~masu)', '〜ない (~nai)', '〜た (~ta)', '〜て (~te)'],
      correctIndex: 0,
      explanation: '〜ます (masu) is the polite affirmative verb ending.'
    },
    {
      question: 'How do you say "I do not eat" using 食べます (tabemasu)?',
      options: ['食べません (tabemasen)', '食べました (tabemashita)', '食べないです', '食べますない'],
      correctIndex: 0,
      explanation: 'Change 〜ます to 〜ません (masen) to make a polite negative verb.'
    },
    {
      question: 'How do you say "I ate" (past affirmative) using 食べます?',
      options: ['食べました (tabemashita)', '食べません (tabemasen)', '食べませんでした', '食べたです'],
      correctIndex: 0,
      explanation: 'Change 〜ます to 〜ました (mashita) for the polite past tense.'
    },
    {
      question: 'How do you say "I did not drink" using 飲みます (nomimasu)?',
      options: ['飲みませんでした (nomimasendeshita)', '飲みました (nomimashita)', '飲みません (nomimasen)', '飲まないでした'],
      correctIndex: 0,
      explanation: '〜ませんでした (masendeshita) is the polite past negative.'
    },
    {
      question: 'Complete: "毎朝、コーヒーを ___。" (Every morning I drink coffee.)',
      options: ['飲みます (nomimasu)', '飲みません', '読みます', '行きます'],
      correctIndex: 0,
      explanation: '飲みます (nomimasu) means "to drink".'
    },
    {
      question: 'Which word means "every day" in Japanese?',
      options: ['毎日 (mainichi)', '毎朝 (maiasa)', '毎晩 (maiban)', '毎週 (maishuu)'],
      correctIndex: 0,
      explanation: '毎日 (mainichi) means "every day".'
    },
    {
      question: 'What does "朝七時に起きます" mean?',
      options: ['I wake up at 7:00 in the morning.', 'I go to sleep at 7:00.', 'I eat breakfast at 7:00.', 'I leave home at 7:00.'],
      correctIndex: 0,
      explanation: '起きます (okimasu) means "to wake up / get up".'
    },
    {
      question: 'Which verb means "to sleep / go to bed"?',
      options: ['寝ます (nemasu)', '起きます (okimasu)', '見ます (mimasu)', '聞きます (kikimasu)'],
      correctIndex: 0,
      explanation: '寝ます (nemasu) means "to sleep".'
    },
    {
      question: 'How do you politely ask a friend "Do you study every night?"',
      options: ['毎晩勉強しますか。', '毎晩勉強しましたか。', '毎晩勉強しませんか。', '毎晩勉強ですか。'],
      correctIndex: 0,
      explanation: '毎晩 (maiban = every night) + 勉強しますか (do you study?).'
    },
    {
      question: 'If you want to say "Yesterday I did not study", you say:',
      options: ['昨日は勉強しませんでした。', '昨日は勉強しません。', '昨日は勉強しました。', '昨日は勉強です。'],
      correctIndex: 0,
      explanation: 'Yesterday (past) + not (negative) = 〜ませんでした (shimasendeshita).'
    }
  ],

  // ─── LESSON 2-2: Movement Verbs & Destinations (へ・に) ───────────────
  'lesson-n5-2-2': [
    {
      question: 'Which particle marks the direction of movement toward a destination?',
      options: ['へ (pronounced e)', 'を (o)', 'で (de)', 'が (ga)'],
      correctIndex: 0,
      explanation: 'Particle へ (written "he", pronounced "e") points towards your destination.'
    },
    {
      question: 'Which particle pinpoints the specific target destination of 行きます (go)?',
      options: ['に (ni)', 'を (o)', 'で (de)', 'から (kara)'],
      correctIndex: 0,
      explanation: 'Both に and へ are used with movement verbs to mark the destination.'
    },
    {
      question: 'What are the three core movement verbs in Japanese?',
      options: ['行きます (go), 来ます (come), 帰ります (return home)', '食べます, 飲みます, 寝ます', '見ます, 聞きます, 話します', '買います, 売ります, 払います'],
      correctIndex: 0,
      explanation: '行きます (iku = go), 来ます (kuru = come), 帰ります (kaeru = return home).'
    },
    {
      question: 'How do you say "I will go to school tomorrow"?',
      options: ['明日学校へ行きます。', '明日学校を行きます。', '明日学校で行きます。', '明日学校があります。'],
      correctIndex: 0,
      explanation: '学校へ行きます (gakkou e ikimasu) = go to school.'
    },
    {
      question: 'How do you say "I return home at 6:00"?',
      options: ['六時にうちへ帰ります。', '六時にうちを行きます。', '六時にうちを出ます。', '六時にうちが来ます。'],
      correctIndex: 0,
      explanation: 'うちへ帰ります (uchi e kaerimasu) = return home.'
    },
    {
      question: 'Which question asks "Where are you going?"',
      options: ['どこへ行きますか。', 'だれと行きますか。', '何で行きますか。', 'いつ行きますか。'],
      correctIndex: 0,
      explanation: 'どこへ (doko e = where to) + 行きますか.'
    },
    {
      question: 'If you are not going anywhere, how do you say "I am not going anywhere"?',
      options: ['どこへも行きません。', 'どこを行きません。', 'どこで行きません。', 'どこがあります。'],
      correctIndex: 0,
      explanation: 'Question word + も + negative verb = "nowhere / nothing / nobody" (どこへも行きません).'
    },
    {
      question: 'Which particle indicates traveling "by means of" a vehicle (e.g. by train)?',
      options: ['で (de)', 'に (ni)', 'へ (e)', 'を (o)'],
      correctIndex: 0,
      explanation: 'で marks the means of transit: 電車で (by train), バスで (by bus).'
    },
    {
      question: 'How do you say "I walk on foot" (no vehicle)?',
      options: ['歩いて行きます (aruite ikimasu)', '車で行きます', '電車で行きます', 'タクシーで行きます'],
      correctIndex: 0,
      explanation: '歩いて (aruite) means "on foot / walking". No で particle is needed with it.'
    },
    {
      question: 'Which particle marks "with whom" you travel (e.g. with a friend)?',
      options: ['と (to)', 'で (de)', 'へ (e)', 'を (o)'],
      correctIndex: 0,
      explanation: '友達と (tomodachi to = with a friend).'
    }
  ],

  // ─── LESSON 2-3: Direct Objects (を) & Action Locations (で) ─────────
  'lesson-n5-2-3': [
    {
      question: 'Which particle marks the direct object that receives the action?',
      options: ['を (pronounced o)', 'で (de)', 'に (ni)', 'は (wa)'],
      correctIndex: 0,
      explanation: 'を (written "wo") marks the direct object: パンを食べます (eat bread).'
    },
    {
      question: 'Which particle marks the location where an active event takes place?',
      options: ['で (de)', 'に (ni)', 'へ (e)', 'を (o)'],
      correctIndex: 0,
      explanation: 'で marks the active location: 図書館で勉強します (study at the library).'
    },
    {
      question: 'Complete: "食堂 ___ 昼ご飯 ___ 食べます。"',
      options: ['で, を (de, o)', 'に, は (ni, wa)', 'へ, で (e, de)', 'を, で (o, de)'],
      correctIndex: 0,
      explanation: '食堂で (at cafeteria = location) + 昼ご飯を (lunch = direct object) + 食べます.'
    },
    {
      question: 'How do you say "I read the newspaper at home"?',
      options: ['家で新聞を読みます。', '家を新聞で読みます。', '家に新聞を読みます。', '家へ新聞が読みます。'],
      correctIndex: 0,
      explanation: '家で (at home) + 新聞を (newspaper) + 読みます (read).'
    },
    {
      question: 'What does "何を食べますか" mean?',
      options: ['What will you eat?', 'Where will you eat?', 'When will you eat?', 'Who will eat?'],
      correctIndex: 0,
      explanation: '何 (nani = what) + を食べますか (will you eat?).'
    },
    {
      question: 'If you want to say "I don\'t eat anything", you say:',
      options: ['何も食べません (Nani mo tabemasen)', '何を食べる', '何で食べます', '何か食べます'],
      correctIndex: 0,
      explanation: '何も + negative verb means "nothing / not anything".'
    },
    {
      question: 'Which verb means "to buy"?',
      options: ['買います (kaimasu)', '売ります (urimasu)', '書きます (kakimasu)', '聞きます (kikimasu)'],
      correctIndex: 0,
      explanation: '買います (kaimasu) means "to buy".'
    },
    {
      question: 'Which verb means "to listen / hear / ask"?',
      options: ['聞きます (kikimasu)', '見ます (mimasu)', '話します (hanashimasu)', '読みます (yomimasu)'],
      correctIndex: 0,
      explanation: '聞きます (kikimasu) means "to listen to music / hear".'
    },
    {
      question: 'Complete: "スーパー ___ りんご ___ 買いました。"',
      options: ['で, を (de, o)', 'に, に (ni, ni)', 'へ, で (e, de)', 'を, は (o, wa)'],
      correctIndex: 0,
      explanation: 'スーパーで (at supermarket) + りんごを (apples) + 買いました (bought).'
    },
    {
      question: 'What does "週末は何をしましたか" ask?',
      options: ['What did you do on the weekend?', 'Where did you go on the weekend?', 'Who did you meet on the weekend?', 'When was the weekend?'],
      correctIndex: 0,
      explanation: '何をしましたか asks "What did you do?".'
    }
  ],

  // ─── LESSON 3-1: I-Adjectives & Tense Conjugation (〜い) ───────────────
  'lesson-n5-3-1': [
    {
      question: 'What ending character defines an "I-Adjective" in Japanese?',
      options: ['〜い (~i)', '〜な (~na)', '〜だ (~da)', '〜る (~ru)'],
      correctIndex: 0,
      explanation: 'True I-adjectives always end in the hiragana character い (e.g. 暑い, 寒い, 高い).'
    },
    {
      question: 'How do you make an I-adjective negative (e.g. 暑い atsui → "not hot")?',
      options: ['Drop い, add 〜くないです (atsukunai desu)', 'Add じゃないです', 'Add ありません', 'Add ですない'],
      correctIndex: 0,
      explanation: 'Drop the final い and add 〜くないです.'
    },
    {
      question: 'How do you make an I-adjective past tense (e.g. 暑い → "was hot")?',
      options: ['Drop い, add 〜かったです (atsukatta desu)', 'Add でした', 'Add ました', 'Drop い, add 〜くなかった'],
      correctIndex: 0,
      explanation: 'Drop the final い and add 〜かったです.'
    },
    {
      question: 'How does the irregular adjective いい (good) conjugate in negative ("not good")?',
      options: ['よくないです (yokunai desu)', 'いくないです', 'いかった', 'いいじゃない'],
      correctIndex: 0,
      explanation: 'いい changes its stem to よ: よくないです (not good), よかったです (was good).'
    },
    {
      question: 'What is the past tense of いい (good = "was good")?',
      options: ['よかったです (yokatta desu)', 'いかったです', 'いいでした', 'いいかった'],
      correctIndex: 0,
      explanation: 'いい becomes よかったです (yokatta desu = was good).'
    },
    {
      question: 'How do you say "Yesterday was very cold"?',
      options: ['昨日はとても寒かったです。', '昨日はとても寒いでした。', '昨日はとても寒くないです。', '昨日はとても寒いです。'],
      correctIndex: 0,
      explanation: '寒い (cold) → past tense is 寒かったです.'
    },
    {
      question: 'Which word means "delicious / tasty"?',
      options: ['美味しい (oishii)', '不味い (mazui)', '甘い (amai)', '辛い (karai)'],
      correctIndex: 0,
      explanation: '美味しい (oishii) means delicious.'
    },
    {
      question: 'How do you say "This book is not interesting"?',
      options: ['この本は面白くないです。', 'この本は面白いでした。', 'この本は面白かったです。', 'この本は面白いじゃないです。'],
      correctIndex: 0,
      explanation: '面白い (interesting) → 面白くないです (not interesting).'
    },
    {
      question: 'When an I-adjective modifies a noun directly (e.g. "red car"), what happens?',
      options: ['Keep the い and place it directly before the noun (赤い車)', 'Add な between them', 'Add の between them', 'Drop the い'],
      correctIndex: 0,
      explanation: 'I-adjectives attach directly to nouns without any particles: 赤い車 (red car).'
    },
    {
      question: 'What is the past negative of 高い (expensive = "was not expensive")?',
      options: ['高くなかったです (takakunakatta desu)', '高くないでした', '高いじゃなかったです', '高くなかったでした'],
      correctIndex: 0,
      explanation: 'Drop い + くなかったです = past negative.'
    }
  ],

  // ─── LESSON 3-2: Na-Adjectives & Preferences (静か, 好き) ──────────────
  'lesson-n5-3-2': [
    {
      question: 'Why are Na-Adjectives called "Na-adjectives"?',
      options: ['Because they require な (na) when placed directly before a noun', 'Because they all end in な in the dictionary', 'Because they are only used with names', 'Because they cannot end sentences'],
      correctIndex: 0,
      explanation: 'They need な as a bridge when directly modifying a noun (e.g. 静かな部屋).'
    },
    {
      question: 'How do you say "a quiet room" using 静か (shizuka) and 部屋 (heya)?',
      options: ['静かな部屋 (shizuka na heya)', '静か部屋', '静かい部屋', '静かの部屋'],
      correctIndex: 0,
      explanation: '静か + な + 部屋 = quiet room.'
    },
    {
      question: 'When a Na-adjective ends a sentence, how does it look?',
      options: ['この部屋は静かです。(Ends in です, no な)', 'この部屋は静かなです。', 'この部屋は静かいです。', 'この部屋は静かます。'],
      correctIndex: 0,
      explanation: 'At the end of a sentence, the な disappears and it ends in です.'
    },
    {
      question: 'How do you make a Na-adjective negative (e.g. "not quiet")?',
      options: ['静かじゃありません (shizuka ja arimasen)', '静か發くないです', '静かじゃないでした', '静かます'],
      correctIndex: 0,
      explanation: 'Na-adjectives conjugate like nouns: [Adjective] じゃありません.'
    },
    {
      question: 'Which particle is used with 好き (suki = like) to mark what you like?',
      options: ['が (ga)', 'を (o)', 'で (de)', 'へ (e)'],
      correctIndex: 0,
      explanation: 'Preferences use が: 日本料理が好きです (I like Japanese food).'
    },
    {
      question: 'Which word is the opposite of 好き (suki = like)?',
      options: ['嫌い (kirai = dislike)', '上手 (jouzu)', '下手 (heta)', '便利 (benri)'],
      correctIndex: 0,
      explanation: '嫌い (kirai) means "disliked / hate".'
    },
    {
      question: 'How do you say "Tanaka-san is a very kind person"?',
      options: ['田中さんはとても親切な人です。', '田中さんはとても親切人です。', '田中さんはとても親切の人です。', '田中さんはとても親切い人です。'],
      correctIndex: 0,
      explanation: '親切な人 (shinsetsu na hito) = kind person.'
    },
    {
      question: 'What is the past tense of a Na-adjective sentence (e.g. "It was quiet")?',
      options: ['静かでした (shizuka deshita)', '静かかったです', '静かでしたない', '静かますでした'],
      correctIndex: 0,
      explanation: 'です becomes でした (shizuka deshita = was quiet).'
    },
    {
      question: 'Which pair means "good at" and "poor at"?',
      options: ['上手 (jouzu) and 下手 (heta)', '便利 (benri) and 不便 (fuben)', '有名 (yuumei) and 静か (shizuka)', '元気 (genki) and 暇 (hima)'],
      correctIndex: 0,
      explanation: '上手 (skilled/good at) and 下手 (unskilled/poor at).'
    },
    {
      question: 'Complete: "私はテニス ___ 上手じゃありません。"',
      options: ['が (ga)', 'を (o)', 'で (de)', 'へ (e)'],
      correctIndex: 0,
      explanation: 'Skills (上手 / 下手) mark the activity with が.'
    }
  ],

  // ─── LESSON 3-3: Existence (あります vs います) ────────────────────────
  'lesson-n5-3-3': [
    {
      question: 'Which verb of existence is used for living, animate beings (people, animals)?',
      options: ['います (imasu)', 'あります (arimasu)', 'します (shimasu)', 'いきます (ikimasu)'],
      correctIndex: 0,
      explanation: 'います is strictly for living things that move on their own (people, dogs, cats).'
    },
    {
      question: 'Which verb of existence is used for inanimate, non-living objects (books, cars, desks)?',
      options: ['あります (arimasu)', 'います (imasu)', 'なります (narimasu)', 'できます (dekimasu)'],
      correctIndex: 0,
      explanation: 'あります is used for inanimate objects, plants, and concepts.'
    },
    {
      question: 'Complete: "庭に犬が ___。"',
      options: ['います (imasu)', 'あります (arimasu)', '寝ます', '行きます'],
      correctIndex: 0,
      explanation: 'A dog (犬) is a living creature, so use います.'
    },
    {
      question: 'Complete: "机の上に本が ___。"',
      options: ['あります (arimasu)', 'います (imasu)', 'します', '食べます'],
      correctIndex: 0,
      explanation: 'A book (本) is an inanimate object, so use あります.'
    },
    {
      question: 'Which particle marks the location where something exists?',
      options: ['に (ni)', 'で (de)', 'を (o)', 'へ (e)'],
      correctIndex: 0,
      explanation: 'The existence location takes に: 部屋に (in the room).'
    },
    {
      question: 'What is the structure for "There is [Item] in [Place]"?',
      options: ['[Place] に [Item] が あります/います', '[Place] で [Item] を あります', '[Place] を [Item] に います', '[Place] は [Item] へ あります'],
      correctIndex: 0,
      explanation: 'Place に + Item が + あります / います.'
    },
    {
      question: 'What does "猫はいません" mean?',
      options: ['There is no cat / The cat is not here.', 'There is a cat.', 'The cat is eating.', 'The cat is sleeping.'],
      correctIndex: 0,
      explanation: 'いません is the negative form of います ("does not exist").'
    },
    {
      question: 'What does "時間がありますか" mean?',
      options: ['Do you have time?', 'What time is it?', 'Is time fast?', 'Do you have a watch?'],
      correctIndex: 0,
      explanation: '時間がありますか asks "Do you have time / free time?".'
    },
    {
      question: 'Are plants and trees treated with あります or います?',
      options: ['あります (arimasu)', 'います (imasu)', 'Both equally', 'Neither'],
      correctIndex: 0,
      explanation: 'Plants cannot move under their own will, so they take あります (木があります).'
    },
    {
      question: 'How do you ask "Who is in the classroom?"',
      options: ['教室に誰がいますか。', '教室に何がありますか。', '教室にどこがいますか。', '教室に誰がありますか。'],
      correctIndex: 0,
      explanation: '誰 (who - person) + いますか (living existence).'
    }
  ],

  // ─── LESSON 4-1: The Essential Te-Form & Requests (〜てください) ─────────
  'lesson-n5-4-1': [
    {
      question: 'What is the Te-form of the verb 待つ (matsu = to wait)?',
      options: ['待って (matte)', '待ちて', '待いて', '待んで'],
      correctIndex: 0,
      explanation: 'Verbs ending in う, つ, る conjugate to 〜って (待つ → 待って).'
    },
    {
      question: 'What is the Te-form of 飲む (nomu = to drink)?',
      options: ['飲んで (nonde)', '飲みて', '飲って', '飲いて'],
      correctIndex: 0,
      explanation: 'Verbs ending in む, ぶ, ぬ conjugate to 〜んで (飲む → 飲んで).'
    },
    {
      question: 'What is the Te-form of 書く (kaku = to write)?',
      options: ['書いて (kaite)', '書って', '書んで', '書ちて'],
      correctIndex: 0,
      explanation: 'Verbs ending in く conjugate to 〜いて (書く → 書いて).'
    },
    {
      question: 'What is the irregular Te-form exception for 行く (iku = to go)?',
      options: ['行って (itte)', '行いて (iite)', '行んで', '行ちて'],
      correctIndex: 0,
      explanation: '行く is a famous exception: it becomes 行って (itte), not iite!'
    },
    {
      question: 'What is the Te-form of the Group 2 verb 食べる (taberu = to eat)?',
      options: ['食べて (tabete)', '食って', '食べんで', '食べいて'],
      correctIndex: 0,
      explanation: 'Group 2 (Ichidan) verbs simply drop る and add て: 食べる → 食べて.'
    },
    {
      question: 'What are the Te-forms of the two irregular verbs する and 来る (kuru)?',
      options: ['して (shite) and 来て (kite)', 'すて and きて', 'しって and きって', 'すんで and こんで'],
      correctIndex: 0,
      explanation: 'する becomes して, and 来る becomes 来て (kite).'
    },
    {
      question: 'How do you say "Please wait a moment" politely?',
      options: ['ちょっと待ってください。', 'ちょっと待つください。', 'ちょっと待ちます。', 'ちょっと待たないで。'],
      correctIndex: 0,
      explanation: '[Verb Te-form] + ください makes a polite everyday request.'
    },
    {
      question: 'How do you say "Please look at page 10"?',
      options: ['十ページを見てください。', '十ページを見るください。', '十ページを見ます。', '十ページを見ない。'],
      correctIndex: 0,
      explanation: '見る → 見て (drop ru add te) + ください.'
    },
    {
      question: 'Can the Te-form connect multiple sequential actions (e.g. "I woke up, ate breakfast, and went to school")?',
      options: ['Yes, Te-form links actions in chronological order', 'No, only one verb allowed per sentence', 'No, Te-form is only for requests', 'Yes, but only in negative sentences'],
      correctIndex: 0,
      explanation: 'Te-form chains actions together smoothly: 朝起きて、朝ご飯を食べて、学校へ行きました.'
    },
    {
      question: 'What is the Te-form of 話す (hanasu = to speak)?',
      options: ['話して (hanashite)', '話って', '話いて', '話んで'],
      correctIndex: 0,
      explanation: 'Verbs ending in す change to 〜して (話す → 話して).'
    }
  ],

  // ─── LESSON 4-2: Ongoing Actions & States (〜ています) ───────────────────
  'lesson-n5-4-2': [
    {
      question: 'What does [Verb Te-form] + います express?',
      options: ['An action happening right now (continuous "-ing") or an ongoing state', 'A future intention', 'A completed past event', 'A polite command'],
      correctIndex: 0,
      explanation: '〜ています describes an action currently underway (like English "-ing") or an enduring state.'
    },
    {
      question: 'How do you say "I am eating lunch right now"?',
      options: ['今、昼ご飯を食べています。', '今、昼ご飯を食べました。', '今、昼ご飯を食べます。', '今、昼ご飯を食べてください。'],
      correctIndex: 0,
      explanation: '食べています (tabete imasu) = am eating.'
    },
    {
      question: 'How do you say "Ken is studying in his room"?',
      options: ['ケンさんは部屋で勉強しています。', 'ケンさんは部屋で勉強します。', 'ケンさんは部屋で勉強しました。', 'ケンさんは部屋で勉強してください。'],
      correctIndex: 0,
      explanation: '勉強しています (benkyou shite imasu) = is studying.'
    },
    {
      question: 'How do you say "I live in Tokyo" (continuous state)?',
      options: ['東京に住んでいます (Toukyou ni sunde imasu)', '東京に住みます', '東京に住んでください', '東京に住みました'],
      correctIndex: 0,
      explanation: 'Living somewhere is a continuous state expressed with 住んでいます.'
    },
    {
      question: 'What does "知っています" mean?',
      options: ['I know (I am in the state of knowing)', 'I will know', 'Please know', 'I don\'t know'],
      correctIndex: 0,
      explanation: '知っています means "I know". Its negative counterpart is 知りません (I don\'t know).'
    },
    {
      question: 'What is the negative of 勉強しています (is not studying)?',
      options: ['勉強していません (benkyou shite imasen)', '勉強してないです', '勉強しませんでした', '勉強していますない'],
      correctIndex: 0,
      explanation: 'Change います to いません: 勉強していません.'
    },
    {
      question: 'What does "雨が降っています" mean?',
      options: ['It is raining right now.', 'It rained yesterday.', 'It will rain tomorrow.', 'Please make it rain.'],
      correctIndex: 0,
      explanation: '降っています describes precipitation happening right now.'
    },
    {
      question: 'What does "田中さんは結婚しています" mean?',
      options: ['Tanaka-san is married (in the state of marriage).', 'Tanaka-san will marry tomorrow.', 'Tanaka-san is single.', 'Tanaka-san attended a wedding.'],
      correctIndex: 0,
      explanation: '結婚しています describes the ongoing marital status.'
    },
    {
      question: 'How do you ask someone "What are you doing right now?"',
      options: ['今何をしていますか。', '今何を食べますか。', '今どこへ行きますか。', '今何がありますか。'],
      correctIndex: 0,
      explanation: '何をしていますか (nani o shite imasu ka) = What are you doing?'
    },
    {
      question: 'If you want to say "I am listening to music", you say:',
      options: ['音楽を聴いています (ongaku o kiite imasu)', '音楽を聴きます', '音楽を聴きました', '音楽を聴いてください'],
      correctIndex: 0,
      explanation: '聴く → 聴いて + います = is listening to music.'
    }
  ],

  // ─── LESSON 4-3: Desires, Invitations & Suggestions (〜たい) ────────────
  'lesson-n5-4-3': [
    {
      question: 'How do you say "I want to eat sushi" using 食べます (tabemasu)?',
      options: ['寿司を食べたいです (Sushi o tabetai desu)', '寿司を食べるたいです', '寿司を食べますたい', '寿司を食べたいでした'],
      correctIndex: 0,
      explanation: 'Drop ます and attach 〜たいです: 食べます → 食べたいです.'
    },
    {
      question: 'How does 〜たい conjugate when you DON\'T want to do something (negative)?',
      options: ['Like an I-adjective: 〜たくないです (tabetakunai desu)', 'Add じゃありません', 'Add ません', 'Add ないです'],
      correctIndex: 0,
      explanation: '〜たい behaves exactly like an I-adjective: 〜たくないです (don\'t want to do).'
    },
    {
      question: 'How do you politely invite someone ("Won\'t you drink coffee with me?")?',
      options: ['一緒にコーヒーを飲みませんか。', '一緒にコーヒーを飲みますか。', '一緒にコーヒーを飲みましょう。', '一緒にコーヒーを飲んでください。'],
      correctIndex: 0,
      explanation: '[Verb stem] + ませんか is the polite way to invite someone to do something.'
    },
    {
      question: 'How do you say "Let\'s go!" enthusiastically to a friend?',
      options: ['行きましょう！(Ikimashou!)', '行きませんか', '行きますよ', '行きたいです'],
      correctIndex: 0,
      explanation: '〜ましょう (mashou) means "Let\'s do [action]!".'
    },
    {
      question: 'How do you say "Shall we take a short rest?"',
      options: ['少し休みましょうか。', '少し休みたいです。', '少し休んでください。', '少し休みましたか。'],
      correctIndex: 0,
      explanation: '〜ましょうか (mashou ka) means "Shall we do [action]?".'
    },
    {
      question: 'Can you use 〜たいです directly to ask a superior what THEY want to do?',
      options: ['No, it sounds too blunt/direct for superiors', 'Yes, it is the most polite question', 'Yes, only for bosses', 'No, tai is only for animals'],
      correctIndex: 0,
      explanation: '〜たい expresses personal first-person desire and is too direct for asking superiors.'
    },
    {
      question: 'How do you say "I want to go to Japan"?',
      options: ['日本へ行きたいです。', '日本へ行きますたい。', '日本へ行ったです。', '日本へ行くたいです。'],
      correctIndex: 0,
      explanation: '行きます → 行きたいです (I want to go).'
    },
    {
      question: 'How do you say "I didn\'t want to buy it" (past negative)?',
      options: ['買いたくなかったです (kaitakunakatta desu)', '買いたくないでした', '買いませんでしたい', '買いたくありませんでした'],
      correctIndex: 0,
      explanation: 'Past negative of 〜たい is 〜たくなかったです.'
    },
    {
      question: 'What is the natural response to accept an invitation like "映画を見ませんか"?',
      options: ['いいですね、見ましょう！(Sounds great, let\'s watch!)', 'いいえ、見ません', 'ごちそうさまでした', '初めまして'],
      correctIndex: 0,
      explanation: '「いいですね、〜ましょう」is the standard enthusiastic acceptance.'
    },
    {
      question: 'What does "どこへ行きたいですか" ask?',
      options: ['Where do you want to go?', 'When do you want to go?', 'Who wants to go?', 'Why are you going?'],
      correctIndex: 0,
      explanation: 'どこへ (where to) + 行きたいですか (do you want to go?).'
    }
  ],

  // ─── LESSON 5-1: Permission & Prohibition (〜てもいい) ──────────────────
  'lesson-n5-5-1': [
    {
      question: 'How do you politely ask for permission ("May I take a photo here?")?',
      options: ['ここで写真を撮ってもいいですか。', 'ここで写真を撮ってはいけません。', 'ここで写真を撮ってください。', 'ここで写真を撮りません。'],
      correctIndex: 0,
      explanation: '[Verb Te-form] + もいいですか asks "May I / Is it OK if I do...?".'
    },
    {
      question: 'How do you express a strict prohibition ("You must not enter here")?',
      options: ['ここに入ってはいけません。', 'ここに入ってもいいです。', 'ここに入りましょう。', 'ここに入ってください。'],
      correctIndex: 0,
      explanation: '[Verb Te-form] + はいけません expresses strict prohibition ("must not").'
    },
    {
      question: 'What does "タバコを吸ってもいいですか" ask?',
      options: ['May I smoke a cigarette?', 'Do you smoke?', 'Please don\'t smoke.', 'Where is the smoking area?'],
      correctIndex: 0,
      explanation: '吸ってもいいですか asks permission to smoke.'
    },
    {
      question: 'How do you tell someone "Yes, you may / It is fine"?',
      options: ['はい、いいですよ。(Hai, ii desu yo)', 'いいえ、いけません', 'わかりません', '失礼します'],
      correctIndex: 0,
      explanation: '「はい、いいですよ」grants friendly permission.'
    },
    {
      question: 'In "〜てはいけません", how is the particle は pronounced?',
      options: ['wa', 'ha', 'ba', 'pa'],
      correctIndex: 0,
      explanation: 'The は in てはいけません is pronounced "wa".'
    },
    {
      question: 'Complete: "テスト中に辞書を ___ はいけません。"',
      options: ['使って (tsukatte)', '使う', '使います', '使わない'],
      correctIndex: 0,
      explanation: 'Prohibition requires the verb Te-form: 使って + はいけません.'
    },
    {
      question: 'What does "窓を開けてもいいですか" mean?',
      options: ['May I open the window?', 'Please close the window.', 'Is the window open?', 'Will it rain on the window?'],
      correctIndex: 0,
      explanation: '開ける (open) → 開けて + もいいですか.'
    },
    {
      question: 'How do you say "You must not take photos in this museum"?',
      options: ['この美術館で写真を撮ってはいけません。', 'この美術館で写真を撮ってもいいです。', 'この美術館で写真を撮りましょう。', 'この美術館で写真を撮りたいです。'],
      correctIndex: 0,
      explanation: '撮ってはいけません = must not take photos.'
    },
    {
      question: 'What is the softer, casual way of saying 〜てもいいです?',
      options: ['〜てもいいよ (~te mo ii yo)', '〜てはいかん', '〜ちゃだめ', '〜ないで'],
      correctIndex: 0,
      explanation: 'Adding the particle よ makes it friendly and reassuring.'
    },
    {
      question: 'Can you ask "座ってもいいですか" when asking to sit on an open seat?',
      options: ['Yes, it politely means "May I sit here?"', 'No, only used for standing', 'No, only for food', 'No, it is rude'],
      correctIndex: 0,
      explanation: '座る → 座って + もいいですか is the everyday polite way to ask to sit down.'
    }
  ],

  // ─── LESSON 5-2: Nai-Form & Negative Requests (〜ないでください) ─────────
  'lesson-n5-5-2': [
    {
      question: 'What is the Nai-form of the Group 1 verb 書く (kaku = to write)?',
      options: ['書かない (kakanai)', '書くない', '書しない', '書きてない'],
      correctIndex: 0,
      explanation: 'Group 1 verbs change the final "u" vowel sound to "a" + ない: kaku → kakanai.'
    },
    {
      question: 'What is the Nai-form of the Group 2 verb 食べる (taberu = to eat)?',
      options: ['食べない (tabenai)', '食べらない', '食べしない', '食わない'],
      correctIndex: 0,
      explanation: 'Group 2 (Ichidan) verbs simply drop る and add ない: 食べる → 食べない.'
    },
    {
      question: 'What are the Nai-forms of irregular verbs する (suru) and 来る (kuru)?',
      options: ['しない (shinai) and こない (konai)', 'すらない and きない', 'されない and こない', 'してない and きてない'],
      correctIndex: 0,
      explanation: 'する becomes しない, and 来る becomes こない (konai).'
    },
    {
      question: 'How do you politely ask someone "Please do not worry"?',
      options: ['心配しないでください (Shinpai shinaide kudasai)', '心配してはいけません', '心配しません', '心配しないで'],
      correctIndex: 0,
      explanation: '[Verb Nai-form] + でください makes a polite negative request ("please do not").'
    },
    {
      question: 'How do you say "Please do not forget your umbrella"?',
      options: ['傘を忘れないでください。', '傘を忘れてはいけません。', '傘を忘れなさい。', '傘を忘れなくてください。'],
      correctIndex: 0,
      explanation: '忘れる → 忘れない + でください.'
    },
    {
      question: 'What is the Nai-form of 飲む (nomu = to drink)?',
      options: ['飲まない (nomanai)', '飲めない', '飲みない', '飲まないで'],
      correctIndex: 0,
      explanation: '飲む → mu changes to ma + ない = 飲まない.'
    },
    {
      question: 'What is the Nai-form exception for the verb 買う (kau = to buy)?',
      options: ['買わない (kawanai)', '買あない', '買えない', '買いない'],
      correctIndex: 0,
      explanation: 'Verbs ending in a vowel う change to わ: 買う → 買わない (kawanai).'
    },
    {
      question: 'What does "ここで写真を撮らないでください" mean?',
      options: ['Please do not take photographs here.', 'Please take photographs here.', 'May I take photographs here?', 'Photographs are sold here.'],
      correctIndex: 0,
      explanation: '撮らないでください = please do not take (photos).'
    },
    {
      question: 'What is the plain negative form of ある (to exist - inanimate)?',
      options: ['ない (nai)', 'あらない', 'ありません', 'ありない'],
      correctIndex: 0,
      explanation: 'ある is an exception: its plain negative form is simply ない (nai).'
    },
    {
      question: 'How do you say "Please do not enter this room"?',
      options: ['この部屋に入らないでください。', 'この部屋に入ってください。', 'この部屋に入りません。', 'この部屋に入ってはいいです。'],
      correctIndex: 0,
      explanation: '入る (Group 1) → 入らない + でください.'
    }
  ],

  // ─── LESSON 5-3: Dictionary Form & Potential (〜ことができる) ─────────
  'lesson-n5-5-3': [
    {
      question: 'What is a verb\'s "Dictionary Form"?',
      options: ['The plain, unconjugated base form ending in a "u" sound (e.g. 食べる, 飲む)', 'The polite form ending in ます', 'The past form ending in た', 'The command form'],
      correctIndex: 0,
      explanation: 'The dictionary form is the fundamental plain form listed in Japanese dictionaries.'
    },
    {
      question: 'What does [Verb Dict-form] + ことができます mean?',
      options: ['I can do / It is possible to do [action]', 'I must do [action]', 'I want to do [action]', 'Please do [action]'],
      correctIndex: 0,
      explanation: 'こと turns the verb into a noun phrase ("the act of"), and ができます means "is possible / can do".'
    },
    {
      question: 'How do you say "I can speak Japanese"?',
      options: ['日本語を話すことができます。', '日本語を話すたいです。', '日本語を話してください。', '日本語を話しています。'],
      correctIndex: 0,
      explanation: '話す (dictionary form) + ことができます = can speak.'
    },
    {
      question: 'How do you ask "Can you swim?" in Japanese?',
      options: ['泳ぐことができますか。', '泳ぎますか。', '泳いでください。', '泳ぐたいですか。'],
      correctIndex: 0,
      explanation: '泳ぐ (to swim) + ことができますか (can you?).'
    },
    {
      question: 'How do you say "My hobby is listening to music"?',
      options: ['私の趣味は音楽を聴くことです。', '私の趣味は音楽を聴きます。', '私の趣味は音楽を聴くです。', '私の趣味は音楽を聴きたいです。'],
      correctIndex: 0,
      explanation: '〜ことです nominalizes the verb to mean "the hobby is [doing action]".'
    },
    {
      question: 'What is the negative of できます (cannot do)?',
      options: ['できません (dekimasen)', 'できたい', 'できませんでした', 'できるない'],
      correctIndex: 0,
      explanation: 'できます → できません (cannot do / not possible).'
    },
    {
      question: 'Complete: "カードで支払う ___ ができます。"',
      options: ['こと (koto)', 'もの (mono)', 'ひと (hito)', 'とき (toki)'],
      correctIndex: 0,
      explanation: 'The formula requires こと: [Verb Dict-form] + ことができます.'
    },
    {
      question: 'How do you say "You can exchange money at this bank"?',
      options: ['この銀行でお金を両替することができます。', 'この銀行でお金を両替してください。', 'この銀行でお金を両替したいです。', 'この銀行でお金を両替しました。'],
      correctIndex: 0,
      explanation: '両替する + ことができます = can exchange currency.'
    },
    {
      question: 'What is the dictionary form of the polite verb 買います (kaimasu = to buy)?',
      options: ['買う (kau)', '買える', '買った', '買い'],
      correctIndex: 0,
      explanation: '買います in dictionary form is 買う (kau).'
    },
    {
      question: 'What does "ピアノを弾くことができます" mean?',
      options: ['I can play the piano.', 'I want to buy a piano.', 'The piano is loud.', 'Please play the piano.'],
      correctIndex: 0,
      explanation: '弾く (to play string/keyboard instrument) + ことができます = can play.'
    }
  ],

  // ─── LESSON 5-4: Past Experience & Japanese Counters (〜たことがある) ──
  'lesson-n5-5-4': [
    {
      question: 'How do you express past life experience ("I have done [action] before")?',
      options: ['[Verb Ta-form] + ことがあります', '[Verb Te-form] + います', '[Verb Dict-form] + ことができます', '[Verb Stem] + たいです'],
      correctIndex: 0,
      explanation: 'The past Ta-form + ことがあります expresses having experienced an action in your life.'
    },
    {
      question: 'How does the Ta-form conjugate compared to the Te-form?',
      options: ['It conjugates identically to Te-form, just replacing "te/de" with "ta/da"', 'It has completely different rules', 'It always adds ました', 'It only works with Group 1'],
      correctIndex: 0,
      explanation: 'Every rule from the Te-form applies directly to the Ta-form: 待って → 待った, 飲んで → 飲んだ!'
    },
    {
      question: 'How do you say "I have been to Japan before"?',
      options: ['日本へ行ったことがあります。', '日本へ行きました。', '日本へ行っています。', '日本へ行きたいです。'],
      correctIndex: 0,
      explanation: '行く → 行った + ことがあります = have been before.'
    },
    {
      question: 'How do you ask someone "Have you ever eaten sushi?"',
      options: ['寿司を食べたことがありますか。', '寿司を食べますか。', '寿司を食べましたか。', '寿司を食べていますか。'],
      correctIndex: 0,
      explanation: '食べたことがありますか asks if they have the life experience of eating sushi.'
    },
    {
      question: 'If you have never done something before, how do you answer?',
      options: ['いいえ、一度もありません。(No, not even once.)', 'はい、あります', 'いいえ、食べました', 'はい、行きます'],
      correctIndex: 0,
      explanation: '「一度もありません」(Ichido mo arimasen) means "Not even once".'
    },
    {
      question: 'What are the general native Japanese counters for 1, 2, and 3 items?',
      options: ['ひとつ (1), ふたつ (2), みっつ (3)', 'いち (1), に (2), さん (3)', 'ひとり (1), ふたり (2), さんにん (3)', 'いっぽん (1), にほん (2), さんぼん (3)'],
      correctIndex: 0,
      explanation: 'General objects use the native counters: ひとつ, ふたつ, みっつ.'
    },
    {
      question: 'What counter is used for counting people (1 person, 2 people)?',
      options: ['ひとり (1人), ふたり (2人)', 'ひとつ, ふたつ', 'いっぴき, にひき', 'いちまい, にまい'],
      correctIndex: 0,
      explanation: 'People use ひとり (1 person) and ふたり (2 people), then 3+ adds 〜にん (さんにん, よにん).'
    },
    {
      question: 'How do you order "Two coffees and one cake, please"?',
      options: ['コーヒーを二つとケーキを一つください。', 'コーヒーを二人とケーキを一人ください。', 'コーヒーを二本とケーキを一枚ください。', 'コーヒーを二回とケーキを一回ください。'],
      correctIndex: 0,
      explanation: 'コーヒーを二つ (two coffees) + ケーキを一つ (one cake) + ください.'
    },
    {
      question: 'How do you list multiple activities using 〜たり〜たり (e.g. "I did things like reading and watching TV")?',
      options: ['本を読んだり、テレビを見たりしました。', '本を読んで、テレビを見ました。', '本を読むと、テレビを見るです。', '本を読みたい、テレビを見たいです。'],
      correctIndex: 0,
      explanation: '[Ta-form] + り, [Ta-form] + り します lists examples of non-exhaustive actions.'
    },
    {
      question: 'What does "富士山に登ったことがあります" mean?',
      options: ['I have climbed Mount Fuji before.', 'I will climb Mount Fuji tomorrow.', 'I want to climb Mount Fuji.', 'Please climb Mount Fuji.'],
      correctIndex: 0,
      explanation: '登る (to climb) → 登った + ことがあります = have climbed before.'
    }
  ]
};

// Export helper to retrieve 10 dedicated questions for any lesson
export function getLessonGrammar10Questions(lessonId: string): LessonGrammarQuestion[] {
  if (LESSON_GRAMMAR_QUIZZES[lessonId]) {
    return LESSON_GRAMMAR_QUIZZES[lessonId];
  }
  // Fallback to Lesson 1-1 if not found
  return LESSON_GRAMMAR_QUIZZES['lesson-n5-1-1'];
}
