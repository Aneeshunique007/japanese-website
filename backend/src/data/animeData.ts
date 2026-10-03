export interface AnimeDialogueLine {
  speaker: string;
  avatar: string;
  japanese: string;
  furigana: string;
  romaji: string;
  english: string;
  grammarNote?: string;
}

export interface AnimeDialogueEntry {
  id: string;
  title: string;
  anime: string;
  animeJapanese: string;
  category: string;
  difficulty: 'Beginner (N5)' | 'Elementary (N4)' | 'Intermediate (N3)' | 'Advanced (N2)';
  description: string;
  audioPrompt: string;
  lines: AnimeDialogueLine[];
}

export const ANIME_CATEGORIES = [
  { id: 'all', label: 'All Anime', japanese: 'すべて', icon: '✨' },
  { id: 'One Piece', label: 'One Piece', japanese: 'ワンピース', icon: '👒' },
  { id: 'Bleach', label: 'Bleach', japanese: 'ブリーチ', icon: '🗡️' },
  { id: 'Naruto', label: 'Naruto', japanese: 'ナルト', icon: '🍥' },
  { id: 'Demon Slayer', label: 'Demon Slayer', japanese: '鬼滅の刃', icon: '🔥' },
  { id: 'Jujutsu Kaisen', label: 'Jujutsu Kaisen', japanese: '呪術廻戦', icon: '🕶️' },
  { id: 'Attack on Titan', label: 'Attack on Titan', japanese: '進撃の巨人', icon: '⚔️' },
];

