// Initialisation des variables

var score_l1 = lireCookie(" Lvl1");
	if (score_l1 == null){
		document.cookie = 'Lvl1=0; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l1 = "0";
	}

	score_l1 = parseInt(score_l1);
	
var score_l1_tmp = 0;

var score_l1tps = lireCookie(" Lvl1tps");
	if (score_l1tps == null){
		document.cookie = 'Lvl1tps=00:00; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l1tps = "0:00";
	}
	
var score_l1tps_tmp = "";

// ------------------------------------------------------------------------------------
var score_l2 = lireCookie(" Lvl2");
	if (score_l2 == null){
		document.cookie = 'Lvl2=0; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l2 = "0";
	}

	score_l2 = parseInt(score_l2);

var score_l2_tmp = 0;

var score_l2tps = lireCookie(" Lvl2tps");
	if (score_l2tps == null){
		document.cookie = 'Lvl2tps=00:00; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l2tps = "0:00";
	}
	
var score_l2tps_tmp = "";
	
// ------------------------------------------------------------------------------------	
var score_l3 = lireCookie(" Lvl3");
	if (score_l3 == null){
		document.cookie = 'Lvl3=0; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l3 = "0";
	}

	score_l3 = parseInt(score_l3);
	
var score_l3_tmp = 0;


var score_l3tps = lireCookie(" Lvl3tps");
	if (score_l3tps == null){
		document.cookie = 'Lvl3tps=00:00; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l3tps = "0:00";
	}
	
var score_l3tps_tmp = "";

// ------------------------------------------------------------------------------------
var score_l4 = lireCookie(" Lvl4");
	if (score_l4 == null){
		document.cookie = 'Lvl4=0; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l4 = "0";
	}

	score_l4 = parseInt(score_l4);
	
var score_l4_tmp = 0;

var score_l4tps = lireCookie(" Lvl4tps");
	if (score_l4tps == null){
		document.cookie = 'Lvl4tps=00:00; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l4tps = "0:00";
	}
	
var score_l4tps_tmp = "";

// ------------------------------------------------------------------------------------	
var score_l5 = lireCookie(" Lvl5");
	if (score_l5 == null){
		document.cookie = 'Lvl5=0; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l5 = "0";
	}

	score_l5 = parseInt(score_l5);

var score_l5_tmp = 0;

var score_l5tps = lireCookie(" Lvl5tps");
	if (score_l5tps == null){
		document.cookie = 'Lvl5tps=00:00; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l5tps = "0:00";
	}
	
var score_l5tps_tmp = "";

// ------------------------------------------------------------------------------------
var score_t = lireCookie(" Total");
	if (score_t == null){
		document.cookie = 'Total=0; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_t = "0";
	}

	score_t = parseInt(score_t);


// ------------------------------------------------------------------------------------
Q.scene("Total", function(stage) {
	var Opacite = stage.insert(new Q.UI.Button({
       		fill: "rgb(0,0,0)",
			opacity : 0.8,
            x: 0,
            y: 0,
            w: wi*2,
            h: hi*2
    })
    );
	
	var fond = stage.insert(new Q.UI.Container({
            fill: "rgb(250,232,95)",
            x: wi/2 ,
            y: hi/2 +120,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/2-100,
            h: 250
    })
    );
			
	var niv = stage.insert(new Q.UI.Text({ 
        label: "Niveau 1 - "+score_l1tps+" ("+score_l1+")\nNiveau 2 - "+score_l2tps+" ("+score_l2+")\n"+
		"Niveau 3 - "+score_l3tps+" ("+score_l3+")\nNiveau 4 - "+score_l4tps+" ("+score_l4+")\n"+
		"  Boss - "+score_l5tps+" ("+score_l5+")\n\n    Total - "+score_t+" points",
		size : 20,
		family : "comic sans ms",
        x: 0,
        y: 10,
		
        }), fond
		);
	
	Opacite.on("click",function() {
		Q.stageScene('Blanc',2);
    });	
		
});	