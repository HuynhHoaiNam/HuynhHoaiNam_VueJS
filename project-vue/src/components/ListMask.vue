<template>
  <button @click="this.$router.push('/create-mask')">Thêm mới</button>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
        <th scope="col">Handle</th>
        <th scope="col">Handle</th>
        <th scope="col">Handle</th>
        <th scope="col">Chức năng</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(mask, index) in maskList" :key="index">
        <th scope="row">{{ index }}</th>
        <td>{{ mask.name }}</td>
        <td>{{ mask.manufacture }}</td>
        <td>{{ mask.color }}</td>
        <td>{{ mask.note }}</td>
        <td>{{ mask.layer.name }}</td>
        <td>
          <button @click="this.$router.push('/update-mask/' + mask.id)">
            Sửa
          </button>
          <button
            @click="changeDelete(mask.id, mask.name)"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Xoá
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Bạn có muốn xoá {{ nameDelete }}</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            data-bs-dismiss="modal"
            type="button"
            class="btn btn-primary"
            @click="deleteMask(idDelete)"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import maskService from "../service/mask-service.js";
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";
import router from "@/router/mask-router.js";
export default {
  name: "ListMask",
  setup() {
    const maskList = ref([]);
    const idDelete = ref(0);
    const nameDelete = ref("");
    onMounted(async () => {
      maskList.value = await maskService.getAllList();
      console.log(maskList.value);
    });

    const deleteMask = async (idMask) => {
      await maskService.deleteMaskApi(idMask);
      maskList.value = maskList.value.filter((mask) => mask.id !== idMask);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Xoá thành công",
        showConfirmButton: false,
        timer: 1500,
      });
    };

    const changeDelete = async (id, name) => {
      idDelete.value = await id;
      nameDelete.value = await name;
    };
    return {
      maskList,
      deleteMask,
      idDelete,
      nameDelete,
      changeDelete,
      router,
    };
  },
};
</script>
<style scoped>
</style>