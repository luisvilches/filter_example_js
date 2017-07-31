class Data {
     constructor(data){
        this.data = data;
        this.myData = data;
     }
     getData(){
         return this.myData;
     }
     setData(newData){
        this.myData = newData;
     }
     filters(category){
        return this.myData = this.data.filter(item => {
            if(!category == "" || category == null || category == 'undefined'){
                return item.category == category;
            }else{
                return this.data;
            }
        })
     }
     iterar(func){
         return this.myData.map(func).join('');
     }
     componente(name,tmp){
        t7.module(function(t7) {
            tmp
        })

        return t7.assign(`'${name}'`, name);
    }
     render(id,componente){
        document.getElementById(id).innerHTML = componente; 

     }
};

function html(html){
    return `${html}`
}

function onClick(html){
    return `onclick="${html}"`
}