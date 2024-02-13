function calculateRhombusArea(){
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');
    const rhombusArea = 0.5*d1*d2;
    
    //display result
    setInnerTextById('rhombus-area-result', rhombusArea)
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText =inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}