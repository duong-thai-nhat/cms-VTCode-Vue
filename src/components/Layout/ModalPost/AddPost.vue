<template>
  <modal idModal="addModal">
      <template v-slot:header>
          <h5 class="modal-title" id="exampleModalLabel">Thêm mới bài viết</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
      </template>

      <template v-slot:body>
            <div class="pl-5 w-100 row">
                <div class="col-md-6 d-flex row mt-4">
                    <label for="validationDefault01" class="form-label">ID</label>
                    <input type="text" v-model="bindingValueAdd.valueIDInput" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-6 row mt-4 ml-3">
                    <label for="validationDefault01" class="form-label mr-5">Trạng thái</label>
                    <select name="" id="" v-model="bindingValueAdd.valueStatusSelect" class="w-100 select-status form-control">
                        <option value="Đang sử dụng">Đang sử dụng</option>
                        <option value="Chưa sử dụng">Chưa sử dụng</option>
                    </select>
                    <!-- <input type="text" class="form-control" id="validationDefault01" required> -->
                </div>
                <div class="col-md-12 d-flex row mt-4">
                    <label for="validationDefault01" class="form-label">Tên bài viết</label>
                    <input type="text" v-model="bindingValueAdd.valueNamePostInput" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-12 row mt-4">
                    <label for="validationDefault01" class="form-label">Nội dung bài viết</label>
                    <textarea type="text" v-model="bindingValueAdd.valueOverviewPost" class="form-control" id="validationDefault01" required/>
                </div>
                
            </div>
          <!-- Select "Tạo" below if you are ready to end your current session. -->
      </template>

      <template v-slot:footer>
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-success" @click="Add" href="#" data-dismiss="modal">Tạo</a>
      </template>

  </modal>
</template>

<script>
import Modal from "../Modal.vue"

export default {
    components: {
        Modal,
    },

    data() {
        return {
            bindingValueAdd: {
                valueIDInput: '',
                valueStatusSelect: '',
                valueNamePostInput: '',
                valueOverviewPost: '',
            }
        }
    },

    methods: {
        Add(){
            let data={
                ID: this.bindingValueAdd.valueIDInput,
                Status: this.bindingValueAdd.valueStatusSelect,
                OverviewPost: this.bindingValueAdd.valueNamePostInput,
                NamePost: this.bindingValueAdd.valueOverviewPost,
            }
            console.log(this.bindingValueAdd);
            this.$store.dispatch('addPost', data)

            this.bindingValueAdd.valueIDInput='';
            this.bindingValueAdd.valueStatusSelect='';
            this.bindingValueAdd.valueNamePostInput='';
            this.bindingValueAdd.valueOverviewPost='';

        }
    },
}
</script>

<style>
    .select-status{
        height: 36px;
        border-color: #d1d3e2;
        outline: none;
        border-radius: 0.35rem;
        padding: .375rem .75rem;
    }

    .select-status option{
        padding: .375rem .75rem;
    }
</style>