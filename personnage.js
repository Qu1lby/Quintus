   		//init : à la création
		//step : à chaque instant
		//damage : à chaque dommage
		
	Q.Sprite.extend("Orange",{
        init: function(p) {
        this._super(p, { asset: "orange.png", x: 100, y: 200, jumpSpeed: -400, lives: 2});
        this.add("2d, platformerControls"); 
        this.p.timeInvincible = 0;
		this.p.sol = 0; 	 // Retiens le dernier cube
		this.p.first = 1; 	 // Premier cube touché -> 0 (évite bug)
				
		this.p.maintenant = new Date();
		this.p.minute = -1;
		this.p.minbool = false;
        },
			
        step: function(dt) {
					
			if(this.p.timeInvincible == 0) {
            
       			var encoretjrs = new Date();
				
				if (encoretjrs.getSeconds()==this.p.maintenant.getSeconds())
				{
					var secondeabs = 0;
						if(!this.p.minbool){this.p.minute ++; this.p.minbool = true;}
				}else{
					if (encoretjrs.getSeconds()>this.p.maintenant.getSeconds())
					{
						var secondeabs = Math.round(encoretjrs.getSeconds() - this.p.maintenant.getSeconds());
						this.p.minbool = false;
					}else if ( (encoretjrs.getSeconds()<this.p.maintenant.getSeconds())){
								var secondeabs = 59 -  this.p.maintenant.getSeconds() +(encoretjrs.getSeconds()+1);
								this.p.minbool = false;}
					}
				
			this.p.seconde = secondeabs;
			if(secondeabs<10){ secondeabs = "0"+secondeabs;}
			
			if(this.p.minute<10){ 
				var livesLabel = Q("UI.Text",1).at(1);
        	    livesLabel.p.label = "Temps : 0"+this.p.minute+" : "+secondeabs;	
			}else{
				var livesLabel = Q("UI.Text",1).at(1);
        	    livesLabel.p.label = "Temps : "+this.p.minute+" : "+secondeabs;	
			}
			}
			
					
        	if(Q.inputs["left"]) {
            	this.p.flip = "x";
				
            } 

            if(Q.inputs["right"]&& this.p.direction == "left") {
				this.p.flip = false;                    
            }
				
            if(this.p.timeInvincible > 0) {
               	this.p.timeInvincible = Math.max(this.p.timeInvincible - dt, 0);
            }

			// Détruit le personnage s'il tombe sur la 1ere partie du Lvl 1
			if(this.p.y> 450 && this.p.y<500 && this.p.x<1870){
				this.destroy();
				Q.clearStages();
				Q.stageScene("endGame",1, {label: "Game Over"})
			}
        },
			
        damage: function() {
            //only damage if not in "invincible" mode
            if(!this.p.timeInvincible) {
                this.p.lives--;
                    
                //will be invincible for 1 second
                this.p.timeInvincible = 1;
                    
                if(this.p.lives<0) {
                    this.destroy();
					Q.clearStages();
                    Q.stageScene("endGame",1, { label: "Game Over" }); 
                }
                else {
                    var livesLabel = Q("UI.Text",1).first();
                    livesLabel.p.label = "Lives x "+this.p.lives;
                }
            }
        },
    });