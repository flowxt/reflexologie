// Contenu éditorial du site — tout est centralisé ici pour faciliter les mises à jour.

export const SITE = {
  name: "Delphine Eminet",
  role: "Réflexologue",
  baseline: "Du bien-être… mais pas que… Du mieux-être ✨",
  // Lien cal.com (à remplacer par le vrai identifiant de la cliente).
  calLink: "delphine-eminet",
  email: "d.eminet@hotmail.fr",
  phone: "06 73 40 85 45",
  // Numéro au format international (sans le 0, sans espaces) pour WhatsApp.
  whatsapp: "33673408545",
  instagram: "https://www.instagram.com/delphine.eminet.reflexologue/",
  facebook: "https://www.facebook.com/people/Delphine-Eminet/61583970764181/",
};

export const CABINETS = [
  {
    ville: "Saint-Jorioz",
    detail: "Cabinet principal",
    horaires: "Lundi, mercredi, jeudi, vendredi, samedi & dimanche",
  },
  {
    ville: "Annecy",
    detail: "Sur rendez-vous",
    horaires: "Les mardis",
  },
];

// Bulles autour de la photo : le parcours de Delphine
export type Bubble = {
  id: string;
  label: string;
  title: string;
  body: string[];
};

// Bloc de contenu : un paragraphe (string) ou une image (schéma).
export type ContentImage = {
  img: string;
  alt: string;
  width: number;
  height: number;
};
export type RichBubble = Omit<Bubble, "body"> & {
  body: (string | ContentImage)[];
};

