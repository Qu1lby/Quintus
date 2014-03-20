// Pause
	Q.scene("PauseAff", function(stage) {
		var Opacite = stage.insert(new Q.UI.Container({
        		fill: "rgb(0,0,0)",
				opacity : 0.7,
                x: 0,
                y: 0,
                w: wi*2,
                h: hi*2
                })
            );
			
		var Container = stage.insert(new Q.UI.Container({
        		fill: "transparent",
                x: wi/2,
                y: hi/2,
                w: wi,
                h: hi
                })
            );
			
		var Fond = stage.insert(new Q.UI.Container({
                fill: "rgb(255,178,102)",
                x: wi/2,
                y: hi/2,
                border: 1,
                w: wi/3.5,
                h: 100
                })
            );
			
		var lives = stage.insert(new Q.UI.Text({ 
                label: "P A U S E",
				size : 40,
                x: 0,
                y: 0,
                }),Fond);
	});
	
// Touche echap
	Q.scene("Echp", function(stage) {
		var Choix = stage.insert(new Q.UI.Container({
                fill: "rgb(204,255,153)",
                x: wi/2,
                y: hi-(hi/6)-50,
                border: 1,
                w: wi/4,
                h: 120
                })
            );
			
		var msg = stage.insert(new Q.UI.Button({ 
                label: "Menu Principal",
                x: 0,
                y: -25,
        }),Choix);
		
		var msg2 = stage.insert(new Q.UI.Button({ 
                label: "Retour",
                x: 0,
                y: 25
        }),Choix);
		
		msg.on("click",function() {
       		Q.clearStages();
			
/*			if (score_t!= ? ){
   				Q.stageScene('niveau2');
			}else Q.stageScene('niveau');
*/			
			Q.stageScene('niveau');
			Q.audio.stop();
			
			scene_prec = scene_courante
			scene_courante = "niveau";
			echap = !echap;
		});
		
		msg2.on("click",function() {
       		Q.stageScene('Blanc',2);	
			echap = !echap;
		});
	});
	
// Touche R
	Q.scene("Repl", function(stage) {
			
		var Choix = stage.insert(new Q.UI.Container({
                fill: "rgb(94,160,250)",
                x: wi/2,
                y: hi/2,
                border: 1,
                w: wi/3,
                h: 150
                })
            );
		
		var lab = stage.insert(new Q.UI.Button({ 
                label: "Recommencer le niveau ?",
                x: 5,
                y: -25
        }),Choix);
		
		var msg = stage.insert(new Q.UI.Button({ 
                label: "Oui",
                x: -50,
                y: 25,
        }),Choix);
		
		var msg2 = stage.insert(new Q.UI.Button({ 
                label: "Non",
                x: 50,
                y: 25
        }),Choix);
		
		msg.on("click",function() {
       		if (scene_courante != null && !pause){
				replay = false;
			if (scene_courante == "lvl1"){
				Q.clearStages();
      			Q.stageScene('level1');
				Q.stageScene("gameStats",1);
				
				Q.audio.stop();
				if(music){
					Q.audio.play('lvl1.mp3',{ loop: true });
				}
				
				Q.stageScene('tut1',2);
				
				scene_courante = "lvl1";
				scene_prec = "niveau";
			}
			
			if (scene_courante == "lvl2"){
				Q.clearStages();
      			Q.stageScene('level2');
				Q.stageScene("gameStats",1);
				
				Q.audio.stop();
				if(music){
					Q.audio.play('lvl2.mp3',{ loop: true });
				}
				
				scene_courante = "lvl2";
				scene_prec = "niveau";
			}
			
			if (scene_courante == "lvl3"){
				Q.clearStages();
      			Q.stageScene('level3');
				Q.stageScene("gameStats",1);
				
				Q.audio.stop();
				if(music){
					Q.audio.play('lvl3.mp3',{ loop: true });
				}
			
				scene_courante = "lvl3";
				scene_prec = "niveau";
			}
			
			if (scene_courante == "lvl4"){
				Q.clearStages();
      			Q.stageScene('level4');
				Q.stageScene("gameStats",1);
				
				Q.audio.stop();
/*				if(music){
					Q.audio.play('lvl4.mp3',{ loop: true });
			}
*/				
				scene_courante = "lvl4";
				scene_prec = "niveau";
			}
			
			if (scene_courante == "lvl5"){
				Q.clearStages();
      			Q.stageScene('level5');
				Q.stageScene("gameStats",1);
				Q.stageScene("tuto5",2);
				
				Q.audio.stop();
				if(music){
					Q.audio.play('lvl5.mp3',{ loop: true });
				}
				
				scene_courante = "lvl5";
				scene_prec = "niveau";
			}
			
		}
		});
		
		msg2.on("click",function() {
       		Q.stageScene('Blanc',2);	
			replay = false;
		});
	});	