        //setup level 1, @TODO make it so that it could be multiple levels?
        Q.scene("level2",function(stage) {
				
            var background = new Q.TileLayer({ dataAsset: "Lvl2.tmx", layerIndex: 0, sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
            stage.insert(background);
           
            stage.collisionLayer(new Q.TileLayer({ dataAsset: "Lvl2.tmx", layerIndex:1,  sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_DEFAULT }));
            
            var player = stage.insert(new Q.Banane());
            
            //level assets. format must be as shown: [[ClassName, params], .. ] 
            var levelAssets = [
				["Sol_pierre3_D", {x: 1225 , y : 1155}],
				["Sol_pierre2_D", {x: 1295 , y : 1155}],
				["Sol_5", {x: 1365 , y : 1155}],
				["Sol_5", {x: 1435 , y : 1155}],
				["Sol_5", {x: 1505 , y : 1155}],
				["Sol_5", {x: 1575 , y : 1155}],
				["Sol_5", {x: 1645 , y : 1155}],
				
				["Sol_pierre2_D", {x: 1785 , y : 1085}],
				["Sol_pierre2_D", {x: 1855 , y : 1085}],
				["Sol_pierre2_D", {x: 1925 , y : 1085}],
				["Sol_pierre2_D", {x: 1995 , y : 1085}],
				["Sol_pierre2_D", {x: 2065 , y : 1085}],
				["Sol_pierre2_D", {x: 2275 , y : 1155}],
				["Sol_pierre2_D", {x: 2345 , y : 1155}],
				
				["Sol_pierre2_D", {x: 1925 , y : 945}],
				["Sol_pierre2_D", {x: 1995 , y : 875}],
				["Sol_pierre2_D", {x: 2065 , y : 805}],
				
				["Sol_pierre2_D", {x: 1715 , y : 1505}],
				["Sol_pierre2_D", {x: 1785 , y : 1505}],
				
				["Sol_pierre2_D", {x: 2135 , y : 1505}],
				["Sol_pierre2_D", {x: 2205 , y : 1505}],
				["Sol_pierre2_D", {x: 2275 , y : 1505}],
				["Sol_pierre2_D", {x: 2345 , y : 1505}],
				["Sol_pierre2_D", {x: 2415 , y : 1505}],
				
				["Sol_pierre2_D", {x: 805 , y : 1155}],
				["Sol_pierre2_D", {x: 735 , y : 1085}],
				

            ];
              stage.loadAssets(levelAssets);  
			  
            //load level assets
            
            stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
		   
        });