export const PARCOURS: Bubble[] = [
  {
    id: "sage-femme",
    label: "Sage-femme",
    title: "Sage-femme de formation initiale",
    body: [
      "Diplômée de la faculté de médecine de Dijon, j'ai commencé ma carrière professionnelle dans un hôpital de niveau 1 en Savoie où j'étais polyvalente : des salles d'accouchements aux suites de couche, en passant par le service des grossesses à risque, les consultations et les accompagnements pré et post-chirurgicaux, dont les IVG.",
      "J'ai rapidement réalisé mon rêve : m'installer comme sage-femme LIBÉRALE à Saint-Jorioz, où j'ai pu exercer librement mon ART, de façon HOLISTIQUE, où la PRÉVENTION était le 🩷 de mon accompagnement.",
      "Je me suis spécialisée dans le suivi des couples autour de la PEUR d'accoucher et de la gestion naturelle de la DOULEUR (méthode Bonapace).",
      "J'étais référente :",
      "• En rééducation périnéale non invasive (méthode CMP : connaissance et maîtrise de son périnée), pour les femmes de tous les âges, à chaque étape de la vie.",
      "• En suivi d'allaitement, en partenariat avec l'association « Allaiter en Haute-Savoie ».",
      "• Dans l'utilisation pratique quotidienne des couches lavables.",
      "• En maternage proximal, en partenariat avec l'association « Porter son enfant ».",
      "…mais pas que ✨",
      "Tous ces concepts, toutes ces démarches semblent évidents ou normaux pour un grand nombre de personnes en 2026, mais il y a 23 ans, c'était plutôt très précurseur 🌸",
      "Cette période de pratique libérale m'a permis :",
      "• De développer mon expertise médicale, l'écoute, la rigueur du soin.",
      "• De développer un grand réseau avec les professionnels médicaux et tous les professionnels « alternatifs ».",
      "• De faire beaucoup de formations et de découvrir des approches complémentaires pour m'ouvrir à d'autres possibles.",
      "• De suivre des centaines de familles durant de nombreuses années : être sage-femme libérale dans un village m'a fait vivre des aventures humaines extraordinaires, où sont nées des amitiés fortes qui perdurent encore aujourd'hui.",
      "Cela m'a également donné envie de vivre une autre vie professionnelle… pour la découvrir, je vous laisse explorer la bulle Éducatrice.",
    ],
  },
  {
    id: "educatrice",
    label: "Éducatrice",
    title: "Au plus près des tout-petits et de leur famille",
    body: [
      "J'ai réalisé un RÊVE : celui de construire un nid BIENVEILLANT pour les enfants de moins de 3 ans.",
      "Le Nid d'Onorés est né en janvier 2014, grâce à une équipe motivée de professionnelles aux profils complémentaires.",
      "Nous nous sommes toutes formées à la pédagogie MONTESSORI : nous avons obtenu notre diplôme AMI de la naissance à 3 ans, à l'Institut Supérieur Maria Montessori (ISMM) de Nogent-sur-Marne.",
      "Notre MAM (Maison d'Assistantes Maternelles en pédagogie Montessori) s'est nichée à côté de « l'École de la Vie », école Montessori à Pringy.",
      "Nous avons créé ce lieu d'accueil associatif, respectueux et bienveillant, où nous avons accompagné des centaines d'enfants et leurs familles dans cet espace-temps parfois difficile qu'est la « petite enfance ».",
      "Un lieu magnifique où j'avais une double casquette : administrative et éducative.",
      "Des années de rêve auprès des enfants et de leurs familles. Des années de travail intense, à sans cesse se remettre en question et progresser.",
      "Nos maîtres spirituels, les enfants, ont fait grandir chacun des membres de notre équipe éducative. Nous, jardinières… semions et arrosions les graines. Nous récoltons encore… aujourd'hui.",
      "Notre Nid d'Onorés a fermé ses portes en cette drôle d'année 2020.",
      "Ce qui m'a menée à une autre vie professionnelle, que vous découvrirez dans la bulle Formatrice.",
    ],
  },
  {
    id: "montessori",
    label: "Montessori",
    title: "Pédagogie Montessori",
    body: [
      "Maria Montessori, sa vie, son œuvre : une découverte, un coup de foudre, il y a 20 ans.",
      "Je me suis formée. Je l'ai expérimentée — et je l'expérimente encore au quotidien. Je l'ai adoptée et intégrée.",
      "L'autonomie, le respect du rythme de l'enfant, l'apprentissage indirect, la répétition, la concentration, la confiance en soi, l'intelligence du matériel… mais pas que ✨ … les COMPÉTENCES ILLIMITÉES et INSOUPÇONNÉES des enfants.",
      "Le pouvoir des graines, la beauté des fleurs 🌺.",
    ],
  },
  {
    id: "formatrice",
    label: "Formatrice",
    title: "Formatrice en pédagogie Montessori",
    body: [
      "De cette extraordinaire expérience vécue au Nid d'Onorés, et accompagnée d'une de mes collègues — mon binôme depuis 12 ans — nous avons créé l'entité « Adélie des Mots ».",
      "Formatrices « pratique » pour l'Institut Supérieur Maria Montessori (ISMM) à Nogent-sur-Marne, nous intervenions auprès des (futurs) professionnels de la petite enfance, ainsi qu'auprès des familles à domicile.",
      "Puis… la vie, ses surprises, ses rebondissements… L'ADAPTABILITÉ est devenue une de mes principales qualités !",
      "Je suis devenue RÉFLEXOLOGUE.",
    ],
  },
  {
    id: "reflexologue",
    label: "Réflexologue",
    title: "La réflexologie, une évidence",
    body: [
      "J'avance sur les chemins surprenants de la vie.",
      "Et tout à coup, l'ÉVIDENCE : la réflexologie revient dans ma vie… le boomerang que je décide d'attraper au vol et de ne plus lâcher.",
      "Je me forme chez Serenity Formation, en neuro-réflexologie ® (Nadine Jedrey et Sergio Mesa).",
      "La réflexologie, comme la RÉSULTANTE de toutes mes vies professionnelles. Du SOIN au PRENDRE SOIN, étage BIEN-ÊTRE.",
      "La réflexologie coche toutes MES cases :",
      "✅ Prise en charge holistique de tous les êtres humains",
      "✅ Pratique manuelle par le toucher",
      "✅ Non invasive",
      "✅ Non médicamenteuse",
      "✅ Respectueuse",
      "✅ Bienveillante",
      "✅ Préventive",
      "✅ Complémentaire",
      "✅ En partenariat avec le monde médical",
      "✅ Des consultations particulières où l'on a le temps",
      "Je peux RETROUVER tous les « publics » que je connais : femmes, femmes enceintes, nouveau-nés, enfants. Et m'ouvrir au monde masculin, à la vieillesse et aux personnes en situation de handicap.",
      "Quelle RICHESSE !",
    ],
  },
];

