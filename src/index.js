import Button from './components/button'
import Selector from './components/selector'
import Radio from './components/radio'
import Checkbox from './components/checkbox'
import Input from './components/input'
import Cascader from './components/cascader'
import Nav from './components/nav'
import Search from './components/search'
import Vue from 'vue'

Vue.component(Button.name, Button)
Vue.component(Selector.name, Selector)
Vue.component(Radio.name, Radio)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Input.name, Input)
Vue.component(Cascader.name, Cascader)
Vue.component(Nav.name, Nav)

export {Button, Selector, Radio, Checkbox, Input, Cascader, Nav, Search}
