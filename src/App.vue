<template>
  <v-app>
    <v-app-bar
      app
      absolute
      elevate-on-scroll
      color="background"
      style="z-index: 6"
      class="animate__animated animate__backInDown"
    >
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon class="icon" :dark="$vuetify.theme.dark">
          {{ iconActive }}
        </v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(item, i) in links"
        :key="i"
        :to="item.href"
        text
        active-class="accent--text"
      >
        <span
          class="mr-2 font-weight-bold text-capitalize"
          v-text="item.text"
        ></span>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="main" style="z-index: 5">
      <transition name="fade">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    links: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Project", href: "/project" },
    ],
  }),
  computed: {
    iconActive() {
      return this.$vuetify.theme.dark
        ? "mdi-theme-light-dark"
        : "mdi-alarm-light";
    },
  },
});
</script>

<style scoped>
.v-btn::before {
  background-color: transparent;
}
.main {
  background-color: var(--v-background-base);
}
.text-logo {
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
  word-spacing: 2px;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
