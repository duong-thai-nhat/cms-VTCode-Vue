import { projectData } from './data'


const store = {
    state:  {
        projectData,
    },
    getters: {
        columnData: (state)=>{
            return state.projectData.columnData
        },
        rowData: (state)=>{
            return state.projectData.rowData
        },  
    },
    mutations: {
        // projectMutations: projectMutations,
        delete(state, id) {
            for(let i=0; i<state.projectData.rowData.length; i++){
                if( id === state.projectData.rowData[i].ID ){
                    console.log(state.projectData.rowData[i].ID);
                    state.projectData.rowData.splice(i, 1);
                }
            }
        },
            
        add(state, item){
            state.projectData.rowData.push(item);
        },

        edit(state, item){
            for(let i=0; i<state.projectData.rowData.length; i++){
                if( state.projectData.rowData[i].ID === item.ID ){
                    state.projectData.rowData[i] = item
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