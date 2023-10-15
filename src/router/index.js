import { createRouter, createWebHistory } from 'vue-router';
import PostList from '../components/PostList.vue';
import SinglePostPage from '../views/SinglePostPage.vue';

const routes = [
  {
    path: '/',
    name: 'PostList',
    component: PostList,
  },
  {
    path: '/post/:id',
    name: 'SinglePostPage',
    component: SinglePostPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
