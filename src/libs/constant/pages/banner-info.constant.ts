import { ICompanyPages } from '../../types/pages/pages.types';
import { mailingNeoflexConstant } from './neoflex/mailing-neoflex.constant';
import { presentationNeoflexConstant } from './neoflex/presentation-neoflex.constant';
import { welcomePackNeoflexConstant } from './neoflex/welcome-pack-neoflex.constant';
import { landingNeoflexConstant } from './neoflex/landing-neoflex.constant';

export const bannerInfoConstant: ICompanyPages = {
  neoflex: {
    banner: {
      name: 'Neoflex',
      logo: 'assets/img/logos/neoflex.svg',
      description:
        'Занималась дизайн-поддержкой социальных сетей компании, оформляла посты  для внутренних коммуникаций. Перенесла все имеющиеся макеты из Adobe Illustrator  в Figma,тем самым облегчила и автоматизировала работу отделов маркетинга и HR. Оформляла презентации. Придумала и реализовала концепцию WELCOME-PACK.',
    },
    mailing: mailingNeoflexConstant,
    welcomePack: welcomePackNeoflexConstant,
    presentation: presentationNeoflexConstant,
    landing: landingNeoflexConstant,
  },
  profit: {
    banner: {
      name: 'PROF-IT Group',
      logo: 'assets/img/logos/profit.svg',
      description:
        'Занималась оформлением постов для социальных сетей и внутренних коммуникаций, презентаций, макетов для digital, версткой и подготовкой к печати дизайн-макетов по техническим требованиям.',
    },
  },
  codexpert: {
    banner: {
      name: 'CODEEXPERT',
      logo: 'assets/img/logos/codexpert.svg',
      description:
        'Занималась оформлением гайдбука, постов для социальных сетей и внутренних коммуникаций, презентаций, макетов для digital, версткой и подготовкой к печати дизайн-макетов по техническим требованиям.',
    },
  },
  otherProjects: {
    banner: {
      name: 'Другие проекты',
      logo: null,
      description:
        'Занималась оформлением гайдбука, постов для социальных сетей и внутренних коммуникаций, презентаций, макетов для digital, версткой и подготовкой к печати дизайн-макетов по техническим требованиям.',
    },
  },
};
