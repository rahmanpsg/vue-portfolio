<template>
  <div>
    <v-container :style="hexagonStyle" class="ml-lg-16">
      <div
        class="
          hex-row
          ml-9 ml-lg-13
          animate__animated animate__lightSpeedInLeft animate__delay-1s
        "
      >
        <div class="hex">
          <div class="left"></div>
          <div class="middle"></div>
          <div class="right"></div>
        </div>
        <div class="hex even">
          <div class="left"></div>
          <div class="middle"></div>
          <div class="right"></div>
        </div>
        <div class="hex">
          <div class="left"></div>
          <div class="middle"></div>
          <div class="right"></div>
        </div>
      </div>
      <div
        class="
          hex-row
          ml-9 ml-lg-13
          animate__animated animate__lightSpeedInLeft animate__delay-1s
        "
      >
        <div class="hex">
          <div class="left"></div>
          <div class="middle"></div>
          <div class="right"></div>
        </div>
        <div class="hex even">
          <div class="left"></div>
          <div class="middle"></div>
          <div class="right"></div>
        </div>
        <div class="hex">
          <div class="left"></div>
          <div class="middle"></div>
          <div class="right"></div>
        </div>
      </div>
      <div
        class="
          hex-row
          ml-9 ml-lg-13
          animate__animated animate__lightSpeedInLeft animate__delay-1s
        "
      >
        <div class="hex">
          <div class="left"></div>
          <div class="middle"></div>
          <div class="right"></div>
        </div>
        <div class="hex even">
          <div class="left"></div>
          <div class="middle"></div>
          <div class="right"></div>
        </div>
        <div class="hex">
          <div class="left"></div>
          <div class="middle"></div>
          <div class="right"></div>
        </div>
      </div>
    </v-container>
    <v-container
      class="animate__animated animate__bounceInUp animate__delay-1s"
    >
      <v-avatar size="330">
        <v-img
          :src="imgSrc"
          :lazy-src="imgSrc"
          max-width="300"
          alt="Abd Rahman"
        ></v-img>
      </v-avatar>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HexagonAvatar",
  props: {
    imgSrc: String,
  },
  computed: {
    hexagonStyle(): string {
      let style = `position: absolute;`;
      switch (this.$vuetify.breakpoint.name) {
        case "sm":
          return style + "left: 32px;";
        case "md":
          return style + "left: 308px;";
        case "xl":
          return style + "left:222px;";
        default:
          return style;
      }
    },
  },
});
</script>

<style scoped>
.hex {
  float: left;
  margin-right: -26px;
  margin-bottom: -50px;
}
.hex .left {
  float: left;
  width: 0;
  border-right: 30px solid #8084f2;
  border-top: 52px solid transparent;
  border-bottom: 52px solid transparent;
}
.hex .middle {
  float: left;
  width: 60px;
  height: 104px;
  background: #8084f2;
}
.hex .right {
  float: left;
  width: 0;
  border-left: 30px solid #8084f2;
  border-top: 52px solid transparent;
  border-bottom: 52px solid transparent;
}
.hex-row {
  clear: left;
}
.hex.even {
  margin-top: 53px;
}
</style>
