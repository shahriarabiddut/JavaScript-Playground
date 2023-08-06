const searchFun = () => {
    //original
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');
    for(let i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName('td')[0];
        if(td){
            let textValue = td.textContent || td.innerHTML;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display="";
            }else{
                tr[i].style.display="none";
            }
        }
    }
};
const searchDegree = () => {
    //original
    let filter1 = document.getElementById('myInputDegree').value.toUpperCase();
    let myTable1 = document.getElementById('myTable');
    let tr1 = myTable1.getElementsByTagName('tr');
    for(let i=0;i<tr1.length;i++){
        let td1 = tr1[i].getElementsByTagName('td')[1];
        if(td1){
            let textValue1 = td1.textContent || td1.innerHTML;
            if(textValue1.toUpperCase().indexOf(filter1) > -1){
                tr1[i].style.display="";
            }else{
                tr1[i].style.display="none";
            }
        }
    }
};