        //setup level 1, @TODO make it so that it could be multiple levels?

		
	   Q.scene("level3",function(stage) {
				
            var background = new Q.TileLayer({ dataAsset: "Lvl3.tmx", layerIndex: 0, sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_NONE });
            stage.insert(background);
           
            stage.collisionLayer(new Q.TileLayer({ dataAsset: "Lvl3.tmx", layerIndex:1,  sheet: "tiles", tileW: 70, tileH: 70, type: Q.SPRITE_DEFAULT }));
            
            var player = stage.insert(new Q.Fraise());
            
            //level assets. format must be as shown: [[ClassName, params], .. ] 
            var levelAssets = [
				//spawn personnage
				["Sol_G5", {x: 16*70+35 , y : 12*70+35}],
				["Sol_G5", {x: 17*70+35 , y : 12*70+35}],
				["Sol_G5", {x: 18*70+35 , y : 12*70+35}],
			
				//ami a liberé
				["Fin", {x: 11*70+35 , y : 5*70+35, asset: "ananas.png", type: Q.SPRITE_NONE}],	
				["Fin", {x: 11*70+35 , y : 5*70+35, asset: "cage.png", type: Q.SPRITE_NONE}],
			
				["Fin", {x: 8*70+35 , y : 5*70+35, asset: "door2.png"}],
				["Fin", {x: 8*70+35 , y : 4*70+35, asset: "door1.png"}],
//-----------------------------Premier etage--------------------------------------------------			
				["Sol_pierre3_D", {asset : "pierre_haut2.png",x: 29*70+35 , y : 12*70+35}],
				["Sol_pierre3_D", {asset : "fond_pierre.png",x: 30*70+35 , y : 12*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 30*70+35 , y : 11*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 31*70+35 , y : 10*70+35}],
				
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 34*70+35 , y : 12*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 35*70+35 , y : 12*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 36*70+35 , y : 12*70+35}],
				
				["HorizontalPlatform", {x: 41*70, y : 11*70+15,vx :200, rangeX : 215 ,asset : "plateforme.png", defaultDirection: "right"}],
				["HorizontalPlatform", {x: 47*70+15, y : 10*70+35,vx :175, rangeX : 155 ,asset : "plateforme.png", defaultDirection: "right"}],
		
				["GroundEnemy", {scale: 1, x: 44*70, y :  12*70,vx : 200,coox : 51*70+35, cooy :15*70, asset: "slime3.png"}],
				["GroundEnemy", {x: 45*70, y :  12*70,vx : 150,coox : 54*70+65, cooy :13*70+15, asset: "slime3.png"}],




//------------------------------ Deuxieme etage-----------------------------------------------				
				["Sol_jump", {x: 54*70+35 , y : 16*70+35}],
				["Sol_jump", {x: 55*70+35 , y : 16*70+35}],
				
			
				
				["Sol_jump", {x: 11*70+35 , y : 24*70+35}],
				["Sol_jump", {x: 9*70+35 , y : 21*70+35}],
				
				["Sol_jump", {x: 29*70+35 , y : 25*70+35}],
			

				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 48*70+35 , y : 21*70+35}],
				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 50*70+35 , y : 21*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 55*70+35 , y : 21*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 57*70+35 , y : 21*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 52*70+35 , y : 21*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 51*70+35 , y : 21*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 17*70+35 , y : 5*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 21*70+35 , y : 5*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 25*70+35 , y : 5*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 56*70+35 , y : 5*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 59*70+35 , y : 7*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 60*70+35 , y : 7*70+35}],
				
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 49*70+35 , y : 21*70+35}],
			
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 47*70+35 , y : 21*70+35}],
				
				["boutonDestr2", {asset:"push4.png", x: 51*70+5 , y : 12*70+30, coox : 53*70+35, cooy :14*70+35, coox2 :53*70+35, cooy2:15*70+35}],
				["Sol_pierre2_D", {asset : "fond_pierre2.png",x: 53*70+35 , y : 14*70+35}],
				["Sol_pierre2_D", {asset : "fond_pierre2.png",x: 53*70+35 , y : 15*70+35}],
				
				
				["grille200", {scale : 0.77,asset: "grille200H.png", x: 54*70+65, y: 13*70+15}],
				["grille140", {scale: 1.1 , x: 51*70+35 , y : 15*70}],
				
				["Mal", { scale : 0.8,x: 45*70+25 , y : 15*70+25}],
				["Mal", {scale : 0.8, x: 43*70+25 , y : 17*70+25}],
				["Mal", {scale : 0.8, x: 41*70+25 , y : 19*70+25}],
				
				//pic 
				["Mal", {asset:"grille70bas.png", x: 24*70+35 , y : 19*70+35}],
				["Mal", {asset:"grille70bas.png", x: 25*70+35 , y : 19*70+35}],
				["Mal", {asset:"grille70bas.png", x: 26*70+35 , y : 19*70+35}],
				["Mal", {asset:"grille70bas.png", x: 27*70+35 , y : 19*70+35}],
				["Mal", {asset:"grille70bas.png", x: 28*70+35 , y : 19*70+35}],
				["Mal", {asset:"grille70bas.png", x: 29*70+35 , y : 19*70+35}],
				
				["Sol_pierre2_D", {asset : "pierre_haut.png",x: 54*70+35 , y : 14*70+35}],
				["Sol_pierre2_D", {asset : "fond_pierre2.png",x: 54*70+35 , y : 15*70+35}],
				
				["Sol_pierre2_D", {asset : "pierre_haut.png",x: 55*70+35 , y : 14*70+35}],
				["Sol_pierre2_D", {asset : "fond_pierre2.png",x: 55*70+35 , y : 15*70+35}],
				
				["boutonDestr2", {asset: "push3.png", x: 59*70+65 , y : 12*70+30, coox : 56*70+35, cooy :14*70+35, coox2 :56*70+35, cooy2:15*70+35}],
				
				["bouton_pasteque", {asset:"push4.png", x: 46*70+5 , y : 20*70+30, coox : 46*70, cooy :20*70}],
				
				
				["Sol_pierre2_D", {asset : "fond_pierre2.png",x: 56*70+35 , y : 14*70+35}],
				["Sol_pierre2_D", {asset : "fond_pierre2.png",x: 56*70+35 , y : 15*70+35}],
				
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 38*70+35 , y : 23*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 37*70+35 , y : 23*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 31*70+35 , y : 23*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 32*70+35 , y : 23*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 33*70+35 , y : 23*70+35}],
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 34*70+35 , y : 23*70+35}],
				
				["Sol_pierre1_H", {x: 25*70+35 , y : 22*70+35}],
				["Sol_pierre1_H", {x: 23*70+35 , y : 22*70+35}],
				["Sol_pierre1_H", {x: 21*70+35 , y : 22*70+35}],
				
				["Sol_pierre1_H", {x: 16*70+35 , y : 23*70+35}],
				["Sol_pierre1_H", {x: 15*70+35 , y : 23*70+35}],
			
				
				
				["HorizontalPlatform2", {x: 15*70+35, y : 19*70+20,vx :200, rangeX : 400 ,asset : "plateforme.png"}],
				["DrawEnnemy", {x: 23*70+25 , y : 18*70+35, coox : 23*70, cooy : 18*70+35, tps :2.5,  asset : "boite.png"}],
				["Sol_fin", {x: 23*70+35 , y : 19*70+35, asset : "fond_pierre.png"}],
				["Sol_jump", {x: 32*70+35 , y : 18*70+35}],
				["Sol_pierre1_DB", {x: 32*70+35 , y : 15*70+35, asset: "dessous.png"}],
				["DrawEnnemy", {x: 33*70+25 , y : 13*70+35, coox : 33*70, cooy : 13*70+35, tps :2.5,  asset : "boite.png"}],
				["Sol_fin", {x: 33*70+35 , y : 14*70+35, asset : "fond_pierre.png"}],
				
				["GroundEnemy", {scale : 1.3,x: 26*70+35, y :  14*70+35,vx : 105, asset: "slime3.png"}],
				["GroundEnemy", { x: 20*70+35, y :  14*70+35,vx : 150, asset: "slime3.png"}],
				["GroundEnemy", {scale : 0.7,x: 23*70, y :  14*70+35,vx : 195, asset: "slime3.png"}],

