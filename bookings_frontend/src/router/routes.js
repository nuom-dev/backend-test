// import store from '../store/store.js';
const routes = [
    {
        path: '/signin',
        name: 'StudentLogin',
        component: () => import('../components/Signin.vue'),
    },
    {
        path: '/',
        name: 'StudentSignup',
        component: () => import('../components/Signup.vue'),
    },
    {
        path: '/booking/create',
        name: 'AddBooking',
        component: () => import('../components/AddBooking.vue'),
        
    },
     
]

export default routes
