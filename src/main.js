import dotenv from "dotenv";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";

dotenv.config();
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "fir-demo-a525e.firebaseapp.com",
  projectId: "fir-demo-a525e",
  storageBucket: "fir-demo-a525e.appspot.com",
  messagingSenderId: "172623007186",
  appId: "1:172623007186:web:1dfc25bdcda90ea3b6cc0b",
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
