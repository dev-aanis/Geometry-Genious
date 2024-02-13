function calculateEllipseArea(){
    const a = getInputValueId('ellipse-a');
    const b = getInputValueId('ellipse-b');
    const 𝝅 =3.1416;
    const ellipseArea = 𝝅*a*b;
    //display result 
    setInnerTextById('ellipse-area-result',ellipseArea)
}
function getInputValueId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}