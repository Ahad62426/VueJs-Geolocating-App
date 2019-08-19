/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import firebase from "firebase/app";
import auth from "firebase/auth";
import Home from '@/components/Map'
import Signup from '@/components/Signup'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (!to.matched.some(rec => rec.meta.requiresAuth)) return next();
    let user = firebase.auth().currentUser;
    if (user) return next();
    next({ name: 'Login' });
});

export default router;