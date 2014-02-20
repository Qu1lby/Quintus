// Fenetre Menu Principal
	Q.scene("Debut", function(stage) {
		
		var background = new Q.TileLayer({ 
		dataAsset: "men.tmx",
		layerIndex: 0,
		sheet: "tilesmenu",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
		
        stage.insert(background);
		scene_courante="menu";
			
		var Menu = stage.insert(new Q.UI.Container({
			fill: "rgb(162,205,90)",
            x: wi/2,
            y: hi-(hi/6)-130,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/4.5,
            h: 50
		    })
        );
			
		var Menu2 = stage.insert(new Q.UI.Container({
		    fill: "rgb(246,163,19)",
            x: wi/2,
            y: hi-(hi/6)-50,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/4.5,
            h: 50	
		    })
        );
			
		var Menu3 = stage.insert(new Q.UI.Container({
		    fill: "rgb(160,160,160)",
            x: wi/2,
            y: hi-(hi/6)+30,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/4.5,
            h: 50
		    })
        );
		
		var men = stage.insert(new Q.UI.Button({ 
        	label: "Jouer",
            x: 0,
			y: 0,
        }),Menu);
				
		var sco = stage.insert(new Q.UI.Button({ 
        	label: "Scores",
            x: 0,
			y: 0,
        }),Menu2);
				
		var cred = stage.insert(new Q.UI.Button({ 
        	label: "Crédits",
            x: 0,
			y: 0,
        }),Menu3);
							
		men.on("click",function() {
			Q.clearStages();
      		Q.stageScene('niveau');
			scene_courante = "niveau";
			scene_prec = "menu";
     	});	
	});
		
		
// Choix du niveau 
	Q.scene("niveau", function(stage) {
			
		var background = new Q.TileLayer({ 
		dataAsset: "men.tmx",
		layerIndex: 0,
		sheet: "tilesmenu",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
		
        stage.insert(background);
			
		var Menu = stage.insert(new Q.UI.Container({
		    fill: "rgb(160,160,160)",
            x: wi/2 - wi/10,
            y: hi-(hi/6)-190,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
            h: 50
		    })
        );
			
		var Menu2 = stage.insert(new Q.UI.Container({
		    fill: "rgb(160,160,160)",
            x: wi/2 + wi/10,
            y: hi-(hi/6)-190,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
            h: 50	
		    })
        );
			
		var Menu3 = stage.insert(new Q.UI.Container({
		    fill: "rgb(160,160,160)",
            x: wi/2 - wi/10,
            y: hi-(hi/6)-110,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
            h: 50
		    })
        );
			
		var Menu4 = stage.insert(new Q.UI.Container({
			fill: "rgb(160,160,160)",
            x: wi/2 + wi/10,
            y: hi-(hi/6)-110,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
            h: 50
		    })
        );
			
		var Menu5 = stage.insert(new Q.UI.Container({
			fill: "rgb(160,160,160)",
            x: wi/2,
            y: hi-(hi/6)+30,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/4.5,
            h: 50
		    })
        );
		
		var un = stage.insert(new Q.UI.Button({ 
        	label: "LvL 1",
            x: 0,
			y: 0,
        }),Menu);
				
		var deux = stage.insert(new Q.UI.Button({ 
        	label: "LvL 2",
         	x: 0,
			y: 0,
        }),Menu2);
				
		var trois = stage.insert(new Q.UI.Button({ 
        	label: "LvL 3",
            x: 0,
			y: 0,
        }),Menu3);
				
		var quatre = stage.insert(new Q.UI.Button({ 
            label: "LvL 4",
            x: 0,
			y: 0,
        }),Menu4);
				
		var cinq = stage.insert(new Q.UI.Button({ 
        	label: "Retour",
            x: 0,
			y: 0,
        }),Menu5);
		
			un.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level1');
				Q.stageScene("gameStats",1);
				
				scene_courante = "lvl1";
				scene_prec = "niveau";
			});
				
			deux.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level2');
				Q.stageScene("gameStats",1);
				Q.audio.play('lvl2.mp3',{ loop: true });
				music = true;
				
				scene_courante = "lvl2";
				scene_prec = "niveau";
			});
				 
			trois.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level3');
				Q.stageScene("gameStats",1);
				
				scene_courante = "lvl3";
				scene_prec = "niveau";
			});
				 
			quatre.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level4');
				Q.stageScene("gameStats",1);
				
				scene_courante = "lvl4";
				scene_prec = "niveau";
			});
			
			cinq.on("click",function() {
				Q.clearStages();
      			Q.stageScene('Debut');
				
				scene_courante = "menu";
				scene_prec = "niveau";
			});
		});
		

