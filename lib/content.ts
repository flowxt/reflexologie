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
  // Fiches d'avis Google
  googleAnnecy: "https://share.google/6I991ctW5AqPrHPKf",
  googleStJorioz: "https://share.google/2hNwXw7r6unq1bJ4F",
};

export type Avis = {
  nom: string;
  date: string;
  note: number;
  texte: string;
};

export const AVIS: Avis[] = [
  {
    nom: "Tatiana Fleury",
    date: "mai 2026",
    note: 5,
    texte:
      "Première séance de réflexologie avec Delphine il y a deux semaines, et je suis conquise ! Elle a travaillé sur le stress et la qualité du sommeil avec une grande douceur et un vrai savoir-faire. Les deux nuits qui ont suivi, j'ai dormi comme un bébé — c'est concret et rapide ! Une praticienne attentionnée, à l'écoute, et qui connaît bien la réflexologie. Une adresse à recommander sans hésiter.",
  },
  {
    nom: "Nathalie Jacquier",
    date: "mai 2026",
    note: 5,
    texte:
      "Je suis venue consulter Delphine pour une problématique liée au sommeil et plus globalement la période de la périménopause. Dès la première séance j'ai ressenti une baisse du stress et un apaisement général, mais c'est à partir de la 3ᵉ séance que les bienfaits sur la qualité de mon sommeil se sont fait ressentir. J'ai apprécié son parcours médical : on sent la précision de la connaissance du corps. À l'écoute et bienveillante, elle termine chaque séance par un massage des pieds. Rien que pour ce moment, j'en redemande !",
  },
  {
    nom: "Marion Fournier",
    date: "juin 2026",
    note: 5,
    texte:
      "Delphine permet de vivre un vrai moment pour soi. Un temps de détente et de douceur. Sa lecture du corps est juste et pertinente. Son accompagnement peut réellement améliorer des dysfonctionnements.",
  },
  {
    nom: "Christine Coppel",
    date: "juin 2026",
    note: 5,
    texte:
      "Une séance avec Delphine est un grand moment de bien-être. On se sent totalement détendue. Delphine est très à l'écoute, très douce et de bon conseil.",
  },
  {
    nom: "Martin LM",
    date: "février 2026",
    note: 5,
    texte:
      "J'ai eu la chance de découvrir la pratique de Delphine en réflexologie plantaire. Je suis sortie de la séance toute détendue et sereine. Ce soin est à la fois doux et puissant. Delphine prend le temps d'expliquer sa démarche, de cerner nos besoins ; elle est très à l'écoute, douce et précise. Elle nous accueille dans un environnement agréable et confortable, le tout pour finir par un massage détente qui m'a laissé une impression de « j'en re-veux » ! Merci infiniment Delphine, je vous recommande.",
  },
  {
    nom: "Perrine Ferraud",
    date: "février 2026",
    note: 5,
    texte:
      "Delphine est très à l'écoute et adapte ses séances au plus près de nos besoins. La séance est douce et efficace à la fois, et se termine par un massage enveloppant des pieds qui invite à lâcher prise. Elle a su me conseiller sur des pratiques complémentaires pour prolonger le soin. Merci pour cette belle parenthèse ressourçante.",
  },
  {
    nom: "Géraldine Bontemps",
    date: "Local Guide",
    note: 5,
    texte:
      "Praticienne très à l'écoute, douce. Séances efficaces pour moi.",
  },
];

