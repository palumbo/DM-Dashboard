// setting GLOBAL variables
	var monster = document.getElementById("monster-quantity"); 
	var bg = document.getElementById("battleground"); 

	function deathwatch(m){
		m.addEventListener("input", function(){ 
			console.log("something happened"); 
			if (m.value <= 0) { 
				m.style.backgroundColor = "red"; 
			} else { 
				m.style.backgroundColor = "white"; 
			}
		})
	}
	
	// DOM event listerner
	document.addEventListener("DOMContentLoaded", function(){ 
		monster.addEventListener("input", function(){ 
			console.log(monster.value); 
			
			var i; 

			for (i = 0; i < monster.value; i++) { 
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