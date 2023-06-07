<template>
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
            <form @submit.prevent="updateMask()">
              <h3>Cập nhật sản phẩm</h3>
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
                  <div class="row errorName">
                    <span
                      style="color: red"
                      v-for="error in v$.name.$errors"
                      :key="error.$uid"
                      >*{{ error.$message }}</span
                    >
                  </div>
                </div>
                <div class="col-2"></div>
              </div>
              <div class="row manufactureMargin">
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
                  <div class="row errorManufacture">
                    <span
                      style="color: red"
                      v-for="error in v$.manufacture.$errors"
                      :key="error.$uid"
                      >*{{ error.$message }}</span
                    >
                  </div>
                </div>
                <div class="col-2"></div>
              </div>
              <div class="row colorMargin">
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
                  <div class="row errorColor">
                    <span
                      style="color: red"
                      v-for="error in v$.color.$errors"
                      :key="error.$uid"
                      >*{{ error.$message }}</span
                    >
                  </div>
                </div>
                <div class="col-2"></div>
              </div>
              <div class="row noteMargin">
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
                  <div class="row errorNote">
                    <span
                      style="color: red"
                      v-for="error in v$.note.$errors"
                      :key="error.$uid"
                      >*{{ error.$message }}</span
                    >
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
                      <option value="">Chọn layer</option>
                      <option
                        v-for="(layer, index) in layerList"
                        :key="index"
                        :value="layer"
                      >
                        {{ layer.name }}
                      </option>
                    </select>
                  </div>
                  <div class="row errorLayerName">
                    <span
                      style="color: red"
                      v-for="error in v$.layer.name.$errors"
                      :key="error.$uid"
                      >*{{ error.$message }}</span
                    >
                  </div>
                </div>
                <div class="col-2"></div>
              </div>
              <div class="row" style="margin-top: 30px">
                <div class="col-lg-4"></div>
                <div class="col-lg-6">
                  <button type="submit" class="btn btn-success">
                    Cập nhật
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
import { onMounted, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import maskService from "@/service/mask-service";
import router from "@/router/mask-router";
import Swal from "sweetalert2";
import { helpers, required, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export default {
  name: "UpdateMask",
  setup() {
    const route = useRoute();
    const idUpdate = route.params.id;
    const layerList = reactive([]);
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
    // Validate Regex
    const manufactureRegex = helpers.regex(
      /^[A-Z\u00C0-\u1EF9][a-zA-Z\u00C0-\u1EF9\s]*$/
    );
    const rules = computed(() => {
      return {
        name: {
          required: helpers.withMessage("Không được để trống", required),
          minLength: helpers.withMessage(
            "Số kí tự ít nhất phải là 5",
            minLength(5)
          ),
        },
        manufacture: {
          required: helpers.withMessage("Không được để trống", required),
          regex: helpers.withMessage(
            "Kí tự đầu viết hoa và không chứa số",
            manufactureRegex
          ),
        },
        color: {
          required: helpers.withMessage("Không được để trống", required),
          minLength: helpers.withMessage(
            "Số kí tự ít nhất phải là 3",
            minLength(3)
          ),
        },
        note: {
          required: helpers.withMessage("Không được để trống", required),
          minLength: helpers.withMessage(
            "Số kí tự ít nhất phải là 5",
            minLength(5)
          ),
        },
        layer: {
          id: 0,
          name: {
            required: helpers.withMessage("Chưa có lựa chọn nào", required),
          },
        },
      };
    });

    const v$ = useVuelidate(rules, formMask);

    onMounted(async () => {
      const maskData = await maskService.getMaskById(idUpdate);
      Object.assign(formMask, maskData);
      const data = await maskService.getAllListLayer();
      layerList.splice(0);
      layerList.push(...data);
    });

    const updateMask = async () => {
      const result = await v$.value.$validate();
      if (result) {
        // console.log(formMask, formMask.id);
        await maskService.updateMask(formMask.id, formMask);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Chỉnh sử thành công",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
      }
    };

    return {
      idUpdate,
      formMask,
      updateMask,
      layerList,
      v$,
      helpers,
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

.errorName,
.errorManufacture,
.errorColor,
.errorNote,
.errorLayerName {
  height: 30px;
}

.nameMargin,
.manufactureMargin,
.colorMargin,
.noteMargin,
.layerNameMargin {
  margin-top: 30px;
}
</style>