<template>
  <v-row>
    <v-col v-for="(item, i) in listProject" :key="i">
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          max-width="400"
          color="transparent"
          @click="
            sheet = !sheet;
            itemSelected = item;
            carouselModel = 0;
          "
        >
          <v-img
            class="white--text align-end"
            :src="`../assets/project/${item.imgPath}/1.png`"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-expand-transition>
              <div
                v-if="hover"
                class="
                  d-flex
                  transition-fast-in-fast-out
                  primary
                  darken-2
                  v-card--reveal
                  text-h2
                  white--text
                "
                style="height: 100%"
              >
                Show Details
              </div>
            </v-expand-transition>
          </v-img>

          <v-card-title class="pb-0" v-text="item.title"></v-card-title>

          <v-card-subtitle class="text--primary pt-5 overline text-capitalize">
            <div v-text="item.platform"></div>
            <div v-text="item.app"></div>
          </v-card-subtitle>
        </v-card>
      </v-hover>
    </v-col>

    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" :height="`${imgHeight}px`" tile>
        <div class="overflow-auto" :style="`height: ${imgHeight}px`">
          <v-carousel
            cycle
            :height="carouselHeight"
            hide-delimiter-background
            show-arrows-on-hover
            v-if="itemSelected"
            v-model="carouselModel"
          >
            <v-carousel-item
              v-for="i in [
                ...Array.from(
                  { length: itemSelected.imgTotal },
                  (_, i) => i + 1
                ),
              ]"
              :key="i"
            >
              <v-sheet height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <v-img
                    :src="`../assets/project/${itemSelected.imgPath}/${i}.png`"
                    contain
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CardProject",
  props: {
    listProject: Array,
  },
  data: () => ({
    sheet: false,
    itemSelected: null,
    carouselModel: 0,
  }),
  computed: {
    carouselHeight(): number {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 300;
        case "lg":
          return 700;
        case "xl":
          return 900;
        default:
          return 480;
      }
    },
    imgHeight(): number {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 400;
        case "lg":
          return 600;
        case "xl":
          return 900;
        default:
          return 480;
      }
    },
  },
});
</script>

<style scoped>
.on-hover {
  cursor: pointer;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
