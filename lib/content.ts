// Contenu éditorial du site — tout est centralisé ici pour faciliter les mises à jour.

export const SITE = {
  name: "Delphine Eminet",
  role: "Réflexologue",
  baseline: "Du bien-être… mais pas que. Du mieux-être.",
  // Lien cal.com (à remplacer par le vrai identifiant de la cliente).
  calLink: "delphine-eminet",
  email: "contact@delphine-reflexologie.fr",
  phone: "",
};

export const CABINETS = [
  {
    ville: "Saint-Jorioz",
    detail: "Cabinet principal",
    horaires: "Sur rendez-vous, du lundi au samedi",
  },
  {
    ville: "Annecy",
    detail: "Permanence",
    horaires: "Le mardi après-midi uniquement",
  },
];

// Bulles autour de la photo : le parcours de Delphine
export type Bubble = {
  id: string;
  label: string;
  title: string;
  body: string[];
};

export const PARCOURS: Bubble[] = [
  {
    id: "sage-femme",
    label: "Sage-femme",
    title: "Sage-femme de formation initiale",
    body: [
      "Diplômée de la faculté de médecine de Dijon en 2002, j'ai d'abord exercé une année dans un hôpital de niveau 1 en Savoie.",
      "Je me suis ensuite installée en libéral à Saint-Jorioz jusqu'en 2011.",
      "De ce métier, je garde l'écoute, la rigueur du soin et une attention toute particulière aux femmes, à chaque étape de leur vie.",
    ],
  },
  {
    id: "petite-enfance",
    label: "Petite enfance",
    title: "Au plus près des tout-petits et de leur famille",
    body: [
      "J'ai construit un projet autour des enfants de 0 à 3 ans et de leur famille.",
      "Pendant des années, j'ai accompagné les premiers mois de vie, les liens d'attachement et le quotidien des familles.",
    ],
  },
  {
    id: "montessori",
    label: "Montessori",
    title: "Pédagogie Montessori & petite enfance",
    body: [
      "J'ai monté une MAM (Maison d'Assistants Maternels) en pédagogie Montessori à Pringy jusqu'en 2020, avec une double casquette : administrative et pédagogique auprès des enfants.",
      "J'ai ensuite poursuivi comme formatrice en pédagogie Montessori auprès des professionnels de la petite enfance.",
    ],
  },
  {
    id: "reflexologue",
    label: "Réflexologue",
    title: "La réflexologie, une évidence",
    body: [
      "En 2024, après la naissance de mon 3ᵉ enfant et un retour dans l'univers des crèches, je décide de me former comme réflexologue.",
      "La réflexologie m'est apparue comme une évidence, la résultante de mes différentes vies professionnelles.",
      "J'ai quitté le SOIN pour le PRENDRE SOIN, à l'étage du bien-être : une prise en charge holistique, non invasive, non médicamenteuse, bienveillante et préventive, en partenariat avec le monde médical.",
    ],
  },
  {
    id: "maman",
    label: "Maman",
    title: "Maman de 3 enfants, dont 2 adolescents",
    body: [
      "Je vis au quotidien la sensibilité et les bouleversements émotionnels de l'adolescence.",
      "C'est un public particulièrement perméable et réceptif à la réflexologie, et un sujet qui me tient à cœur.",
    ],
  },
];

// Les 3 mots à mettre en valeur
export const KEYWORDS: Bubble[] = [
  {
    id: "stress",
    label: "Stress",
    title: "Le stress",
    body: [
      "La réflexologie est une pratique manuelle de relaxation qui accompagne et soulage les maux physiques et émotionnels causés par le stress.",
      "Le réflexologue est un praticien de la gestion du stress : en stimulant les zones réflexes des pieds et des mains, j'aide votre système nerveux autonome à retrouver son équilibre.",
      "Changements, examens, pression du quotidien… le stress s'installe. Mon rôle est de relâcher les tensions et de vous aider à mieux le vivre.",
    ],
  },
  {
    id: "anxiete",
    label: "Anxiété",
    title: "L'anxiété",
    body: [
      "L'anxiété est souvent la conséquence d'un stress prolongé et aggravé.",
      "Au fil des séances, le système nerveux se ré-équilibre, les tensions se relâchent et l'esprit s'apaise.",
      "C'est la fréquence et la régularité des séances qui renforcent durablement les effets positifs.",
    ],
  },
  {
    id: "angoisse",
    label: "Angoisse",
    title: "Les angoisses",
    body: [
      "Les angoisses se nichent autant dans le corps que dans la tête : boule au ventre, gorge serrée, sommeil agité…",
      "La réflexologie agit « à distance » sur l'ensemble des systèmes du corps pour apaiser ces manifestations.",
      "Un espace d'écoute, sans jugement et sans chronomètre, où la parole est accueillie autant que le geste.",
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
        prix: "75 €",
        note: "séance plus courte, méthode spécifique",
      },
      {
        label: "Couples hypofertilité / PMA — séance pour 2",
        prix: "140 €",
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
    "Règlements acceptés : chèques & espèces.",
    "Toute annulation doit être signalée au moins 48h à l'avance.",
  ],
};