//------------------------------------ cote gauche du niveau  ----------------------------------------------				
				
				["Sol_jump", {x: 1*70+35 , y : 15*70+35}],
				["bouton", {asset: "push3.png", scale : 0.9, x: 7*70+65 , y : 10*70+30, coox : 2*70+65, cooy :15*70+15}],
				["grille200", {scale : 0.77,asset: "grille200H.png", x: 2*70+65, y: 15*70+15}],

				
				["Sol_pierre1_P", {x: 1*70+35 , y : 17*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 18*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 19*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 20*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 21*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 22*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 23*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 24*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 25*70+35}],
				["Sol_pierre1_P", {x: 1*70+35 , y : 26*70+35}],
			
				
				["Sol_pierre1_P", {x: 2*70+35 , y : 17*70+35}],
				["Sol_pierre1_P", {x: 2*70+35 , y : 18*70+35}],
				["Sol_pierre1_P", {x: 2*70+35 , y : 19*70+35}],
				["Sol_pierre1_P", {x: 2*70+35 , y : 20*70+35}],
				["Sol_pierre1_P", {x: 2*70+35 , y : 23*70+35}],
				["Sol_pierre1_P", {x: 2*70+35 , y : 26*70+35}],
				
				
				["Sol_pierre1_P", {x: 3*70+35 , y : 17*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 20*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 21*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 22*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 23*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 24*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 25*70+35}],
				["Sol_pierre1_P", {x: 3*70+35 , y : 26*70+35}],
				
				["Sol_pierre1_P", {x: 4*70+35 , y : 17*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 18*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 19*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 20*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 21*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 22*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 24*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 25*70+35}],
				["Sol_pierre1_P", {x: 4*70+35 , y : 26*70+35}],
				
				
