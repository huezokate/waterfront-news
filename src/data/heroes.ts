/* ============================================================================
   TimeLens — the cast.

   Every chapter of the trail is told by one of three heroes, and the reader
   picks which. The roster lives here (not inside the chapters) for two reasons:
   a hero recurs across chapters, and each hero is destined to become a single
   3D figurine — one asset, many chapters.

   FIGURINE PIPELINE (Meshy): `figurine` stays undefined until a model exists.
   Until then every hero renders as an initialled circle. Drop a render at
   `public/figurines/<id>.png` (and the .glb beside it), set `figurine`, and the
   avatar upgrades everywhere at once — grid, hero select, chat, audio tour.
   See docs/figurines.md for the generation brief.

   `standing` is the triad the casting follows — every chapter offers one voice
   from office, one from trade, one from the street — so the pick is a real
   change of vantage rather than a change of name. It also colours the ring.
   ============================================================================ */

export type Standing = 'office' | 'trade' | 'street';

export interface Hero {
  id: string;
  name: string;
  /** What the chat and buttons call them — first name, rank, or title. */
  short: string;
  role: string;
  lifespan: string;
  standing: Standing;
  /** Two sentences, shown on the hero card once selected. */
  bio: string;
  /** Placeholder avatar until a figurine render exists. */
  initials: string;
  /** public/ path to the Meshy render. Undefined = fall back to initials. */
  figurine?: string;
  /** Canned in-character chat replies (no dialogue engine yet). */
  voice: string[];
}

export const STANDING_LABEL: Record<Standing, string> = {
  office: 'From office',
  trade: 'From trade',
  street: 'From the street',
};

