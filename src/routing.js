import { createRouter, createWebHistory } from 'vue-router';
import isAuthenticated from "./utils/auth";

import AuthView from "./views/AuthView.vue";
// import ProfileView from "./views/ProfileView.vue";
// import PaymentView from "./views/PaymentView.vue";

// Version 1
// const routes = [
//   {
//     path: '/',
//     redirect: () => {
//       return isAuthenticated() ? '/profile/details' : '/auth/login';
//     }
//   },
//   {
//     path: '/auth',
//     component: AuthView,
//     children: [
//       { path: 'login', component: () => import('./components/test/LoginComponent.vue') },
//       { path: 'resendPassword', component: () => import('./components/test/ResendPasswordComponent.vue') },
//       { path: 'forgot', component: () => import('./components/test/ForgotPasswordComponent.vue') },
//       // ... other authentication-related routes
//     ]
//   },
//   {
//     path: '/profile',
//     component: ProfileView,
//     children: [
//       { path: 'details', component: () => import('./components/test/ProfileDetailsComponent.vue') },
//       { path: 'settings', component: () => import('./components/test/ProfileSettingsComponent.vue') },
//       // ... other profile-related routes
//     ],
//     meta: { requiresAuth: true }
//   },
//   {
//     path: '/payment',
//     component: PaymentView,
//     children: [
//       { path: 'process', component: () => import('./components/test/PaymentProcessComponent.vue') },
//       { path: 'history', component: () => import('./components/test/PaymentHistoryComponent.vue') },
//       // ... other payment-related routes
//     ],
//     meta: { requiresAuth: true }
//   },
//   // ... other top-level routes
// ];

// Version 2
const routes = [
    {
    path: '/',
    redirect: () => {
      return isAuthenticated() ? '/dashboard' : '/auth/login';
    }
  },
  {
    path: "/auth",
    component: () => import('./views/AuthView.vue'),
    children: [
      { path: 'login', component: () => import('./components/test/LoginComponent.vue') },
      { path: 'resendPassword', component: () => import('./components/test/ResendPasswordComponent.vue') },
      { path: 'forgot', component: () => import('./components/test/ForgotPasswordComponent.vue') },
    ]
  },
  {
    path: "/dashboard",
    component: () => import('./views/DashboardView.vue'),
    children: [
        {
    path: '/profile',
    component: () => import("./views/ProfileView.vue"),
    children: [
      { path: 'details', component: () => import('./components/test/ProfileDetailsComponent.vue') },
      { path: 'settings', component: () => import('./components/test/ProfileSettingsComponent.vue') },
      // ... other profile-related routes
    ],
    meta: { requiresAuth: true }
  },
    {
    path: '/payment',
    component: () => import("./views/PaymentView.vue"),
    children: [
      { path: 'process', component: () => import('./components/test/PaymentProcessComponent.vue') },
      { path: 'history', component: () => import('./components/test/PaymentHistoryComponent.vue') },
      // ... other payment-related routes
    ],
    meta: { requiresAuth: true }
  },
    ],
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next('/auth/login');
      return;
    }
  }
  next();
});

export default router;