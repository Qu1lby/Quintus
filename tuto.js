Q.scene("tut1", function(stage) {
		
		var Opacite = stage.insert(new Q.UI.Container({
        		fill: "rgb(0,0,0)",
				opacity : 0.7,
                x: 0,
                y: 0,
                w: wi*2,
                h: hi*2
        }));
		
		
		var Menu = stage.insert(new Q.UI.Container({
				fill: "rgb(255,255,153)",
				x: wi/2,
				y: hi/2,
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
                label: "Next",
                x: 0,
                y: 70,
				border: 1,
				w: 100,
				fill: "rgb(225,225,225)"
        }),Menu);
		
			var tuto = stage.insert(new Q.UI.Text({ 
                label: "Bienvenue jeune fruit ! Je suis Walter Bishop\n",
                x: 0,
                y: -30,
				size: 18
        }),Menu);
		
		var tuto = stage.insert(new Q.UI.Text({ 
                label: "C'est moi qui vais t'apprendre à jouer à Traps & Fruits !",
                x: 0,
                y: 0,
				size: 16
        }),Menu);
							
							
		msg.on("click",function() {
      		Q.stageScene('Blanc',2);
     	});	
	});