//---------------------------------- Bas du Niveau-----------------------------------------------------------------
				
				["HorizontalPlatform", {x: 11*70+35, y : 28*70+35,vx :200, rangeX : 255 ,asset : "plateforme.png", defaultDirection: "right"}],
				["Sol_pierre1_P", {x: 17*70+35 , y : 29*70+35}],
				["Sol_pierre1_P", {x: 18*70+35 , y : 29*70+35}],
				
				["HorizontalPlatform", {x: 24*70+35, y : 28*70+35,vx :180, rangeX : 215 ,asset : "plateforme.png", defaultDirection: "right"}],
				["Sol_pierre1_P", {x: 29*70+35 , y : 29*70+35}],
				["Sol_pierre1_P", {x: 30*70+35 , y : 29*70+35}],
				["Sol_pierre1_P", {x: 31*70+35 , y : 29*70+35}],
				
				["HorizontalPlatform", {x: 36*70, y : 28*70+15,vx :200, rangeX : 215 ,asset : "plateforme.png", defaultDirection: "right"}],
				["Sol_jump", {x: 40*70+35 , y : 28*70+35}],
				["Sol_jump", {x: 44*70+35 , y : 28*70+35}],
				["Sol_jump", {x: 47*70+35 , y : 28*70+35}],
			
//-------------------------------- Cote droit du niveau ---------------------------------------------------------			
				["Sol_jump", {x: 62*70+35 , y : 28*70+35}],
				["Sol_jump", {x: 64*70+35 , y : 26*70+35, scale : 0.95}],
				["Sol_jump", {x: 61*70+25 , y : 24*70+55, scale : 0.85}],
				["Sol_jump", {x: 62*70+35 , y : 21*70+55, scale : 0.75}],
				["Sol_jump", {x: 64*70+35 , y : 18*70+70, scale : 0.65}],
				["Sol_jump", {x: 61*70+35 , y : 16*70+35, scale : 0.6}],
				["Sol_jump", {x: 63*70+35 , y : 13*70+45, scale : 0.55}],
				["Sol_jump", {x: 64*70+35 , y : 10*70+55, scale : 0.55}],
				["Sol_jump", {x: 61*70+35 , y : 9*70+35, scale : 0.55}],
				
				
//---------------------------------- Haut du niveau ---------------------------------------------------------------
				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 56*70+35 , y : 5*70+35}],
				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 52*70+35 , y : 5*70+35}],
				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 48*70+35 , y : 5*70+35}],
				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 49*70+35 , y : 5*70+35}],
				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 46*70+35 , y : 5*70+35}],
				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 44*70+35 , y : 5*70+35}],
				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 42*70+35 , y : 5*70+35}],
				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 40*70+35 , y : 5*70+35}],
				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 38*70+35 , y : 5*70+35}],
				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 36*70+35 , y : 5*70+35}],
				["Sol_pierre1_P", {asset : "pierre_haut2.png",x: 31*70+35 , y : 5*70+35}],
				
				["Sol_pierre2_D", {asset : "pierre_haut2.png",x: 29*70+35 , y : 4*70+35}],
				["DrawEnnemy", {x: 30*70+25 , y : 4*70+35, coox : 30*70+55, cooy : 4*70+35, tps :1.5,  asset : "patate.png"}],
				["Sol_fin", {x: 30*70+35 , y : 5*70+35, asset : "pierre_haut2.png"}],
				["GroundEnemy", {scale : 0.7,x: 23*70, y :  4*70+35,vx : 200, asset: "slime3.png"}],
				["GroundEnemy", {scale : 1.4,x: 19*70, y :  4*70+35,vx : 200, asset: "slime3.png"}],
				["GroundEnemy", {scale : 0.6,x: 50*70, y :  4*70+35,vx : 200, asset: "slime3.png"}],
				["GroundEnemy", {scale : 1.1,x: 34*70, y :  4*70+35,vx : 200, asset: "slime3.png"}],
			];
              stage.loadAssets(levelAssets);  
			  
            //load level assets
            
            stage.add("viewport").follow(player,{x: true, y: true},{minX: 0, maxX: background.p.w, minY: 0, maxY: background.p.h});
		   
		   
        });