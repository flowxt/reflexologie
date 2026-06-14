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

export const PARCOURS: Bubble[] = [
  {
    id: "sage-femme",
    label: "Sage-femme",
    title: "Sage-femme de formation initiale",
    body: [
      "Diplômée de la faculté de médecine de Dijon, j'ai commencé ma carrière dans un hôpital de niveau 1 en Savoie où j'étais polyvalente : des salles d'accouchements aux suites de couche, en passant par le service des grossesses à risque, les consultations et les accompagnements pré et post-chirurgicaux, dont les IVG.",
      "J'ai rapidement réalisé mon rêve : m'installer comme sage-femme libérale à Saint-Jorioz, où j'ai pu exercer librement mon art, de façon holistique, avec la prévention au 🩷 de mon accompagnement.",
      "Je me suis spécialisée dans le suivi des couples autour de la peur d'accoucher et de la gestion naturelle de la douleur (méthode Bonapace).",
      "J'étais également référente :",
      "• En rééducation périnéale non invasive (méthode CMP : comprendre et maîtriser son périnée), pour les femmes de tout âge.",
      "• En suivi d'allaitement, en partenariat avec l'association Allaiter en Haute-Savoie.",
      "• En approche alternative écologique, en expliquant l'utilisation pratique des couches lavables.",
      "• En maternage proximal, en partenariat avec l'association « Porter son enfant ».",
      "…mais pas que ✨",
      "Tous ces concepts semblent évidents ou normaux pour beaucoup de personnes en 2026, mais il y a 23 ans, c'était plutôt très précurseur 🌸",
      "Cette période de ma vie m'a permis de développer mon expertise médicale, l'écoute et la rigueur du soin ; de multiplier les formations et de découvrir des approches complémentaires pour m'ouvrir à d'autres possibles ; et de suivre des centaines de familles durant de nombreuses années. Être sage-femme libérale dans un village, ce sont des aventures humaines extraordinaires, où sont nées des amitiés fortes qui perdurent encore aujourd'hui.",
      "Cela m'a aussi donné envie de vivre une autre vie professionnelle… pour la découvrir, explorez la bulle Éducation.",
      "Delphine délie les maux… les mots. La réflexologie permet de dénouer les tensions physiques et émotionnelles… mais pas que ✨ : elle aide aussi à libérer les mots.",
    ],
  },
  {
    id: "education",
    label: "Éducation",
    title: "Au plus près des tout-petits et de leur famille",
    body: [
      "Accompagnée de personnes aux profils professionnels complémentaires, j'ai réalisé un autre rêve : construire un nid bienveillant pour les enfants de moins de 3 ans.",
      "Le Nid d'Onorés est né en janvier 2014, sous la forme d'une MAM (Maison d'Assistantes Maternelles) en pédagogie Montessori, à côté de l'École de la Vie, école Montessori à Pringy.",
      "Toute l'équipe s'est formée à la pédagogie Montessori : diplômes AMI de la naissance à 3 ans, à l'Institut Supérieur Maria Montessori (ISMM) de Nogent-sur-Marne.",
      "Nous avons créé ce lieu d'accueil associatif, respectueux et bienveillant, où nous avons accompagné des centaines d'enfants et leurs familles dans cet espace-temps parfois difficile qu'est la « petite enfance ».",
      "Un lieu magnifique où j'avais une double casquette : administrative et éducative.",
      "Des années de rêve auprès des enfants et de leurs familles. Des années de travail intense, à sans cesse se remettre en question et progresser.",
      "Nos maîtres spirituels, les enfants, ont fait grandir chacun des membres de notre équipe éducative. Nous, jardinières… semions et arrosions les graines. Nous récoltons encore… aujourd'hui.",
      "Notre Nid d'Onorés a fermé ses portes en cette drôle d'année 2020.",
      "Ce qui m'a menée vers une autre vie professionnelle, que vous découvrirez dans la bulle Formatrice.",
    ],
  },
  {
    id: "montessori",
    label: "Montessori",
    title: "Pédagogie Montessori",
    body: [
      "Maria Montessori, sa vie, son œuvre : une découverte, il y a 20 ans.",
      "Je me suis formée. Je l'ai expérimentée — et je l'expérimente encore au quotidien. Je l'ai adoptée et intégrée.",
      "L'autonomie, le respect du rythme de l'enfant, l'apprentissage indirect, la répétition, la concentration, la confiance en soi, l'intelligence du matériel… mais surtout les compétences illimitées et insoupçonnées des enfants.",
      "Le pouvoir des graines, la beauté des fleurs…",
    ],
  },
  {
    id: "formatrice",
    label: "Formatrice",
    title: "Formatrice en pédagogie Montessori",
    body: [
      "De cette extraordinaire expérience vécue au Nid d'Onorés a suivi une vie de formatrice « pratique », au sein de l'Institut Supérieur Maria Montessori (ISMM) à Nogent-sur-Marne, auprès des (futurs) professionnels de la petite enfance.",
      "Puis… la vie, ses surprises, ses rebondissements — et ma nouvelle vie professionnelle, que vous découvrirez dans la bulle Réflexologue.",
    ],
  },
  {
    id: "reflexologue",
    label: "Réflexologue",
    title: "La réflexologie, une évidence",
    body: [
      "La vie… ses hauts, ses bas… j'avance. Et tout à coup, l'évidence : la réflexologie revient dans ma vie — le boomerang que j'attrape au vol.",
      "Je me forme chez Serenity Formation, en neuro-réflexologie (Nadine Jedrey et Sergio Mesa).",
      "La réflexologie, comme la résultante de toutes mes vies professionnelles. Du SOIN au PRENDRE SOIN, étage bien-être.",
      "La réflexologie coche toutes MES cases :",
      "✅ Prise en charge holistique",
      "✅ Non invasive",
      "✅ Non médicamenteuse",
      "✅ Respectueuse",
      "✅ Bienveillante",
      "✅ Préventive",
      "✅ Complémentaire",
      "✅ En partenariat avec le monde médical",
      "« Ce ne sont pas les montagnes devant vous qui vous fatiguent, c'est le caillou dans votre chaussure. » — Muhammad Ali",
      "Stress, anxiété, angoisses : trouvez la force dans vos pieds.",
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
