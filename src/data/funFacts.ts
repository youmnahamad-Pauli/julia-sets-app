export interface FunFact {
  id: number;
  category: string;
  fact: string;
}

export const FUN_FACTS: FunFact[] = [
  // Space Math
  { id: 1, category: 'Space Math', fact: 'Light reaches the Moon in just 1.3 seconds — that\'s 384,000 km away!' },
  { id: 2, category: 'Space Math', fact: 'Saturn\'s rings are 282,000 km wide but only about 1 km thick — thinner than a piece of paper compared to a football field.' },
  { id: 3, category: 'Space Math', fact: 'There are more stars in the universe than grains of sand on all Earth\'s beaches.' },
  { id: 4, category: 'Space Math', fact: 'Jupiter is so large that all the other planets in the solar system could fit inside it with room to spare.' },
  { id: 5, category: 'Space Math', fact: 'The Sun makes up 99.86% of the total mass of our solar system.' },
  { id: 6, category: 'Space Math', fact: 'A day on Venus is longer than a year on Venus — it rotates so slowly!' },
  { id: 7, category: 'Space Math', fact: 'Light from the Sun takes 8 minutes to reach Earth, but 4.2 years to reach the next nearest star.' },
  { id: 8, category: 'Space Math', fact: 'The Milky Way galaxy contains an estimated 200-400 billion stars.' },

  // Nature Patterns
  { id: 9, category: 'Nature Patterns', fact: 'Sunflowers have 34 spirals one way and 55 the other — both consecutive Fibonacci numbers!' },
  { id: 10, category: 'Nature Patterns', fact: 'Snowflakes always have exactly 6 sides — a perfect fact of geometry and molecular physics.' },
  { id: 11, category: 'Nature Patterns', fact: 'Bees build hexagonal cells because hexagons are the most efficient shape — they pack with zero wasted space.' },
  { id: 12, category: 'Nature Patterns', fact: 'A nautilus shell grows in a perfect golden ratio spiral, mathematically precise as it ages.' },
  { id: 13, category: 'Nature Patterns', fact: 'The Fibonacci sequence appears in pinecones, galaxies, hurricanes and even your DNA.' },
  { id: 14, category: 'Nature Patterns', fact: 'Romanesco broccoli is a perfect example of a fractal — every floret is a miniature version of the whole head.' },
  { id: 15, category: 'Nature Patterns', fact: 'The spots on a giraffe follow a mathematical pattern called a Voronoi diagram.' },
  { id: 16, category: 'Nature Patterns', fact: 'Tree branches split according to the Fibonacci sequence to maximise sunlight.' },

  // History of Maths
  { id: 17, category: 'History of Maths', fact: 'Zero was invented by Brahmagupta in India around 628 AD — before that, no number existed for "nothing".' },
  { id: 18, category: 'History of Maths', fact: 'The equals sign (=) was invented in 1557 by Welsh mathematician Robert Recorde — he was tired of writing "is equal to".' },
  { id: 19, category: 'History of Maths', fact: 'Al-Khwarizmi invented algebra — the very word "algorithm" comes from his name.' },
  { id: 20, category: 'History of Maths', fact: 'The word "algebra" comes from Al-Khwarizmi\'s book "Al-Kitab al-mukhtasar fi hisab al-jabr wal-muqabala".' },
  { id: 21, category: 'History of Maths', fact: 'Ancient Egyptians used fractions over 3,500 years ago — they even had a special symbol for 2/3.' },
  { id: 22, category: 'History of Maths', fact: 'The ancient Greeks believed irrational numbers were dangerous secrets — they supposedly drowned a man for revealing them.' },
  { id: 23, category: 'History of Maths', fact: 'The word "mathematics" comes from the ancient Greek word "mathema" meaning "learning" or "knowledge".' },
  { id: 24, category: 'History of Maths', fact: 'Pascal\'s triangle was known in China (Yang Hui\'s triangle) 500 years before Pascal was born.' },

  // Famous Mathematicians
  { id: 25, category: 'Famous Mathematicians', fact: 'Maryam Mirzakhani was the first woman to win the Fields Medal — the Nobel Prize of mathematics — in 2014.' },
  { id: 26, category: 'Famous Mathematicians', fact: 'Ada Lovelace wrote the world\'s first computer algorithm in 1843, before computers were even built.' },
  { id: 27, category: 'Famous Mathematicians', fact: 'Leonhard Euler was one of the most productive mathematicians ever — he kept working even after going completely blind.' },
  { id: 28, category: 'Famous Mathematicians', fact: 'Srinivasa Ramanujan, self-taught from rural India, sent his theories to Cambridge and stunned the world\'s top mathematicians.' },
  { id: 29, category: 'Famous Mathematicians', fact: 'Emmy Noether revolutionised algebra and physics despite being banned from attending university lectures at first.' },
  { id: 30, category: 'Famous Mathematicians', fact: 'Archimedes invented a method for calculating pi over 2,200 years ago that was accurate to within 0.04%.' },
  { id: 31, category: 'Famous Mathematicians', fact: 'Hypatia of Alexandria was a brilliant mathematician and philosopher — one of the first recorded female mathematicians.' },
  { id: 32, category: 'Famous Mathematicians', fact: 'John von Neumann could memorise entire phone books and recite them perfectly backwards.' },

  // Mind-Bending Numbers
  { id: 33, category: 'Mind-Bending Numbers', fact: 'Pi has been calculated to over 100 trillion decimal places — and it never repeats or ends.' },
  { id: 34, category: 'Mind-Bending Numbers', fact: 'A group of just 23 people has a 50% chance that two of them share the same birthday. With 70 people it\'s 99.9%.' },
  { id: 35, category: 'Mind-Bending Numbers', fact: 'There are more possible chess games than atoms in the observable universe.' },
  { id: 36, category: 'Mind-Bending Numbers', fact: 'There are 43 quintillion (43,000,000,000,000,000,000) possible positions in a Rubik\'s cube.' },
  { id: 37, category: 'Mind-Bending Numbers', fact: '0.999... repeating equals exactly 1. Not almost 1 — mathematically, precisely 1.' },
  { id: 38, category: 'Mind-Bending Numbers', fact: 'Some infinities are mathematically bigger than other infinities. Georg Cantor proved this in the 1870s.' },
  { id: 39, category: 'Mind-Bending Numbers', fact: 'A googol is 1 followed by 100 zeros. A googolplex is 1 followed by a googol of zeros — too large to write.' },
  { id: 40, category: 'Mind-Bending Numbers', fact: 'The Möbius strip has only one side and one edge — an object that seems impossible but is totally real.' },
  { id: 41, category: 'Mind-Bending Numbers', fact: 'A prime number has exactly two factors: 1 and itself. The largest known prime has 24 million digits.' },
  { id: 42, category: 'Mind-Bending Numbers', fact: 'If you fold a piece of paper 42 times, it would be thick enough to reach the Moon.' },
  { id: 43, category: 'Mind-Bending Numbers', fact: 'The four colour theorem proved that any map needs at most 4 colours so no two adjacent regions share a colour.' },

  // Everyday Maths
  { id: 44, category: 'Everyday Maths', fact: 'A standard piano has 88 keys. The ratio of white to black keys follows a mathematical pattern.' },
  { id: 45, category: 'Everyday Maths', fact: 'The word "hundred" originally meant 120 in some Germanic languages — numbers used to mean different things!' },
  { id: 46, category: 'Everyday Maths', fact: 'If you shuffle a deck of cards properly, the order of cards has almost certainly never existed before in history.' },
  { id: 47, category: 'Everyday Maths', fact: 'A standard dice (plural: dice) always has opposite faces that add up to 7.' },
  { id: 48, category: 'Everyday Maths', fact: 'The barcode on almost every product uses modular arithmetic to detect errors when it\'s scanned.' },
  { id: 49, category: 'Everyday Maths', fact: 'Music is full of mathematics — a perfect fifth interval has a frequency ratio of exactly 3:2.' },
  { id: 50, category: 'Everyday Maths', fact: 'Zipf\'s Law: in any language, the second most common word appears exactly half as often as the most common word.' },
  { id: 51, category: 'Everyday Maths', fact: 'Google\'s name is a misspelling of "googol" — the number 1 followed by 100 zeros.' },
  { id: 52, category: 'Everyday Maths', fact: 'The staircase you walk up every day uses geometry — each step must be exactly the same height for your brain to predict the next.' },

  // More facts to reach 60+
  { id: 53, category: 'Mind-Bending Numbers', fact: 'Pascal\'s triangle contains the Fibonacci numbers hidden inside its diagonal rows.' },
  { id: 54, category: 'History of Maths', fact: 'The Babylonians had a number system based on 60 — which is why we have 60 seconds in a minute and 360 degrees in a circle.' },
  { id: 55, category: 'Nature Patterns', fact: 'The ratio of a human\'s forearm to hand is very close to the golden ratio (1.618).' },
  { id: 56, category: 'Famous Mathematicians', fact: 'Sophie Germain corresponded with Gauss using a male pen name because women were not taken seriously in mathematics.' },
  { id: 57, category: 'Space Math', fact: 'NASA scientists used mathematical calculations to plot routes to the Moon, Mars and beyond — all by hand before computers.' },
  { id: 58, category: 'Mind-Bending Numbers', fact: 'The number 1 is neither prime nor composite — it has its own special category in mathematics.' },
  { id: 59, category: 'Everyday Maths', fact: 'The patterns on a soccer ball (football) are made of exactly 20 hexagons and 12 pentagons — a truncated icosahedron.' },
  { id: 60, category: 'History of Maths', fact: 'The ancient Maya developed a sophisticated calendar system using mathematics over 2,000 years ago.' },
  { id: 61, category: 'Nature Patterns', fact: 'Crystals form in mathematically perfect shapes — salt forms perfect cubes, snowflakes perfect hexagons.' },
  { id: 62, category: 'Mind-Bending Numbers', fact: 'There is no largest prime number — mathematicians have proved this. The search for bigger primes goes on forever.' },
  { id: 63, category: 'Everyday Maths', fact: 'Your heartbeat follows a mathematical rhythm called a time series — doctors use maths to read your heart health.' },
  { id: 64, category: 'Famous Mathematicians', fact: 'Alan Turing invented the foundations of computer science and cracked Nazi codes in World War II using mathematics.' },
  { id: 65, category: 'Space Math', fact: 'The orbit of every planet follows an ellipse — a mathematical shape described by Johannes Kepler in 1609.' },
];
