<template>
  <v-container>
    <v-row align="center">
      <profile-home :socials="socials"></profile-home>
      <v-col
        md="12"
        sm="6"
        lg="6"
        xs="6"
        align="center"
        class="animate__animated animate__bounceInUp"
      >
        <v-img
          lazy-src="@/assets/profile-pic.png"
          src="@/assets/profile-pic.png"
          alt="Abd Rahman"
          max-width="400"
        />
      </v-col>
    </v-row>
    <Footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#233e8b"
          fill-opacity="1"
          d="M0,0L21.8,21.3C43.6,43,87,85,131,101.3C174.5,117,218,107,262,96C305.5,85,349,75,393,90.7C436.4,107,480,149,524,154.7C567.3,160,611,128,655,106.7C698.2,85,742,75,785,96C829.1,117,873,171,916,202.7C960,235,1004,245,1047,256C1090.9,267,1135,277,1178,266.7C1221.8,256,1265,224,1309,186.7C1352.7,149,1396,107,1418,85.3L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
    </Footer>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ProfileHome from "@/components/ProfileHome.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "Home",
  components: {
    ProfileHome,
    Footer,
  },
  data: () => ({
    socials: [
      {
        icon: "mdi-whatsapp",
        tooltip: "+6285255136996",
        link: "https://wa.me/+6285255136996",
      },
      {
        icon: "mdi-google-plus",
        tooltip: "rahmanpsg014@gmail.com",
        link: "mailto:rahmanpsg014@gmail.com",
      },
      {
        icon: "mdi-instagram",
        tooltip: "@rahmanpsg",
        link: "https://www.instagram.com/rahmanpsg",
      },
      {
        icon: "mdi-github",
        tooltip: "@rahmanpsg",
        link: "https://www.github.com/rahmanpsg",
      },
      {
        icon: "mdi-linkedin",
        tooltip: "Abd Rahman",
        link: "https://www.linkedin.com/in/rahmanpsg/",
      },
    ],
  }),
});
</script>

