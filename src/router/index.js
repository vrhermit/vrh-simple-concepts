import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
// These can be imported from other files
import Home from "../components/Home.vue";
import Level1 from "../components/Level1.vue";
import Level2 from "../components/Level2.vue";
import Level3 from "../components/Level3.vue";
import Level4 from "../components/Level4.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "About",
      subtitle: "This is the home page"
    }
  },
  { path: "/level1", component: Level1, meta: { title: "Level 1 - Box" } },
  { path: "/level2", component: Level2, meta: { title: "Level 2 - Sphere" } },
  { path: "/level3", component: Level3, meta: { title: "Level 3 - Tube" } },
  { path: "/level4", component: Level4, meta: { title: "Level 4 - Intro" } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
