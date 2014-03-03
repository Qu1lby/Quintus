// Fenêtre de fin mais mort -------------------------------------------
	Q.scene("endGame",function(stage) {
		var background = new Q.TileLayer({
		dataAsset: "men.tmx",
		layerIndex: 0,
		sheet: "tilesmenu",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
        
		stage.insert(background);
		
		Q.audio.stop();

		if(music){
			Q.audio.play("rire.mp3");
		}
		
		var GameoV = stage.insert(new Q.UI.Container({
                fill: "rgb(225,225,225)",
                x: wi/2,
                y: hi-(hi/6)-20,
                border: 1,
                shadow: 3,
                shadowColor: "rgb(160,160,160)",
                w: wi/4,
                h: 150
                })
            );
			
		var mort = stage.insert(new Q.UI.Button({
			fill: "transparent",
			asset: "tetedemort.png",
        	x: wi/2,
        	y: hi-(hi/6)-175,
   		}));
		
		var msge = stage.insert(new Q.UI.Text({ 
                label: "Game Over",
                x: 0,
                y: -30
        }),GameoV);
        
		var msg = stage.insert(new Q.UI.Button({ 
                label: "Espace",
                color: "white",
				border: 1,
                shadow: 3,
                shadowColor: "rgb(160,160,160)",
                x: 0,
                y: 28,
				fill: "rgb(160,160,160)"
        }),GameoV);
		
		msg.on("click",function() {
       	if (scene_courante != null){	
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
		}
		});
		
	});
	
// Fenêtre de fin mais victoire -------------------------------------------
	Q.scene("GoodGame",function(stage) {
					
		var background = new Q.TileLayer({
			dataAsset: "men.tmx",
			layerIndex: 0,
			sheet: "tilesmenu",
			tileW: 70, tileH: 70,
			type: Q.SPRITE_NONE });
        
		stage.insert(background);
		
		Q.audio.stop();

		if(music){
			Q.audio.play("fin.mp3");
		}	
		
		var mort = stage.insert(new Q.UI.Button({
			fill: "transparent",
			asset: "prof.png",
        	x: wi/2,
        	y: hi-(hi/6)-200,
   		}));

		var GameoV = stage.insert(new Q.UI.Container({
                fill: "rgb(225,225,225)",
                x: wi/2,
                y: hi-(hi/6)-20,
                border: 1,
                shadow: 3,
                shadowColor: "rgb(160,160,160)",
                w: wi/4,
                h: 150
                })
            );
		
		var msge = stage.insert(new Q.UI.Text({ 
                label: "Bien joué !",
                x: 0,
                y: -30
        }),GameoV);
        
		var msg = stage.insert(new Q.UI.Button({ 
                label: "Continue",
                color: "white",
				border: 1,
                shadow: 3,
                shadowColor: "rgb(160,160,160)",
                x: 0,
                y: 28,
				fill: "rgb(160,160,160)"
        }),GameoV);
		
		msg.on("click",function() {
       		Q.clearStages();
   			Q.stageScene('niveau');
			
			Q.audio.stop();
			music = false;
			
			scene_prec = scene_courante
			scene_courante = "niveau";
			echap = !echap;
		});

	});
		