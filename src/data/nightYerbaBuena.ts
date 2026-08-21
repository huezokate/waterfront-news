/* Yerba Buena prototype chapters — Direction D proof of concept.
   Script text: "Waterfront Trail Scripts, 30 Second Drafts of 1833-70" (Aug 3 2026).

   Each chapter is cast with THREE heroes and the reader picks one. Casting rule:
   one voice from office, one from trade, one from the street (see `standing` in
   heroes.ts) — so choosing changes the vantage, not just the name on the byline.
   `lens` is that hero's angle on this chapter; it opens the dispatch when they
   are the one telling it. The heroes themselves live in heroes.ts and recur. */

export interface HeroCast {
  heroId: string;
  /** One paragraph in the hero's voice — the way THEY enter this chapter. */
  lens: string;
  /** Runtime of this hero's audio walk of this chapter, in minutes. */
  tourMinutes: number;
}

/** "Watch a historian react" — slot only. No commentary has been recorded yet,
    so no historian is named: `pending` keeps the card honest in the prototype. */
export interface HistorianSlot {
  field: string;
  angle: string;
  runtime: string;
  pending: boolean;
  name?: string;
}

export interface NightEventData {
  id: string;
  years: string;
  title: string; // stack label: 2–3 words
  image: string; // public/historic path
  /** public/ path to the ambient landscape loop, once one is shot. Falls back
      to a Ken Burns move on `image`. */
  video?: string;
  heroes: HeroCast[]; // exactly three: office · trade · street
  script: string[];
  historian: HistorianSlot;
}

/** "How the project came to life" — one film for the whole trail, not per
    chapter. Set `youtubeId` when the cut is published; until then the card
    renders as an unreleased placeholder. */
export const MAKING_OF = {
  title: 'How the trail came to life',
  blurb:
    'Archive divers, a scanner, three historians and a 3D printer: the year it took to turn nine boxes of maps into a walk along the water.',
  runtime: '8:12',
  youtubeId: undefined as string | undefined,
  poster: 'historic/4-2-3e-1963-buried-ships-map.jpg',
};

