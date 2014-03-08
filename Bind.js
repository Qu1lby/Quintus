// Raccourcis clavier du jeu

	function lireCookie(nom) {
      var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			var deb = c.split('=');
			if (deb [0] == nom){
				return deb[1];
			}
		}
	return null;
	}

// Initialisation des variables
	var scene_courante = null;
	var scene_prec = null;
	var pause = false;
	var echap = false;
	var replay = false;
	
// Scores
	include('score.js');

// Pause 'espace'
	Q.input.on("pause", function () {  
		if (scene_courante == "lvl1" || scene_courante == "lvl2" || 
		    scene_courante == "lvl3" || scene_courante == "lvl4" || 
			scene_courante == "lvl5" || scene_courante == "pause" ){
			if (!echap){
				if (!pause){
					Q.stageScene('PauseAff',3);
					Q.stage().pause();
					scene_prec = scene_courante;
					scene_courante = "pause";
				}else{
					Q.stageScene('Blanc',3);
					Q.stage().unpause();
					scene_courante=scene_prec;
					scene_prec = "pause";
				}
				pause = !pause;
			}
		}

		if (scene_courante == "GO"){	
			if (scene_prec == "lvl1"){
				Q.clearStages();
   				Q.stageScene('level1');
				Q.stageScene("gameStats",1);
				Q.stageScene('tut1',2);
				
				if (music){
				Q.audio.play('lvl1.mp3',{ loop: true });
				}
				
				scene_prec = 'GO';
				scene_courante = "lvl1";
			}
			
			if (scene_prec == "lvl2"){
				Q.clearStages();
   				Q.stageScene('level2');
				Q.stageScene("gameStats",1);
				
				if (music){
				Q.audio.play('lvl2.mp3',{ loop: true });
				}
				
				scene_prec = 'GO';
				scene_courante = "lvl2";
			}
			
			if (scene_prec == "lvl3"){
				Q.clearStages();
    			Q.stageScene('level3');
				Q.stageScene("gameStats",1);
				
				scene_prec = 'GO';
				scene_courante = "lvl3";
			}
			
			if (scene_prec == "lvl4"){
				Q.clearStages();
    			Q.stageScene('level4');
				Q.stageScene("gameStats",1);
				
				scene_prec = 'GO';
				scene_courante = "lvl4";
			}
			
			if (scene_prec == "lvl5"){
				Q.clearStages();
      			Q.stageScene('level5');
				Q.stageScene("gameStats",1);
				Q.stageScene("tut5",2);
				
				if(music){
					Q.audio.play('lvl5.mp3');
				}
				
				scene_prec = 'GO';
				scene_courante = "lvl5";
			}
		}
	});﻿
	
// Replay 'R'
	Q.input.on("replay", function () {  
		if(!replay){
			Q.stageScene('Repl',2);
		}else{
			Q.stageScene('Blanc',2);
		}
		replay = !replay;
	});﻿	
		

// Cookie Musique 		
	var music = lireCookie("Musique");
	if (music == null){
		document.cookie = 'Musique=true; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
		music = true;
	}

	if (music == "false"){
		music = false;
	}
	
// Musique 'M'
	Q.input.on("musique", function () {  
		if (scene_courante != null && !pause && !music){	
			if (scene_courante == "lvl1"){
				Q.audio.play('lvl1.mp3',{ loop: true });
				document.cookie = 'Musique=true; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
				music = true;
			}
			
			if (scene_courante == "lvl2"){
				Q.audio.play('lvl2.mp3',{ loop: true });
				document.cookie = 'Musique=true; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
				music = true;
			}
			
			if (scene_courante == "lvl3"){
			}
			
			if (scene_courante == "lvl4"){
			}
			
			if (scene_courante == "lvl5"){
				Q.audio.play('lvl5.mp3',{ loop: true });
				document.cookie = 'Musique=true; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
				music = true;
			}
			
		}else{
			Q.audio.stop(); 
			document.cookie = 'Musique=false; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
			music = false;
		}
	});﻿	
		
// Echap
	Q.input.on("echap", function () {  
		if (scene_courante == "lvl1" || scene_courante == "lvl2" || 
		    scene_courante == "lvl3" || scene_courante == "lvl4" || 
			scene_courante == "lvl5" || scene_courante == "pause" ){
			if (!pause){
				if (!echap){
					Q.stageScene('Echp',2);
				}else{
					Q.stageScene('Blanc',2);	
				}
				echap = !echap;
			}
		}
	});﻿