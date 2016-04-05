//normal / nominal function
function init() {
		var name = "Bob Cobb";
		function displayName() {
			alert(name);
		}
		displayName();
}
init();

//closure
function makeFunc() {
	var name = "Mike Pike";
	function displayName() {
		alert(name);
	}
	return displayName;
}

var myFunc = makeFunc();
myFunc();


// function factory
// add5 and add10 are both closures
// they share the same function body definition but store
// different environments.
function makeAdder(x) {
	return function(y) {
		return x + y;
	};
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); 	// 7
console.log(add10(2)); 	// 12

//you can use closuere anywhere that you might normally
//use an object with only a single method.

function makeSizer(size) {
	return function() {
		document.body.style.fontSize = size + 'px';
	};
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

//public functions that can access private functions and variables, 
//using closures...also known as the "module pattern."

var counter = (function() {
	var privateCounter = 0;
	function changeBy(val) {
		privateCounter += val;
	}
	return {
		increment: function() {
			changeBy(1);
		},
		decrement: function() {
			changeBy(-1);
		},
		value: function() {
			return privateCounter;
		}
	};
})();

alert(counter.value());
counter.increment();
counter.increment();
alert(counter.value());
counter.decrement();
alert(counter.value());