// Fenêtre de fin
	Q.scene("endGame",function(stage) {
					
		var background = new Q.TileLayer({
		dataAsset: "men.tmx",
		layerIndex: 0,
		sheet: "tilesmenu",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
        
		stage.insert(background);
		
		Q.audio.stop();
		music = false;
		
		var GameoV = stage.insert(new Q.UI.Container({
                fill: "rgb(160,160,160)",
                x: wi/2,
                y: hi-(hi/6)-50,
                border: 1,
                shadow: 3,
                shadowColor: "rgb(160,160,160)",
                w: wi/4,
                h: 150
                })
            );
			
		var msg = stage.insert(new Q.UI.Text({ 
                label: "Game Over",
                x: 0,
                y: -30
        }),GameoV);
        
		var msg = stage.insert(new Q.UI.Button({ 
                label: "Try again",
                color: "white",
				border: 1,
                shadow: 3,
                shadowColor: "rgb(160,160,160)",
                x: 0,
                y: 30,
				fill: "rgb(160,160,160)"
        }),GameoV);
		
		msg.on("click",function() {
       		Q.clearStages();
   			Q.stageScene('niveau');
				
			scene_prec = scene_courante
			scene_courante = "niveau";
		
		});
	});
		
		
// Fenêtre des scores / vies
	Q.scene("gameStats", function(stage) {
    	var statsContainer = stage.insert(new Q.UI.Container({
        		fill: "rgb(160,160,160)",
                x: wi/2,
                y: hi-20,
                border: 1,
                shadow: 3,
                shadowColor: "rgb(160,160,160)",
                w: wi,
                h: 40
            })
        );

 		var lives = stage.insert(new Q.UI.Text({ 
                label: "Lives x ",
                x: -wi/3,
                y: 0
        }),statsContainer);
				
		var temps = stage.insert(new Q.UI.Text({ 
                label: "Temps : 00:00",
                x: wi/3.5,
                y: 0,
            }),statsContainer);	
		});
			
/*
	Q.scene("Pau_bouton", function(stage) {
 	   var Pause = stage.insert(new Q.UI.Button({
			fill: "transparent",
 	       asset: "pause.png",
        	x: wi-20,
        	y: 20,
        	w: 29,
        	h: 28
   		}));
			
		Pause.on("click",function() {
			Q.stage().pause(); 			
		});
	});
			
	Q.scene("Pla_bouton", function(stage) {
	    var Play = stage.insert(new Q.UI.Button({
			fill: "transparent",
	        asset: "play.png",
	        x: wi-20,
	        y: 20,
	        w: 32,
	        h: 32
   		}));
			
		Play.on("click",function() {
			Q.stage().unpause() ; 
		});
	});           
*/

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
                y: 0
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
   			Q.stageScene('niveau');
			
			Q.audio.stop();
			music = false;
			
			scene_prec = scene_courante
			scene_courante = "niveau";
			echap = !echap;
		});
		
		msg2.on("click",function() {
       		Q.stageScene('Blanc',2);	
			echap = !echap;
		});
	});
	
// Reinitialiser un stage
	Q.scene("Blanc", function(stage){
	});