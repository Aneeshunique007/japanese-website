// Comprehensive Database for Japanese Particle Speaking Practice
// 50 authentic, progressive sentences per particle (Easy -> Medium -> Hard)

export interface SpeakingSentence {
  id: number;
  japanese: string;
  romaji: string;
  english: string;
  level: 'easy' | 'medium' | 'hard';
  tip?: string;
}

export interface ParticleSpeakingLesson {
  id: string;
  particle: string;
  romaji: string;
  name: string;
  color: string;
  summary: string;
  grammarRule: string;
  nuanceExplanation: string;
  keyUsagePoints: string[];
  sentences: SpeakingSentence[];
}

export const SPEAKING_PARTICLES_DATA: ParticleSpeakingLesson[] = [
  // 1. は (wa) - Topic Marker
  {
    id: 'wa',
    particle: 'は',
    romaji: 'wa',
    name: 'Topic Marker (主題)',
    color: 'from-orange-500 to-amber-500',
    summary: 'Marks the topic of the sentence ("As for X, ..."). Written as "ha" (は) but pronounced "wa".',
    grammarRule: '[Topic / Noun] + は + [Description / Predicate]',
    nuanceExplanation: 'Use は when introducing what you are going to talk about. Everything that follows provides new information about this topic. Contrast with が, which highlights the specific subject performing an action.',
    keyUsagePoints: [
      'Pronounced "wa" only when used as a grammatical particle.',
      'Can indicate contrast: "りんごは好きですが、バナナは嫌いです" (I like apples, but as for bananas, I dislike them).',
      'Commonly used with personal pronouns: 私は (watashi wa), あなたは (anata wa).'
    ],
    sentences: [
      // Easy (1 - 15)
      { id: 1, japanese: '私は学生です。', romaji: 'Watashi wa gakusei desu.', english: 'I am a student.', level: 'easy', tip: 'Pronounce は smoothly as "wa".' },
      { id: 2, japanese: 'これは本です。', romaji: 'Kore wa hon desu.', english: 'This is a book.', level: 'easy' },
      { id: 3, japanese: '今日は晴れです。', romaji: 'Kyou wa hare desu.', english: 'Today is sunny.', level: 'easy' },
      { id: 4, japanese: '彼は先生です。', romaji: 'Kare wa sensei desu.', english: 'He is a teacher.', level: 'easy' },
      { id: 5, japanese: '猫は可愛いです。', romaji: 'Neko wa kawaii desu.', english: 'Cats are cute.', level: 'easy' },
      { id: 6, japanese: 'ここは東京です。', romaji: 'Koko wa Toukyou desu.', english: 'This place is Tokyo.', level: 'easy' },
      { id: 7, japanese: '明日は日曜日です。', romaji: 'Ashita wa nichiyoubi desu.', english: 'Tomorrow is Sunday.', level: 'easy' },
      { id: 8, japanese: '日本は島国です。', romaji: 'Nihon wa shimaguni desu.', english: 'Japan is an island nation.', level: 'easy' },
      { id: 9, japanese: '母は優しいです。', romaji: 'Haha wa yasashii desu.', english: 'My mother is kind.', level: 'easy' },
      { id: 10, japanese: '水は冷たいです。', romaji: 'Mizu wa tsumetai desu.', english: 'The water is cold.', level: 'easy' },
      { id: 11, japanese: '富士山は高いです。', romaji: 'Fujisan wa takai desu.', english: 'Mt. Fuji is high.', level: 'easy' },
      { id: 12, japanese: 'この林檎は甘いです。', romaji: 'Kono ringo wa amai desu.', english: 'This apple is sweet.', level: 'easy' },
      { id: 13, japanese: '彼女は親切です。', romaji: 'Kanojo wa shinsetsu desu.', english: 'She is kind.', level: 'easy' },
      { id: 14, japanese: 'あの店は安いです。', romaji: 'Ano mise wa yasui desu.', english: 'That shop is cheap.', level: 'easy' },
      { id: 15, japanese: '朝ごはんはパンです。', romaji: 'Asagohan wa pan desu.', english: 'Breakfast is bread.', level: 'easy' },
      // Medium (16 - 35)
      { id: 16, japanese: '私は毎日日本語を勉強します。', romaji: 'Watashi wa mainichi nihongo o benkyou shimasu.', english: 'I study Japanese every day.', level: 'medium' },
      { id: 17, japanese: '田中さんは来週大阪へ行きます。', romaji: 'Tanaka-san wa raishuu Oosaka e ikimasu.', english: 'Mr. Tanaka goes to Osaka next week.', level: 'medium' },
      { id: 18, japanese: 'お茶は飲みますが、コーヒーは飲みません。', romaji: 'Ocha wa nomimasu ga, koohii wa nomimasen.', english: 'I drink green tea, but I do not drink coffee.', level: 'medium', tip: 'Notice the contrasting は.' },
      { id: 19, japanese: '私の趣味はアニメを見ることです。', romaji: 'Watashi no shumi wa anime o miru koto desu.', english: 'My hobby is watching anime.', level: 'medium' },
      { id: 20, japanese: 'このパソコンはとても便利です。', romaji: 'Kono pasokon wa totemo benri desu.', english: 'This personal computer is very convenient.', level: 'medium' },
      { id: 21, japanese: '昨日は一日中雨が降っていました。', romaji: 'Kinou wa ichinichijuu ame ga futte imashita.', english: 'Yesterday it was raining all day long.', level: 'medium' },
      { id: 22, japanese: '週末は家族と一緒に買い物をします。', romaji: 'Shuumatsu wa kazoku to issho ni kaimono o shimasu.', english: 'On weekends, I do shopping together with my family.', level: 'medium' },
      { id: 23, japanese: '私の会社は朝九時から始まります。', romaji: 'Watashi no kaisha wa asa kuji kara hajimarimasu.', english: 'My company starts from 9 AM.', level: 'medium' },
      { id: 24, japanese: '日本語の文法は難しくないです。', romaji: 'Nihongo no bunpou wa muzukashiku nai desu.', english: 'Japanese grammar is not difficult.', level: 'medium' },
      { id: 25, japanese: '山田先生は英語も上手に話せます。', romaji: 'Yamada sensei wa eigo mo jouzu ni hanasemasu.', english: 'Teacher Yamada can also speak English well.', level: 'medium' },
      { id: 26, japanese: 'この部屋は広くて明るいです。', romaji: 'Kono heya wa hirokute akarui desu.', english: 'This room is spacious and bright.', level: 'medium' },
      { id: 27, japanese: '父は車を運転するのが好きです。', romaji: 'Chichi wa kuruma o unten suru no ga suki desu.', english: 'My father likes driving cars.', level: 'medium' },
      { id: 28, japanese: '図書館は静かに本を読む場所です。', romaji: 'Toshokan wa shizuka ni hon o yomu basho desu.', english: 'A library is a place where you read books quietly.', level: 'medium' },
      { id: 29, japanese: '私の将来の夢は日本で働くことです。', romaji: 'Watashi no shourai no yume wa Nihon de hataraku koto desu.', english: 'My future dream is to work in Japan.', level: 'medium' },
      { id: 30, japanese: 'この靴は履きやすくて軽いです。', romaji: 'Kono kutsu wa hakiyasukute karui desu.', english: 'These shoes are easy to wear and light.', level: 'medium' },
      { id: 31, japanese: '今日は友達の誕生日パーティーです。', romaji: 'Kyou wa tomodachi no tanjoubi paatii desu.', english: 'Today is my friend’s birthday party.', level: 'medium' },
      { id: 32, japanese: '春は桜の花がとても綺麗です。', romaji: 'Haru wa sakura no hana ga totemo kirei desu.', english: 'In spring, cherry blossoms are very beautiful.', level: 'medium' },
      { id: 33, japanese: '弟は毎晩遅くまでゲームをしています。', romaji: 'Otouto wa maiban osoku made geemu o shite imasu.', english: 'My younger brother plays games until late every night.', level: 'medium' },
      { id: 34, japanese: 'あのレストランは料理がとても美味しいです。', romaji: 'Ano resutoran wa ryouri ga totemo oishii desu.', english: 'As for that restaurant, the food is very delicious.', level: 'medium' },
      { id: 35, japanese: '運動することは健康に良いです。', romaji: 'Undou suru koto wa kenkou ni ii desu.', english: 'Exercising is good for health.', level: 'medium' },
      // Hard (36 - 50)
      { id: 36, japanese: '日本での生活は刺激的で学ぶことが多いです。', romaji: 'Nihon de no seikatsu wa shigekiteki de manabu koto ga ooi desu.', english: 'Life in Japan is exciting and there is much to learn.', level: 'hard' },
      { id: 37, japanese: '時間は誰にとっても最も貴重な資源です。', romaji: 'Jikan wa dare ni totte mo mottomo kichou na shigen desu.', english: 'Time is the most valuable resource for anyone.', level: 'hard' },
      { id: 38, japanese: '彼が言っていることは本当に正しいでしょうか。', romaji: 'Kare ga itte iru koto wa hontou ni tadashii deshou ka.', english: 'Is what he is saying really correct?', level: 'hard' },
      { id: 39, japanese: '失敗することは成功への第一歩だと信じています。', romaji: 'Shippai suru koto wa seikou e no daiippo da to shinjite imasu.', english: 'I believe making mistakes is the first step toward success.', level: 'hard' },
      { id: 40, japanese: '日本の伝統文化は長い歴史の中で育まれてきました。', romaji: 'Nihon no dentou bunka wa nagai rekishi no naka de hagukumarete kimashita.', english: 'Traditional Japanese culture has been nurtured through a long history.', level: 'hard' },
      { id: 41, japanese: '外国語を習得するには毎日の継続が不可欠です。', romaji: 'Gaikokugo o shuutoku suru ni wa mainichi no keizoku ga fukaketsu desu.', english: 'In order to master a foreign language, daily continuity is indispensable.', level: 'hard' },
      { id: 42, japanese: '現代社会においては情報通信技術が欠かせません。', romaji: 'Gendai shakai ni oite wa jouhou tsuushin gijutsu ga kakasemasen.', english: 'In modern society, information and communication technology is essential.', level: 'hard' },
      { id: 43, japanese: '環境問題の解決は地球全体の重要な課題です。', romaji: 'Kankyou mondai no kaiketsu wa chikyuu zentai no juuyou na kadai desu.', english: 'Resolving environmental issues is an important agenda for the whole planet.', level: 'hard' },
      { id: 44, japanese: '相手の立場に立って考えることは思いやりの基本です。', romaji: 'Aite no tachiba ni tatte kangaeru koto wa omoiyari no kihon desu.', english: 'Putting yourself in another’s shoes is the basis of empathy.', level: 'hard' },
      { id: 45, japanese: '日系企業でのビジネスマナーは礼儀正しさが重視されます。', romaji: 'Nikkei kigyou de no bijinesu manaa wa reigitadashisa ga juushi saremasu.', english: 'In Japanese companies, business manners place strong emphasis on courtesy.', level: 'hard' },
      { id: 46, japanese: '人工知能の発展は私たちの働き方を大きく変えつつあります。', romaji: 'Jinkou chinou no hatten wa watashitachi no hatarakikata o ookiku kaetsutsu arimasu.', english: 'The development of AI is rapidly transforming the way we work.', level: 'hard' },
      { id: 47, japanese: 'どんな困難があっても、決して諦めない姿勢が大切です。', romaji: 'Donna konnan ga atte mo, kesshite akiramenai shisei ga taisetsu desu.', english: 'No matter what hardships arise, an attitude of never giving up is crucial.', level: 'hard' },
      { id: 48, japanese: '読書は知識を深めるだけでなく視野を広げてくれます。', romaji: 'Dokusho wa chishiki o fukameru dake de naku shiya o hirogete kuremasu.', english: 'Reading not only deepens knowledge but also broadens our perspective.', level: 'hard' },
      { id: 49, japanese: 'お客様の期待に応える製品を提供することが当社の使命です。', romaji: 'Okyakusama no kitai ni kotaeru seihin o teikyou suru koto ga tousha no shimei desu.', english: 'Providing products that satisfy customer expectations is our company mission.', level: 'hard' },
      { id: 50, japanese: '異文化との交流は自己の価値観を再発見する貴重な機会です。', romaji: 'Ibunkatokouryuu wa jiko no kachikan o saihakken suru kichou na kikai desu.', english: 'Intercultural exchange is a precious opportunity to rediscover our own values.', level: 'hard' }
    ]
  },

  // 2. が (ga) - Subject & Identifier Marker
  {
    id: 'ga',
    particle: 'が',
    romaji: 'ga',
    name: 'Subject Marker (主語・特定)',
    color: 'from-emerald-500 to-teal-500',
    summary: 'Marks the grammatical subject, indicates new information, or expresses likes, desires, and abilities.',
    grammarRule: '[Subject / Specific Noun] + が + [Action / Adjective / Verb]',
    nuanceExplanation: 'が highlights WHO or WHAT specifically. It is also used before adjectives of preference (好き/嫌い), ability (できる/上手), and sensory perception (見える/聞こえる).',
    keyUsagePoints: [
      'Used for abilities: 日本語が話せます (I can speak Japanese).',
      'Used for desires: 水が飲みたいです (I want to drink water).',
      'Used for existence: 部屋に犬がいます (There is a dog in the room).'
    ],
    sentences: [
      // Easy (1 - 15)
      { id: 1, japanese: '雨が降っています。', romaji: 'Ame ga futte imasu.', english: 'Rain is falling.', level: 'easy' },
      { id: 2, japanese: '花が咲きました。', romaji: 'Hana ga sakimashita.', english: 'Flowers have bloomed.', level: 'easy' },
      { id: 3, japanese: '犬が好きです。', romaji: 'Inu ga suki desu.', english: 'I like dogs.', level: 'easy' },
      { id: 4, japanese: '猫がいます。', romaji: 'Neko ga imasu.', english: 'There is a cat.', level: 'easy' },
      { id: 5, japanese: '机の上にペンがあります。', romaji: 'Tsukue no ue ni pen ga arimasu.', english: 'There is a pen on the desk.', level: 'easy' },
      { id: 6, japanese: '日本語が分かります。', romaji: 'Nihongo ga wakarimasu.', english: 'I understand Japanese.', level: 'easy' },
      { id: 7, japanese: '寿司が食べたいです。', romaji: 'Sushi ga tabetai desu.', english: 'I want to eat sushi.', level: 'easy' },
      { id: 8, japanese: 'お腹が空きました。', romaji: 'Onaka ga sukimashita.', english: 'I am hungry (Stomach became empty).', level: 'easy' },
      { id: 9, japanese: '喉が渇きました。', romaji: 'Nodo ga kawakimashita.', english: 'I am thirsty.', level: 'easy' },
      { id: 10, japanese: '頭が痛いです。', romaji: 'Atama ga itai desu.', english: 'My head hurts.', level: 'easy' },
      { id: 11, japanese: '風が強いです。', romaji: 'Kaze ga tsuyoi desu.', english: 'The wind is strong.', level: 'easy' },
      { id: 12, japanese: '誰が来ましたか。', romaji: 'Dare ga kimashita ka.', english: 'Who came?', level: 'easy' },
      { id: 13, japanese: '星が輝いています。', romaji: 'Hoshi ga kagayaite imasu.', english: 'Stars are shining.', level: 'easy' },
      { id: 14, japanese: '水が冷たいです。', romaji: 'Mizu ga tsumetai desu.', english: 'The water is cold.', level: 'easy' },
      { id: 15, japanese: '鳥が飛んでいます。', romaji: 'Tori ga tonde imasu.', english: 'A bird is flying.', level: 'easy' },
      // Medium (16 - 35)
      { id: 16, japanese: '私はピアノを弾くことができます。', romaji: 'Watashi wa piano o hiku koto ga dekimasu.', english: 'I am able to play the piano.', level: 'medium' },
      { id: 17, japanese: '外から鳥の声が聞こえます。', romaji: 'Soto kara tori no koe ga kikoemasu.', english: 'I can hear bird chirping from outside.', level: 'medium' },
      { id: 18, japanese: '遠くに富士山が見えます。', romaji: 'Tooku ni Fujisan ga miemasu.', english: 'Mt. Fuji can be seen in the distance.', level: 'medium' },
      { id: 19, japanese: '彼が昨日言った言葉が忘れられません。', romaji: 'Kare ga kinou itta kotoba ga wasureraremasen.', english: 'I cannot forget the words he said yesterday.', level: 'medium' },
      { id: 20, japanese: 'この料理はいい匂いがします。', romaji: 'Kono ryouri wa ii nioi ga shimasu.', english: 'This dish smells good.', level: 'medium' },
      { id: 21, japanese: '新しいスマートフォンの調子が良いです。', romaji: 'Atarashii sumaatofon no choushi ga ii desu.', english: 'My new smartphone condition is good.', level: 'medium' },
      { id: 22, japanese: '電車が遅れて授業に遅刻しました。', romaji: 'Densha ga okurete jugyou ni chikoku shimashita.', english: 'The train was delayed and I was late for class.', level: 'medium' },
      { id: 23, japanese: 'どちらのシャツが似合いますか。', romaji: 'Dochira no shatsu ga niaimasu ka.', english: 'Which shirt suits me better?', level: 'medium' },
      { id: 24, japanese: '何が一番好きですか。', romaji: 'Nani ga ichiban suki desu ka.', english: 'What do you like the most?', level: 'medium' },
      { id: 25, japanese: '春になると桜の花が咲き始めます。', romaji: 'Haru ni naru to sakura no hana ga sakihajimemasu.', english: 'When spring comes, cherry blossoms begin to bloom.', level: 'medium' },
      { id: 26, japanese: '急に雨が降り出しました。', romaji: 'Kyuu ni ame ga furidashimashita.', english: 'It suddenly began raining.', level: 'medium' },
      { id: 27, japanese: 'テストの結果がとても心配です。', romaji: 'Tesuto no kekka ga totemo shinpai desu.', english: 'I am very worried about the test results.', level: 'medium' },
      { id: 28, japanese: '私には兄弟が三人います。', romaji: 'Watashi ni wa kyoudai ga sannin imasu.', english: 'I have three siblings.', level: 'medium' },
      { id: 29, japanese: '彼が作ったケーキがとても美味しいです。', romaji: 'Kare ga tsukutta keeki ga totemo oishii desu.', english: 'The cake he made is very delicious.', level: 'medium' },
      { id: 30, japanese: '日本語の漢字を覚えるのが得意です。', romaji: 'Nihongo no kanji o oboeru no ga tokui desu.', english: 'I am good at memorizing Japanese kanji.', level: 'medium' },
      { id: 31, japanese: '空がだんだん暗くなってきました。', romaji: 'Sora ga dandan kuraku natte kimashita.', english: 'The sky has gradually grown darker.', level: 'medium' },
      { id: 32, japanese: '彼が次のリーダーになる予定です。', romaji: 'Kare ga tsugi no riidaa ni naru yotei desu.', english: 'He is scheduled to become the next leader.', level: 'medium' },
      { id: 33, japanese: 'どこかいい旅行先がありますか。', romaji: 'Dokoka ii ryokousaki ga arimasu ka.', english: 'Is there any good travel destination?', level: 'medium' },
      { id: 34, japanese: 'この映画は音楽が素晴らしいです。', romaji: 'Kono eiga wa ongaku ga subarashii desu.', english: 'The music in this movie is wonderful.', level: 'medium' },
      { id: 35, japanese: '明日会議があることを思い出しました。', romaji: 'Ashita kaigi ga aru koto o omoidashimashita.', english: 'I remembered that there is a meeting tomorrow.', level: 'medium' },
      // Hard (36 - 50)
      { id: 36, japanese: '私たちが目指すべき目標が明確になりました。', romaji: 'Watashitachi ga mezasubeki mokuhyou ga meikaku ni narimashita.', english: 'The goal we should aim for has become clear.', level: 'hard' },
      { id: 37, japanese: '長年の努力が実を結んで合格できました。', romaji: 'Naganen no doryoku ga mi o musunde goukaku dekimashita.', english: 'Years of effort bore fruit and I was able to pass.', level: 'hard' },
      { id: 38, japanese: 'この問題には多くの要因が絡み合っています。', romaji: 'Kono mondai ni wa ooku no youin ga karamiatte imasu.', english: 'Many factors are intertwined in this issue.', level: 'hard' },
      { id: 39, japanese: '彼が提案したアイディアが全員に支持されました。', romaji: 'Kare ga teian shita aidia ga zen\'in ni shiji saremashita.', english: 'The idea he proposed was supported by everyone.', level: 'hard' },
      { id: 40, japanese: '経済状況の悪化が企業活動に影響を与えています。', romaji: 'Keizai joukyou no akka ga kigyou katsudou ni eikyou o ataete imasu.', english: 'Deterioration of economic conditions is impacting corporate activities.', level: 'hard' },
      { id: 41, japanese: 'お客様から嬉しい感謝の声が届きました。', romaji: 'Okyakusama kara ureshii kansha no koe ga todokimashita.', english: 'Heartwarming words of gratitude arrived from our clients.', level: 'hard' },
      { id: 42, japanese: '技術革新のスピードが急速に加速しています。', romaji: 'Gijutsu kakushin no supiido ga kyuusoku ni kasoku shite imasu.', english: 'The pace of technological innovation is rapidly accelerating.', level: 'hard' },
      { id: 43, japanese: '全員が納得できる解決策を見つける必要があります。', romaji: 'Zen\'in ga nattoku dekiru kaiketsusaku o mitsukeru hitsuyou ga arimasu.', english: 'There is a need to find a solution that everyone can agree upon.', level: 'hard' },
      { id: 44, japanese: '予期せぬトラブルが発生しましたが無事に対処しました。', romaji: 'Yokisenu toraburu ga hassei shimashita ga buji ni taisho shimashita.', english: 'An unexpected trouble occurred, but we handled it safely.', level: 'hard' },
      { id: 45, japanese: '信頼関係を築くことがビジネスの最も重要な土台です。', romaji: 'Shinrai kankei o kizuku koto ga bijinesu no mottomo juuyou na dodai desu.', english: 'Building trustworthy relationships is the most crucial foundation of business.', level: 'hard' },
      { id: 46, japanese: '社員一人ひとりの成長が会社の成長につながります。', romaji: 'Shain hitorihitori no seichou ga kaisha no seichou ni tsunagarimasu.', english: 'The personal growth of every employee leads to the company\'s growth.', level: 'hard' },
      { id: 47, japanese: '自然災害への備えが今こそ求められています。', romaji: 'Shizen saigai e no sonae ga ima koso motomerarete imasu.', english: 'Preparedness for natural disasters is required now more than ever.', level: 'hard' },
      { id: 48, japanese: '最新の研究成果が世界中の学者から注目されています。', romaji: 'Saishin no kenkyuu seika ga sekaijuu no gakusha kara chuumoku sarete imasu.', english: 'The latest research findings are attracting attention from scholars worldwide.', level: 'hard' },
      { id: 49, japanese: '彼が示したリーダーシップがチームを勝利へ導きました。', romaji: 'Kare ga shimeshita riidaashippu ga chiimu o shouri e michibikimashita.', english: 'The leadership he demonstrated guided the team to victory.', level: 'hard' },
      { id: 50, japanese: '多様な価値観を認め合う姿勢がこれからの社会に不可欠です。', romaji: 'Tayou na kachikan o mitomeau shisei ga korekara no shakai ni fukaketsu desu.', english: 'An attitude of acknowledging diverse values is vital for future society.', level: 'hard' }
    ]
  },

  // 3. を (o) - Direct Object Marker
  {
    id: 'o',
    particle: 'を',
    romaji: 'o (wo)',
    name: 'Direct Object Marker (目的語)',
    color: 'from-blue-500 to-indigo-500',
    summary: 'Marks the recipient or object directly affected by an action verb, or marks a space being traversed (e.g. crossing a road).',
    grammarRule: '[Direct Object Noun] + を + [Transitive Verb]',
    nuanceExplanation: 'Written as を (wo) in Hiragana, but universally pronounced as "o". It shows what receives the action of the verb (eating food, drinking tea, reading books). It also marks motion through/along spaces (空を飛ぶ, 道を歩く).',
    keyUsagePoints: [
      'Pronounced "o", never "wo" in modern spoken Japanese.',
      'Always paired with transitive verbs (他動詞).',
      'Marks passage through a space: 橋を渡る (to cross a bridge), 街を歩く (to walk through the town).'
    ],
    sentences: [
      // Easy (1 - 15)
      { id: 1, japanese: '水を飲みます。', romaji: 'Mizu o nomimasu.', english: 'I drink water.', level: 'easy' },
      { id: 2, japanese: 'ご飯を食べます。', romaji: 'Gohan o tabemasu.', english: 'I eat a meal.', level: 'easy' },
      { id: 3, japanese: '本を読みます。', romaji: 'Hon o yomimasu.', english: 'I read a book.', level: 'easy' },
      { id: 4, japanese: '手紙を書きます。', romaji: 'Tegami o kakimasu.', english: 'I write a letter.', level: 'easy' },
      { id: 5, japanese: 'テレビを見ます。', romaji: 'Terebi o mimasu.', english: 'I watch television.', level: 'easy' },
      { id: 6, japanese: '音楽を聞きます。', romaji: 'Ongaku o kikimasu.', english: 'I listen to music.', level: 'easy' },
      { id: 7, japanese: '日本語を話します。', romaji: 'Nihongo o hanashimasu.', english: 'I speak Japanese.', level: 'easy' },
      { id: 8, japanese: '靴を買いました。', romaji: 'Kutsu o kaimashita.', english: 'I bought shoes.', level: 'easy' },
      { id: 9, japanese: '写真を撮ります。', romaji: 'Shashin o torimasu.', english: 'I take a photograph.', level: 'easy' },
      { id: 10, japanese: '窓を開けてください。', romaji: 'Mado o akete kudasai.', english: 'Please open the window.', level: 'easy' },
      { id: 11, japanese: 'ドアを閉めます。', romaji: 'Doa o shimemasu.', english: 'I close the door.', level: 'easy' },
      { id: 12, japanese: '電気をつけます。', romaji: 'Denki o tsukemasu.', english: 'I turn on the light.', level: 'easy' },
      { id: 13, japanese: '荷物を持ちます。', romaji: 'Nimotsu o mochimasu.', english: 'I hold the luggage.', level: 'easy' },
      { id: 14, japanese: '服を着ます。', romaji: 'Fuku o kimasu.', english: 'I wear clothes.', level: 'easy' },
      { id: 15, japanese: '歌を歌います。', romaji: 'Uta o utaimasu.', english: 'I sing a song.', level: 'easy' },
      // Medium (16 - 35)
      { id: 16, japanese: '毎朝公園を散歩します。', romaji: 'Maiasa kouen o sanpo shimasu.', english: 'Every morning I take a walk through the park.', level: 'medium', tip: 'Notice を indicating space traversed.' },
      { id: 17, japanese: '信号のある交差点を渡ります。', romaji: 'Shingou no aru kousaten o watarimasu.', english: 'I cross the intersection with traffic lights.', level: 'medium' },
      { id: 18, japanese: '来週の会議の資料を準備します。', romaji: 'Raishuu no kaigi no shiryou o junbi shimasu.', english: 'I prepare materials for next week’s meeting.', level: 'medium' },
      { id: 19, japanese: '新しい漢字を五十個覚えました。', romaji: 'Atarashii kanji o gojukko oboemashita.', english: 'I memorized fifty new kanji.', level: 'medium' },
      { id: 20, japanese: '大切な約束を守ります。', romaji: 'Taisetsu na yakusoku o mamorimasu.', english: 'I keep an important promise.', level: 'medium' },
      { id: 21, japanese: '週末に部屋の掃除をしました。', romaji: 'Shuumatsu ni heya no souji o shimashita.', english: 'I did the cleaning of my room on the weekend.', level: 'medium' },
      { id: 22, japanese: '友達にメールを送りました。', romaji: 'Tomodachi ni meeru o okurimashita.', english: 'I sent an email to my friend.', level: 'medium' },
      { id: 23, japanese: '鳥が青い空を自由に飛んでいます。', romaji: 'Tori ga aoi sora o jiyuu ni tonde imasu.', english: 'Birds are flying freely through the blue sky.', level: 'medium' },
      { id: 24, japanese: '電車の切符を二枚買いました。', romaji: 'Densha no kippu o nimai kaimashita.', english: 'I bought two train tickets.', level: 'medium' },
      { id: 25, japanese: '図書館で英語の辞書を借りました。', romaji: 'Toshokan de eigo no jisho o karimashita.', english: 'I borrowed an English dictionary at the library.', level: 'medium' },
      { id: 26, japanese: '母の日に花束をプレゼントしました。', romaji: 'Haha no hi ni hanataba o purezento shimashita.', english: 'I presented a flower bouquet on Mother’s Day.', level: 'medium' },
      { id: 27, japanese: '忘れ物を探しています。', romaji: 'Wasuremono o sagashite imasu.', english: 'I am searching for my lost item.', level: 'medium' },
      { id: 28, japanese: '朝のニュースを見て天気を確かめました。', romaji: 'Asa no nyuusu o mite tenki o tashikamemashita.', english: 'I watched the morning news and checked the weather.', level: 'medium' },
      { id: 29, japanese: 'スマホの充電器を忘れました。', romaji: 'Sumaho no juudenki o wasuremashita.', english: 'I forgot my smartphone charger.', level: 'medium' },
      { id: 30, japanese: '先生に質問を聞きました。', romaji: 'Sensei ni shitsumon o kikimashita.', english: 'I asked a question to the teacher.', level: 'medium' },
      { id: 31, japanese: '美味しい日本料理の作り方を習いました。', romaji: 'Oishii nihon ryouri no tsukurikata o naraimashita.', english: 'I learned how to make delicious Japanese food.', level: 'medium' },
      { id: 32, japanese: '薬を飲んで早く寝てください。', romaji: 'Kusuri o nonde hayaku nete kudasai.', english: 'Please take medicine and go to sleep early.', level: 'medium' },
      { id: 33, japanese: '大学で経済学を専攻しています。', romaji: 'Daigaku de keizaigaku o senkou shite imasu.', english: 'I am majoring in economics at university.', level: 'medium' },
      { id: 34, japanese: '車を止めて景色を眺めました。', romaji: 'Kuruma o tomete keshiki o nagamemashita.', english: 'I stopped the car and gazed at the scenery.', level: 'medium' },
      { id: 35, japanese: 'パスポートを無くさないように注意してください。', romaji: 'Pasupooto o nakusanai you ni chuui shite kudasai.', english: 'Please be careful not to lose your passport.', level: 'medium' },
      // Hard (36 - 50)
      { id: 36, japanese: '新しいプロジェクトを円滑に進めるため計画を立てました。', romaji: 'Atarashii purojekuto o enkatsu ni susumeru tame keikaku o tatemashita.', english: 'I made a plan in order to proceed with the new project smoothly.', level: 'hard' },
      { id: 37, japanese: '顧客の様々な要望を的確に把握することが大切です。', romaji: 'Kokyaku no samazama na youbou o tekikaku ni haaku suru koto ga taisetsu desu.', english: 'It is important to accurately understand various customer demands.', level: 'hard' },
      { id: 38, japanese: '大学院で人工知能の先端技術を研究しています。', romaji: 'Daigakuin de jinkou chinou no sentan gijutsu o kenkyuu shite imasu.', english: 'I am researching cutting-edge AI technologies in graduate school.', level: 'hard' },
      { id: 39, japanese: '私たちは地球温暖化を防ぐ対策を講じる必要があります。', romaji: 'Watashitachi wa chikyuu ondanka o fusegu taisaku o koujiru hitsuyou ga arimasu.', english: 'We need to implement measures to prevent global warming.', level: 'hard' },
      { id: 40, japanese: '過去の失敗を教訓にして次の挑戦に挑みます。', romaji: 'Kako no shippai o kyoukun ni shite tsugi no chousen ni idomimasu.', english: 'Using past failures as lessons, I will take on the next challenge.', level: 'hard' },
      { id: 41, japanese: '複雑なプログラムのバグを特定し修正しました。', romaji: 'Fukuzatsu na puroguramu no bagu o tokutei shi shuusei shimashita.', english: 'I identified and fixed bugs in the complex program.', level: 'hard' },
      { id: 42, japanese: 'グローバルな市場での競争力を高める努力を続けています。', romaji: 'Guroobaru na shijou de no kyousouryoku o takameru doryoku o tsuzukete imasu.', english: 'We continue efforts to boost competitiveness in the global market.', level: 'hard' },
      { id: 43, japanese: 'プレゼンテーションの要点を簡潔にまとめました。', romaji: 'Purezenteeshon no youten o kanketsu ni matamemashita.', english: 'I summarized the key points of the presentation concisely.', level: 'hard' },
      { id: 44, japanese: '日本の労働環境や雇用制度を詳しく調べました。', romaji: 'Nihon no roudou kankyou ya koyou seido o kuwashiku shirabemashita.', english: 'I investigated Japan’s working environment and employment system in detail.', level: 'hard' },
      { id: 45, japanese: 'チーム全員の意見を尊重しながら意思決定を行いました。', romaji: 'Chiimu zen\'in no iken o sonchou shinagara ishi kettei o okonaimashita.', english: 'I made the decision while respecting opinions of every team member.', level: 'hard' },
      { id: 46, japanese: 'セキュリティ上の脆弱性を速やかに解消しました。', romaji: 'Sekyuriti jou no zeijakusei o sumiyaka ni kaishou shimashita.', english: 'We resolved security vulnerabilities promptly.', level: 'hard' },
      { id: 47, japanese: '相手の感情を傷つけないよう慎重に言葉を選びました。', romaji: 'Aite no kanjou o kizutsukenai you shinchou ni kotoba o erabimashita.', english: 'I chose words cautiously so as not to hurt the other party\'s feelings.', level: 'hard' },
      { id: 48, japanese: '困難な交渉を成功させて大型契約を結びました。', romaji: 'Konnan na koushou o seikou sasete oogata keiyaku o musubimashita.', english: 'We succeeded in difficult negotiations and concluded a major contract.', level: 'hard' },
      { id: 49, japanese: '自らの限界を決めつけず、常に向上心を忘れません。', romaji: 'Mizukara no genkai o kimetsukezu, tsuneni koujoushin o wasuremasen.', english: 'Without assuming my own limits, I never forget the drive to improve.', level: 'hard' },
      { id: 50, japanese: '社会に貢献できる価値あるサービスを創造していきます。', romaji: 'Shakai ni kouken dekiru kachi aru saabisu o souzou shite ikimasu.', english: 'We will create valuable services that can contribute to society.', level: 'hard' }
    ]
  },

  // 4. に (ni) - Destination, Time, Target & Indirect Object
  {
    id: 'ni',
    particle: 'に',
    romaji: 'ni',
    name: 'Target / Time / Destination (場所・時間・対象)',
    color: 'from-violet-500 to-purple-500',
    summary: 'Marks specific points in time, destinations of motion verbs, locations of existence, and indirect objects.',
    grammarRule: '[Time / Destination / Person] + に + [Verb]',
    nuanceExplanation: 'に is the particle of precision. It pinpoints a specific time (7時に), a final destination (東京に行く), an indirect recipient (友達に渡す), or location of static being (部屋にいる).',
    keyUsagePoints: [
      'Specific time with numbers: 7時に起きます (I wake up at 7:00).',
      'Destination of motion: 日本に行きます (I go to Japan).',
      'Location of existence (with いる/ある): 机の上にあります (It is on the desk).'
    ],
    sentences: [
      // Easy (1 - 15)
      { id: 1, japanese: '七時に起きます。', romaji: 'Shichiji ni okimasu.', english: 'I wake up at seven o’clock.', level: 'easy' },
      { id: 2, japanese: '学校に行きます。', romaji: 'Gakkou ni ikimasu.', english: 'I go to school.', level: 'easy' },
      { id: 3, japanese: '東京に着きました。', romaji: 'Toukyou ni tsukimashita.', english: 'I arrived in Tokyo.', level: 'easy' },
      { id: 4, japanese: '部屋に猫がいます。', romaji: 'Heya ni neko ga imasu.', english: 'There is a cat in the room.', level: 'easy' },
      { id: 5, japanese: '友達に会います。', romaji: 'Tomodachi ni aimasu.', english: 'I meet a friend.', level: 'easy' },
      { id: 6, japanese: '椅子に座ってください。', romaji: 'Isu ni suwatte kudasai.', english: 'Please sit on the chair.', level: 'easy' },
      { id: 7, japanese: '電車に乗ります。', romaji: 'Densha ni norimasu.', english: 'I get on the train.', level: 'easy' },
      { id: 8, japanese: '先生に本をあげました。', romaji: 'Sensei ni hon o agemashita.', english: 'I gave a book to the teacher.', level: 'easy' },
      { id: 9, japanese: '日本に来ました。', romaji: 'Nihon ni kimashita.', english: 'I came to Japan.', level: 'easy' },
      { id: 10, japanese: '母に電話をかけます。', romaji: 'Haha ni denwa o kakemasu.', english: 'I make a phone call to my mother.', level: 'easy' },
      { id: 11, japanese: '日曜日に買い物へ行きます。', romaji: 'Nichiyoubi ni kaimono e ikimasu.', english: 'I go shopping on Sunday.', level: 'easy' },
      { id: 12, japanese: '机の上に置きました。', romaji: 'Tsukue no ue ni okimashita.', english: 'I placed it on the desk.', level: 'easy' },
      { id: 13, japanese: '友達に手紙を書きました。', romaji: 'Tomodachi ni tegami o kakimashita.', english: 'I wrote a letter to my friend.', level: 'easy' },
      { id: 14, japanese: '午後三時に会いましょう。', romaji: 'Gogo sanji ni aimashou.', english: 'Let’s meet at 3:00 PM.', level: 'easy' },
      { id: 15, japanese: '家に帰ります。', romaji: 'Ie ni kaerimasu.', english: 'I return home.', level: 'easy' },
      // Medium (16 - 35)
      { id: 16, japanese: '毎朝八時半に会社へ出勤します。', romaji: 'Maiasa hachijihan ni kaisha e shukkin shimasu.', english: 'Every morning at 8:30 I arrive at the company for work.', level: 'medium' },
      { id: 17, japanese: '誕生日に友達からプレゼントをもらいました。', romaji: 'Tanjoubi ni tomodachi kara purezento o moraimashita.', english: 'On my birthday, I received a gift from my friend.', level: 'medium' },
      { id: 18, japanese: '来年の夏休みに北海道へ旅行に行く予定です。', romaji: 'Rainen no natsuyasumi ni Hokkaidou e ryokou ni iku yotei desu.', english: 'I plan to go on a trip to Hokkaido during next year’s summer vacation.', level: 'medium' },
      { id: 19, japanese: '先生に分からない文法を教えてもらいました。', romaji: 'Sensei ni wakaranai bunpou o oshiete moraimashita.', english: 'I had the teacher explain grammar that I did not understand.', level: 'medium' },
      { id: 20, japanese: 'この本は日本語の勉強にとても役に立ちます。', romaji: 'Kono hon wa nihongo no benkyou ni totemo yaku ni tachimasu.', english: 'This book is very useful for Japanese study.', level: 'medium' },
      { id: 21, japanese: '週末に友人の結婚式に出席します。', romaji: 'Shuumatsu ni yuujin no kekkonshiki ni shusseki shimasu.', english: 'I will attend my friend’s wedding on the weekend.', level: 'medium' },
      { id: 22, japanese: '一週間に二回ジムに通っています。', romaji: 'Isshuukan ni nikai jimu ni kayotte imasu.', english: 'I go to the gym twice a week.', level: 'medium' },
      { id: 23, japanese: '日本の文化に昔からとても興味があります。', romaji: 'Nihon no bunka ni mukashi kara totemo kyoumi ga arimasu.', english: 'I have had great interest in Japanese culture for a long time.', level: 'medium' },
      { id: 24, japanese: '電車に乗る前に切符を確認してください。', romaji: 'Densha ni noru mae ni kippu o kakunin shite kudasai.', english: 'Please check your ticket before boarding the train.', level: 'medium' },
      { id: 25, japanese: '夜寝る前にお風呂に入ります。', romaji: 'Yoru neru mae ni ofuro ni hairimasu.', english: 'I take a bath at night before going to bed.', level: 'medium' },
      { id: 26, japanese: '弟に数学の宿題を手伝ってあげました。', romaji: 'Otouto ni suugaku no shukudai o tetsudatte agemashita.', english: 'I helped my younger brother with his math homework.', level: 'medium' },
      { id: 27, japanese: '京都の古いお寺に見学に行きました。', romaji: 'Kyouto no furui otera ni kengaku ni ikimashita.', english: 'I went on a sightseeing study tour to old temples in Kyoto.', level: 'medium' },
      { id: 28, japanese: '困ったときはいつでも先生に相談してください。', romaji: 'Komatta toki wa itsudemo sensei ni soudan shite kudasai.', english: 'Whenever you are in trouble, please consult the teacher.', level: 'medium' },
      { id: 29, japanese: '将来は国際的なビジネスに関わりたいです。', romaji: 'Shourai wa kokusaiteki na bijinesu ni kakawaritai desu.', english: 'In the future, I want to be involved in international business.', level: 'medium' },
      { id: 30, japanese: '健康のために毎朝野菜ジュースを飲んでいます。', romaji: 'Kenkou no tame ni maiasa yasai juusu o nonde imasu.', english: 'For my health, I drink vegetable juice every morning.', level: 'medium' },
      { id: 31, japanese: '約束の時間に遅れないように気をつけてください。', romaji: 'Yakusoku no jikan ni okurenai you ni ki o tsukete kudasai.', english: 'Please be careful not to be late for the promised time.', level: 'medium' },
      { id: 32, japanese: '壁にカレンダーを掛けました。', romaji: 'Kabe ni karendaa o kakemashita.', english: 'I hung a calendar on the wall.', level: 'medium' },
      { id: 33, japanese: '友達に頼まれて買い物に行きました。', romaji: 'Tomodachi ni tanomarete kaimono ni ikimashita.', english: 'Being asked by a friend, I went shopping.', level: 'medium' },
      { id: 34, japanese: '来月日本へ出張に行くことになりました。', romaji: 'Raigetsu Nihon e shucchou ni iku koto ni narimashita.', english: 'It was decided that I will go on a business trip to Japan next month.', level: 'medium' },
      { id: 35, japanese: '試験に合格できるように一生懸命勉強しています。', romaji: 'Shiken ni goukaku dekiru you ni isshoukenmei benkyou shite imasu.', english: 'I am studying with all my might so that I can pass the exam.', level: 'medium' },
      // Hard (36 - 50)
      { id: 36, japanese: 'お客様一人ひとりのニーズに応えるサービスを心がけています。', romaji: 'Okyakusama hitorihitori no niizu ni kotaeru saabisu o kokorogakete imasu.', english: 'We make it a point to offer services that respond to each client’s individual needs.', level: 'hard' },
      { id: 37, japanese: '新しい技術の導入により生産性を大幅に向上させました。', romaji: 'Atarashii gijutsu no dounyuu ni yori seisansei o oohaba ni koujou sasemashita.', english: 'By introducing new technology, we greatly improved productivity.', level: 'hard' },
      { id: 38, japanese: '状況の変化に迅速に対応できる体制を整えています。', romaji: 'Joukyou no henka ni jinsoku ni taiou dekiru taisei o totonoete imasu.', english: 'We are establishing a system capable of responding rapidly to changes in circumstances.', level: 'hard' },
      { id: 39, japanese: '彼は困難な課題に対しても前向きに取り組みました。', romaji: 'Kare wa konnan na kadai ni taishite mo maemuki ni torikumimashita.', english: 'He tackled even difficult challenges with a positive attitude.', level: 'hard' },
      { id: 40, japanese: '社会の持続可能な発展に寄与することを目指しています。', romaji: 'Shakai no jizoku kanou na hatten ni kiyo suru koto o mezashite imasu.', english: 'We aim to contribute to the sustainable development of society.', level: 'hard' },
      { id: 41, japanese: '予期しない問題に直面した際も冷静に判断を下しました。', romaji: 'Yokishinai mondai ni chokumen shita sai mo reisei ni handan o kudashimashita.', english: 'Even when confronted with unforeseen issues, he made calm decisions.', level: 'hard' },
      { id: 42, japanese: '社内のコミュニケーション向上に力を入れています。', romaji: 'Shanai no komyunikeeshon koujou ni chikara o irete imasu.', english: 'We are focusing efforts on improving internal communication.', level: 'hard' },
      { id: 43, japanese: 'グローバル化の波に伴い多言語対応が急務になっています。', romaji: 'Guroobaruka no nami ni tomonai tagengo taiou ga kyuumu ni natte imasu.', english: 'Along with the wave of globalization, multilingual support has become an urgent task.', level: 'hard' },
      { id: 44, japanese: '若手社員の育成に多くの時間を投資しています。', romaji: 'Wakate shain no ikusei ni ooku no jikan o toushi shite imasu.', english: 'We are investing a substantial amount of time into nurturing young employees.', level: 'hard' },
      { id: 45, japanese: '市場の動向を正確に把握し事業戦略に反映させます。', romaji: 'Shijou no doukou o seikaku ni haaku shi jigyou senryaku ni han\'ei sasemasu.', english: 'We will grasp market trends accurately and reflect them in our business strategy.', level: 'hard' },
      { id: 46, japanese: '品質管理において国際基準に適合していることが証明されました。', romaji: 'Hinshitsu kanri ni oite kokusai kijun ni tekigou shite iru koto ga shoumei saremashita.', english: 'It was proven that our quality management complies with international standards.', level: 'hard' },
      { id: 47, japanese: '困難な局面に立たされた時こそ真価が問われます。', romaji: 'Konnan na kyokumen ni tatasareta toki koso shinka ga towaremasu.', english: 'It is precisely when placed in difficult situations that one’s true worth is tested.', level: 'hard' },
      { id: 48, japanese: '地域社会の活性化に貢献するイベントを開催しました。', romaji: 'Chiiki shakai no kasseika ni kouken suru ibento o kaisai shimashita.', english: 'We held an event that contributes to revitalizing the local community.', level: 'hard' },
      { id: 49, japanese: '未来に向けて新しい可能性に挑戦し続けます。', romaji: 'Mirai ni mukete atarashii kanousei ni chousen shitsuzukemasu.', english: 'Toward the future, we will keep challenging new possibilities.', level: 'hard' },
      { id: 50, japanese: '感謝の気持ちを言葉にして伝えることが大切です。', romaji: 'Kansha no kimochi o kotoba ni shite tsutaeru koto ga taisetsu desu.', english: 'It is important to put feelings of gratitude into words and convey them.', level: 'hard' }
    ]
  },

  // 5. で (de) - Location of Action & Means/Tool
  {
    id: 'de',
    particle: 'で',
    romaji: 'de',
    name: 'Context / Means / Location (手段・場所)',
    color: 'from-amber-500 to-yellow-600',
    summary: 'Marks the location where dynamic action happens, the means or transport used, or the material something is made of.',
    grammarRule: '[Place of Action / Tool / Means] + で + [Action Verb]',
    nuanceExplanation: 'Contrast で with に: で is where dynamic action occurs (図書館で勉強する - study at the library), whereas に is where someone/something statically exists or arrives (図書館にいる/行く). で also means "by means of" (バスで行く - go by bus).',
    keyUsagePoints: [
      'Means of transportation: 電車で行きます (I go by train).',
      'Tools & language: 箸で食べます (I eat with chopsticks), 日本語で話します (speak in Japanese).',
      'Location of action: レストランで食べます (eat at the restaurant).'
    ],
    sentences: [
      // Easy (1 - 15)
      { id: 1, japanese: '図書館で勉強します。', romaji: 'Toshokan de benkyou shimasu.', english: 'I study at the library.', level: 'easy' },
      { id: 2, japanese: 'バスで行きます。', romaji: 'Basu de ikimasu.', english: 'I go by bus.', level: 'easy' },
      { id: 3, japanese: '箸でご飯を食べます。', romaji: 'Hashi de gohan o tabemasu.', english: 'I eat food with chopsticks.', level: 'easy' },
      { id: 4, japanese: '日本語で話してください。', romaji: 'Nihongo de hanashite kudasai.', english: 'Please speak in Japanese.', level: 'easy' },
      { id: 5, japanese: '部屋でテレビを見ます。', romaji: 'Heya de terebi o mimasu.', english: 'I watch television in the room.', level: 'easy' },
      { id: 6, japanese: 'ハサミで紙を切ります。', romaji: 'Hasami de kami o kirimasu.', english: 'I cut paper with scissors.', level: 'easy' },
      { id: 7, japanese: '車で駅まで行きました。', romaji: 'Kuruma de eki made ikimashita.', english: 'I went to the station by car.', level: 'easy' },
      { id: 8, japanese: '学校で友達と遊びます。', romaji: 'Gakkou de tomodachi to asobimasu.', english: 'I play with friends at school.', level: 'easy' },
      { id: 9, japanese: 'ペンで名前を書きます。', romaji: 'Pen de namae o kakimasu.', english: 'I write my name with a pen.', level: 'easy' },
      { id: 10, japanese: 'スーパーで野菜を買いました。', romaji: 'Suupaa de yasai o kaimashita.', english: 'I bought vegetables at the supermarket.', level: 'easy' },
      { id: 11, japanese: '公園で走ります。', romaji: 'Kouen de hashirimasu.', english: 'I run in the park.', level: 'easy' },
      { id: 12, japanese: 'カフェでコーヒーを飲みます。', romaji: 'Kafe de koohii o nomimasu.', english: 'I drink coffee at the cafe.', level: 'easy' },
      { id: 13, japanese: 'スマホで写真を撮りました。', romaji: 'Sumaho de shashin o torimashita.', english: 'I took a picture with my smartphone.', level: 'easy' },
      { id: 14, japanese: '一人で東京へ行きます。', romaji: 'Hitori de Toukyou e ikimasu.', english: 'I go to Tokyo by myself (alone).', level: 'easy' },
      { id: 15, japanese: '英語で手紙を書きました。', romaji: 'Eigo de tegami o kakimashita.', english: 'I wrote a letter in English.', level: 'easy' },
      // Medium (16 - 35)
      { id: 16, japanese: '新幹線で東京から新大阪まで二時間半かかります。', romaji: 'Shinkansen de Toukyou kara Shin-Oosaka made nijikanhan kakarimasu.', english: 'By bullet train, it takes two and a half hours from Tokyo to Shin-Osaka.', level: 'medium' },
      { id: 17, japanese: '週末は家でゆっくり映画を見ました。', romaji: 'Shuumatsu wa ie de yukkuri eiga o mimashita.', english: 'On the weekend, I relaxed and watched movies at home.', level: 'medium' },
      { id: 18, japanese: 'オンラインで日本語のレッスンを受けています。', romaji: 'Onrain de nihongo no ressun o ukete imasu.', english: 'I am taking Japanese lessons online.', level: 'medium' },
      { id: 19, japanese: 'このテーブルは本物の木で作られています。', romaji: 'Kono teeburu wa honmono no ki de tsukurarete imasu.', english: 'This table is made out of genuine wood.', level: 'medium' },
      { id: 20, japanese: '台風で電車が止まってしまいました。', romaji: 'Taifuu de densha ga tomatte shimaimashita.', english: 'The train stopped due to the typhoon.', level: 'medium', tip: 'Notice で marking cause / reason.' },
      { id: 21, japanese: 'クレジットカードで買い物を支払いました。', romaji: 'Kurejitto kaado de kaimono o shiharaimashita.', english: 'I paid for the shopping by credit card.', level: 'medium' },
      { id: 22, japanese: '会社で毎日新しいことを学んでいます。', romaji: 'Kaisha de mainichi atarashii koto o manande imasu.', english: 'I am learning new things every day at the company.', level: 'medium' },
      { id: 23, japanese: '自分のパソコンでコードを書いています。', romaji: 'Jibun no pasokon de koudo o kaite imasu.', english: 'I am writing code on my own computer.', level: 'medium' },
      { id: 24, japanese: '風邪で仕事を一日休みました。', romaji: 'Kaze de shigoto o ichinichi yasumimashita.', english: 'I took a day off work due to a cold.', level: 'medium' },
      { id: 25, japanese: '駅前の美味しいラーメン屋で昼ご飯を食べました。', romaji: 'Ekimae no oishii raamenya de hirugohan o tabemashita.', english: 'I ate lunch at a delicious ramen restaurant in front of the station.', level: 'medium' },
      { id: 26, japanese: '手作業で丁寧に製品を組み立てます。', romaji: 'Tezagyousa de teinei ni seihin o kumitatemasu.', english: 'We assemble products carefully by manual handwork.', level: 'medium' },
      { id: 27, japanese: 'インターネットで知りたい情報を検索しました。', romaji: 'Intaanetto de shiritai jouhou o kensaku shimashita.', english: 'I searched for the information I wanted on the Internet.', level: 'medium' },
      { id: 28, japanese: 'みんなで一緒に歌を歌いましょう。', romaji: 'Minna de issho ni uta o utaimashou.', english: 'Let’s sing songs all together.', level: 'medium' },
      { id: 29, japanese: '全部で千円になります。', romaji: 'Zenbu de sen\'en ni narimasu.', english: 'It comes to 1,000 yen altogether.', level: 'medium' },
      { id: 30, japanese: '会議室で新しいプロジェクトについて話し合いました。', romaji: 'Kaigishitsu de atarashii purojekuto ni tsuite hanashiaimashita.', english: 'We discussed the new project in the conference room.', level: 'medium' },
      { id: 31, japanese: 'メールで詳細な書類を添付してお送りします。', romaji: 'Meeru de shousai na shorui o tempu shite ookuri shimasu.', english: 'I will attach and send detailed documents by email.', level: 'medium' },
      { id: 32, japanese: '事故で道路が渋滞しています。', romaji: 'Jiko de douro ga juutai shite imasu.', english: 'The road is congested due to an accident.', level: 'medium' },
      { id: 33, japanese: '飛行機で九時間かけて移動しました。', romaji: 'Hikouki de kujikan kakete idou shimashita.', english: 'I traveled taking nine hours by airplane.', level: 'medium' },
      { id: 34, japanese: '海外で生活することで視野が広がりました。', romaji: 'Kaigai de seikatsu suru koto de shiya ga hirogarimashita.', english: 'By living overseas, my horizons broadened.', level: 'medium' },
      { id: 35, japanese: '自分の力で最後までやり遂げました。', romaji: 'Jibun no chikara de saigo made yaritogemashita.', english: 'I accomplished it until the end by my own strength.', level: 'medium' },
      // Hard (36 - 50)
      { id: 36, japanese: 'クラウド技術の活用で業務効率が飛躍的に向上しました。', romaji: 'Kuraudo gijutsu no katsuyou de gyoumu kouritsu ga hiyakuteki ni koujou shimashita.', english: 'By utilizing cloud technology, operational efficiency improved dramatically.', level: 'hard' },
      { id: 37, japanese: '国際会議で流暢な英語で研究発表を行いました。', romaji: 'Kokusai kaigi de ryuuchou na eigo de kenkyuu happyou o okonaimashita.', english: 'I gave a research presentation in fluent English at an international conference.', level: 'hard' },
      { id: 38, japanese: '現場での徹底した安全管理により無事故を達成しました。', romaji: 'Genba de no tettei shita anzen kanri ni yori mujiko o tassei shimashita.', english: 'Through thorough safety management on-site, we achieved zero accidents.', level: 'hard' },
      { id: 39, japanese: '最新の分析ツールで膨大なデータを正確に処理しました。', romaji: 'Saishin no bunseki tsuuru de boudai na deeta o seikaku ni shori shimashita.', english: 'We accurately processed vast amounts of data using the latest analytics tools.', level: 'hard' },
      { id: 40, japanese: 'リモートワークの普及で柔軟な働き方が可能になりました。', romaji: 'Rimootowaaku no fukyuu de juunan na hatarakikata ga kanou ni narimashita.', english: 'With the spread of remote work, flexible work styles became possible.', level: 'hard' },
      { id: 41, japanese: '長時間の議論の末、全員一致で承認されました。', romaji: 'Choujikan no giron no sue, zen\'in icchi de shounin saremashita.', english: 'After long hours of discussion, it was approved by unanimous consent.', level: 'hard' },
      { id: 42, japanese: '優れた技術力と情熱で世界中の顧客から信頼を得ています。', romaji: 'Sugureta gijutsuryoku to jounetsu de sekaijuu no kokyaku kara shinrai o ete imasu.', english: 'Through outstanding technical expertise and passion, we earn trust from clients worldwide.', level: 'hard' },
      { id: 43, japanese: '社内の勉強会で先端のフレームワークについて学びました。', romaji: 'Shanai no benkyoukai de sentan no fureemuwaaku ni tsuite manabimashita.', english: 'We learned about cutting-edge frameworks in an internal study session.', level: 'hard' },
      { id: 44, japanese: '独自の視点と創造力でこれまでにない製品を開発しました。', romaji: 'Dokuji no shiten to souzouryoku de kore made ni nai seihin o kaihatsu shimashita.', english: 'We developed an unprecedented product through unique perspectives and creativity.', level: 'hard' },
      { id: 45, japanese: '厳格なテスト環境でシステムの安定性を検証しました。', romaji: 'Genkaku na tesuto kankyou de shisutemu no anteisei o kenshou shimashita.', english: 'We verified system stability within a rigorous test environment.', level: 'hard' },
      { id: 46, japanese: '世界的な規模で持続可能なエネルギーへの転換が進んでいます。', romaji: 'Sekaiteki na kibo de jizoku kanou na enerugii e no tenkan ga susunde imasu.', english: 'Transition to sustainable energy is advancing on a worldwide scale.', level: 'hard' },
      { id: 47, japanese: '迅速な意思決定とチームワークで危機を乗り越えました。', romaji: 'Jinsoku na ishi kettei to chiimuwaaku de kiki o norikoemashita.', english: 'We overcame the crisis through speedy decision making and teamwork.', level: 'hard' },
      { id: 48, japanese: '高品質なサービスで他社との差別化を図っています。', romaji: 'Kouhinshitsu na saabisu de tasha to no sabetsuka o hakatte imasu.', english: 'We strive for differentiation from other companies through high-quality service.', level: 'hard' },
      { id: 49, japanese: '様々な経験を通じて一歩一歩着実に成長しています。', romaji: 'Samazama na keiken o tsuujite ippo ippo chakujitsu ni seichou shite imasu.', english: 'Through diverse experiences, I am growing steadily step-by-step.', level: 'hard' },
      { id: 50, japanese: '日本企業で培った経験は今後のキャリアで大きな強みになります。', romaji: 'Nihon kigyou de tsukatta keiken wa kongo no kyaria de ookina tsuyomi ni narimasu.', english: 'The experience cultivated at Japanese companies will become a great strength in future career.', level: 'hard' }
    ]
  },

  // 6. と (to) - With & Exhaustive "And"
  {
    id: 'to',
    particle: 'と',
    romaji: 'to',
    name: 'With / And / Quote (同伴・並立・引用)',
    color: 'from-pink-500 to-rose-500',
    summary: 'Means "with" (companion), "and" (complete list between nouns), or marks quotations ("...to omou / ...to moushimasu").',
    grammarRule: '[Noun] + と + [Noun] OR [Quote] + と + [Verb (言う/思う)]',
    nuanceExplanation: 'と is used for exhaustive listing (A and B and nothing else in the list). It also marks who you do an action with (友達と話す). Crucially in business self-introductions, it marks your name: 「アニーシュと申します」 (I am called Aneesh).',
    keyUsagePoints: [
      'Companion: 友達と映画を見ます (Watch a movie with a friend).',
      'Exhaustive listing: りんごとバナナを買いました (I bought apples and bananas - only those two).',
      'Name introduction & quotes: 「〜と申します」 (My name is...).'
    ],
    sentences: [
      // Easy (1 - 15)
      { id: 1, japanese: '友達と遊びます。', romaji: 'Tomodachi to asobimasu.', english: 'I play with a friend.', level: 'easy' },
      { id: 2, japanese: 'パンと牛乳を買いました。', romaji: 'Pan to gyuunyuu o kaimashita.', english: 'I bought bread and milk.', level: 'easy' },
      { id: 3, japanese: '家族と旅行へ行きます。', romaji: 'Kazoku to ryokou e ikimasu.', english: 'I go on a trip with my family.', level: 'easy' },
      { id: 4, japanese: '先生と話しました。', romaji: 'Sensei to hanashimashita.', english: 'I spoke with the teacher.', level: 'easy' },
      { id: 5, japanese: '猫と犬がいます。', romaji: 'Neko to inu ga imasu.', english: 'There is a cat and a dog.', level: 'easy' },
      { id: 6, japanese: '田中さんとご飯を食べました。', romaji: 'Tanaka-san to gohan o tabemashita.', english: 'I ate a meal with Mr. Tanaka.', level: 'easy' },
      { id: 7, japanese: '明日雨が降ると思います。', romaji: 'Ashita ame ga furu to omoimasu.', english: 'I think it will rain tomorrow.', level: 'easy' },
      { id: 8, japanese: '彼と約束をしました。', romaji: 'Kare to yakusoku o shimashita.', english: 'I made a promise with him.', level: 'easy' },
      { id: 9, japanese: '父と母は元気です。', romaji: 'Chichi to haha wa genki desu.', english: 'My father and mother are doing well.', level: 'easy' },
      { id: 10, japanese: 'ありがとうと言いました。', romaji: 'Arigatou to iimashita.', english: 'I said "Thank you".', level: 'easy' },
      { id: 11, japanese: '本とノートを机に置きました。', romaji: 'Hon to nooto o tsukue ni okimashita.', english: 'I placed the book and notebook on the desk.', level: 'easy' },
      { id: 12, japanese: '弟とゲームをしました。', romaji: 'Otouto to geemu o shimashita.', english: 'I played a game with my younger brother.', level: 'easy' },
      { id: 13, japanese: '同僚とランチに行きます。', romaji: 'Douryou to ranchi ni ikimasu.', english: 'I go to lunch with a colleague.', level: 'easy' },
      { id: 14, japanese: 'ペンと消しゴムを貸してください。', romaji: 'Pen to keshigomu o kashite kudasai.', english: 'Please lend me a pen and eraser.', level: 'easy' },
      { id: 15, japanese: '妻と散歩をしました。', romaji: 'Tsuma to sanpo o shimashita.', english: 'I took a walk with my wife.', level: 'easy' },
      // Medium (16 - 35)
      { id: 16, japanese: '日本人の同僚と日本語で意見を交わしました。', romaji: 'Nihonjin no douryou to nihongo de iken o kawashimashita.', english: 'I exchanged opinions in Japanese with my Japanese colleague.', level: 'medium' },
      { id: 17, japanese: '将来について家族と真剣に話し合いました。', romaji: 'Shourai ni tsuite kazoku to shinken ni hanashiaimashita.', english: 'I discussed seriously with my family about the future.', level: 'medium' },
      { id: 18, japanese: 'コーヒーと紅茶、どちらになさいますか。', romaji: 'Koohii to koucha, dochira ni nasaimasu ka.', english: 'Coffee and black tea, which would you like?', level: 'medium' },
      { id: 19, japanese: '彼はとても親切で優秀なエンジニアだと思います。', romaji: 'Kare wa totemo shinsetsu de yuushuu na enjinia da to omoimasu.', english: 'I think he is a very kind and talented engineer.', level: 'medium' },
      { id: 20, japanese: '朝起きるとすぐに窓を開けて新鮮な空気を吸います。', romaji: 'Asa okiru to sugu ni mado o akete shinsen na kuuki o suimasu.', english: 'When I wake up in the morning, I immediately open the window and breathe fresh air.', level: 'medium', tip: 'Notice と meaning "when/upon doing".' },
      { id: 21, japanese: '上司と相談してプロジェクトの日程を決めました。', romaji: 'Joushi to soudan shite purojekuto no nittei o kimemashita.', english: 'I consulted with my supervisor and decided the project schedule.', level: 'medium' },
      { id: 22, japanese: '春になると桜のつぼみが一斉に開きます。', romaji: 'Haru ni naru to sakura no tsubomi ga issei ni hirakimasu.', english: 'When spring comes, cherry blossom buds open all at once.', level: 'medium' },
      { id: 23, japanese: '山田さんと鈴木さんと三人で食事をしました。', romaji: 'Yamada-san to Suzuki-san to sannin de shokuji o shimashita.', english: 'Three of us—Mr. Yamada, Mr. Suzuki, and I—had a meal.', level: 'medium' },
      { id: 24, japanese: '失敗を恐れずに行動することが肝心だと考えています。', romaji: 'Shippai o osorezu ni koudou suru koto ga kanjin da to kangaete imasu.', english: 'I consider that taking action without fearing failure is vital.', level: 'medium' },
      { id: 25, japanese: 'パソコンとモニターをケーブルで繋ぎました。', romaji: 'Pasokon to monitaa o keeburu de tsunagimashita.', english: 'I connected the computer and monitor with a cable.', level: 'medium' },
      { id: 26, japanese: '彼女は「また明日会いましょう」と笑顔で言いました。', romaji: 'Kanojo wa "Mata ashita aimashou" to egao de iimashita.', english: 'She said with a smile, "Let’s meet again tomorrow."', level: 'medium' },
      { id: 27, japanese: '日本語の会話練習を先生と毎日三十回行っています。', romaji: 'Nihongo no kaiwa renshuu o sensei to mainichi sanjikkai okonatte imasu.', english: 'I conduct Japanese conversation practice thirty times daily with my teacher.', level: 'medium' },
      { id: 28, japanese: '理想と現実は必ずしも一致するとは限りません。', romaji: 'Risou to genjitsu wa kanarazushimo icchi suru to wa kagirimasen.', english: 'Ideal and reality do not necessarily always match.', level: 'medium' },
      { id: 29, japanese: '時間と労力を惜しまずに作品を仕上げました。', romaji: 'Jikan to rouryoku o oshimazu ni sakuhin o shiagemashita.', english: 'I finished the work without sparing time or effort.', level: 'medium' },
      { id: 30, japanese: '右に曲がるとすぐに大きな銀行が見えます。', romaji: 'Migi ni magaru to sugu ni ookina ginkou ga miemasu.', english: 'When you turn right, you will immediately see a large bank.', level: 'medium' },
      { id: 31, japanese: '彼とは大学時代からの親しい友人です。', romaji: 'Kare to wa daigaku jidai kara no shitashii yuujin desu.', english: 'I have been close friends with him since university days.', level: 'medium' },
      { id: 32, japanese: '新しいクライアントと初めて打ち合わせをしました。', romaji: 'Atarashii kuraianto to hajimete uchiawase o shimashita.', english: 'I had a preliminary meeting with the new client for the first time.', level: 'medium' },
      { id: 33, japanese: '英語と日本語の両方をバランスよく学習しています。', romaji: 'Eigo to nihongo no ryouhou o baransu yoku gakushuu shite imasu.', english: 'I am learning both English and Japanese in good balance.', level: 'medium' },
      { id: 34, japanese: '「継続は力なり」ということわざをいつも心に留めています。', romaji: '"Keizoku wa chikara nari" to iu kotowaza o itsumo kokoro ni tomete imasu.', english: 'I always keep the proverb "Continuity is power" in my heart.', level: 'medium' },
      { id: 35, japanese: 'チームの仲間と協力しながら課題を乗り越えました。', romaji: 'Chiimu no nakama to kyouryoku shinagara kadai o norikoemashita.', english: 'We overcame the challenges while cooperating with team peers.', level: 'medium' },
      // Hard (36 - 50)
      { id: 36, japanese: 'ビジネスパートナーと長期的な信頼関係を築き上げることが最も肝要です。', romaji: 'Bijinesu paatonaa to choukiteki na shinrai kankei o kizukiageru koto ga mottomo kanyou desu.', english: 'Building a long-term trust relationship with business partners is most essential.', level: 'hard' },
      { id: 37, japanese: '理論と実践を結びつけることで本質的な理解が深まります。', romaji: 'Riron to jissen o musubitsukeru koto de honshitsuteki na rikai ga fukamarimasu.', english: 'By combining theory with practice, fundamental understanding deepens.', level: 'hard' },
      { id: 38, japanese: 'お客様と共に持続可能な未来を築いていきたいと考えております。', romaji: 'Okyakusama to tomo ni jizoku kanou na mirai o kizuite ikitai to kangaete orimasu.', english: 'We wish to build a sustainable future together with our clients.', level: 'hard' },
      { id: 39, japanese: '伝統的な技術と最新のITを融合させた革新的なサービスです。', romaji: 'Dentouteki na gijutsu to saishin no aiti o yuugou saseta kakushinteki na saabisu desu.', english: 'This is an innovative service fusing traditional techniques with cutting-edge IT.', level: 'hard' },
      { id: 40, japanese: '失敗を成功の母と捉え前進し続けることが成功の秘訣です。', romaji: 'Shippai o seikou no haha to torae zenshin shitsuzukeru koto ga seikou no hiketsu desu.', english: 'Viewing failure as the mother of success and continually moving forward is the secret to success.', level: 'hard' },
      { id: 41, japanese: '海外の拠点とリアルタイムで情報を共有し業務を推進しています。', romaji: 'Kaigai no kyoten to riarutaimu de jouhou o kyouyuu shi gyoumu o suishin shite imasu.', english: 'We advance operations by sharing information in real time with overseas bases.', level: 'hard' },
      { id: 42, japanese: '迅速な判断と果敢な行動力が競争の激しい市場では欠かせません。', romaji: 'Jinsoku na handan to kakan na koudouryoku ga kyousou no hageshii shijou de wa kakasemasen.', english: 'Prompt judgment and decisive action are indispensable in fiercely competitive markets.', level: 'hard' },
      { id: 43, japanese: '自分自身の成長が組織の発展に直結すると確信しています。', romaji: 'Jibun jishin no seichou ga soshiki no hatten ni chokketsu suru to kakushin shite imasu.', english: 'I am convinced that my personal growth directly links to the organization’s advancement.', level: 'hard' },
      { id: 44, japanese: '異なる文化背景を持つ人々と協調することは大きな価値を生み出します。', romaji: 'Kotonaru bunka haikei o motsu hitobito to kyouchou suru koto wa ookina kachi o umidashimasu.', english: 'Harmonizing with people with diverse cultural backgrounds generates immense value.', level: 'hard' },
      { id: 45, japanese: '「お客様第一主義」という理念を全社員が共有しています。', romaji: '"Okyakusama daiichi shugi" to iu rinen o zenshain ga kyouyuu shite imasu.', english: 'All employees share the philosophy of "Customer First".', level: 'hard' },
      { id: 46, japanese: '市場の変化に迅速かつ的確に適応することが生き残る条件です。', romaji: 'Shijou no henka ni jinsoku katsu tekikaku ni tekiou suru koto ga ikinokoru jouken desu.', english: 'Adapting swiftly and accurately to market fluctuations is the condition for survival.', level: 'hard' },
      { id: 47, japanese: '技術者としての誇りと責任感を持って開発に従事しています。', romaji: 'Gijutsusha to shite no hokori to sekininkan o motte kaihatsu ni juuji shite imasu.', english: 'I engage in development holding pride and responsibility as an engineer.', level: 'hard' },
      { id: 48, japanese: '困難な状況にあっても希望と向上心を失ってはいけません。', romaji: 'Konnan na joukyou ni atte mo kibou to koujoushin o ushinatte wa ikemasen.', english: 'Even in distressing circumstances, one must not lose hope and ambition.', level: 'hard' },
      { id: 49, japanese: '知識と経験を次の世代にしっかりと継承していく義務があります。', romaji: 'Chishiki to keiken o tsugi no sedai ni shikkari to keishou shite iku gimu ga arimasu.', english: 'We have a duty to pass down knowledge and experience firmly to the next generation.', level: 'hard' },
      { id: 50, japanese: '皆様とのご縁に感謝し、誠心誠意努めてまいります。', romaji: 'Minasama to no goen ni kansha shi, seishin seii tsutomete mairimasu.', english: 'Grateful for the relationship with all of you, I will strive with wholehearted sincerity.', level: 'hard' }
    ]
  }
];

