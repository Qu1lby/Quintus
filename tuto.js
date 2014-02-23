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
		
							
		/*men.on("click",function() {
			Q.clearStages();
      		Q.stageScene('niveau');
			scene_courante = "niveau";
			scene_prec = "menu";
     	});	*/
	});