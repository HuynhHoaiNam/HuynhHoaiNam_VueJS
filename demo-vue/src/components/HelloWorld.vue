<template>
  <div>
    <h1>Đây là trang có thẻ h1 nè////</h1>
    <button class="btn btn-primary" @click="this.$router.push('/')">
      Danh sách chính
    </button>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
};
</script>
<style scoped>
h1 {
  text-align: center;
  color: royalblue;
}
</style>
