<!--<template>-->
<!--  <div>-->
<!--    <AppHeader-->
<!--      :firstName="fName"-->
<!--    />-->
<!--    <AppFooter-->
<!--    :lastName="lName"-->
<!--    />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import AppHeader from './Components/Header_footer/AppHeader.vue'-->
<!--import AppFooter from './Components/Header_footer/AppFooter.vue'-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      fName: "Omar",-->
<!--      lName: "Faruk",-->
<!--      age: 25-->
<!--    }-->
<!--  },-->
<!--  components:{-->
<!--    AppHeader,-->
<!--    AppFooter-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->

<!--</style>-->


<template>
  <CompListHelper>
    <ul slot="listItem">
      <li v-for="li in list" :key="li">{{li}}</li>
    </ul>
    <p slot="pera">Hello world</p>
    <p :slot="loader">See you again</p>
  </CompListHelper>

</template>

<script>

import CompListHelper from "./Components/Header_footer/ListHelper.vue";

export default {
  data(){
    return {
      list: ['HTML', 'CSS', 'Javascript', 'PHP'],
      loader: ''
    }
  },
  components: {CompListHelper},
  created(){
    setTimeout(() => {
      this.loader = "other"
    }, 3000)
  }
}
</script>

<style>

</style>