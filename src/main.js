import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import AOS from 'aos'
import 'aos/dist/aos.css'


library.add(faFacebook, faInstagram, faWhatsapp)
library.add(faArrowCircleLeft, faArrowCircleRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueCarousel)

Vue.config.productionTip = false


new Vue({
	created () {
		AOS.init()
	},
  render: h => h(App)
}).$mount('#app')
