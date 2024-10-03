<template>
  <div>
    <h1>Footer</h1>
    <p>{{lastName}}</p>
  </div>
</template>

<script>
  import {bus} from "../../main"
  export default {
    props:{
      lastName:String,
    },
    created(){
      bus.$on('updateName', (data) => {
        // eslint-disable-next-line vue/no-mutating-props
        this.lastName = data
      })
    }
  }
</script>
<style scoped>
  div{
    color: blue;
  }
</style>
