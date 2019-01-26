// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'highlight.js/styles/vs2015.css'
import hljs from 'highlight.js'


 // code highlight 
Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
})


// Dragging
Vue.directive("drag", {
    bind: function(el, binding){
        let oDiv = el
        let self = this
        oDiv.onmousedown = function(e){
            let disX = e.clientX - oDiv.offsetLeft
            let disY = e.clientY - oDiv.offsetTop

            document.onmousemove = function(e){
                let l = e.clientX - disX
                let t = e.clientY - disY

                oDiv.style.left = l + "px"
                oDiv.style.top = t + "px"
            }

            document.onmouseup = function(e){
                document.onmousemove = null
                document.onmouseup = null
            }
        }
    }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
