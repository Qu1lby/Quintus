        //setup level 1, @TODO make it so that it could be multiple levels?
        Q.scene("level3",function(stage) {
				
            var background = new Q.TileLayer({ dataAsset: "Lvl3.tmx", layerIndex: 0, sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
            stage.insert(background);
           
            stage.collisionLayer(new Q.TileLayer({ dataAsset: "Lvl3.tmx", layerIndex:1,  sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_DEFAULT }));
            
            var player = stage.insert(new Q.Fraise());
            
            //level assets. format must be as shown: [[ClassName, params], .. ] 
            var levelAssets = [
							
				["Sol_pierre1_D", {x: 2135 , y : 805 }],
				// ["GroundEnemy", {x: 20*70+30, y : 11*70+30, asset: "slime2.png"}],
	
            ];
              stage.loadAssets(levelAssets);  
			  
            //load level assets
            
            stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
		   
        });