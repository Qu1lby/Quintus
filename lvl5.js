// Setup level 1
var playerTomate;
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
            
		playerTomate = stage.insert(new Q.Tomate());
          
    var levelAssets = [
		
			["Sol_5", {x: 105 , y : 385, asset : "pierre_haut2.png"}],
			["Sol_5", {x: 175 , y : 385, asset : "pierre_haut2.png"}],
			
		
		// Premier niveau
			["Sol_2Boss", {x: 385 , y : 945}],
			["Sol_2Boss", {x: 455 , y : 945}],
			["Sol_2Boss", {x: 525 , y : 945}],
			["Sol_2Boss", {x: 595 , y : 945}],
			["Sol_2Boss", {x: 665 , y : 945}],
			["Sol_2Boss", {x: 735 , y : 945}],
			["Sol_2Boss", {x: 805 , y : 945}],
			["Sol_2Boss", {x: 875 , y : 945}],
			["Sol_2Boss", {x: 945 , y : 945}],
			["Sol_2Boss", {x: 1015 , y : 945}],
			["Sol_2Boss", {x: 1085 , y : 945}],
			["Sol_2Boss", {x: 1155 , y : 945}],
			["Sol_2Boss", {x: 1225 , y : 945}],
			["Boss", {x: 1220 , y : 805, coox : 1205, cooy : 875, tps: 2}],
			["Sol_2Boss", {x: 1295 , y : 945}],
			["Sol_2Boss", {x: 1365 , y : 945}],
			
		// Second niveau
			
			["Sol_3", {x: 385 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 455 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_3", {x: 525 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 595 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_3", {x: 665 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 735 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_3", {x: 805 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 875 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_3", {x: 945 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 1015 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_3", {x: 1085 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 1155 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_3", {x: 1225 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_2", {x: 1295 , y : 1155, asset : "pierre_haut2.png"}],
			["Sol_3", {x: 1365 , y : 1155, asset : "pierre_haut2.png"}],

			
			
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
			["DrawEnnemy", {x: 1575 , y : 1055, coox : 1545, cooy : 1085, tps : 6,  asset : "boite.png"}],
			["Sol_fin", {x: 1575 , y : 1155, asset : "fond_pierre.png"}],
			
		// Quatrieme niveau
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

    stage.add("viewport").follow(playerTomate,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
});