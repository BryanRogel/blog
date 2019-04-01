import Vue from 'vue'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    lazyComponent: true
  });

import VueDisqus from 'vue-disqus'
Vue.use(VueDisqus);