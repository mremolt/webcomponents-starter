import './home/home-view.element';

export const APP_ROUTES = [
  {
    path: '/',
    component: 'sz-home-view',
  },
  {
    path: '/page2',
    component: 'sz-page2-view',
    action: async (): Promise<void> => {
      await import('./page2/page2-element');
    },
  },
];