export const CABINETS = [
  {
    ville: "Annecy",
    detail: "Sur rendez-vous",
    horaires: "Les mardis",
  },
  {
    ville: "Saint-Jorioz",
    detail: "Sur rendez-vous",
    horaires: "Lundi, mercredi, samedi & dimanche",
  },
  {
    ville: "À votre domicile",
    detail: "Déplacement possible — forfait A/R 5 €",
    horaires: "Tous les jours, week-end compris, sur rendez-vous",
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
    label: "Pédagogie Montessori",
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
      "Sage-femme de formation et spécialisée en néo-réflexologie, j'accompagne les femmes et les couples dans chacune des étapes de leur parentalité.",
      "Lors de la grossesse, les maux courants peuvent être soulagés ; les peurs et appréhensions de chacun des parents sont entendues et apaisées.",
      "Mon expertise autour de la douleur liée à l'enfantement me permet de délier les maux… les mots, pour aller toucher du doigt les ressources de chacun.",
      "Nous pouvons commencer la réflexologie à partir du 4ᵉ mois (début du 2ᵉ trimestre) et ce jusqu'au jour de la naissance.",
      "Un suivi plus fréquent dans le dernier mois permettra de détendre le corps et l'esprit… aussi bien pour le père que pour la mère, et ainsi vous donner les meilleures chances d'arriver le jour J dans des conditions idéales.",
      "La période de l'après-naissance — les suites de couche — peut être déstabilisante émotionnellement et fatiguante, tant pour la mère que pour le père… ainsi que pour le nouveau-né qui sort de sa bulle protectrice.",
      "L'allaitement et ses possibles dysfonctionnements de démarrage, douleurs, peuvent être soutenus par la réflexologie.",
      "Une parenthèse de douceur… mais pas que ✨ : un vrai soutien d'experte tout au long de ces bouleversements physiques, émotionnels, personnels et familiaux.",
      "⚠️ Je ne me substitue pas au suivi médical ni à l'accompagnement proposé en préparation à la naissance par les sages-femmes.",
    ],
  },
  {
    id: "nourrissons",
    label: "Nouveau-nés & nourrissons",
    title: "Nouveau-nés, nourrissons & jeunes enfants",
    body: [
      "Je suis spécialisée en néo-réflexologie pour accompagner les enfants dès la naissance.",
      "Mes métiers de sage-femme et d'éducatrice me permettent de « changer de lunettes » pour prendre en charge les enfants de façon globale.",
      "Je peux compléter mon accompagnement par des conseils pratiques autour de la parentalité.",
      "Concrètement, je peux recevoir les nouveau-nés juste après la naissance, que celle-ci ait été simple ou compliquée, dans le but de détendre le bébé.",
      "Dans ce contexte, la famille peut également avoir besoin de lâcher émotionnellement.",
      "⚠️ Toujours en lien avec les diagnostics posés par le médecin généraliste ou le pédiatre.",
      "Indications possibles :",
      "• Reflux gastro-œsophagien",
      "• Difficultés de sommeil",
      "• Problème de transit : constipation notamment",
      "• Prévention des allergies",
      "• Contexte ORL : poumons et/ou sphère ORL encombrés",
      "• Énurésie / encoprésie",
      "• Énervements, tensions",
      "• Stress, anxiété",
      "• Accompagnement émotionnel des enfants neuro-atypiques",
    ],
  },
  {
    id: "adolescents",
    label: "Adolescents & jeunes adultes",
    title: "Adolescents & jeunes adultes",
    body: [
      "Cette période est marquée par de multiples changements physiques, accompagnés de grands 8 émotionnels.",
      "Les études — collège, lycée, université — sont une période éprouvante avec de grands RDV : interrogations, brevet, bac, partiels, BTS, classes préparatoires…",
      "S'y rajoutent :",
      "• L'examen du code et le permis de conduire",
      "• Les pressions familiales et sociales",
      "• La valse des hormones, les premiers émois amoureux, les premières séparations…",
      "La réflexologie, dans sa fonction détente et décharge émotionnelle, trouve sa place dans chacune de ces situations.",
      "L'accompagnement peut s'étendre aux membres de la famille, car vivre avec des adolescents n'est pas toujours évident !",
      "⚠️ Lors d'une séance, le jeune peut dormir, ne pas parler, écouter sa musique. Le portable sera cependant éteint pendant la séance. Contrairement à d'autres prises en charge, mon travail est efficace même s'il souhaite rester secret.",
      "Au-delà de l'aspect thérapeutique, montrer aux jeunes qu'il existe des prises en charge holistiques et non-invasives participe à leur éducation à la santé.",
    ],
  },
  {
    id: "eco-anxiete",
    label: "Éco-anxiété & burn-out militant",
    title: "Éco-anxiété & burn-out militant",
    body: [
      "Face à l'aggravation du changement climatique, certaines personnes développent une inquiétude désignée sous le terme d'éco-anxiété, définie comme :",
      "« Un état psychologique de détresse mentale et émotionnelle qu'un individu peut ressentir en réponse à la menace du changement climatique et aux problèmes environnementaux mondiaux. »",
      "Les 25-34 ans sont les plus touchés. Les questions environnementales s'ajoutent aux préoccupations liées aux études, à l'emploi, au logement ou à la vie familiale.",
      "L'éco-anxiété peut avoir des conséquences concrètes sur la vie quotidienne. Le problème apparaît lorsque cette inquiétude devient envahissante. Les manifestations sont d'ordre physique et émotionnel :",
      "• Attaques de panique",
      "• Angoisse",
      "• Insomnies, troubles du sommeil",
      "• Fatigue importante",
      "• Pensées obsessionnelles, envahissantes sur les catastrophes environnementales et la mort",
      "• Troubles alimentaires",
      "• Peur, tristesse",
      "• Impuissance, désespoir",
      "• Colère, frustration",
      "• Des difficultés à profiter de moments de détente",
      "• Un isolement progressif",
      "• Des épisodes dépressifs…",
      "Les profils « éco-soucieux » restent capables de maintenir leur équilibre. Dans les formes plus sévères, qualifiées d'« éco-effrayées » ou d'« éco-terrifiées », il faut alors se faire aider.",
      "Différents praticiens et médecins peuvent proposer des aides et des solutions. La réflexologie, pour la prise en charge du stress, de l'anxiété et de l'angoisse, est une carte à explorer.",
      "S'investir pour de grandes causes est tout à fait louable : attention cependant à ne pas s'épuiser dans son « combat ».",
      "⚠️ Attention au BURN-OUT MILITANT.",
      "La réflexologie comme ressource pour lâcher prise et se recharger physiquement et émotionnellement.",
    ],
  },
  {
    id: "sportifs",
    label: "Sportifs — Loisirs & compétitions",
    title: "Sportifs — Loisirs & compétitions",
    body: [
      "Chose incroyable : quand je travaille sur vos pieds, cela équivaut à un massage du bout des cheveux à la pointe des orteils, en passant par tous les systèmes et les organes.",
      "Pour les sportifs, j'ai accès à vos systèmes :",
      "• Musculaire",
      "• Articulaire",
      "• Lymphatique",
      "• Cardio-circulatoire",
      "• …et tous les autres évidemment.",
      "J'ai des PROTOCOLES SPÉCIFIQUES pour chacun de vos besoins.",
      "Préparation physique ? Préparation mentale ? Avant ou après l'effort ?",
      "Les deux, c'est l'idéal ! Quel que soit le sport que vous pratiquez.",
    ],
  },
  {
    id: "femmes",
    label: "Les femmes, à chaque étape",
    title: "Les femmes, à chaque étape de leur vie pubère",
    body: [
      "De l'arrivée des règles à la disparition de celles-ci.",
      "J'accompagne toutes les FEMMES, dans tous les moments de leur vie 🩷",
      "• La grossesse",
      "• Les troubles hormonaux",
      "• Les dérèglements",
      "• Les dysfonctionnements",
      "• Les symptômes impactants comme les bouffées de chaleur",
      "• Les troubles urinaires : fuites urinaires, rétentions urinaires, infections urinaires à répétition…",
      "• Les douleurs : dyspareunie, vaginisme…",
      "• Les peurs…",
      "Un savoir-faire nourri par ma vie de sage-femme.",
    ],
  },
  {
    id: "troubles-sexuels",
    label: "Troubles sexuels",
    title: "Les troubles sexuels — Masculins & Féminins",
    body: [
      "C'est un sujet difficile à aborder, qui touche pourtant bon nombre d'hommes et de femmes.",
      "Chez l'HOMME, par exemple :",
      "• Des dysfonctionnements érectiles, pouvant aller du priapisme jusqu'à l'impuissance",
      "• Des dysfonctionnements de l'éjaculation",
      "• L'anxiété sexuelle*",
      "Chez la FEMME, par exemple :",
      "• Des douleurs pendant les rapports : dyspareunie",
      "• Des spasmes du vagin avec pénétration difficile ou impossible : vaginisme",
      "• Une faible libido",
      "• Des troubles orgasmiques",
      "• L'anxiété sexuelle*",
      "* L'anxiété sexuelle est une peur irrationnelle de ne pas être à la hauteur dans un contexte sexuel : une forme de pression interne qui empêche de se détendre et de se connecter à l'expérience présente.",
      "J'ai des PROTOCOLES SPÉCIFIQUES adaptés à chaque besoin.",
      "L'accompagnement global permet d'accompagner le corps, le 🩷 et l'esprit.",
    ],
  },
  {
    id: "neuro-atypiques",
    label: "Neuro-atypiques — tout âge",
    title: "Profils neuro-atypiques — tout âge",
    body: [
      "Enfants, adolescents, adultes neuro-atypiques.",
      "Le parcours des personnes neuro-atypiques est souvent parsemé d'embûches : à la maison, à l'école, au travail, avec son lot de difficultés relationnelles, émotionnelles, physiques et psychologiques.",
      "Je reçois les principaux concernés, mais également leur entourage (famille, collègues, amis, professeurs) pour lâcher et souffler…",
      "Pour essayer d'insuffler de l'harmonie dedans et dehors ✨",
    ],
  },
  {
    id: "endometriose",
    label: "Endométriose",
    title: "Suivi endométriose",
    body: [
      "Je me suis spécialisée dans la technique de réflexologie spécifique du suivi de l'endométriose.",
      "Le protocole est très différent des séances classiques.",
      "Il est nécessaire de se voir :",
      "• 2 fois / mois (avant et après les menstruations, si vous les avez)",
      "• 3 mois d'affilée",
      "Tarif remisé.",
      "Un accompagnement complémentaire à votre parcours de santé pour mieux vivre la maladie au quotidien.",
    ],
  },
  {
    id: "pma",
    label: "Couples & PMA",
    title: "Couples en parcours d'hypofertilité / PMA",
    body: [
      "Si vous êtes en parcours de PMA, déjà très suivi sur le plan médical, vous pouvez venir me voir tous les deux en parallèle, en réflexologie.",
      "Parce que ces longs parcours sont éprouvants, j'agirai sur le versant émotionnel… pour libérer le corps, le 🩷 et l'esprit : pour délier les maux / les mots.",
      "La réflexologie ne se substitue pas au suivi médical et psychologique.",
      "Je propose des prix remisés pour les couples, ainsi que pour les abonnements à deux.",
      "Vous pouvez venir ensemble ou sur des temps distincts.",
      "La réflexologie vous permettra de traverser ces longs chemins avec plus de douceur.",
    ],
  },
  {
    id: "tout-public",
    label: "Tout public — 0 à 110 ans",
    title: "De 0 à 110 ans, tout public",
    body: [
      "• Hommes",
      "• Femmes",
      "• LGBTQIA+",
      "• Nouveau-nés",
      "• Bambins",
      "• Enfants",
      "• Adolescents",
      "• Personnes âgées",
      "• Personnes en fin de vie, pour accompagner en douceur les dernières années, mois, semaines ou jours.",
      "Les bienfaits du toucher ne sont plus à démontrer. Les scientifiques s'accordent sur le fait que c'est le moyen le plus efficace d'apaisement physique, psychologique et émotionnel… QUEL QUE SOIT L'ÂGE ET LE SEXE.",
    ],
  },
];

