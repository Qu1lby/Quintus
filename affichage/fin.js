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
				
				if (music){
// TO DO					Q.audio.play('lvl3.mp3',{ loop: true });
				}
				
				scene_prec = 'GO';
				scene_courante = "lvl3";
			}
			
			if (scene_prec == "lvl4"){
				Q.clearStages();
    			Q.stageScene('level4');
				Q.stageScene("gameStats",1);
				
				if (music){
// TO DO					Q.audio.play('lvl4.mp3',{ loop: true });
				}
				
				scene_prec = 'GO';
				scene_courante = "lvl4";
			}
			
			if (scene_prec == "lvl5"){
				Q.clearStages();
      			Q.stageScene('level5');
				Q.stageScene("gameStats",1);
				
				if(music){
					Q.audio.play('lvl5.mp3',{ loop : true});
				}
				
				scene_prec = 'GO';
				scene_courante = "lvl5";
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

		var GameoV = stage.insert(new Q.UI.Container({
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
	
			if (scene_prec == "lvl1"){
				var msge3 = stage.insert(new Q.UI.Text({ 
					label: "Niveau 1",
					x: wi/2,
					y: hi/2-50,
					color: "rgb(168,86,45)",
					size :40
				}));
							
				var msge = stage.insert(new Q.UI.Text({ 
					label: "Score : "+score_l1_tmp,
					x: 0,
					y: -75
					}),GameoV);		
					
				var msge = stage.insert(new Q.UI.Text({ 
					label: "Temps : "+score_l1tps_tmp,
					x: 0,
					y: -35
					}),GameoV);		
				
				if (score_l1_tmp > score_l1){
					var tmp = "Lvl1="+score_l1_tmp+"; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/";
					document.cookie = tmp;
					document.cookie = "Lvl1tps="+score_l1tps_tmp+"; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/";

					score_l1 = score_l1_tmp;
					score_l1tps = score_l1tps_tmp;
					score_t = score_l1 + score_l2 + score_l3 + score_l4 + score_l5;

					verification();
					alert('done');
					
					var msge2 = stage.insert(new Q.UI.Text({ 
						label: "BEST SCORE",
						x: 0,
						y: 15
						}),GameoV);
				}else {
					var msge2 = stage.insert(new Q.UI.Text({ 
						label: "Best : "+score_l1tps,
						x: 0,
						y: 15
						}),GameoV);
				}
		
			}
			
			if (scene_prec == "lvl2"){
				var msge3 = stage.insert(new Q.UI.Text({ 
					label: "Niveau 2",
					x: wi/2,
					y: hi/2-50,
					color: "rgb(168,86,45)",
					size :40
					}));
							
				var msge = stage.insert(new Q.UI.Text({ 
					label: "Score : "+score_l2_tmp,
					x: 0,
					y: -75
					}),GameoV);	

				var msge = stage.insert(new Q.UI.Text({ 
					label: "Temps : "+score_l2tps_tmp,
					x: 0,
					y: -35
					}),GameoV);								
				
				if (score_l2_tmp > score_l2){
					var tmp = "Lvl2="+score_l2_tmp+"; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/";
					document.cookie = tmp;
					document.cookie = "Lvl2tps="+score_l2tps_tmp+"; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/";
					
					score_l2 = score_l2_tmp;
					score_l2tps = score_l2tps_tmp;
					score_t = score_l1 + score_l2 + score_l3 + score_l4 + score_l5;
					
					verification();

					var msge2 = stage.insert(new Q.UI.Text({ 
						label: "BEST SCORE",
						x: 0,
						y: 15
						}),GameoV);
				}else {
					var msge2 = stage.insert(new Q.UI.Text({ 
						label: "Best : "+score_l2tps,
						x: 0,
						y: 15
						}),GameoV);
				}
			}
			
			if (scene_prec == "lvl3"){
				var msge3 = stage.insert(new Q.UI.Text({ 
					label: "Niveau 3",
					x: wi/2,
					y: hi/2-50,
					color: "rgb(168,86,45)",
					size :40
				}));
							
				var msge = stage.insert(new Q.UI.Text({ 
					label: "Score : "+score_l3_tmp,
					x: 0,
					y: -75
				}),GameoV);	
						
				var msge = stage.insert(new Q.UI.Text({ 
					label: "Temps : "+score_l3tps_tmp,
					x: 0,
					y: -35
				}),GameoV);		
				
				if (score_l3_tmp > score_l3){
					var tmp = "Lvl3="+score_l3_tmp+"; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/";
					document.cookie = tmp;
					document.cookie = "Lvl3tps="+score_l3tps_tmp+"; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/";
				
					score_l3 = score_l3_tmp;
					score_l3tps = score_l3tps_tmp;
					score_t = score_l1 + score_l2 + score_l3 + score_l4 + score_l5;
					
					verification();

					var msge2 = stage.insert(new Q.UI.Text({ 
						label: "BEST SCORE",
						x: 0,
						y: 15
					}),GameoV);
				}else {
					var msge2 = stage.insert(new Q.UI.Text({ 
						label: "Best : "+score_l3tps,
						x: 0,
						y: 15
						}),GameoV);
				}
			}
			
			if (scene_prec == "lvl4"){
				var msge3 = stage.insert(new Q.UI.Text({ 
					label: "Niveau 4",
					x: wi/2,
					y: hi/2-50,
					color: "rgb(168,86,45)",
					size :40
				}));
							
				var msge = stage.insert(new Q.UI.Text({ 
					label: "Score : "+score_l4_tmp,
					x: 0,
					y: -75
				}),GameoV);	

				var msge = stage.insert(new Q.UI.Text({ 
					label: "Temps : "+score_l4tps_tmp,
					x: 0,
					y: -35
				}),GameoV);								
				
				if (score_l4_tmp > score_l4){
					var tmp = "Lvl4="+score_l4_tmp+"; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/";
					document.cookie = tmp;
					document.cookie = "Lvl4tps="+score_l4tps_tmp+"; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/";
					
					score_l4 = score_l4_tmp;
					score_l4tps = score_l4tps_tmp;
					score_t = score_l1 + score_l2 + score_l3 + score_l4 + score_l5;
					
					verification();

					var msge2 = stage.insert(new Q.UI.Text({ 
						label: "BEST SCORE",
						x: 0,
						y: 15
						}),GameoV);
				}else {
					var msge2 = stage.insert(new Q.UI.Text({ 
						label: "Best : "+score_l4tps,
						x: 0,
						y: 15
						}),GameoV);
				}
			}
			
			if (scene_prec == "lvl5"){
				var msge3 = stage.insert(new Q.UI.Text({ 
					label: "- BOSS -",
					x: wi/2,
					y: hi/2-50,
					color: "rgb(168,86,45)",
					size :40
				}));
							
				var msge = stage.insert(new Q.UI.Text({ 
					label: "Score : "+score_l5_tmp,
					x: 0,
					y: -75
				}),GameoV);	
						
				var msge = stage.insert(new Q.UI.Text({ 
					label: "Temps : "+score_l5tps_tmp,
					x: 0,
					y: -35
				}),GameoV);								
				
				if (score_l5_tmp > score_l5){
					var tmp = "Lvl5="+score_l5_tmp+"; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/";
					document.cookie = tmp;
					document.cookie = "Lvl5tps="+score_l5tps_tmp+"; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/";
					
					score_l5 = score_l5_tmp;
					score_l5tps = score_l5tps_tmp;
					score_t = score_l1 + score_l2 + score_l3 + score_l4 + score_l5;
					
					verification();

					var msge2 = stage.insert(new Q.UI.Text({ 
						label: "BEST SCORE",
						x: 0,
						y: 15
						}),GameoV);
				}else {
					var msge2 = stage.insert(new Q.UI.Text({ 
						label: "Best : "+score_l5tps,
						x: 0,
						y: 15
						}),GameoV);
				}
			}
		

		var msg = stage.insert(new Q.UI.Button({ 
            label: "Continuer",
			border: 1,
            shadow: 3,
            shadowColor: "rgb(168,86,45)",
            x: 0,
            y: 70,
			fill: "rgb(160,160,160)"
        }),GameoV);
		
	/*	var msg3 = stage.insert(new Q.UI.Button({ 
            label: "Scores",
			border: 1,
            shadow: 3,
            shadowColor: "rgb(168,86,45)",
            x: -80,
            y: 70,
			fill: "rgb(160,160,160)"
        }),GameoV);
	*/	
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
		
	/*	msg3.on("click",function() {
			Q.stageScene("Total",2);
		});
	*/
	});
		