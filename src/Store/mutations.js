export const projectMutations = {
    delete(state, id){
        state.projectData.rowData.splice(id, 1);
        console.log(state.projectData.rowData);
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
}