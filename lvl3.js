        //setup level 1, @TODO make it so that it could be multiple levels?

		
	   Q.scene("level3",function(stage) {
				
            var background = new Q.TileLayer({ dataAsset: "Lvl3.tmx", layerIndex: 0, sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
            stage.insert(background);
           
            stage.collisionLayer(new Q.TileLayer({ dataAsset: "Lvl3.tmx", layerIndex:1,  sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_DEFAULT }));
            
            var player = stage.insert(new Q.Fraise());
            
            //level assets. format must be as shown: [[ClassName, params], .. ] 
            var levelAssets = [
							
				["Porte", { x: 8*70+35 , y: 5*70+35}],
				["Porte", { x: 8*70+35 , y: 4*70+35, asset: "door1.png"}],
				
				["HorizontalPlatform", {x: 41*70, y : 11*70+15,vx :200, rangeX : 215 ,asset : "plateforme.png", defaultDirection: "right"}],
				["HorizontalPlatform", {x: 47*70+15, y : 10*70+35,vx :175, rangeX : 155 ,asset : "plateforme.png"}],
				// ["StrangePlatform", {x: 62*70+15, y : 10*70+35,vx :175, rangeX : 50 ,asset : "plateforme.png"}],
				
				
				["Sol_5", {x: 35*70+35 , y : 12*70+35}],
				["Sol_5", {x: 35*70+35 , y : 13*70+35}],
				
				
				["VerticalPlatform", {x: 62*70+15, y : 10*70+35,vx :175, rangeX : 50 ,asset : "plateforme.png"}],
				
				["GroundEnemy", {x: 44*70, y :  12*70,vx : 200, asset: "slime3.png"}],
				["GroundEnemy", {x: 45*70, y :  12*70,vx : 150, asset: "slime3.png"}],
				
				["Sol_jump", {x: 54*70+35 , y : 16*70+35}],
				["Sol_jump", {x: 55*70+35 , y : 16*70+35}],
				
				["Sol_jump", {x: 40*70+35 , y : 28*70+35}],
				["Sol_jump", {x: 44*70+35 , y : 28*70+35}],
				["Sol_jump", {x: 47*70+35 , y : 28*70+35}],
				
				["Sol_jump", {x: 11*70+35 , y : 24*70+35}],
				
				["Sol_jump", {x: 29*70+35 , y : 24*70+85}],
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
				
				["bouton", {x: 51*70+35 , y : 12*70+15, coox : 53*70+35, cooy :14*70+35}],
				["Sol_pierre2_D", {x: 53*70+35 , y : 14*70+35}],
				["Sol_pierre2_D", {x: 53*70+35 , y : 15*70+35}],
				
				["Sol_pierre2_D", {x: 54*70+35 , y : 14*70+35}],
				["Sol_pierre2_D", {x: 54*70+35 , y : 15*70+35}],
				
				["Sol_pierre2_D", {x: 55*70+35 , y : 14*70+35}],
				["Sol_pierre2_D", {x: 55*70+35 , y : 15*70+35}],
				
				["bouton", {x: 59*70+35 , y : 12*70+15, coox : 56*70+35, cooy :14*70+35}],
				["Sol_pierre2_D", {x: 56*70+35 , y : 14*70+35}],
				["Sol_pierre2_D", {x: 56*70+35 , y : 15*70+35}],
				
				["Sol_5", {x: 38*70+35 , y : 23*70+35}],
				["Sol_5", {x: 37*70+35 , y : 23*70+35}],
				["Sol_5", {x: 31*70+35 , y : 23*70+35}],
				["Sol_5", {x: 32*70+35 , y : 23*70+35}],
				["Sol_5", {x: 33*70+35 , y : 23*70+35}],
				["Sol_5", {x: 34*70+35 , y : 23*70+35}],
			
				//pic 
				["Mal", {x: 24*70+35 , y : 19*70+35}],
				["Mal", {x: 25*70+35 , y : 19*70+35}],
				["Mal", {x: 26*70+35 , y : 19*70+35}],
				["Mal", {x: 27*70+35 , y : 19*70+35}],
				["Mal", {x: 28*70+35 , y : 19*70+35}],
				["Mal", {x: 29*70+35 , y : 19*70+35}],
	
            ];
              stage.loadAssets(levelAssets);  
			  
            //load level assets
            
            stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
		   
        });