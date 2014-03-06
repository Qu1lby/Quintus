// init : à la création
// step : à chaque instant
// damage : à chaque dommage


Q.animations('orangeSP', {
		run: {frames:[0,1,2,3], rate: 1/3}
});
	
	Q.Sprite.extend("Orange",{
        init: function(p){
    	    this._super(p, {x: 200, y: 100, jumpSpeed: -400, lives: 2, sheet: "orange", sprite: "orangeSP"});
    	    this.add("2d, platformerControls, animation"); 
    	    this.p.timeInvincible = 0;
			this.p.sol = 0;
			this.p.first = 1;
			this.p.tut3 = false;
			this.p.tut4 = false;
			
			this.p.maintenant = new Date();
			this.p.minute = 0;
			this.p.once = false;
			this.p.date_prec = this.p.maintenant;
   			this.p.secondeabs = 0; 
			this.on("bump.bottom",this,"stomp");
			this.play("run");
			},

		stomp: function(collision) {
			if(collision.obj.isA("HorizontalPlatform")) {
			// make the player stay on the platform 
				this.p.x = collision.obj.p.x; 
			}
				
			if(collision.obj.isA("VerticalPlatform")) {
			// make the player stay on the platform
				this.p.y = collision.obj.p.y + (collision.obj.p.y - this.p.y); 
			}
			
			if(collision.obj.isA("Fin")){
			
				score_l1 = score_l1 + (2*this.p.secondeabs);
				score_l1 = score_l1 + (100*this.p.minute);
				document.cookie = 'Lvl1='+score_l1+'; expires=Wed, 30 Dec 2015 00:00:00 UTC; path=/';
			
				Q.clearStages();
				Q.stageScene("GoodGame",1, {label: "Victory"})
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
				Q.stageScene("endGame",1);
				scene_courante = "GO";
				scene_prec = "lvl1";
                
			}

		// Détruit le personnage s'il tombe second niveau
			if(this.p.y> 1100 && this.p.y<1200 && this.p.x>300){
				this.destroy();
				Q.clearStages();
				Q.stageScene("endGame",1);
				scene_courante = "GO";
				scene_prec = "lvl1";
                
			}
		
		// Détruit le personnage s'il tombe troisième niveau
			if(this.p.y> 2000){
				this.destroy();
				Q.clearStages();
				Q.stageScene("endGame",1);
				scene_courante = "GO";
				scene_prec = "lvl1";
                
			}
*/			
			if(this.p.x> 1850 && this.p.y>500 && !this.p.tut3){
				Q.stageScene("tut3",2);
			}
			
			if(this.p.x> 100 && this.p.y>1700 && !this.p.tut4){
				Q.stageScene("tut4",2);
			}
			
			
		// Tutoriel
		if(this.p.x >= 700 && this.p.x <= 730){
			Q.stageScene('Blanc',2);
		}
		
		if(this.p.x >= 1500 && this.p.x <= 1600 && this.p.y >500 && !this.p.tut3){
			Q.stageScene('Blanc',2);
			this.p.tut3 = true;
		}
		
		if(this.p.x >= 700 && this.p.y >= 1700 && !this.p.tut4){
			Q.stageScene('Blanc',2);
			this.p.tut4 = true;
			Q.stage().locate(1505,1700).destroy();
		}
        },
		
        damage: function(){
            if(!this.p.timeInvincible){
                this.p.lives--;
				Q.stageScene("Degat",4);
				setTimeout(function(){Q.stageScene("Blanc",4);},500);
                this.p.timeInvincible = 1;
				
                if(this.p.lives == 0) {
                    this.destroy();
					Q.clearStages();
                    Q.stageScene("endGame",1, { label: "Game Over" }); 
					scene_courante = "GO";
					scene_prec = "lvl1";
                
                }else{
                    var livesLabel = Q("UI.Text",1).first();
                    livesLabel.p.label = "Lives x "+this.p.lives;
                }
            }
        },
    });

// ------------------------------------------------------------------------------------------------------------------
	Q.Sprite.extend("Fraise",{
        init: function(p){
       		this._super(p, { asset: "fraise.png", x: 17*70+35, y: 11*70+35, speed : 400,jumpSpeed: -900, lives: 1 });
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
				Q.stageScene("endGame",1, {label: "Game Over"});
				scene_courante = "GO";
				scene_prec = "lvl3";
                
			}
        },

       damage: function(){
            if(!this.p.timeInvincible){
                this.p.lives--;
				Q.stageScene("Degat",4);
				setTimeout(function(){Q.stageScene("Blanc",4);},500);
                this.p.timeInvincible = 1;
				
                if(this.p.lives == 0) {
                    this.destroy();
					Q.clearStages();
                    Q.stageScene("endGame",1, { label: "Game Over" }); 
					scene_courante = "GO";
					scene_prec = "lvl3";
                
                }else{
                    var livesLabel = Q("UI.Text",1).first();
                    livesLabel.p.label = "Lives x "+this.p.lives;
                }
            }
        },
    });


