
import { createStore } from 'vuex'
import { projectData } from './dataProject'
import { userData } from './dataUser'
import { postData } from './dataPost'
import { serviceData } from './dataService'
import { customerData } from './dataCustomer'
// import moduleProject from './StoreModule/ModuleProject/index'
// import moduleUser from './StoreModule/ModuleUser/index'
// import { gettersProject } from './getters'
// import { projectMutations } from './mutations'


const store = createStore(
    {
        state: {
            projectData,
            
            userData,

            postData,

            serviceData,

            customerData,

            // UserLogin
            Userlogin: {
                username: 'Nhat',
                userIsAuthorized: false,
            }
        },
        getters: {
            // Project
            columnDataProject: (state) => {
                return state.projectData.columnData
            },
            rowDataProject: (state) => {
                return state.projectData.rowData
            },

            // User
            columnDataUser: (state) => {
                return state.userData.columnData
            },
            rowDataUser: (state) => {
                return state.userData.rowData
            },

            // Post
            columnDataPost: (state) => {
                return state.postData.columnData
            },
            rowDataPost: (state) => {
                return state.postData.rowData
            },

            // Service
            columnDataService: (state) => {
                return state.serviceData.columnData
            },
            rowDataService: (state) => {
                return state.serviceData.rowData
            },

            // Customer
            columnDataCustomer: (state) => {
                return state.customerData.columnData
            },
            rowDataCustomer: (state) => {
                return state.customerData.rowData
            },

            // UserLogin
            Userlogin: (state) => {
                return state.Userlogin
            }
        },
        mutations: {
            // Project
            deleteProject(state, id) {
                for(let i=0; i<state.projectData.rowData.length; i++){
                    if( id === state.projectData.rowData[i].ID ){
                        state.projectData.rowData.splice(i, 1);
                    }
                }
            },
            addProject(state, item) {
                state.projectData.rowData.push(item);
            },
            editProject(state, item) {
                for (let i = 0; i < state.projectData.rowData.length; i++) {
                    if (state.projectData.rowData[i].ID === item.ID) {
                        state.projectData.rowData[i].ProjectName = item.ProjectName;
                        state.projectData.rowData[i].ProjectContent = item.ProjectContent;
                        state.projectData.rowData[i].ProjectType = item.ProjectType;
                    }
                }
            },

            // User
            deleteUser(state, id) {
                for(let i=0; i<state.userData.rowData.length; i++){
                    if( id === state.userData.rowData[i].ID ){
                        state.userData.rowData.splice(i, 1);
                    }
                }
            },
            addUser(state, item) {
                state.userData.rowData.push(item);
            },
            editUser(state, item) {
                for (let i = 0; i < state.userData.rowData.length; i++) {
                    if (state.userData.rowData[i].ID === item.ID) {
                        state.userData.rowData[i].Username = item.Username;
                        state.userData.rowData[i].Email = item.Email;
                        state.userData.rowData[i].Password = item.Password;
                    }
                }
            },

            // Post
            deletePost(state, id) {
                for(let i=0; i<state.postData.rowData.length; i++){
                    if( id === state.postData.rowData[i].ID ){
                        state.postData.rowData.splice(i, 1);
                    }
                }
            },
            addPost(state, item) {
                state.postData.rowData.push(item);
            },
            editPost(state, item) {
                for (let i = 0; i < state.postData.rowData.length; i++) {
                    if (state.postData.rowData[i].ID === item.ID) {
                        state.postData.rowData[i].NamePost = item.NamePost;
                        state.postData.rowData[i].OverviewPost = item.OverviewPost;
                        state.postData.rowData[i].Status = item.Status;
                    }
                }
            },

            // Service
            deleteService(state, id) {
                for(let i=0; i<state.serviceData.rowData.length; i++){
                    if( id === state.serviceData.rowData[i].ID ){
                        state.serviceData.rowData.splice(i, 1);
                    }
                }
            },
            addService(state, item) {
                state.serviceData.rowData.push(item);
            },
            editService(state, item) {
                for (let i = 0; i < state.serviceData.rowData.length; i++) {
                    if (state.serviceData.rowData[i].ID === item.ID) {
                        state.serviceData.rowData[i].NameService = item.NameService;
                        state.serviceData.rowData[i].Desc = item.Desc;
                    }
                }
            },

            // Customer
            deleteCustomer(state, id) {
                for(let i=0; i<state.customerData.rowData.length; i++){
                    if( id === state.customerData.rowData[i].ID ){
                        state.customerData.rowData.splice(i, 1);
                    }
                }
            },
            addCustomer(state, item) {
                state.customerData.rowData.push(item);
            },
            editCustomer(state, item) {
                for (let i = 0; i < state.customerData.rowData.length; i++) {
                    if (state.customerData.rowData[i].ID === item.ID) {
                        state.customerData.rowData[i].NameCustomer = item.NameCustomer;
                        state.customerData.rowData[i].NameReviewer = item.NameReviewer;
                        state.customerData.rowData[i].Position = item.Position;
                        state.customerData.rowData[i].Review = item.Review;
                    }
                }
            },

            // UserLogin
            editUserLogin(state, item) {
                state.Userlogin.username = item.firstName;
                state.Userlogin.userIsAuthorized = true;
            }
        },
        actions: {
            // Project
            deleteProject({ commit }, data) {
                commit('deleteProject', data)
            },
            addProject({ commit }, data) {
                commit('addProject', data)
            },
            getValueEditProject({ getters }, id) {
                return new Promise((resolve) => {
                    resolve(getters.rowDataProject.find((value) => value.ID === id));
                });
            },
            editProject({ commit }, data) {
                commit('editProject', data)
            },

            // User
            deleteUser({ commit }, data) {
                commit('deleteUser', data)
            },
            addUser({ commit }, data) {
                commit('addUser', data)
            },
            getValueEditUser({ getters }, id) {
                return new Promise((resolve) => {
                    resolve(getters.rowDataUser.find((value) => value.ID === id));
                });
            },
            editUser({ commit }, data) {
                commit('editUser', data)
            },

            // Post
            deletePost({ commit }, data) {
                commit('deletePost', data)
            },
            addPost({ commit }, data) {
                commit('addPost', data)
            },
            getValueEditPost({ getters }, id) {
                return new Promise((resolve) => {
                    resolve(getters.rowDataPost.find((value) => value.ID === id));
                });
            },
            editPost({ commit }, data) {
                commit('editPost', data)
            },

            // Service
            deleteService({ commit }, data) {
                commit('deleteService', data)
            },
            addService({ commit }, data) {
                commit('addService', data)
            },
            getValueEditService({ getters }, id) {
                return new Promise((resolve) => {
                    resolve(getters.rowDataService.find((value) => value.ID === id));
                });
            },
            editService({ commit }, data) {
                commit('editService', data)
            },

            // Customer
            deleteCustomer({ commit }, data) {
                commit('deleteCustomer', data)
            },
            addCustomer({ commit }, data) {
                commit('addCustomer', data)
            },
            getValueEditCustomer({ getters }, id) {
                return new Promise((resolve) => {
                    resolve(getters.rowDataCustomer.find((value) => value.ID === id));
                });
            },
            editCustomer({ commit }, data) {
                commit('editCustomer', data)
            },

            // UserLogin
            editUserLogin({ commit }, data) {
                commit('editUserLogin', data);
            }
        }
    }   ) 

export default store