const button = document.getElementById('button');
const body = document.querySelector('body');
const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hex_value = document.getElementById('hex');
const copyCode = document.getElementById('copyCode');

body.style.backgroundColor = '#000000';
hex_value.innerHTML = '#000000';
button.addEventListener('click', function(){
    let hex_key = '#';
    for(let i=0; i<6; i++){
        const index = Math.floor(Math.random() * hex.length);
        hex_key = hex_key + hex[index];
    }
    hex_value.innerHTML = hex_key;
    document.getElementById('hexCode').value = hex_key;
    body.style.background= hex_key;
    body.style.transition = '1s';
});

copyCode.addEventListener('click', function(){
    let hex = document.getElementById('hexCode');

    hex.select();
    hex.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(hex.value);
    alert('Copied Hex Color : ' + hex.value);
});
