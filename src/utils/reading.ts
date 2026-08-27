import type { DrawnCard, SpreadKey } from './deck';
import { getSpreads } from './deck';
import type { Lang } from '../i18n/copy';

interface LangPack {
  elementOf: Record<string, string>;
  elementTheme: Record<string, string>;
  suitLabel: Record<string, string>;
  arcanaLabel: (arcana: 'major' | 'minor') => string;
  allMajor: string;
  someMajor: (majorCount: number, n: number) => string;
  noMajor: string;
  oneMajor: (name: string, arcanaLabel: string, pos: string) => string;
  singleSuit: (element: string, suit: string, count: number, theme: string) => string;
  dominantSuit: (element: string, count: number, theme: string) => string;
  variedSuits: string;
  allReversed: string;
  mostReversed: string;
  allUpright: string;
  threeCardNarrative: (
    pastKw: string, pastName: string,
    presentKw: string, presentName: string,
    futureKw: string, futureName: string,
    pastReversed: boolean,
  ) => string;
  celticCore: (
    situationName: string, situationKw: string,
    challengeName: string, challengeKw: string,
    hopesName: string, outcomeName: string, outcomeKw: string,
  ) => string;
  singleCard: (name: string, keyword: string, reversed: boolean) => string;
}

const ES: LangPack = {
  elementOf: { wands: 'Fuego', cups: 'Agua', swords: 'Aire', pentacles: 'Tierra' },
  elementTheme: {
    wands: 'la acción, la voluntad y la creatividad',
    cups: 'las emociones, las relaciones y la intuición',
    swords: 'la mente, la comunicación y los conflictos',
    pentacles: 'lo material, lo práctico y la construcción',
  },
  suitLabel: { wands: 'Bastos', cups: 'Copas', swords: 'Espadas', pentacles: 'Oros' },
  arcanaLabel: arcana => (arcana === 'major' ? 'Arcano Mayor' : 'Arcano Menor'),
  allMajor: 'Toda la tirada está compuesta por Arcanos Mayores: las fuerzas en juego trascienden lo cotidiano y apuntan a un momento de transformación profunda en tu camino.',
  someMajor: (majorCount, n) => `Con ${majorCount} de ${n} cartas de los Arcanos Mayores, esta lectura toca temas centrales de tu vida — no son circunstancias pasajeras, sino lecciones que el destino está poniendo frente a vos.`,
  noMajor: 'Todos los Arcanos Menores hablan: esta situación está en gran parte en tus manos. Las elecciones del día a día y tu actitud serán determinantes.',
  oneMajor: (name, arcanaLabel, pos) => `${name} como ${arcanaLabel} ocupa la posición de "${pos}", marcando ese aspecto como el más significativo y cargado de propósito de toda la tirada.`,
  singleSuit: (element, suit, count, theme) => `El elemento ${element} (${suit}) aparece ${count} veces, concentrando la energía en ${theme}.`,
  dominantSuit: (element, count, theme) => `Aunque hay variedad de palos, ${element} domina con ${count} cartas, subrayando que ${theme} es el centro de gravedad de esta consulta.`,
  variedSuits: 'La variedad de elementos presentes refleja que esta situación afecta múltiples áreas de tu vida de forma simultánea.',
  allReversed: 'El hecho de que todas las cartas aparezcan invertidas es un mensaje claro: el trabajo más urgente es interno. Hay bloqueos, resistencias o energías que todavía no encontraron su cauce hacia afuera.',
  mostReversed: 'La mayoría de las cartas invertidas indica que parte de la energía está reprimida o en proceso de integración. Hay algo que todavía no se manifiesta plenamente y que pide ser revisado.',
  allUpright: 'Todas las cartas en posición directa sugieren un flujo claro y abierto: la energía está disponible y lista para actuar en el mundo.',
  threeCardNarrative: (pastKw, pastName, presentKw, presentName, futureKw, futureName, pastReversed) =>
    `La narrativa de esta tirada traza un arco desde "${pastKw}" (${pastName}) en el pasado, pasando por "${presentKw}" (${presentName}) en el presente, hacia "${futureKw}" (${futureName}) como energía futura. ` +
    `Leídas en conjunto, las cartas sugieren que lo que ${pastReversed ? 'bloqueó' : 'impulsó'} el pasado sigue resonando en el presente y dará forma a lo que está por venir.`,
  celticCore: (situationName, situationKw, challengeName, challengeKw, hopesName, outcomeName, outcomeKw) =>
    `El núcleo de esta Cruz Celta es ${situationName} (${situationKw}), atravesado por el desafío de ${challengeName} (${challengeKw}). ` +
    `Las esperanzas y miedos que rodean esta situación se manifiestan en ${hopesName}, mientras que el resultado final apunta hacia ${outcomeName} — ` +
    `con la energía de "${outcomeKw}" como horizonte potencial de este camino.`,
  singleCard: (name, keyword, reversed) =>
    `${name} como respuesta directa señala "${keyword}" como la energía central de tu consulta. ${
      reversed
        ? 'Al aparecer invertida, esta energía se expresa de forma más interna o encontrará resistencia antes de manifestarse plenamente.'
        : 'En posición directa, esta energía está activa y disponible para vos en este momento.'
    }`,
};

