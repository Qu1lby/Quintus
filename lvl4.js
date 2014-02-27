        //setup level 2, @TODO make it so that it could be multiple levels?
        Q.scene("level4",function(stage) {
				
            var background = new Q.TileLayer({ dataAsset: "Lvl4.tmx", layerIndex: 0, sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
            stage.insert(background);
           
            stage.collisionLayer(new Q.TileLayer({ dataAsset: "Lvl4.tmx", layerIndex:1,  sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_DEFAULT }));
            
            var player = stage.insert(new Q.Ananas());
            
            //level assets. format must be as shown: [[ClassName, params], .. ] 
            var levelAssets = [
			
			
			
			//Spawn du personnages
			["Sol_G5", {x: 105 , y : 1575}],
			["Sol_G5", {x: 175 , y : 1575}],
			["Sol_G5", {x: 245 , y : 1575}],
			
			
			//["bouton2", {x: 245 , y : 1505, coox : 245, cooy :1365}],
			
			
			//Petit ilot a gauche (rdc)
			["Sol_pierre1_H", {x: 315 , y : 1505}],
			["Sol_pierre1_P", {x: 385 , y : 1505}],
			["Sol_pierre1_H", {x: 385 , y : 1435}],
			["Sol_pierre1_H", {x: 455 , y : 1365}],
			["Sol_pierre1_P", {x: 455 , y : 1435}],
			["Sol_pierre1_P", {x: 525 , y : 1365}],
			["Sol_pierre1_H", {x: 525 , y : 1295}],
			["Sol_pierre1_H", {x: 595 , y : 1365}],
			["Sol_pierre1_P", {x: 595 , y : 1435}],
			["Sol_pierre1_P", {x: 595 , y : 1505}],
			//["BOUTON TA RACE", {x: 525 , y : 1575}],
			["Sol_pierre1_H", {x: 805 , y : 1575}],
			["bouton", {x: 525, y: 1525}],
			
			
			//["UN PONT ICI", {x: 735 , y : 1645}],
			//["UN PONT ICI", {x: 805 , y : 1645}],
			//["UN PONT ICI", {x: 875 , y : 1645}],
			//["UN PONT ICI", {x: 945 , y : 1645}],
			
			
			//Test pont existant
			 ["Sol_G5", {x: 735 , y : 1575}],
			 ["Sol_G5", {x: 805 , y : 1575}],
			 ["Sol_G5", {x: 875 , y : 1575}],
			 ["Sol_G5", {x: 945 , y : 1575}],
			 
			 // A supprimer
			 ["Sol_jump", {x: 1365 , y : 1575}],
			 ["Sol_jump", {x: 1295 , y : 1365}],
			 ["Sol_jump", {x: 1225 , y : 1155}],
			 
			 //["VerticalPlatform", {x: 1365, y : 1505,vy :175, rangeY : 200 ,asset : "plateforme.png"}],
			
			
			// Apres le pont a gauche (rdc)
			["Sol_pierre1_H", {x: 1085 , y : 1575}],
			["Sol_pierre2_H", {x: 1155 , y : 1575}],
			["Sol_pierre2_H", {x: 1225 , y : 1575}],
			["Sol_pierre1_H", {x: 1295 , y : 1575}],
			
			// Premier etage a gauche
			
			["Sol_pierre2_H", {x: 1155 , y : 1085}],
			["Sol_pierre1_H", {x: 1085 , y : 1085}],
			["Sol_5", {asset: "pierre_haut.png",x: 1015 , y : 1085}],
			["casedestruc", {x: 945 , y : 1085}],
			["Sol_5", {asset: "pierre_haut.png",x: 875 , y : 1085}],
			//["Sol_pierre2_H", {x: 805 , y : 1085}],
			["Sol_pierre1_H", {x: 805 , y : 1015}],
			["Sol_pierre1_H", {x: 735 , y : 1015}],
			["Sol_pierre2_H", {x: 665 , y : 1015}],
			["Sol_pierre1_H", {x: 595 , y : 1015}],
			["Sol_pierre1_H", {x: 595 , y : 1015}],
			["Sol_pierre2_H", {x: 525 , y : 1015}],
			["Sol_pierre1_H", {x: 455 , y : 1015}],
			["Sol_pierre2_H", {x: 385 , y : 1015}],
			
			// a supprimer 
			
			
			["Sol_jump", {x: 315 , y : 1015}],
			["Sol_jump", {x: 245 , y : 805}],
			["Sol_jump", {x: 175 , y : 595}],
			
			//Deuxieme etage 
			["Sol_pierre1_P", {x: 805 , y : 525}],
			["Sol_pierre1_P", {x: 805 , y : 455}],
			["Sol_pierre1_P", {x: 805 , y : 385}],
			["Sol_pierre1_H", {x: 805 , y : 315}],
			["Sol_pierre1_P", {x: 735 , y : 455}],
			["Sol_pierre1_H", {x: 735 , y : 385}],
			["Sol_pierre1_P", {x: 665 , y : 525}],
			["Sol_pierre1_H", {x: 665 , y : 455}],
			["Sol_pierre1_H", {x: 595 , y : 525}],
			["Sol_pierre1_H", {x: 525 , y : 525}],
			["Sol_pierre1_H", {x: 455 , y : 525}],
			["Sol_pierre2_H", {x: 385 , y : 525}],
			
			["Sol_pierre1_H", {x: 1015 , y : 525}],
			["Sol_pierre1_H", {x: 1085 , y : 525}],
			["Sol_pierre2_H", {x: 1155 , y : 525}],
			["Sol_pierre1_H", {x: 1225 , y : 525}],
			
			
			["Sol_pierre4_H", {x: 1295 , y : 595}],
			["Sol_pierre4_H", {x: 1365 , y : 595}],
			["Sol_pierre4_H", {x: 1435 , y : 595}],
			["Sol_pierre4_H", {x: 1505 , y : 595}],
			["Sol_pierre4_H", {x: 1575 , y : 595}],
			["Sol_pierre4_H", {x: 1645 , y : 595}],
			["Sol_pierre4_H", {x: 1715 , y : 595}],
			["Sol_pierre4_H", {x: 1785 , y : 595}],
			["Sol_pierre4_H", {x: 1855 , y : 595}],
			["Sol_pierre4_H", {x: 1925 , y : 595}],
			["Sol_pierre4_H", {x: 1995 , y : 595}],
			["Sol_pierre4_H", {x: 2065 , y : 595}],
			["Sol_pierre4_H", {x: 2135 , y : 595}],
			["Sol_pierre4_H", {x: 2205 , y : 595}],
			["Sol_pierre4_H", {x: 2275 , y : 595}],
			["Sol_pierre4_H", {x: 2345 , y : 595}],
			["Sol_pierre4_H", {x: 2415 , y : 595}],
			["Sol_pierre4_H", {x: 2485 , y : 595}],
			["Sol_pierre4_H", {x: 2555 , y : 595}],
			["Sol_pierre4_H", {x: 2625 , y : 595}],
			
			//sous sol deuxieme etage
			["Sol_pierre1_H", {x: 455 , y : 525}],
			
			["Sol_pierre1_H", {x: 1715 , y : 805}],
			["Sol_pierre1_H", {x: 1785 , y : 805}],
			["Sol_pierre1_H", {x: 1855 , y : 805}],
			["Sol_pierre1_H", {x: 1925 , y : 805}],
			["Sol_pierre1_H", {x: 1995 , y : 805}],
			["Sol_pierre1_H", {x: 2065 , y : 805}],
			["Sol_pierre1_H", {x: 2135 , y : 805}],
			["Sol_pierre1_H", {x: 2205 , y : 805}],
			["Sol_pierre1_H", {x: 2275 , y : 805}],
			["Sol_pierre1_H", {x: 2345 , y : 805}],
			["Sol_pierre1_H", {x: 2415 , y : 805}],
			["Sol_pierre1_H", {x: 2485 , y : 805}],
			["Sol_pierre1_H", {x: 2555 , y : 805}],
			["Sol_pierre1_H", {x: 2625 , y : 805}],
			["Sol_pierre1_H", {x: 2695 , y : 805}],
			
			
			//Petit ilot de droite
			["Sol_pierre2_H", {x: 2905 , y : 875}],
			["Sol_pierre1_H", {x: 3045 , y : 875}],
			["Sol_pierre1_H", {x: 3115 , y : 875}],
			["Sol_pierre1_H", {x: 2905 , y : 665}],
			["Sol_pierre1_H", {x: 2835 , y : 595}],
			
			["bouton", {x: 2765, y: 620, coox : 3330, cooy : 945}],
			
			["grille200", {asset: "grille200H.png", x: 3330, y: 945}],
			
			            ];
              stage.loadAssets(levelAssets);  
			  
            //load level assets
            
            stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
		   
        });