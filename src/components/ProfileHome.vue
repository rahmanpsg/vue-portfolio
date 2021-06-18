<template>
  <v-col class="d-flex flex-column align-center" md="12" sm="6" lg="6" xs="6">
    <v-spacer></v-spacer>
    <p class="font animate__animated animate__bounce" style="font-weight: 600">
      Hello, I'm
    </p>
    <p
      class="font accent--text animate__animated animate__bounce"
      style="font-weight: 700"
    >
      Abd Rahman
    </p>
    <p class="font animate__animated animate__bounce">
      Freelance Full Stack Developer
    </p>

    <v-row align="center">
      <v-col align="center" cols="12" md="4">
        <v-menu rounded offset-y>
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              depressed
              rounded
              color="primary"
              class="animate__animated animate__backInLeft text-capitalize"
              v-bind="attrs"
              v-on="on"
            >
              Download CV
            </v-btn>
          </template>

          <v-list>
            <v-list-item link href="../assets/CV-id.pdf" target="_black">
              <v-list-item-icon>
                <v-icon>mdi-download</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Indonesia</v-list-item-title>
            </v-list-item>
            <v-list-item link href="../assets/CV-en.pdf" target="_black">
              <v-list-item-icon>
                <v-icon>mdi-download</v-icon>
              </v-list-item-icon>
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-spacer v-if="$vuetify.breakpoint.name != `xs`"></v-spacer>
      <v-col align="center" v-for="(item, i) in socials" :key="i">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              :href="item.link"
              target="_blank"
              class="animate__animated animate__backInRight"
              :class="`animate__delay-${i}s`"
            >
              <v-icon class="icon" large>
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </template>
          <span>{{ item.tooltip }}</span>
        </v-tooltip>
      </v-col>
      <v-spacer v-if="$vuetify.breakpoint.name != `xs`"></v-spacer>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProfileHome",
  props: {
    socials: Array,
  },
});
</script>

<style scoped>
.font {
  font-size: 28px;
  text-align: center;
  letter-spacing: 2px;
  word-spacing: 2px;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
}

.icon:hover {
  color: var(--v-primary-base);
  cursor: pointer;
}
</style>
