<template>
  <div class="hello">
    <button class="btn btn-primary" @click="changeName()">Change</button>
    <button class="btn btn-success" @click="this.$router.push('/list-product')">Danh sách</button>
    <p v-if="isFlag">Trang chủ danh sách</p>
    <table class="table table-striped table-dark">
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
              @click="this.idDelete=pro.id, this.nameDelete=pro.name"
            >
              Xoá
            </button>
            <button class="btn btn-warning" style="margin-left: 15px">
              Sửa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <form @submit.prevent="getDataInForm()" class="container">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Tên</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Tuổi</label>
        <input
          v-model="age"
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
          v-model="gender"
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
            <button type="button" data-bs-dismiss="modal" class="btn btn-primary" @click="deleteById()">
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
  name: "HelloWorld",
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
      isFlag: false,
      name: null,
      age: null,
      gender: false,
      idDelete: 0,
      nameDelete: "",
    };
  },

  methods: {
    changeName() {
      this.isFlag = !this.isFlag;
    },

    getDataInForm() {
      let item = {
        name: this.name,
        age: this.age,
        gender: this.gender,
      };
      this.Product.push(item);
      (this.name = null), (this.age = null), (this.gender = false);
    },
    deleteById() {
      // console.log(parseInt(id));
      this.Product.splice(this.deleteById - 1, 1);
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


