<template>
  <div class="nav-list" v-for="item of filteredRountes" v-bind:key="item.name">
    <router-link class="nav-button" :to="item.path">
      {{ item?.meta?.title || item?.name }}
      <!-- Enable this if you want to include a subtitle or description for the level -->
      <!-- <p v-if="item?.meta?.subtitle">{{ item?.meta?.subtitle || "" }}</p> -->
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    showActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    filteredRountes() {
      //  filter out routes that you
      return this.$router.options.routes;
    },
  },
};
</script>

<style scoped>
.nav-list {
  padding: 0.25rem;
}

.nav-button {
  color: white;
  text-decoration: none;
  font-size: 0.75rem;
  padding: 0.25rem;
  display: block;
  border-bottom: 1px solid white;
}
</style>>