// ------------------------------------------------------------------------------------------------------------------
Q.animations('bananeSP', {
		run: {frames:[0,1,2,3], rate: 1/3}
});

	Q.Sprite.extend("Banane",{
        init: function(p){
       		this._super(p, {sheet: "banane", sprite: "bananeSP", x: 1505, y: 1085, jumpSpeed: -530, lives: 3});
        	this.add("2d, platformerControls, animation"); 
        	this.p.timeInvincible = 0;
			this.p.sol = 0; 	 // Retiens le dernier cube
			this.p.first = 1; 	 // Premier cube touché -> 0 (évite bug)
			this.p.changeMusic = false;		// True : music du boss est changé
			
			this.p.maintenant = new Date();
			this.p.minute = 0;
			this.p.once = false;
			this.p.date_prec = this.p.maintenant;
   			this.p.secondeabs = 0; 
			this.on("bump.bottom",this,"stomp");
			this.play("run");
        },

		stomp: function(collision) {
			if(collision.obj.isA("HorizontalPlatform")) {
			// make the player stay on the platform
				this.p.x = collision.obj.p.x; 
			}
				
			if(collision.obj.isA("VerticalPlatform")) {
			// make the player stay on the platform
				this.p.y = collision.obj.p.y + (collision.obj.p.y - this.p.y); 
			}
			
			if(collision.obj.isA("Fin")){
				this.destroy();
				Q.clearStages();
				//setCookie('fini','fin du lvl2',time()+24*3600);
				Q.stageScene("GoodGame",1, {label: "Victory"})
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

			if(this.p.y>1800){
				this.destroy();
				Q.clearStages();
				Q.stageScene("endGame",1, {label: "Game Over"});
				scene_courante = "GO";
				scene_prec = "lvl2";
                
			}
        },

       damage: function(){
            if(!this.p.timeInvincible){
                this.p.lives--;
				Q.stageScene("Degat",4);
				setTimeout(function(){Q.stageScene("Blanc",4);},500);
                this.p.timeInvincible = 1;
				
                if(this.p.lives == 0) {
                    this.destroy();
					Q.clearStages();
                    Q.stageScene("endGame",1, { label: "Game Over" }); 
					scene_courante = "GO";
					scene_prec = "lvl2";
                
                }else{
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
				Q.stageScene("endGame",1, {label: "Game Over"});
				scene_courante = "GO";
				scene_prec = "lvl4";
           
			}

        },

       damage: function(){
            if(!this.p.timeInvincible){
                this.p.lives--;
				Q.stageScene("Degat",4);
				setTimeout(function(){Q.stageScene("Blanc",4);},500);
                this.p.timeInvincible = 1;
				
                if(this.p.lives == 0) {
                    this.destroy();
					Q.clearStages();
                    Q.stageScene("endGame",1, { label: "Game Over" }); 
					scene_courante = "GO";
					scene_prec = "lvl4";
                
                }else{
                    var livesLabel = Q("UI.Text",1).first();
                    livesLabel.p.label = "Lives x "+this.p.lives;
                }
            }
        },
    });
	
// ------------------------------------------------------------------------------------------------------------------
	Q.Sprite.extend("Tomate",{
        init: function(p){
    	    this._super(p, {asset: "tomate.png", x: 120, y: 300, jumpSpeed: -400, lives: 2});
    	    this.add("2d, platformerControls"); 
    	    this.p.timeInvincible = 0;
			this.p.sol = 0;
			this.p.first = 1;
			
			this.p.maintenant = new Date();
			this.p.minute = 0;
			this.p.once = false;
			this.p.date_prec = this.p.maintenant;
   			this.p.secondeabs = 0; 
			this.on("bump.bottom",this,"stomp");
			},

		stomp: function(collision) {
			if(collision.obj.isA("HorizontalPlatform")) {
			// make the player stay on the platform
				this.p.x = collision.obj.p.x; 
			}
				
			if(collision.obj.isA("VerticalPlatform")) {
			// make the player stay on the platform
				this.p.y = collision.obj.p.y + (collision.obj.p.y - this.p.y); 
			}
			
			if(collision.obj.isA("Fin")){
				Q.clearStages();
				Q.stageScene("GoodGame",1, {label: "Victory"})
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
			
			// Détruit le personnage s'il tombe
			if(this.p.y> 1500){
				this.destroy();
				Q.clearStages();
				Q.stageScene("endGame",1);
				scene_courante = "GO";
				scene_prec = "lvl5";   
			}
			
			// Enlève le tuto
			if (this.p.y>800 && this.p.y<850){
				Q.stageScene("Blanc",2);
			}
		},

       damage: function(){
            if(!this.p.timeInvincible){
                this.p.lives--;
				Q.stageScene("Degat",4);
				setTimeout(function(){Q.stageScene("Blanc",4);},500);
                this.p.timeInvincible = 1;
				
                if(this.p.lives == 0) {
                    this.destroy();
					Q.clearStages();
                    Q.stageScene("endGame",1, { label: "Game Over" }); 
					scene_courante = "GO";
					scene_prec = "lvl5";
                
                }else{
                    var livesLabel = Q("UI.Text",1).first();
                    livesLabel.p.label = "Lives x "+this.p.lives;
                }
            }
        },
    });