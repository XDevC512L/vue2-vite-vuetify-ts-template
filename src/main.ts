import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import AxiosConfig from "@/plugins/AxiosConfig";
import router from "./router/index";

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
AxiosConfig.init();
