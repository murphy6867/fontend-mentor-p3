
function Add2() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let result = a + b;
    
    document.getElementById("summary").textContent = 'Result ' + result;

}