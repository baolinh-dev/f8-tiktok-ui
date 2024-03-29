// Layouts
import { HeaderOnly } from '~/components/Layout';
// Pages
import { Home, Following, Profile, Upload, Search } from '~/pages/';
// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
