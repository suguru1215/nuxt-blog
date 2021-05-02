import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  HelloWorld: () => import('../../components/HelloWorld.vue' /* webpackChunkName: "components/hello-world" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
