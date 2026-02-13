import { getLocalizedPagePath } from '~/i18n/routes';

export default {
  metadata: {
    title: 'Cloud Native Provence — Cloud Native & Kubernetes in Aix-en-Provence',
    ignoreTitleTemplate: true,
  },
  hero: {
    actions: [
      {
        variant: 'primary',
        text: 'I want to participate',
        href: getLocalizedPagePath('en', 'contact'),
        icon: 'tabler:calendar',
      },
      { text: 'Learn more', href: '#features' },
    ],
    image: { src: '~/assets/images/hero-image.png', alt: 'Cloud Native Provence Image' },
    title: {
      main: 'Cloud Native & Kubernetes',
      date: 'December 10, 2026',
      location: 'in Aix-en-Provence',
    },
    subtitle:
      'A day of discussions and conferences around Kubernetes and Cloud Native technologies, driven by the community.',
    eventDate: '2026-12-10T09:00:00',
  },
  note: {
    title: 'Our philosophy:',
    description: 'Community, Sharing and Open Source Technologies',
  },
  features: {
    id: 'features',
    tagline: 'Why attend?',
    title: 'Cloud Native Provence at a glance',
    subtitle: 'An essential meeting for cloud, DevOps, containers and modern infrastructure enthusiasts.',
    items: [
      {
        title: 'Technical talks',
        description: 'Quality conferences on Kubernetes, Cloud Native, DevOps, observability, security and more.',
        icon: 'tabler:code',
      },
      {
        title: 'Local community',
        description: 'A moment to meet, exchange and be inspired by enthusiasts and professionals.',
        icon: 'tabler:users-group',
      },
      {
        title: 'Networking opportunities',
        description: 'Partners, recruiters, experts: the ideal place to connect with the tech ecosystem.',
        icon: 'tabler:network',
      },
      {
        title: 'Accessibility and inclusion',
        description: 'We are committed to making the event accessible to all, with diversity initiatives.',
        icon: 'tabler:accessible',
      },
    ],
  },
  content: {
    isReversed: true,
    tagline: 'CFP',
    title: 'Call for Papers',
    items: [
      {
        title: 'Coming soon',
        description: 'The Call for Papers will open soon. Prepare your talk proposals!',
      },
      {
        title: 'Topics',
        description: 'Kubernetes, Cloud Native, DevOps, observability, security, and much more.',
      },
      {
        title: 'Various formats',
        description: 'Conferences, workshops, experience feedback - all formats are welcome.',
      },
    ],
    image: {
      src: '~/assets/images/event.jpg',
      alt: 'Call for Papers',
    },
    contentTitle: 'Share your expertise',
    contentDescription: 'The Call for Papers is coming soon. Stay tuned!',
  },
  steps: {
    title: 'How to participate in Cloud Native Provence?',
    items: [
      {
        title: 'Step 1: <span class="font-medium">Book your ticket</span>',
        description: 'Registration is coming soon. Stay tuned!',
        icon: 'tabler:ticket',
      },
      {
        title: 'Step 2: <span class="font-medium">Submit a talk</span>',
        description: 'Do you have a fascinating topic? Answer our call for papers.',
        icon: 'tabler:microphone',
      },
      {
        title: 'Step 3: <span class="font-medium">Become a sponsor</span>',
        description: 'Promote your brand to a qualified and engaged audience.',
        icon: 'tabler:building',
      },
      {
        title: 'Step 4: <span class="font-medium">Join us!</span>',
        description: 'Join us on December 10, 2026 in Aix-en-Provence. We are waiting for you!',
        icon: 'tabler:check',
      },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Steps',
    },
  },
  stats: {
    stats: [
      { title: 'Expected participants', amount: '450' },
      { title: 'Speakers', amount: '24' },
      { title: 'Talks', amount: '16' },
      { title: 'Volunteers', amount: '20' },
    ],
  },
  callToAction: {
    actions: [
      {
        variant: 'primary',
        text: 'Contact us',
        href: getLocalizedPagePath('en', 'contact'),
        icon: 'tabler:mail',
      },
    ],
    title: 'Join the adventure!',
    subtitle:
      'Are you an enthusiast, a company, a speaker or curious? Contact us to participate in Cloud Native Provence.',
  },
} as const;
