import type { Lang } from '../i18n/copy';

export interface JourneyCardEntry {
  cardId: string;
  blurb: string;
}

export interface JourneyStage {
  title: string;
  intro: string;
  fromRoman: string;
  toRoman: string;
  cards: JourneyCardEntry[];
}

export interface JourneyContent {
  fool: { cardId: string; blurb: string };
  stages: JourneyStage[];
}

const es: JourneyContent = {
  fool: {
    cardId: 'major-0',
    blurb: 'El alma pura que inicia el viaje, antes de todo aprendizaje. Acá no hay lecciones todavía — sólo el salto de fe hacia lo desconocido.',
  },
  stages: [
    {
      title: 'El desarrollo terrenal y del ego',
      intro: 'El Loco llega al mundo material y aprende a moverse en él: a construir una identidad, a relacionarse con figuras de autoridad y afecto, y a tomar sus primeras decisiones conscientes.',
      fromRoman: 'I',
      toRoman: 'VII',
      cards: [
        { cardId: 'major-1', blurb: 'Descubre la voluntad activa: tiene todas las herramientas para transformar sus ideas en acción.' },
        { cardId: 'major-2', blurb: 'Descubre su contracara: la intuición receptiva y el misterio que no se explica con la razón.' },
        { cardId: 'major-3', blurb: 'Conoce a la madre arquetípica — abundancia, creación y afecto incondicional.' },
        { cardId: 'major-4', blurb: 'Conoce al padre arquetípico — orden, estructura y autoridad.' },
        { cardId: 'major-5', blurb: 'Aprende las tradiciones, la educación y los sistemas de creencias que heredó.' },
        { cardId: 'major-6', blurb: 'Enfrenta su primera decisión moral consciente: elegir a un igual, y elegirse a sí mismo.' },
        { cardId: 'major-7', blurb: 'Logra dominar sus impulsos contradictorios y toma el control de su propia dirección.' },
      ],
    },
    {
      title: 'La crisis existencial y el viaje interior',
      intro: 'Ya establecido en el mundo exterior, el Loco empieza a preguntarse quién es por dentro. Es el tramo más introspectivo del viaje: exige soltar el control y mirar de frente lo que incomoda.',
      fromRoman: 'VIII',
      toRoman: 'XIV',
      cards: [
        { cardId: 'major-8', blurb: 'Aprende a domar sus instintos con paciencia y compasión, no con la fuerza bruta.' },
        { cardId: 'major-9', blurb: 'Se retira del ruido exterior para buscar su propia verdad, a solas.' },
        { cardId: 'major-10', blurb: 'Comprende que la vida es cíclica: no todo está bajo su control.' },
        { cardId: 'major-11', blurb: 'Asume la responsabilidad de sus actos, sus causas y sus consecuencias.' },
        { cardId: 'major-12', blurb: 'Acepta hacer una pausa y mirar las cosas al revés, desde el desapego.' },
        { cardId: 'major-13', blurb: 'Vive una transformación profunda: deja morir una vieja identidad para poder renacer.' },
        { cardId: 'major-14', blurb: 'Encuentra el equilibrio y la calma después de la tormenta.' },
      ],
    },
    {
      title: 'La trascendencia y la iluminación',
      intro: 'El tramo final del viaje enfrenta la sombra y busca la integración total. El Loco atraviesa la ruptura, la oscuridad y finalmente la luz — para cerrar el ciclo transformado.',
      fromRoman: 'XV',
      toRoman: 'XXI',
      cards: [
        { cardId: 'major-15', blurb: 'Reconoce sus apegos, miedos y cadenas — las que él mismo se puso.' },
        { cardId: 'major-16', blurb: 'Sufre la ruptura súbita de las ilusiones y estructuras falsas que había construido.' },
        { cardId: 'major-17', blurb: 'Encuentra esperanza renovada y fe después del colapso.' },
        { cardId: 'major-18', blurb: 'Cruza la noche oscura del alma, entre ilusiones e incertidumbres inconscientes.' },
        { cardId: 'major-19', blurb: 'Alcanza la claridad, la vitalidad y la alegría plena.' },
        { cardId: 'major-20', blurb: 'Escucha el llamado a despertar, perdonar el pasado y renacer con un propósito.' },
        { cardId: 'major-21', blurb: 'Cierra el ciclo con plenitud y autorrealización — listo para empezar una nueva espiral.' },
      ],
    },
  ],
};