export type CabinetPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type CabinetLieu = {
  id: string;
  ville: string;
  sousTitre: string;
  description: string[];
  atouts: string[];
  featured: CabinetPhoto;
  vignettes: CabinetPhoto[];
  morePhotos: CabinetPhoto[];
};

export const CABINET = {
  intro:
    "Deux cocons lumineux et apaisants, pensés pour que vous vous sentiez bien dès le premier instant.",
  lieux: [
    {
      id: "cabinet-saint-jorioz",
      ville: "Saint-Jorioz",
      sousTitre: "Le cabinet principal — lundi, mercredi, vendredi & week-end",
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
      featured: {
        src: "/photo/cabinet3.jpeg",
        alt: "La salle de soin avec la table de massage à Saint-Jorioz",
        caption: "L'espace de soin",
      },
      vignettes: [
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
        {
          src: "/photo/pied-nourisson.jpeg",
          alt: "Les pieds d'un nourrisson prêts pour une séance",
          caption: "Les tout-petits",
        },
      ],
      morePhotos: [
        {
          src: "/photo/stjo-vu.jpg",
          alt: "La résidence qui abrite le cabinet de Saint-Jorioz",
          caption: "La résidence",
        },
        {
          src: "/photo/stjo-entree.jpg",
          alt: "L'entrée du cabinet de Saint-Jorioz, indiquée par une flèche",
          caption: "L'entrée",
        },
        {
          src: "/photo/stjoentree1.jpg",
          alt: "La vitrine du cabinet avec les silhouettes de femmes",
          caption: "La vitrine",
        },
        {
          src: "/photo/stjo-plan.jpeg",
          alt: "Le plan de la Résidence du Centre pour trouver le cabinet",
          caption: "Le plan d'accès",
        },
        {
          src: "/photo/identite-sagefemme.jpg",
          alt: "Les silhouettes de femmes enceintes, signe d'identité de Delphine",
          caption: "Mon signe d'identité 🩷",
        },
      ],
    },
    {
      id: "cabinet-annecy",
      ville: "Annecy",
      sousTitre: "Sur rendez-vous — les mardis",
      description: [
        "À Annecy, je vous accueille le mardi dans une salle douce et apaisante, aux teintes chaleureuses, en plein cœur de la ville.",
        "Le même accompagnement, la même écoute : seule l'adresse change.",
      ],
      atouts: [
        "En cœur de ville",
        "Salle chaleureuse",
        "Sur rendez-vous le mardi",
      ],
      featured: {
        src: "/photo/salle-annecy.jpg",
        alt: "La salle de soin d'Annecy avec sa table de massage",
        caption: "L'espace de soin",
      },
      vignettes: [
        {
          src: "/photo/annecy.jpeg",
          alt: "La rue et le quartier du cabinet d'Annecy",
          caption: "Le quartier",
        },
        {
          src: "/photo/annecy1.jpeg",
          alt: "L'entrée du cabinet d'Annecy sous les arcades",
          caption: "L'entrée",
        },
        {
          src: "/photo/annecy2.jpeg",
          alt: "L'immeuble qui abrite le cabinet d'Annecy",
          caption: "L'immeuble",
        },
      ],
      morePhotos: [
        {
          src: "/photo/annecy3.jpeg",
          alt: "Le passage couvert menant au cabinet d'Annecy",
          caption: "L'accès",
        },
      ],
    },
  ] as CabinetLieu[],
};