// Self-Introduction Profile Data & Sentence Generator
export interface SelfIntroProfile {
  // Basic Identity
  name: string;
  nameKatakana: string;
  age: string;
  gender: string;           // male / female / prefer not to say
  // Origin
  country: string;
  countryJapanese: string;  // Japanese name of country e.g. インド
  hometown: string;         // City / State they're from
  // Education
  college: string;
  major: string;            // Field of study
  graduationYear: string;
  // Work
  company: string;
  companyKatakana: string;  // e.g. アダミ・イノベーションズ
  companyType: string;      // e.g. Japanese-based IT company
  jobTitle: string;         // e.g. Software Engineer
  workYears: string;        // How many years at company
  // Family
  familyCount: string;      // Total family members
  familyMembers: string;    // comma list: Mom, Wife, Brother etc.
  isMarried: string;        // yes / no
  hasChildren: string;      // yes / no / number
  // Personality & Lifestyle
  personality: string;      // e.g. calm, energetic, creative
  hobbies: string;          // e.g. playing guitar, cooking, cycling
  favoriteFoods: string;    // e.g. sushi, biryani, pizza
  favoriteThingsAboutJapan: string; // e.g. culture, technology, food
  // Japanese study
  jlptLevel: string;        // e.g. N5, N4, studying N4
  studyDuration: string;    // e.g. 6 months, 1 year
  studyReason: string;      // e.g. work, interest, travel
  // Future
  futureGoal: string;       // e.g. work in Japan, become fluent
}

