<template>
  <div>
    <p>FirstName: {{firstName}}</p>
    <p>LastName: {{lastName}}</p>
    <p>Age: {{age}}</p>
    <button @click="updateName">Click me</button>
  </div>
</template>

<script>
export default {
  props: {
    firstName: String,
    lastName: String,
    age: Number
  },
  methods:{
    updateName(){
      this.$emit('updateName',"Nasir")
    }
  }
}
</script>

<style scoped>
  div{
    color: red;
  }
</style>