
var button = document.querySelector('button');
var divOutput = document.querySelector('.output');
//these will return true or false
var gramsBtn = document.getElementById('grams');
var ouncesBtn = document.getElementById('oz');

//add eventlistener
button.addEventListener('click', () => {
	var caloriesValue = document.getElementById('caloriesInput').value;
	//caloriesValue = caloriesValue;
	var weightValue = document.getElementById('weightInput').value;
	let weight = parseInt(weightValue);
	let calories = parseInt(caloriesValue);
	//reset to not have red warnings, and to have radio's unchecked
	redOff();

	if (isNaN(caloriesValue) || caloriesValue == '') {
		divOutputRed();
		calInputToggleRed();
		divOutput.textContent = 'Please fill in the calories!';
	} else if (isNaN(weightValue) || weightValue == '') {
		divOutputRed();
		weightInputToggleRed();
		divOutput.textContent = 'Please fill in the weight!';
	} else if (/*caloriesValue !== '' && weightValue !== '' &&*/ (gramsBtn.checked)) {
		doGramMath(weight, calories);
		gramsBtn.checked = false;
	} else if (/*caloriesValue !=='' && weightValue !== '' &&*/ (ouncesBtn.checked)) {
		doOuncesMath(weight, calories);
		ouncesBtn.checked = false;
	} 
	//if everything is not filled in...
	else {
			divOutputRed();
			toggleRed();
			divOutput.textContent = 'Please choose a weight type from the radio button!';
		}
	}
)
function doGramMath(weight, calories) {
	var gramOutput = (28/weight) * calories;
	console.log(gramOutput);
	divOutput.textContent = gramOutput.toFixed(2) + ' calories per ounce.';
	//return gramOutput;
}
//ounces
function doOuncesMath(weight, calories) {
	var ouncesOutput = (1/weight) * calories;
	console.log(ouncesOutput);
	divOutput.textContent = ouncesOutput.toFixed(2) + ' caloies per ounce.';
	//return ouncesOutput;
}
function divOutputRed () {
	document.querySelector('.output').classList.add('red');
}
function toggleRed() {
	document.querySelector('#unitsTitle').classList.add('red');
}
function redOff() {
	document.querySelector('#unitsTitle').classList.remove('red');
	document.querySelector('.output').classList.remove('red');
	document.getElementById('calories').classList.remove('red');
	document.getElementById('weight').classList.remove('red');
}
function calInputToggleRed() {
	document.getElementById('calories').classList.add('red');
	divOutput.textContent = 'Please fill in the calories box!';
}
function weightInputToggleRed() {
	document.getElementById('weight').classList.add('red');
	divOutput.textContent = 'Please fill in the weight!';
}