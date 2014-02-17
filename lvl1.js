// Setup level 1
Q.scene("level1",function(stage) {		
	var background = new Q.TileLayer({
		dataAsset: "Lvl1.tmx",
		layerIndex: 0,
		sheet: "tiles",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
		
        stage.insert(background);
           
        stage.collisionLayer(new Q.TileLayer({ dataAsset: "Lvl1.tmx", layerIndex:1,  sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_DEFAULT }));
            
        var player = stage.insert(new Q.Orange());
          
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
			["grille140", {x: 945 , y : 145}],
			
			["Sol_5", {x: 1085 , y : 245}],
			["Sol_5", {x: 1015 , y : 245}],
			
			/*["Sol_2n", {x: 1085 , y : 245}],
			["Sol_2n", {x: 1015 , y : 245}],
			["Sol_2n", {x: 1085 , y : 315}],
			["Sol_2n", {x: 1155 , y : 245}],
			["Sol_2n", {x: 1155 , y : 315}],
			["Sol_2n", {x: 1155 , y : 385}],
			*/

			["Sol_jump_neige", {x: 1295 , y : 315}],
			["Sol_jump_neige", {x: 1505 , y : 245}],
			["Sol_5", {x: 1715 , y : 315}],

			["Sol_pierre3_D", {x: 1855 , y : 665}],			
							
			["GroundEnemy", {x: 1710 , y : 245, asset: "slime3.png"}],
				
            ];
            
			stage.loadAssets(levelAssets);  

            stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
			
			
			var $canvas = $('#Jquery'); 
			$canvas.html('This text will dissapear after 3 seconds.');
timeout = setTimeout(function () {
   $canvas.fadeOut();
}, 3000);
			
			/*$canvas.drawText({
			fillStyle: '#9cf',
			strokeStyle: '#25a',
			strokeWidth: 2,
			x: 150, y: 100,
			fontSize: 48,
			fontFamily: 'Verdana, sans-serif',
			text: 'Hello'
			});*/
			
		
			//Canvas.SetZIndex(image1, 2);
		   
	});