export const DEFAULT_SELF_INTRO_PROFILE: SelfIntroProfile = {
  name: 'Aneesh',
  nameKatakana: 'アニーシュ',
  age: '27',
  gender: 'male',
  country: 'India',
  countryJapanese: 'インド',
  hometown: 'Coimbatore, Tamil Nadu',
  college: 'RVS College of Engineering',
  major: 'Computer Science Engineering',
  graduationYear: '2020',
  company: 'Adami Innovations',
  companyKatakana: 'アダミ・イノベーションズ',
  companyType: 'Japanese-based technology company',
  jobTitle: 'Software Engineer',
  workYears: '3',
  familyCount: '4',
  familyMembers: 'Mom, Me, Wife, Brother',
  isMarried: 'yes',
  hasChildren: 'no',
  personality: 'calm and hardworking',
  hobbies: 'technology, learning Japanese, watching anime',
  favoriteFoods: 'sushi, ramen, biryani',
  favoriteThingsAboutJapan: 'culture, technology, and food',
  jlptLevel: 'N5',
  studyDuration: '6 months',
  studyReason: 'work at a Japanese company and communicate with Japanese colleagues',
  futureGoal: 'become fluent in Japanese and work in Japan someday'
};

export interface SelfIntroSentence {
  id: number;
  topic: string;
  japanese: string;
  romaji: string;
  english: string;
  particleHighlight: string;
  explanation: string;
}