// Les 3 mots à mettre en valeur
export const KEYWORDS: RichBubble[] = [
  {
    id: "stress",
    label: "Stress",
    title: "Le stress",
    body: [
      "Le stress est une réaction physique et psychologique à des pressions ou des défis perçus dans l'environnement.",
      "Il se manifeste lorsque l'individu ressent que les demandes de son environnement dépassent ses capacités ou ses ressources pour y faire face.",
      "Le stress peut être déclenché par :",
      "• Des événements ponctuels, comme un accident, un examen ou une présentation importante.",
      "• Des situations prolongées, telles que des difficultés professionnelles ou familiales.",
      "Biologiquement, le stress provoque la libération d'hormones comme l'adrénaline et le cortisol. Ces hormones préparent le corps à réagir par la réaction de « lutte ou fuite », augmentant la fréquence cardiaque, la tension musculaire et le niveau d'alerte — ce qui est bénéfique, car cela fournit la motivation et l'énergie pour relever des défis.",
      "En revanche, le stress chronique ou excessif peut avoir des effets néfastes sur la santé physique et mentale. Il peut contribuer à des troubles tels que l'anxiété ou la dépression, et impacter tous les systèmes de l'organisme : symptômes physiques, déséquilibres, maladies ou fragilisation de la santé mentale.",
      "La gestion du stress implique souvent différentes stratégies complémentaires :",
      "• L'exercice physique",
      "• La relaxation",
      "• Les techniques de gestion du temps",
      "• Le soutien social",
      "• La thérapie comportementale",
      "• La médication",
      "La réflexologie s'inscrit totalement dans ces diverses propositions, en tant que pratique manuelle de relaxation.",
      "La neuro-réflexologie ®, à laquelle je suis formée, agit directement sur le système nerveux central afin de rééquilibrer les différents systèmes — donc les conséquences physiques et émotionnelles.",
      "Je suis spécialiste de la gestion du stress, et ma technique de travail est tout à fait compatible avec d'autres approches.",
    ],
  },
  {
    id: "anxiete",
    label: "Anxiété",
    title: "L'anxiété",
    body: [
      "L'anxiété est une émotion caractérisée par des sentiments d'inquiétude, de nervosité et de peur, souvent en anticipation d'un événement futur incertain ou en réaction à une situation perçue comme menaçante.",
      "Bien que l'anxiété soit une réaction naturelle et parfois utile face à des défis ou des dangers — elle stimule l'attention et la préparation —, elle peut devenir problématique lorsqu'elle est excessive, persistante et disproportionnée par rapport à la situation déclenchante.",
      "Dans ces cas, l'anxiété peut entraver le fonctionnement quotidien, affectant les relations sociales, le travail, les études et la qualité de vie globale.",
      "Les troubles anxieux constituent un groupe de conditions psychiatriques où l'anxiété devient chronique et envahissante : trouble d'anxiété généralisée, trouble panique, phobies, trouble d'anxiété sociale, trouble de stress post-traumatique, entre autres.",
      "Ce sont parmi les problèmes de santé mentale les plus courants, et ils peuvent s'accompagner de symptômes physiques tels que palpitations, sueurs, tremblements et fatigue.",
      "La prise en charge de l'anxiété et des troubles anxieux peut inclure :",
      "• Des techniques de relaxation",
      "• Des stratégies de gestion du stress",
      "• Des thérapies comportementales et cognitives",
      "• Des médicaments",
      "Ces différentes approches permettent aux personnes affectées de retrouver un équilibre et de mener une vie plus sereine.",
      "La réflexologie s'inscrit totalement dans ces diverses propositions, en tant que pratique manuelle de relaxation.",
      "La neuro-réflexologie ®, à laquelle je suis formée, agit directement sur le système nerveux central afin de rééquilibrer les différents systèmes — donc les conséquences physiques et émotionnelles.",
      "Je suis spécialiste de la gestion du stress et de l'anxiété, et ma technique de travail est tout à fait compatible avec d'autres approches.",
    ],
  },
  {
    id: "angoisse",
    label: "Angoisse",
    title: "Les angoisses",
    body: [
      "Une attaque de panique, communément appelée crise d'angoisse, est une manifestation aiguë d'anxiété qui peut survenir sans déclencheur apparent.",
      "Il s'agit d'un épisode soudain de détresse, de peur ou d'inconfort intense, qui s'accompagne de symptômes physiques et psychologiques.",
      "La crise d'angoisse est généralement associée à d'autres problèmes psychologiques comme :",
      "• Un syndrome dépressif",
      "• Des phobies",
      "• Des troubles anxieux généralisés",
      "• Des problèmes de dépendance",
      "• Des troubles du comportement alimentaire",
      "Une personne peut vivre l'expérience de la panique une seule fois dans sa vie, tandis que d'autres la vivront de façon récurrente. On parle alors d'un trouble panique, qui se caractérise par des attaques de panique à répétition.",
      "Les personnes qui en souffrent développent, en l'absence de prise en charge, une inquiétude excessive à l'idée de futures attaques, et changent leurs comportements afin d'éviter les situations qui pourraient déclencher une crise.",
      "Les symptômes de la crise d'angoisse peuvent être regroupés en deux familles : les symptômes physiques et les symptômes psychiques.",
      {
        img: "/photo/symptome-physique.png",
        alt: "Schéma des symptômes physiques de la crise d'angoisse",
        width: 601,
        height: 678,
      },
      {
        img: "/photo/symptome-emotionnel.png",
        alt: "Schéma des symptômes psychiques de la crise d'angoisse",
        width: 604,
        height: 663,
      },
      "Stratégies de gestion au quotidien",
      "La crise d'angoisse survenant de façon inopinée, il n'existe pas de réelle méthode de prévention. Néanmoins, pour mieux la gérer au quotidien, certaines mesures peuvent être adoptées :",
      "• Se relaxer au travers d'exercices comme la respiration profonde, la méditation, le yoga…",
      "• Faire de l'exercice physique régulier.",
      "• Bien suivre son traitement et ne pas l'interrompre sans avis médical.",
      "• Éviter de consommer des substances pouvant déclencher la crise (alcool, drogues…).",
      "• Adopter une bonne hygiène de vie : routine de sommeil, alimentation équilibrée…",
      "• Rechercher du soutien auprès de thérapeutes et d'associations regroupant des personnes qui souffrent aussi de crises d'angoisse.",
      "La réflexologie s'inscrit totalement dans ces diverses propositions, en tant que pratique manuelle de relaxation.",
      "La neuro-réflexologie ®, à laquelle je suis formée, agit directement sur le système nerveux central afin de rééquilibrer les différents systèmes — donc les conséquences physiques et émotionnelles.",
      "Je suis spécialiste de la gestion du stress, de l'anxiété et de l'angoisse, et ma technique de travail est tout à fait compatible avec d'autres approches.",
    ],
  },
];

