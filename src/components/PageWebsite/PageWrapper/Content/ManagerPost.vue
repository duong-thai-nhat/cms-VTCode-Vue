<template>
    <div id="table-user">
        <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Quản lý bài viết</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
        <add-modal/>
        <update-modal :bindingValue= "dataBinding"/>
        <delete-modal :idDelete= "iddelete"/>
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th scope="col">STT</th>
                <th scope="col" v-for="(item, index) in columnDatas" :key="index">{{ item }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in datas" :key="index">
                <template v-if="index >= paging.start && index < paging.end">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.ID }}</td>
                    <td>{{ item.NamePost }}</td>
                    <td>{{ item.OverviewPost }}</td>
                    <td>{{ item.Status }}</td>
                    <td>
                        <a class="dropdown-item d-inline-block btn-add" href="#" data-toggle="modal" data-target="#addModal"> 
                            <button type="button" class="btn btn-success">
                                <i class="fa-solid fa-plus"></i>
                                <!-- Thêm -->
                            </button>
                        </a>
                        <a class="dropdown-item d-inline-block btn-update" @click="Edit" :data-id="item.ID" href="#" data-toggle="modal" data-target="#updateModal"> 
                            <button type="button" @click="Edit" :data-id="item.ID" class="btn btn-warning">
                                <i @click="Edit" :data-id="item.ID" class="fa-solid fa-pen-to-square"></i>
                                <!-- Sửa -->
                            </button>
                        </a>
                        <a class="dropdown-item d-inline-block btn-delete" @click="Delete" :data-id="item.ID" href="#" data-toggle="modal" data-target="#deleteModal"> 
                            <button type="button" @click="Delete" :data-id="item.ID" class="btn btn-danger">
                                <i class="fa-solid fa-trash-can" @click="Delete" :data-id="item.ID"></i>
                                <!-- Xóa -->
                            </button>
                        </a>
                    </td>
                </template>
            </tr>
        </tbody>
    </table>

    <!-- Pagination -->
        <div class="content_paging">
            <nav aria-label="...">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link btn-prev disable" @click= "handleClickPrev" href="" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <li v-for="(item, index) in ArrayIndexDatas()" :key="index" :data-index='index + 1' class="page-item">
                        <template v-if="index === 0">
                            <a class="page-link page-select active" @click= "changePage" href="#">{{ item }}</a>
                        </template>
                        <template v-else>
                            <a class="page-link page-select" @click= "changePage" href="#">{{ item }}</a>
                        </template>
                    </li>
                    <li class="page-item">
                        <a class="page-link btn-next" @click= "handleClickNext" href="" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import AddModal from "../../../Layout/ModalPost/AddPost.vue"
import UpdateModal from "../../../Layout/ModalPost/UpdatePost.vue"
import DeleteModal from "../../../Layout/ModalPost/DeletePost.vue"

export default {
    components: {
        AddModal,
        UpdateModal,
        DeleteModal
    },

    created() {
        this.columnDatas = this.$store.getters.columnDataPost;
        this.datas = this.$store.getters.rowDataPost;
    },

    data() {
        return {
           columnDatas: [
                
           ],
           datas: [
               
           ],
           dataBinding: {
                ID: '',
                NamePost: '',
                OverviewPost: '',
                Status: '',
            },
           paging: {
               perPage: 10,
               currentPage: 1,
               start: 0,
               end: 10,
               totalPages: 10,
           },

           iddelete: Number,
           idedit: Number,
        }
    },
    methods: {
        Edit: function (e){
            this.idedit = e.currentTarget.getAttribute('data-id');
            console.log(this.idedit);
            this.$store.dispatch('getValueEditPost', this.idedit)
                .then((data)=>{
                    this.dataBinding = data
                });
        },

        Delete: function (e) {
            this.iddelete = e.currentTarget.getAttribute('data-id');
        },

        getCurrentPage: function(){
            this.paging.start = (this.paging.currentPage - 1) * this.paging.perPage;
            this.paging.end = this.paging.currentPage * this.paging.perPage;
        },

        handleClickPrev: function(e){
            e.preventDefault();
            window.scrollTo(0, 0);
            this.paging.totalPages = Math.ceil(this.datas.length / this.paging.perPage);
            this.paging.end = this.paging.perPage;
            this.paging.currentPage --;

            if(this.paging.currentPage <= 1){
                this.paging.currentPage = 1;
            }
            
            if(this.paging.currentPage === 1){
                e.target.classList.add('disable')
            }

            document.querySelector('.btn-next').classList.remove('disable')
            document.querySelector('.btn-next span').classList.remove('disable')

            const pageLink = document.querySelectorAll('.page-link.page-select');
            for(let i=0; i<pageLink.length; i++){
                pageLink[i].classList.remove('active');
            }

            let currentSelect = document.querySelector(`[data-index='${this.paging.currentPage}']`)
            currentSelect.querySelector('.page-link.page-select').classList.add('active');
            this.getCurrentPage()
        },
        
        handleClickNext: function(e){
            e.preventDefault();
            window.scrollTo(0, 0);
            this.paging.totalPages = Math.ceil(this.datas.length / this.paging.perPage);
            this.paging.end = this.paging.perPage;
            this.paging.currentPage ++;

            if(this.paging.currentPage > this.paging.totalPages){
                this.paging.currentPage = this.paging.totalPages
            }

            if(this.paging.currentPage === this.paging.totalPages){
                e.target.classList.add('disable')
            }
            document.querySelector('.btn-prev').classList.remove('disable')
            document.querySelector('.btn-prev span').classList.remove('disable')

            const pageLink = document.querySelectorAll('.page-link.page-select');
            for(let i=0; i<pageLink.length; i++){
                pageLink[i].classList.remove('active');
            }
            let currentSelect = document.querySelector(`[data-index='${this.paging.currentPage}']`)
            currentSelect.querySelector('.page-link.page-select').classList.add('active');

            this.getCurrentPage()
        },

        ArrayIndexDatas: function(){
            let indexDatas = []
            for (let i = 1; i <= Math.ceil(this.datas.length / this.paging.perPage); i++){
                indexDatas.push(i);
            }
            return indexDatas;
        },

        changePage: function(e){
            e.preventDefault();
            window.scrollTo(0, 0);
            this.paging.currentPage = e.target.innerText - 0;

            const pageLink = document.querySelectorAll('.page-link.page-select');
            for(let i=0; i<pageLink.length; i++){
                pageLink[i].classList.remove('active');
            }
            e.target.classList.add('active');

            if(e.currentTarget.innerText === '1'){
                document.querySelector('.page-link.btn-prev').classList.add('disable')
            }
            else{
                document.querySelector('.page-link.btn-prev').classList.remove('disable');
                document.querySelector('.btn-prev span').classList.remove('disable')
            }

            if(e.currentTarget.innerText == pageLink.length){
                document.querySelector('.page-link.btn-next').classList.add('disable')
            }
            else{
                document.querySelector('.page-link.btn-next').classList.remove('disable');
                document.querySelector('.btn-next span').classList.remove('disable')
            }

            this.getCurrentPage()
        }
    },
}
</script>

<style>
    .btn-add,
    .btn-update,
    .btn-delete{
        padding: 0;
        width: unset;
        margin-right: 50px;
    }

    .btn-add:hover,
    .btn-add:focus,
    .btn-update:hover,
    .btn-update:focus,
    .btn-delete:hover,
    .btn-delete:focus{
        background-color: unset;
    }

    #table-user table th, #table-user table td{
        vertical-align: baseline;
    }
</style>