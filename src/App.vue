<template>
  <div>
    <AppHeader :myStudents="students" />
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './Components/Header_footer/AppHeader.vue'
import AppFooter from './Components/Header_footer/AppFooter.vue'
export default {
  data() {
    return {
      students: ['faruk', 'nasir', 'talha'],
      age: 25
    }
  },
  components:{
    AppHeader,
    AppFooter
  }
}
</script>

<style>

</style>