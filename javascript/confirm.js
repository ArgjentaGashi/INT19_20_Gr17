$(document).ready(function(){
    Konfirmimi.render("Want to see the latest discounts?")
});


function customConf(){
	this.render = function(dialog){
		var winW = window.innerWidth;
	    var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
	    var dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
	    dialogoverlay.style.height = winH+"px";
		dialogbox.style.left = (winW/2) - (550 * .5)+"px";
	    dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        
		document.getElementById('dialogboxhead').innerHTML='THIS YEARS\' SPECIAL OFFERS!';
	    document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = 
        '<button onclick="Konfirmimi.yes()">Yes</button> <button onclick="Konfirmimi.no()">No</button>';
    }
    this.no = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
	this.yes = function(){
		window.location.href="zbritjet.html"
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}

var Konfirmimi= new customConf();
