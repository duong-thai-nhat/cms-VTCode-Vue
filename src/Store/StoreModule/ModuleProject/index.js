import { userData } from './data'


const store = {
    state:  {
        userData,
    },
    getters: {
        columnData: (state)=>{
            return state.userData.columnData
        },
        rowData: (state)=>{
            return state.userData.rowData
        },  
    },
    mutations: {
        // projectMutations: projectMutations,
        delete(state, id){
            state.userData.rowData.splice(id, 1);
            console.log(state.userData.rowData);
        },

        add(state, item){
            state.userData.rowData.push(item);
        },

        edit(state, item){
            for(let i=0; i<state.userData.rowData.length; i++){
                if( state.userData.rowData[i].ID === item.ID ){
                    state.userData.rowData[i] = item
                }
            }
        },
    },
    actions: {
        delete({commit}, data){
            commit('delete', data)
        },

        add({commit}, data){
            commit('add', data)
        },
        
        getValueEdit({getters}, id){
            return new Promise((resolve)=>{
                resolve(getters.rowData.find((value)=>value.ID === id));
            });
        },
        
        edit({commit}, data){
            commit('edit', data)
        },
    }
} 

export default store