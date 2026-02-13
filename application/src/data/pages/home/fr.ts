import { getLocalizedPagePath } from '~/i18n/routes';

export default {
  metadata: {
    title: 'Cloud Native Provence — Cloud Native & Kubernetes à Aix-en-Provence',
    ignoreTitleTemplate: true,
  },
  hero: {
    actions: [
      {
        variant: 'primary',
        text: 'Je veux participer',
        href: getLocalizedPagePath('fr', 'contact'),
        icon: 'tabler:calendar',
      },
      { text: 'En savoir plus', href: '#features' },
    ],
    image: { src: '~/assets/images/hero-image.png', alt: 'Image Cloud Native Provence' },
    title: {
      main: 'Cloud Native & Kubernetes',
      date: '10 décembre 2026',
      location: 'à Aix-en-Provence',
    },
    subtitle:
      "Une journée d'échanges et de conférences autour de Kubernetes et des technologies Cloud Native, portée par la communauté.",
    eventDate: '2026-12-10T09:00:00',
  },
  note: {
    title: 'Notre philosophie :',
    description: 'Communauté, Partage et Technologies Open Source',
  },
  features: {
    id: 'features',
    tagline: 'Pourquoi venir ?',
    title: "Cloud Native Provence en un clin d'œil",
    subtitle:
      'Un rendez-vous incontournable pour les passionnés du cloud, du DevOps, des conteneurs et des infrastructures modernes.',
    items: [
      {
        title: 'Talks techniques',
        description: 'Conférences de qualité sur Kubernetes, Cloud Native, DevOps, observabilité, sécurité et plus.',
        icon: 'tabler:code',
      },
      {
        title: 'Communauté locale',
        description: "Un moment pour rencontrer, échanger et s'inspirer auprès de passionnés et professionnels.",
        icon: 'tabler:users-group',
      },
      {
        title: 'Opportunités de networking',
        description: "Partenaires, recruteurs, experts : l'endroit idéal pour se connecter à l'écosystème tech.",
        icon: 'tabler:network',
      },
      {
        title: 'Accessibilité et inclusion',
        description:
          "Nous nous engageons à rendre l'événement accessible à tous, avec des initiatives pour la diversité.",
        icon: 'tabler:accessible',
      },
    ],
  },
  content: {
    isReversed: true,
    tagline: 'CFP',
    title: 'Appel à conférenciers',
    items: [
      {
        title: 'Prochainement disponible',
        description: "L'appel à conférenciers ouvrira bientôt. Préparez vos propositions de talks !",
      },
      {
        title: 'Thématiques',
        description: 'Kubernetes, Cloud Native, DevOps, observabilité, sécurité, et bien plus encore.',
      },
      {
        title: 'Formats variés',
        description: "Conférences, ateliers, retours d'expérience - tous les formats sont les bienvenus.",
      },
    ],
    image: {
      src: '~/assets/images/event.jpg',
      alt: 'Appel à conférenciers',
    },
    contentTitle: 'Partagez votre expertise',
    contentDescription: "L'appel à conférenciers arrive bientôt. Restez à l'écoute !",
  },
  steps: {
    title: 'Comment participer à Cloud Native Provence ?',
    items: [
      {
        title: 'Étape 1 : <span class="font-medium">Réservez votre billet</span>',
        description: "L'inscription est bientôt disponible. Restez à l'écoute !",
        icon: 'tabler:ticket',
      },
      {
        title: 'Étape 2 : <span class="font-medium">Proposez un talk</span>',
        description: 'Vous avez un sujet passionnant ? Répondez à notre appel à conférenciers.',
        icon: 'tabler:microphone',
      },
      {
        title: 'Étape 3 : <span class="font-medium">Devenez sponsor</span>',
        description: "Valorisez votre marque auprès d'une audience qualifiée et engagée.",
        icon: 'tabler:building',
      },
      {
        title: 'Étape 4 : <span class="font-medium">Venez !</span>',
        description: 'Rejoignez-nous le 10 décembre 2026 à Aix-en-Provence. On vous attend !',
        icon: 'tabler:check',
      },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Étapes',
    },
  },
  stats: {
    stats: [
      { title: 'Participants attendus', amount: '450' },
      { title: 'Speakers', amount: '24' },
      { title: 'Talks', amount: '16' },
      { title: 'Bénévoles', amount: '20' },
    ],
  },
  callToAction: {
    actions: [
      {
        variant: 'primary',
        text: 'Nous contacter',
        href: getLocalizedPagePath('fr', 'contact'),
        icon: 'tabler:mail',
      },
    ],
    title: "Rejoignez l'aventure !",
    subtitle:
      'Vous êtes passionné, entreprise, conférencier ou curieux ? Contactez-nous pour participer à Cloud Native Provence.',
  },
} as const;
