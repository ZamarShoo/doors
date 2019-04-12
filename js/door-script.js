var selectedTypeOne = "smooth";
var selectedColorOne = "white";
var selectedValueTypeOne = 99000;
var selectedValueColorOne = 0;
var valueOne = 99000;

var selectedTypeTwo = "circle";
var selectedColorTwo = "white";
var selectedValueTypeTwo = 122000;
var selectedValueColorTwo = 0;
var valueTwo = 122000;

var selectedTypeThree = "rectangle";
var selectedColorThree = "white";
var selectedValueTypeThree = 101000;
var selectedValueColorThree = 0;
var valueThree = 101000;


function colorFind(color) {
    switch(color) {
        case 'white':
            return "белый RAL 9016";
        case'blue':
            return "серый антрацит RAL 7016";
        case 'brown':
            return "коричневый RAL 8028";
        case 'gray':
            return "Титан металлик CH 703";
        case 'tree':
            return "Золотой дуб";
        case 'dark-tree':
            return "Темный дуб";
        case 'dark-brown':
            return "Ночной дуб";
        default: break;
    }
}

function typeFind(type) {
    switch(type) {
        case 'smooth':
            return "010";
        case 'small':
            return "015";
        case 'big':
            return "515";
        case 'circle':
            return "700";
        case 'square':
            return "810 S";
        case 'moon':
            return "900 S";
        case 'rectangle':
            return "700A";
        case 'transparent':
            return "750F";
    }
}


function ownDoor(door, color, type, idPrice, idParam, value) {

    document.getElementById(`${door}`).src = `./img/${color}-door-${type}.png`;
    document.getElementById(`${idPrice}`).innerHTML = `${value}`;
    document.getElementById(`${idParam}`).innerHTML = `${colorFind(color)} мотив ${typeFind(type)}`;
}

function changeType(typ, number, valueTyp) {
    switch(number){
        case 1:
            selectedTypeOne = typ;
            selectedValueTypeOne = valueTyp;
            valueOne = selectedValueTypeOne + selectedValueColorOne;
            ownDoor("door1", selectedColorOne, selectedTypeOne, "price-1", "param-1", valueOne);
            break;

        case 2:
            selectedTypeTwo = typ;
            selectedValueTypeTwo = valueTyp;
            valueTwo = selectedValueTypeTwo + selectedValueColorTwo;
            ownDoor("door2", selectedColorTwo, selectedTypeTwo, "price-2", "param-2", valueTwo);
            break;

        case 3:
            selectedTypeThree = typ;
            selectedValueTypeThree = valueTyp;
            valueThree = selectedValueTypeThree + selectedValueColorThree;
            ownDoor("door3", selectedColorThree, selectedTypeThree, "price-3", "param-3", valueThree);
            break;

        default: break;
    }
}

function changeColorOne(col, valueCol) {
    document.getElementById("block-1").src=`./img/${col}-door-smooth.png`;
    document.getElementById("block-2").src = `./img/${col}-door-small.png`;
    document.getElementById("block-3").src = `./img/${col}-door-big.png`;
    selectedColorOne = col;
    selectedValueColorOne = valueCol;
    valueOne = selectedValueTypeOne + selectedValueColorOne;
    ownDoor("door1", selectedColorOne, selectedTypeOne, "price-1", "param-1", valueOne);
}

function changeColorTwo(col, valueCol) {
    document.getElementById("block-4").src = `./img/${col}-door-circle.png`;
    document.getElementById("block-5").src = `./img/${col}-door-square.png`;
    document.getElementById("block-6").src = `./img/${col}-door-moon.png`;
    selectedColorTwo = col;
    selectedValueColorTwo = valueCol;
    valueTwo = selectedValueTypeTwo + selectedValueColorTwo;
    ownDoor("door2", selectedColorTwo, selectedTypeTwo, "price-2", "param-2", valueTwo);
}

function changeColorThree(col, valueCol) {
    document.getElementById("block-7").src = `./img/${col}-door-rectangle.png`;
    document.getElementById("block-8").src = `./img/${col}-door-transparent.png`;
    selectedColorThree = col;
    selectedValueColorThree = valueCol;
    valueThree = selectedValueTypeThree + selectedValueColorThree;
    ownDoor("door3", selectedColorThree, selectedTypeThree, "price-3", "param-3", valueThree);
}