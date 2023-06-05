<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(mask, index) in maskList" :key="index">
        <th scope="row">{{ index }}</th>
        <td>{{ mask.id }}</td>
        <td>{{ mask.name }}</td>
        <td>{{ mask.age }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import maskService from "../service/mask-service.js";
import { ref, onMounted } from "vue";
export default {
  name: "ListMask",
  setup() {
    const maskList = ref([]);

    onMounted(async () => {
      maskList.value = await maskService.getAllList();
      console.log(maskList.value);
    });

    return {
      maskList,
    };
  },
};
</script>
<style scoped>
</style>