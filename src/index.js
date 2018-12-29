import Button from '~/packages/button'
import Selector from '~/packages/selector'
import Radio from '~/packages/radio'
import Vue from 'vue'

Vue.component(Button.name, Button)
Vue.component(Selector.name, Selector)
Vue.component(Radio.name, Radio)

export {Button, Selector, Radio}
