<template>
</template>

<script>
export default {
  data() {
    return {
      list: [0, 1, 2, 3, 4, 5]
    }
  },

  created() {
    this.list.reverse()
    const abcd = () => {
      this.list.reverse()
    }
    abcd()
  }
}
</script>