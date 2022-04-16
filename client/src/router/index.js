import {createRouter, createWebHistory} from 'vue-router';
import Default from "../view/Default";
import Login from "../view/login";
import Register from "../view/register";
import Admin from "../view/admin";
import registerBusiness from "../view/register-business";
import success from "../view/payment-successful";
import failed from "../view/payment-failed";
import chef from "../view/chef";
import rider from "../view/rider";
import business from "../view/business";
import confirmation from "../view/email-confirmation"

//Import all views
const routes = [
    {
        path: '/',
        name: "Home",
        component: Default,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../view/Home')
            }
        ]
    },
    {
        path: '/contact-us',
        name: "contact",
        component: Default,
        children: [
            {
                path: '',
                name: 'Contact',
                component: () => import('../view/contact-us')
            }
        ]
    },
    {
        path: '/meals',
        name: "meals",
        component: Default,
        children: [
            {
                path: '',
                name: 'meals',
                component: () => import('../view/meals')
            }
        ]
    },
    {
        path: '/cart',
        name: "cart",
        component: Default,
        children: [
            {
                path: '',
                name: 'cart',
                component: () => import('../view/cart')
            }
        ]
    },
    {
        path: '/checkout',
        name: "checkout",
        component: Default,
        children: [
            {
                path: '',
                name: 'checkout',
                component: () => import('../view/checkout')
            }
        ]
    },
    {
        path: '/login',
        name:"login",
        component: Login
    },
    {
        path: '/register',
        name:"register",
        component: Register
    },
    {
        path: '/payment-successful',
        name:"payment-successful",
        component: success
    },
    {
        path: '/email-confirmation',
        name:"email-confirmation",
        component: confirmation
    },
    {
        path: '/payment-failed',
        name:"payment-failed",
        component: failed
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    },
    {
        path: '/business',
        name: 'business',
        component: business
    },
    {
        path: '/chef',
        name: 'chef',
        component: chef
    },
    {
        path: '/rider',
        name: 'rider',
        component: rider
    },
    {
        path: '/register-business',
        name: 'register-business',
        component: registerBusiness
    }
]

const router = createRouter({
    //mode:history,
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;