const EN: LangPack = {
  elementOf: { wands: 'Fire', cups: 'Water', swords: 'Air', pentacles: 'Earth' },
  elementTheme: {
    wands: 'action, will and creativity',
    cups: 'emotions, relationships and intuition',
    swords: 'the mind, communication and conflict',
    pentacles: 'the material, the practical and what gets built',
  },
  suitLabel: { wands: 'Wands', cups: 'Cups', swords: 'Swords', pentacles: 'Pentacles' },
  arcanaLabel: arcana => (arcana === 'major' ? 'Major Arcanum' : 'Minor Arcanum'),
  allMajor: 'The whole spread is made up of Major Arcana: the forces at play go beyond the everyday and point to a moment of deep transformation on your path.',
  someMajor: (majorCount, n) => `With ${majorCount} of ${n} cards from the Major Arcana, this reading touches central themes of your life — not passing circumstances, but lessons fate is placing in front of you.`,
  noMajor: 'Every card is a Minor Arcanum: this situation is largely in your hands. Day-to-day choices and your attitude will be decisive.',
  oneMajor: (name, arcanaLabel, pos) => `${name} as a ${arcanaLabel} sits in the "${pos}" position, marking that aspect as the most significant and purposeful of the whole spread.`,
  singleSuit: (element, suit, count, theme) => `The ${element} element (${suit}) appears ${count} times, concentrating the energy on ${theme}.`,
  dominantSuit: (element, count, theme) => `Though the suits are mixed, ${element} dominates with ${count} cards, underlining that ${theme} is the centre of gravity of this reading.`,
  variedSuits: 'The variety of elements present reflects that this situation touches several areas of your life at once.',
  allReversed: 'The fact that every card appears reversed is a clear message: the most urgent work is internal. There are blocks, resistances, or energies that haven\'t yet found their way outward.',
  mostReversed: 'Most cards reversed points to energy that is repressed or still integrating. Something has not fully manifested yet and asks to be looked at.',
  allUpright: 'Every card upright suggests a clear, open flow: the energy is available and ready to act in the world.',
  threeCardNarrative: (pastKw, pastName, presentKw, presentName, futureKw, futureName, pastReversed) =>
    `The narrative of this spread traces an arc from "${pastKw}" (${pastName}) in the past, through "${presentKw}" (${presentName}) in the present, toward "${futureKw}" (${futureName}) as the emerging energy. ` +
    `Read together, the cards suggest that whatever ${pastReversed ? 'held back' : 'drove'} the past is still resonating in the present and will shape what's ahead.`,
  celticCore: (situationName, situationKw, challengeName, challengeKw, hopesName, outcomeName, outcomeKw) =>
    `The core of this Celtic Cross is ${situationName} (${situationKw}), crossed by the challenge of ${challengeName} (${challengeKw}). ` +
    `The hopes and fears around this situation show up in ${hopesName}, while the final outcome points toward ${outcomeName} — ` +
    `with the energy of "${outcomeKw}" as the potential horizon of this path.`,
  singleCard: (name, keyword, reversed) =>
    `${name} as a direct answer points to "${keyword}" as the central energy of your question. ${
      reversed
        ? 'Appearing reversed, this energy expresses itself more inwardly, or will meet resistance before it fully manifests.'
        : 'Upright, this energy is active and available to you right now.'
    }`,
};

