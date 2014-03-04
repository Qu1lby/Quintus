Q.scene("tut1", function(stage) {
		if (music){
			Q.audio.play("bienvenue.mp3");
		}
		
		var Opacite = stage.insert(new Q.UI.Container({
        	fill: "rgb(0,0,0)",
			opacity : 0.7,
            x: 0,
            y: 0,
            w: wi*2,
            h: hi*2
        }));
		
		
		var Menu = stage.insert(new Q.UI.Container({
			fill: "rgb(243,107,107)",
			x: wi/2,
			y: hi/2+15,
			w: wi/2,
            h: 200
		}));
		
			
		var mort = stage.insert(new Q.UI.Button({
			fill: "transparent",
			asset: "prof.png",
        	x: wi-130,
        	y: hi-160,
   		}));
		
		
		var msg = stage.insert(new Q.UI.Button({ 
            label: "Jouer",
            x: 0,
            y: 60,
			border: 1,
			w: 100,
			fill: "rgb(225,225,225)"
        }),Menu);
		
		var tuto = stage.insert(new Q.UI.Text({ 
            label: "Bienvenue jeune fruit ! Je m'appelle Franck\n",
            x: 0,
            y: -30,
			family : "comic sans ms",
			size: 18
        }),Menu);
		
		var tuto = stage.insert(new Q.UI.Text({ 
            label: "C'est moi qui vais t'apprendre à jouer, allons-y !",
            x: 0,
            y: 0,
			family : "comic sans ms",
			size: 16
        }),Menu);
							
							
		msg.on("click",function() {
      		Q.stageScene('tut2',2);
			if (music){
				Q.audio.play("tut.mp3");
			}
     	});	
	});

//-----------------------------------------------------------
	Q.scene("tut2", function(stage) {
		var Menu = stage.insert(new Q.UI.Container({
			fill: "rgb(255,255,255)",
			x: wi/2,
			y: hi/1.25,
			border: 1,
			w: wi/2,
            h: 100
		}));
		
			
		var mort = stage.insert(new Q.UI.Button({
			fill: "transparent",
			asset: "prof.png",
        	x: wi-130,
        	y: hi-160,
   		}));
		
		
		var tuto = stage.insert(new Q.UI.Text({ 
            label: "Tu vois ces cases grisées ?",
            x: 0,
            y: -15,
			family : "comic sans ms",
			size: 17
        }),Menu);
		
		var tuto = stage.insert(new Q.UI.Text({ 
            label: "Elles disparaitront si tu passes trop souvent dessus !",
            x: 0,
            y: 15,
			family : "comic sans ms",
			size: 15
        }),Menu);					
	});
//-----------------------------------------------------------

Q.scene("tut3", function(stage) {
		var Menu = stage.insert(new Q.UI.Container({
			fill: "rgb(255,255,255)",
			x: wi/2,
			y: hi/1.25,
			border: 1,
			w: wi/2,
            h: 100
		}));
		
			
		var mort = stage.insert(new Q.UI.Button({
			fill: "transparent",
			asset: "prof.png",
        	x: wi-130,
        	y: hi-160,
   		}));
		
		
		var tuto = stage.insert(new Q.UI.Text({ 
            label: "Ces plateformes vont se révéler très utiles..",
            x: 0,
            y: -15,
			family : "comic sans ms",
			size: 17
        }),Menu);
		
		var tuto = stage.insert(new Q.UI.Text({ 
            label: "Mais prends garde quand tu essaies de les quitter !",
            x: 0,
            y: 15,
			family : "comic sans ms",
			size: 15
        }),Menu);					
	});
//-----------------------------------------------------------

Q.scene("tut4", function(stage) {
		var Menu = stage.insert(new Q.UI.Container({
			fill: "rgb(255,255,255)",
			x: wi/2,
			y: hi/1.25,
			border: 1,
			w: wi/2,
            h: 100
		}));
		
			
		var mort = stage.insert(new Q.UI.Button({
			fill: "transparent",
			asset: "prof.png",
        	x: wi-130,
        	y: hi-160,
   		}));
		
		
		var tuto = stage.insert(new Q.UI.Text({ 
            label: "Les choses sériseuses commencent ! Bonne chance !",
            x: 0,
            y: -15,
			family : "comic sans ms",
			size: 17
        }),Menu);
		
		var tuto = stage.insert(new Q.UI.Text({ 
            label: "Un conseil : Evites les balles",
            x: 0,
            y: 15,
			family : "comic sans ms",
			size: 15
        }),Menu);					
	});
	
//-----------------------------------------------------------

Q.scene("tut5", function(stage) {
		var Menu = stage.insert(new Q.UI.Container({
			fill: "rgb(255,255,255)",
			x: wi/2,
			y: hi/1.25,
			border: 1,
			w: wi/2,
            h: 100
		}));
		
			
		var mort = stage.insert(new Q.UI.Button({
			fill: "transparent",
			asset: "prof.png",
        	x: wi-130,
        	y: hi-160,
   		}));
		
		
		var tuto = stage.insert(new Q.UI.Text({ 
            label: "Ton aventure touche bientôt à son terme !",
            x: 0,
            y: -15,
			family : "comic sans ms",
			size: 17
        }),Menu);
		
		var tuto = stage.insert(new Q.UI.Text({ 
            label: "Achève le roi des Légumes !",
            x: 0,
            y: 15,
			family : "comic sans ms",
			size: 15
        }),Menu);					
	});