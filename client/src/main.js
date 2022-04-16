import { createApp } from 'vue'
//import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuex from 'vuex'

//createApp.use(vuex);
createApp(App).use(vuex).use(router).mount('#app')