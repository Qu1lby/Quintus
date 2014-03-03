//  Menu Principal ------------------------------------------------------
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
			fill: "rgb(204,240,122)",
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
        	label: "Jouer", x: 0, y: 0 }),Menu);
				
		var sco = stage.insert(new Q.UI.Button({ 
        	label: "Scores", x: 0, y: 0 }),Menu2);
				
		var cred = stage.insert(new Q.UI.Button({ 
        	label: "Infos", x: 0, y: 0 }),Menu3);
							
		men.on("click",function() {
			Q.clearStages();
      		Q.stageScene('niveau');
			scene_courante = "niveau";
			scene_prec = "menu";
     	});	
		
		cred.on("click",function() {
			Q.clearStages();
      		Q.stageScene('level5');
			Q.stageScene("gameStats",1);
     	});	
	});
		
		
//  Choix du niveau (1) ----------------------------------------------
	Q.scene("niveau", function(stage) {
			
		var background = new Q.TileLayer({ 
		dataAsset: "men.tmx",
		layerIndex: 0,
		sheet: "tilesmenu",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
		
        stage.insert(background);
			
		var Menu = stage.insert(new Q.UI.Container({
			fill: "rgb(248,156,69)",
            x: wi/2 - wi/10,
 			y: hi/2 +50,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
            h: 50
		    })
        );
			
		var Menu2 = stage.insert(new Q.UI.Container({
            fill: "rgb(204,240,122)",
			x: wi/2 + wi/10,
            y: hi/2 +50,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
            h: 50	
		    })
        );
			
		var Menu3 = stage.insert(new Q.UI.Container({
            fill: "rgb(204,240,122)",
			x: wi/2 - wi/10,
            y: hi/2 +130,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
            h: 50
		    })
        );
			
		var Menu4 = stage.insert(new Q.UI.Container({
            fill: "rgb(248,156,69)",
			x: wi/2 + wi/10,
            y: hi/2 + 130,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
            h: 50
		    })
        );
			
		var Menu5 = stage.insert(new Q.UI.Container({
			fill: "rgb(255,255,130)",
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
				Q.stageScene('tut1',2);
				
				if(music){
					Q.audio.play('lvl1.mp3',{ loop: true });
				}
				
				scene_courante = "lvl1";
				scene_prec = "niveau";
			});
				
			deux.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level2');
				Q.stageScene("gameStats",1);
				
				if(music){
					Q.audio.play('lvl2.mp3',{ loop: true });
				}
				
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
	
//  Choix du niveau (2) ----------------------------------------------
	Q.scene("niveau2", function(stage) {
			
		var background = new Q.TileLayer({ 
		dataAsset: "men.tmx",
		layerIndex: 0,
		sheet: "tilesmenu",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
		
        stage.insert(background);
			
		var Menu = stage.insert(new Q.UI.Container({
			fill: "rgb(248,156,69)",
            x: wi/2 - wi/10,
 			y: hi/2 - 10,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
            h: 50
		    })
        );
			
		var Menu2 = stage.insert(new Q.UI.Container({
            fill: "rgb(204,240,122)",
			x: wi/2 + wi/10,
            y: hi/2 - 10,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
            h: 50	
		    })
        );
			
		var Menu3 = stage.insert(new Q.UI.Container({
            fill: "rgb(204,240,122)",
			x: wi/2 - wi/10,
            y: hi/2 +130,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
            h: 50
		    })
        );
			
		var Menu4 = stage.insert(new Q.UI.Container({
            fill: "rgb(248,156,69)",
			x: wi/2 + wi/10,
            y: hi/2 + 130,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
            h: 50
		    })
        );
			
		var Menu5 = stage.insert(new Q.UI.Container({
			fill: "rgb(255,255,130)",
            x: wi/2,
            y: hi-(hi/6)+30,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/4.5,
            h: 50
		    })
        );
		
		var Menu6 = stage.insert(new Q.UI.Container({
			fill: "rgb(255,64,64)",
            x: wi/2,
            y: hi/2 +60,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(160,160,160)",
            w: wi/6.5,
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
		
		var six = stage.insert(new Q.UI.Button({ 
        	label: "BOSS",
            x: 0,
			y: 0,
        }),Menu6);
		
			un.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level1');
				Q.stageScene("gameStats",1);
				Q.stageScene('tut1',2);
				
				if(music){
					Q.audio.play('lvl1.mp3',{ loop: true });
				}
				
				scene_courante = "lvl1";
				scene_prec = "niveau";
			});
				
			deux.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level2');
				Q.stageScene("gameStats",1);
				
				if(music){
					Q.audio.play('lvl2.mp3',{ loop: true });
				}
				
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
			
			six.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level5');
				Q.stageScene("gameStats",1);
				
				scene_courante = "lvl5";
				scene_prec = "niveau";
			});
		});