import Button from '~/packages/button'
import Selector from '~/packages/selector'
import Radio from '~/packages/radio'
import Checkbox from '~/packages/checkbox'
import Input from '~/packages/input'
import Cascader from '~/packages/cascader'
import Vue from 'vue'

Vue.component(Button.name, Button)
Vue.component(Selector.name, Selector)
Vue.component(Radio.name, Radio)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Input.name, Input)
Vue.component(Cascader.name, Cascader)

export {Button, Selector, Radio, Checkbox, Input, Cascader}
