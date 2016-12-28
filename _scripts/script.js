// setting global variables
var monster = document.getElementById("monster-quantity"),
	bg = document.getElementById("battleground"); 
	
function deathwatch(m) {
	m.addEventListener("input", function(){
		console.log("input detected");
		if (m.value <= 0) { 
			m.style.backgroundColor = "red";
		} else { 
			m.style.backgroundColor = "white";
		}
	})	
};


// DOM event listener
document.addEventListener("DOMContentLoaded", function(){ 
	monster.addEventListener("input", function(){
		
		// create name and number input elements		
		for (var i = 0; i < monster.value; i++) { 
			var name = "name" + i; 
			var nameid = "goblinName" + i;
			name = document.createElement("input"); 
			name.setAttribute("type", "text"); 
			name.setAttribute("id", nameid);
			name.setAttribute("size", "20");
			name.setAttribute("placeholder", "Goblin Name/Location");  
			bg.appendChild(name); 
			var hp = "goblinHP" + i; 
			var hpid = "golinHP" + i; 
			hp = document.createElement("input"); 
			hp.setAttribute("type", "number")
			hp.setAttribute("id", hpid); 
			hp.setAttribute("value", "7");
			hp.setAttribute("onclick", "deathwatch(" + hpid + ")");
			bg.appendChild(hp);
			var br = document.createElement("br"); 
			bg.appendChild(br);  
		}
	})
	
});

// pop-up as a test
window.onload = function(){ 
	setTimeout(hello, 3000);
}

function hello(){ 
	alert("Hello"); 
}; 