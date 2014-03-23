include ('affichage/menu.js');	
include ('affichage/fin.js');	
include ('affichage/touche.js');	

// Fenêtre des scores / vies
	Q.scene("gameStats", function(stage) {
    	var statsContainer = stage.insert(new Q.UI.Container({
        		fill: "rgb(192,192,192)",
                x: wi/2,
                y: hi-21,
                border: 1,
                w: wi-2,
                h: 40
            })
        );

 		var lives = stage.insert(new Q.UI.Text({ 
                label: "Lives x ",
                x: -wi/3,
                y: 1,
				family : "comic sans ms",
				size : 21
        }),statsContainer);
				
		var temps = stage.insert(new Q.UI.Text({ 
                label: "Temps : 00:00",
                x: wi/3.5,
                y: 1,
				family : "comic sans ms",
				size : 21
            }),statsContainer);	
			
		var aud = stage.insert(new Q.UI.Button({
			fill: "transparent",
 	        asset: "audio.png",
			opacity: 0.5,
        	x: wi-20,
        	y: 20,
        	w: 29,
        	h: 28
   		}));
			
		aud.on("click",function() {
		if (scene_courante != null && !pause && !music){	
			if (scene_courante == "lvl1"){
				Q.audio.play('lvl1.mp3',{ loop: true });
				document.cookie = 'Musique=true; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
				music = true;
			}
			
			if (scene_courante == "lvl2"){
				Q.audio.play('lvl2.mp3',{ loop: true });
				document.cookie = 'Musique=true; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
				music = true;
			}
			
			if (scene_courante == "lvl3"){
				Q.audio.play('lvl3.mp3',{ loop: true });
				document.cookie = 'Musique=true; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
				music = true;
			}
			
			if (scene_courante == "lvl4"){
				Q.audio.play('lvl4.mp3',{ loop: true });
				document.cookie = 'Musique=true; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
				music = true;
			}
			
			if (scene_courante == "lvl5"){
				Q.audio.play('lvl5.mp3',{ loop: true });
				document.cookie = 'Musique=true; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
				music = true;
			}
			
		}else{
			Q.audio.stop(); 
			document.cookie = 'Musique=false; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
			music = false;
		}
		});
		
		});
	
// Degat
	Q.scene("Degat", function(stage){
		var pt = stage.insert(new Q.UI.Button({
			fill: "transparent",
			asset: "degats.png",
        	x: wi-(wi/2),
        	y: hi-(hi/2),
   		}));
	});

// Reinitialiser un stage
Q.scene("Blanc", function(stage){
});
	
	
//setup level 1, @TODO make it so that it could be multiple levels?
Q.scene("flocon",function(stage) {
	
	if (scene_courante == 'lvl1'){
	
		var flocon1 = new Q.neige({x: (Math.random() * (2000 - 100) + 100), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1});
		stage.insert(flocon1);
		
		var flocon2 = new Q.neige({x: (Math.random() * (2000 - 100) + 100), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1});
		stage.insert(flocon2);
	
		flocon3 = new Q.neige({x: (Math.random() * (2000 - 100) + 100), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1});
		stage.insert(flocon3);
		
		flocon4 = new Q.neige({x: (Math.random() * (2000 - 100) + 100), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1});
		stage.insert(flocon4);
		
		flocon5 = new Q.neige({x: (Math.random() * (2000 - 100) + 100), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1});
		stage.insert(flocon5);
		
		flocon6 = new Q.neige({x: (Math.random() * (2000 - 100) + 100), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1});
		stage.insert(flocon6);
		
		flocon7 = new Q.neige({x: (Math.random() * (2000 - 100) + 100), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1});
		stage.insert(flocon7);
		
	}
	
	else{
	
		var flocon1 = new Q.neige({x: (Math.random() * (2700 - 300) + 300), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1, ay : 6, ax : 0});
		stage.insert(flocon1);
		
		var flocon2 = new Q.neige({x: (Math.random() * (2700 - 300) + 300), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1, ay : 2, ax : 0});
		stage.insert(flocon2);
	
		flocon3 = new Q.neige({x: (Math.random() * (2700 - 300) + 300), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1, ay : 20, ax : 0});
		stage.insert(flocon3);
		
		flocon4 = new Q.neige({x: (Math.random() * (2700 - 300) + 300), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1, ay : 7, ax : 0});
		stage.insert(flocon4);
		
		flocon5 = new Q.neige({x: (Math.random() * (2700 - 300) + 300), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1, ay : 15, ax : 0});
		stage.insert(flocon5);
		
		flocon6 = new Q.neige({x: (Math.random() * (2700 - 300) + 300), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1, ay : 50, ax : 0});
		stage.insert(flocon6);
		
		flocon7 = new Q.neige({x: (Math.random() * (2700 - 300) + 300), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1, ay : 10, ax : 0});
		stage.insert(flocon7);
		
		var flocon8 = new Q.neige({x: (Math.random() * (2700 - 300) + 300), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1, ay : 30, ax : 0});
		stage.insert(flocon8);
		
		var flocon9 = new Q.neige({x: (Math.random() * (2700 - 300) + 300), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1, ay : 1, ax : 0});
		stage.insert(flocon2);
	
		flocon10 = new Q.neige({x: (Math.random() * (2700 - 300) + 300), vy : (Math.random() * (10 - 5) + 5), rangeY : 2000, level : 1, ay : 55, ax : 0});
		stage.insert(flocon10);
		
	
	}
	/*		
	var levelAssets = [	
	["neige", {x: (Math.random() * (2700 - 300) + 300), y : 20, vy : 400, rangeY : 2000,}],
	 */
});