// Publics & spécialisations
export const PUBLICS: Bubble[] = [
  {
    id: "grossesse",
    label: "Grossesse & femmes enceintes",
    title: "Grossesse, accouchement & suites de couche",
    body: [
      "Sage-femme de formation et spécialisée en néo-réflexologie, j'accompagne les femmes à chaque étape : grossesse, préparation à l'accouchement, suites de couche, allaitement.",
      "Une parenthèse de douceur pour soulager les petits maux et accueillir sereinement bébé.",
    ],
  },
  {
    id: "nourrissons",
    label: "Nouveau-nés & nourrissons",
    title: "Nouveau-nés, nourrissons & jeunes enfants",
    body: [
      "Spécialisation en néo-réflexologie (nouveau-nés, nourrissons, enfants).",
      "Des gestes tout en douceur pour accompagner le sommeil, la digestion et le bien-être des tout-petits.",
    ],
  },
  {
    id: "adolescents",
    label: "Adolescents & jeunes adultes",
    title: "Adolescents & jeunes adultes",
    body: [
      "Un accompagnement spécifique « Stress » pour les adolescents et jeunes adultes : changements multiples, relations familiales et amicales, périodes d'examens (collège, lycée, permis, concours, partiels), premières amours…",
      "La réflexologie comme base, pour traverser ces années sensibles avec plus de sérénité.",
    ],
  },
  {
    id: "neuro-atypiques",
    label: "Personnes neuro-atypiques",
    title: "Personnes neuro-atypiques",
    body: [
      "Enfants, adolescents et adultes neuro-atypiques.",
      "Un cadre rassurant, un rythme respectueux et une approche sensorielle adaptée à chacun.",
    ],
  },
  {
    id: "endometriose",
    label: "Endométriose",
    title: "Suivi endométriose",
    body: [
      "Spécialisation endométriose. La méthode de travail est spécifique : le temps de séance est plus court car l'approche diffère.",
      "Un accompagnement complémentaire à votre parcours de santé pour mieux vivre la douleur au quotidien.",
    ],
  },
  {
    id: "pma",
    label: "Couples & PMA",
    title: "Couples en parcours d'hypofertilité / PMA",
    body: [
      "J'accompagne les couples qui rencontrent des difficultés à avoir un enfant, ou en parcours de Procréation Médicalement Assistée (PMA).",
      "Une séance « pour deux » pour traverser ce chemin avec plus de douceur.",
    ],
  },
  {
    id: "femmes",
    label: "Toutes les étapes des femmes",
    title: "Les femmes, à chaque étape de leur vie",
    body: [
      "De l'adolescence à la (péri)ménopause, j'accompagne les femmes dans tous les moments de leur vie.",
      "Un savoir-faire nourri de mon parcours de sage-femme.",
    ],
  },
  {
    id: "tout-public",
    label: "Tout public — 0 à 110 ans",
    title: "De 0 à 110 ans, tout public",
    body: [
      "Hommes, femmes, adolescents, enfants, nourrissons : la réflexologie s'adresse à tous.",
      "Séances individuelles, en couple ou en petits ateliers spécifiques.",
    ],
  },
];

