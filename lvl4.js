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
			
			["bouton_case_droite_multi", {asset: "push4.png",x: 505, y: 1505, coox : 805, cooy : 1575, coox2 : 875, cooy2 : 1575, coox3 : 945, cooy3 : 1575, coox4 : 1015, cooy4 : 1575}],
			
			 
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
			
			["GroundEnemy", {x: 945, y :  1015 ,vx : 100, asset: "slime3.png"}],
			["GroundEnemy", {x: 598, y :  945,vx : 100, asset: "slime3.png"}],
			
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
			
			
			["Sol_pierre4_H", {x: 1295 , y : 525}],
			["Sol_pierre4_H", {x: 1365 , y : 525}],
			["Sol_pierre4_H", {x: 1225 , y : 525}], 
			["Sol_pierre4_H", {x: 1435 , y : 525}],
			["Sol_pierre4_H", {x: 1505 , y : 525}],
			["Sol_pierre4_H", {x: 1575 , y : 525}],
			["Sol_pierre4_H", {x: 1645 , y : 525}],
			["Sol_pierre4_H", {x: 1715 , y : 525}],
			["Sol_pierre4_H", {x: 1785 , y : 525}],
			["Sol_pierre4_H", {x: 1855 , y : 525}],
			["Sol_pierre4_H", {x: 1925 , y : 525}],
			["Sol_pierre4_H", {x: 1995 , y : 525}],
			["Sol_pierre4_H", {x: 2065 , y : 525}],
			["Sol_pierre4_H", {x: 2135 , y : 525}],
			["Sol_pierre4_H", {x: 2205 , y : 525}],
			["Sol_pierre4_H", {x: 2275 , y : 525}],
			["Sol_pierre4_H", {x: 2345 , y : 525}],
			["Sol_pierre4_H", {x: 2415 , y : 525}],
			["Sol_pierre4_H", {x: 2485 , y : 525}],
			["Sol_pierre4_H", {x: 2555 , y : 525}],
			["Sol_pierre4_H", {x: 2625 , y : 525}],

			
			//sous sol deuxieme etage
			["Sol_pierre1_H", {x: 455 , y : 525}],
			
			["Sol_pierre1_H", {x: 1365 , y : 805}],
			
			["Sol_pierre1_H", {x: 1435 , y : 805}],
			["casedestruc", {x: 1505 , y : 805}],
			["Sol_pierre1_H", {x: 1575 , y : 805}],
			
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
			
			
			["DrawEnnemy", {x: 2975 , y : 731, coox : 2945, cooy : 745, tps :5,  asset : "boite.png"}],
			["Sol_fin", {asset: "fond_pierre.png",x: 2975 , y : 805}],		
			["DrawEnnemy", {x: 1720 , y : 1225, coox : 1755, cooy : 1235, tps :5,  asset : "boite2.png"}],
			["Sol_fin", {asset: "fond_pierre.png",x: 1715 , y : 1295}],	
			
			//Petit ilot de droite
			["Sol_pierre1_H", {x: 2905 , y : 875}],
			//["Sol_pierre1_H", {x: 3045 , y : 875}],
			["Sol_jump", {x: 3115 , y : 875}],
			["Sol_pierre1_H", {x: 2835 , y : 875}],
			
			["Mal", {x: 2975 , y : 875}],
			["Sol_jump", {x: 3045 , y : 1015}],
			
			
			["bouton", {x: 2765, y: 620, coox : 3330, cooy : 945}],
			
			["grille200", {asset: "grille200H.png", x: 3330, y: 945}],
			
			
			["bouton", {x: 2765, y: 620, coox : 3330, cooy : 945}],
			
			//bloc pour le boss
			["DrawEnnemy", {x: 3045 , y : 1435, coox : 3015, cooy : 1445, tps : 3, asset:"carotte.png"}],
			
			
			["Sol_G5", {asset: "fond_pierre.png",x: 2065 , y : 1505}],
			["Sol_G5", {asset: "fond_pierre.png",x: 2275 , y : 1505}],
			["Sol_G5", {asset: "fond_pierre.png",x: 2485 , y : 1505}],
			["Sol_G5", {asset: "fond_pierre.png",x: 2695 , y : 1505}],
			["Sol_fin", {asset: "fond_pierre.png",x: 3045 , y : 1505}],
			["Sol_fin", {asset: "fond_pierre.png",x: 3115 , y : 1505}],
			["Sol_fin", {asset: "fond_pierre.png",x: 3145 , y : 1435}],
			
			
			["Sol_jump", {x: 2065 , y : 1645}],
			["Sol_jump", {x: 2275 , y : 1645}],
			["Sol_jump", {x: 2485 , y : 1645}],
			["Sol_jump", {x: 2695 , y : 1645}],
			["Sol_jump", {x: 2905 , y : 1645}],

			
			["bouton", {x: 2905, y: 1600, coox : 2275, cooy : 1505}],
			["bouton", {x: 2275, y: 1600, coox : 2695, cooy : 1505}],
			["bouton", {x: 2695, y: 1600, coox : 2485, cooy : 1505}],
			["bouton", {x: 2485, y: 1600, coox : 2065, cooy : 1505}],
			["bouton", {x: 2065, y: 1600, coox : 3115, cooy : 1505}],
			["bouton", {x: 2065, y: 1600, coox : 3045, cooy : 1505}],
			["bouton", {x: 2065, y: 1600, coox : 3145, cooy : 1435}],
			
			["Fin", {x: 48*70+35 , y : 20*70+35, asset: "tomate.png", type: Q.SPRITE_NONE}],	
			["Fin", {x: 48*70+35 , y : 20*70+35, asset: "cage.png", type: Q.SPRITE_NONE}],
			
			            ];
              stage.loadAssets(levelAssets);  
			  
            //load level assets
            
            stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
		   
        });