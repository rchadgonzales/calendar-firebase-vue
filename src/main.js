import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
// import "firebase/firestore";
import "firebase/compat/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
});

// SAMPLE FIRESTORE DATABASE
/*
firebase.initializeApp({
  apiKey: "AIaSyZaJaxfq7jZvB8RusH11xdu22pE8VnqcO",
  authDomain: "calendar-vue.firebaseapp.com",
  databaseURL: "https://calendar-vue.firebaseio.com",
  projectId: "calendar-vue",
  storageBucket: "calendar-vue.appspot.com",
  messagingSenderId: "731790829143",
  appId: "1:731790829143:web:22R3ceeuSHad7d81be7a3d",
});
*/

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
