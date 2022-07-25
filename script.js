let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let idInput=document.querySelector('#ID')
let nameInput = document.querySelector('#name');
let mobileInput = document.querySelector('#mobile');
let emailInput = document.querySelector('#email');
let btndel=document.querySelector('.del');

let tablerows = [];

const printtabledata = function(){
        table.innerHTML =`<thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Email_id</th>
                <th>Delete</th>
            </tr>
            </thead>`;
        tablerows.forEach(function(row){
       
        let template = `
                <tr>
                    <td>${row.id}</td>
                    <td>${row.name}</td>
                    <td>${row.mobile}</td>
                    <td>${row.email}</td>
                    <td><button class="del" id="${row.id}"><i class="fa-solid fa-circle-trash"></i>Delete</button></td>
                     
                    
                    
            
                </tr>`;

    table.innerHTML += template;
})
}
printtabledata();
btnAdd.addEventListener('click', () => {

    let idd=Number(idInput.value);
    let nname = (nameInput.value);
    let mmobile = Number(mobileInput.value);
    let eemail = emailInput.value;
    const rowdata = {
        name: nname,
        id: idd,
        mobile: mmobile,
        email: eemail,
    };
    console.log(rowdata);
    if(rowdata.id==0 || rowdata.mobile==0 || rowdata.email=="" || rowdata.name==""){
        alert("Invalid Input");
        
    }
    else{
    tablerows.push(rowdata);

    printtabledata();
    printjson(tablerows);
}
      clearInput();  
    });
    
const printjson=function(tablerows){
    document.getElementById('json_data').textContent="";
    if(tablerows.length!=0)document.getElementById('json_data').innerHTML+=`[<br>`;
    tablerows.forEach(function(row){
        document.getElementById('json_data').innerHTML+=`{
            <br>
            "id" : "${row.id}",
            <br>
            "name" : "${row.name}",
            <br>
            "mobile" : "${row.mobile}",
            <br>
            "email" : "${row.email}",
            <br>
        },<br>`
    });
    if(tablerows.length!=0)document.getElementById('json_data').innerHTML+=`]`;

}

document.querySelector('body').addEventListener('click',function(e){
    if(e.target.classList.contains('del')){
        const findid = e.target.getAttribute('id');
        console.log(tablerows.length);
        for(let i=0;i<tablerows.length;i++){
            if(tablerows[i].id==findid){
                tablerows.splice(i,1);
                console.log(tablerows);
                break;
            }
        }
        printtabledata();
        printjson(tablerows);
    }
})
function clearInput(){
    idInput.value="";
    nameInput.value="";
    mobileInput.value="";
    emailInput.value="";
}
{/* <button class="del" id="${row.id}"></button> */}