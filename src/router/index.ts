import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutPage.vue'),
      },
      {
        path: '/partners',
        name: 'Partners',
        component: () => import('@/views/PartnersPage.vue'),
      },
      {
        path: 'events/categories',
        name: 'Categories',
        component: () => import('@/views/EventsCategoriesPage.vue'),
      },
      {
        path: '/events',
        name: 'Events',
        component: () => import('@/views/EventsPage.vue'),
      },
      {
        path: '/events/:urlCategory',
        name: 'EventsCategoriesId',
        component: () => import('@/views/EventsPage.vue'),
      },
      {
        path: '/event/:url',
        name: 'EventPost',
        component: () => import('@/views/EventPostPage.vue'),
      },
      {
        path: '/contacts',
        name: 'ContactsPage',
        component: () => import('@/views/ContactsPage.vue'),
      }
    ]
  },
  {
    path: '/admin/auth',
    name: 'AdminAuth',
    component: () => import('@/views/admin/AdminAuthPage.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'events',
        name: 'AdminEvents',
        component: () => import('@/views/admin/AdminEventsPage.vue'),
      },
      {
        path: 'categories',
        name: 'AdminCategories',
        component: () => import('@/views/admin/AdminCategoriesPage.vue'),
      },
      {
        path: 'images',
        name: 'AdminImagesPage',
        component: () => import('@/views/admin/AdminImagesPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const isLoggedIn = await store.dispatch('admin/fetchIsLoggedIn');
    console.log(isLoggedIn)
    if(isLoggedIn){
      next();
    } else {
      next('/admin/auth');
    }
  } else {
    next();
  }
});

export default router
