function calculatePentagonArea(){
    const p = getInputValueById('pentagon-p');
    const b = getInputValueById('pentagon-b');
    const pentagonArea = 0.5*p*b;

    //display result
    setInnerTextById('pentagon-area-result', pentagonArea);
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}