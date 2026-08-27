export interface TarotCard {
  id: string;
  name: string;
  arcana: 'major' | 'minor';
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles';
  number: number;
  imageUrl: string;
  uprightMeaning: {
    keywords: string[];
    description: string;
  };
  reversedMeaning: {
    keywords: string[];
    description: string;
  };
}

const IMG = 'https://www.sacred-texts.com/tarot/pkt/img';

export const cards: TarotCard[] = [
  // =====================
  // ARCANOS MAYORES (0-21)
  // =====================
  {
    id: 'major-0',
    name: 'The Fool',
    arcana: 'major',
    number: 0,
    imageUrl: `${IMG}/ar00.jpg`,
    uprightMeaning: {
      keywords: ['nuevos comienzos', 'inocencia', 'espontaneidad', 'espíritu libre'],
      description: 'El Loco representa el inicio de un viaje épico lleno de potencial y posibilidades. Es la energía de la pureza, la aventura y el salto al vacío con fe. Invita a abrazar lo desconocido con confianza y curiosidad.',
    },
    reversedMeaning: {
      keywords: ['imprudencia', 'riesgo innecesario', 'ingenuidad', 'negligencia'],
      description: 'Invertido, el Loco advierte sobre decisiones apresuradas y falta de planificación. Puedes estar tomando riesgos sin considerar las consecuencias, o tu ingenuidad te está haciendo vulnerable.',
    },
  },
  {
    id: 'major-1',
    name: 'The Magician',
    arcana: 'major',
    number: 1,
    imageUrl: `${IMG}/ar01.jpg`,
    uprightMeaning: {
      keywords: ['voluntad', 'manifestación', 'habilidad', 'poder'],
      description: 'El Mago posee todas las herramientas necesarias para crear su realidad. Representa la capacidad de transformar ideas en acciones concretas, usando el poder de la mente, la voluntad y los recursos disponibles.',
    },
    reversedMeaning: {
      keywords: ['manipulación', 'talentos sin usar', 'engaño', 'falta de enfoque'],
      description: 'Invertido, el Mago puede señalar manipulación propia o ajena, o talentos que no estás aprovechando. Es momento de revisar si tus intenciones son puras y si estás usando tu energía productivamente.',
    },
  },
  {
    id: 'major-2',
    name: 'The High Priestess',
    arcana: 'major',
    number: 2,
    imageUrl: `${IMG}/ar02.jpg`,
    uprightMeaning: {
      keywords: ['intuición', 'misterio', 'sabiduría interior', 'subconsciente'],
      description: 'La Suma Sacerdotisa guarda los secretos del universo y te invita a confiar en tu intuición. Representa el conocimiento que va más allá de lo racional, el poder del silencio y la sabiduría que se encuentra en la quietud.',
    },
    reversedMeaning: {
      keywords: ['secretos ocultos', 'intuición bloqueada', 'represión', 'superficialidad'],
      description: 'Invertida, la Suma Sacerdotisa sugiere que estás ignorando tu voz interior o que hay información que se te oculta. Es tiempo de hacer silencio y escuchar lo que tu subconsciente quiere decirte.',
    },
  },
  {
    id: 'major-3',
    name: 'The Empress',
    arcana: 'major',
    number: 3,
    imageUrl: `${IMG}/ar03.jpg`,
    uprightMeaning: {
      keywords: ['abundancia', 'feminidad', 'fertilidad', 'naturaleza', 'nutrición'],
      description: 'La Emperatriz es la gran madre, símbolo de abundancia, belleza y creatividad. Representa la conexión con la naturaleza, el amor maternal y la capacidad de dar vida a nuevas ideas, proyectos y relaciones.',
    },
    reversedMeaning: {
      keywords: ['bloqueo creativo', 'dependencia', 'sobreprotección', 'estancamiento'],
      description: 'Invertida, la Emperatriz puede indicar un bloqueo en tu creatividad o dependencia emocional. Quizás estás sobreprotegiendo a alguien o descuidando tu propio autocuidado y conexión con la naturaleza.',
    },
  },
  {
    id: 'major-4',
    name: 'The Emperor',
    arcana: 'major',
    number: 4,
    imageUrl: `${IMG}/ar04.jpg`,
    uprightMeaning: {
      keywords: ['autoridad', 'estructura', 'control', 'paternidad', 'estabilidad'],
      description: 'El Emperador representa el poder de la estructura y el orden. Es la figura de autoridad que crea sistemas, establece límites y provee estabilidad. Habla de liderazgo firme, disciplina y la capacidad de hacer que las cosas sucedan.',
    },
    reversedMeaning: {
      keywords: ['rigidez', 'dominación', 'inflexibilidad', 'abuso de poder'],
      description: 'Invertido, el Emperador advierte sobre abuso de autoridad, inflexibilidad extrema o incapacidad para ejercer liderazgo. Puede indicar conflictos con figuras de poder o una estructura que se ha vuelto opresiva.',
    },
  },
  {
    id: 'major-5',
    name: 'The Hierophant',
    arcana: 'major',
    number: 5,
    imageUrl: `${IMG}/ar05.jpg`,
    uprightMeaning: {
      keywords: ['tradición', 'instituciones', 'espiritualidad', 'conformidad', 'guía'],
      description: 'El Hierofante representa las tradiciones, las instituciones y la guía espiritual establecida. Habla de respetar el conocimiento ancestral, seguir rituales consagrados y buscar orientación en sistemas de creencias establecidos.',
    },
    reversedMeaning: {
      keywords: ['rebeldía', 'pensamiento propio', 'ruptura con tradición', 'heterodoxia'],
      description: 'Invertido, el Hierofante te invita a cuestionar las reglas y tradiciones que ya no te sirven. Es momento de pensar por ti mismo en lugar de seguir ciegamente las normas establecidas.',
    },
  },
  {
    id: 'major-6',
    name: 'The Lovers',
    arcana: 'major',
    number: 6,
    imageUrl: `${IMG}/ar06.jpg`,
    uprightMeaning: {
      keywords: ['amor', 'unión', 'elecciones', 'alineación de valores', 'relaciones'],
      description: 'Los Amantes representan la unión profunda entre dos personas y las elecciones que hacemos con el corazón. Habla de relaciones significativas, alineación con tus valores más profundos y la importancia de elegir con el alma.',
    },
    reversedMeaning: {
      keywords: ['desacuerdo', 'desalineación', 'desequilibrio', 'elecciones difíciles'],
      description: 'Invertidos, los Amantes señalan desequilibrio en una relación o conflicto entre lo que quieres y lo que sabes que es correcto. Puede indicar que evitas tomar una decisión importante.',
    },
  },
  {
    id: 'major-7',
    name: 'The Chariot',
    arcana: 'major',
    number: 7,
    imageUrl: `${IMG}/ar07.jpg`,
    uprightMeaning: {
      keywords: ['control', 'voluntad', 'determinación', 'victoria', 'acción'],
      description: 'El Carro representa la victoria a través de la disciplina y el control de las fuerzas opuestas. Habla de avanzar con determinación, dominar tus impulsos y dirigir toda tu energía hacia una meta clara.',
    },
    reversedMeaning: {
      keywords: ['falta de control', 'agresión', 'energía dispersa', 'obstáculos'],
      description: 'Invertido, el Carro sugiere fuerza mal dirigida o falta de control sobre las circunstancias. Puede indicar que fuerzas opuestas te están frenando o que estás actuando con agresividad innecesaria.',
    },
  },
  {
    id: 'major-8',
    name: 'Strength',
    arcana: 'major',
    number: 8,
    imageUrl: `${IMG}/ar08.jpg`,
    uprightMeaning: {
      keywords: ['fortaleza interior', 'coraje', 'paciencia', 'compasión', 'dominio'],
      description: 'La Fuerza no habla de fuerza bruta sino del poder que viene de dominar tus emociones e instintos con amor y compasión. Representa el coraje tranquilo, la resistencia y la capacidad de superar los miedos con gracia.',
    },
    reversedMeaning: {
      keywords: ['dudas', 'debilidad', 'inseguridad', 'falta de confianza'],
      description: 'Invertida, la Fuerza indica que estás dejando que el miedo o las dudas te paralicen. Es momento de reconectar con tu poder interior y confiar en tu capacidad para superar las adversidades.',
    },
  },
  {
    id: 'major-9',
    name: 'The Hermit',
    arcana: 'major',
    number: 9,
    imageUrl: `${IMG}/ar09.jpg`,
    uprightMeaning: {
      keywords: ['introspección', 'soledad', 'guía interior', 'búsqueda espiritual'],
      description: 'El Ermitaño lleva su propia luz en la oscuridad, simbolizando la búsqueda de la verdad a través del silencio y la soledad. Representa la necesidad de retirarse del mundo para encontrar respuestas dentro de uno mismo.',
    },
    reversedMeaning: {
      keywords: ['aislamiento', 'soledad no elegida', 'reclusión', 'desconexión'],
      description: 'Invertido, el Ermitaño puede indicar un aislamiento que se ha vuelto perjudicial, o dificultad para conectar con tu sabiduría interior. Quizás es tiempo de volver al mundo y compartir lo que has aprendido.',
    },
  },
  {
    id: 'major-10',
    name: 'Wheel of Fortune',
    arcana: 'major',
    number: 10,
    imageUrl: `${IMG}/ar10.jpg`,
    uprightMeaning: {
      keywords: ['cambio', 'ciclos', 'destino', 'buena suerte', 'karma'],
      description: 'La Rueda de la Fortuna recuerda que todo cambia y que la vida se mueve en ciclos. Representa los giros del destino, la buena fortuna que puede llegar de sorpresa y la ley del karma que regula el universo.',
    },
    reversedMeaning: {
      keywords: ['mala suerte', 'resistencia al cambio', 'desorden', 'reveses'],
      description: 'Invertida, la Rueda advierte sobre un período de mala suerte o resistencia a los cambios inevitables. Puedes estar tratando de controlar lo incontrolable. Recuerda: lo que baja, vuelve a subir.',
    },
  },
  {
    id: 'major-11',
    name: 'Justice',
    arcana: 'major',
    number: 11,
    imageUrl: `${IMG}/ar11.jpg`,
    uprightMeaning: {
      keywords: ['justicia', 'verdad', 'ley', 'balance', 'responsabilidad'],
      description: 'La Justicia representa la verdad objetiva y el equilibrio kármico. Habla de que las acciones tienen consecuencias, que la verdad siempre prevalece y que hay que asumir la responsabilidad de las propias decisiones.',
    },
    reversedMeaning: {
      keywords: ['injusticia', 'desequilibrio', 'deshonestidad', 'falta de rendición de cuentas'],
      description: 'Invertida, la Justicia señala injusticia, falta de honestidad o evasión de responsabilidades. Puede indicar que te estás engañando a ti mismo o que una situación no está siendo resuelta de manera equitativa.',
    },
  },
  {
    id: 'major-12',
    name: 'The Hanged Man',
    arcana: 'major',
    number: 12,
    imageUrl: `${IMG}/ar12.jpg`,
    uprightMeaning: {
      keywords: ['pausa', 'rendición', 'nueva perspectiva', 'sacrificio', 'reflexión'],
      description: 'El Colgado elige voluntariamente suspenderse para ver el mundo desde otro ángulo. Representa la sabiduría que viene de soltar el control, hacer pausa y sacrificar algo menor para ganar una perspectiva más profunda.',
    },
    reversedMeaning: {
      keywords: ['demoras', 'resistencia', 'sacrificio inútil', 'estancamiento'],
      description: 'Invertido, el Colgado puede indicar que estás resistiendo la pausa necesaria o que estás sacrificándote sin ningún propósito. Es momento de preguntarte si tu espera tiene sentido o si solo estás evitando actuar.',
    },
  },
  {
    id: 'major-13',
    name: 'Death',
    arcana: 'major',
    number: 13,
    imageUrl: `${IMG}/ar13.jpg`,
    uprightMeaning: {
      keywords: ['transformación', 'finales', 'transición', 'cambio inevitable'],
      description: 'La Muerte raramente habla de muerte física. Es la carta de la transformación profunda: el fin de un capítulo que necesariamente da lugar a uno nuevo. Representa el poder de soltar lo que ya no sirve para poder renacer.',
    },
    reversedMeaning: {
      keywords: ['resistencia al cambio', 'estancamiento', 'incapacidad de soltar'],
      description: 'Invertida, la Muerte señala resistencia a un cambio inevitable o incapacidad para cerrar un ciclo que ya terminó. Aferrarse al pasado solo prolonga el dolor del proceso de transformación.',
    },
  },
  {
    id: 'major-14',
    name: 'Temperance',
    arcana: 'major',
    number: 14,
    imageUrl: `${IMG}/ar14.jpg`,
    uprightMeaning: {
      keywords: ['equilibrio', 'moderación', 'paciencia', 'propósito', 'armonía'],
      description: 'La Templanza representa el arte del equilibrio y la moderación. Habla de mezclar elementos opuestos con habilidad, de encontrar el punto medio y de fluir con paciencia hacia tus metas con serenidad y propósito.',
    },
    reversedMeaning: {
      keywords: ['desequilibrio', 'exceso', 'impaciencia', 'falta de armonía'],
      description: 'Invertida, la Templanza señala excesos o falta de equilibrio en algún área de tu vida. Puede indicar impaciencia, falta de moderación o dificultad para integrar partes opuestas de tu vida o personalidad.',
    },
  },
  {
    id: 'major-15',
    name: 'The Devil',
    arcana: 'major',
    number: 15,
    imageUrl: `${IMG}/ar15.jpg`,
    uprightMeaning: {
      keywords: ['atadura', 'materialismo', 'adicción', 'sombra', 'ilusión'],
      description: 'El Diablo representa las ataduras que nos imponemos a nosotros mismos, ya sea por miedo, adicción o materialismo. Las cadenas en esta carta son flojas: quien las lleva podría quitárselas, pero elige no hacerlo.',
    },
    reversedMeaning: {
      keywords: ['liberación', 'ruptura de cadenas', 'iluminación', 'reclamar poder'],
      description: 'Invertido, el Diablo anuncia liberación de ataduras o adicciones. Estás comenzando a ver las ilusiones que te tenían atrapado y a reclamar tu poder personal. Es un momento de despertar y ruptura.',
    },
  },
  {
    id: 'major-16',
    name: 'The Tower',
    arcana: 'major',
    number: 16,
    imageUrl: `${IMG}/ar16.jpg`,
    uprightMeaning: {
      keywords: ['caos', 'revelación', 'cambio súbito', 'destrucción', 'despertar'],
      description: 'La Torre representa cambios súbitos y disruptivos que derrumban estructuras falsas. Aunque el proceso puede ser caótico y doloroso, lo que la Torre destruye necesitaba caer para que algo verdadero pueda construirse.',
    },
    reversedMeaning: {
      keywords: ['evitar el desastre', 'resistencia', 'miedo al cambio', 'crisis interna'],
      description: 'Invertida, la Torre puede indicar que estás evitando o retrasando una crisis inevitable, o que la perturbación es más interna que externa. A veces la Torre invertida indica el colapso que se evitó por poco.',
    },
  },
  {
    id: 'major-17',
    name: 'The Star',
    arcana: 'major',
    number: 17,
    imageUrl: `${IMG}/ar17.jpg`,
    uprightMeaning: {
      keywords: ['esperanza', 'inspiración', 'serenidad', 'renovación', 'fe'],
      description: 'La Estrella aparece después de la tormenta de la Torre, trayendo esperanza y sanación. Representa la fe en el futuro, la inspiración que viene de conectar con tu verdadero yo y la certeza de que todo irá bien.',
    },
    reversedMeaning: {
      keywords: ['desesperanza', 'falta de fe', 'inseguridad', 'desilusión'],
      description: 'Invertida, la Estrella señala pérdida de fe o esperanza. Quizás te sientes desconectado de tu propósito o incapaz de ver la luz al final del túnel. Es un recordatorio de que incluso en la oscuridad, las estrellas siguen ahí.',
    },
  },
  {
    id: 'major-18',
    name: 'The Moon',
    arcana: 'major',
    number: 18,
    imageUrl: `${IMG}/ar18.jpg`,
    uprightMeaning: {
      keywords: ['ilusión', 'miedo', 'lo desconocido', 'confusión', 'inconsciente'],
      description: 'La Luna ilumina el camino con su luz incierta, revelando lo que el subconsciente esconde: miedos, ilusiones y verdades ocultas. Invita a navegar la incertidumbre con intuición y a enfrentar lo que se teme mirar.',
    },
    reversedMeaning: {
      keywords: ['confusión aclarándose', 'liberando miedos', 'revelación', 'claridad'],
      description: 'Invertida, la Luna indica que los miedos y las ilusiones comienzan a disiparse. La niebla se está levantando y puedes empezar a ver la situación con más claridad. Es el momento de liberar patrones inconscientes.',
    },
  },
  {
    id: 'major-19',
    name: 'The Sun',
    arcana: 'major',
    number: 19,
    imageUrl: `${IMG}/ar19.jpg`,
    uprightMeaning: {
      keywords: ['alegría', 'éxito', 'vitalidad', 'positividad', 'claridad'],
      description: 'El Sol es una de las cartas más positivas del tarot. Representa la alegría pura, el éxito, la claridad mental y la energía vital. Anuncia un período de abundancia, confianza y satisfacción genuina.',
    },
    reversedMeaning: {
      keywords: ['depresión temporal', 'optimismo bloqueado', 'exceso de ego', 'falta de claridad'],
      description: 'Invertido, el Sol puede indicar dificultad para ver el lado positivo de las cosas o un período de baja energía. La alegría sigue disponible, pero algo la está bloqueando. También puede señalar exceso de optimismo o ego.',
    },
  },
  {
    id: 'major-20',
    name: 'Judgement',
    arcana: 'major',
    number: 20,
    imageUrl: `${IMG}/ar20.jpg`,
    uprightMeaning: {
      keywords: ['reflexión', 'redención', 'despertar', 'llamado', 'absolución'],
      description: 'El Juicio representa un momento de profunda reflexión y despertar espiritual. Es el llamado a levantarse, evaluar honestamente el pasado y responder a una vocación más alta. Trae absolución, transformación y un nuevo comienzo consciente.',
    },
    reversedMeaning: {
      keywords: ['autoduda', 'ignorar el llamado', 'falta de conciencia', 'autojuicio'],
      description: 'Invertido, el Juicio señala que estás ignorando una llamada importante o que el miedo al juicio (propio o ajeno) te paraliza. Es momento de perdonarte y abrirte a la transformación que te está esperando.',
    },
  },
  {
    id: 'major-21',
    name: 'The World',
    arcana: 'major',
    number: 21,
    imageUrl: `${IMG}/ar21.jpg`,
    uprightMeaning: {
      keywords: ['completud', 'integración', 'logro', 'totalidad', 'cierre de ciclo'],
      description: 'El Mundo representa la culminación de un ciclo completo. Es la carta de la realización total, de haber integrado todas las lecciones del camino y de estar en perfecta armonía con el universo. Un cierre digno y celebratorio.',
    },
    reversedMeaning: {
      keywords: ['incompletud', 'falta de cierre', 'estancamiento', 'vacío'],
      description: 'Invertido, el Mundo indica que aún no has terminado de completar un ciclo importante. Puede haber algo sin resolver que te impide avanzar plenamente. Busca el cierre que te falta antes de emprender el próximo viaje.',
    },
  },

  // =====================
  // BASTOS (WANDS) — Fuego
  // =====================
  {
    id: 'wands-1',
    name: 'Ace of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 1,
    imageUrl: `${IMG}/waac.jpg`,
    uprightMeaning: {
      keywords: ['inspiración', 'nuevo proyecto', 'potencial creativo', 'energía'],
      description: 'El As de Bastos es una chispa de pura energía creativa. Anuncia el nacimiento de una nueva idea, proyecto o pasión con enorme potencial. Es el momento de lanzarte con entusiasmo hacia algo nuevo.',
    },
    reversedMeaning: {
      keywords: ['demoras', 'falta de pasión', 'bloqueo creativo', 'energía estancada'],
      description: 'Invertido, el As de Bastos señala que esa chispa creativa está bloqueada o que un proyecto prometedor enfrenta demoras frustrantes. Puede ser que el momento aún no sea el correcto.',
    },
  },
  {
    id: 'wands-2',
    name: 'Two of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 2,
    imageUrl: `${IMG}/wa02.jpg`,
    uprightMeaning: {
      keywords: ['planificación', 'visión de futuro', 'progreso', 'decisión'],
      description: 'El Dos de Bastos representa a alguien que mira al horizonte con visión. Has dado los primeros pasos y ahora planificas los siguientes. Es momento de decidir hacia dónde quieres llevar tu energía y establecer metas a largo plazo.',
    },
    reversedMeaning: {
      keywords: ['miedo a lo desconocido', 'indecisión', 'planes mal trazados', 'retroceso'],
      description: 'Invertido, el Dos de Bastos indica indecisión o miedo a dar el siguiente paso. Los planes pueden estar mal alineados con la realidad, o el miedo al futuro te impide avanzar con confianza.',
    },
  },
  {
    id: 'wands-3',
    name: 'Three of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 3,
    imageUrl: `${IMG}/wa03.jpg`,
    uprightMeaning: {
      keywords: ['expansión', 'previsión', 'progreso', 'liderazgo', 'aventura'],
      description: 'El Tres de Bastos habla de expansión y progreso real. Has lanzado tus "barcos" al mar y ahora esperas los resultados. Simboliza el liderazgo, la visión emprendedora y la emoción de ver tus planes materializarse.',
    },
    reversedMeaning: {
      keywords: ['jugar seguro', 'falta de visión', 'obstáculos inesperados', 'retrasos'],
      description: 'Invertido, el Tres de Bastos señala que tus planes están enfrentando obstáculos o que tienes miedo de expandirte más allá de tu zona de confort. Revisa si tu falta de visión a largo plazo está limitando tu crecimiento.',
    },
  },
  {
    id: 'wands-4',
    name: 'Four of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 4,
    imageUrl: `${IMG}/wa04.jpg`,
    uprightMeaning: {
      keywords: ['celebración', 'hogar', 'armonía', 'hito', 'estabilidad'],
      description: 'El Cuatro de Bastos celebra los logros alcanzados y la estabilidad del hogar. Es una carta de alegría compartida, celebraciones familiares y la satisfacción de haber creado una base sólida en tu vida.',
    },
    reversedMeaning: {
      keywords: ['inestabilidad', 'falta de apoyo', 'tensión familiar', 'celebración postergada'],
      description: 'Invertido, el Cuatro de Bastos puede indicar tensiones en el hogar o que una celebración o logro esperado se demora. También puede señalar falta de estabilidad en tu base emocional o familiar.',
    },
  },
  {
    id: 'wands-5',
    name: 'Five of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 5,
    imageUrl: `${IMG}/wa05.jpg`,
    uprightMeaning: {
      keywords: ['conflicto', 'competencia', 'desacuerdo', 'caos constructivo'],
      description: 'El Cinco de Bastos muestra un grupo en conflicto. Puede representar competencia sana, debates acalorados o simplemente el caos que viene de tener muchas ideas y energías en juego al mismo tiempo.',
    },
    reversedMeaning: {
      keywords: ['fin del conflicto', 'resolución', 'evitar confrontación', 'acuerdo'],
      description: 'Invertido, el Cinco de Bastos puede señalar el fin de un conflicto o la evitación de una confrontación necesaria. También puede indicar que la competencia interna o externa finalmente se está resolviendo.',
    },
  },
  {
    id: 'wands-6',
    name: 'Six of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 6,
    imageUrl: `${IMG}/wa06.jpg`,
    uprightMeaning: {
      keywords: ['victoria', 'reconocimiento', 'éxito público', 'confianza', 'logro'],
      description: 'El Seis de Bastos es la carta del triunfo merecido. Representa el reconocimiento público de tus esfuerzos, el éxito que llega después de la lucha y la confianza que se desarrolla cuando tus logros son vistos y valorados.',
    },
    reversedMeaning: {
      keywords: ['falta de reconocimiento', 'ego inflado', 'fracaso', 'retraso del éxito'],
      description: 'Invertido, el Seis de Bastos puede indicar que el éxito esperado se demora o que no estás recibiendo el reconocimiento que mereces. También puede señalar ego inflado o dependencia excesiva de la validación externa.',
    },
  },
  {
    id: 'wands-7',
    name: 'Seven of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 7,
    imageUrl: `${IMG}/wa07.jpg`,
    uprightMeaning: {
      keywords: ['desafío', 'perseverancia', 'defensa', 'posición firme', 'valentía'],
      description: 'El Siete de Bastos muestra a alguien defendiendo su posición desde las alturas. Habla de perseverancia ante los desafíos, de mantenerse firme cuando otros intentan desequilibrarte y de proteger lo que has logrado.',
    },
    reversedMeaning: {
      keywords: ['rendirse', 'abrumado', 'dudas', 'ceder terreno', 'agotamiento'],
      description: 'Invertido, el Siete de Bastos puede indicar que te estás rindiendo ante la presión externa, que las dudas sobre tu posición te están debilitando o que el agotamiento de defender tu terreno te está pasando factura.',
    },
  },
  {
    id: 'wands-8',
    name: 'Eight of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 8,
    imageUrl: `${IMG}/wa08.jpg`,
    uprightMeaning: {
      keywords: ['velocidad', 'acción', 'movimiento rápido', 'comunicación', 'viaje'],
      description: 'El Ocho de Bastos es la carta de la velocidad y el movimiento. Anuncia que las cosas finalmente se aceleran, que noticias o resultados esperados están en camino y que es momento de actuar rápido y con decisión.',
    },
    reversedMeaning: {
      keywords: ['demoras', 'frustración', 'espera', 'energía dispersa', 'sobrecarga'],
      description: 'Invertido, el Ocho de Bastos indica demoras frustrantes o exceso de velocidad que genera caos. También puede señalar comunicaciones confusas o un período donde sientes que todo se mueve demasiado rápido para procesarlo.',
    },
  },
  {
    id: 'wands-9',
    name: 'Nine of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 9,
    imageUrl: `${IMG}/wa09.jpg`,
    uprightMeaning: {
      keywords: ['resiliencia', 'persistencia', 'última batalla', 'defensa', 'agotamiento'],
      description: 'El Nueve de Bastos muestra a alguien herido pero firme, listo para dar el último empuje. Representa la resiliencia que viene de haber sobrevivido mucho, y el coraje de seguir adelante cuando casi no quedan fuerzas.',
    },
    reversedMeaning: {
      keywords: ['rendirse', 'exceso de defensiva', 'obstinación', 'paranoia'],
      description: 'Invertido, el Nueve de Bastos puede indicar que te estás rindiendo justo antes de cruzar la meta, o que tu actitud defensiva se ha vuelto exagerada y está bloqueando nuevas oportunidades.',
    },
  },
  {
    id: 'wands-10',
    name: 'Ten of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 10,
    imageUrl: `${IMG}/wa10.jpg`,
    uprightMeaning: {
      keywords: ['carga', 'responsabilidad', 'trabajo duro', 'presión', 'estrés'],
      description: 'El Diez de Bastos muestra a alguien cargando más de lo que puede con comodidad. Habla de responsabilidades abrumadoras, de llevar el peso de demasiadas obligaciones y de la necesidad urgente de delegar.',
    },
    reversedMeaning: {
      keywords: ['delegación', 'liberación de carga', 'alivio', 'dejar ir', 'burnout'],
      description: 'Invertido, el Diez de Bastos puede señalar que finalmente estás aprendiendo a delegar, o que el peso que cargabas se está convirtiendo en burnout. Es urgente que sueltes algunas responsabilidades.',
    },
  },
  {
    id: 'wands-11',
    name: 'Page of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 11,
    imageUrl: `${IMG}/wapa.jpg`,
    uprightMeaning: {
      keywords: ['exploración', 'entusiasmo', 'descubrimiento', 'potencial', 'curiosidad'],
      description: 'El Paje de Bastos es un espíritu joven y entusiasta, lleno de energía para explorar nuevas ideas. Representa el inicio de un camino creativo, la curiosidad sin límites y el entusiasmo que precede a la acción.',
    },
    reversedMeaning: {
      keywords: ['falta de dirección', 'procrastinación', 'ideas sin acción', 'inmadurez'],
      description: 'Invertido, el Paje de Bastos tiene las ideas pero no la disciplina para ejecutarlas. Puede indicar procrastinación, proyectos que nunca pasan del papel o energía creativa que se dispersa sin concretarse.',
    },
  },
  {
    id: 'wands-12',
    name: 'Knight of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 12,
    imageUrl: `${IMG}/wakn.jpg`,
    uprightMeaning: {
      keywords: ['energía', 'pasión', 'aventura', 'acción', 'impulsividad'],
      description: 'El Caballero de Bastos es pura energía en movimiento. Apasionado, aventurero y lleno de vida, actúa con rapidez y decisión. Representa la acción valiente y la pasión que impulsa hacia adelante sin mirar atrás.',
    },
    reversedMeaning: {
      keywords: ['impulsividad', 'irresponsabilidad', 'enojo', 'proyectos sin terminar'],
      description: 'Invertido, el Caballero de Bastos es impulsivo y puede actuar sin pensar en las consecuencias. Su energía puede convertirse en ira o en proyectos comenzados con entusiasmo pero abandonados a mitad de camino.',
    },
  },
  {
    id: 'wands-13',
    name: 'Queen of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 13,
    imageUrl: `${IMG}/waqu.jpg`,
    uprightMeaning: {
      keywords: ['confianza', 'independencia', 'valentía', 'carisma', 'liderazgo'],
      description: 'La Reina de Bastos es magnética, apasionada e independiente. Sabe exactamente quién es y lo que quiere. Representa el liderazgo con corazón, la confianza en uno mismo y la habilidad de inspirar a quienes la rodean.',
    },
    reversedMeaning: {
      keywords: ['egoísmo', 'celos', 'volatilidad', 'agotamiento', 'inseguridad disfrazada'],
      description: 'Invertida, la Reina de Bastos puede volverse celosa, demandante o volátil. Su confianza puede esconder inseguridades profundas que la llevan a comportamientos controladores o egoístas.',
    },
  },
  {
    id: 'wands-14',
    name: 'King of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 14,
    imageUrl: `${IMG}/waki.jpg`,
    uprightMeaning: {
      keywords: ['líder natural', 'visión', 'emprendimiento', 'carisma', 'maestría'],
      description: 'El Rey de Bastos es el emprendedor visionario por excelencia. Con su carisma natural y su visión clara, inspira a otros a seguirlo. Representa el dominio de la energía creativa y el liderazgo que motiva el cambio.',
    },
    reversedMeaning: {
      keywords: ['impulsividad', 'autoritarismo', 'manipulación', 'arrogancia'],
      description: 'Invertido, el Rey de Bastos puede volverse autoritario, impulsivo y poco considerado. Su fortaleza se convierte en arrogancia, y su visión puede distorsionarse por el ego o la necesidad de control.',
    },
  },

  // =====================
  // COPAS (CUPS) — Agua
  // =====================
  {
    id: 'cups-1',
    name: 'Ace of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 1,
    imageUrl: `${IMG}/cuac.jpg`,
    uprightMeaning: {
      keywords: ['amor', 'nuevas emociones', 'intuición', 'abundancia emocional', 'conexión'],
      description: 'El As de Copas es el inicio de un amor profundo o una conexión emocional significativa. Representa la apertura del corazón, el fluir de sentimientos genuinos y la capacidad de dar y recibir amor incondicionalmente.',
    },
    reversedMeaning: {
      keywords: ['bloqueo emocional', 'creatividad bloqueada', 'amor reprimido', 'vacío'],
      description: 'Invertido, el As de Copas indica un bloqueo en el flujo emocional. Puede ser que estés cerrando tu corazón por miedo, o que una conexión potencial no pueda materializarse por obstáculos emocionales.',
    },
  },
  {
    id: 'cups-2',
    name: 'Two of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 2,
    imageUrl: `${IMG}/cu02.jpg`,
    uprightMeaning: {
      keywords: ['asociación', 'atracción mutua', 'conexión', 'unión', 'compromiso'],
      description: 'El Dos de Copas celebra la conexión entre dos personas. Puede representar el inicio de una relación romántica, una amistad profunda o una alianza de negocios basada en el respeto y la admiración mutua.',
    },
    reversedMeaning: {
      keywords: ['desequilibrio', 'comunicación rota', 'separación', 'conflicto'],
      description: 'Invertido, el Dos de Copas señala desequilibrio en una relación o ruptura en la comunicación. Puede indicar el final de una asociación, sentimientos no correspondidos o una relación que perdió su equilibrio.',
    },
  },
  {
    id: 'cups-3',
    name: 'Three of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 3,
    imageUrl: `${IMG}/cu03.jpg`,
    uprightMeaning: {
      keywords: ['celebración', 'amistad', 'alegría compartida', 'creatividad', 'comunidad'],
      description: 'El Tres de Copas es una celebración con amigos. Representa la alegría de compartir logros, la risa, las reuniones sociales y el apoyo mutuo entre personas que se quieren. Un brindis por la vida.',
    },
    reversedMeaning: {
      keywords: ['exceso', 'chismes', 'aislamiento', 'terceros en discordia', 'triángulos'],
      description: 'Invertido, el Tres de Copas puede señalar excesos en celebraciones, chismes entre amigos o la presencia de una tercera persona que complica una relación de dos. También puede indicar aislamiento social.',
    },
  },
  {
    id: 'cups-4',
    name: 'Four of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 4,
    imageUrl: `${IMG}/cu04.jpg`,
    uprightMeaning: {
      keywords: ['contemplación', 'apatía', 'introspección', 'oportunidad ignorada', 'meditación'],
      description: 'El Cuatro de Copas muestra a alguien tan absorto en sus pensamientos que no ve la nueva copa que se le ofrece. Representa la apatía, el aburrimiento existencial y la tendencia a ignorar las oportunidades por estar encerrado en uno mismo.',
    },
    reversedMeaning: {
      keywords: ['salir del ensimismamiento', 'nueva perspectiva', 'abrirse a oportunidades'],
      description: 'Invertido, el Cuatro de Copas señala que finalmente estás saliendo de tu ensimismamiento y abriendo los ojos a las oportunidades que te esperan. Es el momento de decir sí a lo que el universo te ofrece.',
    },
  },
  {
    id: 'cups-5',
    name: 'Five of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 5,
    imageUrl: `${IMG}/cu05.jpg`,
    uprightMeaning: {
      keywords: ['pérdida', 'dolor', 'decepción', 'arrepentimiento', 'duelo'],
      description: 'El Cinco de Copas muestra a alguien llorando sobre lo que perdió, sin ver las dos copas que quedaron en pie. Habla del duelo, la decepción y la tendencia a enfocarse en lo que ya no está en lugar de valorar lo que permanece.',
    },
    reversedMeaning: {
      keywords: ['aceptación', 'superación', 'perdonar', 'mirar hacia adelante'],
      description: 'Invertido, el Cinco de Copas indica que estás comenzando a superar una pérdida y a ver las oportunidades que aún existen. Es el momento de perdonar, aceptar lo que no puede cambiarse y dirigir la mirada hacia adelante.',
    },
  },
  {
    id: 'cups-6',
    name: 'Six of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 6,
    imageUrl: `${IMG}/cu06.jpg`,
    uprightMeaning: {
      keywords: ['nostalgia', 'recuerdos', 'inocencia', 'reunión', 'pasado'],
      description: 'El Seis de Copas es una carta de nostalgia y recuerdos dulces. Puede anunciar el reencuentro con alguien del pasado, una vuelta a lugares queridos o simplemente la ternura de recordar tiempos más simples e inocentes.',
    },
    reversedMeaning: {
      keywords: ['vivir en el pasado', 'ingenuidad', 'dependencia del ayer', 'soltar el pasado'],
      description: 'Invertido, el Seis de Copas advierte sobre vivir demasiado anclado en el pasado o en la nostalgia. La ingenuidad puede volverse un obstáculo para enfrentar la realidad presente. Es hora de honrar el pasado y seguir adelante.',
    },
  },
  {
    id: 'cups-7',
    name: 'Seven of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 7,
    imageUrl: `${IMG}/cu07.jpg`,
    uprightMeaning: {
      keywords: ['ilusión', 'fantasía', 'demasiadas opciones', 'ensoñación', 'deseos'],
      description: 'El Siete de Copas muestra muchas opciones tentadoras flotando en las nubes. Puede representar la riqueza de la imaginación, pero también la confusión que viene de tener demasiadas opciones o de vivir en la fantasía en lugar de actuar.',
    },
    reversedMeaning: {
      keywords: ['claridad', 'enfoque', 'alineación', 'tomar decisiones', 'realismo'],
      description: 'Invertido, el Siete de Copas indica que las ilusiones se están disipando y estás comenzando a ver con claridad qué es lo que realmente quieres. Es momento de elegir un camino y comprometerte con él.',
    },
  },
  {
    id: 'cups-8',
    name: 'Eight of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 8,
    imageUrl: `${IMG}/cu08.jpg`,
    uprightMeaning: {
      keywords: ['abandono', 'alejarse', 'búsqueda de significado', 'decepción', 'soltar'],
      description: 'El Ocho de Copas muestra a alguien que da la espalda a lo que una vez valoró para buscar algo más profundo. Representa la valentía de dejar ir situaciones que ya no nutren el alma, aunque eso implique comenzar desde cero.',
    },
    reversedMeaning: {
      keywords: ['volver atrás', 'miedo a soltar', 'conformismo', 'estancamiento'],
      description: 'Invertido, el Ocho de Copas puede indicar que estás considerando volver a una situación que dejaste, o que el miedo al cambio te mantiene en algo que ya no te satisface. ¿Estás seguro de que lo que dejaste merece tu regreso?',
    },
  },
  {
    id: 'cups-9',
    name: 'Nine of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 9,
    imageUrl: `${IMG}/cu09.jpg`,
    uprightMeaning: {
      keywords: ['satisfacción', 'deseos cumplidos', 'bienestar', 'lujo', 'gratitud'],
      description: 'El Nueve de Copas es conocida como "la carta del deseo": lo que pediste se concederá. Representa la satisfacción emocional, el contentamiento genuino y la sensación de tenerlo todo lo que el corazón necesita.',
    },
    reversedMeaning: {
      keywords: ['insatisfacción', 'materialismo', 'indulgencia excesiva', 'vacío interno'],
      description: 'Invertido, el Nueve de Copas advierte que los deseos cumplidos no traen la felicidad esperada. Puede indicar materialismo, exceso de indulgencia o la búsqueda de satisfacción en lugares equivocados.',
    },
  },
  {
    id: 'cups-10',
    name: 'Ten of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 10,
    imageUrl: `${IMG}/cu10.jpg`,
    uprightMeaning: {
      keywords: ['felicidad familiar', 'armonía', 'amor duradero', 'plenitud', 'hogar'],
      description: 'El Diez de Copas pinta el cuadro de la felicidad completa: familia, amor, hogar y armonía. Representa el amor que persiste en el tiempo, la paz del hogar y la satisfacción profunda de tener relaciones significativas.',
    },
    reversedMeaning: {
      keywords: ['disfunción familiar', 'ruptura', 'desacuerdo', 'hogar conflictivo'],
      description: 'Invertido, el Diez de Copas señala tensiones en el hogar o en la familia, relaciones que no están alineadas o una visión de la felicidad que difiere entre los involucrados. La armonía familiar requiere trabajo.',
    },
  },
  {
    id: 'cups-11',
    name: 'Page of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 11,
    imageUrl: `${IMG}/cupa.jpg`,
    uprightMeaning: {
      keywords: ['intuición', 'mensajes creativos', 'curiosidad emocional', 'sensibilidad'],
      description: 'El Paje de Copas es sensible, imaginativo y abierto a lo mágico. Trae mensajes del corazón y del mundo emocional. Puede representar noticias relacionadas con el amor, el arte o la intuición en crecimiento.',
    },
    reversedMeaning: {
      keywords: ['inmadurez emocional', 'escapismo', 'dependencia emocional', 'fantasía'],
      description: 'Invertido, el Paje de Copas puede señalar inmadurez emocional, escapismo o dificultad para manejar las propias emociones. La sensibilidad sin madurez puede llevar a dramatismo o dependencia emocional.',
    },
  },
  {
    id: 'cups-12',
    name: 'Knight of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 12,
    imageUrl: `${IMG}/cukn.jpg`,
    uprightMeaning: {
      keywords: ['romance', 'encanto', 'imaginación', 'propuestas', 'seguir el corazón'],
      description: 'El Caballero de Copas es el romántico del tarot: llega con propuestas del corazón, invitaciones y mensajes de amor. Representa seguir los impulsos del alma, la creatividad y el encanto que viene de vivir desde las emociones.',
    },
    reversedMeaning: {
      keywords: ['poco realista', 'celos', 'cambios de humor', 'promesas vacías'],
      description: 'Invertido, el Caballero de Copas puede ser poco confiable: hace promesas que no cumple, sus cambios de humor son impredecibles y su romanticismo puede esconder falta de compromiso real.',
    },
  },
  {
    id: 'cups-13',
    name: 'Queen of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 13,
    imageUrl: `${IMG}/cuqu.jpg`,
    uprightMeaning: {
      keywords: ['compasión', 'intuición', 'cuidado', 'empatía', 'sabiduría emocional'],
      description: 'La Reina de Copas es la maestra de las emociones: compasiva, intuitiva y profundamente empática. Tiene la capacidad de contener el dolor ajeno sin perder su propio centro. Representa la sanación a través del amor y la comprensión.',
    },
    reversedMeaning: {
      keywords: ['martirio', 'inseguridad', 'manipulación emocional', 'dependencia'],
      description: 'Invertida, la Reina de Copas puede volverse mártir emocional, usando su sensibilidad para manipular o buscar lástima. También puede indicar que su compasión se ha convertido en codependencia o inseguridad.',
    },
  },
  {
    id: 'cups-14',
    name: 'King of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 14,
    imageUrl: `${IMG}/cuki.jpg`,
    uprightMeaning: {
      keywords: ['equilibrio emocional', 'compasión', 'diplomacia', 'madurez', 'sabiduría'],
      description: 'El Rey de Copas domina sus emociones con maestría. Es empático pero no se deja llevar por los vaivenes emocionales. Representa la capacidad de ser profundamente sensible mientras se mantiene estable y equilibrado.',
    },
    reversedMeaning: {
      keywords: ['manipulación', 'control emocional', 'frialdad', 'inestabilidad oculta'],
      description: 'Invertido, el Rey de Copas puede usar su inteligencia emocional para manipular a otros, o puede estar reprimiendo sus emociones hasta el punto de la frialdad. Su equilibrio aparente puede esconder una tormenta interior.',
    },
  },

  // =====================
  // ESPADAS (SWORDS) — Aire
  // =====================
  {
    id: 'swords-1',
    name: 'Ace of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 1,
    imageUrl: `${IMG}/swac.jpg`,
    uprightMeaning: {
      keywords: ['claridad', 'verdad', 'breakthrough', 'nuevas ideas', 'poder mental'],
      description: 'El As de Espadas corta a través de la confusión con claridad absoluta. Representa un momento de verdad reveladora, una idea brillante que surge de repente o la capacidad de ver una situación con una claridad que antes no tenías.',
    },
    reversedMeaning: {
      keywords: ['confusión', 'caos mental', 'brutalidad', 'ideas bloqueadas', 'falta de claridad'],
      description: 'Invertido, el As de Espadas indica confusión mental, pensamiento desorganizado o una verdad que duele pero aún no puede ser procesada. La claridad tardará en llegar.',
    },
  },
  {
    id: 'swords-2',
    name: 'Two of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 2,
    imageUrl: `${IMG}/sw02.jpg`,
    uprightMeaning: {
      keywords: ['decisión difícil', 'indecisión', 'calma tensa', 'emociones bloqueadas'],
      description: 'El Dos de Espadas muestra a alguien con los ojos vendados, sosteniendo dos espadas en equilibrio. Representa una decisión difícil que se evita, emociones que se bloquean para no sentir la incomodidad de elegir.',
    },
    reversedMeaning: {
      keywords: ['sobrecarga de información', 'confusión', 'tomar decisiones', 'ver la verdad'],
      description: 'Invertido, el Dos de Espadas puede indicar que tienes demasiada información y no puedes procesarla, o que finalmente te estás quitando la venda y enfrentando la decisión que habías evitado.',
    },
  },
  {
    id: 'swords-3',
    name: 'Three of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 3,
    imageUrl: `${IMG}/sw03.jpg`,
    uprightMeaning: {
      keywords: ['corazón roto', 'dolor', 'tristeza', 'pérdida', 'traición'],
      description: 'El Tres de Espadas es la carta del dolor del corazón. Representa la tristeza genuina, el duelo emocional, la traición o una separación dolorosa. Aunque duele, este dolor también limpia y abre espacio para sanar.',
    },
    reversedMeaning: {
      keywords: ['recuperación', 'perdonar', 'soltar el dolor', 'sanación', 'seguir adelante'],
      description: 'Invertido, el Tres de Espadas señala que el peor momento ya pasó y que la sanación está en proceso. Es tiempo de perdonar, liberar la tristeza y comenzar a sanar las heridas emocionales.',
    },
  },
  {
    id: 'swords-4',
    name: 'Four of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 4,
    imageUrl: `${IMG}/sw04.jpg`,
    uprightMeaning: {
      keywords: ['descanso', 'recuperación', 'pausa', 'contemplación', 'meditación'],
      description: 'El Cuatro de Espadas invita a un descanso reparador después de un período de lucha mental o emocional. Representa la necesidad de hacer pausa, recuperar fuerzas y permitirte la tranquilidad antes de volver al frente.',
    },
    reversedMeaning: {
      keywords: ['inquietud', 'burnout', 'vuelta a la acción', 'incapacidad de descansar'],
      description: 'Invertido, el Cuatro de Espadas puede indicar que estás incapaz de descansar aunque lo necesitas, o que el período de pausa ha terminado y es hora de volver a la acción con las pilas recargadas.',
    },
  },
  {
    id: 'swords-5',
    name: 'Five of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 5,
    imageUrl: `${IMG}/sw05.jpg`,
    uprightMeaning: {
      keywords: ['conflicto', 'ganar a cualquier costo', 'humillación', 'tensión', 'derrota'],
      description: 'El Cinco de Espadas muestra una victoria pírrica: se ganó la batalla pero a un costo muy alto. Habla de conflictos donde nadie realmente gana, de actitudes de "ganar a cualquier costo" que destruyen relaciones.',
    },
    reversedMeaning: {
      keywords: ['reconciliación', 'hacer las paces', 'perdón', 'fin del conflicto'],
      description: 'Invertido, el Cinco de Espadas indica el fin de un conflicto y la posibilidad de reconciliación. Es momento de poner el ego a un lado y buscar la paz, aunque eso signifique reconocer errores propios.',
    },
  },
  {
    id: 'swords-6',
    name: 'Six of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 6,
    imageUrl: `${IMG}/sw06.jpg`,
    uprightMeaning: {
      keywords: ['transición', 'alejarse', 'calma después de la tormenta', 'viaje', 'progreso'],
      description: 'El Seis de Espadas muestra un viaje hacia aguas más calmas. Representa alejarse de situaciones difíciles, transiciones necesarias y el alivio que viene cuando comienzas a dejar atrás lo que te pesaba.',
    },
    reversedMeaning: {
      keywords: ['resistencia al cambio', 'estancado en el pasado', 'aguas turbulentas', 'regreso'],
      description: 'Invertido, el Seis de Espadas señala resistencia a un cambio necesario o que las cosas no se están calmando como esperabas. También puede indicar un regreso a una situación que ya habías dejado atrás.',
    },
  },
  {
    id: 'swords-7',
    name: 'Seven of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 7,
    imageUrl: `${IMG}/sw07.jpg`,
    uprightMeaning: {
      keywords: ['traición', 'engaño', 'estrategia', 'sigilo', 'evasión'],
      description: 'El Siete de Espadas muestra a alguien escapando con espadas robadas. Puede representar traición, engaño, o la necesidad de ser estratégico y reservado en una situación donde mostrar todas las cartas sería un error.',
    },
    reversedMeaning: {
      keywords: ['confesar', 'reconsiderar la táctica', 'honestidad', 'consecuencias del engaño'],
      description: 'Invertido, el Siete de Espadas puede indicar que una mentira está saliendo a la luz, o que alguien (quizás tú) está reconsiderando una táctica deshonesta y eligiendo la transparencia.',
    },
  },
  {
    id: 'swords-8',
    name: 'Eight of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 8,
    imageUrl: `${IMG}/sw08.jpg`,
    uprightMeaning: {
      keywords: ['restricción', 'prisión mental', 'victimismo', 'creencias limitantes', 'miedo'],
      description: 'El Ocho de Espadas muestra a alguien atado y vendado, rodeado de espadas pero con un camino libre a sus pies. La prisión es mental: las creencias limitantes y el miedo son los únicos grilletes reales.',
    },
    reversedMeaning: {
      keywords: ['liberación', 'empoderamiento', 'soltar creencias limitantes', 'ver claridad'],
      description: 'Invertido, el Ocho de Espadas anuncia la liberación de las cadenas mentales. Estás comenzando a ver que tienes más poder del que creías y que los obstáculos que te atenazaban eran, en gran medida, ilusiones.',
    },
  },
  {
    id: 'swords-9',
    name: 'Nine of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 9,
    imageUrl: `${IMG}/sw09.jpg`,
    uprightMeaning: {
      keywords: ['ansiedad', 'pesadillas', 'preocupación', 'miedo', 'desesperación'],
      description: 'El Nueve de Espadas es la carta de las noches sin dormir, la ansiedad y los pensamientos que se vuelven monstruos en la oscuridad. Representa el sufrimiento mental y la tendencia a catastrofizar los problemas.',
    },
    reversedMeaning: {
      keywords: ['liberación del miedo', 'superar la ansiedad', 'esperanza', 'pedir ayuda'],
      description: 'Invertido, el Nueve de Espadas señala que la ansiedad está comenzando a ceder o que finalmente estás buscando ayuda para manejar el sufrimiento mental. La peor parte ya pasó.',
    },
  },
  {
    id: 'swords-10',
    name: 'Ten of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 10,
    imageUrl: `${IMG}/sw10.jpg`,
    uprightMeaning: {
      keywords: ['finales dolorosos', 'traición', 'derrota', 'colapso', 'punto de quiebre'],
      description: 'El Diez de Espadas representa el punto más bajo, el colapso total de algo que ya no podía sostenerse. Aunque la imagen es impactante, marca el final absoluto de un ciclo doloroso y el comienzo inevitable de uno nuevo.',
    },
    reversedMeaning: {
      keywords: ['recuperación', 'regeneración', 'el peor momento pasó', 'nueva perspectiva'],
      description: 'Invertido, el Diez de Espadas indica que lo peor ya ocurrió y que la recuperación está comenzando. No puede empeorar más: solo puede mejorar. La regeneración es posible después de tocar fondo.',
    },
  },
  {
    id: 'swords-11',
    name: 'Page of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 11,
    imageUrl: `${IMG}/swpa.jpg`,
    uprightMeaning: {
      keywords: ['curiosidad', 'búsqueda de verdad', 'comunicación', 'alerta', 'vigilancia'],
      description: 'El Paje de Espadas es curioso, alerta y ansioso por aprender. Tiene una mente ágil y un amor por la verdad. Puede traer noticias o representar a alguien joven con un intelecto agudo y mucho por decir.',
    },
    reversedMeaning: {
      keywords: ['engaño', 'chismes', 'todo hablar y no actuar', 'prisa sin reflexión'],
      description: 'Invertido, el Paje de Espadas puede ser chismoso, mentiroso o alguien que habla mucho pero actúa poco. Su mente aguda se usa para manipular en lugar de buscar la verdad.',
    },
  },
  {
    id: 'swords-12',
    name: 'Knight of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 12,
    imageUrl: `${IMG}/swkn.jpg`,
    uprightMeaning: {
      keywords: ['ambición', 'determinación', 'acción directa', 'coraje', 'velocidad'],
      description: 'El Caballero de Espadas va a toda velocidad hacia su objetivo sin mirar a los lados. Representa la determinación feroz, el pensamiento rápido y la acción directa. Su fuerza está en la claridad de propósito.',
    },
    reversedMeaning: {
      keywords: ['impulsividad', 'irresponsabilidad', 'impaciencia', 'agresividad'],
      description: 'Invertido, el Caballero de Espadas actúa sin pensar y deja un rastro de caos. Su velocidad se convierte en impulsividad peligrosa y su determinación en terquedad agresiva que atropella a quienes lo rodean.',
    },
  },
  {
    id: 'swords-13',
    name: 'Queen of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 13,
    imageUrl: `${IMG}/swqu.jpg`,
    uprightMeaning: {
      keywords: ['pensamiento claro', 'independencia', 'franqueza', 'inteligencia', 'decisión'],
      description: 'La Reina de Espadas es directa, inteligente e independiente. Dice la verdad aunque duela, toma decisiones sin dejarse llevar por las emociones y ha ganado su sabiduría a través de experiencias difíciles.',
    },
    reversedMeaning: {
      keywords: ['demasiado crítica', 'frialdad', 'amargura', 'manipulación intelectual'],
      description: 'Invertida, la Reina de Espadas puede volverse cruel con sus palabras, usar su inteligencia para herir o estar tan herida que su dureza se ha convertido en amargura. Su franqueza se vuelve crueldad.',
    },
  },
  {
    id: 'swords-14',
    name: 'King of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 14,
    imageUrl: `${IMG}/swki.jpg`,
    uprightMeaning: {
      keywords: ['autoridad intelectual', 'claridad mental', 'verdad', 'liderazgo analítico'],
      description: 'El Rey de Espadas es el maestro del pensamiento claro y la toma de decisiones objetiva. Representa la autoridad que viene del intelecto, la capacidad de cortar lo superfluo y llegar a la verdad esencial.',
    },
    reversedMeaning: {
      keywords: ['manipulación', 'tiranía', 'crueldad mental', 'uso del poder para dañar'],
      description: 'Invertido, el Rey de Espadas usa su intelecto para manipular, controlar y dominar. Su claridad mental se convierte en frialdad calculadora, y puede ejercer su autoridad de maneras abusivas.',
    },
  },

  // =====================
  // OROS (PENTACLES) — Tierra
  // =====================
  {
    id: 'pentacles-1',
    name: 'Ace of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 1,
    imageUrl: `${IMG}/peac.jpg`,
    uprightMeaning: {
      keywords: ['oportunidad financiera', 'abundancia', 'manifestación', 'nuevo inicio material'],
      description: 'El As de Oros trae consigo una nueva oportunidad material: un trabajo, un proyecto, una inversión o un recurso que puede transformar tu situación. Es la semilla de la prosperidad concreta, lista para ser plantada.',
    },
    reversedMeaning: {
      keywords: ['oportunidad perdida', 'falta de planificación', 'avaricia', 'inseguridad financiera'],
      description: 'Invertido, el As de Oros indica que una oportunidad material está siendo ignorada o mal gestionada. Puede señalar inseguridad financiera, falta de planificación o codicia que ahuyenta la abundancia.',
    },
  },
  {
    id: 'pentacles-2',
    name: 'Two of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 2,
    imageUrl: `${IMG}/pe02.jpg`,
    uprightMeaning: {
      keywords: ['malabarismo', 'adaptabilidad', 'equilibrio', 'múltiples prioridades'],
      description: 'El Dos de Oros muestra la habilidad de mantener múltiples pelotas en el aire sin que ninguna caiga. Representa la adaptabilidad, el equilibrio entre diferentes responsabilidades y la flexibilidad ante los cambios.',
    },
    reversedMeaning: {
      keywords: ['sobrecarga', 'desorganización', 'descuido financiero', 'desequilibrio'],
      description: 'Invertido, el Dos de Oros indica que el malabarismo se está volviendo insostenible. Estás descuidando áreas importantes de tu vida o finanzas por intentar hacer demasiado al mismo tiempo.',
    },
  },
  {
    id: 'pentacles-3',
    name: 'Three of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 3,
    imageUrl: `${IMG}/pe03.jpg`,
    uprightMeaning: {
      keywords: ['trabajo en equipo', 'aprendizaje', 'colaboración', 'maestría', 'esfuerzo'],
      description: 'El Tres de Oros representa la colaboración efectiva y el reconocimiento del trabajo bien hecho. Habla de aprender de otros, de construir algo duradero en equipo y de la satisfacción que viene de desarrollar una habilidad con dedicación.',
    },
    reversedMeaning: {
      keywords: ['falta de trabajo en equipo', 'desorganización', 'mediocridad', 'conflictos laborales'],
      description: 'Invertido, el Tres de Oros señala falta de coordinación en el equipo, trabajo mal organizado o negativa a recibir retroalimentación. El resultado sufre por la falta de colaboración genuina.',
    },
  },
  {
    id: 'pentacles-4',
    name: 'Four of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 4,
    imageUrl: `${IMG}/pe04.jpg`,
    uprightMeaning: {
      keywords: ['seguridad', 'ahorro', 'conservación', 'control', 'estabilidad'],
      description: 'El Cuatro de Oros muestra a alguien aferrándose a sus recursos con cuidado. Puede representar la prudencia financiera y la seguridad, pero también el miedo a perder lo que se tiene, que puede llevar a la avaricia.',
    },
    reversedMeaning: {
      keywords: ['avaricia', 'materialismo', 'despilfarro', 'inseguridad financiera', 'soltar'],
      description: 'Invertido, el Cuatro de Oros puede indicar avaricia extrema o, por el contrario, despilfarro y falta de control financiero. También puede señalar el aprendizaje de soltar el control material para vivir más plenamente.',
    },
  },
  {
    id: 'pentacles-5',
    name: 'Five of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 5,
    imageUrl: `${IMG}/pe05.jpg`,
    uprightMeaning: {
      keywords: ['dificultad económica', 'pérdida', 'pobreza', 'exclusión', 'inseguridad'],
      description: 'El Cinco de Oros muestra a dos personas en la intemperie, sin ver que hay un refugio a su alcance. Habla de dificultades materiales, pérdidas económicas o la sensación de exclusión y abandono.',
    },
    reversedMeaning: {
      keywords: ['recuperación', 'ayuda llegando', 'superación', 'pobreza espiritual'],
      description: 'Invertido, el Cinco de Oros puede indicar el final de una racha difícil económica o emocional. La ayuda está llegando. También puede señalar pobreza espiritual: tener bienes materiales pero sentirse vacío por dentro.',
    },
  },
  {
    id: 'pentacles-6',
    name: 'Six of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 6,
    imageUrl: `${IMG}/pe06.jpg`,
    uprightMeaning: {
      keywords: ['generosidad', 'caridad', 'dar y recibir', 'equilibrio de recursos', 'apoyo'],
      description: 'El Seis de Oros habla del equilibrio entre dar y recibir. Representa la generosidad, el apoyo financiero o emocional que fluye libremente, y la capacidad de compartir lo que se tiene con quienes lo necesitan.',
    },
    reversedMeaning: {
      keywords: ['strings attached', 'tacañería', 'dinero con condiciones', 'dependencia'],
      description: 'Invertido, el Seis de Oros puede indicar que la ayuda viene con condiciones ocultas, o que hay un desequilibrio de poder en las relaciones de ayuda. También puede señalar falta de generosidad o dependencia económica.',
    },
  },
  {
    id: 'pentacles-7',
    name: 'Seven of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 7,
    imageUrl: `${IMG}/pe07.jpg`,
    uprightMeaning: {
      keywords: ['inversión a largo plazo', 'perseverancia', 'resultados lentos', 'evaluación'],
      description: 'El Siete de Oros muestra a alguien que ha trabajado duro y hace una pausa para evaluar su cosecha. Representa la inversión a largo plazo, la paciencia con los procesos lentos y la capacidad de planificar con visión de futuro.',
    },
    reversedMeaning: {
      keywords: ['impaciencia', 'falta de visión a largo plazo', 'trabajar sin resultado', 'dispersión'],
      description: 'Invertido, el Siete de Oros indica impaciencia con los procesos lentos o trabajo que no está dando los frutos esperados. Puede ser momento de replantear la estrategia o aceptar que algunos proyectos no son viables.',
    },
  },
  {
    id: 'pentacles-8',
    name: 'Eight of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 8,
    imageUrl: `${IMG}/pe08.jpg`,
    uprightMeaning: {
      keywords: ['maestría', 'trabajo dedicado', 'aprendizaje', 'habilidad', 'compromiso'],
      description: 'El Ocho de Oros es la carta del artesano dedicado: alguien que perfecciona su oficio con paciencia y esmero. Representa el trabajo duro, la práctica constante y el compromiso con la excelencia en lo que se hace.',
    },
    reversedMeaning: {
      keywords: ['perfeccionismo paralizante', 'falta de ambición', 'trabajo sin propósito', 'monotonía'],
      description: 'Invertido, el Ocho de Oros puede indicar perfeccionismo que paraliza en lugar de mejorar, o trabajo mecánico y sin sentido que drena la energía. También puede señalar falta de dedicación o dispersión del esfuerzo.',
    },
  },
  {
    id: 'pentacles-9',
    name: 'Nine of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 9,
    imageUrl: `${IMG}/pe09.jpg`,
    uprightMeaning: {
      keywords: ['abundancia', 'independencia', 'lujo merecido', 'autosuficiencia', 'logro'],
      description: 'El Nueve de Oros representa la abundancia que se ha ganado con esfuerzo propio. Habla de independencia financiera, del lujo de poder disfrutar los frutos de tu trabajo y de la satisfacción de haberte construido a ti mismo.',
    },
    reversedMeaning: {
      keywords: ['dependencia financiera', 'trabajo en exceso', 'autovaloración', 'apariencias'],
      description: 'Invertido, el Nueve de Oros puede señalar dependencia de otros para el sustento, trabajo excesivo que no deja espacio para disfrutar, o la apariencia de abundancia que esconde inseguridad.',
    },
  },
  {
    id: 'pentacles-10',
    name: 'Ten of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 10,
    imageUrl: `${IMG}/pe10.jpg`,
    uprightMeaning: {
      keywords: ['riqueza', 'herencia', 'legado familiar', 'seguridad duradera', 'generaciones'],
      description: 'El Diez de Oros representa la culminación del éxito material y familiar. Es el legado que se construye para las generaciones futuras: riqueza, estabilidad, tradición y el deseo de que lo que construiste perdure.',
    },
    reversedMeaning: {
      keywords: ['pérdida financiera', 'conflictos familiares', 'herencia en disputa', 'fin de linaje'],
      description: 'Invertido, el Diez de Oros puede indicar conflictos familiares por dinero, pérdidas materiales significativas o la ruptura de una tradición familiar. El legado que se construyó puede estar en riesgo.',
    },
  },
  {
    id: 'pentacles-11',
    name: 'Page of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 11,
    imageUrl: `${IMG}/pepa.jpg`,
    uprightMeaning: {
      keywords: ['manifestación', 'oportunidad de aprendizaje', 'nuevo inicio práctico', 'estudio'],
      description: 'El Paje de Oros está enfocado en aprender y desarrollar habilidades prácticas. Representa el inicio de un estudio, trabajo o proyecto concreto, con la actitud del estudiante diligente que sabe que el éxito viene con la práctica.',
    },
    reversedMeaning: {
      keywords: ['falta de progreso', 'procrastinación', 'estudio sin aplicación', 'impracticidad'],
      description: 'Invertido, el Paje de Oros puede indicar procrastinación, falta de progreso en un aprendizaje o incapacidad de aplicar el conocimiento de manera práctica. Las ideas no se concretan en acciones.',
    },
  },
  {
    id: 'pentacles-12',
    name: 'Knight of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 12,
    imageUrl: `${IMG}/pekn.jpg`,
    uprightMeaning: {
      keywords: ['metodología', 'confiabilidad', 'trabajo duro', 'conservador', 'rutina'],
      description: 'El Caballero de Oros avanza lentamente pero con certeza. Representa la confiabilidad, la disciplina y la capacidad de llevar las cosas hasta el final con paciencia y método. No es glamoroso, pero siempre cumple.',
    },
    reversedMeaning: {
      keywords: ['obstinación', 'aburrimiento', 'perfeccionismo', 'estancamiento por exceso de cautela'],
      description: 'Invertido, el Caballero de Oros puede volverse tan cauteloso que nunca avanza, o tan metódico que pierde la flexibilidad necesaria ante los cambios. Su confiabilidad puede convertirse en rigidez frustrante.',
    },
  },
  {
    id: 'pentacles-13',
    name: 'Queen of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 13,
    imageUrl: `${IMG}/pequ.jpg`,
    uprightMeaning: {
      keywords: ['nutrición', 'equilibrio trabajo-vida', 'practicidad', 'abundancia', 'cuidado'],
      description: 'La Reina de Oros sabe cómo crear abundancia y confort para quienes la rodean. Representa el equilibrio entre el éxito profesional y el cuidado del hogar, la conexión con la naturaleza y la capacidad de nutrir sin perder de vista los objetivos.',
    },
    reversedMeaning: {
      keywords: ['dependencia', 'sobreprotección', 'descuido del hogar', 'inseguridad material'],
      description: 'Invertida, la Reina de Oros puede volverse sobreprotectora o crear dependencia en quienes cuida. También puede estar descuidando su propio bienestar o experimentando inseguridad financiera.',
    },
  },
  {
    id: 'pentacles-14',
    name: 'King of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 14,
    imageUrl: `${IMG}/peki.jpg`,
    uprightMeaning: {
      keywords: ['prosperidad', 'liderazgo financiero', 'seguridad', 'disciplina', 'generosidad'],
      description: 'El Rey de Oros es el símbolo del éxito material bien gestionado. Representa la prosperidad construida con esfuerzo y sabiduría, la generosidad del que tiene y comparte, y el liderazgo práctico que inspira confianza.',
    },
    reversedMeaning: {
      keywords: ['codicia', 'materialismo extremo', 'posesividad', 'corrupción', 'mal manejo'],
      description: 'Invertido, el Rey de Oros puede volverse codicioso, controlador con el dinero o usar sus recursos para manipular a otros. Su seguridad material puede convertirse en una fortaleza que lo aisla del verdadero significado de la vida.',
    },
  },
];

export const majorArcana = cards.filter(c => c.arcana === 'major');
export const minorArcana = cards.filter(c => c.arcana === 'minor');
export const wands = cards.filter(c => c.suit === 'wands');
export const cups = cards.filter(c => c.suit === 'cups');
export const swords = cards.filter(c => c.suit === 'swords');
export const pentacles = cards.filter(c => c.suit === 'pentacles');
