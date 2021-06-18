<template>
  <v-list-item three-line class="my-4">
    <div class="mx-2">
      <div class="hex-top"></div>
      <div class="hex-mid text-center">
        <v-icon large color="white"> {{ icon }} </v-icon>
      </div>
      <div class="hex-bot"></div>
    </div>
    <v-list-item-content class="text-center">
      <v-list-item-subtitle class="overline">
        {{ title }}
      </v-list-item-subtitle>
      <v-list-item-subtitle class="text-caption">
        {{ text }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HexagonAbout",
  props: {
    icon: String,
    title: String,
    text: String,
  },
});
</script>

<style scoped>
.hex-top {
  width: 0;
  border-bottom: 15px solid #5c61ff;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
}

.hex-mid {
  width: 70px;
  height: 43px;
  background-color: #5c61ff;
}

.hex-bot {
  width: 0;
  border-top: 15px solid #5c61ff;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
}
</style>