export const CABINET = {
  intro:
    "Un cocon lumineux et apaisant, pensé pour que vous vous sentiez bien dès le premier instant.",
  description: [
    "À Saint-Jorioz, je vous reçois dans un espace calme et chaleureux : lumière douce, musique, table de massage confortable ou fauteuil adapté.",
    "Un coin de jeux accueille les enfants, et tout est pensé pour les tout-petits comme pour les plus grands. Vous êtes ici dans une bulle, le temps d'une parenthèse pour vous.",
  ],
  atouts: [
    "Ambiance douce & cosy",
    "Espace dédié aux enfants",
    "Accueil de 0 à 110 ans",
    "Confidentialité & écoute",
  ],
  photos: [
    {
      src: "/photo/cabinet3.jpeg",
      alt: "La salle de soin avec la table de massage",
      caption: "L'espace de soin",
      featured: true,
    },
    {
      src: "/photo/cabinet1.jpeg",
      alt: "L'espace d'accueil du cabinet",
      caption: "L'accueil",
    },
    {
      src: "/photo/attente-enfant.jpeg",
      alt: "Le coin jeux pour les enfants",
      caption: "Le coin des enfants",
    },
    {
      src: "/photo/cabinet2.jpeg",
      alt: "Le bureau et les rangements du cabinet",
      caption: "Un cocon lumineux",
    },
  ],
};

