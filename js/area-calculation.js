function calculateTriangleArea() {
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    if (isNaN(base) || isNaN(height)) {
        alert('Please Insert a Number');
        return;
    }

    const area = 0.5 * base * height;
    console.log(area);

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle', area);
}


function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);


    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);


    if (isNaN(width) || isNaN(length)) {
        alert('Please Insert a Number');
        return;
    }

    const area = width * length;
    console.log(area);

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);
}


function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    if (isNaN(base) || isNaN(height)) {
        alert('Please Insert a Number');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    addToCalculationEntry('Parallelogram', area);
}


function calculateRhombusArea() {
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');
    if (isNaN(d1) || isNaN(d2)) {
        alert('Please Insert a Number');
        return;
    }
    const area = 0.5 * d1 * d2;
    setElementInnerText('rhombus-area', area);
    addToCalculationEntry('Rhombus', area);
}


function calculatePentagonArea() {
    const p = getInputValue('pentagon-p');
    const b = getInputValue('pentagon-b');
    if (isNaN(p) || isNaN(b)) {
        alert('Please Insert a Number');
        return;
    }
    const area = 0.5 * p * b;
    setElementInnerText('pentagon-area', area);
    addToCalculationEntry('Pentagon', area)
}


function calculateEllipseArea() {
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');
    if (isNaN(a) || isNaN(b)) {
        alert('Please Insert a Number');
        return;
    }
    const area = Math.PI * a * b;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
    addToCalculationEntry('Ellipse', areaTwoDecimal);
}


// reusable functions
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}


// add to calculation entry
function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class= "btn btn-sm btn-success">Convert </button>`;
    calculationEntry.appendChild(p);
}