export const REFLEXO_INTRO =
  "La réflexologie est une pratique manuelle de relaxation basée sur la stimulation des zones et points réflexes situés au niveau des pieds (réflexologie plantaire) et des mains (réflexologie palmaire), sur lesquels sont projetés la plupart des organes de notre corps.";

export const REFLEXO_FONCTIONNEMENT = [
  "Je stimule manuellement des zones et des points réflexes, adaptés à vos besoins, au niveau des pieds ou des mains.",
  "Ainsi, j'agis à distance sur vos organes et les différents systèmes de votre organisme.",
  "Mon toucher est appuyé : j'utilise différentes techniques, et je termine toujours par un massage bien-être de vos pieds ou de vos mains.",
];

export const REFLEXO_BUT =
  "Maintenir l'équilibre de votre corps (HOMÉOSTASIE) ou, le cas échéant, le rééquilibrer.";

export const REFLEXO_CONTRE_INDICATIONS = [
  "Les contre-indications à la réflexologie sont rares, mais elles existent.",
  "Lors de votre prise de rendez-vous, je vous contacterai pour préparer notre séance en amont.",
];

export const NEURO_REFLEXO = [
  "Marque déposée à l'INPI n° 5N461K2. Méthode originale Nadine Jedrey / Sergio Mesa.",
  "Cette nouvelle méthode est basée sur le lien existant entre le système nerveux et certains de nos organes.",
  "À partir de la sollicitation des nerfs rachidiens, de la moelle épinière et l'action de l'hypothalamus au niveau du système nerveux périphérique, le réflexologue peut agir sur le délicat équilibre du système nerveux autonome et induire ainsi l'homéostasie.",
];