const en: JourneyContent = {
  fool: {
    cardId: 'major-0',
    blurb: 'The pure soul beginning the journey, before any lesson. There is nothing to learn here yet — only the leap of faith into the unknown.',
  },
  stages: [
    {
      title: 'Worldly and ego development',
      intro: "The Fool arrives in the material world and learns to move through it: building an identity, relating to figures of authority and affection, and making his first conscious choices.",
      fromRoman: 'I',
      toRoman: 'VII',
      cards: [
        { cardId: 'major-1', blurb: 'Discovers active will: he has every tool to turn ideas into action.' },
        { cardId: 'major-2', blurb: "Discovers his counterpart: receptive intuition and the mystery reason can't explain." },
        { cardId: 'major-3', blurb: 'Meets the archetypal mother — abundance, creation and unconditional love.' },
        { cardId: 'major-4', blurb: 'Meets the archetypal father — order, structure and authority.' },
        { cardId: 'major-5', blurb: 'Learns the traditions, education and belief systems he inherited.' },
        { cardId: 'major-6', blurb: 'Faces his first conscious moral choice: choosing an equal, and choosing himself.' },
        { cardId: 'major-7', blurb: 'Masters his contradictory impulses and takes control of his own direction.' },
      ],
    },
    {
      title: 'Existential crisis and the inner journey',
      intro: "Settled in the outer world, the Fool starts asking who he is on the inside. This is the most introspective stretch of the journey: it demands letting go of control and facing what's uncomfortable.",
      fromRoman: 'VIII',
      toRoman: 'XIV',
      cards: [
        { cardId: 'major-8', blurb: 'Learns to tame his instincts with patience and compassion, not brute force.' },
        { cardId: 'major-9', blurb: 'Withdraws from the noise outside to search for his own truth, alone.' },
        { cardId: 'major-10', blurb: 'Understands that life is cyclical: not everything is under his control.' },
        { cardId: 'major-11', blurb: 'Takes responsibility for his actions, their causes and their consequences.' },
        { cardId: 'major-12', blurb: 'Accepts pausing and seeing things upside down, from detachment.' },
        { cardId: 'major-13', blurb: 'Lives a deep transformation: lets an old identity die so he can be reborn.' },
        { cardId: 'major-14', blurb: 'Finds balance and calm after the storm.' },
      ],
    },
    {
      title: 'Transcendence and illumination',
      intro: 'The final stretch faces the shadow and seeks full integration. The Fool moves through rupture, darkness, and finally light — closing the cycle transformed.',
      fromRoman: 'XV',
      toRoman: 'XXI',
      cards: [
        { cardId: 'major-15', blurb: 'Recognises his attachments, fears and chains — the ones he put on himself.' },
        { cardId: 'major-16', blurb: 'Suffers the sudden collapse of illusions and false structures he had built.' },
        { cardId: 'major-17', blurb: 'Finds renewed hope and faith after the collapse.' },
        { cardId: 'major-18', blurb: 'Crosses the dark night of the soul, through illusions and unconscious uncertainty.' },
        { cardId: 'major-19', blurb: 'Reaches clarity, vitality and full joy.' },
        { cardId: 'major-20', blurb: 'Hears the call to wake up, forgive the past and be reborn with purpose.' },
        { cardId: 'major-21', blurb: 'Closes the cycle in fullness and self-realisation — ready to begin a new spiral.' },
      ],
    },
  ],
};

export function getJourney(lang: Lang): JourneyContent {
  return lang === 'en' ? en : es;
}
