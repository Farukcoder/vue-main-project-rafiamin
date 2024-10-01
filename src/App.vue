<template>
  <div>
    <app-header />
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './Components/Header_footer/AppHeader.vue'
import AppFooter from './Components/Header_footer/AppFooter.vue'
export default {
  data() {
    return {
      name: 'Faruk',
      age: 25
    }
  },
  components:{
    AppHeader,
    AppFooter
  }
}
</script>