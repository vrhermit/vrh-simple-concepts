<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import SidebarNav from "./components/SidebarNav.vue";
</script>

<template>
  <div class="container flex-grid">
    <aside class="sidebar" style="padding: 0.25rem">
      <router-link to="/">
        <div class="headings">
          <h1>MarsX</h1>
          <h3>Final Stand</h3>
        </div>
      </router-link>
      <SidebarNav />
    </aside>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style>
canvas {
  width: 100%;
  height: calc(100vh - 10rem);
  touch-action: none;
}

.flex-grid {
  display: flex;
}

.col {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 1rem;
}

.headings {
  margin: 0.5rem;
}

.sidebar {
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  padding: 0.25rem;
}

.main {
  flex: 4;
}

/* width */
::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2a323e;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #53637b;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #53637b;
}
.scene-container {
  /* height: 50vh; */
  margin: 2rem;
  aspect-ratio: 16 / 9;
}
</style>

<style scoped>
a {
  text-decoration: none;
}
</style>