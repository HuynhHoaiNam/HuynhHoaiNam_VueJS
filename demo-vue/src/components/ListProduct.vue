<template>
  <div class="hello">
    <button class="btn btn-primary" @click="this.isFlag = 1">Thêm mới</button>
    <button class="btn btn-success" @click="this.$router.push('/list-product')">
      Danh sách
    </button>
    <table class="table table-striped table-dark" v-if="isFlag == 0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tên</th>
          <th scope="col">Tuổi</th>
          <th scope="col">Giới tính</th>
          <th scope="col">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pro, index) in Product" :key="index">
          <th scope="row">{{ index }}</th>
          <td>{{ pro.name }}</td>
          <td>{{ pro.age }}</td>
          <td>{{ pro.gender ? "Nam" : "Nữ" }}</td>
          <td>
            <button
              class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="(this.idDelete = pro.id), (this.nameDelete = pro.name)"
            >
              Xoá
            </button>
            <button
              class="btn btn-warning"
              style="margin-left: 15px"
              @click="updateProduct(pro.id)"
            >
              Sửa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <form
      @submit.prevent="createProduct()"
      class="container"
      v-if="isFlag == 1"
    >
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Tên</label>
        <input
          v-model="nameCreate"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Tuổi</label>
        <input
          v-model="ageCreate"
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          v-model="genderCreate"
        />
        <label class="form-check-label" for="exampleCheck1">Giới tính</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <!-- Cập nhật -->
    <form @submit.prevent="updateMain()" class="container" v-if="isFlag == 2">
      <input
        hidden
        v-model="idUpdate"
        type="number"
        class="form-control"
        aria-describedby="emailHelp"
      />
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Tên</label>
        <input
          v-model="nameUpdate"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Tuổi</label>
        <input
          v-model="ageUpdate"
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          v-model="genderUpdate"
        />
        <label class="form-check-label" for="exampleCheck1">Giới tính</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

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
          <div class="modal-body">{{ this.nameDelete }}{{ this.idDelete }}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
              @click="deleteById()"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListProduct",
  data() {
    return {
      Product: [
        {
          id: 1,
          name: "Văn A",
          age: 19,
          gender: false,
        },
        {
          id: 2,
          name: "Văn B",
          age: 19,
          gender: true,
        },
        {
          id: 3,
          name: "Văn C",
          age: 19,
          gender: true,
        },
        {
          id: 4,
          name: "Văn D",
          age: 19,
          gender: true,
        },
        {
          id: 5,
          name: "Văn E",
          age: 19,
          gender: false,
        },
        {
          id: 6,
          name: "Văn F",
          age: 19,
          gender: false,
        },
        {
          id: 7,
          name: "Văn G",
          age: 19,
          gender: false,
        },
      ],
      isFlag: 0,
      nameCreate: null,
      ageCreate: null,
      genderCreate: false,
      idUpdate: 0,
      nameUpdate: "",
      ageUpdate: "",
      genderUpdate: false,
      idDelete: 0,
      nameDelete: "",
    };
  },

  methods: {
    createProduct() {
      let product = {
        name: this.nameCreate,
        age: this.ageCreate,
        gender: this.genderCreate,
      };
      this.Product.push(product);
      (this.nameCreate = null),
        (this.ageCreate = null),
        (this.genderCreate = false);
      this.isFlag = 0;
    },
    deleteById() {
      this.Product.splice(this.deleteById - 1, 1);
    },
    updateProduct(idUpdate) {
      this.isFlag = 2;
      const product = this.Product.find((pro) => pro.id === idUpdate);
      console.log(product);
      (this.idUpdate = product.id),
        (this.nameUpdate = product.name),
        (this.ageUpdate = product.age),
        (this.genderUpdate = product.gender),
        console.log(this.productUpdate);
    },
    updateMain() {
      const product = this.Product.find((pro) => pro.id === this.idUpdate);

      (product.name = this.nameUpdate),
        (product.age = this.ageUpdate),
        (product.gender = this.genderUpdate),
        // console.log(product);
        (this.isFlag = 0);
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


