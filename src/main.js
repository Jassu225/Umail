import Vue from 'vue';
import App from './App.vue';

require("babel-core/register");
require("babel-polyfill");

new Vue({
  el: '#app',
  render: h => h(App)
})
