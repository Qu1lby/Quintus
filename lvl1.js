// Setup level 1

Q.scene("level1",function(stage) {	
	
	var background = new Q.TileLayer({
		dataAsset: "Lvl1.tmx",
		layerIndex: 0,
		sheet: "tiles",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
		
    stage.insert(background);
           
    stage.collisionLayer(new Q.TileLayer({ 
		dataAsset: "Lvl1.tmx",
		layerIndex:1,
		sheet: "tiles",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_DEFAULT }));
            
    var player = stage.insert(new Q.Orange());
          
    var levelAssets = [
		
		// Premier niveau
			["Sol_5", {x: 105 , y : 245}],
			["Sol_5", {x: 175 , y : 245}],
			["Sol_5", {x: 245 , y : 245}],
			["Sol_pierre1_D", {x: 315 , y : 245}],
			["Sol_pierre3_D", {x: 385 , y : 245}],
			["Sol_pierre2_D", {x: 455 , y : 245}],
			["Sol_pierre2_D", {x: 525 , y : 245}],
			["Sol_pierre3_D", {x: 595 , y : 245}],
			["Sol_pierre1_D", {x: 665 , y : 245}],
			["Sol_5", {x: 735 , y : 245}],
			["Sol_5", {x: 805 , y : 245}],
			["grille140", {x: 975 , y : 145}],
			["Sol_jump_neige", {x: 490 , y : 385}],
			["bouton", {x: 488 , y : 350, coox : 975, cooy : 145}],
						
			["Sol_5", {x: 1085 , y : 245}],
			["Sol_5", {x: 1015 , y : 245}],
		
		
			["Mal", {x: 1085 , y : 35}],
			["Mal", {x: 875 , y : 35}],
			
			["Sol_jump_neige", {x: 1295 , y : 385}],
			["Sol_jump_neige", {x: 1505 , y : 245}],
			["Sol_5", {x: 1715 , y : 315}],
		
			["HorizontalPlatform", {x: 1715, y : 650, rangeX: 300, vx : 150, asset: "plateforme2.png"  }],		
			["HorizontalPlatform", {x: 1300, y : 800, rangeX: 400, vx : 200, asset: "plateforme2.png"  }],	
			["HorizontalPlatform", {x: 670, y : 750, rangeX: 200, vx : 150, asset: "plateforme2.png"  }],
			
			["HorizontalPlatform", {x: 400, y : 1020, rangeX : 1600, vx : 100, asset: "cabine.png", type: Q.SPRITE_NONE}],
				
			["GroundEnemy", {x: 1710 , y : 245, asset: "slime3.png"}],
			
		// Second niveau
			["Sol_pierre2_D", {x: 105 , y : 875}],	
			["Sol_pierre2_D", {x: 175 , y : 875}],
			["Sol_pierre2_D", {x: 245 , y : 875}],
			
		// Colone de gauches
			["Sol_pierre1_P", {x: 105 , y : 945}],
			["Sol_pierre1_P", {x: 175 , y : 945}],
			["Sol_pierre1_P", {x: 245 , y : 945}],
			["Sol_pierre1_P", {x: 105 , y : 1015}],
			["Sol_pierre1_P", {x: 175 , y : 1015}],
			["Sol_pierre1_P", {x: 245 , y : 1015}],
			["Sol_pierre1_P", {x: 105 , y : 1085}],
			["Sol_pierre1_P", {x: 175 , y : 1085}],
			["Sol_pierre1_P", {x: 245 , y : 1085}],
			["Sol_pierre1_P", {x: 105 , y : 1155}],
			["Sol_pierre1_P", {x: 175 , y : 1155}],
			["Sol_pierre1_P", {x: 245 , y : 1155}],
			["Sol_pierre1_P", {x: 105 , y : 1225}],
			["Sol_pierre1_P", {x: 175 , y : 1225}],
			["Sol_pierre1_P", {x: 245 , y : 1225}],
			["Sol_pierre1_P", {x: 105 , y : 1295}],
			["Sol_pierre1_P", {x: 175 , y : 1295}],
			["Sol_pierre1_P", {x: 245 , y : 1295}],
			["Sol_pierre1_P", {x: 105 , y : 1365}],
			["Sol_pierre1_P", {x: 175 , y : 1365}],
			["Sol_pierre1_P", {x: 245 , y : 1365}],
			
			["Sol_1", {x: 105 , y : 1435}],
			["casedestruc", {x: 175 , y : 1435, asset:"fond_pierre2.png"}],
			["Sol_1", {x: 245 , y : 1435}],
			
		// Troisème niveau
			["Sol_pierre1_D", {x: 385 , y : 1855}],
			["Sol_pierre1_D", {x: 455 , y : 1855}],
			["Sol_pierre1_D", {x: 525 , y : 1855}],
			["Sol_pierre1_D", {x: 595 , y : 1855}],
			["Sol_pierre1_D", {x: 665 , y : 1855}],
			["Sol_pierre1_D", {x: 735 , y : 1855}],
			
			["Sol_5", {x: 805 , y : 1855, asset: "pierre_terre.png"}],
			
			["Sol_pierre2_T", {x: 1155 , y : 1855}],
			["Sol_pierre2_T", {x: 1225 , y : 1855}],
			["Sol_pierre2_T", {x: 1295 , y : 1855}],
			["Sol_pierre2_T", {x: 1365 , y : 1855}],
			["Sol_pierre2_T", {x: 1435 , y : 1855}],
			["Sol_fin", {x: 1505 , y : 1855, asset : "pierre_terre.png"}],
			["Sol_pierre2_T", {x: 1575 , y : 1855}],
			
			["Mal", {x: 1155 , y : 1925}],
			["Sol_jump", {x: 1225 , y : 1925}],
			["Mal", {x: 1295 , y : 1925}],
			["Sol_jump", {x: 1365 , y : 1925}],
			["Mal", {x: 1435 , y : 1925}],
			["Sol_jump", {x: 1505 , y : 1925}],
			["Mal", {x: 1575 , y : 1925}],
			
			["DrawEnnemy", {x: 1505 , y : 1600, coox : 1480, cooy : 1550}],
			["Sol_5", {x: 1505 , y : 1700}],
			
			["Fin", {x: 1900 , y : 1785, asset: "banane.png"}],	
			["Fin", {x: 1900 , y : 1785, asset: "cage.png"}],	
    ];
            
	stage.loadAssets(levelAssets);  

    stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
});