function keyword(drawn: DrawnCard): string {
  return drawn.reversed
    ? drawn.card.reversedMeaning.keywords[0]
    : drawn.card.uprightMeaning.keywords[0];
}

export function generateSynthesis(drawnCards: DrawnCard[], spreadKey: SpreadKey, lang: Lang): string {
  const L = lang === 'en' ? EN : ES;
  const n = drawnCards.length;
  const spread = getSpreads(lang)[spreadKey];
  const parts: string[] = [];

  const majorCount = drawnCards.filter(d => d.card.arcana === 'major').length;

  if (majorCount === n) {
    parts.push(L.allMajor);
  } else if (majorCount >= Math.ceil(n / 2) && n > 1) {
    parts.push(L.someMajor(majorCount, n));
  } else if (majorCount === 0 && n > 1) {
    parts.push(L.noMajor);
  } else if (majorCount === 1) {
    const majorCard = drawnCards.find(d => d.card.arcana === 'major')!;
    const pos = spread.positions[drawnCards.indexOf(majorCard)];
    parts.push(L.oneMajor(majorCard.card.name, L.arcanaLabel(majorCard.card.arcana), pos));
  }

  const suitCounts: Record<string, number> = {};
  drawnCards.forEach(d => {
    if (d.card.suit) suitCounts[d.card.suit] = (suitCounts[d.card.suit] || 0) + 1;
  });

  const suitEntries = Object.entries(suitCounts).sort((a, b) => b[1] - a[1]);
  const minorTotal = drawnCards.filter(d => d.card.arcana === 'minor').length;

  if (suitEntries.length === 1 && minorTotal >= 2) {
    const [suit, count] = suitEntries[0];
    parts.push(L.singleSuit(L.elementOf[suit], L.suitLabel[suit], count, L.elementTheme[suit]));
  } else if (suitEntries.length >= 2 && suitEntries[0][1] > suitEntries[1][1] && minorTotal >= 3) {
    const [suit, count] = suitEntries[0];
    parts.push(L.dominantSuit(L.elementOf[suit], count, L.elementTheme[suit]));
  } else if (suitEntries.length >= 3 && minorTotal >= 3) {
    parts.push(L.variedSuits);
  }

  const reversedCount = drawnCards.filter(d => d.reversed).length;

  if (n > 1) {
    if (reversedCount === n) {
      parts.push(L.allReversed);
    } else if (reversedCount >= Math.ceil(n * 0.6)) {
      parts.push(L.mostReversed);
    } else if (reversedCount === 0) {
      parts.push(L.allUpright);
    }
  }

  if (spreadKey === 'three' && n === 3) {
    const [past, present, future] = drawnCards;
    parts.push(
      L.threeCardNarrative(
        keyword(past), past.card.name,
        keyword(present), present.card.name,
        keyword(future), future.card.name,
        past.reversed,
      )
    );
  }

  if (spreadKey === 'celtic' && n === 10) {
    const situation = drawnCards[0];
    const challenge = drawnCards[1];
    const outcome = drawnCards[9];
    const hopes = drawnCards[8];

    parts.push(
      L.celticCore(
        situation.card.name, keyword(situation),
        challenge.card.name, keyword(challenge),
        hopes.card.name,
        outcome.card.name, keyword(outcome),
      )
    );
  }

  if (spreadKey === 'single' && n === 1) {
    const [card] = drawnCards;
    return L.singleCard(card.card.name, keyword(card), card.reversed);
  }

  return parts.join(' ');
}
