<template>
  <modal idModal="addModal">
      <template v-slot:header>
          <h5 class="modal-title" id="exampleModalLabel">Thêm mới dự án</h5>
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
                    <label for="validationDefault01" class="form-label mr-5">Loại dự án: {{ bindingValueAdd.valueTypeInput }}</label>
                    <select name="" id="" v-model="bindingValueAdd.valueTypeInput" class="w-100 select-status form-control">
                        <option value="Web">Web</option>
                        <option value="App">App</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Game">Game</option>
                    </select>
                    <!-- <input type="text" class="form-control" id="validationDefault01" required> -->
                </div>
                <div class="col-md-12 d-flex row mt-4">
                    <label for="validationDefault01" class="form-label">Tên dự án</label>
                    <input type="text" v-model="bindingValueAdd.valueNameInput" class="form-control" id="validationDefault01" required>
                </div>
                <div class="col-md-12 row mt-4">
                    <label for="validationDefault01" class="form-label">Mô tả</label>
                    <textarea type="text" v-model="bindingValueAdd.valueDescInput" class="form-control" id="validationDefault01" required/>
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
                valueNameInput: '',
                valueTypeInput: '',
                valueDescInput: '',
            }
        }
    },

    methods: {
        Add(){
            let data={
                ID: this.bindingValueAdd.valueIDInput,
                ProjectName: this.bindingValueAdd.valueNameInput,
                ProjectContent: this.bindingValueAdd.valueDescInput,
                ProjectType: this.bindingValueAdd.valueTypeInput,
            }

            console.log(this.bindingValueAdd);
            
            this.$store.dispatch('addProject', data)

            this.bindingValueAdd.valueIDInput='';
            this.bindingValueAdd.valueNameInput='';
            this.bindingValueAdd.valueDescInput='';
            this.bindingValueAdd.valueTypeInput='';

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