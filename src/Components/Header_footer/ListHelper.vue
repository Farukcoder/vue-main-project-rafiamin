<template>
  <div>

    <slot name="listItem"></slot>
    I am a List Helper
    <slot name="pera"></slot>
    <slot name="other">Loading...</slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list: ['HTML', 'CSS', 'Javascript', 'PHP'],
    }
  },
  components: {

  }
}
</script>

<style scoped>
  ul li {
    list-style: none;
    color: red;
  }
</style>