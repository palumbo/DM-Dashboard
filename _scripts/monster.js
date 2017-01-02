//////////////////////////////
// SETTING GLOBAL VARIABLES //
//////////////////////////////

var name = $("#monster-name").html(),
	hp = $("#hp").html();



// listening to select function
$("select").change(function() {
	var m = $(this).val(); 
	console.log(m); 
	 
	for (var i = 1; i <= m; i++) { 
		console.log(name + i); 
		$("#battleground").append("<input type='text' size='20' placeholder='" + name + " Name/Location' id='" + name + "'>");
		$("#battleground").append("<input type='number' value='7' id='" + name + "' class='dmg'>");
		$("#battleground").append("<br>");
	}
	
	$(".dmg").change(function(){
		var h = $(this).val(); 
		console.log(h); 
		
		if (h <= 0) { 
			console.log("less than"); 
			$(this).css("background-color", "red");  
		} else { 
			$(this).css("background-color", "#eee"); 
		}
	})
})
	












////////////////
// PASTE BIN //
///////////////

/*
var monsterName = document.getElementById("monster-name"),
	hp = document.getElementById('hp'),
	bg = document.getElementById('battleground'),
	qty = document.getElementById('monster-quantity');
*/


/*
$(".dmg").change(function() {
		var h = $(this).val(); 			
		console.log(hp);
	
		if (h <= 0) { 
			$(this).addClass("dead");  
		} else { 
			$(this).removeClass("dead"); 
		}
	})
*/