//Layout Header only
import {HeaderOnly} from '~/Components/Layout'


import Home from '~/pages/Home/index';
import Following from '~/pages/Following/index';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/Profile', component: Profile },
    { path: '/Upload', component: Upload,layout: HeaderOnly },
    { path: '/Search', component: Search,layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
