<template>
  <div>
    <AppHeader
      :firstName="fName"
      :lastName="lName"
      :age = "age"
      @updateName = "fName = $event"
    />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './Components/Header_footer/AppHeader.vue'
import AppFooter from './Components/Header_footer/AppFooter.vue'
export default {
  data() {
    return {
      fName: "Omar",
      lName: "Faruk",
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