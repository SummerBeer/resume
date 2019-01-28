import Button from './components/button'
import Selector from './components/selector'
import Radio from './components/radio'
import Checkbox from './components/checkbox'
import Input from './components/input'
import Cascader from './components/cascader'
import Nav from './components/nav'
import Search from './components/search'
import Table from './components/table'
import Card from './components/card'
import Cube from './components/cube'
import Vue from 'vue'

Vue.component(Button.name, Button)
Vue.component(Selector.name, Selector)
Vue.component(Radio.name, Radio)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Input.name, Input)
Vue.component(Cascader.name, Cascader)
Vue.component(Nav.name, Nav)
Vue.component(Table.name, Table)
Vue.component(Card.name, Card)
Vue.component(Cube.name, Cube)

export {Button, Selector, Radio, Checkbox, Input, Cascader, Nav, Search, Table, Card, Cube}
