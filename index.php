<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" type="text/css" id="css" href="style.css"/>
    </head>
    
	<body >
    
 <script src="script/include.js"></script>
 <script src="script/jquery.js"></script>
 <script src="script/textEffect.js"></script>
 <script src="script/jcanvas.min.js"></script>
 <script src="script/novacancy.js"></script>
 
 <script src="lib/quintus.js"></script>
 <script src="lib/quintus_2d.js"></script>
 <script src="lib/quintus_2d2.js"></script>
 <script src="lib/quintus_anim.js"></script>
 <script src="lib/quintus_audio.js"></script>
 <script src="lib/quintus_input.js"></script>
 <script src="lib/quintus_scenes.js"></script>
 <script src="lib/quintus_sprites.js"></script>
 <script src="lib/quintus_touch.js"></script>
 <script src="lib/quintus_ui.js"></script>
 
	<div id='loading'>
		<div id='loading_container'>
        	Loading...
        	<div id='loading_progress'>
            </div>
      	</div>
    </div>
    
	<canvas id='Quintus' width='960' height='610' style="position: absolute; left: 0; top: 0; z-index: 0;"></canvas>
    
	<!--
    <canvas id='Jquery' width='960' height='300' style="position: absolute; left: 0; top: 0; z-index: 1;"></canvas>
    <div id = 'Jquery' width='960' height='300' style="position: absolute; left: 0; top: 0; z-index: 1;"></div>

     
	<script>
		var widt = ((document.documentElement.clientWidth -960)/2)-1;
		var obj = document.getElementById('Jquery');
		obj.style.left = widt+"px";
	</script>


	<script>
		setInterval(function(){$('#Jquery').novacancy();}, 1000);
	</script>
	-->

<script>	
	var wi = 960;
	var hi = 610;
	
	// Initialisation du moteur de jeu
    var Q = Quintus()
        .include("Audio, Sprites, Scenes, Input, 2D, 2D2, Touch, UI, Anim")
		.setup("Quintus", {
            width: 960,
            height: 610,
			upsampleWidth:  420, 
  			upsampleHeight: 320,  
			downsampleWidth: 1024, 
  			downsampleHeight: 768 ,
			maximize: "touch"
		})
		.enableSound()
		.controls()
		.touch();
		
		Q.audio.enableWebAudioSound();

    // Création 
		include ('bind.js');
		include ('personnage.js');
        include ('ennemis.js');
		include ('components.js');
		include ('bouton.js');
		include ('affichage.js');
		include ('tuto.js');		
		
	// Ajout des scenes lvl
		include ('lvl1.js');
		include ('lvl2.js');
		include ('lvl3.js');
		include ('lvl4.js');
		include ('lvl5.js');
		
		
	// Charge tous les éléments
        Q.load([
			
			"tiles_map.png", "orange.png", "tomate.png", "banane.png", "ananas.png",
			"dessous.png", "jump.png", "jumpn.png", "slime3.png", "push.png", "push2.png",
			"push3.png","tomateboss.png",
			"Lvl1.tmx", "Lvl2.tmx", "Lvl3.tmx", "Lvl4.tmx", "Lvl5.tmx", "men.tmx",
			"fond_pierre.png","fond_pierre_haut.png", "fond_pierre_haut2.png",
			"fond_pierre2.png", "pierre_haut.png", "pierre_haut2.png", "pierre_terre.png",
			"grille70.png", "grille200.png","grille140.png", "grille200H.png",
			"htmltiles.jpg", "pause.png", "play.png", "mort.png", "bullet.png", "fraise.png",
			"plateforme.png", "plateforme2.png", "cabine.png", "prof.png", "tetedemort.png",
			"bouletr.png", "pastequeSP.png", "boule.png", "Autruche.jpg", "cage.png",
			
			"lvl1.mp3", "lvl2.mp3", "sprite.json",
			"rire.mp3","dessous_neige.png","creature.mp3", "boss.mp3",,"bienvenue.mp3","pop.mp3",
			"canon.mp3", "saut.mp3","fin.mp3","tut.mp3",
			
			]
		, function() {
			Q.sheet("tiles","tiles_map.png", {tilew: 70, tileh: 70});  
			Q.sheet("tilesmenu","htmltiles.jpg", {tilew: 70, tileh: 70}); 
			Q.compileSheets("pastequeSP.png","sprite.json");
			//Q.sheet("pastequeSP","pastequeSP.png", { "tilew": 201, "tileh": 300,"sx": 0,"sy": 0});  			
			Q.stageScene("Debut");
			
		}, { 
			progressCallback: function(loaded,total) {
   				var element = document.getElementById("loading_progress");
    			element.style.width = Math.floor(loaded/total*100) + "%";
  			}	
        });
 
</script>

		</div>  
    </body>
</html>