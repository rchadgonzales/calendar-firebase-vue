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
  apiKey: "AIzaSyDzaJaxfq7jZvB9RbH10Nxdu21pE8VnqcQ",
  authDomain: "calendar-firebase-vue.firebaseapp.com",
  databaseURL: "https://calendar-firebase-vue.firebaseio.com",
  projectId: "calendar-firebase-vue",
  storageBucket: "calendar-firebase-vue.appspot.com",
  messagingSenderId: "731564869432",
  appId: "1:731564869432:web:22b2ceef6af5d24be7a3cd",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
