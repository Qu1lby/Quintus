//setup level 1, @TODO make it so that it could be multiple levels?
Q.scene("level2",function(stage) {
		
	var background = new Q.TileLayer({ dataAsset: "Lvl2.tmx", layerIndex: 0, sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
	stage.insert(background);
   
	stage.collisionLayer(new Q.TileLayer({ dataAsset: "Lvl2.tmx", layerIndex:1,  sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_DEFAULT }));
	
	var player = stage.insert(new Q.Banane());
	
	var levelAssets = [


		["DrawEnnemy", {x: 1645 , y : 735, coox : 1615, cooy : 1085, tps : 1, asset:"chou.png"}],
		["Sol_5", {x: 1505 , y : 1155}],


		["Sol_fin", {x: 1645 , y : 1155}],
		["Sol_5", {x: 1505 , y : 1225, asset: "fond_pierre.png"}],		

		["Sol_5", {x: 1645 , y : 805}],							

		["Fin", {x: 1505 , y : 1365, asset: "ananas.png"}],		
		["Sol_5", {x: 1505 , y : 1364, asset: "cage.png"}],				
		
		["Sol_5", {x: 875 , y : 1505}],
		["Sol_5", {x: 945 , y : 1505}],
		["Sol_5", {x: 805 , y : 1505}],
		["Sol_5", {x: 735 , y : 1505}],
		
		["Sol_5", {asset: "fond_pierre.png", x: 1225 , y : 1015}],
		
		
		["Sol_5", {asset: "fond_pierre.png",x: 1365 , y : 805}],
		["Sol_5", {asset: "fond_pierre.png",x: 1435 , y : 805}],
		["Sol_5", {asset: "fond_pierre.png",x: 1505 , y : 805}],
				
		//["Mal", {x: 1295 , y : 1085}],
		["Mal", {x: 2415 , y : 945}],
		["Mal", {x: 735 , y : 385}],			

		["GroundEnemy", {x: 1995 , y : 1040, asset: "slime3.png"}],	
		["GroundEnemy", {x: 1300 , y : 525, asset: "slime3.png"}],					
		["GroundEnemy", {x: 525 , y : 1040, asset: "slime3.png"}],	
		
		// -25 y pour tous les boutons
		["bouton", {x: 455 , y : 1460, coox : 875, cooy :1505}],
		["bouton", {x: 455 , y : 1460, coox : 945, cooy :1505}],
		["bouton", {x: 455 , y : 1460, coox : 805, cooy :1505}],
		["bouton", {x: 455 , y : 1460, coox : 735, cooy :1505}],
		["bouton", {x: 455 , y : 1460, coox : 315, cooy :1435}],
		["bouton", {x: 455 , y : 1460, coox : 315, cooy :1365}],
		["bouton", {x: 455 , y : 1460, coox : 315, cooy :1295}],
		
		["bouton", {x: 385 , y : 1040, coox : 1065, cooy : 330}],
		
		["bouton_pasteque", {x: 455 , y : 1460, coox : 150, cooy :1400}],
		
		["bouton", {x: 2555 , y : 690, coox : 2320, cooy :665}],
		["bouton", {x: 2415 , y : 690, coox : 2625, cooy :1365}],
		
		["bouton", {x: 2275 , y : 1040, coox : 1715, cooy :1225}],
		["bouton", {x: 2275 , y : 1040, coox : 1715, cooy :1295}],
		
		["bouton", {x: 2695 , y : 1390, coox : 1260, cooy :1085}],
		
		["bouton_boss", {x: 1505, y : 550, coox: 1645, cooy :805}],
		

		["bouton", {asset: "push.png", x: 875, y : 20, coox: 1274, cooy :525}],
		

		
		
		["Sol_jump", {x: 1715 , y : 1365}],
		
		["Sol_jump", {x: 1015 , y : 1365}],
		
		["Sol_pierre2_D", {x: 1785 , y : 1085}],
		["Sol_pierre2_D", {x: 1855 , y : 1085, asset: "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 1855 , y : 1015}],
		["Sol_pierre2_D", {x: 1925 , y : 1085, asset: "fond_pierre.png"}],
		["Sol_pierre1_DB", {x: 1995 , y : 1085, asset: "dessous_neige.png"}],
		["Sol_pierre2_D", {x: 2065 , y : 1085}],
		
		["Sol_pierre2_D", {asset: "fond_pierre.png", x: 315 , y : 1435}],
		["Sol_pierre2_D", {asset: "fond_pierre.png", x: 315 , y : 1365}],
		["Sol_pierre2_D", {asset: "fond_pierre.png", x: 315 , y : 1295}],
		
		["Sol_pierre2_D", {x: 1295 , y : 1505}],	
		["Sol_pierre2_D", {x: 1225 , y : 1505}],			
		["Sol_pierre2_D", {x: 1155 , y : 1505}],			
		["Sol_pierre2_D", {x: 1085 , y : 1505}],
		["Sol_pierre2_D", {x: 1015 , y : 1505}],
		
		["Sol_pierre2_D", {x: 1925 , y : 945}],
		["Sol_pierre2_D", {x: 1995 , y : 875}],
		["Sol_pierre2_D", {x: 2065 , y : 805}],
		
		["Sol_pierre2_D", {x: 1715 , y : 1505}],
		["Sol_pierre2_D", {x: 1785 , y : 1505}],
		["Sol_jump", {x: 1855 , y : 1505, asset: "jumpn.png"}],
		["Sol_jump", {x: 2065 , y : 1505, asset: "jumpn.png"}],
		
		["Sol_pierre2_D", {x: 2135 , y : 1505}],
		["Sol_pierre2_D", {x: 2205 , y : 1505}],
		["Sol_pierre2_D", {x: 2275 , y : 1505}],
		["Sol_pierre2_D", {x: 2345 , y : 1505}],
		["Sol_pierre2_D", {x: 2415 , y : 1505}],
		
		["Sol_pierre2_D", {x: 805 , y : 1155}],
		["Sol_pierre2_D", {x: 735 , y : 1085}],
		["Sol_pierre2_D", {x: 665 , y : 1085}],
		
		
		["Sol_5", {asset: "fond_pierre.png",x: 1715 , y : 1295}],
		["Sol_5", {asset: "fond_pierre.png",x: 1715 , y : 1225}],
		
		["Sol_jump", {x: 875 , y : 1015}],
		["Sol_jump", {x: 945 , y : 805}],
		["Sol_jump", {x: 735 , y : 665}],
		["Sol_jump", {x: 455 , y : 665}],	
		["Sol_jump", {x: 385 , y : 455}],					
		["Sol_jump", {x: 595 , y : 315}],
		["Sol_jump", {x: 735 , y : 315}],	
		["Sol_jump", {x: 875 , y : 315}],				

		
		["Sol_jump", {x: 1995 , y : 1295}],	
		["Sol_jump", {x: 2415 , y : 1225}],		
		["Sol_jump", {x: 2625 , y : 1085}],	
		["Sol_jump", {x: 2695 , y : 875}],					
		["Sol_jump", {x: 2625 , y : 1085}],	
		
		["Sol_jump", {x: 2485 , y : 1435, asset: "jumpn.png"}],

		["Sol_pierre2_D", {x: 1085, y : 455, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 1225, y : 525, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 1155, y : 525, asset : "fond_pierre.png"}],	
		["Sol_pierre2_D", {x: 1225, y : 455, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 1155, y : 455, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 1225, y : 595, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 1155, y : 595, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 1225, y : 665, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 1155, y : 665, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 1225, y : 735, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 1155, y : 735, asset : "fond_pierre.png"}],		
		["Sol_pierre2_D", {x: 1225, y : 805, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 1155, y : 805, asset : "fond_pierre.png"}],	
		["Sol_pierre2_D", {x: 1225, y : 875, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 1155, y : 875, asset : "fond_pierre.png"}],	
		["Sol_pierre2_D", {x: 1225, y : 945, asset : "fond_pierre.png"}],
		
		["Sol_pierre2_D", {x: 385 , y : 805}],
		["Sol_pierre2_D", {x: 385 , y : 945}],
		["Mal", {x: 455 , y : 804}],
		["Sol_5", {x: 455 , y : 945}],
		["Sol_pierre2_D", {x: 455 , y : 1015, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 525 , y : 805}],
		["Mal", {x: 595 , y : 944}],
		["Sol_5", {x: 595 , y : 875, asset : "fond_pierre.png"}],
		["Sol_pierre2_D", {x: 595 , y : 805}],
		["Mal", {x: 665 , y : 944}],

		["Sol_pierre1_DB", {x: 875, y : 105}],	
				
		["grille140", {x: 2325, y : 630}],
		["grille70", {x: 1260 , y : 1085}],
		["grille70", {x: 1274 , y : 525}],
		["grille140", {x: 2615 , y : 1330}],				
		["grille200", {x: 1065 , y : 330}],


	];

	
	  stage.loadAssets(levelAssets);  
	  
	//load level assets
	
	stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h}); 
});