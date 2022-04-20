export const getCurrentPage=()=>{
    this.paging.start = (this.paging.currentPage - 1) * this.paging.perPage;
    this.paging.end = this.paging.currentPage * this.paging.perPage;
}

export const handleClickPrev=(e)=>{
    e.preventDefault();
    this.paging.totalPages = Math.ceil(this.datas.length / this.paging.perPage);
    this.paging.end = this.paging.perPage;
    this.paging.currentPage --;

    if(this.paging.currentPage <= 1){
        this.paging.currentPage = 1
    }

    
    getCurrentPage()
}

export const handleClickNext=()=>{
    e.preventDefault();
    this.paging.totalPages = Math.ceil(this.datas.length / this.paging.perPage);
    this.paging.end = this.paging.perPage;
    this.paging.currentPage ++;

    if(this.paging.currentPage > this.paging.totalPages){
        this.paging.currentPage = this.paging.totalPages
    }

    getCurrentPage()
}

export const ArrayIndexDatas=()=>{
    let indexDatas = []
    for (let i = 1; i <= this.datas.length/this.paging.perPage + 1; i++){
        indexDatas.push(i);
    }
    return indexDatas;
}

export const changePage=(e)=>{
    e.preventDefault();
    this.paging.currentPage = e.target.innerText - 0;
    this.getCurrentPage()
    // for(let i=0; i<this.paging.currentPage.length; i++){
    //     console.log(e.target.innerText)
    // }
}