export const HEROES: Record<string, Hero> = {
  vallejo: {
    id: 'vallejo',
    name: 'Gen. Mariano Guadalupe Vallejo',
    short: 'the General',
    role: 'Comandante of the northern frontier',
    lifespan: '1807–1890',
    standing: 'office',
    bio: 'Mexico’s military commander north of the bay, he governed a frontier by letter and licence and welcomed the Americans he thought he could bargain with. He kept his title, argued for statehood, and lost nearly all of his land to the courts that followed.',
    initials: 'MV',
    voice: [
      'I have spent a lifetime answering questions from newcomers. The finished tour will let me answer this one at the length it deserves.',
      'You ask what I thought would happen. Come back when the whole trail is walking — the answer takes longer than the flag did.',
    ],
  },
  richardson: {
    id: 'richardson',
    name: 'Capt. William Richardson',
    short: 'Richardson',
    role: 'Harbourmaster, founder of the trading post',
    lifespan: '1795–1856',
    standing: 'trade',
    bio: 'An English mate who jumped ship in 1822, married into the Californio gentry and pitched the first tent at Yerba Buena. He piloted nearly every vessel that entered the bay for two decades.',
    initials: 'WR',
    voice: [
      'A fair question. When the full tour opens I shall answer at length — for now, know that every hide we traded was as good as gold.',
      'Patience, friend. This is only the demonstration reel; walk the trail with me later and I will tell you about the mud, the cattle, and the ambition.',
    ],
  },
  briones: {
    id: 'briones',
    name: 'Juana Briones de Miranda',
    short: 'Juana',
    role: 'Rancher, healer, dairywoman of North Beach',
    lifespan: '1802–1889',
    standing: 'street',
    bio: 'She ran a dairy and vegetable garden at the cove, doctored sailors nobody else would touch, and left a husband when the law said she could not. The town ate because she farmed.',
    initials: 'JB',
    voice: [
      'You ask the questions the men never thought to. The finished tour will give me the time to answer them properly.',
      'I fed this place before it had a name. Come back when the full trail is walking and I will tell you what it cost.',
    ],
  },
  leidesdorff: {
    id: 'leidesdorff',
    name: 'William A. Leidesdorff',
    short: 'Leidesdorff',
    role: 'Merchant, U.S. vice-consul at Yerba Buena',
    lifespan: '1810–1848',
    standing: 'trade',
    bio: 'Born in the Danish West Indies to a Danish father and a Black Caribbean mother, he became the port’s richest merchant, built the City Hotel, and launched the first steamboat on the bay. He died at thirty-eight, weeks before the gold news broke.',
    initials: 'WL',
    voice: [
      'I kept the consulate and the warehouse both. The finished tour will let me explain how a man does that in two languages.',
      'Ask again when the full trail opens — a vice-consul learns never to answer half a question.',
    ],
  },
  montgomery: {
    id: 'montgomery',
    name: 'Capt. John B. Montgomery',
    short: 'the Captain',
    role: 'Commander, USS Portsmouth',
    lifespan: '1794–1873',
    standing: 'office',
    bio: 'He anchored the Portsmouth off the cove in July 1846 and sent seventy sailors ashore to raise the flag over the customs house. No shot was fired; the square still carries his name.',
    initials: 'JM',
    voice: [
      'In the finished tour I will recount the whole morning we raised the colors. For this demonstration, that flag must speak for itself.',
      'Ask me again when the full dialogue is rigged — a naval officer never gives half a report.',
    ],
  },
  bartlett: {
    id: 'bartlett',
    name: 'Alcalde Washington Bartlett',
    short: 'Bartlett',
    role: 'First American alcalde; signed the renaming decree',
    lifespan: '1810–1874',
    standing: 'office',
    bio: 'A naval lieutenant made civil magistrate of a village of a few hundred. In January 1847 he signed the order that traded the name Yerba Buena for San Francisco.',
    initials: 'WB',
    voice: [
      'A name is a promise, and this one we kept. The full story of the decree waits in the finished tour.',
      'For now the demonstration must suffice — but yes, it was part politics and part advertising, and I signed it gladly.',
    ],
  },
  brannan: {
    id: 'brannan',
    name: 'Sam Brannan',
    short: 'Brannan',
    role: 'Merchant, newspaperman, first president of the Vigilance Committee',
    lifespan: '1819–1889',
    standing: 'trade',
    bio: 'He arrived with two hundred Mormon colonists, ran the town’s first newspaper, and made himself California’s first millionaire by buying every shovel in the territory before shouting the gold news down Montgomery Street. He died broke.',
    initials: 'SB',
    voice: [
      'Ha! You want the secret? Sell the shovels. The rest of my confessions arrive with the full tour.',
      'A sharp question — hold onto it. This is only the sample case; the real inventory comes later.',
    ],
  },
  davis: {
    id: 'davis',
    name: 'William Heath Davis',
    short: 'Davis',
    role: 'Merchant and memoirist of the old town',
    lifespan: '1822–1909',
    standing: 'trade',
    bio: 'Hawaiian-born, he clerked on the cove as a boy and outlived nearly everyone he traded with. His memoirs are why we know what the village smelled like.',
    initials: 'WD',
    voice: [
      'I wrote sixty years of memoirs about this town — the full tour will let me quote them properly.',
      'Every mast in that cove has a story. The demonstration shows you the forest; the tour will show you the trees.',
    ],
  },
  gibbs: {
    id: 'gibbs',
    name: 'Mifflin Wistar Gibbs',
    short: 'Gibbs',
    role: 'Boot merchant; founded California’s first Black newspaper',
    lifespan: '1823–1915',
    standing: 'street',
    bio: 'He came in 1850, opened a boot emporium on Clay Street, and founded Mirror of the Times to argue for men who could not testify in court against a white witness. He refused to pay a poll tax that bought him no vote.',
    initials: 'MG',
    voice: [
      'You are asking who the law was for. Hold that question — the finished tour is where I answer it in full.',
      'I sold boots by day and set type by night. The demonstration has room for only one of those trades.',
    ],
  },
  pleasant: {
    id: 'pleasant',
    name: 'Mary Ellen Pleasant',
    short: 'Mrs. Pleasant',
    role: 'Boardinghouse keeper, financier, abolitionist',
    lifespan: '1814–1904',
    standing: 'street',
    bio: 'She ran the boardinghouses where the city’s money ate dinner, and quietly invested what she overheard. She funded John Brown, sheltered the formerly enslaved, and sued the streetcars for refusing her — and won.',
    initials: 'MP',
    voice: [
      'I hear a great deal and repeat very little. The finished tour is where I decide to repeat some of it.',
      'Every fortune in this town passed my dining table. Come back when there is time enough for the accounting.',
    ],
  },
  asing: {
    id: 'asing',
    name: 'Norman Asing (Yuan Sheng)',
    short: 'Asing',
    role: 'Restaurateur and spokesman of the Chinese quarter',
    lifespan: 'c. 1800–1860s',
    standing: 'street',
    bio: 'He kept the Macao and Woosung on Kearny Street and stood as an elder of the Chinese community. In 1852 he answered the Governor’s attack on Chinese immigrants in an open letter printed in the Daily Alta California.',
    initials: 'NA',
    voice: [
      'I answered a governor in print once. A visitor’s question deserves the same care — and more time than this demonstration allows.',
      'Sit, eat, ask again. The finished tour will have the patience this one lacks.',
    ],
  },
  geary: {
    id: 'geary',
    name: 'Mayor John W. Geary',
    short: 'Geary',
    role: 'Postmaster, then first mayor of San Francisco',
    lifespan: '1819–1873',
    standing: 'office',
    bio: 'He landed in 1849 carrying the city’s mail in a trunk and was elected its first mayor months later, presiding over a town that burned six times. He left to govern Kansas, and later Pennsylvania.',
    initials: 'JG',
    voice: [
      'A hard chapter, and a fair question. When the full tour is built I will answer as a mayor must — completely.',
      'Six great fires, and the city stood back up each time. The rest of the testimony waits for the finished tour.',
    ],
  },
  garrison: {
    id: 'garrison',
    name: 'Mayor C. K. Garrison',
    short: 'Garrison',
    role: 'Steamship agent; mayor, 1853–54',
    lifespan: '1809–1885',
    standing: 'office',
    bio: 'A Vanderbilt steamship agent who took the mayor’s chair for one year and treated the waterfront as a schedule to be met. He left office richer than he entered it.',
    initials: 'CG',
    voice: [
      'You are standing on ships and sand this very moment. In the full tour I will tell you exactly whose.',
      'Ah, Meiggs. A long story and a longer ledger — the finished tour will give it the time it deserves.',
    ],
  },
  ralston: {
    id: 'ralston',
    name: 'William C. Ralston',
    short: 'Ralston',
    role: 'Founder, Bank of California',
    lifespan: '1826–1875',
    standing: 'office',
    bio: 'He turned Comstock silver into a bank, a mill, a theatre and the Palace Hotel, financing half the skyline on nerve. When the bank failed he walked into the bay and did not come out.',
    initials: 'WC', // Chapman — 'WR' is already Richardson's
    voice: [
      'Silver built more of this city than gold ever did. The ledgers open fully when the tour does.',
      'A banker answers every question eventually — this demonstration simply hasn’t the funds yet.',
    ],
  },
  norton: {
    id: 'norton',
    name: 'Emperor Norton I',
    short: 'the Emperor',
    role: 'Emperor of these United States, Protector of Mexico',
    lifespan: '1818–1880',
    standing: 'street',
    bio: 'He arrived in 1849 with a fortune, lost it cornering the rice market, and in 1859 declared himself Emperor. The city played along for twenty years — his scrip was honoured in restaurants and the papers printed his decrees.',
    initials: 'N1',
    voice: [
      'We shall decree a fuller answer once Our tour is complete. Our word is good; ask any restaurant on Montgomery.',
      'We have proclaimed a bridge across this bay, and We are told it took them sixty years. Patience is a subject’s virtue.',
    ],
  },
  'ferry-captain': {
    id: 'ferry-captain',
    name: 'The Ferry Captain',
    short: 'the Captain',
    role: 'Oakland–San Francisco crossing',
    lifespan: 'the 1860s crossing',
    standing: 'trade',
    bio: 'A composite of the men who ran the twenty-minute crossing from the railhead at Oakland. For a generation, every visitor’s first sight of San Francisco came over his bow.',
    initials: 'FC',
    voice: [
      'Every soul who ever loved this city first saw it from my deck. Ride the full tour and I will show you their faces.',
      'Wind, gulls, and the city rising — the demonstration gives you thirty seconds; the crossing takes twenty minutes. Come back for it.',
    ],
  },
};

export const heroById = (id: string): Hero => {
  const h = HEROES[id];
  if (!h) throw new Error(`Unknown hero "${id}" — add them to src/data/heroes.ts`);
  return h;
};
