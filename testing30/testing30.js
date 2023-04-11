var final = '';
var total = '';
var s = '';
decimalInput = document.getElementById("decimal-input");
decimalInput.placeholder = "whole number";
var initial = decimalInput.value;
var x = initial;
submit = document.getElementById("submit");
var answer = document.getElementById("answer");
var reverseOrder = function(i){
    return i.split('').reverse().join('')
}



submit.onclick = function(){


    
    final = '';
    total = '';
    s = '';

    initial = decimalInput.value;

if (initial < 0){
    x = initial/-1;
}else{
    x = initial;
}

while (x/2 >= 1/2) {

    if (x%2==0){
        x/=2;
        s='0';
        total+=s;
    } else if (x%2==1) {
        x = (x-1)/2;
        s='1';
        total+=s;
    }
}
final = reverseOrder(total);
answer.innerHTML = final;
console.log(final);

}