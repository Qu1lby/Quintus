// Initialisation des variables

var score_l1 = lireCookie("Lvl1");
	if (score_l1 == null){
		document.cookie = 'Lvl1=0; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l1 = "0";
	}

	score_l1 = parseInt(score_l1);

var score_l2 = lireCookie("Lvl2");
	if (score_l2 == null){
		document.cookie = 'Lvl2=0; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l2 = "0";
	}

	score_l2 = parseInt(score_l2);
	
var score_l3 = lireCookie("Lvl3");
	if (score_l3 == null){
		document.cookie = 'Lvl3=0; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l3 = "0";
	}

	score_l3 = parseInt(score_l3);
	
var score_l4 = lireCookie("Lvl4");
	if (score_l4 == null){
		document.cookie = 'Lvl4=0; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l4 = "0";
	}

	score_l4 = parseInt(score_l4);
	
var score_l5 = lireCookie("Lvl5");
	if (score_l5 == null){
		document.cookie = 'Lvl5=0; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		score_l5 = "0";
	}

	score_l5 = parseInt(score_l5);
