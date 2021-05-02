import { wrapFunctional } from './utils'

export { default as HelloWorld } from '../../components/HelloWorld.vue'

export const LazyHelloWorld = import('../../components/HelloWorld.vue' /* webpackChunkName: "components/hello-world" */).then(c => wrapFunctional(c.default || c))
