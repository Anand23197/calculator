const inpField = document.getElementById('input');
const clear = document.getElementById('clr');
function result(num){
     inpField.value += num;
}

function res(){
    let answer = eval(inpField.value);
    inpField.value = answer;
}


function clr(){
    inpField.value = "";
}