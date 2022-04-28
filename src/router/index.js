import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
// These can be imported from other files
import Home from "../components/Home.vue";
import Level1 from "../components/Level1.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home",
      subtitle: "This is the home page"
    }
  },
  { path: "/level1", component: Level1, meta: { title: "Level 1" } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
