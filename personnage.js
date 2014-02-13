		//init : à la création
		//step : à chaque instant
		//damage : à chaque dommage
		
	Q.Sprite.extend("Orange",{
        init: function(p) {
        this._super(p, { asset: "orange.png", x: 200, y: 100, jumpSpeed: -400, lives: 2});
        this.add("2d, platformerControls"); 
        this.p.timeInvincible = 0;
		this.p.sol = 0; 	 // Retiens le dernier cube
		this.p.first = 1; 	 // Premier cube touché -> 0 (évite bug)
				
		this.p.maintenant = new Date();
		this.p.minute = 0;
		this.p.once = false;
		this.p.test = false;
		this.p.date_prec = this.p.maintenant;
   		this.p.secondeabs = 0; 
        },
			
		// Gère le temps que le personnage est en vie -> fin du lvl
   step: function(dt) {	
			if(this.p.timeInvincible == 0) {
			
       			var encoretjrs = new Date();				
					if (encoretjrs.getSeconds()>this.p.date_prec.getSeconds())
					{					
						this.p.secondeabs++;
						this.p.once = false;
					}else{
						 if (this.p.seconde == 60){
								this.p.secondeabs = 0;
								this.p.minute ++; 
							}
					}
					
				this.p.date_prec = encoretjrs;
				this.p.seconde = this.p.secondeabs;
				if((this.p.secondeabs<10) && (this.p.once == false)){
					 this.p.secondeabs = "0"+this.p.secondeabs;
					 this.p.once = true;
				}
					if(this.p.minute<10){ 
						var livesLabel = Q("UI.Text",1).at(1);
        			    livesLabel.p.label = "Temps : 0"+this.p.minute+" : "+this.p.secondeabs;	
					}else{
						var livesLabel = Q("UI.Text",1).at(1);
        			    livesLabel.p.label = "Temps : "+this.p.minute+" : "+this.p.secondeabs;	
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
	
		Q.Sprite.extend("Fraise",{
        init: function(p) {
        this._super(p, { asset: "orange.png", x: 100, y: 200, jumpSpeed: -525, lives: 1});
        this.add("2d, platformerControls"); 
        this.p.timeInvincible = 0;
		this.p.sol = 0; 	 // Retiens le dernier cube
		this.p.first = 1; 	 // Premier cube touché -> 0 (évite bug)
				
		this.p.maintenant = new Date();
		this.p.minute = 0;
		this.p.once = false;
		this.p.test = false;
		this.p.date_prec = this.p.maintenant;
   		this.p.secondeabs = 0; 
        },
			
		// Gère le temps que le personnage est en vie -> fin du lvl
   step: function(dt) {	
			if(this.p.timeInvincible == 0) {
			
       			var encoretjrs = new Date();				
					if (encoretjrs.getSeconds()>this.p.date_prec.getSeconds())
					{					
						this.p.secondeabs++;
						this.p.once = false;
					}else{
						 if (this.p.seconde == 60){
								this.p.secondeabs = 0;
								this.p.minute ++; 
							}
					}
					
				this.p.date_prec = encoretjrs;
				this.p.seconde = this.p.secondeabs;
				if((this.p.secondeabs<10) && (this.p.once == false)){
					 this.p.secondeabs = "0"+this.p.secondeabs;
					 this.p.once = true;
				}
					if(this.p.minute<10){ 
						var livesLabel = Q("UI.Text",1).at(1);
        			    livesLabel.p.label = "Temps : 0"+this.p.minute+" : "+this.p.secondeabs;	
					}else{
						var livesLabel = Q("UI.Text",1).at(1);
        			    livesLabel.p.label = "Temps : "+this.p.minute+" : "+this.p.secondeabs;	
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
	
		//init : à la création
		//step : à chaque instant
		//damage : à chaque dommage
		
	Q.Sprite.extend("Banane",{
        init: function(p) {
        this._super(p, { asset: "banane.png", x: 1505, y: 1085, jumpSpeed: -530, lives: 2});
        this.add("2d, platformerControls"); 
        this.p.timeInvincible = 0;
		this.p.sol = 0; 	 // Retiens le dernier cube
		this.p.first = 1; 	 // Premier cube touché -> 0 (évite bug)
		this.p.maintenant = new Date();
		this.p.minute = 0;
		this.p.once = false;
		this.p.date_prec = this.p.maintenant;
   		this.p.secondeabs = 0; 
        },
			
		// Gère le temps que le personnage est en vie -> fin du lvl
   step: function(dt) {	
			if(this.p.timeInvincible == 0) {
			
       			var encoretjrs = new Date();				
					if (encoretjrs.getSeconds()>this.p.date_prec.getSeconds())
					{					
						this.p.secondeabs++;
						this.p.once = false;
					}else{
						 if (this.p.seconde == 60){
								this.p.secondeabs = 0;
								this.p.minute ++; 
							}
					}
					
				this.p.date_prec = encoretjrs;
				this.p.seconde = this.p.secondeabs;
				if((this.p.secondeabs<10) && (this.p.once == false)){
					 this.p.secondeabs = "0"+this.p.secondeabs;
					 this.p.once = true;
				}
					if(this.p.minute<10){ 
						var livesLabel = Q("UI.Text",1).at(1);
        			    livesLabel.p.label = "Temps : 0"+this.p.minute+" : "+this.p.secondeabs;	
					}else{
						var livesLabel = Q("UI.Text",1).at(1);
        			    livesLabel.p.label = "Temps : "+this.p.minute+" : "+this.p.secondeabs;	
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
			if(this.p.y>1645){
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
	
	
		//init : à la création
		//step : à chaque instant
		//damage : à chaque dommage
		
	Q.Sprite.extend("Ananas",{
        init: function(p) {
        this._super(p, { asset: "ananas.png", x: 1505, y: 1085, jumpSpeed: -530, lives: 2});
        this.add("2d, platformerControls"); 
        this.p.timeInvincible = 0;
		this.p.sol = 0; 	 // Retiens le dernier cube
		this.p.first = 1; 	 // Premier cube touché -> 0 (évite bug)
				
		this.p.maintenant = new Date();
		this.p.minute = 0;
		this.p.once = false;
		this.p.date_prec = this.p.maintenant;
   		this.p.secondeabs = 0; 
        },
			
		// Gère le temps que le personnage est en vie -> fin du lvl
   step: function(dt) {	
			if(this.p.timeInvincible == 0) {
			
       			var encoretjrs = new Date();				
					if (encoretjrs.getSeconds()>this.p.date_prec.getSeconds())
					{					
						this.p.secondeabs++;
						this.p.once = false;
					}else{
						 if (this.p.seconde == 60){
								this.p.secondeabs = 0;
								this.p.minute ++; 
							}
					}
					
				this.p.date_prec = encoretjrs;
				this.p.seconde = this.p.secondeabs;
				if((this.p.secondeabs<10) && (this.p.once == false)){
					 this.p.secondeabs = "0"+this.p.secondeabs;
					 this.p.once = true;
				}
					if(this.p.minute<10){ 
						var livesLabel = Q("UI.Text",1).at(1);
        			    livesLabel.p.label = "Temps : 0"+this.p.minute+" : "+this.p.secondeabs;	
					}else{
						var livesLabel = Q("UI.Text",1).at(1);
        			    livesLabel.p.label = "Temps : "+this.p.minute+" : "+this.p.secondeabs;	
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
			if(this.p.y>1645){
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