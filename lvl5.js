// Setup level 1

Q.scene("level5",function(stage) {		
	var background = new Q.TileLayer({
		dataAsset: "Lvl5.tmx",
		layerIndex: 0,
		sheet: "tiles",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
		
    stage.insert(background);
           
    stage.collisionLayer(new Q.TileLayer({ 
		dataAsset: "Lvl5.tmx",
		layerIndex:1,
		sheet: "tiles",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_DEFAULT }));
            
    var player = stage.insert(new Q.Tomate());
          
    var levelAssets = [
		
			["Sol_5", {x: 105 , y : 385, asset : "pierre_haut2.png"}],
			["Sol_5", {x: 175 , y : 385, asset : "pierre_haut2.png"}],
			
		
		// Premier niveau
			["Sol_1Boss", {x: 385 , y : 945}],
			["Sol_1Boss", {x: 455 , y : 945}],
			["Sol_1Boss", {x: 525 , y : 945}],
			["Sol_1Boss", {x: 595 , y : 945}],
			["Sol_1Boss", {x: 665 , y : 945}],
			["Sol_1Boss", {x: 735 , y : 945}],
			["Sol_1Boss", {x: 805 , y : 945}],
			["Sol_1Boss", {x: 875 , y : 945}],
			["Sol_1Boss", {x: 945 , y : 945}],
			["Sol_1Boss", {x: 1015 , y : 945}],
			["Sol_1Boss", {x: 1085 , y : 945}],
			["Sol_1Boss", {x: 1155 , y : 945}],
			["Sol_fin", {x: 1225 , y : 945}],
			["Boss", {x: 1295 , y : 805, coox : 1205, cooy : 875, tps: 1}],
			["Sol_fin", {x: 1295 , y : 945}],
			["Sol_fin", {x: 1365 , y : 945}],
			
		// Second niveau
			["Sol_1Boss", {x: 315 , y : 1155}],
			["Sol_2", {x: 385 , y : 1155}],
			["Sol_3", {x: 455 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 525 , y : 1155}],
			["Sol_3", {x: 595 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 665 , y : 1155}],
			["Sol_3", {x: 735 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 805 , y : 1155}],
			["Sol_3", {x: 875 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 945 , y : 1155}],
			["Sol_3", {x: 1015 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 1085 , y : 1155}],
			["Sol_3", {x: 1155 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 1225 , y : 1155}],
			["Sol_3", {x: 1295 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 1365 , y : 1155}],
			["Sol_1Boss", {x: 1435 , y : 1155}],
			
		// Troisème niveau
			["Sol_3", {x: 385 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_2", {x: 455 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_3", {x: 525 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_2", {x: 595 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_3", {x: 665 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_2", {x: 735 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_3", {x: 805 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_2", {x: 875 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_3", {x: 945 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_2", {x: 1015 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_3", {x: 1085 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_2", {x: 1155 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_3", {x: 1225 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_2", {x: 1295 , y : 1225, asset : "fond_pierre.png"}],
			["Sol_3", {x: 1365 , y : 1225, asset : "fond_pierre.png"}],
			
		// Troisème niveau
			["Sol_2", {x: 385 , y : 1295, asset : "fond_pierre.png"}],
			["Mal", {x: 455 , y : 1295}],
			["Sol_2", {x: 525 , y : 1295, asset : "fond_pierre.png"}],
			["Mal", {x: 595 , y : 1295}],
			["Sol_2", {x: 665 , y : 1295, asset : "fond_pierre.png"}],
			["Sol_2", {x: 735 , y : 1295, asset : "fond_pierre.png"}],
			["Sol_2", {x: 805 , y : 1295, asset : "fond_pierre.png"}],
			["Sol_2", {x: 875 , y : 1295, asset : "fond_pierre.png"}],
			["Sol_2", {x: 945 , y : 1295, asset : "fond_pierre.png"}],
			["Sol_2", {x: 1015 , y : 1295, asset : "fond_pierre.png"}],
			["Sol_2", {x: 1085 , y : 1295, asset : "fond_pierre.png"}],
			["Mal", {x: 1155 , y : 1295}],
			["Sol_2", {x: 1225 , y : 1295, asset : "fond_pierre.png"}],
			["Mal", {x: 1295 , y : 1295}],
			["Sol_2", {x: 1365 , y : 1295, asset : "fond_pierre.png"}],
			
			
			["Sol_jump", {x: 315 , y : 1225}],
			["Sol_jump", {x: 1435 , y : 1225}],
			
			

			
			
    ];
            
	stage.loadAssets(levelAssets);  

    stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
});