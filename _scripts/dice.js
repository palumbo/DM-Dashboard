// setting variables
var ctn = document.getElementById("dice-ctn")

// d20 function
function d20(){
	var d20 = document.getElementById('d20')
	var roll20 = document.getElementById('roll20')
	var roll = Math.floor(Math.random() * 21);
	
	// remove 0s
	if (roll == 0) { roll = 1; };
	
	// change color on critical hit
	if (roll === 20) { 
		d20.style.backgroundColor = "red";
		d20.style.color = "white";
	} else { 
		d20.style.backgroundColor = "white";
		d20.style.color = "black"; 
	}
	
	roll20.innerHTML = roll; 
}

// d8 function
function d8() { 
	// setting variables
	var roll8 = document.getElementById("roll8"); 
	var roll = Math.floor(Math.random() * 9); 
			
	// remove 0s
	if (roll == 0) { roll = 1; };
			
	roll8.innerHTML = roll; 
			
}; 

function d6() { 
	//setting variables 
	var roll6 = document.getElementById("roll6"); 
	var roll = Math.floor(Math.random() * 7); 
	
	// removes 0s
	if (roll == 0) { roll = 1; }; 
			
	roll6.innerHTML = roll; 
};

function d4() { 
	var roll = Math.floor(Math.random() * 5); 
	var roll4 = document.getElementById("roll4"); 
			
	// remove 0s
	if (roll == 0) { roll = 1; }; 
			
	roll4.innerHTML = roll; 	
};