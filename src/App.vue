<template>
  <div>
    <app-header/>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from './Components/Header_footer/AppFooter.vue'
export default {
  data() {
    return {
      name: 'Faruk',
      age: 25
    }
  },
  components:{
    AppFooter
  }
}
</script>