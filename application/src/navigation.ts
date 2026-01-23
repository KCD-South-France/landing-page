import { getPermalink, getAsset } from './utils/permalinks';
import favIcon from '~/assets/favicons/favicon.svg';

export const headerData = {
  links: [
    {
      text: 'Sponsoring',
      href: getPermalink('/sponsoring'),
    },
    {
      text: 'À propos',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Événement',
      links: [
        { text: 'Sponsoring', href: getPermalink('/sponsoring') },
        { text: 'Programme', href: '#' }, // à compléter avec l’URL réelle
        { text: 'Infos pratiques', href: '#' }, // à compléter aussi
      ],
    },
    {
      title: 'Organisation',
      links: [
        { text: 'À propos', href: getPermalink('/about') },
        { text: 'Charte Graphique', href: getPermalink('/brand-guidelines') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Mentions légales', href: getPermalink('/terms') },
    { text: 'Politique de confidentialité', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="${favIcon.src}" alt="Logo Cloud Native Provence" loading="lazy" />
    Conçu par la <a class="text-blue-600 underline dark:text-muted" href="https://cloudnative-provence.fr/">communauté Cloud Native Provence</a> · Tous droits réservés.
  `,
};
