<template>
  <!--Form nhập thông tin sản phẩm-->
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-9">
        <div
          class="card mt-5"
          style="border-radius: 15px; box-shadow: 0 0 20px 0 #3590de"
        >
          <div
            class="card-body"
            style="box-shadow: 0 0 20px 0 #253365; border-radius: 15px"
          >
            <form @submit.prevent="createMask()">
              <h3>Thêm mới sản phẩm</h3>
              <div class="row">
                <div class="col-4">
                  <label style="font-weight: bold; margin-left: 60px" for="name"
                    >Tên sản phẩm<span style="color: red">*</span>:</label
                  >
                </div>
                <div class="col-6">
                  <div class="row">
                    <input
                      class="form-control"
                      type="text"
                      id="name"
                      v-model="formMask.name"
                    />
                  </div>
                  <div class="row">
                    <div class="row" style="height: 30px">
                      <!-- <p style="color: red">* Không được để trống</p> -->
                    </div>
                  </div>
                </div>
                <div class="col-2"></div>
              </div>
              <div class="row" style="margin-top: 30px">
                <div class="col-4">
                  <label
                    style="font-weight: bold; margin-left: 60px"
                    for="phoneNumber"
                    >Nơi sản xuất<span style="color: red">*</span>:</label
                  >
                </div>
                <div class="col-6">
                  <div class="row">
                    <input
                      class="form-control"
                      type="text"
                      id="phoneNumber"
                      v-model="formMask.manufacture"
                    />
                  </div>
                  <div class="row" style="height: 30px">
                    <!-- <p style="color: red">* Không được để trống</p> -->
                  </div>
                </div>
                <div class="col-2"></div>
              </div>
              <div class="row" style="margin-top: 30px">
                <div class="col-4">
                  <label
                    style="font-weight: bold; margin-left: 60px"
                    for="email"
                    >Màu sắc <span style="color: red">*</span>:</label
                  >
                </div>
                <div class="col-6">
                  <div class="row">
                    <input
                      class="form-control"
                      type="text"
                      id="email"
                      v-model="formMask.color"
                    />
                  </div>
                  <div class="row" style="height: 30px">
                    <!-- <p style="color: red">* Không được để trống</p> -->
                  </div>
                </div>
                <div class="col-2"></div>
              </div>
              <div class="row" style="margin-top: 30px">
                <div class="col-4">
                  <label
                    style="font-weight: bold; margin-left: 60px"
                    for="address"
                    >Lưu ý <span style="color: red">*</span>:</label
                  >
                </div>
                <div class="col-6">
                  <div class="row">
                    <input
                      class="form-control"
                      type="text"
                      id="address"
                      v-model="formMask.note"
                    />
                  </div>
                  <div class="row" style="height: 30px">
                    <!-- <p style="color: red">* Không được để trống</p> -->
                  </div>
                </div>
                <div class="col-2"></div>
              </div>
              <div class="row" style="margin-top: 30px">
                <div class="col-4">
                  <label
                    style="font-weight: bold; margin-left: 60px"
                    for="email"
                    >Số lớp<span style="color: red">*</span>:</label
                  >
                </div>
                <div class="col-6">
                  <div class="row">
                    <select
                      v-model="formMask.layer"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option disabled value="">Chọn layer</option>
                      <option
                        v-for="(layer, index) in layerList"
                        :key="index"
                        :value="layer"
                      >
                        {{ layer.name }}
                      </option>
                    </select>
                  </div>
                  <div class="row" style="height: 30px">
                    <!-- <p style="color: red">* Không được để trống</p> -->
                  </div>
                </div>
                <div class="col-2"></div>
              </div>
              <div class="row" style="margin-top: 30px">
                <div class="col-lg-4"></div>
                <div class="col-lg-6">
                  <button type="submit" class="btn btn-success">
                    Thêm mới
                  </button>
                </div>
                <div class="col-lg-2"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import maskService from "@/service/mask-service";
import { onMounted, reactive } from "vue";
import router from "@/router/mask-router";
import Swal from "sweetalert2";
export default {
  name: "CreateMask",
  setup() {
    const formMask = reactive({
      name: "",
      manufacture: "",
      color: "",
      note: "",
      layer: {
        id: 0,
        name: "",
      },
    });
    const layerList = reactive([]);

    onMounted(async () => {
      const data = await maskService.getAllListLayer();
      layerList.splice(0);
      layerList.push(...data); // Thêm
    //   console.log(layerList);
    });

    const createMask = async () => {
      //   console.log(formMask);
      await maskService.createMask(formMask);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thêm mới thành công",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/");
    };

    return {
      createMask,
      formMask,
      router,
      layerList,
    };
  },
};
</script>
<style scoped>
h3 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
  font-size: 28px;
  font-weight: bold;
}
</style>