        //setup level 1, @TODO make it so that it could be multiple levels?
        Q.scene("level1",function(stage) {
				
            var background = new Q.TileLayer({ dataAsset: "Lvl3.tmx", layerIndex: 0, sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
            stage.insert(background);
           
            stage.collisionLayer(new Q.TileLayer({ dataAsset: "Lvl3.tmx", layerIndex:1,  sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_DEFAULT }));
            
            var player = stage.insert(new Q.Orange());
            
            //level assets. format must be as shown: [[ClassName, params], .. ] 
            var levelAssets = [
			
		
				["Sol_5", {x: 105 , y : 245}],
				["Sol_5", {x: 175 , y : 245}],
				["Sol_5", {x: 245 , y : 245}],
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
				["Sol_2", {x: 1085 , y : 245}],
				["Sol_2", {x: 1155 , y : 245}],

				["Sol_pierre1_D", {x: 1295 , y : 175}],
				["Sol_pierre1_D", {x: 1505 , y : 175}],
				["Sol_5", {x: 1645 , y : 315}],

				["Sol_pierre3_D", {x: 1855 , y : 665}],
								
								
				["GroundEnemy", {x: 1640 , y : 245, asset: "slime2.png"}],
				
				
			
          /*      ["GroundEnemy", {x: 18*70, y: 6*70, asset: "slime2.png"}],
                ["VerticalEnemy", {x: 800, y: 120, rangeY: 70}],
                ["VerticalEnemy", {x: 1080, y: 120, rangeY: 80}],
                ["GroundEnemy", {x: 6*70, y: 3*70, asset: "slime2.png"}],
                ["GroundEnemy", {x: 9*70, y: 70, asset: "slime2.png"}],
                ["GroundEnemy", {x: 18*70, y: 120, asset: "slime2.png"}],
                ["GroundEnemy", {x: 12*70, y: 120, asset: "slime2.png"}],
                ["Coin", {x: 300, y: 100}],
                ["Coin", {x: 360, y: 100}],
                ["Coin", {x: 420, y: 100}],
                ["Coin", {x: 480, y: 100}],
                ["Coin", {x: 800, y: 300}],
                ["Coin", {x: 860, y: 300}],
                ["Coin", {x: 920, y: 300}],
                ["Coin", {x: 980, y: 300}],
                ["Coin", {x: 1040, y: 300}],
                ["Coin", {x: 1100, y: 300}],
                ["Coin", {x: 1160, y: 300}],
                ["Coin", {x: 1250, y: 400}],
                ["Coin", {x: 1310, y: 400}],
                ["Coin", {x: 1370, y: 400}],
				
				["Sol_2", {x: 315 , y : 175}],
				["Sol_2", {x: 385 , y : 175}],
				["Sol_2", {x: 455 , y : 175}],
				["Sol_2", {x: 525 , y : 175}],


				
				["Sol_pierre_3", {x: 105, y :385}],
				["Sol_pierre_3", {x: 175, y :385}],
				["Sol_pierre_3", {x: 245, y :385}],
				["Sol_pierre_3", {x: 315, y :385}],
				["Sol_pierre_3", {x: 385, y :385}],
				["Sol_pierre_3", {x: 455, y :385}],
				["Sol_pierre_3", {x: 525, y :385}],
				["Sol_pierre_3", {x: 595, y :385}],
				["Sol_pierre_3", {x: 665, y :385}],
				["Sol_pierre_3", {x: 735, y :385}],
				
				["Sol_3", {x: 245, y :315}],
				["Sol_3", {x: 315, y :315}],
				["Sol_3", {x: 385, y :315}],
				["Sol_3", {x: 455, y :315}],
				["Sol_3", {x: 525, y :315}],
				["Sol_3", {x: 595, y :315}],
				["Sol_3", {x: 665, y :315}],
				["Sol_3", {x: 735, y :315}],
				
				["Sol_pierre_D", {x: 105, y :595}],
				["Sol_pierre_D", {x: 175, y :595}],
				["Sol_pierre_D", {x: 245, y :595}],
				["Sol_pierre_D", {x: 315, y :525}],
				["Sol_pierre_D", {x: 385, y :525}],
				["Sol_pierre_D", {x: 455, y :525}],
				["Sol_pierre_D", {x: 525, y :525}],
				["Sol_pierre_D", {x: 595, y :525}],
				["Sol_pierre_D", {x: 665, y :525}],
				["Sol_pierre_D", {x: 735, y :525}],
				["Sol_pierre_D", {x: 805, y :525}],
				["Sol_pierre_D", {x: 875, y :525}],
				["Sol_pierre_D", {x: 945, y :525}],
				["Sol_pierre_D", {x: 1015, y :525}],
				["Sol_pierre_D", {x: 1085, y :525}],
				["Sol_pierre_D", {x: 1155, y :525}],
				
				["Sol_pierre2_D", {x: 315, y :595}],
				["Sol_pierre2_D", {x: 385, y :595}],
				["Sol_pierre2_D", {x: 455, y :595}],
				["Sol_pierre2_D", {x: 525, y :595}],
				["Sol_pierre2_D", {x: 595, y :595}],
				["Sol_pierre2_D", {x: 665, y :595}],
				["Sol_pierre2_D", {x: 735, y :595}],
				["Sol_pierre2_D", {x: 805, y :595}],
				["Sol_pierre2_D", {x: 875, y :595}],
				["Sol_pierre2_D", {x: 945, y :595}],
				["Sol_pierre2_D", {x: 1015, y :595}],
				*/
            ];
              stage.loadAssets(levelAssets);  
			  
            //load level assets
            
            stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
		   
        });