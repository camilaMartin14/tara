export type Lang = 'es' | 'en';

export interface Copy {
  nav: {
    home: string;
    library: string;
    journey: string;
    reading: string;
    faq: string;
    langHint: string;
    openMenu: string;
    closeMenu: string;
  };
  home: {
    eyebrow: string;
    heroA: string;
    heroEm: string;
    heroB: string;
    heroSub: string;
    ctaSpread: string;
    ctaLibrary: string;
    stats: [string, string][];
    startHere: string;
    threeSteps: string;
    steps: [string, string, string][];
    cardOfDay: {
      eyebrow: string;
      title: string;
      subtitle: string;
      beforeReveal: string;
      afterReveal: string;
      cta: string;
    };
    majorArcana: string;
    seeAll: string;
    journeyCta: string;
    carouselPrev: string;
    carouselNext: string;
    banner: { eyebrow: string; title: string; body: string; cta: string };
    footerLinks: [string, string][];
    credit: string;
  };
  library: {
    eyebrow: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filters: { all: string; major: string; wands: string; cups: string; swords: string; pentacles: string };
    count: (n: number) => string;
    empty: string;
    showMore: (n: number) => string;
    fundamentals: {
      title: string;
      subtitle: string;
      items: Record<'wands' | 'cups' | 'swords' | 'pentacles', { element: string; keywords: string[] }>;
    };
  };
  journey: {
    eyebrow: string;
    title: string;
    subtitle: string;
    foolLabel: string;
    stageLabel: (n: number) => string;
    rangeLabel: (from: string, to: string) => string;
    libraryCta: string;
    startCta: string;
    step: (current: number, total: number) => string;
    viewCard: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: [string, string][];
  };
  cardDetail: {
    crumb: string;
    close: string;
    practice: string;
    tabUp: string;
    tabRev: string;
    howToRead: string;
    howToReadBody: string;
    appearsWith: string;
    majorArcanum: string;
    minorArcanum: string;
  };
  reading: {
    eyebrow: string;
    title: string;
    subtitle: string;
    questionLabel: string;
    questionPlaceholder: string;
    spreadTypeLabel: string;
    drawCta: string;
    questionRecapLabel: string;
    instruction: string;
    newReading: string;
    tapToReveal: string;
    reversed: string;
    upright: string;
    synthesisCta: string;
    synthesisTitle: string;
    cardsCount: (n: number) => string;
  };
  spreads: Record<'single' | 'three' | 'celtic', { label: string; description: string; positions: string[] }>;
  suits: Record<'wands' | 'cups' | 'swords' | 'pentacles', string>;
}

