        //setup level 1, @TODO make it so that it could be multiple levels?
        Q.scene("level2",function(stage) {
				
            var background = new Q.TileLayer({ dataAsset: "Lvl2.tmx", layerIndex: 0, sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
            stage.insert(background);
           
            stage.collisionLayer(new Q.TileLayer({ dataAsset: "Lvl2.tmx", layerIndex:1,  sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_DEFAULT }));
            
            var player = stage.insert(new Q.Banane());
            
            //level assets. format must be as shown: [[ClassName, params], .. ] 
            var levelAssets = [
				["Sol_5", {x: 1225 , y : 1155}],
				["Sol_5", {x: 1295 , y : 1155}],
				["Sol_5", {x: 1365 , y : 1155}],
				["Sol_5", {x: 1435 , y : 1155}],
				["Sol_5", {x: 1505 , y : 1155}],
				["Sol_5", {x: 1575 , y : 1155}],
				["Sol_5", {x: 1645 , y : 1155}],
				// un commentaire
				["Sol_pierre1_D", {x: 315 , y : 245}],
				["Sol_pierre3_D", {x: 385 , y : 245}],
				["Sol_pierre2_D", {x: 455 , y : 245}],
				["Sol_pierre3_D", {x: 525 , y : 245}],
				["Sol_pierre2_D", {x: 595 , y : 245}],
				["Sol_pierre1_D", {x: 665 , y : 245}],
				["Sol_5", {x: 735 , y : 245}],
				["Sol_5", {x: 805 , y : 245}],
				
				["Sol_2", {x: 945 , y : 245}],
				["Sol_2", {x: 1015 , y : 245}],
				["Sol_2", {x: 1085 , y :250}],
				["Sol_2", {x: 1155 , y : 245}],

				["Sol_pierre1_D", {x: 1295 , y : 175}],
				["Sol_pierre1_D", {x: 1505 , y : 175}],
				["Sol_5", {x: 1645 , y : 315}],

				["Sol_pierre3_D", {x: 1855 , y : 665}],
								
								
				["GroundEnemy", {x: 1640 , y : 245, asset: "slime2.png"}],
				
				

            ];
              stage.loadAssets(levelAssets);  
			  
            //load level assets
            
            stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
		   
        });