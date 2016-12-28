// setting global variables
var monsterName = document.getElementById("monster-name"),
	hp = document.getElementById('hp'),
	bg = document.getElementById('battleground'),
	qty = document.getElementById('monster-quantity');

function deathwatch(m){
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
	qty.addEventListener("input", function(){
		// test output
		// console.log(monsterName.innerHTML + i);
		
		for (var i = 0; i < qty.value; i++) {
			var name = "name" + i,
				nameid = monsterName.innerHTML + i;
			console.log(name, nameid); // testing output
			name = document.createElement("input");
			name.setAttribute("type", "text");
			name.setAttribute("id", nameid);
			name.setAttribute("size", "20");
			name.setAttribute("placeholder", monsterName.innerHTML + " Name/Location");
			bg.appendChild(name);
			var dmg = monsterName.innerHTML + "HP" + i;
			var hpid = dmg;
			dmg = document.createElement("input");
			dmg.setAttribute("type", "number");
			dmg.setAttribute("id", hpid);
			dmg.setAttribute("value", hp.innerHTML);
			dmg.setAttribute("onclick", "deathwatch(" + hpid + ")");
			bg.appendChild(dmg);
			var br = document.createElement("br");
			bg.appendChild(br);
		}
		
	})
})