export const COPY: Record<Lang, Copy> = {
  es: {
    nav: {
      home: 'Inicio',
      library: 'Biblioteca',
      journey: 'El Viaje',
      reading: 'Tirada',
      faq: 'Preguntas',
      langHint: 'Cambiar idioma',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    home: {
      eyebrow: 'Escuela de tarot · biblioteca abierta',
      heroA: 'Aprendé a',
      heroEm: 'leer',
      heroB: 'las cartas',
      heroSub: 'Las 78 cartas del mazo Rider-Waite, sus símbolos y sus silencios.',
      ctaSpread: 'Hacer una tirada',
      ctaLibrary: 'Ver la biblioteca',
      stats: [
        ['78', 'cartas explicadas'],
        ['22', 'arcanos mayores'],
        ['∞', 'tiradas de práctica'],
      ],
      startHere: 'Empezá por acá',
      threeSteps: 'tres pasos',
      steps: [
        ['I', 'Conocé el mazo', 'Veintidós arcanos mayores y cuatro palos. Antes de interpretar, aprendé a reconocer: qué carta es y a qué familia pertenece.'],
        ['II', 'Explorá carta por carta', 'Entrá a la biblioteca, elegí una carta y leé su significado al derecho y al revés. En poco tiempo el mazo te empieza a hablar sin que consultes el libro.'],
        ['III', 'Tirá de tres', 'Tu primera tirada real. Escribí o pensá una pregunta clara y practicá leer las cartas juntas en vez de por separado.'],
      ],
      cardOfDay: {
        eyebrow: 'Ritual diario',
        title: 'Tu carta de hoy',
        subtitle: 'Una sola carta, elegida para todo el día. Antes de leer su significado, mirala: qué colores predominan, qué gesto tienen sus figuras, qué te transmite en silencio.',
        beforeReveal: 'Tocá la carta para revelarla',
        afterReveal: 'Anotá cómo resonó esta energía con tu día.',
        cta: 'Ver su significado completo',
      },
      majorArcana: 'Los Arcanos Mayores',
      seeAll: 'Ver las 78',
      journeyCta: 'Conocé su historia completa →',
      carouselPrev: 'Carta anterior',
      carouselNext: 'Carta siguiente',
      banner: {
        eyebrow: 'Práctica libre',
        title: 'La biblioteca es gratis. La práctica no tiene límite.',
        body: 'Consultá el significado de cualquier carta al derecho y al revés, y hacé todas las tiradas que quieras: de una carta, de tres, o la Cruz Celta completa.',
        cta: 'Hacer una tirada',
      },
      footerLinks: [
        ['Biblioteca', '#biblioteca'],
        ['Tirada', '#tirada'],
        ['Inicio', '#top'],
      ],
      credit: 'Diseñado y desarrollado por',
    },
    library: {
      eyebrow: 'Biblioteca',
      title: 'Las 78 Cartas',
      subtitle: 'Explorá cada carta del mazo Rider-Waite. Tocá una para ver su significado completo.',
      searchPlaceholder: 'Buscar carta o palabra clave...',
      filters: { all: 'Todas', major: 'Arcanos Mayores', wands: 'Bastos', cups: 'Copas', swords: 'Espadas', pentacles: 'Oros' },
      count: n => `${n} carta${n !== 1 ? 's' : ''}`,
      empty: 'No se encontraron cartas con esa búsqueda.',
      showMore: n => `Ver ${n} carta${n !== 1 ? 's' : ''} más`,
      fundamentals: {
        title: 'Los cuatro palos',
        subtitle: 'Cada palo de los Arcanos Menores está asociado a un elemento. Antes de memorizar las 56 cartas, aprendé a reconocer de qué habla cada familia.',
        items: {
          wands: { element: 'Fuego', keywords: ['pasión', 'energía', 'proyectos', 'creatividad'] },
          cups: { element: 'Agua', keywords: ['emociones', 'relaciones', 'intuición', 'empatía'] },
          swords: { element: 'Aire', keywords: ['mente', 'pensamientos', 'conflictos', 'verdad'] },
          pentacles: { element: 'Tierra', keywords: ['lo material', 'dinero', 'trabajo', 'cuerpo'] },
        },
      },
    },
    cardDetail: {
      crumb: 'Biblioteca',
      close: 'Cerrar',
      practice: 'Practicar una tirada',
      tabUp: 'Al derecho',
      tabRev: 'Invertida',
      howToRead: 'Cómo leerla en una tirada',
      howToReadBody: 'Fijate qué carta cae al lado. El palo o arcano vecino matiza el significado: con Copas suele hablar de vínculos, con Espadas de ideas o conflictos, con Bastos de acción, con Oros de lo material. Sola, en el centro de la tirada, suele señalar el tema central de la consulta.',
      appearsWith: 'Cartas relacionadas',
      majorArcanum: 'ARCANO MAYOR',
      minorArcanum: 'ARCANO MENOR',
    },
    reading: {
      eyebrow: 'Práctica libre',
      title: 'Tu Tirada',
      subtitle: 'Formulá tu pregunta, elegí un tipo de tirada y dejá que las cartas hablen.',
      questionLabel: 'Tu pregunta o intención',
      questionPlaceholder: '¿Sobre qué tema querés que las cartas te guíen hoy?',
      spreadTypeLabel: 'Tipo de tirada',
      drawCta: 'Revelar las cartas',
      questionRecapLabel: 'Tu pregunta',
      instruction: 'Tocá cada carta para revelarla · una vez revelada, volvé a tocarla para ver su significado',
      newReading: 'Nueva tirada',
      tapToReveal: 'Tocá la carta para revelarla',
      reversed: 'Invertida',
      upright: 'Al derecho',
      synthesisCta: 'Ver la voz de la tirada',
      synthesisTitle: 'La voz de la tirada',
      cardsCount: n => `${n} carta${n > 1 ? 's' : ''}`,
    },
    spreads: {
      single: { label: 'Una carta', description: 'Respuesta directa a tu pregunta', positions: ['Tu respuesta'] },
      three: { label: 'Tres cartas', description: 'Pasado · Presente · Futuro', positions: ['Pasado', 'Presente', 'Futuro'] },
      celtic: {
        label: 'Cruz Celta',
        description: 'Lectura profunda de 10 cartas',
        positions: [
          'La situación', 'El desafío', 'El pasado distante', 'El pasado reciente',
          'Lo consciente', 'Lo inconsciente', 'Tu influencia', 'Influencias externas',
          'Esperanzas y miedos', 'El resultado',
        ],
      },
    },
    journey: {
      eyebrow: 'Arcanos Mayores · una historia',
      title: 'El Viaje del Loco',
      subtitle: 'Las 22 cartas de los Arcanos Mayores pueden interpretarse como los pasos de una misma alma atravesando la vida, del impulso puro de El Loco a la plenitud de El Mundo.',
      foolLabel: 'El punto de partida',
      stageLabel: n => `Plano ${n}`,
      rangeLabel: (from, to) => `Cartas ${from} – ${to}`,
      libraryCta: 'Explorá cada carta en la biblioteca →',
      startCta: 'Conocer el viaje',
      step: (current, total) => `${current} de ${total}`,
      viewCard: 'Ver ficha completa →',
    },
    notFound: {
      eyebrow: 'Extraviado en el camino',
      title: '404',
      subtitle: 'El Loco se salió del mapa.',
      body: 'Esta carta no pertenece a este mazo: el vínculo puede estar roto, o el destino te trajo a un lugar que todavía no existe.',
      cta: 'Volver al inicio',
    },
    faq: {
      eyebrow: '˗ˏˋ ★ ˎˊ˗',
      title: 'Preguntas frecuentes',
      items: [
        [
          '¿Por qué esta app enseña con el mazo Rider-Waite-Smith?',
          'Porque es el más gráfico y descriptivo: sus 78 cartas, incluidas las 56 menores, muestran escenas completas, no solo símbolos sueltos. Eso permite leer intuitivamente a partir de la imagen, en vez de memorizar 78 significados de memoria. También es el mazo más estudiado y la base de casi todos los mazos modernos.',
        ],
        [
          '¿Cuál es la diferencia entre Arcanos Mayores y Menores?',
          'Los 22 Arcanos Mayores representan arquetipos y lecciones de vida profundas (podés recorrerlos como historia en "El Viaje"). Los 56 Arcanos Menores describen situaciones cotidianas y se dividen en 4 palos: Bastos, Copas, Espadas y Oros, cada uno asociado a un elemento.',
        ],
        [
          '¿Qué significa que una carta salga invertida?',
          'No es "mala suerte". Generalmente indica que la energía de la carta está bloqueada, es interna, o pide más atención antes de manifestarse. Cada carta de la biblioteca tiene su propio significado al derecho y al revés.',
        ],
        [
          '¿Las tiradas predicen el futuro?',
          'No literalmente. Son una herramienta de reflexión: las cartas funcionan como espejo para ordenar pensamientos y mirar una situación desde otro ángulo, no como una profecía cerrada.',
        ],
        [
          '¿Por dónde empiezo si nunca leí tarot?',
          'Seguí los "tres pasos" del inicio: conocé la estructura del mazo, explorá la biblioteca carta por carta, y recién después practicá tu primera tirada de tres cartas con una pregunta concreta.',
        ],
        [
          '¿Con qué frecuencia conviene practicar?',
          'Una carta por día alcanza para entrenar el ojo (por eso existe la "Carta del día"). Reservá las tiradas completas para cuando tengas una pregunta real: consultar lo mismo una y otra vez suele confundir más que aclarar.',
        ],
      ],
    },
    suits: { wands: 'Bastos', cups: 'Copas', swords: 'Espadas', pentacles: 'Oros' },
  },
  en: {
    nav: {
      home: 'Home',
      library: 'Library',
      journey: 'The Journey',
      reading: 'Spread',
      faq: 'FAQ',
      langHint: 'Switch language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    home: {
      eyebrow: 'School of tarot · open library',
      heroA: 'Learn to',
      heroEm: 'read',
      heroB: 'the cards',
      heroSub: 'All 78 cards of the Rider-Waite deck, their symbols and their silences.',
      ctaSpread: 'Draw a spread',
      ctaLibrary: 'Browse the library',
      stats: [
        ['78', 'cards explained'],
        ['22', 'major arcana'],
        ['∞', 'practice spreads'],
      ],
      startHere: 'Start here',
      threeSteps: 'three steps',
      steps: [
        ['I', 'Know the deck', 'Twenty-two major arcana and four suits. Before interpreting, learn to recognise: which card it is and which family it belongs to.'],
        ['II', 'Explore card by card', 'Open the library, pick a card, and read its meaning upright and reversed. Before long the deck starts speaking without the book.'],
        ['III', 'Draw three', 'Your first real spread. Hold one clear question and practise reading the cards together instead of one by one.'],
      ],
      cardOfDay: {
        eyebrow: 'Daily ritual',
        title: 'Your card today',
        subtitle: 'One card, chosen for the whole day. Before reading its meaning, just look at it: which colours stand out, what gesture its figures hold, what it tells you in silence.',
        beforeReveal: 'Tap the card to reveal it',
        afterReveal: 'Note how this energy resonated with your day.',
        cta: 'See its full meaning',
      },
      majorArcana: 'The Major Arcana',
      seeAll: 'See all 78',
      journeyCta: 'Learn its full story →',
      carouselPrev: 'Previous card',
      carouselNext: 'Next card',
      banner: {
        eyebrow: 'Free practice',
        title: 'The library is free. Practice has no limit.',
        body: 'Look up any card upright or reversed, and draw as many spreads as you like: a single card, three, or the full Celtic Cross.',
        cta: 'Draw a spread',
      },
      footerLinks: [
        ['Library', '#biblioteca'],
        ['Spread', '#tirada'],
        ['Home', '#top'],
      ],
      credit: 'Designed & built by',
    },
    library: {
      eyebrow: 'Library',
      title: 'All 78 Cards',
      subtitle: 'Explore every card in the Rider-Waite deck. Tap one to see its full meaning.',
      searchPlaceholder: 'Search a card or keyword...',
      filters: { all: 'All', major: 'Major Arcana', wands: 'Wands', cups: 'Cups', swords: 'Swords', pentacles: 'Pentacles' },
      count: n => `${n} card${n !== 1 ? 's' : ''}`,
      empty: 'No cards matched that search.',
      showMore: n => `Show ${n} more card${n !== 1 ? 's' : ''}`,
      fundamentals: {
        title: 'The four suits',
        subtitle: 'Every Minor Arcana suit is tied to an element. Before memorising all 56 cards, learn to recognise what each family speaks about.',
        items: {
          wands: { element: 'Fire', keywords: ['passion', 'energy', 'projects', 'creativity'] },
          cups: { element: 'Water', keywords: ['emotions', 'relationships', 'intuition', 'empathy'] },
          swords: { element: 'Air', keywords: ['mind', 'thoughts', 'conflict', 'truth'] },
          pentacles: { element: 'Earth', keywords: ['material matters', 'money', 'work', 'the body'] },
        },
      },
    },
    cardDetail: {
      crumb: 'Library',
      close: 'Close',
      practice: 'Practise a spread',
      tabUp: 'Upright',
      tabRev: 'Reversed',
      howToRead: 'How to read it in a spread',
      howToReadBody: 'Look at the card beside it. The neighbouring suit or arcanum shades the meaning: next to Cups it often speaks of relationships, next to Swords of ideas or conflict, next to Wands of action, next to Pentacles of material matters. Alone at the centre of a spread, it usually marks the central theme of the reading.',
      appearsWith: 'Related cards',
      majorArcanum: 'MAJOR ARCANUM',
      minorArcanum: 'MINOR ARCANUM',
    },
    reading: {
      eyebrow: 'Free practice',
      title: 'Your Spread',
      subtitle: 'Hold your question, choose a spread type, and let the cards speak.',
      questionLabel: 'Your question or intention',
      questionPlaceholder: 'What do you want the cards to guide you on today?',
      spreadTypeLabel: 'Spread type',
      drawCta: 'Reveal the cards',
      questionRecapLabel: 'Your question',
      instruction: 'Tap each card to reveal it · once revealed, tap again to see its meaning',
      newReading: 'New spread',
      tapToReveal: 'Tap the card to reveal it',
      reversed: 'Reversed',
      upright: 'Upright',
      synthesisCta: 'See the voice of the spread',
      synthesisTitle: 'The voice of the spread',
      cardsCount: n => `${n} card${n > 1 ? 's' : ''}`,
    },
    spreads: {
      single: { label: 'One card', description: 'A direct answer to your question', positions: ['Your answer'] },
      three: { label: 'Three cards', description: 'Past · Present · Future', positions: ['Past', 'Present', 'Future'] },
      celtic: {
        label: 'Celtic Cross',
        description: 'A deep ten-card reading',
        positions: [
          'The situation', 'The challenge', 'The distant past', 'The recent past',
          'What is conscious', 'What is unconscious', 'Your influence', 'External influences',
          'Hopes and fears', 'The outcome',
        ],
      },
    },
    journey: {
      eyebrow: 'Major Arcana · a story',
      title: "The Fool's Journey",
      subtitle: "The 22 Major Arcana aren't a list to memorise: they're the steps of a single soul moving through life, from the pure impulse of The Fool to the fullness of The World.",
      foolLabel: 'The starting point',
      stageLabel: n => `Stage ${n}`,
      rangeLabel: (from, to) => `Cards ${from} – ${to}`,
      libraryCta: 'Explore each card in the library →',
      startCta: 'Begin the journey',
      step: (current, total) => `${current} of ${total}`,
      viewCard: 'See full card →',
    },
    notFound: {
      eyebrow: 'Lost along the way',
      title: '404',
      subtitle: 'The Fool wandered off the map.',
      body: "This card isn't part of this deck: the link may be broken, or fate has led you somewhere that doesn't exist yet.",
      cta: 'Back to home',
    },
    faq: {
      eyebrow: 'Before you go on',
      title: 'Frequently asked questions',
      items: [
        [
          'Why does this app teach with the Rider-Waite-Smith deck?',
          "Because it's the most graphic and descriptive: all 78 cards, including the 56 minors, show full illustrated scenes, not just loose symbols. That lets you read intuitively from the image itself instead of memorising 78 meanings by heart. It's also the most studied deck and the basis for nearly every modern deck.",
        ],
        [
          "What's the difference between Major and Minor Arcana?",
          'The 22 Major Arcana represent archetypes and deep life lessons (you can walk through them as a story in "The Journey"). The 56 Minor Arcana describe everyday situations and split into 4 suits: Wands, Cups, Swords and Pentacles, each tied to an element.',
        ],
        [
          'What does it mean when a card comes up reversed?',
          "It's not \"bad luck\". It usually means the card's energy is blocked, turned inward, or needs more attention before it shows up. Every card in the library has its own upright and reversed meaning.",
        ],
        [
          'Do the spreads predict the future?',
          "Not literally. They're a reflection tool: the cards act as a mirror to organise your thoughts and look at a situation from another angle, not as a closed prophecy.",
        ],
        [
          "Where do I start if I've never read tarot?",
          'Follow the "three steps" on the home page: learn the structure of the deck, explore the library card by card, and only then practise your first three-card spread with a concrete question.',
        ],
        [
          'How often should I practise?',
          'One card a day is enough to train your eye (that\'s what the "Card of the day" is for). Save full spreads for when you have a real question: asking the same one over and over tends to confuse more than clarify.',
        ],
      ],
    },
    suits: { wands: 'Wands', cups: 'Cups', swords: 'Swords', pentacles: 'Pentacles' },
  },
};
