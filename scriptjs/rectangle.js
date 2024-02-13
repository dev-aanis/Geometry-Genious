function calculateRectangleArea(){
    //rectangle width value
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);

    //rectangle length value
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);

    //calculate rectangle area
    const area = width*length;

    //display result
    const rectangleAreaSpan = document.getElementById('rectangle-area-result');
    rectangleAreaSpan.innerText= area;

}