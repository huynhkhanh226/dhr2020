import React from 'react';

const W00F1000 = React.lazy(() => import('../components/W0X/W00/W00F1000/W00F1000'));
const W00F2000 = React.lazy(() => import('../components/W0X/W00/W00F2000/W00F2000'));
const Home = React.lazy(() => import('../components/HomePage/HomePage.jsx'));
const Login = React.lazy(() => import('../components/LoginPage/LoginPage.jsx'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
export const routes = [
  { 
    path: '/login', 
    exact: true, 
    name: 'Login',
    isRequiredAuth: false,
    component:  Login
  },
  { 
    path: '/', 
    exact: true, 
    name: 'Home',
    isRequiredAuth: true,
    component:  Home,
    childRoutes: [
      { 
        path: '/W00F1000', 
        exact: true, 
        name: 'W00F1000',
        isRequiredAuth: true,
        component:  W00F1000,
        view: 'a'
      },
      { 
        path: '/W00F2000', 
        exact: true, 
        name: 'W00F2000',
        isRequiredAuth: true,
        component:  W00F2000,
        view: 'b'
      }
    ]
  },  
];



export default routes;