export const YERBA_BUENA_EVENTS: NightEventData[] = [
  {
    id: 'trading-post',
    years: '1833–1845',
    title: 'The Trading Post',
    image: 'historic/4-1-1b-1828-bechy-map-of-sf-bay.jpg',
    heroes: [
      {
        heroId: 'vallejo',
        tourMinutes: 5,
        lens: 'From my quarters at Sonoma this cove was a line item — a licence granted, a duty collected, a foreigner watched. I did not think a hide-yard would become a city. I thought it would become a port I could tax.',
      },
      {
        heroId: 'richardson',
        tourMinutes: 5,
        lens: 'I pitched the first tent on this beach and piloted every ship that dared the Gate for twenty years. Ask the water what it was worth then: a hide, a barrel of tallow, and a rowboat with a strong back in it.',
      },
      {
        heroId: 'briones',
        tourMinutes: 4,
        lens: 'The men will tell you about the ships. I will tell you about the milk, the beans and the beach where I nursed sailors the ships had finished with. A settlement is not trade. It is supper.',
      },
    ],
    script: [
      'Before San Francisco became a maritime port and city, a tiny settlement named Yerba Buena near a muddy cove was the trading center. Ships anchored offshore, and sailors rowed through shallow water to reach a tiny settlement.',
      'Captain William Richardson opened a trading post here, exchanging supplies for cattle hides and tallow, the animal fat used to make soap and candles. Sailors called hides “California banknotes.”',
      'Mexican commander Mariano Vallejo watched over the region, while British Captain Frederick Beechey mapped the bay for a global empire. There were no piers or paved streets—only ships, mud, cattle, and ambition. San Francisco began not with gold, but with trade.',
    ],
    historian: {
      field: 'Maritime trade',
      angle: 'Why a hide was worth more than a coin, and what Beechey’s survey was really for.',
      runtime: '6:40',
      pending: true,
    },
  },
  {
    id: 'flag-rises',
    years: '1846',
    title: 'The Flag Rises',
    image: 'historic/4-1-2b-1939-dynorama-of-yerba-buena.jpg',
    heroes: [
      {
        heroId: 'montgomery',
        tourMinutes: 5,
        lens: 'I had orders, a sloop of war, and seventy men who had not been ashore in weeks. We took the customs house without firing, which is the hardest kind of taking to explain afterwards.',
      },
      {
        heroId: 'leidesdorff',
        tourMinutes: 5,
        lens: 'I was vice-consul to one country and a merchant under another, and on that morning both offices wanted the same warehouse. A flag changes very little about a ledger — and everything about who reads it.',
      },
      {
        heroId: 'briones',
        tourMinutes: 4,
        lens: 'They raised it over the customs house and I watched from my garden. Nobody asked me. Nobody asked any of us. My cattle grazed the same hill that evening under a different arrangement.',
      },
    ],
    script: [
      'In July 1846, the American warship Portsmouth sailed into the bay.',
      'Captain John Montgomery sent sailors ashore to raise the United States flag over the Mexican customs house. There was no major battle, but the meaning was enormous: Yerba Buena had become an American possession.',
      'The ship itself acted like a floating government—carrying soldiers, weapons, laws, and orders.',
      'California’s American era did not arrive by wagon. It came through the Golden Gate aboard a warship.',
    ],
    historian: {
      field: 'The Mexican–American War in California',
      angle: 'A bloodless morning that decided who owned the Pacific coast — and who would be asked.',
      runtime: '7:05',
      pending: true,
    },
  },
  {
    id: 'new-name',
    years: '1847',
    title: 'A New Name',
    image: 'historic/4-1-4b-1848-sf-view-from-russian-hill.jpeg',
    heroes: [
      {
        heroId: 'bartlett',
        tourMinutes: 5,
        lens: 'A magistrate of three hundred souls signing away a name sounds absurd until you look at a chart. The bay was already famous. I simply moved the town onto the part of the map people had heard of.',
      },
      {
        heroId: 'davis',
        tourMinutes: 5,
        lens: 'I was clerking on the cove and I remember the shrug. To us it was still the same eight streets of adobe and plank. The name arrived years before anything worth the name did.',
      },
      {
        heroId: 'briones',
        tourMinutes: 4,
        lens: 'Yerba Buena is a plant. It grows on that hill; I picked it for tea and for fever. They renamed the town after a saint and left the herb where it was, which tells you what they came for.',
      },
    ],
    script: [
      'In January 1847, the little village of Yerba Buena received a much bigger name: San Francisco.',
      'The change was part politics and part advertising. “San Francisco” was already known on maps around the world because of the great bay.',
      'The town itself was still tiny—just a few wooden and adobe buildings beside the water. But the new name made a bold promise.',
      'The metropolis had not yet arrived. San Francisco had announced its intention to become one.',
    ],
    historian: {
      field: 'Place-names and power',
      angle: 'How a decree, a rival townsite and a well-known bay combined into a branding exercise.',
      runtime: '5:50',
      pending: true,
    },
  },
  {
    id: 'gold',
    years: '1848',
    title: 'Gold Discovered',
    image: 'historic/4-1-4c-1848-upper-lower-mines.jpeg',
    heroes: [
      {
        heroId: 'vallejo',
        tourMinutes: 5,
        lens: 'I had land, title, and a lifetime of paper to prove it. Then a hundred thousand strangers walked across it, and every court that heard me was theirs. Gold did not ruin me. The rush that followed it did.',
      },
      {
        heroId: 'brannan',
        tourMinutes: 5,
        lens: 'I bought every pan, shovel and pick in the territory. THEN I walked down Montgomery with the bottle held high, shouting. A discovery is worth nothing. A stampede toward your own store is worth everything.',
      },
      {
        heroId: 'briones',
        tourMinutes: 4,
        lens: 'They all went. Sailors, clerks, my own hired men — gone up the river in a week. I stayed, milked, planted, and sold beef at a price they would have called robbery in the spring. The ones who dug came home poor. The ones who fed the diggers did not.',
      },
    ],
    script: [
      'In January 1848, carpenter James Marshall found gold at John Sutter’s mill.',
      'When the news reached San Francisco, the town nearly emptied. Sailors abandoned ships. Workers dropped their tools. Shopkeepers rushed toward the mines.',
      'Merchant Samuel Brannan famously spread the excitement—and sold supplies to the miners. The gold was far inland, but the business of gold gathered here.',
      'San Francisco’s greatest discovery was not a nugget. It was the realization that every miner needed a ship, a shovel, a meal, and a merchant.',
    ],
    historian: {
      field: 'Gold Rush economics',
      angle: 'Who actually got rich in 1848 — and the Californio land titles that quietly went under.',
      runtime: '8:20',
      pending: true,
    },
  },
  {
    id: 'invasion',
    years: '1849',
    title: 'Waterfront Invasion',
    image: 'historic/4-2-3c-1850-sf-bay-with-abandoned-ships.jpeg',
    heroes: [
      {
        heroId: 'geary',
        tourMinutes: 5,
        lens: 'I stepped off the boat as postmaster with the city’s mail in one trunk. Within the year I was its mayor, and the mail was arriving by the ton for men who had no street, no number, and often no name they meant to keep.',
      },
      {
        heroId: 'davis',
        tourMinutes: 5,
        lens: 'I had known this cove when you could count the buildings on two hands. In 1849 I could not count the masts. A forest grew in the water in a single season, and then the forest became the town.',
      },
      {
        heroId: 'asing',
        tourMinutes: 5,
        lens: 'We came the same year as everyone else, paid the same passage, and were told we had arrived differently. I opened a kitchen on Kearny Street and fed men who could not pronounce my name and would not have been fed without me.',
      },
    ],
    script: [
      'In 1849, the world rushed into San Francisco.',
      'The population exploded from fewer than a thousand people to tens of thousands. Ships filled the bay. Streets filled with English, Spanish, French, Cantonese, and dozens of other languages.',
      'There was not enough housing—or even enough land. Abandoned ships became hotels, saloons, and stores. Merchants built streets over the water.',
      'San Francisco was not simply built beside the bay. It was built into the bay, one piling, shipwreck, and wild idea at a time.',
    ],
    historian: {
      field: 'Migration and the instant city',
      angle: 'Where forty thousand people slept, and which of them the census bothered to count.',
      runtime: '7:30',
      pending: true,
    },
  },
  {
    id: 'fire-vigilance',
    years: '1850–1851',
    title: 'Fire & Vigilantes',
    image: 'historic/4-2-2b-1851-may-4th-fire-from-long-wharf-commercial-st.jpg',
    heroes: [
      {
        heroId: 'geary',
        tourMinutes: 5,
        lens: 'Six times the city burned and six times we rebuilt in wood, because wood was fast and fast was the only speed this town had. Then men outside my courts began hanging people, and I learned what a mayor cannot do.',
      },
      {
        heroId: 'brannan',
        tourMinutes: 5,
        lens: 'I stood on a sandbank and told them the law was too slow and the merchants too rich to wait. They made me the committee’s first president. I will not pretend I argued.',
      },
      {
        heroId: 'gibbs',
        tourMinutes: 5,
        lens: 'Understand what a secret trial means to a man who by law cannot testify against a white witness in an open one. I kept a boot shop on Clay Street and paid taxes for a vote I was not permitted to cast. Ask me whose justice burned.',
      },
    ],
    script: [
      'Gold Rush San Francisco was built quickly—and it burned quickly.',
      'Wooden buildings, canvas roofs, open flames, and crowded warehouses helped major fires race through the city.',
      'Crime and fear spread as well. Merchants blamed a group called the Sydney Ducks, many of them former Australian convicts. In 1851, citizens formed a Vigilance Committee, holding secret trials and even executions outside the normal courts.',
      'The city rebuilt after each fire. But it still had to decide whether justice belonged to law—or to whoever gathered the largest crowd.',
    ],
    historian: {
      field: 'Vigilantism and civil rights',
      angle: 'The Committee of Vigilance as a merchants’ coup, and the testimony laws running underneath it.',
      runtime: '9:10',
      pending: true,
    },
  },
  {
    id: 'streets-over-water',
    years: '1853–1855',
    title: 'Streets Over Water',
    image: 'historic/4-2-3b-1853-butlersf-boardwalks.png',
    heroes: [
      {
        heroId: 'garrison',
        tourMinutes: 5,
        lens: 'I ran steamships before I ran the city and I governed it the same way: a schedule, a berth, a manifest. Draw the street on the map, sell the lot under the water, and let the buyer worry about the mud.',
      },
      {
        heroId: 'davis',
        tourMinutes: 5,
        lens: 'I watched them sink the Niantic and build a hotel on her. Whole ships went under the plank streets — cargo, cabins and all. You are walking on a fleet, and most of the fleet never sailed again.',
      },
      {
        heroId: 'pleasant',
        tourMinutes: 5,
        lens: 'While the gentlemen argued about pilings I bought what was under them. A woman with a boardinghouse hears which block the city means to fill next, a week before the papers do. I did not talk. I bought.',
      },
    ],
    script: [
      'The early waterfront had one enormous problem: mud.',
      'San Franciscans answered with timber. They built plank streets, boardwalks, and long finger piers reaching into the bay.',
      'Maps showed streets where water still existed. The city then filled those spaces with sand, rubble, garbage, and abandoned ships. One builder was “Honest Harry” Meiggs. He constructed a major wharf, then fled the country after a financial scandal.',
      'San Francisco’s method was already clear: draw the future on a map, borrow money, and start building before anyone could say no.',
    ],
    historian: {
      field: 'Landfill and the buried ships',
      angle: 'What the water-lot auctions actually sold, and which hulls the archaeologists keep finding.',
      runtime: '8:45',
      pending: true,
    },
  },
  {
    id: 'silver-war',
    years: '1856–1865',
    title: 'Silver & War',
    image: 'historic/4-2-4a-1857-sf-bay-french-total.jpg',
    heroes: [
      {
        heroId: 'ralston',
        tourMinutes: 5,
        lens: 'Gold is found. Silver is financed. The Comstock was four hundred kilometres away and every ounce of it passed through my vault, my mill and my hotel before it was anybody’s fortune.',
      },
      {
        heroId: 'brannan',
        tourMinutes: 5,
        lens: 'By then I owned more of California than any man alive and had stopped counting the lots. The war was very good for a man selling to both the army and the miners. That is not a boast. It is a receipt.',
      },
      {
        heroId: 'pleasant',
        tourMinutes: 5,
        lens: 'They banked silver. I banked what was said over dinner while they waited for it. I sent money east to John Brown, I put people in this city who had been owned in another, and when a streetcar put me off for my colour I took it to court and I won.',
      },
    ],
    script: [
      'By the late 1850s, San Francisco was becoming the financial capital of the West.',
      'Gold filled its banks. Then silver from Nevada’s Comstock Lode created new fortunes.',
      'During the American Civil War, forts guarded the Golden Gate, and Alcatraz became part of the harbor’s defense.',
      'Chinese merchants and workers strengthened the economy even as they faced growing discrimination. Longshoremen began organizing for better wages and safer jobs.',
      'The waterfront had become more than a landing place. It was a bank, a workplace, a military base, a political arena, and a gateway to the Pacific.',
    ],
    historian: {
      field: 'Comstock capital and Civil War California',
      angle: 'How Nevada silver built a San Francisco skyline, and what the harbour forts were watching for.',
      runtime: '7:55',
      pending: true,
    },
  },
  {
    id: 'railroad',
    years: '1866–1870',
    title: 'Rails Meet Bay',
    image: 'historic/4-2-5b-1869-sf-view-east.jpeg',
    heroes: [
      {
        heroId: 'ralston',
        tourMinutes: 5,
        lens: 'A railroad that stops at Oakland is a railroad with a gap in it, and a gap is where a bank makes its money. Ferries, a seawall, a terminal, a hotel to put the passengers in — I financed the last twenty minutes of the transcontinental journey.',
      },
      {
        heroId: 'ferry-captain',
        tourMinutes: 5,
        lens: 'The rails crossed a continent and then handed everyone to me. Twenty minutes of open water, wind on the face, gulls astern and the city coming up out of it. They remembered my crossing longer than the two thousand miles behind it.',
      },
      {
        heroId: 'norton',
        tourMinutes: 5,
        lens: 'We observed that Our subjects were being ferried like cattle and issued a decree: build a bridge from Oakland Point to this city. It was ignored, as good sense usually is. We note that they eventually built it anyway.',
      },
    ],
    script: [
      'In 1869, the transcontinental railroad finally connected California with the eastern United States.',
      'But the tracks ended across the bay in Oakland. Passengers completed the journey aboard ferries. The railroad may have crossed a continent, but water still carried travelers into San Francisco.',
      'The city also began building a stronger seawall and more organized public wharves.',
      'For generations, visitors first saw San Francisco from a ferry deck—with wind on their faces, gulls overhead, and the city rising across the water.',
    ],
    historian: {
      field: 'Rail, ferries and the seawall',
      angle: 'Why the transcontinental stopped at the water, and the sixty years it took to close the gap.',
      runtime: '6:25',
      pending: true,
    },
  },
];