export const QUIZ_CATEGORY_ORDER = [
  "Stress, sommeil & émotions",
  "Corps & santé physique",
  "Grossesse, naissance & post-partum",
  "Enfants & bébés",
  "Intimité & fertilité",
  "Votre rapport aux soins",
] as const;

export const REFLEXO_QUIZ: {
  affirmation: string;
  match: boolean;
  category: (typeof QUIZ_CATEGORY_ORDER)[number];
}[] = [
  {
    affirmation: "Je me sens souvent stressé.e ou tendu.e",
    match: true,
    category: "Stress, sommeil & émotions",
  },
  {
    affirmation: "Je suis anxieux.se",
    match: true,
    category: "Stress, sommeil & émotions",
  },
  {
    affirmation: "Je fais des crises d'angoisse",
    match: true,
    category: "Stress, sommeil & émotions",
  },
  {
    affirmation:
      "Je suis quelqu'un.e de curieux.se et j'aime découvrir de nouvelles approches préventives.",
    match: true,
    category: "Votre rapport aux soins",
  },
  {
    affirmation: "Prévenir plutôt que guérir, telle est ma devise.",
    match: true,
    category: "Votre rapport aux soins",
  },
  {
    affirmation: "J'ai des troubles du sommeil",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation: "J'ai des troubles digestifs",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation: "J'ai des troubles urinaires",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation: "J'ai souvent des problèmes ORL et/ou pulmonaires",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation: "Je suis sujet.te aux allergies",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation: "Je suis en période de périménopause ou de ménopause.",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation: "Je souffre d'endométriose",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation:
      "J'ai des troubles circulatoires : jambes lourdes, mauvaise circulation sanguine, varices/varicosités.",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation: "J'ai l'impression d'avoir une mauvaise circulation lymphatique.",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation: "J'ai des œdèmes",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation: "Je suis enceinte et j'ai des maux liés à mon nouvel « état ».",
    match: true,
    category: "Grossesse, naissance & post-partum",
  },
  {
    affirmation:
      "Je suis sportif.ve et j'ai besoin d'aide pour préparer ma compétition ou pour accélérer la récupération après celle-ci.",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation:
      "Je suis enceinte et j'accouche bientôt : j'ai besoin d'un dernier coup de pouce pour me préparer physiquement et psychologiquement.",
    match: true,
    category: "Grossesse, naissance & post-partum",
  },
  {
    affirmation: "J'ai peur d'accoucher",
    match: true,
    category: "Grossesse, naissance & post-partum",
  },
  {
    affirmation:
      "Ma femme va bientôt accoucher, j'ai besoin d'aide pour gérer mes appréhensions de futur papa.",
    match: true,
    category: "Grossesse, naissance & post-partum",
  },
  {
    affirmation: "Je suis fatigué.e",
    match: true,
    category: "Stress, sommeil & émotions",
  },
  {
    affirmation:
      "J'allaite et ce n'est pas simple : fatigue, tension mammaire, lymphangite…",
    match: true,
    category: "Grossesse, naissance & post-partum",
  },
  {
    affirmation: "Je viens d'accoucher et je n'ai pas le moral.",
    match: true,
    category: "Grossesse, naissance & post-partum",
  },
  {
    affirmation: "Ma femme vient d'accoucher et je n'ai pas le moral.",
    match: true,
    category: "Grossesse, naissance & post-partum",
  },
  {
    affirmation: "Prendre soin de moi est important",
    match: true,
    category: "Votre rapport aux soins",
  },
  {
    affirmation: "Mon bébé a des troubles digestifs : reflux, constipation…",
    match: true,
    category: "Enfants & bébés",
  },
  {
    affirmation: "Mon enfant dort mal",
    match: true,
    category: "Enfants & bébés",
  },
  {
    affirmation: "Mon enfant est stressé",
    match: true,
    category: "Enfants & bébés",
  },
  {
    affirmation: "J'ai des troubles sexuels",
    match: true,
    category: "Intimité & fertilité",
  },
  {
    affirmation: "Mon.a conjoint.e a des troubles sexuels",
    match: true,
    category: "Intimité & fertilité",
  },
  {
    affirmation: "Nous n'arrivons pas à avoir d'enfants",
    match: true,
    category: "Intimité & fertilité",
  },
  {
    affirmation: "J'ai des douleurs articulaires",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation: "Je ne suis pas patient.e",
    match: false,
    category: "Votre rapport aux soins",
  },
  {
    affirmation: "Je recherche des résultats rapides",
    match: false,
    category: "Votre rapport aux soins",
  },
  {
    affirmation:
      "Je recherche des méthodes prises en charge par la Sécurité sociale.",
    match: false,
    category: "Votre rapport aux soins",
  },
  {
    affirmation:
      "Je ressens différents symptômes physiques malgré des analyses et examens médicaux normaux.",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation:
      "Je ressens différents symptômes émotionnels ou psychologiques malgré des analyses et des examens médicaux normaux.",
    match: true,
    category: "Stress, sommeil & émotions",
  },
  {
    affirmation:
      "Je dois passer des examens et j'ai peur, je suis stressé.e, angoissé.e.",
    match: true,
    category: "Stress, sommeil & émotions",
  },
  {
    affirmation:
      "Je traverse une période de changements difficiles : sur le plan personnel, professionnel, financier…",
    match: true,
    category: "Stress, sommeil & émotions",
  },
  {
    affirmation: "J'aime les approches douces, non invasives.",
    match: true,
    category: "Votre rapport aux soins",
  },
  {
    affirmation:
      "La prise en charge globale (holistique) de tout mon être est importante.",
    match: true,
    category: "Votre rapport aux soins",
  },
  {
    affirmation:
      "Je sais que les pratiques alternatives nécessitent souvent plusieurs séances.",
    match: true,
    category: "Votre rapport aux soins",
  },
  {
    affirmation: "Je pense que mon système nerveux est déséquilibré.",
    match: true,
    category: "Stress, sommeil & émotions",
  },
  {
    affirmation:
      "J'ai besoin d'un endroit où je peux ne pas parler et/ou dormir, mais que cela agisse quand même.",
    match: true,
    category: "Stress, sommeil & émotions",
  },
  {
    affirmation:
      "Je cherche un endroit où l'on puisse accueillir mes paroles si je ressens l'envie et le besoin de parler.",
    match: true,
    category: "Stress, sommeil & émotions",
  },
  {
    affirmation: "Je tombe souvent malade, mon système immunitaire est fragile.",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation: "Mon système endocrinien (hormones) est déréglé.",
    match: true,
    category: "Corps & santé physique",
  },
  {
    affirmation: "Je vais très bien et je n'ai aucune tension particulière.",
    match: false,
    category: "Votre rapport aux soins",
  },
  {
    affirmation: "Je recherche des méthodes invasives et/ou médicamenteuses.",
    match: false,
    category: "Votre rapport aux soins",
  },
  {
    affirmation: "Je recherche quelqu'un qui puisse faire des diagnostics médicaux.",
    match: false,
    category: "Votre rapport aux soins",
  },
  {
    affirmation: "Je recherche quelqu'un qui modifie mes traitements.",
    match: false,
    category: "Votre rapport aux soins",
  },
  {
    affirmation:
      "Je recherche quelqu'un qui me prescrive des médicaments, des examens et/ou un arrêt de travail.",
    match: false,
    category: "Votre rapport aux soins",
  },
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
  signature: "Delphine : soulage, écoute, apaise, libère, délie… les maux et les mots.",
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
      titre: "1ʳᵉ séance « Faisons connaissance »",
      duree: "1h30",
      prix: "75 €",
      detail: [
        "20 min de questionnaire détaillé (offert) pour cibler vos besoins",
        "65 min de pratique manuelle sur les pieds",
        "5 min de retour réciproque (offert)",
      ],
    },
    suivantes: [
      { label: "Séance à l'unité (65 min)", prix: "75 €" },
      {
        label:
          "Option : temps supplémentaire de massage des pieds jusqu'aux genoux",
        prix: "1 €/min",
        note: "soit +15 min supplémentaires — 15 €",
      },
    ] as TarifLigne[],
    abonnements: [
      {
        label: "FORFAIT — 3 séances · −10 %",
        prix: "202,50 €",
        note: "Soit 67,50 €/séance",
      },
      {
        label: "CURE — 5 séances · −20 %",
        prix: "300 €",
        note: "Soit 60 €/séance (ce qui revient à une séance offerte)",
      },
      {
        label: "FORMULE 4 saisons · −15 %",
        prix: "255 €",
        note: "Une séance à chaque changement de saison, soit 63,75 €/séance",
      },
      {
        label: "ACCOMPAGNEMENT — 10 séances · −25 %",
        prix: "562,50 €",
        note: "Soit 56,25 €/séance (ce qui revient à 2 séances offertes) 🎁 + 1 séance de réflexologie palmaire offerte",
      },
    ] as TarifLigne[],
  },
  palmaire: {
    titre: "Réflexologie palmaire",
    icone: "✋",
    premiere: {
      titre: "1ʳᵉ séance « Faisons connaissance »",
      duree: "1h",
      prix: "45 €",
      detail: [
        "20 min de questionnaire détaillé (offert)",
        "30 min de pratique manuelle sur les mains",
        "10 min de retour réciproque (offert)",
      ],
    },
    suivantes: [
      { label: "Séance à l'unité (35 min)", prix: "45 €" },
      {
        label:
          "Option : temps supplémentaire de massage des mains jusqu'aux coudes",
        prix: "1 €/min",
        note: "soit +10 min supplémentaires — 10 €",
      },
    ] as TarifLigne[],
    abonnements: [
      {
        label: "FORFAIT — 3 séances · −10 %",
        prix: "121,50 €",
        note: "Soit 40,50 €/séance",
      },
      {
        label: "CURE — 5 séances · −20 %",
        prix: "180 €",
        note: "Soit 36 €/séance (ce qui revient à une séance offerte)",
      },
      {
        label: "FORMULE 4 saisons · −15 %",
        prix: "153 €",
        note: "Une séance à chaque changement de saison, soit 38,25 €/séance",
      },
      {
        label: "ACCOMPAGNEMENT — 10 séances · −25 %",
        prix: "337,50 €",
        note: "Soit 33,75 €/séance (ce qui revient à 2 séances offertes) 🎁 + 1 séance de réflexologie plantaire offerte",
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
    "La 1ʳᵉ séance « Faisons connaissance » se réserve à l'unité : elle ne fait pas partie des abonnements.",
    "Les abonnements se règlent en une fois, au démarrage des séances.",
    "Séances à domicile : forfait déplacement aller-retour au tarif unique de 5 € (périmètre de 10 km autour d'Annecy).",
    "Rapprochez-vous de votre mutuelle : la réflexologie est parfois prise en charge. Une facture vous est délivrée comme justificatif.",
    "Devis personnalisé pour toute demande particulière.",
    "Règlements acceptés : carte bancaire (CB), chèques & espèces.",
    "Toute annulation doit être signalée au moins 48h à l'avance ; passé ce délai, la séance reste due.",
  ],
};