export const REFLEXO_INTRO = [
  "La réflexologie est une pratique manuelle qui accompagne et soulage les maux physiques et émotionnels causés par le stress, l'anxiété et les angoisses.",
  "Je stimule manuellement des zones et des points réflexes situés au niveau des pieds (réflexologie plantaire) et des mains (réflexologie palmaire). Je peux ainsi agir « à distance » sur les différents systèmes de l'organisme.",
  "Je suis formée en neuro-réflexologie° (méthode originale Nadine Jedrey et Sergio Mesa, marque déposée à l'INPI), une technique qui « informe » le système nerveux autonome pour agir de façon rapide et ciblée sur les organes.",
];

export const BIENFAITS = [
  "Aide le système nerveux autonome à rétablir l'équilibre du corps",
  "Améliore la gestion du stress et relâche les tensions",
  "Améliore la circulation sanguine et lymphatique",
  "Participe à la gestion de la douleur",
  "Accompagne et soulage les troubles de tous les systèmes",
];

export const SYSTEMES = [
  "Nerveux",
  "Musculaire",
  "Articulaire",
  "Cardio-circulatoire",
  "Respiratoire",
  "Lymphatique",
  "Immunitaire",
  "Digestif",
  "Endocrinien",
  "Reproducteur",
  "Urinaire",
];

export const CADRE = {
  fait: [
    "Soulage des symptômes, des troubles et des inconforts",
    "Prend soin de l'être humain dans sa globalité, physique et émotionnelle",
    "Accompagne en partenariat avec le monde médical",
  ],
  faitPas: [
    "Ne guérit pas les maladies",
    "N'établit pas de diagnostic",
    "Ne fait pas de prescription",
    "Ne modifie pas un traitement médical",
    "Ne se substitue pas à un suivi médical",
  ],
};

// La fée — le concept
export const FAIRY = {
  title: "Un brin de magie… mais pas de baguette",
  intro:
    "Je ne suis pas magicienne ! La réflexologie n'est pas un coup de baguette magique.",
  body: [
    "Comme la fée laisse une traînée d'étoiles derrière elle, les bienfaits s'installent au fil du temps, séance après séance.",
    "C'est la fréquence et la régularité qui ancrent les effets positifs, en profondeur et durablement.",
    "Une première séance fait souvent beaucoup de bien ; ce sont les suivantes qui transforment le bien-être en mieux-être.",
  ],
  signature: "Soulage, écoute, apaise, libère, délie… les maux et les mots.",
};

// ---------------------------------------------------------------------------
// TARIFS
// ---------------------------------------------------------------------------

export type TarifLigne = { label: string; prix: string; note?: string };

