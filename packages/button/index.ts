import { VueConstructor } from 'vue'
import VnButton from './src/button.vue'

VnButton.install = function(Vue: VueConstructor) {
  Vue.component(VnButton.name, VnButton)
}

export default VnButton
