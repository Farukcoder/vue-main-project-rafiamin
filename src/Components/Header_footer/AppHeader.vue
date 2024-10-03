<template>
  <div>
    <p>FirstName: {{firstName}}</p>
    <button @click="updateName">Click me</button>
    <hr>
  </div>
</template>

<script>
import {bus} from "../../main"
export default {
  props: {
    firstName: String,
  },
  methods:{
    updateName(){
      // eslint-disable-next-line vue/no-mutating-props
      bus.$emit('updateName',this.firstName = "jack")
    }
  }
}
</script>

<style scoped>
  div{
    color: red;
  }
</style>