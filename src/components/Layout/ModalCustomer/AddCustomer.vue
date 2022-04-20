<template>
  <modal idModal="addModal">
      <template v-slot:header>
          <h5 class="modal-title" id="exampleModalLabel">Thêm mới đối tác</h5>
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
                <div class="col-md-6 d-flex row mt-4 ml-3">
                    <label for="validationDefault01" class="form-label">Tên khách hàng</label>
                    <input type="text" v-model="bindingValueAdd.valueNameCustomerInput" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-6 d-flex row mt-4">
                    <label for="validationDefault01" class="form-label">Tên người đánh giá</label>
                    <input type="text" v-model="bindingValueAdd.valueNameReviewerInput" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-6 d-flex row mt-4 ml-3">
                    <label for="validationDefault01" class="form-label">Chức vụ</label>
                    <input type="text" v-model="bindingValueAdd.valuePositionInput" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-12 row mt-4">
                    <label for="validationDefault01" class="form-label">Nội dung bài viết</label>
                    <textarea type="text" v-model="bindingValueAdd.valueReviewInput" class="form-control" id="validationDefault01" required/>
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
                valueNameCustomerInput: '',
                valueNameReviewerInput: '',
                valuePositionInput: '',
                valueReviewInput: '',
            }
        }
    },

    methods: {
        Add(){
            let data={
                ID: this.bindingValueAdd.valueIDInput,
                NameCustomer: this.bindingValueAdd.valueNameCustomerInput,
                NameReviewer: this.bindingValueAdd.valueNameReviewerInput,
                Position: this.bindingValueAdd.valuePositionInput,
                Review: this.bindingValueAdd.valueReviewInput,
            }

            console.log(this.bindingValueAdd);
            
            this.$store.dispatch('addCustomer', data)

            this.bindingValueAdd.valueIDInput='';
            this.bindingValueAdd.valueNameCustomerInput='';
            this.bindingValueAdd.valueNameReviewerInput='';
            this.bindingValueAdd.valuePositionInput='';
            this.bindingValueAdd.valueReviewInput='';

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