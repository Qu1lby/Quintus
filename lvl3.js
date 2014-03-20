        //setup level 1, @TODO make it so that it could be multiple levels?

		
	   Q.scene("level3",function(stage) {
				
            var background = new Q.TileLayer({ dataAsset: "Lvl3.tmx", layerIndex: 0, sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
            stage.insert(background);
           
            stage.collisionLayer(new Q.TileLayer({ dataAsset: "Lvl3.tmx", layerIndex:1,  sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_DEFAULT }));
            
            var player = stage.insert(new Q.Fraise());
            
            //level assets. format must be as shown: [[ClassName, params], .. ] 
            var levelAssets = [
				//spawn personnage
				["Sol_G5", {x: 16*70+35 , y : 12*70+35}],
				["Sol_G5", {x: 17*70+35 , y : 12*70+35}],
				["Sol_G5", {x: 18*70+35 , y : 12*70+35}],
				
			
				["Fin", {x: 8*70+35 , y : 5*70+35, asset: "ananas.png", type: Q.SPRITE_NONE}],	
				["Fin", {x: 8*70+35 , y : 5*70+35, asset: "cage.png", type: Q.SPRITE_NONE}],
				
				["HorizontalPlatform", {x: 41*70, y : 11*70+15,vx :200, rangeX : 215 ,asset : "plateforme.png", defaultDirection: "right"}],
				["HorizontalPlatform", {x: 47*70+15, y : 10*70+35,vx :175, rangeX : 155 ,asset : "plateforme.png"}],
				
			
				["Sol_5", {x: 35*70+35 , y : 12*70+35}],
				["Sol_5", {x: 35*70+35 , y : 13*70+35}],
		
				["GroundEnemy", {scale: 2, x: 44*70, y :  12*70,vx : 200, asset: "slime3.png"}],
				["GroundEnemy", {x: 45*70, y :  12*70,vx : 150, asset: "slime3.png"}],
				
				["Sol_jump", {x: 54*70+35 , y : 16*70+35}],
				["Sol_jump", {x: 55*70+35 , y : 16*70+35}],
				
				["Sol_jump", {x: 40*70+35 , y : 28*70+35}],
				["Sol_jump", {x: 44*70+35 , y : 28*70+35}],
				["Sol_jump", {x: 47*70+35 , y : 28*70+35}],
				
				["Sol_jump", {x: 11*70+35 , y : 24*70+35}],
				
				["Sol_jump", {x: 29*70+35 , y : 24*70+85, scale:0.5}],
				["Sol_jump", {x: 1*70+35 , y : 15*70+35}],
				
				["Sol_5", {x: 55*70+35 , y : 21*70+35}],
				["Sol_5", {x: 57*70+35 , y : 21*70+35}],
				["Sol_5", {x: 52*70+35 , y : 21*70+35}],
				["Sol_5", {x: 51*70+35 , y : 21*70+35}],
				["Sol_5", {x: 17*70+35 , y : 5*70+35}],
				["Sol_5", {x: 21*70+35 , y : 5*70+35}],
				["Sol_5", {x: 25*70+35 , y : 5*70+35}],
				["Sol_5", {x: 56*70+35 , y : 5*70+35}],
				["Sol_5", {x: 59*70+35 , y : 7*70+35}],
				["Sol_5", {x: 60*70+35 , y : 7*70+35}],
				
				["Sol_5", {x: 49*70+35 , y : 21*70+35}],
			
				["Sol_5", {x: 47*70+35 , y : 21*70+35}],
				
				["bouton", {asset:"push4.png", scale: 0.3, x: 51*70+5 , y : 12*70+30, coox : 53*70+35, cooy :14*70+35}],
				["Sol_pierre2_D", {x: 53*70+35 , y : 14*70+35}],
				["Sol_pierre2_D", {x: 53*70+35 , y : 15*70+35}],
				
				["Sol_pierre2_D", {x: 54*70+35 , y : 14*70+35}],
				["Sol_pierre2_D", {x: 54*70+35 , y : 15*70+35}],
				
				["Sol_pierre2_D", {x: 55*70+35 , y : 14*70+35}],
				["Sol_pierre2_D", {x: 55*70+35 , y : 15*70+35}],
				
				["bouton", {asset: "push3.png", scale : 0.3, x: 59*70+65 , y : 12*70+30, coox : 56*70+35, cooy :14*70+35}],
				["Sol_pierre2_D", {x: 56*70+35 , y : 14*70+35}],
				["Sol_pierre2_D", {x: 56*70+35 , y : 15*70+35}],
				
				["Sol_5", {x: 38*70+35 , y : 23*70+35}],
				["Sol_5", {x: 37*70+35 , y : 23*70+35}],
				["Sol_5", {x: 31*70+35 , y : 23*70+35}],
				["Sol_5", {x: 32*70+35 , y : 23*70+35}],
				["Sol_5", {x: 33*70+35 , y : 23*70+35}],
				["Sol_5", {x: 34*70+35 , y : 23*70+35}],
				
				
				
				["Sol_pierre1_P", {x: 1*70+35 , y : 17*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 18*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 19*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 20*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 21*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 22*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 23*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 24*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 25*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 26*70+35}],
			
				
				["Sol_pierre1_P", {x: 2*70+35 , y : 17*70+35}],
				["Sol_pierre1_P", {x: 2*70+35 , y : 18*70+35}],
				["Sol_pierre1_P", {x: 2*70+35 , y : 19*70+35}],
				["Sol_pierre1_P", {x: 2*70+35 , y : 20*70+35}],
				//["Sol_pierre1_P", {x: 2*70+35 , y : 22*70+35}],
				["Sol_pierre1_P", {x: 2*70+35 , y : 23*70+35}],
			//	["Sol_pierre1_P", {x: 2*70+35 , y : 25*70+35}],
				["Sol_pierre1_P", {x: 2*70+35 , y : 26*70+35}],
				
				
				["Sol_pierre1_P", {x: 3*70+35 , y : 17*70+35}],
			//	["Sol_pierre1_P", {x: 3*70+35 , y : 19*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 20*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 21*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 22*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 23*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 24*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 25*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 26*70+35}],
				
				["Sol_pierre1_P", {x: 4*70+35 , y : 17*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 18*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 19*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 20*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 21*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 22*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 24*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 25*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 26*70+35}],
				
				
				//pic 
				["Mal", {asset:"grille70bas.png", x: 24*70+35 , y : 19*70+35}],
				["Mal", {asset:"grille70bas.png", x: 25*70+35 , y : 19*70+35}],
				["Mal", {asset:"grille70bas.png", x: 26*70+35 , y : 19*70+35}],
				["Mal", {asset:"grille70bas.png", x: 27*70+35 , y : 19*70+35}],
				["Mal", {asset:"grille70bas.png", x: 28*70+35 , y : 19*70+35}],
				["Mal", {asset:"grille70bas.png", x: 29*70+35 , y : 19*70+35}],
				
				["DrawEnnemy", {x: 30*70+35 , y : 4*70, coox : 30*70, cooy : 4*70+65, tps : 0.1, asset:"patate.png"}],
				["Sol_fin", {x: 30*70*35 , y : 5*70+35, asset : "pierre_terre.png"}],
				
            ];
              stage.loadAssets(levelAssets);  
			  
            //load level assets
            
            stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
		   
        });