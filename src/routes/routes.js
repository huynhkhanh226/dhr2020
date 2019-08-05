import React from 'react';
import {asyncComponent} from "./asyncComponent";
const W00F1000 = React.lazy(() => import(/* webpackChunkName: "W00F1000" */'../components/W0X/W00/W00F1000/W00F1000'));
const W00F2000 = React.lazy(() => import(/* webpackChunkName: "W00F2000" */'../components/W0X/W00/W00F2000/W00F2000'));
const W00F3000 = React.lazy(() => import(/* webpackChunkName: "W00F3000" */'../components/W0X/W00/W00F3000/W00F3000'));
const Home = React.lazy(() => import(/* webpackChunkName: "HomePage" */'../components/HomePage/HomePage.jsx'));
const Login = React.lazy(() => import(/* webpackChunkName: "LoginPage" */'../components/LoginPage/LoginPage.jsx'));
const Index = React.lazy(() => import(/* webpackChunkName: "Index" */'../components/Layout/Index'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
export const routes = [
  { 
    path: '/login', 
    exact: true, 
    name: 'login',
    isRequiredAuth: false,
    component:  Index
  },
  { 
    path: '/W00F1000', 
    exact: true, 
    name: 'W00F1000',
    isRequiredAuth: true,
    component:  W00F1000,
    view: 'a'
  },
  { 
    path: '/home', 
    exact: true, 
    name: 'Home',
    isRequiredAuth: true,
    component:  Home,
    childRoutes: [
      { 
        path: '/home/W00F1000', 
        //exact: true, 
        name: 'W00F1000',
        isRequiredAuth: true,
        component:  W00F1000,
        view: 'a',
        childRoutes: [
          { 
            path: '/W00F1000/W00F2000', 
            //exact: true, 
            name: 'W00F2000',
            isRequiredAuth: true,
            component:  W00F2000,
            view: 'b'
          }    
        ]
      },
      { 
        path: '/W00F2000', 
        exact: true, 
        name: 'W00F2000',
        isRequiredAuth: true,
        component:  W00F2000,
        view: 'b'
        
      },
      { 
        path: '/W00F3000', 
        exact: true, 
        name: 'W00F3000',
        isRequiredAuth: true,
        component:  W00F3000,
        view: 'c'
      }
    ]
  }
];



export default routes;
