import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        background: "#fff",
        primary: "#233e8b",
        secondary: "#a9f1df",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#1eae98",
        success: "#4CAF50",
        warning: "#ffffc7",
      },
      dark: {
        background: "#0a0814",
        primary: "#233e8b",
        secondary: "#a9f1df",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#1eae98",
        success: "#4CAF50",
        warning: "#ffffc7",
      },
    },
  },
});
