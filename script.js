const display = document.getElementById("nums");
display.addEventListener("keypress", function (e) {
    if (e.key === "Enter") { 
        resultOfDisplay();
    }
});

function add(val) {
    document.getElementById('nums').value += val;
}

function clearOfDisplay() {
    document.getElementById('nums').value = '';
}

function copyOfDisplay(){
    textForCopy = document.getElementById('nums')
    navigator.clipboard.writeText(textForCopy.value)
}

function delOne() {
    document.getElementById('nums').value = document.getElementById('nums').value.slice(0,-1);
}

function resultOfDisplay() {
    try {
            document.getElementById('nums').value = eval(document.getElementById('nums').value);
        } catch (error) {
            document.getElementById('nums').value = 'Error';
        }
}