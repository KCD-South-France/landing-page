import { getPermalink } from './utils/permalinks';
import { useTranslations } from './i18n/utils';
import { getLocalizedPagePath } from './i18n/routes';
import type { ui } from './i18n/ui';
import favIcon from '~/assets/favicons/favicon.svg';

// Function to get locale-aware navigation
export const getHeaderData = (locale: keyof typeof ui) => {
  const t = useTranslations(locale);

  return {
    links: [
      {
        text: t('nav.sponsoring'),
        href: getPermalink(getLocalizedPagePath(locale, 'sponsoring')),
      },
      {
        text: t('nav.about'),
        href: getPermalink(getLocalizedPagePath(locale, 'about')),
      },
      {
        text: t('nav.contact'),
        href: getPermalink(getLocalizedPagePath(locale, 'contact')),
      },
    ],
  };
};

export const getFooterData = (locale: keyof typeof ui) => {
  const t = useTranslations(locale);

  return {
    links: [
      {
        title: t('footer.event'),
        links: [
          { text: t('footer.sponsoring'), href: getPermalink(getLocalizedPagePath(locale, 'sponsoring')) },
          { text: t('footer.program'), href: '#' },
          { text: t('footer.practicalInfo'), href: '#' },
        ],
      },
      {
        title: t('footer.organization'),
        links: [
          { text: t('footer.about'), href: getPermalink(getLocalizedPagePath(locale, 'about')) },
          { text: t('footer.brandGuidelines'), href: getPermalink(getLocalizedPagePath(locale, 'brand-guidelines')) },
          { text: t('footer.contact'), href: getPermalink(getLocalizedPagePath(locale, 'contact')) },
        ],
      },
    ],
    secondaryLinks: [
      { text: t('footer.terms'), href: getPermalink(getLocalizedPagePath(locale, 'terms')) },
      { text: t('footer.privacy'), href: getPermalink(getLocalizedPagePath(locale, 'privacy')) },
    ],
    socialLinks: [],
    footNote: `
      <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="${favIcon.src}" alt="${t('footer.logoAlt')}" loading="lazy" />
      ${t('footer.note')}
    `,
  };
};
