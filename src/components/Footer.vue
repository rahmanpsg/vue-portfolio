<template>
  <v-footer
    :dark="$vuetify.theme.dark"
    color="background"
    absolute
    padless
    style="z-index: -1"
    class="animate__animated animate__bounceInUp"
  >
    <slot></slot>
    <v-row
      justify="center"
      no-gutters
      class="d-flex align-content-center justify-center"
      style="position: absolute; bottom: 10px; left: 15px"
    >
      <v-col class="text-center grey--text" cols="12">
        @2021 — <strong>Abd Rahman | Created With Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer",
});
</script>
