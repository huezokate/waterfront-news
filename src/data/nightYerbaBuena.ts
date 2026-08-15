/* Yerba Buena prototype chapters — Direction D proof of concept.
   Script text: "Waterfront Trail Scripts, 30 Second Drafts of 1833-70" (Aug 3 2026).
   Guides are period figures drawn from (or of) each chapter; each is one string —
   swap freely. `voice` lines are canned chat replies for the prototype (no real
   dialogue engine yet). */

export interface NightEventData {
  id: string;
  years: string;
  title: string; // stack label: 2–3 words
  image: string; // public/historic path
  guide: { name: string; role: string };
  script: string[];
  voice: string[];
}

export const YERBA_BUENA_EVENTS: NightEventData[] = [
  {
    id: 'trading-post',
    years: '1833–1845',
    title: 'The Trading Post',
    image: 'historic/4-1-1b-1828-bechy-map-of-sf-bay.jpg',
    guide: { name: 'Capt. William Richardson', role: 'Founder of the trading post' },
    script: [
      'Before San Francisco became a maritime port and city, a tiny settlement named Yerba Buena near a muddy cove was the trading center. Ships anchored offshore, and sailors rowed through shallow water to reach a tiny settlement.',
      'Captain William Richardson opened a trading post here, exchanging supplies for cattle hides and tallow, the animal fat used to make soap and candles. Sailors called hides “California banknotes.”',
      'Mexican commander Mariano Vallejo watched over the region, while British Captain Frederick Beechey mapped the bay for a global empire. There were no piers or paved streets—only ships, mud, cattle, and ambition. San Francisco began not with gold, but with trade.',
    ],
    voice: [
      'A fair question. When the full tour opens I shall answer at length — for now, know that every hide we traded was as good as gold.',
      'Patience, friend. This is only the demonstration reel; walk the trail with me later and I will tell you about the mud, the cattle, and the ambition.',
    ],
  },
  {
    id: 'flag-rises',
    years: '1846',
    title: 'The Flag Rises',
    image: 'historic/4-1-2b-1939-dynorama-of-yerba-buena.jpg',
    guide: { name: 'Capt. John Montgomery', role: 'Commander, USS Portsmouth' },
    script: [
      'In July 1846, the American warship Portsmouth sailed into the bay.',
      'Captain John Montgomery sent sailors ashore to raise the United States flag over the Mexican customs house. There was no major battle, but the meaning was enormous: Yerba Buena had become an American possession.',
      'The ship itself acted like a floating government—carrying soldiers, weapons, laws, and orders.',
      'California’s American era did not arrive by wagon. It came through the Golden Gate aboard a warship.',
    ],
    voice: [
      'In the finished tour I will recount the whole morning we raised the colors. For this demonstration, that flag must speak for itself.',
      'Ask me again when the full dialogue is rigged — a naval officer never gives half a report.',
    ],
  },
  {
    id: 'new-name',
    years: '1847',
    title: 'A New Name',
    image: 'historic/4-1-4b-1848-sf-view-from-russian-hill.jpeg',
    guide: { name: 'Alcalde Washington Bartlett', role: 'Signed the renaming decree' },
    script: [
      'In January 1847, the little village of Yerba Buena received a much bigger name: San Francisco.',
      'The change was part politics and part advertising. “San Francisco” was already known on maps around the world because of the great bay.',
      'The town itself was still tiny—just a few wooden and adobe buildings beside the water. But the new name made a bold promise.',
      'The metropolis had not yet arrived. San Francisco had announced its intention to become one.',
    ],
    voice: [
      'A name is a promise, and this one we kept. The full story of the decree waits in the finished tour.',
      'For now the demonstration must suffice — but yes, it was part politics and part advertising, and I signed it gladly.',
    ],
  },
  {
    id: 'gold',
    years: '1848',
    title: 'Gold Discovered',
    image: 'historic/4-1-4c-1848-upper-lower-mines.jpeg',
    guide: { name: 'Sam Brannan', role: 'Merchant who shouted “Gold!”' },
    script: [
      'In January 1848, carpenter James Marshall found gold at John Sutter’s mill.',
      'When the news reached San Francisco, the town nearly emptied. Sailors abandoned ships. Workers dropped their tools. Shopkeepers rushed toward the mines.',
      'Merchant Samuel Brannan famously spread the excitement—and sold supplies to the miners. The gold was far inland, but the business of gold gathered here.',
      'San Francisco’s greatest discovery was not a nugget. It was the realization that every miner needed a ship, a shovel, a meal, and a merchant.',
    ],
    voice: [
      'Ha! You want the secret? Sell the shovels. The rest of my confessions arrive with the full tour.',
      'A sharp question — hold onto it. This is only the sample case; the real inventory comes later.',
    ],
  },
  {
    id: 'invasion',
    years: '1849',
    title: 'Waterfront Invasion',
    image: 'historic/4-2-3c-1850-sf-bay-with-abandoned-ships.jpeg',
    guide: { name: 'William Heath Davis', role: 'Merchant & memoirist' },
    script: [
      'In 1849, the world rushed into San Francisco.',
      'The population exploded from fewer than a thousand people to tens of thousands. Ships filled the bay. Streets filled with English, Spanish, French, Cantonese, and dozens of other languages.',
      'There was not enough housing—or even enough land. Abandoned ships became hotels, saloons, and stores. Merchants built streets over the water.',
      'San Francisco was not simply built beside the bay. It was built into the bay, one piling, shipwreck, and wild idea at a time.',
    ],
    voice: [
      'I wrote sixty years of memoirs about this town — the full tour will let me quote them properly.',
      'Every mast in that cove has a story. The demonstration shows you the forest; the tour will show you the trees.',
    ],
  },
  {
    id: 'fire-vigilance',
    years: '1850–1851',
    title: 'Fire & Vigilantes',
    image: 'historic/4-2-2b-1851-may-4th-fire-from-long-wharf-commercial-st.jpg',
    guide: { name: 'Mayor John W. Geary', role: 'First mayor of San Francisco' },
    script: [
      'Gold Rush San Francisco was built quickly—and it burned quickly.',
      'Wooden buildings, canvas roofs, open flames, and crowded warehouses helped major fires race through the city.',
      'Crime and fear spread as well. Merchants blamed a group called the Sydney Ducks, many of them former Australian convicts. In 1851, citizens formed a Vigilance Committee, holding secret trials and even executions outside the normal courts.',
      'The city rebuilt after each fire. But it still had to decide whether justice belonged to law—or to whoever gathered the largest crowd.',
    ],
    voice: [
      'A hard chapter, and a fair question. When the full tour is built I will answer as a mayor must — completely.',
      'Six great fires, and the city stood back up each time. The rest of the testimony waits for the finished tour.',
    ],
  },
  {
    id: 'streets-over-water',
    years: '1853–1855',
    title: 'Streets Over Water',
    image: 'historic/4-2-3b-1853-butlersf-boardwalks.png',
    guide: { name: 'Mayor C. K. Garrison', role: 'Mayor, 1853–54' },
    script: [
      'The early waterfront had one enormous problem: mud.',
      'San Franciscans answered with timber. They built plank streets, boardwalks, and long finger piers reaching into the bay.',
      'Maps showed streets where water still existed. The city then filled those spaces with sand, rubble, garbage, and abandoned ships. One builder was “Honest Harry” Meiggs. He constructed a major wharf, then fled the country after a financial scandal.',
      'San Francisco’s method was already clear: draw the future on a map, borrow money, and start building before anyone could say no.',
    ],
    voice: [
      'You are standing on ships and sand this very moment. In the full tour I will tell you exactly whose.',
      'Ah, Meiggs. A long story and a longer ledger — the finished tour will give it the time it deserves.',
    ],
  },
  {
    id: 'silver-war',
    years: '1856–1865',
    title: 'Silver & War',
    image: 'historic/4-2-4a-1857-sf-bay-french-total.jpg',
    guide: { name: 'William Ralston', role: 'Banker of the Comstock' },
    script: [
      'By the late 1850s, San Francisco was becoming the financial capital of the West.',
      'Gold filled its banks. Then silver from Nevada’s Comstock Lode created new fortunes.',
      'During the American Civil War, forts guarded the Golden Gate, and Alcatraz became part of the harbor’s defense.',
      'Chinese merchants and workers strengthened the economy even as they faced growing discrimination. Longshoremen began organizing for better wages and safer jobs.',
      'The waterfront had become more than a landing place. It was a bank, a workplace, a military base, a political arena, and a gateway to the Pacific.',
    ],
    voice: [
      'Silver built more of this city than gold ever did. The ledgers open fully when the tour does.',
      'A banker answers every question eventually — this demonstration simply hasn’t the funds yet.',
    ],
  },
  {
    id: 'railroad',
    years: '1866–1870',
    title: 'Rails Meet Bay',
    image: 'historic/4-2-5b-1869-sf-view-east.jpeg',
    guide: { name: 'The Ferry Captain', role: 'Oakland–SF crossing' },
    script: [
      'In 1869, the transcontinental railroad finally connected California with the eastern United States.',
      'But the tracks ended across the bay in Oakland. Passengers completed the journey aboard ferries. The railroad may have crossed a continent, but water still carried travelers into San Francisco.',
      'The city also began building a stronger seawall and more organized public wharves.',
      'For generations, visitors first saw San Francisco from a ferry deck—with wind on their faces, gulls overhead, and the city rising across the water.',
    ],
    voice: [
      'Every soul who ever loved this city first saw it from my deck. Ride the full tour and I will show you their faces.',
      'Wind, gulls, and the city rising — the demonstration gives you thirty seconds; the crossing takes twenty minutes. Come back for it.',
    ],
  },
];
