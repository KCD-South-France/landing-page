export default {
  metadata: {
    title: 'About',
  },
  hero: {
    tagline: 'Cloud Native Provence 2026',
    title: 'The Cloud Native community <br /><span class="text-accent dark:text-white">in the heart of Provence</span>',
    subtitle:
      'On December 10, 2026 in Aix-en-Provence, join us for an immersive day of conferences, workshops and discussions around Kubernetes, DevOps and Cloud Native.',
    imageAlt: 'Cloud Native & Kubernetes',
  },
  team: {
    title: 'Who are we?',
    subtitle: 'A team of enthusiasts who animate the Cloud Native community in Provence',
    tagline: 'Team',
  },
  objectives: {
    title: 'Our objectives',
    subtitle:
      'Cloud Native Provence aims to bring together the local tech community around modern and collaborative technologies.',
    items: [
      {
        title: 'Knowledge sharing',
        description: 'Technical talks to discover, learn and deepen Cloud Native practices.',
        icon: 'tabler:book',
      },
      {
        title: 'Community meetings',
        description: 'Encourage exchanges between developers, engineers, architects and enthusiasts.',
        icon: 'tabler:users',
      },
      {
        title: 'Visibility for sponsors',
        description: 'An opportunity to show your commitment to a dynamic technical community.',
        icon: 'tabler:speakerphone',
      },
    ],
  },
  values: {
    title: 'Our values',
    subtitle: 'Driven by the community, Cloud Native Provence defends values of sharing, inclusiveness and openness.',
    items: [
      {
        title: 'Community',
        description: 'Non-profit event, organized by volunteers and open to all enthusiasts.',
      },
      {
        title: 'Accessibility',
        description: 'An affordable day with accessible tickets and sponsors who make it possible.',
      },
      {
        title: 'Quality',
        description: 'Carefully selected presentations, without intrusive commercial approach.',
      },
    ],
  },
  location: {
    title: 'Location',
    tagline: 'Join us in Aix-en-Provence',
    items: [
      {
        title: 'Aix-en-Provence',
        description: 'Exact location to come. Accessible by train, car and local transport.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    tagline: 'The Cloud Native Provence team',
    items: [
      {
        title: 'Write to us',
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