export const TARIFS = {
  intro: "Tout public, de 0 à 110 ans.",
  plantaire: {
    titre: "Réflexologie plantaire",
    icone: "🦶",
    premiere: {
      titre: "1ʳᵉ séance « Faisons connaissance » — 1h30",
      prix: "75 €",
      detail: [
        "20 min de questionnaire détaillé (offert) pour cibler vos besoins",
        "60 min de pratique manuelle sur les pieds",
        "10 min de retour réciproque (offert)",
      ],
    },
    suivantes: [
      { label: "Séances suivantes (65 min)", prix: "75 €" },
      {
        label: "Option +15 min de massage (pieds → genoux)",
        prix: "+ 15 €",
        note: "soit 1 €/min — séance de 80 min",
      },
    ] as TarifLigne[],
    abonnements: [
      { label: "3 séances · −10 %", prix: "202,50 €", note: "67,50 €/séance" },
      {
        label: "5 séances · −20 %",
        prix: "300 €",
        note: "une séance offerte — 60 €/séance",
      },
      {
        label: "4 saisons · −15 %",
        prix: "255 €",
        note: "une séance à chaque changement de saison — 63,75 €/séance",
      },
      {
        label: "10 séances · −25 %",
        prix: "562,50 €",
        note: "2 séances offertes + 1 séance palmaire offerte — 56,25 €/séance",
      },
    ] as TarifLigne[],
  },
  palmaire: {
    titre: "Réflexologie palmaire",
    icone: "✋",
    premiere: {
      titre: "1ʳᵉ séance « Faisons connaissance » — 1h",
      prix: "45 €",
      detail: [
        "20 min de questionnaire détaillé (offert)",
        "30 min de pratique manuelle sur les mains",
        "10 min de retour réciproque (offert)",
      ],
    },
    suivantes: [
      { label: "Séances suivantes (35 min)", prix: "45 €" },
      {
        label: "Option +10 min de massage (mains → coudes)",
        prix: "+ 10 €",
        note: "soit 1 €/min — séance de 45 min",
      },
    ] as TarifLigne[],
    abonnements: [
      { label: "3 séances · −10 %", prix: "121,50 €", note: "40,50 €/séance" },
      {
        label: "5 séances · −20 %",
        prix: "180 €",
        note: "une séance offerte — 36 €/séance",
      },
      {
        label: "4 saisons · −15 %",
        prix: "153 €",
        note: "38,25 €/séance",
      },
      {
        label: "10 séances · −25 %",
        prix: "337,50 €",
        note: "+ 1 séance plantaire offerte — 33,75 €/séance",
      },
    ] as TarifLigne[],
  },
  casParticuliers: {
    titre: "Cas particuliers",
    icone: "🩷",
    plantaire: [
      { label: "Nourrissons jusqu'à 3 ans", prix: "25 €" },
      { label: "De 4 à 10 ans", prix: "35 €" },
      { label: "Collégiens (11 à 14 ans)", prix: "45 €" },
      {
        label: "Lycéens & études sup. (15 à 24 ans)",
        prix: "55 €",
        note: "sur justificatif",
      },
      {
        label: "Suivi endométriose",
        prix: "70 €",
        note: "méthode spécifique — cure ou accompagnement obligatoire",
      },
      {
        label: "Couples hypofertilité / PMA — séance pour 2",
        prix: "130 €",
        note: "soit 65 € par personne",
      },
    ] as TarifLigne[],
    palmaire: [
      { label: "Nourrissons jusqu'à 3 ans", prix: "10 €" },
      { label: "De 4 à 10 ans", prix: "15 €" },
      { label: "Collégiens (11 à 14 ans)", prix: "20 €" },
      {
        label: "Lycéens & études sup. (15 à 24 ans)",
        prix: "30 €",
        note: "sur justificatif",
      },
    ] as TarifLigne[],
    note: "Le système d'abonnement (−10 % / −20 % / −15 % / −25 %) s'applique aussi à tous les cas particuliers. Les options de massage supplémentaire (1 €/min) restent possibles.",
  },
  infos: [
    "La 1ʳᵉ séance « Faisons connaissance » n'est pas intégrable aux abonnements.",
    "Les abonnements sont dus en totalité avant le démarrage des séances.",
    "Rapprochez-vous de votre mutuelle : la réflexologie est parfois prise en charge. Une facture vous est délivrée comme justificatif.",
    "Devis personnalisé pour toute demande particulière.",
    "Règlements acceptés : carte bancaire (CB), chèques & espèces.",
    "Toute annulation doit être signalée au moins 48h à l'avance.",
  ],
};
