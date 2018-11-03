import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tenda from './views/Tenda.vue'
import Sewaac from './views/Sewaac.vue'
import Panggung from './views/Panggung.vue'
import Mejakursi from './views/Mejakursi.vue'
import Genset from './views/Genset.vue'
import Flooring from './views/Flooring.vue'
import Coolingfan from './views/Coolingfan.vue'
import Aboutus from './views/Aboutus.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Tenda',
      name: 'tenda',
      component: Tenda
    },
    {
      path: '/Sewaac',
      name: 'sewaac',
      component: Sewaac
    },
    {
      path: '/Panggung',
      name: 'panggung',
      component: Panggung
    },
    {
      path: '/Mejakursi',
      name: 'mejakursi',
      component: Mejakursi
    },
    {
      path: '/Genset',
      name: 'genset',
      component: Genset
    },
    {
      path: '/Flooring',
      name: 'flooring',
      component: Flooring
    },
    {
      path: '/Coolingfan',
      name: 'coolingfan',
      component: Coolingfan
    },
    {
      path: '/Aboutus',
      name: 'aboutus',
      component: Aboutus
    }
  ]
})
