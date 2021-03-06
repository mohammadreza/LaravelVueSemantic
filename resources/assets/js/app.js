import Vue from 'vue'
import App from './App.vue'
import Index from './views/movie/index.vue'
import router from './router'

require('./bootstrap');

const app=new Vue({
	el:"#app",
	template:'<app></app>',
	components:{App},
	router
})
