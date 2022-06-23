import { IMenu } from './menu.interface';

export const firstMenu: IMenu = {
  title: 'Menu',
  links: [
    {
      icon: 'MdHome',
      title: 'Home',
      link: '/'
    },
    {
      icon: 'MdExplore',
      title: 'Discovery',
      link: '/genres'
    },
    {
      icon: 'MdRefresh',
      title: 'Fresh Movies',
      link: '/fresh'
    },
    {
      icon: 'MdLocalFireDepartment',
      title: 'Trending now',
      link: '/trending'
    }
  ]
}