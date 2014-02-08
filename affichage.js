// Fenetre Menu Principal
	Q.scene("Debut", function(stage) {
		
		var background = new Q.TileLayer({ 
		dataAsset: "men.tmx",
		layerIndex: 0,
		sheet: "tilesmenu",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
		
        stage.insert(background);
		
			
		var Menu = stage.insert(new Q.UI.Container({
		    fill: "#83C108",
                x: wi/2,
                y: hi-(hi/6)-130,
                border: 1,
                shadow: 3,
                shadowColor: "rgba(0,0,0,0.5)",
                w: wi/4.5,
                h: 50
		    })
            );
			
		var Menu2 = stage.insert(new Q.UI.Container({
		    fill: "#F6A313",
                x: wi/2,
                y: hi-(hi/6)-50,
                border: 1,
                shadow: 3,
                shadowColor: "rgba(0,0,0,0.5)",
                w: wi/4.5,
                h: 50	
		    })
            );
			
		var Menu3 = stage.insert(new Q.UI.Container({
		    fill: "grey",
                x: wi/2,
                y: hi-(hi/6)+30,
                border: 1,
                shadow: 3,
                shadowColor: "rgba(0,0,0,0.5)",
                w: wi/4.5,
                h: 50
		    })
            );
		
		var men = stage.insert(new Q.UI.Button({ 
                    label: "Jouer",
                    color: "white",
                    x: 0,
					y: 0,
                }),Menu);
				
		var sco = stage.insert(new Q.UI.Button({ 
                    label: "Scores",
                    color: "white",
                    x: 0,
					y: 0,
                }),Menu2);
				
		var cred = stage.insert(new Q.UI.Button({ 
                    label: "Crédits",
                    color: "white",
                    x: 0,
					y: 0,
                }),Menu3);
							
				men.on("click",function() {
				Q.clearStages();
      			Q.stageScene('niveau');
				
     		 });
		});
		
		
	// Choix du niveau 
		Q.scene("niveau", function(stage) {
			
		var background = new Q.TileLayer({ dataAsset: "men.tmx", layerIndex: 0, sheet: "tilesmenu", tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
        stage.insert(background);
			
		var Menu = stage.insert(new Q.UI.Container({
		    fill: "grey",
                x: wi/2,
                y: hi-(hi/6)-180,
                border: 1,
                shadow: 3,
                shadowColor: "rgba(0,0,0,0.5)",
                w: wi/4.5,
                h: 50
		    })
            );
			
		var Menu2 = stage.insert(new Q.UI.Container({
		    fill: "grey",
                x: wi/2,
                y: hi-(hi/6)-100,
                border: 1,
                shadow: 3,
                shadowColor: "rgba(0,0,0,0.5)",
                w: wi/4.5,
                h: 50	
		    })
            );
			
		var Menu3 = stage.insert(new Q.UI.Container({
		    fill: "grey",
                x: wi/2,
                y: hi-(hi/6)-20,
                border: 1,
                shadow: 3,
                shadowColor: "rgba(0,0,0,0.5)",
                w: wi/4.5,
                h: 50
		    })
            );
			
		var Menu4 = stage.insert(new Q.UI.Container({
			fill: "grey",
                x: wi/2,
                y: hi-(hi/6)+60,
                border: 1,
                shadow: 3,
                shadowColor: "rgba(0,0,0,0.5)",
                w: wi/4.5,
                h: 50
		    })
            );
		
		var un = stage.insert(new Q.UI.Button({ 
                    label: "Lvl 1",
                    color: "white",
                    x: 0,
					y: 0,
                }),Menu);
				
		var deux = stage.insert(new Q.UI.Button({ 
                    label: "Lvl 2",
                    color: "white",
                    x: 0,
					y: 0,
                }),Menu2);
				
		var trois = stage.insert(new Q.UI.Button({ 
                    label: "Lvl 3",
                    color: "white",
                    x: 0,
					y: 0,
                }),Menu3);
				
		var quatre = stage.insert(new Q.UI.Button({ 
                    label: "Lvl 4",
                    color: "white",
                    x: 0,
					y: 0,
                }),Menu4);
		
			un.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level1');
				Q.stageScene("gameStats",1);
			});
				
			deux.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level2');
				Q.stageScene("gameStats",1);
			});
				 
			trois.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level3');
				Q.stageScene("gameStats",1);
			});
				 
			quatre.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level4');
				Q.stageScene("gameStats",1);
			});
		});
		

	// Fenêtre de fin
        Q.scene("endGame",function(stage) {
					
		var background = new Q.TileLayer({ dataAsset: "men.tmx", layerIndex: 0, sheet: "tilesmenu", tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
        stage.insert(background);
		
  			var GameoV = stage.insert(new Q.UI.Container({
                fill: "grey",
                x: wi/2,
                y: hi/2,
                border: 1,
                shadow: 3,
                shadowColor: "rgba(0,0,0,0.5)",
                w: 300,
                h: 200
                })
            );
			
			var msg = stage.insert(new Q.UI.Text({ 
                    label: "¡ Game Over !",
                    color: "white",
                    x: 0,
                    y: -30
                }),GameoV);
        
			var msg = stage.insert(new Q.UI.Button({ 
                    label: "Try again",
                    color: "white",
                    x: 0,
                    y: 30,
					fill: "#CCCCCC"
                }),GameoV);
		
			msg.on("click",function() {
        		Q.clearStages();
      			Q.stageScene('niveau');
     		 });
		});
		
		
       // Fenêtre des scores / vies
        Q.scene("gameStats", function(stage) {
            var statsContainer = stage.insert(new Q.UI.Container({
                fill: "grey",
                x: wi/2,
                y: hi-20,
                border: 1,
                shadow: 3,
                shadowColor: "rgba(0,0,0,0.5)",
                w: wi,
                h: 40
                })
            );

 			var lives = stage.insert(new Q.UI.Text({ 
                    label: "Lives x 2",
                    color: "white",
                    x: -wi/3,
                    y: 0
                }),statsContainer);
				
			 var temps = stage.insert(new Q.UI.Text({ 
                    label: "Temps : 00:00",
                    color: "white",
                    x: wi/3.5,
                    y: 0,
                }),statsContainer);	
				
		  pau = false;
		  var Play;
		  var Pause = stage.insert(new Q.UI.Button({
			    fill: "transparent",
                asset: "pause.png",
                x: wi-20,
                y: 20,
                w: 29,
                h: 28
                })
            );
			
	
			Pause.on("click",function() {
				Q.stage().pause(); 
				pau = !pau;
				Pause.destroy();
				
				var Play = stage.insert(new Q.UI.Button({
			    fill: "transparent",
                asset: "play.png",
                x: wi-20,
                y: 20,
                w: 32,
                h: 32
                })
				);

				 });
            
			
			Play.on("click",function() {
				Q.stage().unpause() ; 
				pau = !pau;
				Play.destroy();
				
				var Pause = stage.insert(new Q.UI.Button({
			    fill: "transparent",
                asset: "pause.png",
                x: wi-20,
                y: 20,
                w: 29,
                h: 28
                })
          		 );
				
				 });

 			
        });