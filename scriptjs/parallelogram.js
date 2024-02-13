function calculateParallelogramArea(){
    //calculate Base value
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBase.value;
    const parallelBase = parseFloat(parallelogramBaseText);

    //calculate height value
    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeight.value;
    const parallelHeight = parseFloat(parallelogramHeightText)

    //calculate result
    const parallelArea = parallelBase*parallelHeight;

    //display result 
    const parallelogramAreaSpan = document.getElementById('parallelogram-area-result');
    parallelogramAreaSpan.innerText = parallelArea;

}