export const ANIME_DIALOGUES: AnimeDialogueEntry[] = [
  // ==========================================
  // ONE PIECE (ワンピース)
  // ==========================================
  {
    id: 'd-op-1',
    title: "Luffy & Shanks: The Straw Hat Promise",
    anime: 'One Piece',
    animeJapanese: 'ワンピース',
    category: 'One Piece',
    difficulty: 'Beginner (N5)',
    description: "Shanks entrusts his treasure straw hat to young Luffy after saving him, sealing Luffy's dream to conquer the Grand Line.",
    audioPrompt: '海賊王に、俺はなる！！！',
    lines: [
      {
        speaker: 'Shanks',
        avatar: '👒',
        japanese: 'いつかきっと返しに来い。立派な海賊になってな。',
        furigana: 'いつか きっと かえし に こい。りっぱ な かいぞく に なって な。',
        romaji: 'Itsuka kitto kaeshi ni koi. Rippa na kaizoku ni natte na.',
        english: 'Bring it back to me someday, once you become a splendid pirate.',
        grammarNote: '〜に来い (Imperative of くる, command to come do something) | 立派な (Na-adj: splendid/great)'
      },
      {
        speaker: 'Luffy',
        avatar: '🍖',
        japanese: '俺はいつか、この一味にも負けない仲間を集めて、世界一の財宝を見つけて、海賊王になってやる！',
        furigana: 'おれ は いつか、この いちみ に も まけない なかま を あつめて、せかいいち の ざいほう を みつけて、かいぞくおう に なって やる！',
        romaji: 'Ore wa itsuka, kono ichimi ni mo makenai nakama o atsumete, sekaiichi no zaihou o mitsukete, kaizokuou ni natte yaru!',
        english: "Someday I'm gonna gather a crew that won't lose to yours, find the world's greatest treasure, and become the King of the Pirates!",
        grammarNote: '俺 (Ore - casual masculine pronoun) | 〜てやる (Determined resolve) | 負けない (Potential negative of 負ける)'
      },
      {
        speaker: 'Shanks',
        avatar: '👒',
        japanese: 'ほぉ…！俺たちを越えるのか。じゃあ…この帽子をお前に預ける。',
        furigana: 'ほぉ…！おれたち を こえる の か。じゃあ…この ぼうし を おまえ に あずける。',
        romaji: 'Hoo...! Oretachi o koeru no ka. Jaa... kono boushi o omae ni azukeru.',
        english: "Oh...! So you plan to surpass us? Then... I'll entrust this hat to you.",
        grammarNote: '越える (Koeru - to surpass/cross over) | 預ける (Azukeru - to entrust/leave in care)'
      },
      {
        speaker: 'Luffy',
        avatar: '🍖',
        japanese: '海賊王に、俺はなる！！！',
        furigana: 'かいぞくおう に、おれ は なる！！！',
        romaji: 'Kaizokuou ni, ore wa naru!!!',
        english: 'I am going to become the King of the Pirates!!!',
        grammarNote: 'Inverted word order: [Goal] に、俺はなる (Emphasizes the dream before the subject)'
      }
    ]
  },
  {
    id: 'd-op-2',
    title: 'Nami & Luffy: "Help Me" (Arlong Park)',
    anime: 'One Piece',
    animeJapanese: 'ワンピース',
    category: 'One Piece',
    difficulty: 'Beginner (N5)',
    description: "Nami finally breaks down in tears asking Luffy for help, and Luffy roars his unconditional loyalty.",
    audioPrompt: 'ルフィ…助けて… 当たり前だーーー！！！',
    lines: [
      {
        speaker: 'Nami',
        avatar: '🍊',
        japanese: 'ルフィ…助けて…',
        furigana: 'ルフィ…たすけて…',
        romaji: 'Rufi... tasukete...',
        english: 'Luffy... help me...',
        grammarNote: '助けて (Te-form informal plea: please save/help me)'
      },
      {
        speaker: 'Luffy',
        avatar: '🍖',
        japanese: '当たり前だーーーーー！！！',
        furigana: 'あたりまえ だーーーーー！！！',
        romaji: 'Atarimae daaaaa!!!',
        english: 'OF COURSE I WILL!!!!!',
        grammarNote: '当たり前 (Atarimae - obvious, self-evident, naturally so)'
      },
      {
        speaker: 'Zoro',
        avatar: '⚔️',
        japanese: '行くぞ、野郎ども！アーロンパークをぶっ潰す！',
        furigana: 'いく ぞ、やろうども！アーロンパーク を ぶっつぶす！',
        romaji: 'Iku zo, yaroudomo! Aaron Paaku o buttsubusu!',
        english: "Let's move, boys! We're gonna smash Arlong Park to pieces!",
        grammarNote: '行くぞ (Iku zo - masculine imperative "let us go") | ぶっ潰す (Slang prefix ぶっ + 潰す: utterly crush)'
      }
    ]
  },
  {
    id: 'd-op-3',
    title: "Zoro's Vow: Never Lose Again",
    anime: 'One Piece',
    animeJapanese: 'ワンピース',
    category: 'One Piece',
    difficulty: 'Elementary (N4)',
    description: "After facing Hawkeye Mihawk at the Baratie, Zoro raises his sword to the sky and vows never to lose again.",
    audioPrompt: '俺はもう、二度と敗けねぇから！！！',
    lines: [
      {
        speaker: 'Zoro',
        avatar: '⚔️',
        japanese: 'ルフィ…聞こえるか？不安にさせたかよ…お前が…海賊王にならなきゃ…俺が困るんだよ！',
        furigana: 'ルフィ…きこえる か？ふあん に させた か よ…おまえ が…かいぞくおう に ならなきゃ…おれ が こまる ん だ よ！',
        romaji: 'Rufi... kikoeru ka? Fuan ni saseta ka yo... omae ga... kaizokuou ni naranakya... ore ga komaru n da yo!',
        english: "Luffy... can you hear me? Did I make you worry? If you don't become Pirate King... I'll look bad!",
        grammarNote: '〜なきゃ (Colloquial for 〜なければならない: Must do) | 困る (Komaru - to be troubled/at a loss)'
      },
      {
        speaker: 'Zoro',
        avatar: '⚔️',
        japanese: '俺はもう、二度と敗けねぇから！！！文句あるか、海賊王！',
        furigana: 'おれ は もう、にど と まけねぇ から！！！もんく ある か、かいぞくおう！',
        romaji: 'Ore wa mou, nido to makenee kara!!! Monku aru ka, kaizokuou!',
        english: 'I will NEVER lose again, ever!!! Got any complaints, Pirate King?!',
        grammarNote: '二度と〜ない (Never again) | 負けねぇ (Colloquial masculine for 負けない)'
      },
      {
        speaker: 'Luffy',
        avatar: '🍖',
        japanese: 'ししし！ねぇよ！',
        furigana: 'ししし！ねぇ よ！',
        romaji: 'Shishishi! Nee yo!',
        english: 'Shishishi! Not a single one!',
        grammarNote: 'ねぇ (Colloquial pronunciation of ない - none/no)'
      }
    ]
  },

  // ==========================================
  // BLEACH (ブリーチ)
  // ==========================================
  {
    id: 'd-bl-1',
    title: "Ichigo's First Bankai: Tensa Zangetsu",
    anime: 'Bleach',
    animeJapanese: 'BLEACH - ブリーチ',
    category: 'Bleach',
    difficulty: 'Intermediate (N3)',
    description: "Kurosaki Ichigo shocks Kuchiki Byakuya atop the Sokyoku Hill by unleashing the ultimate Shinigami technique.",
    audioPrompt: '卍解……！『天鎖斬月』！',
    lines: [
      {
        speaker: 'Byakuya',
        avatar: '🌸',
        japanese: '愚かな。貴様ごとき人間が、死神の奥義『卍解』に至れるはずがない。',
        furigana: 'おろか な。きさま ごとき にんげん が、しにがみ の おうぎ 『ばんかい』 に いたれる はず が ない。',
        romaji: 'Oroka na. Kisama gotoki ningen ga, shinigami no ougi Bankai ni itareru hazu ga nai.',
        english: 'Foolish. A mere human like you could never possibly achieve the Shinigami ultimate art: Bankai.',
        grammarNote: '〜ごとき (Suffix: someone of such humble stature as...) | 〜はずがない (There is no way / impossible)'
      },
      {
        speaker: 'Ichigo',
        avatar: '🗡️',
        japanese: '見てみなきゃ分かんねぇだろ。見せてやるよ、俺の卍解を！',
        furigana: 'みて みなきゃ わかんねぇ だろ。みせて やる よ、おれ の ばんかい を！',
        romaji: 'Mite minakya wakannee daro. Misete yaru yo, ore no bankai o!',
        english: "You won't know unless you see it with your own eyes. I'll show you... my Bankai!",
        grammarNote: '〜てみる (Try doing) | 〜なきゃ分かんない (Can not know without doing)'
      },
      {
        speaker: 'Ichigo',
        avatar: '🗡️',
        japanese: '卍解……！『天鎖斬月』！',
        furigana: 'ばんかい……！『てんさ ざんげつ』！',
        romaji: 'Bankai......! Tensa Zangetsu!',
        english: 'Bankai......! "Heaven Chain Slaying Moon"!',
        grammarNote: '卍解 (Bankai - Final Release of Zanpakuto) | 天鎖斬月 (Tensa Zangetsu)'
      },
      {
        speaker: 'Byakuya',
        avatar: '🌸',
        japanese: 'なっ…！その小さき刃が…卍解だと…？！',
        furigana: 'なっ…！その ちいさき やいば が…ばんかい だ と…？！',
        romaji: 'Na...! Sono chiisaki yaiba ga... bankai da to...?!',
        english: 'Wha...?! That slender blade... is a Bankai...?!',
        grammarNote: '小さき (Classical adjective form of 小さい - small/slender)'
      }
    ]
  },
  {
    id: 'd-bl-2',
    title: "Aizen's Treachery: Standing Upon the Heavens",
    anime: 'Bleach',
    animeJapanese: 'BLEACH - ブリーチ',
    category: 'Bleach',
    difficulty: 'Advanced (N2)',
    description: "Captain Sosuke Aizen reveals his supreme ambition to Captain Ukitake before ascending into Hueco Mundo.",
    audioPrompt: 'これからは……私が天に立つ。',
    lines: [
      {
        speaker: 'Ukitake',
        avatar: '⚡',
        japanese: '藍染…！貴様、そこまで堕ちたのか！何のために尸魂界を裏切った！',
        furigana: 'あいぜん…！きさま、そこ まで おちた の か！なん の ため に ソウル・ソサエティ を うらぎった！',
        romaji: 'Aizen...! Kisama, soko made ochita no ka! Nan no tame ni Souru Sosaeti o uragitta!',
        english: 'Aizen...! Have you fallen so far?! For what reason did you betray Soul Society?!',
        grammarNote: '〜のために (For the purpose/reason of) | 堕ちる (Ochiru - to fall/degenerate)'
      },
      {
        speaker: 'Aizen',
        avatar: '👓',
        japanese: '傲慢だな、浮竹。初めから誰も、天に立ってなどいない。',
        furigana: 'ごうまん だ な、うきたけ。はじめ から だれ も、てん に たって など いない。',
        romaji: 'Gouman da na, Ukitake. Hajime kara dare mo, ten ni tatte nado inai.',
        english: 'How arrogant, Ukitake. From the very beginning, no one has ever stood atop the heavens.',
        grammarNote: '傲慢 (Gouman - arrogance) | 〜など (Such a thing as...) | 初めから誰も (Nobody from the start)'
      },
      {
        speaker: 'Aizen',
        avatar: '👓',
        japanese: '君も、僕も、神すらもな。だが、その耐え難い天の座の空白も終わる。',
        furigana: 'きみ も、ぼく も、かみ すら も な。だが、その たえがたい てん の ざ の くうはく も おわる。',
        romaji: 'Kimi mo, boku mo, kami sura mo na. Daga, sono taegatai ten no za no kuuhaku mo owaru.',
        english: 'Not you, not me, not even God himself. But that unbearable void on the throne of heaven ends today.',
        grammarNote: '〜すら (Even [extreme case]) | 〜難い (Taegatai: difficult/unbearable to endure)'
      },
      {
        speaker: 'Aizen',
        avatar: '👓',
        japanese: 'これからは……私が天に立つ。',
        furigana: 'これ から は……わたし が てん に たつ。',
        romaji: 'Kore kara wa...... watashi ga ten ni tatsu.',
        english: 'From now on...... I shall stand atop the heavens.',
        grammarNote: 'これからは (From now onward) | 私が天に立つ (I will stand upon the heavens)'
      }
    ]
  },
  {
    id: 'd-bl-3',
    title: "Rukia & Ichigo: The Resolve to Protect",
    anime: 'Bleach',
    animeJapanese: 'BLEACH - ブリーチ',
    category: 'Bleach',
    difficulty: 'Elementary (N4)',
    description: "Rukia rebukes Ichigo during his moments of hesitation, reminding him what a Shinigami blade exists for.",
    audioPrompt: '恐れるな、一護！退けば老いるぞ！',
    lines: [
      {
        speaker: 'Rukia',
        avatar: '🐇',
        japanese: '恐れるな、一護！退けば老いるぞ！臆せば死ぬぞ！',
        furigana: 'おそれる な、いちご！しりぞけば おいる ぞ！おくせば しぬ ぞ！',
        romaji: 'Osoreru na, Ichigo! Shirizokeba oiru zo! Okuseba shinu zo!',
        english: 'Do not fear, Ichigo! If you retreat, you age! If you hesitate, you die!',
        grammarNote: '動詞辞書形 + な (Negative command: Do not!) | 〜ば (Conditional if)'
      },
      {
        speaker: 'Ichigo',
        avatar: '🗡️',
        japanese: '分かってる…！俺が守るって決めたんだ！誰一人、死なせやしねぇ！',
        furigana: 'わかってる…！おれ が まもる って きめた ん だ！だれひとり、しなせ や しねぇ！',
        romaji: 'Wakatteru...! Ore ga mamoru tte kimeta n da! Darehitori, shinase ya shinee!',
        english: "I know that...! I already resolved to protect them! I won't let a single person die!",
        grammarNote: '〜って決めた (Informal citation: decided that...) | 〜やしねぇ (Emphatic colloquial negative: won\'t ever)'
      }
    ]
  },

  // ==========================================
  // NARUTO (NARUTO - ナルト -)
  // ==========================================
  {
    id: 'd-na-1',
    title: "Naruto's Ninja Way: Never Going Back",
    anime: 'Naruto',
    animeJapanese: 'NARUTO - ナルト -',
    category: 'Naruto',
    difficulty: 'Beginner (N5)',
    description: "During the Chunin Exams, Naruto refuses to accept Neji's fatalism and declares his unwavering Ninja Way.",
    audioPrompt: 'まっすぐ自分の言葉は曲げねぇ…それがオレの忍道だ！',
    lines: [
      {
        speaker: 'Neji',
        avatar: '👁️',
        japanese: '落ちこぼれが運命を変えることなどできん。人は生まれながらに定められているのだ。',
        furigana: 'おちこぼれ が うんめい を かえる こと など できん。ひと は うまれながら に さだめられている の だ。',
        romaji: 'Ochikobore ga unmei o kaeru koto nado dekin. Hito wa umarenagara ni sadamerarete iru no da.',
        english: 'A failure can never change destiny. Humans are predetermined from birth.',
        grammarNote: '〜ことなどできん (Archaic/stern negative for できない: Cannot do such a thing) | 生まれながらに (From birth)'
      },
      {
        speaker: 'Naruto',
        avatar: '🍥',
        japanese: '落ちこぼれだの運命だの、グチグチうるせぇんだよ！',
        furigana: 'おちこぼれ だの うんめい だの、グチグチ うるせぇ ん だ よ！',
        romaji: 'Ochikobore dano unmei dano, guchiguchi urusee n da yo!',
        english: "'Failures' this, 'destiny' that... shut your complaining mouth already!",
        grammarNote: '〜だの〜だの (Listing items dismissively) | うるせぇ (Colloquial for うるさい - noisy/shut up)'
      },
      {
        speaker: 'Naruto',
        avatar: '🍥',
        japanese: 'まっすぐ自分の言葉は曲げねぇ…それがオレの忍道だ！',
        furigana: 'まっすぐ じぶん の ことば は まげねぇ…それが オレ の にんどう だ！',
        romaji: 'Massugu jibun no kotoba wa magenee... sore ga ore no nindou da!',
        english: 'I never go back on my word... THAT is my Ninja Way, dattebayo!',
        grammarNote: 'まっすぐ (Directly/honestly) | 曲げねぇ (Colloquial for 曲げない - won\'t bend) | 忍道 (Ninja creed)'
      }
    ]
  },
  {
    id: 'd-na-2',
    title: "Kakashi's Golden Rule: Team 7 Bell Test",
    anime: 'Naruto',
    animeJapanese: 'NARUTO - ナルト -',
    category: 'Naruto',
    difficulty: 'Elementary (N4)',
    description: "Kakashi reveals the true purpose of the bell test: putting your comrades before rules and orders.",
    audioPrompt: '仲間を大切にしない奴は、それ以上のクズだ！',
    lines: [
      {
        speaker: 'Kakashi',
        avatar: '📖',
        japanese: '忍者の世界でルールや掟を破る奴は、クズ呼ばわりされる。',
        furigana: 'にんじゃ の せかい で ルール や おきて を やぶる やつ は、クズ よばわり される。',
        romaji: 'Ninja no sekai de ruuru ya okite o yaburu yatsu wa, kuzu yobawari sareru.',
        english: 'In the ninja world, those who break rules and codes are called scum.',
        grammarNote: '〜呼ばわりされる (Passive: to be branded/called a derogatory term) | 掟 (Okite - ninja code)'
      },
      {
        speaker: 'Kakashi',
        avatar: '📖',
        japanese: '…けどな！仲間を大切にしない奴は、それ以上のクズだ！',
        furigana: '…けど な！なかま を たいせつ に しない やつ は、それ いじょう の クズ だ！',
        romaji: '...Kedo na! Nakama o taisetsu ni shinai yatsu wa, sore ijou no kuzu da!',
        english: '...But! Those who abandon their comrades are worse than scum!',
        grammarNote: 'それ以上 (Sore ijou - more than that / even worse) | 大切にする (To cherish/value)'
      },
      {
        speaker: 'Naruto',
        avatar: '🍥',
        japanese: 'カカシ先生…！合格ってことだってばよ？！',
        furigana: 'カカシせんせい…！ごうかく って こと だってばよ？！',
        romaji: 'Kakashi-sensei...! Goukaku tte koto dattebayo?!',
        english: 'Kakashi-sensei...! Does that mean we passed, dattebayo?!',
        grammarNote: '〜ってこと (Informal: does that mean...) | だってばよ (Naruto\'s signature verbal tic)'
      }
    ]
  },
  {
    id: 'd-na-3',
    title: "Naruto & Sasuke: Bond at the Valley of the End",
    anime: 'Naruto',
    animeJapanese: 'NARUTO - ナルト -',
    category: 'Naruto',
    difficulty: 'Intermediate (N3)',
    description: "Sasuke confronts Naruto over why he keeps chasing him into darkness, leading to their decisive clash.",
    audioPrompt: '友だちだからだ！お前がオレの初めての友達だったからだ！',
    lines: [
      {
        speaker: 'Sasuke',
        avatar: '⚡',
        japanese: 'なぜそこまでオレにこだわる…？オレはお前との繋がりを断ち切ると言ったはずだ！',
        furigana: 'なぜ そこ まで オレ に こだわる…？オレ は おまえ と の つながり を たちきる と いった はず だ！',
        romaji: 'Naze soko made ore ni kodawaru...? Ore wa omae to no tsunagari o tachikiru to itta hazu da!',
        english: "Why are you so obsessed with me...? I told you that I'm cutting all bonds with you!",
        grammarNote: 'こだわる (To fixate on / cling to) | 断ち切る (To sever cleanly)'
      },
      {
        speaker: 'Naruto',
        avatar: '🍥',
        japanese: '友だちだからだ！お前がオレの初めての友達だったからだ！',
        furigana: 'ともだち だ から だ！おまえ が オレ の はじめて の ともだち だった から だ！',
        romaji: 'Tomodachi da kara da! Omae ga ore no hajimete no tomodachi datta kara da!',
        english: "Because you're my friend! Because you were my very first friend ever!",
        grammarNote: '〜からだ (Because... / giving deep personal justification)'
      },
      {
        speaker: 'Sasuke',
        avatar: '⚡',
        japanese: '…本当に、お前という奴は…甘すぎるんだよ、ウスラトンカチ。',
        furigana: '…ほんとう に、おまえ と いう やつ は…あますぎる ん だ よ、ウスラトンカチ。',
        romaji: '...Hontou ni, omae to iu yatsu wa... amasugiru n da yo, usuratonkachi.',
        english: '...Honestly, you really are... far too soft, you numbskull.',
        grammarNote: '〜すぎる (Overly / too much: 甘い - naive/soft) | ウスラトンカチ (Sasuke\'s affectionate insult)'
      }
    ]
  },

  // ==========================================
  // DEMON SLAYER (鬼滅の刃 - Kimetsu no Yaiba)
  // ==========================================
  {
    id: 'd-ds-1',
    title: "Rengoku Kyojuro: Set Your Heart Ablaze",
    anime: 'Demon Slayer',
    animeJapanese: '鬼滅の刃',
    category: 'Demon Slayer',
    difficulty: 'Intermediate (N3)',
    description: "Flame Hashira Rengoku passes his burning spirit to Tanjiro in his legendary final moments.",
    audioPrompt: '心を燃やせ。歯を食いしばって前を向け。',
    lines: [
      {
        speaker: 'Rengoku',
        avatar: '🔥',
        japanese: '心を燃やせ。歯を食いしばって前を向け。',
        furigana: 'こころ を もやせ。は を くいしばって まえ を むけ。',
        romaji: 'Kokoro o moyase. Ha o kuishibatte mae o muke.',
        english: 'Set your heart ablaze. Clench your teeth and look forward.',
        grammarNote: '燃やせ (Imperative of 燃やす - burn) | 歯を食いしばる (Idiom: Grit your teeth)'
      },
      {
        speaker: 'Rengoku',
        avatar: '🔥',
        japanese: '己の弱さや不甲斐なさにどれだけ打ちのめされようと、足を止めるな。',
        furigana: 'おのれ の よわさ や ふがいなさ に どれだけ うちのめされよう と、あし を とめる な。',
        romaji: 'Onore no yowasa ya fugainasa ni doredake uchinomesareyou to, ashi o tomeru na.',
        english: 'No matter how battered you are by your own weakness and inadequacy, do not halt your steps.',
        grammarNote: '〜ようと (Even if / regardless of: Volitional + と) | 止めるな (Negative imperative)'
      },
      {
        speaker: 'Tanjiro',
        avatar: '🎴',
        japanese: '煉獄さん…！俺は…俺はもっと強くなります！',
        furigana: 'れんごくさん…！おれ は…おれ は もっと つよく なります！',
        romaji: 'Rengoku-san...! Ore wa... ore wa motto tsuyoku narimasu!',
        english: 'Rengoku-san...! I will... I will become so much stronger!',
        grammarNote: '〜くなります (Adjective + なる: To become [state])'
      }
    ]
  },
  {
    id: 'd-ds-2',
    title: "Tomioka Giyu: Seize Your Own Destiny",
    anime: 'Demon Slayer',
    animeJapanese: '鬼滅の刃',
    category: 'Demon Slayer',
    difficulty: 'Intermediate (N3)',
    description: "Water Hashira Giyu rebukes Tanjiro for pleading helplessly in the snow, igniting his warrior resolve.",
    audioPrompt: '生殺与奪の権を他人に握らせるな！',
    lines: [
      {
        speaker: 'Giyu',
        avatar: '🌊',
        japanese: '泣くな！絶望するな！そんなものは今することではない！',
        furigana: 'なくな！ぜつぼう する な！そんな もの は いま すること で は ない！',
        romaji: 'Naku na! Zetsubou suru na! Sonna mono wa ima suru koto de wa nai!',
        english: "Don't cry! Don't despair! Those are not things you should be doing right now!",
        grammarNote: '動詞 + な (Strict command: Do not!) | することではない (Not the thing to do)'
      },
      {
        speaker: 'Giyu',
        avatar: '🌊',
        japanese: '生殺与奪の権を他人に握らせるな！惨めったらしく蹲るのはやめろ！',
        furigana: 'せいさつよだつ の けん を たにん に にぎらせる な！みじめったらしく うずくまる の は やめろ！',
        romaji: 'Seisatsuyodatsu no ken o tanin ni nigiraseru na! Mijimettarashiku uzukumaru no wa yamero!',
        english: 'Do not let others hold the power over your own life and death! Stop groveling so pathetically!',
        grammarNote: '握らせる (Causative: let grasp) + な (Negative command) | やめろ (Imperative of やめる)'
      },
      {
        speaker: 'Tanjiro',
        avatar: '🎴',
        japanese: '妹を…禰豆子を助けてください…！',
        furigana: 'いもうと を…ねずこ を たすけて ください…！',
        romaji: 'Imouto o... Nezuko o tasukete kudasai...!',
        english: 'Please... save my sister Nezuko...!',
        grammarNote: '〜てください (Polite request for rescue)'
      }
    ]
  },

  // ==========================================
  // JUJUTSU KAISEN (呪術廻戦)
  // ==========================================
  {
    id: 'd-jk-1',
    title: "Gojo Satoru: Domain Expansion - Infinite Void",
    anime: 'Jujutsu Kaisen',
    animeJapanese: '呪術廻戦',
    category: 'Jujutsu Kaisen',
    difficulty: 'Intermediate (N3)',
    description: "Gojo lifts his blindfold against the Special Grade Curse Jogo and reveals the summit of jujutsu sorcery.",
    audioPrompt: '大丈夫。僕、最強だから。領域展開…無量空処。',
    lines: [
      {
        speaker: 'Jogo',
        avatar: '🌋',
        japanese: '人間風情が呪霊の領域に耐えられるわけがなかろう！焼き尽くしてやる！',
        furigana: 'にんげんふぜい が じゅれい の りょういき に たえられる わけ が なかろう！やきつくして やる！',
        romaji: 'Ningenfuzei ga jurei no ryouiki ni taerareru wake ga nakarou! Yakitsukushite yaru!',
        english: "There's no way a mere human could endure a cursed spirit's domain! I'll incinerate you!",
        grammarNote: '人間風情 (Ningenfuzei - a mere human) | 〜わけがなかろう (Archaic conjecture for 〜わけがない: impossible)'
      },
      {
        speaker: 'Gojo',
        avatar: '🕶️',
        japanese: '大丈夫。僕、最強だから。',
        furigana: 'だいじょうぶ。ぼく、さいきょう だ から。',
        romaji: 'Daijoubu. Boku, saikyou da kara.',
        english: "Don't worry. After all, I'm the strongest.",
        grammarNote: '最強 (Saikyou - the strongest) | 〜だから (Casual self-assured reasoning)'
      },
      {
        speaker: 'Gojo',
        avatar: '🕶️',
        japanese: '領域展開……『無量空処』。',
        furigana: 'りょういきてんかい……『むりょうくうしょ』。',
        romaji: 'Ryouiki Tenkai...... Muryoukuusho.',
        english: 'Domain Expansion...... "Infinite Void".',
        grammarNote: '領域展開 (Domain Expansion) | 無量 (Boundless/infinite) | 空処 (Spatial emptiness)'
      }
    ]
  },

  // ==========================================
  // ATTACK ON TITAN (進撃の巨人)
  // ==========================================
  {
    id: 'd-aot-1',
    title: "Erwin & Levi: Dedicate Your Hearts (Shinzou wo Sasageyo)",
    anime: 'Attack on Titan',
    animeJapanese: '進撃の巨人',
    category: 'Attack on Titan',
    difficulty: 'Intermediate (N3)',
    description: "Commander Erwin prepares the final suicide charge against the Beast Titan while Levi takes his vow.",
    audioPrompt: '心臓を捧げよ！！！',
    lines: [
      {
        speaker: 'Levi',
        avatar: '☕',
        japanese: '夢を諦めて死んでくれ。新兵どもを地獄へ導け。獣の巨人は俺が仕留める。',
        furigana: 'ゆめ を あきらめて しんで くれ。しんぺいども を じごく へ みちびけ。けもの の きょじん は おれ が しとめる。',
        romaji: 'Yume o akiramete shinde kure. Shinpeidomo o jigoku e michibike. Kemono no kyojin wa ore ga shitomeru.',
        english: 'Give up on your dreams and die for us. Lead the recruits straight into hell. I will take down the Beast Titan.',
        grammarNote: '〜てくれ (Casual imperative among equals) | 仕留める (Shitomeru - to bring down/slay prey)'
      },
      {
        speaker: 'Erwin',
        avatar: '⚔️',
        japanese: 'リヴァイ、ありがとう。……兵士よ怒れ！兵士よ叫べ！兵士よ戦え！',
        furigana: 'リヴァイ、ありがとう。……へいし よ いかれ！へいし よ さけべ！へいし よ たたかえ！',
        romaji: 'Rivai, arigatou. ......Heishi yo ikare! Heishi yo sakebe! Heishi yo tatakae!',
        english: 'Levi, thank you. ......My soldiers, rage! My soldiers, scream! My soldiers, FIGHT!',
        grammarNote: '〜よ (Poetic/formal vocative: O soldiers!) | 怒れ/叫べ/戦え (Imperative forms)'
      },
      {
        speaker: 'Erwin',
        avatar: '⚔️',
        japanese: '心臓を捧げよ！！！',
        furigana: 'しんぞう を ささげよ！！！',
        romaji: 'Shinzou o sasageyo!!!',
        english: 'DEDICATE YOUR HEARTS!!!',
        grammarNote: '捧げよ (Classical solemn imperative of 捧げる - to offer/dedicate)'
      }
    ]
  }
];

// Re-export as DIALOGUES for backward compatibility
export const DIALOGUES = ANIME_DIALOGUES;
export type DialogueEntry = AnimeDialogueEntry;
