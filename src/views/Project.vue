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
        PROJECT
      </p>
    </h2>

    <info-project v-if="isLoading" :listInfo="listInfo"></info-project>

    <card-project
      v-if="isLoading"
      :listProject="listProject"
      class="animate__animated animate__backInUp animate__delay-1s"
    ></card-project>

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
import InfoProject from "@/components/InfoProject.vue";
import CardProject from "@/components/CardProject.vue";
import Footer from "@/components/Footer.vue";

type listProjectModel = {
  length: number;
  [index: number]: {
    imgPath: string;
    imgTotal: number;
    title: string;
    platform: string;
    app: string;
  };
};

type listInfoModel = {
  [index: number]: { icon?: string; text?: string; total?: number };
};

export default Vue.extend({
  name: "Project",
  components: { InfoProject, CardProject, Footer },
  data() {
    return {
      isLoading: true,
      listProject: [] as listProjectModel,
      listInfo: [] as listInfoModel,
    };
  },
  async mounted() {
    await this.loadData();
    this.isLoading = true;
  },
  methods: {
    async loadData() {
      try {
        this.listProject = await fetch("./assets/listProject.json").then(
          (res) => {
            return res.json();
          }
        );

        this.listInfo = await fetch("./assets/listInfo.json").then((res) => {
          return res.json();
        });
        this.listInfo[0].total = this.listProject.length;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
