// Raccourcis du jeu

	var scene_courante = null;
	var scene_prec = null;
	var pause = false;

	Q.input.on("pause", function () {  
		if (scene_courante == "lvl1" || scene_courante == "lvl2" || 
		    scene_courante == "lvl3" || scene_courante == "lvl4" || scene_courante == "pause" ){
			if (!echap){
				if (!pause){
					Q.stageScene('PauseAff',2);
					Q.stage().pause();
					scene_prec = scene_courante;
					scene_courante = "pause";
				}else{
					Q.stageScene('Blanc',2);
					Q.stage().unpause();
					scene_courante=scene_prec;
					scene_prec = "pause";
				}
				pause = !pause;
			}
		}
	});﻿	
		
		
	Q.input.on("replay", function () {  
		if (scene_courante != null && !pause){	
			if (scene_courante == "lvl1"){
				Q.clearStages();
				
				Q.audio.stop('lvl1.mp3');
				music = false;
				
   				Q.stageScene('level1');
				Q.stageScene("gameStats",1);
				Q.stageScene('tut1',2);
				Q.audio.play('lvl1.mp3',{ loop: true });
				music = true;
			}
			if (scene_courante == "lvl2"){
				Q.clearStages();
				
				Q.audio.stop('lvl2.mp3');
				music = false;
				
   				Q.stageScene('level2');
				Q.stageScene("gameStats",1);
				Q.audio.play('lvl2.mp3',{ loop: true });
				music = true;
			}
			if (scene_courante == "lvl3"){
				Q.clearStages();
    			Q.stageScene('level3');
				Q.stageScene("gameStats",1);
				music = true;
			}
			if (scene_courante == "lvl4"){
				Q.clearStages();
    			Q.stageScene('level4');
				Q.stageScene("gameStats",1);
				music = true;
			}
		}
	});﻿	
	
	
	var music = true;
	Q.input.on("musique", function () {  
		if (scene_courante != null && !pause && !music){	
			if (scene_courante == "lvl1"){
				Q.audio.play('lvl1.mp3',{ loop: true });
				music = true;
			}
			if (scene_courante == "lvl2"){
				Q.audio.play('lvl2.mp3',{ loop: true });
				music = true;
			}
			if (scene_courante == "lvl3"){
			}
			if (scene_courante == "lvl4"){
			}
		}else{
			Q.audio.stop(); 
			music = false;
		}
	});﻿	
		
		
	var echap = false
	Q.input.on("echap", function () {  
		if (scene_courante == "lvl1" || scene_courante == "lvl2" || 
		    scene_courante == "lvl3" || scene_courante == "lvl4" || scene_courante == "pause" ){
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