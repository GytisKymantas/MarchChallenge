import { useMediaQuery } from 'react-responsive';

export const BREAKPOINTS = {
  smMobile: '380px',
  mobile: '639px', // all devices <= 639px are mobiles
  tablet: '767px',
  lTablet: '900px',
  lgTablet: '1023px',
  desktop: '1440px',
} as const;

export const MF_BREAKPOINTS = {
  mobileSm: '320px',
  mobile: '375px',
  tabletSm: '640px',
  tablet: '768px',
  tabletLg: '900px',
  tabletXLg: '1024px',
  desktopSm: '1280px',
  desktop: '1440px',
};

export const smMobile = `(max-width: ${BREAKPOINTS.smMobile})`;
export const mobile = `(max-width: ${BREAKPOINTS.mobile})`;
export const tablet = `(max-width: ${BREAKPOINTS.tablet})`;
export const lgTablet = `(max-width: ${BREAKPOINTS.lgTablet})`;
export const desktop = `(max-width: ${BREAKPOINTS.desktop})`;

// mobile-first approach

export const smTabletMF = `(min-width: ${MF_BREAKPOINTS.tabletSm})`;
export const tabletMF = `(min-width: ${MF_BREAKPOINTS.tablet})`;
export const lgTabletMF = `(min-width: ${MF_BREAKPOINTS.tabletLg})`;
export const xlgTabletMF = `(min-width: ${MF_BREAKPOINTS.tabletXLg})`;
export const smDesktopMF = `(min-width: ${MF_BREAKPOINTS.desktopSm})`;
export const desktopMF = `(min-width: ${MF_BREAKPOINTS.desktop})`;

export const useQuery = (): {
  isSmMobile?: boolean;
  isSmTabletMF?: boolean;
  isMobile?: boolean;
  isTabletOrMobile?: boolean;
  isLgTablet?: boolean;
  isTabletMF?: boolean;
  isLgTabletMF?: boolean;
  isXlgTabletMF?: boolean;
  isSmDesktopMF?: boolean;
} => {
  const queries = {
    isSmMobile: useMediaQuery({ query: smMobile }),
    isSmTabletMF: useMediaQuery({ query: smTabletMF }),
    isMobile: useMediaQuery({ query: mobile }),
    isTabletOrMobile: useMediaQuery({ query: tablet }),
    isLgTablet: useMediaQuery({ query: lgTablet }),
    isTabletMF: useMediaQuery({ query: tabletMF }),
    isLgTabletMF: useMediaQuery({ query: lgTabletMF }),
    isXlgTabletMF: useMediaQuery({ query: xlgTabletMF }),
    isSmDesktopMF: useMediaQuery({ query: smDesktopMF }),
  };

  return queries;
};
