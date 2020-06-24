import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Nucleus',
    name: 'Nucleus',
    component: () => import('../views/Nucleus.vue'),
    redirect: () =>{return '/Nucleus/State'},
    children: [{
        path: '/Nucleus/State',
        component: () => import('@/components/State.vue'),
        meta:{keepAlive:true}
      },
      {
        path: '/Nucleus/Getter',
        name: 'Getter',
        component: () => import('@/components/Getter.vue'),
        meta:{keepAlive:true}
      },
      {
        path: '/Nucleus/Mutation',
        name: 'Mutation',
        component: () => import('@/components/Mutation.vue'),
        meta:{keepAlive:true}
      },
      {
        path: '/Nucleus/Action',
        name: 'Action',
        component: () => import('@/components/Action.vue'),
        meta:{keepAlive:true}
      },
      {
        path: '/Nucleus/Module',
        name: 'Module',
        component: () => import('@/components/Module.vue'),
        meta:{keepAlive:true}
      },
    ]
  },
  {
    path: '/Use',
    name: 'Use',
    component: () => import('../views/Use.vue')
  },
  {
    path: '/PlugIn',
    name: 'PlugIn',
    component: () => import('../views/PlugIn.vue')
  }
]
 
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router