import React from 'react';

const W00F1000 = React.lazy(() => import('../components/W0X/W00/W00F1000/W00F1000'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
export const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/W00F1000', name: 'Dashboard', component: W00F1000 },
];

export default routes;
