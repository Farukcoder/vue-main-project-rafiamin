<template>
  <div>
    <h1>Header</h1>
    <ul>
      <li v-for="student in myStudents" :key="student">
        {{ student }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    myStudents: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
  div{
    color: red;
  }
</style>