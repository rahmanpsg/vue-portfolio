<template>
  <v-container>
    <h2 class="text-center">
      <p
        class="
          font-weight-black
          text-decoration-underline
          animate__animated animate__backInLeft
        "
        style="letter-spacing: 4px"
      >
        ABOUT
      </p>
    </h2>
    <v-row>
      <v-col align="center" md="12" lg="6">
        <hexagon-avatar :imgSrc="require(`@/assets/foto3.png`)" />
      </v-col>
      <v-col align="center" cols="12" md="12" sm="6" xs="6" lg="6">
        <hexagon-about
          v-for="(item, i) in listAbout"
          :key="i"
          :icon="item.icon"
          :title="item.title"
          :text="item.text"
          :class="item.animated"
        />
      </v-col>
    </v-row>

    <v-row class="animate__animated animate__bounceInUp animate__delay-2s">
      <v-col>
        <p class="overline text-capitalize text-justify">
          Self-assured individual offering more than 1 years of experience as a
          Programmer. Highly trained in various technology environments.
          Flexible and poised promoting well-developed skills in Frontend and
          Backend programming.
        </p>
        <v-list dense color="transparent">
          <v-list-item v-for="(item, i) in listBio" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"> </v-list-item-title>
              <v-list-item-subtitle
                v-text="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="pl-10">
        <p class="headline text-decoration-underline">SKILLS</p>
        <v-list dense color="transparent">
          <v-list-item v-for="(item, i) in listSkill" :key="i">
            <v-list-item-content class="overline">
              <v-row>
                <v-col>
                  <v-list-item-title v-text="item.text"> </v-list-item-title>
                </v-col>
                <v-col>
                  <v-progress-linear
                    v-model="item.progress"
                    :color="progressColor"
                  ></v-progress-linear>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <Footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#233e8b"
          fill-opacity="1"
          d="M0,160L24,144C48,128,96,96,144,112C192,128,240,192,288,197.3C336,203,384,149,432,133.3C480,117,528,139,576,133.3C624,128,672,96,720,96C768,96,816,128,864,165.3C912,203,960,245,1008,266.7C1056,288,1104,288,1152,272C1200,256,1248,224,1296,181.3C1344,139,1392,85,1416,58.7L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </Footer>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import HexagonAvatar from "@/components/HexagonAvatar.vue";
import HexagonAbout from "@/components/HexagonAbout.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "About",
  components: {
    HexagonAvatar,
    HexagonAbout,
    Footer,
  },
  computed: {
    progressColor() {
      return this.$vuetify.theme.dark ? "warning" : "accent";
    },
  },
  data: () => ({
    listSkill: [
      {
        text: "Javascript",
        progress: 80,
      },
      { text: "PHP", progress: 70 },
      { text: "CSS3", progress: 80 },
      {
        text: "HTML5",
        progress: 80,
      },
      {
        text: "Java",
        progress: 70,
      },
      {
        text: "SQL",
        progress: 70,
      },
    ],
    listBio: [
      {
        text: "Pinrang, South Sulawesi, Indonesia",
        subtitle: "Address",
        icon: "mdi-map-marker",
      },
      { text: "+6285255136996", subtitle: "Phone", icon: "mdi-phone" },
      { text: "02 May 1996", subtitle: "Birthday", icon: "mdi-calendar" },
      {
        text: "Bachelor of Computer Science : Technical Information",
        subtitle: "Universitas Muhammadiyah Parepare",
        icon: "mdi-certificate",
      },
    ],
    listAbout: [
      {
        icon: "mdi-speedometer",
        title: "Fast",
        text: "Fast load times and lag free interaction, my highest priority.",
        animated:
          "animate__animated animate__lightSpeedInRight animate__delay-2s",
      },
      {
        icon: "mdi-responsive",
        title: "Responsive",
        text: "My layouts will work on any device, big or small.",
        animated:
          "animate__animated animate__lightSpeedInRight animate__delay-3s",
      },
      {
        icon: "mdi-lead-pencil",
        title: "Intuitive",
        text: "Strong preference for easy to use, intuitive UI/UX.",
        animated:
          "animate__animated animate__lightSpeedInRight animate__delay-4s",
      },
      {
        icon: "mdi-rocket-launch",
        title: "Dynamic",
        text: "Websites don't have to be static, I love making pages come to life.",
        animated:
          "animate__animated animate__lightSpeedInRight animate__delay-5s",
      },
    ],
  }),
});
</script>
