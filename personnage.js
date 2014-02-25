//init : à la création
//step : à chaque instant
//damage : à chaque dommage

	Q.Sprite.extend("Orange",{
        init: function(p){
    	    this._super(p, {asset: "orange.png", x: 200, y: 100, jumpSpeed: -400, lives: 2});
    	    this.add("2d, platformerControls"); 
    	    this.p.timeInvincible = 0;
			this.p.sol = 0;
			this.p.first = 1;
			this.p.changeMusic = false;
			
			this.p.maintenant = new Date();
			this.p.minute = 0;
			this.p.once = false;
			this.p.date_prec = this.p.maintenant;
   			this.p.secondeabs = 0; 
			this.on("bump.bottom",this,"stomp");
			},

		stomp: function(collision) {
			if(collision.obj.isA("HorizontalPlatform")) {
				this.p.x = collision.obj.p.x; // make the player stay on the platform
			}
				
			if(collision.obj.isA("VerticalPlatform")) {
				this.p.y = collision.obj.p.y + (collision.obj.p.y - this.p.y); // make the player stay on the platform
			}
			
			if(collision.obj.isA("Fin")){
				Q.clearStages();
				Q.stageScene("GoodendGame",1, {label: "Victory"})
			}
		},

		// Gère le temps que le personnage est en vie -> fin du lvl
  		step: function(dt){	
			if(this.p.timeInvincible == 0) {
       			var encoretjrs = new Date();				
				if (encoretjrs.getSeconds()>this.p.date_prec.getSeconds()){					
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
        		    livesLabel.p.label = "Temps : 0"+this.p.minute+":"+this.p.secondeabs;	
				}else{
					var livesLabel = Q("UI.Text",1).at(1);
        		    livesLabel.p.label = "Temps : "+this.p.minute+":"+this.p.secondeabs;	
				}
			}
			
			var livesLabel = Q("UI.Text",1).first();
			livesLabel.p.label = "Lives x "+this.p.lives;

        	if(Q.inputs["left"]){
            	this.p.flip = "x";
            }

            if(Q.inputs["right"]&& this.p.direction == "left"){
				this.p.flip = false;                    
            }

            if(this.p.timeInvincible > 0){
               	this.p.timeInvincible = Math.max(this.p.timeInvincible - dt, 0);
            }
/*
		// Détruit le personnage s'il tombe premier niveau
			if(this.p.y> 420 && this.p.y<470 && this.p.x<1800){
				this.destroy();
				Q.clearStages();
				Q.stageScene("endGame",1)
			}

		// Détruit le personnage s'il tombe second niveau
			if(this.p.y> 1100 && this.p.y<1200 && this.p.x>300){
				this.destroy();
				Q.clearStages();
				Q.stageScene("endGame",1)
			}
		
		// Détruit le personnage s'il tombe troisième niveau
			if(this.p.y> 2000){
				this.destroy();
				Q.clearStages();
				Q.stageScene("endGame",1)
			}*/
			
			if(this.p.y>= 1700 && !this.p.changeMusic){
				if (music){
				Q.audio.stop();
				Q.audio.play("boss.mp3",{ loop: true });
				this.p.changeMusic = true;}
			}
			
		// Tutoriel

		if(this.p.x >= 700 && this.p.x <= 800){
			Q.stageScene('Blanc',2);
			nouvelle = new Q.bouton({x: 200 , y : 205, coox : 975, cooy : 145}),
			Q.stage().insert(nouvelle);
		}
        },

        damage: function(){
            if(!this.p.timeInvincible){
                this.p.lives--;
                this.p.timeInvincible = 1;
                
				if (music){				
					Q.audio.play("canon.mp3");
				}
				
                if(this.p.lives == 0) {
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

// ------------------------------------------------------------------------------------------------------------------
	Q.Sprite.extend("Fraise",{
        init: function(p){
       		this._super(p, { asset: "orange.png", x: 17*70+35, y: 11*70+35, speed : 400,jumpSpeed: -900, lives: 1 });
        	this.add("2d, platformerControls"); 
        	this.p.timeInvincible = 0;
			this.p.sol = 0; 	 // Retiens le dernier cube
			this.p.first = 1; 	 // Premier cube touché -> 0 (évite bug)

			this.p.maintenant = new Date();
			this.p.minute = 0;
			this.p.once = false;
			this.p.date_prec = this.p.maintenant;
   			this.p.secondeabs = 0; 
			
			this.on("bump.bottom",this,"stomp");
        },

			stomp: function(collision) {
			if(collision.obj.isA("HorizontalPlatform")) {
		
			  this.p.x = collision.obj.p.x; // make the player stay on the platform
			}
			
			if(collision.obj.isA("VerticalPlatform")) {
		
			  this.p.y = collision.obj.p.y - (collision.obj.p.y - this.p.y); // make the player stay on the platform
				// alert(this.p.y);
			}
		  },
		  
		// Gère le temps que le personnage est en vie -> fin du lvl
 		step: function(dt){	
			if(this.p.timeInvincible == 0){	
       			var encoretjrs = new Date();				
				if (encoretjrs.getSeconds()>this.p.date_prec.getSeconds()){					
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
        		    livesLabel.p.label = "Temps : 0"+this.p.minute+":"+this.p.secondeabs;	
				}else{
					var livesLabel = Q("UI.Text",1).at(1);
        		    livesLabel.p.label = "Temps : "+this.p.minute+":"+this.p.secondeabs;	
				}
			}

			var livesLabel = Q("UI.Text",1).first();
            livesLabel.p.label = "Lives x "+this.p.lives;

        	if(Q.inputs["left"]){
            	this.p.flip = "x";
            }

            if(Q.inputs["right"]&& this.p.direction == "left"){
				this.p.flip = false;                    
            }

            if(this.p.timeInvincible > 0) {
               	this.p.timeInvincible = Math.max(this.p.timeInvincible - dt, 0);
            }

			if(this.p.y>30*70){
				this.destroy();
				Q.clearStages();
				Q.stageScene("endGame",1, {label: "Game Over"})
			}
        },

        damage: function(){
            if(!this.p.timeInvincible){
                this.p.lives--;
                this.p.timeInvincible = 1;
                    
                if(this.p.lives == 0){
                    this.destroy();
					Q.clearStages();
                    Q.stageScene("endGame",1, { label: "Game Over" }); 
                }else{
                    var livesLabel = Q("UI.Text",1).first();
                    livesLabel.p.label = "Lives x "+this.p.lives;
                }
            }
        },
    });


// ------------------------------------------------------------------------------------------------------------------
	Q.Sprite.extend("Banane",{
        init: function(p){
       		this._super(p, { asset: "banane.png", x: 1505, y: 1085, jumpSpeed: -530, lives: 3});
        	this.add("2d, platformerControls"); 
        	this.p.timeInvincible = 0;
			this.p.sol = 0; 	 // Retiens le dernier cube
			this.p.first = 1; 	 // Premier cube touché -> 0 (évite bug)
			this.p.maintenant = new Date();
			this.p.minute = 0;
			this.p.once = false;
			this.p.date_prec = this.p.maintenant;
   			this.p.secondeabs = 0; 
			this.on("bump.bottom",this,"stomp");
        },

			stomp: function(collision) {
			if(collision.obj.isA("HorizontalPlatform")) {
		
			  this.p.x = collision.obj.p.x; // make the player stay on the platform
			}
			
			if(collision.obj.isA("VerticalPlatform")) {
		
			  this.p.y = collision.obj.p.y + (collision.obj.p.y - this.p.y); // make the player stay on the platform
			}
			
			if(collision.obj.isA("Fin")){
				this.destroy();
				Q.clearStages();
				//setCookie('fini','fin du lvl2',time()+24*3600);
				Q.stageScene("GoodendGame",1, {label: "Victory"})
			}
		  },

		// Gère le temps que le personnage est en vie -> fin du lvl
   		step: function(dt){	
			if(this.p.timeInvincible == 0) {
				var encoretjrs = new Date();				
				if (encoretjrs.getSeconds()>this.p.date_prec.getSeconds()){					
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
        		    livesLabel.p.label = "Temps : 0"+this.p.minute+":"+this.p.secondeabs;	
				}else{
					var livesLabel = Q("UI.Text",1).at(1);
        		    livesLabel.p.label = "Temps : "+this.p.minute+":"+this.p.secondeabs;	
				}
			}

			var livesLabel = Q("UI.Text",1).first();
            livesLabel.p.label = "Lives x "+this.p.lives;

        	if(Q.inputs["left"]){
            	this.p.flip = "x";
            }

            if(Q.inputs["right"]&& this.p.direction == "left"){
				this.p.flip = false;                    
            }

            if(this.p.timeInvincible > 0) {
               	this.p.timeInvincible = Math.max(this.p.timeInvincible - dt, 0);
            }

			if(this.p.y>1645){
				this.destroy();
				Q.clearStages();
				Q.stageScene("endGame",1, {label: "Game Over"})
			}
			

			
			

        },

        damage: function(){
            if(!this.p.timeInvincible){
                this.p.lives--;
                this.p.timeInvincible = 1;
                    
                if(this.p.lives == 0) {
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

// ------------------------------------------------------------------------------------------------------------------
	Q.Sprite.extend("Ananas",{
        init: function(p){
        	this._super(p, { asset: "ananas.png", x: 105, y: 1505, jumpSpeed: -400, lives: 2});
        	this.add("2d, platformerControls"); 
        	this.p.timeInvincible = 0;
			this.p.sol = 0; 	 // Retiens le dernier cube
			this.p.first = 1; 	 // Premier cube touché -> 0 (évite bug)

			this.p.maintenant = new Date();
			this.p.minute = 0;
			this.p.once = false;
			this.p.date_prec = this.p.maintenant;
   			this.p.secondeabs = 0; 
			this.on("bump.bottom",this,"stomp");
        },

			stomp: function(collision) {
			if(collision.obj.isA("HorizontalPlatform")) {
		
			  this.p.x = collision.obj.p.x; // make the player stay on the platform
			}
			
			if(collision.obj.isA("VerticalPlatform")) {
		
			  this.p.y = collision.obj.p.y ; // make the player stay on the platform
			}
		  },

		// Gère le temps que le personnage est en vie -> fin du lvl
  		step: function(dt){	
			if(this.p.timeInvincible == 0){
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
        		    livesLabel.p.label = "Temps : 0"+this.p.minute+":"+this.p.secondeabs;	
				}else{
					var livesLabel = Q("UI.Text",1).at(1);
        		    livesLabel.p.label = "Temps : "+this.p.minute+":"+this.p.secondeabs;	
				}
			}

			var livesLabel = Q("UI.Text",1).first();
            livesLabel.p.label = "Lives x "+this.p.lives;

        	if(Q.inputs["left"]){
            	this.p.flip = "x";
            }

            if(Q.inputs["right"]&& this.p.direction == "left"){
				this.p.flip = false;                    
            }

            if(this.p.timeInvincible > 0) {
               	this.p.timeInvincible = Math.max(this.p.timeInvincible - dt, 0);
            }

			if(this.p.y>1645){
				this.destroy();
				Q.clearStages();
				Q.stageScene("endGame",1, {label: "Game Over"})
			}

        },

        damage: function(){
            if(!this.p.timeInvincible){
                this.p.lives--;
                this.p.timeInvincible = 1;
                    
                if(this.p.lives == 0){
                    this.destroy();
					Q.clearStages();
                    Q.stageScene("endGame",1, { label: "Game Over" }); 
                } else{
                    var livesLabel = Q("UI.Text",1).first();
                    livesLabel.p.label = "Lives x "+this.p.lives;
                }
            }
        },
    });