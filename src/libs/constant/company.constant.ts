import { ICompany } from '../types/company.types';

export const companyConstant: ICompany[] = [
  {
    name: 'Neoflex',
    logo: 'assets/img/logos/neoflex.svg',
    image: 'assets/img/home/company/neoflex.png',
    description: [
      'Cоздает ИТ-платформы для цифровой трансформации бизнеса',
      'Дизайн-поддержка социальных сетей, внутренних и внешних коммуникаций. Для удобства и экономии времени были разработаны варианты шаблонов постов.',
    ],
    route: '/neoflex',
  },
  {
    name: 'PROF-IT Group',
    logo: 'assets/img/logos/profit.svg',
    image: 'assets/img/home/company/profit.png',
    description: [
      'Группа ИТ-компаний, занимающихся комплексной автоматизацией управления крупными предприятиями, проектированием и внедрением инжиниринговых и ИТ-проектов и т.д.',
      'Развитие и поддержка внутренних и внешних коммуникаций компании, оформление презентаций, полиграфия, мерч.',
    ],
    route: '/prof-it',
  },
  {
    name: 'CODEXEPERT',
    logo: 'assets/img/logos/codexpert.svg',
    image: 'assets/img/home/company/codexpert.png',
    description: [
      'Аутстаффинг специалистов, развитие функционала и повышение производительности решений на 1C',
      'Разработка логотипа, фирменной презентации, поддержка внутренних коммуникаций, мерч.',
    ],
    route: '/codexpert',
  },
  {
    name: 'Другие проекты',
    logo: null,
    image: null,
    description: ['Здесь собраны остальные проекты :)'],
    route: '/other-project',
  },
];