export function generateSelfIntroSentences(profile: SelfIntroProfile): SelfIntroSentence[] {
  const p = { ...DEFAULT_SELF_INTRO_PROFILE, ...profile };
  if (profile.name && profile.name !== DEFAULT_SELF_INTRO_PROFILE.name) {
    if (!profile.nameKatakana || profile.nameKatakana === DEFAULT_SELF_INTRO_PROFILE.nameKatakana) {
      p.nameKatakana = profile.name;
    }
  }
  const sentences: SelfIntroSentence[] = [];
  let id = 1;

  // 1. Opening Greeting
  sentences.push({
    id: id++,
    topic: '① Opening Greeting (挨拶)',
    japanese: `初めまして。${p.nameKatakana}と申します。`,
    romaji: `Hajimemashite. ${p.nameKatakana} to moushimasu.`,
    english: `Nice to meet you. My name is ${p.name}.`,
    particleHighlight: 'と (to) — Name/Quotation marker',
    explanation: '「初めまして」 is essential for first meetings. 「〜と申します」 is polite humble form (謙譲語), far more appropriate than 「〜です」 in business or formal contexts.'
  });

  // 2. Age
  if (p.age) {
    sentences.push({
      id: id++,
      topic: '② Age (年齢)',
      japanese: `${p.age}歳です。`,
      romaji: `${p.age}sai desu.`,
      english: `I am ${p.age} years old.`,
      particleHighlight: 'です (desu) — Polite copula',
      explanation: '「〜歳です」(sai desu) is the standard, natural way to state your age in Japanese. In formal introductions it is always polite to share your age.'
    });
  }

  // 3. Origin / Country
  sentences.push({
    id: id++,
    topic: '③ Country of Origin (出身国)',
    japanese: `${p.countryJapanese || 'インド'}の出身です。`,
    romaji: `${p.countryJapanese || 'Indo'} no shusshin desu.`,
    english: `I am from ${p.country || 'India'}.`,
    particleHighlight: 'の (no) — Origin / Affiliation marker',
    explanation: '「〜の出身です」(no shusshin desu) is the natural phrase meaning "I am from...". の connects the country name as origin.'
  });

  // 4. Hometown
  if (p.hometown) {
    sentences.push({
      id: id++,
      topic: '④ Hometown / City (出身地)',
      japanese: `出身地は${p.hometown}です。`,
      romaji: `Shusshinchi wa ${p.hometown} desu.`,
      english: `My hometown is ${p.hometown}.`,
      particleHighlight: 'は (wa) — Topic marker',
      explanation: '「出身地」(shusshinchi) means hometown or birthplace. は marks it as the topic of the sentence.'
    });
  }

  // 5. Education
  sentences.push({
    id: id++,
    topic: '⑤ University & Major (大学・専攻)',
    japanese: `${p.major ? p.major + 'を専攻して、' : ''}${p.college}を卒業しました。`,
    romaji: `${p.major ? p.major + ' o senkou shite, ' : ''}${p.college} o sotsugyou shimashita.`,
    english: `${p.major ? 'I majored in ' + p.major + ' and ' : ''}graduated from ${p.college}.`,
    particleHighlight: 'を (o) — Direct object (major + graduation)',
    explanation: '「〜を専攻して」(o senkou shite) means "majoring in". 「〜を卒業しました」(o sotsugyou shimashita) is how you say "graduated from" — を marks the object of graduation.'
  });

  // 6. Company Name
  sentences.push({
    id: id++,
    topic: '⑥ Workplace (勤務先)',
    japanese: `現在、${p.companyKatakana || p.company}で働いています。`,
    romaji: `Genzai, ${p.companyKatakana || p.company} de hataraite imasu.`,
    english: `Currently, I am working at ${p.company}.`,
    particleHighlight: 'で (de) — Location of action',
    explanation: '「現在」(genzai) = currently. で marks ${p.company} as the location where action (working) happens. Use 「〜で働いています」 for ongoing employment.'
  });

  // 7. Job Title / Role
  if (p.jobTitle) {
    sentences.push({
      id: id++,
      topic: '⑦ Job Title & Role (職種・役職)',
      japanese: `担当は${p.jobTitle}です。`,
      romaji: `Tantou wa ${p.jobTitle} desu.`,
      english: `My role is ${p.jobTitle}.`,
      particleHighlight: 'は (wa) — Topic marker',
      explanation: '「担当」(tantou) means "responsible for / my role". This is the natural way to state your job function without sounding overly formal or stiff.'
    });
  }

  // 8. Work Experience Years
  if (p.workYears) {
    sentences.push({
      id: id++,
      topic: '⑧ Work Experience (勤務年数)',
      japanese: `${p.company}で${p.workYears}年働いています。`,
      romaji: `${p.company} de ${p.workYears}nen hataraite imasu.`,
      english: `I have been working at ${p.company} for ${p.workYears} year(s).`,
      particleHighlight: 'で (de) — Workplace, て-form (continuity)',
      explanation: '〜て + います (te imasu) expresses an ongoing action or state. 「〜年働いています」 naturally conveys duration of employment.'
    });
  }

  // 9. Company Type / Nature
  sentences.push({
    id: id++,
    topic: '⑨ Company Background (会社の性質)',
    japanese: `${p.companyKatakana || p.company}は日系企業です。`,
    romaji: `${p.companyKatakana || p.company} wa nikkei kigyou desu.`,
    english: `${p.company} is a Japanese-affiliated company.`,
    particleHighlight: 'は (wa) — Topic marker',
    explanation: '「日系企業」(nikkei kigyou) is the precise Japanese business term for a company with Japanese affiliation or origins. Very useful for corporate contexts.'
  });

  // 10. Family size
  sentences.push({
    id: id++,
    topic: '⑩ Family Size (家族人数)',
    japanese: `家族は${p.familyCount || '4'}人家族です。`,
    romaji: `Kazoku wa ${p.familyCount || 'yo'}nin kazoku desu.`,
    english: `I have a family of ${p.familyCount || '4'} people.`,
    particleHighlight: 'は (wa) — Topic marker, 人 (nin) — counter for people',
    explanation: '「〜人家族」(nin kazoku) is the natural phrasing for family size. Japanese counts people using 人 (nin), so 4 people = 4人 (yonin).'
  });

  // 11. Family members
  if (p.familyMembers) {
    const jpFamily = p.familyMembers
      .replace(/\bMom\b/gi, '母 (haha)')
      .replace(/\bWife\b/gi, '妻 (tsuma)')
      .replace(/\bBrother\b/gi, '弟 (otouto)')
      .replace(/\bSister\b/gi, '姉 (ane) / 妹 (imouto)')
      .replace(/\bFather\b/gi, '父 (chichi)')
      .replace(/\bMe\b/gi, '私 (watashi)');
    sentences.push({
      id: id++,
      topic: '⑪ Family Members (家族構成)',
      japanese: `家族は、母、私、妻、弟です。`,
      romaji: `Kazoku wa, haha, watashi, tsuma, otouto desu.`,
      english: `My family members are my mother, myself, my wife, and my younger brother.`,
      particleHighlight: 'は (wa) — Topic, と (to) — Listing',
      explanation: `When talking about your own family to others (outside family), always use humble terms: 母 (haha=mother), 妻 (tsuma=wife), 弟 (otouto=younger brother). Original: ${jpFamily}`
    });
  }

  // 12. Marital status
  if (p.isMarried === 'yes') {
    sentences.push({
      id: id++,
      topic: '⑫ Marital Status (結婚状況)',
      japanese: '結婚しています。',
      romaji: 'Kekkon shite imasu.',
      english: 'I am married.',
      particleHighlight: 'て + います (te imasu) — Ongoing state',
      explanation: '「結婚しています」(kekkon shite imasu) is the correct way to say you are married. The て-form + います indicates a state that resulted from an action and remains ongoing.'
    });
  }

  // 13. Children (if applicable)
  if (p.hasChildren && p.hasChildren !== 'no' && p.hasChildren !== '0') {
    sentences.push({
      id: id++,
      topic: '⑬ Children (子供)',
      japanese: `子供が${p.hasChildren === 'yes' ? 'います' : p.hasChildren + '人います'}。`,
      romaji: `Kodomo ga ${p.hasChildren === 'yes' ? 'imasu' : p.hasChildren + 'nin imasu'}.`,
      english: `I have ${p.hasChildren === 'yes' ? 'children' : p.hasChildren + ' child(ren)'}.`,
      particleHighlight: 'が (ga) — Subject/Existence marker',
      explanation: '「子供がいます」(kodomo ga imasu) uses いる (iru), the verb for animate existence. が marks 子供 (children) as the subject of existing.'
    });
  }

  // 14. Personality
  if (p.personality) {
    sentences.push({
      id: id++,
      topic: '⑭ Personality (性格)',
      japanese: `性格は${p.personality}です。`,
      romaji: `Seikaku wa ${p.personality} desu.`,
      english: `My personality is ${p.personality}.`,
      particleHighlight: 'は (wa) — Topic marker (seikaku = personality)',
      explanation: '「性格」(seikaku) means personality or character. は marks it as your stated topic. Sharing personality in self-introductions is common in Japan.'
    });
  }

  // 15. Hobbies
  if (p.hobbies) {
    sentences.push({
      id: id++,
      topic: '⑮ Hobbies (趣味)',
      japanese: `趣味は${p.hobbies}です。`,
      romaji: `Shumi wa ${p.hobbies} desu.`,
      english: `My hobbies are ${p.hobbies}.`,
      particleHighlight: 'は (wa) — Topic marker (shumi = hobby)',
      explanation: '「趣味」(shumi) means hobby. This is one of the most frequently asked questions in Japanese self-introductions. は marks the topic, then you list your hobbies.'
    });
  }

  // 16. Favorite foods
  if (p.favoriteFoods) {
    sentences.push({
      id: id++,
      topic: '⑯ Favorite Food (好きな食べ物)',
      japanese: `好きな食べ物は${p.favoriteFoods}です。`,
      romaji: `Suki na tabemono wa ${p.favoriteFoods} desu.`,
      english: `My favorite food is ${p.favoriteFoods}.`,
      particleHighlight: 'な (na) — Adjective connector, は (wa) — Topic',
      explanation: '「好きな食べ物」(suki na tabemono) = favourite food. 好き (suki) is a な-adjective meaning "liked/favourite". A fun, friendly addition to any self-introduction.'
    });
  }

  // 17. What they like about Japan
  if (p.favoriteThingsAboutJapan) {
    sentences.push({
      id: id++,
      topic: '⑰ What I Like About Japan (日本の好きなところ)',
      japanese: `日本の${p.favoriteThingsAboutJapan}がとても好きです。`,
      romaji: `Nihon no ${p.favoriteThingsAboutJapan} ga totemo suki desu.`,
      english: `I really love Japan's ${p.favoriteThingsAboutJapan}.`,
      particleHighlight: 'の (no) — Possession/attribute, が (ga) — Subject of liking',
      explanation: '「〜が好きです」(ga suki desu) is the core expression for "I like". の connects Japan to the thing you like (e.g., Japan\'s culture). が marks the object of your feeling.'
    });
  }

  // 18. Japanese Study Duration
  if (p.studyDuration) {
    sentences.push({
      id: id++,
      topic: '⑱ Japanese Study Duration (日本語学習期間)',
      japanese: `日本語を${p.studyDuration}間勉強しています。`,
      romaji: `Nihongo o ${p.studyDuration}kan benkyou shite imasu.`,
      english: `I have been studying Japanese for ${p.studyDuration}.`,
      particleHighlight: 'を (o) — Object marker (nihongo = Japanese)',
      explanation: '「日本語を勉強しています」 uses を to mark Japanese as the object you are studying. The て-form + います indicates an ongoing activity that started in the past and continues now.'
    });
  }

  // 19. Reason for studying Japanese
  if (p.studyReason) {
    sentences.push({
      id: id++,
      topic: '⑲ Why I Study Japanese (日本語を学ぶ理由)',
      japanese: `${p.studyReason}ために日本語を学んでいます。`,
      romaji: `${p.studyReason} tame ni nihongo o manande imasu.`,
      english: `I am studying Japanese in order to ${p.studyReason}.`,
      particleHighlight: 'ために (tame ni) — In order to / For the purpose of',
      explanation: '「〜ために」(tame ni) expresses purpose or goal — "for the sake of / in order to". It naturally explains your motivation behind studying Japanese.'
    });
  }

  // 20. JLPT Level
  if (p.jlptLevel) {
    sentences.push({
      id: id++,
      topic: '⑳ Japanese Proficiency Level (日本語レベル)',
      japanese: `現在、日本語能力試験${p.jlptLevel}レベルを勉強中です。`,
      romaji: `Genzai, nihongo nouryoku shiken ${p.jlptLevel} reberu o benkyou-chuu desu.`,
      english: `Currently, I am studying for JLPT ${p.jlptLevel} level.`,
      particleHighlight: 'を (o) — Object, 中 (chuu) — In the middle of doing',
      explanation: '「勉強中」(benkyou-chuu) is a compact way to say "in the middle of studying" — the suffix 中 (chuu) appended to a noun indicates an ongoing process.'
    });
  }

  // 21. Future Goal
  if (p.futureGoal) {
    sentences.push({
      id: id++,
      topic: '㉑ Future Goal (将来の目標)',
      japanese: `将来は${p.futureGoal}と思っています。`,
      romaji: `Shourai wa ${p.futureGoal} to omotteimasu.`,
      english: `In the future, I am thinking of / hoping to ${p.futureGoal}.`,
      particleHighlight: 'は (wa) — Topic (shourai = future), と (to) — Quotation of thought',
      explanation: '「〜と思っています」(to omotteimasu) is the ideal polite way to express a future hope or plan — literally "I am thinking that...". と marks the content of your thought.'
    });
  }

  // 22. Closing
  sentences.push({
    id: id++,
    topic: '㉒ Polite Closing (締めの挨拶)',
    japanese: 'どうぞよろしくお願いいたします。',
    romaji: 'Douzo yoroshiku onegai itashimasu.',
    english: 'I look forward to working with you. Please treat me well.',
    particleHighlight: 'を (o) — Object in polite request (onegai o)',
    explanation: '「どうぞよろしくお願いいたします」is the gold-standard concluding phrase for any Japanese self-introduction. It conveys deep respect, warmth, and eagerness for good relations. Always bow slightly when saying this.'
  });

  return sentences;
}


