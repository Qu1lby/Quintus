        //setup level 1, @TODO make it so that it could be multiple levels?
        Q.scene("level3",function(stage) {
				
            var background = new Q.TileLayer({ dataAsset: "Lvl3.tmx", layerIndex: 0, sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
            stage.insert(background);
           
            stage.collisionLayer(new Q.TileLayer({ dataAsset: "Lvl3.tmx", layerIndex:1,  sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_DEFAULT }));
            
            var player = stage.insert(new Q.Fraise());
            
            //level assets. format must be as shown: [[ClassName, params], .. ] 
            var levelAssets = [
							
				["Sol_pierre1_D", {x: 2135 , y : 805 }],
				
				["HorizontalPlatform", {x: 41*70, y : 11*70+15,vx :175, rangeX : 200 ,asset : "plateforme.png"}],
				["HorizontalPlatform", {x: 47*70+15, y : 10*70+20,vx :175, rangeX : 120 ,asset : "plateforme.png"}],
				
				["GroundEnemy", {x: 44*70, y :  12*70,vx : 400, asset: "slime3.png"}],
				["GroundEnemy", {x: 24*70, y :  14*70,vx : 600, asset: "slime3.png"}],
				
				["Sol_jump", {x: 54*70+35 , y : 16*70+35}],
				["Sol_jump", {x: 55*70+35 , y : 16*70+35}],
				
				["Sol_jump", {x: 40*70+35 , y : 28*70+35}],
				["Sol_jump", {x: 44*70+35 , y : 28*70+35}],
				["Sol_jump", {x: 47*70+35 , y : 28*70+35}],
	
            ];
              stage.loadAssets(levelAssets);  
			  
            //load level assets
            
            stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
		   
        });