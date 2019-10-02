import News from './components/News';
import Profile from './components/Profile';
import Projects from './components/Projects';

export const routes = [
    {
        path: '',
        component: News
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/projects',
        component: Projects
    }
];