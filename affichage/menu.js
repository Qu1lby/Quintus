/**
Pour griser :

  fill: "rgb(160,160,160)" 
*/

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
        	label: "Classement", x: 0, y: 0 }),Menu3);
				
		var inf = stage.insert(new Q.UI.Button({ 
        	label: "Comment ?", x: 0, y: 0 }),Menu2);
							
		men.on("click",function() {

			pseudo = lireCookie(" Pseudo");
 			if (pseudo == null){
 				var saisie = prompt("Bienvenue, a qui ai-je l'honneur ?", "");
 				document.cookie = 'Pseudo='+saisie+'; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
 				pseudo = saisie;
 			}

			Q.clearStages();
/*			if (score_t!< 2000 ){
   				Q.stageScene('niveau2');
			}else Q.stageScene('niveau');
*/	
      		Q.stageScene('niveau');
			scene_courante = "niveau";
			scene_prec = "menu";
     	});	

	
		sco.on("click",function() {
			Q.stageScene('Score');
     	});	

	
		inf.on("click",function() {
			Q.stageScene('Aide',2);
     	});	
		
		var copy = stage.insert(new Q.UI.Button({ 
        	label: "©Kimanipi", x: wi-50, y: hi-20 }));
			
		copy.p.fontColor = "white";﻿
		copy.p.font = "400 18px arial";
		
		copy.on("click",function() {
			Q.stageScene('Credit',2);
     	});	
	});

//  Aide ------------------------------------------------------
	Q.scene("Aide", function(stage) {
		
		var background = new Q.TileLayer({ 
		dataAsset: "aide.tmx",
		layerIndex: 0,
		sheet: "help",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
		
        stage.insert(background);
		
		var Opacite = stage.insert(new Q.UI.Button({
        		fill: "rgb(0,0,0)",
				opacity : 0,
                x: 0,
                y: 0,
                w: wi*2,
                h: hi*2
                })
            );
		
		Opacite.on("click",function() {
			Q.stageScene('Blanc',2);
     	});	
		
	});
		
//  Credit ------------------------------------------------------
	Q.scene("Credit", function(stage) {
	
		var Opacite = stage.insert(new Q.UI.Button({
        		fill: "rgb(0,0,0)",
				opacity : 0.7,
                x: 0,
                y: 0,
                w: wi*2,
                h: hi*2
                })
            );
			
		var Fond = stage.insert(new Q.UI.Container({
                fill: "rgb(167,200,240)",
                x: wi/2,
                y: hi/2+50,
                border: 1,
                w: wi/3.5,
                h: 415
                })
            );
		
		Opacite.on("click",function() {
			Q.stageScene('Blanc',2);
     	});	
		
		var lives = stage.insert(new Q.UI.Text({ 
                label: "- Credits -",
				size : 20,
				family : "comic sans ms",
                x: 0,
                y: -155,
                }),Fond);
				
		var lives = stage.insert(new Q.UI.Text({ 
                label: "   Traps 'n fruits\n\n\n      Kilian Cuny\n Maxime Chaboissier\n     Nicolas Joly\n Pierrick Le clouërec",
				size : 20,
				family : "comic sans ms",
                x: 0,
                y: -55,
                }),Fond);
				
		var lives = stage.insert(new Q.UI.Text({ 
                label: "©Kimanipi       2014",
				size : 20,
				family : "comic sans ms",
                x: 0,
                y: 155,
                }),Fond);
			
	});
		
//  Choix du niveau (1) ----------------------------------------------
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
								
				if(music){
					Q.audio.play('lvl3.mp3',{ loop: true });
				}
				
				scene_courante = "lvl3";
				scene_prec = "niveau";
			});
				 
			quatre.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level4');
				Q.stageScene("gameStats",1);
								
				if(music){
// TO DO					Q.audio.play('lvl5.mp3');
				}
				
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
			fill: "rgb(255,148,112)",
            x: wi/2,
            y: hi/2 +60,
            border: 1,
            shadow: 3,
            shadowColor: "rgb(255,64,64)",
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
								
				if(music){
					Q.audio.play('lvl3.mp3',{ loop: true });
				}
				
				scene_courante = "lvl3";
				scene_prec = "niveau";
			});
				 
			quatre.on("click",function() {
				Q.clearStages();
      			Q.stageScene('level4');
				Q.stageScene("gameStats",1);
				
				if(music){
// TO DO					Q.audio.play('lvl5.mp3');
				}
				
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
				Q.stageScene("tut5",2);
				
				if(music){
					Q.audio.play('lvl5.mp3',{loop : true});
				}
				
				scene_courante = "lvl5";
				scene_prec = "niveau";
			});
		});