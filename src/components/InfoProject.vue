<template>
  <v-row>
    <v-col
      cols="12"
      v-for="(item, i) in listInfo"
      :key="i"
      class="animate__animated animate__heartBeat"
    >
      <v-alert
        border="bottom"
        color="transparent"
        class="mx-auto"
        max-width="300"
      >
        <v-row align="center">
          <v-col cols="3" class="d-flex justify-center">
            <v-icon color="accent" large v-text="item.icon"> </v-icon>
          </v-col>
          <v-col cols="7">
            <span class="text-h6 font-weight-light" v-text="item.text"></span>
          </v-col>
          <v-col cols="2">
            <span class="text-h5 font-weight-bold" v-text="animatedNumber[i]">
            </span>
          </v-col>
        </v-row>
      </v-alert>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import gsap from "gsap";

export default Vue.extend({
  name: "InfoProject",
  props: {
    listInfo: Array,
  },
  data() {
    return {
      number: this.$props.listInfo.map(() => 0),
      tweenedNumber: this.$props.listInfo.map(() => 0),
    };
  },
  computed: {
    animatedNumber(): string {
      try {
        if (!Array.isArray(this.tweenedNumber)) {
          return this.tweenedNumber
            .split(",")
            .map((x: string) => parseInt(x).toFixed(0));
        }
      } catch (error) {
        console.log(error);
      }

      return this.tweenedNumber.map((x: number) => x.toFixed(0));
    },
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, {
        duration: 1,
        tweenedNumber: newValue,
      });
    },
  },
  created() {
    setTimeout(() => {
      this.number = this.$props.listInfo.map(({ total }: any) => total);
    }, 1000);
  },
});
</script>
