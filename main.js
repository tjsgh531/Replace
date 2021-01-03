const inputText = document.getElementById('inputSection');
const Button= document.getElementById('submitBtn');

Button.addEventListener('click',onClick);

function onClick(event){
    const textValue = inputText.value;
    let result;
    result = textValue.replace(/-/g,'');
    window.alert(result);

    //e.preventDefault();//요놈 왜 안될까?
}