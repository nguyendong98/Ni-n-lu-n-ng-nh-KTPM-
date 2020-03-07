import React from 'react';
import Restaurant from './pages/Restaurant/Restaurant';
import Spa from './pages/Spa/Spa';
import Tour from './pages/Tour/Tour';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/Tours',
        exact: true,
        main: () => <Tour></Tour>
    },
    {
        path: '/Spa',
        exact: false,
        main: () => <Spa></Spa>
    },
    {
        path: '/Restaurant',
        exact: false,
        main: () => <Restaurant></Restaurant>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]


export default routes