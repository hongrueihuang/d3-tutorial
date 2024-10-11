import { createMemoryHistory, createRouter } from "vue-router";

import Index from "../pages/index.vue";
import Basic from "../pages/basic/index.vue";
import Charts from "../pages/charts/index.vue";
import Advance from "../pages/advance/index.vue";

export const routes = [
  { path: "/", component: Index, name: "HOME" },
  { path: "/basic", component: Basic, name: "BASIC", children: [
    {
        path: 'selector',
        name: 'Selector',
        component: () => import('@/pages/basic/selector.vue')
    },
    {
        path: 'data-binding',
        name: 'Data-Binding',
        component: () => import('@/pages/basic/data-binding.vue')
    },
    {
        path: 'models',
        name: 'Models',
        component: () => import('@/pages/basic/models.vue')
    },
  ] },
  { path: "/charts", component: Charts, name: "CHARTS" },
  { path: "/advance", component: Advance, name: "ADVANCE" },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
