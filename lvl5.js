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
		
			["Sol_5", {x: 105 , y : 385}],
			["Sol_5", {x: 175 , y : 385}],
			["Sol_5", {x: 245 , y : 385}],
		// Premier niveau
			["Sol_B5", {x: 175 , y : 1015}],
			["Sol_B5", {x: 245 , y : 945}],
			["Sol_B2", {x: 315 , y : 945}],
			["Sol_B2", {x: 385 , y : 945}],
			["Sol_B2", {x: 455 , y : 945}],
			["Sol_B2", {x: 525 , y : 945}],
			["Sol_B2", {x: 595 , y : 945}],
			["Sol_B2", {x: 665 , y : 945}],
			["Sol_B2", {x: 735 , y : 945}],
			["Sol_B2", {x: 805 , y : 945}],
			["Sol_B2", {x: 975 , y : 945}],
			["Sol_B2", {x: 1045 , y : 945}],

			
			
    ];
            
	stage.loadAssets(levelAssets);  

    stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
});