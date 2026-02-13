export default {
  metadata: {
    title: 'À propos',
  },
  hero: {
    tagline: 'Cloud Native Provence 2026',
    title: 'La communauté Cloud Native <br /><span class="text-accent dark:text-white">au cœur de la Provence</span>',
    subtitle:
      "Le 10 décembre 2026 à Aix-en-Provence, rejoignez-nous pour une journée immersive de conférences, d'ateliers et d'échanges autour de Kubernetes, DevOps et du Cloud Native.",
    imageAlt: 'Cloud Native & Kubernetes',
  },
  team: {
    title: 'Qui sommes-nous ?',
    subtitle: 'Une équipe de passionnés qui anime la communauté Cloud Native en Provence',
    tagline: 'Équipe',
  },
  objectives: {
    title: 'Nos objectifs',
    subtitle:
      'Cloud Native Provence vise à rassembler la communauté tech locale autour de technologies modernes et collaboratives.',
    items: [
      {
        title: 'Partage de connaissances',
        description: 'Des talks techniques pour découvrir, apprendre et approfondir les pratiques Cloud Native.',
        icon: 'tabler:book',
      },
      {
        title: 'Rencontres communautaires',
        description: 'Favoriser les échanges entre développeurs, ingénieurs, architectes et passionnés.',
        icon: 'tabler:users',
      },
      {
        title: 'Visibilité pour les sponsors',
        description: "Une opportunité de montrer votre engagement auprès d'une communauté technique dynamique.",
        icon: 'tabler:speakerphone',
      },
    ],
  },
  values: {
    title: 'Nos valeurs',
    subtitle:
      "Porté par la communauté, Cloud Native Provence défend des valeurs de partage, d'inclusivité et d'ouverture.",
    items: [
      {
        title: 'Communauté',
        description: 'Événement à but non lucratif, organisé par des bénévoles et ouvert à tous les passionnés.',
      },
      {
        title: 'Accessibilité',
        description: 'Une journée abordable avec des tickets accessibles et des sponsors qui rendent cela possible.',
      },
      {
        title: 'Qualité',
        description: 'Des interventions sélectionnées avec soin, sans démarche commerciale intrusive.',
      },
    ],
  },
  location: {
    title: 'Localisation',
    tagline: 'Rejoignez-nous à Aix-en-Provence',
    items: [
      {
        title: 'Aix-en-Provence',
        description: 'Lieu exact à venir. Accessible en train, voiture et transport local.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    tagline: "L'équipe Cloud Native Provence",
    items: [
      {
        title: 'Écrivez-nous',
        description: 'info@cloudnative-provence.fr',
        icon: 'tabler:mail',
      },
      {
        title: 'Sponsoring',
        description: 'sponsors@cloudnative-provence.fr',
        icon: 'tabler:briefcase',
      },
    ],
  },
} as const;
