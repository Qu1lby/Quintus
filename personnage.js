// init : à la création
// step : à chaque instant
// damage : à chaque dommage


	Q.animations('orangeSP', {
		run_left: { frames: [1,2,3], next: 'stand_right', rate: 1/3},
		run_right: { frames: [1,2,3], next: 'stand_left', rate: 1/5},
		stand_left: { frames: [0]},
		stand_right: { frames: [0]},
		jump: { frames: [4], loop:false, rate: 1},
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
			this.p.score = false;
			
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
				
				var livesLabel = Q("UI.Text",1).at(1);
        		livesLabel.p.label = "Temps : "+this.p.minute+":"+this.p.secondeabs+" / "+score_l1tps;	
				
			}
			
			var livesLabel = Q("UI.Text",1).first();
			livesLabel.p.label = "Vies x "+this.p.lives;

        	if(Q.inputs["left"]){
            	this.p.flip = "x";
            }

            if(Q.inputs["right"]&& this.p.direction == "left"){
				this.p.flip = false;                    
            }

            if(this.p.timeInvincible > 0){
               	this.p.timeInvincible = Math.max(this.p.timeInvincible - dt, 0);
            }

			// Détruit le personnage s'il gagne
			if(this.p.x> 1870  && this.p.y>1850){
				score_l1_tmp = 700 - (2*this.p.secondeabs)- (120*this.p.minute) ;
				score_l1tps_tmp = this.p.minute+":"+this.p.secondeabs;
				this.p.score = true;
				
				scene_courante = "GOG";
				scene_prec = "lvl1";
				
				Q.clearStages();
				Q.stageScene("GoodGame",1, {label: "Victory"});
				
                
			}
/*		// Détruit le personnage s'il tombe premier niveau
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
		
		// Sprite mouvement 
		if(Q.inputs['up']) {
			this.play("jump",1);      // add priority to animation
        } else if(this.p.vx < 0) {
			this.p.flip="x";          // flip when going right
			this.play("run_right");
        } else if(this.p.vx > 0) {
			this.p.flip="";           // no flip when going left
			this.play("run_left");
        } else {
			this.play("stand_" + this.p.direction); // stand_left or stand_right
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
                    livesLabel.p.label = "Vies x "+this.p.lives;
                }
            }
        },
	
			
    });

// ------------------------------------------------------------------------------------------------------------------

/**Q.animations('FraiseSP', {
		run_left: { frames: [1,2,3], next: 'stand_right', rate: 1/3},
		run_right: { frames: [1,2,3], next: 'stand_left', rate: 1/5},
		stand_left: { frames: [0]},
		stand_right: { frames: [0]},
		jump: { frames: [4], loop:false, rate: 1},
});
*/
	Q.Sprite.extend("Fraise",{
        init: function(p){
       		this._super(p, { asset: "fraise.png", x: 17*70+35, y: 11*70+35, speed : 400,jumpSpeed: -700, lives: 2000 });
        	this.add("2d, platformerControls"); 
        	this.p.timeInvincible = 0;
			this.p.sol = 0; 	 // Retiens le dernier cube
			this.p.first = 1; 	 // Premier cube touché -> 0 (évite bug)
			this.p.score = false;
			
			this.p.maintenant = new Date();
			this.p.minute = 0;
			this.p.once = false;
			this.p.date_prec = this.p.maintenant;
   			this.p.secondeabs = 0; 
		
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
            livesLabel.p.label = "Vies x "+this.p.lives;

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
			
			// Calcul du score final
	/*		if(collision.obj.isA("Fin")){
				if(collision.obj.isA("Fin")&&!this.p.score){
					score_l3_tmp = 1000 - (2*this.p.secondeabs)- (120*this.p.minute);
					score_l3tps_tmp = this.p.minute+":"+this.p.secondeabs;
					this.p.score = true;
				
				scene_courante = "GOG";
				scene_prec = "lvl3";
				
				Q.clearStages();
				Q.stageScene("GoodGame",1, {label: "Victory"});
				
				}
			}*/
	/*		
	// Sprite mouvement 
		if(Q.inputs['up']) {
			this.play("jump",1);      // add priority to animation
        } else if(this.p.vx < 0) {
			this.p.flip="x";          // flip when going right
			this.play("run_right");
        } else if(this.p.vx > 0) {
			this.p.flip="";           // no flip when going left
			this.play("run_left");
        } else {
			this.play("stand_" + this.p.direction); // stand_left or stand_right
        }*/
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
                    livesLabel.p.label = "Vies x "+this.p.lives;
                }
            }
        },
    });


// ------------------------------------------------------------------------------------------------------------------

	Q.animations('bananeSP', {
		run_left: { frames: [1,2,3], next: 'stand_right', rate: 1/3},
		run_right: { frames: [1,2,3], next: 'stand_left', rate: 1/5},
		stand_left: { frames: [0]},
		stand_right: { frames: [0]},
		jump: { frames: [4], loop:false, rate: 1},
	});

	Q.Sprite.extend("Banane",{
        init: function(p){
       		this._super(p, {sheet: "banane", sprite: "bananeSP", x: 1505, y: 1085, jumpSpeed: -530, lives: 3});
        	this.add("2d, platformerControls, animation"); 
        	this.p.timeInvincible = 0;
			this.p.sol = 0; 	 // Retiens le dernier cube
			this.p.first = 1; 	 // Premier cube touché -> 0 (évite bug)
			this.p.changeMusic = false;		// True : music du boss est changé
			this.p.score = false;
			
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
			
			// Calcul du score final
			if(collision.obj.isA("Fin")){
				if(collision.obj.isA("Fin")&&!this.p.score){
					score_l2_tmp = 1000 - (2*this.p.secondeabs)- (120*this.p.minute);
					score_l2tps_tmp = this.p.minute+":"+this.p.secondeabs;
					this.p.score = true;
				
				scene_courante = "GOG";
				scene_prec = "lvl2";
				
				Q.clearStages();
				Q.stageScene("GoodGame",1, {label: "Victory"});
				
				}
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
            livesLabel.p.label = "Vies x "+this.p.lives;

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
			
	    if(Q.inputs['up']) {
			this.play("jump",1);      // add priority to animation
        }else if(this.p.vx < 0) {
			this.p.flip="x";          // flip when going right
			this.play("run_right");
        }else if(this.p.vx > 0) {
			this.p.flip="";           // no flip when going left
			this.play("run_left");
        }else{
			this.play("stand_" + this.p.direction); // stand_left or stand_right
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
                    livesLabel.p.label = "Vies x "+this.p.lives;
                }
            }
        },
    });

// ------------------------------------------------------------------------------------------------------------------

	Q.animations('AnanasSP', {
		run_left: { frames: [1,2,3], next: 'stand_right', rate: 1/3},
		run_right: { frames: [1,2,3], next: 'stand_left', rate: 1/5},
		stand_left: { frames: [0]},
		stand_right: { frames: [0]},
		jump: { frames: [4], loop:false, rate: 1},
	});


	Q.Sprite.extend("Ananas",{
        init: function(p){
        	this._super(p, { sheet: "ananas", sprite: "AnanasSP", x: 105, y: 1505, jumpSpeed: -400, lives: 2});
        	this.add("2d, platformerControls, animation"); 
        	this.p.timeInvincible = 0;
			this.p.sol = 0; 	 // Retiens le dernier cube
			this.p.first = 1; 	 // Premier cube touché -> 0 (évite bug)
			this.p.score = false;
			
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
			
			// Calcul du score final
			if(collision.obj.isA("Fin")&&!this.p.score){
					score_l4_tmp = 1000 - (2*this.p.secondeabs)- (120*this.p.minute) ;
					score_l4tps_tmp = this.p.minute+":"+this.p.secondeabs;
					this.p.score = true;
					
				scene_courante = "GOG";
				scene_prec = "lvl4";
				
				Q.clearStages();
				Q.stageScene("GoodGame",1, {label: "Victory"});
				
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
            livesLabel.p.label = "Vies x "+this.p.lives;

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

      		// Sprite mouvement 
		if(Q.inputs['up']) {
			this.play("jump",1);      // add priority to animation
        } else if(this.p.vx < 0) {
			this.p.flip="x";          // flip when going right
			this.play("run_right");
        } else if(this.p.vx > 0) {
			this.p.flip="";           // no flip when going left
			this.play("run_left");
        } else {
			this.play("stand_" + this.p.direction); // stand_left or stand_right
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
                    livesLabel.p.label = "Vies x "+this.p.lives;
                }
            }
        },
		
		
				
		
		mort: function() {
            if(!this.p.timeInvincible){
                this.p.lives = this.p.lives-2;
				Q.stageScene("Degat",4);
				setTimeout(function(){Q.stageScene("Blanc",4);},500);
                this.p.timeInvincible = 1;
				
                if(this.p.lives <= 0) {
                    this.destroy();
					Q.clearStages();
                    Q.stageScene("endGame",1, { label: "Game Over" }); 
					scene_courante = "GO";
					scene_prec = "lvl4";
                
                }else{
                    var livesLabel = Q("UI.Text",1).first();
                    livesLabel.p.label = "Vies x "+this.p.lives;
                }
            }
        },	
    });
// ------------------------------------------------------------------------------------------------------------------
	Q.Sprite.extend("Tomate",{
        init: function(p){
    	    this._super(p, {asset: "tomate.png", x: 120, y: 300, jumpSpeed: -400, lives: 100});
    	    this.add("2d, platformerControls"); 
    	    this.p.timeInvincible = 0;
			this.p.sol = 0;
			this.p.first = 1;
			this.p.score = false;
			
			this.p.maintenant = new Date();
			this.p.minute = 0;
			this.p.once = false;
			this.p.date_prec = this.p.maintenant;
   			this.p.secondeabs = 0; 
			this.on("bump.bottom",this,"stomp");
			},

		stomp: function(collision) {
				
			// Calcul du score final
			if(collision.obj.isA("Fin")&&!this.p.score){
					score_l5_tmp = 1000 - (2*this.p.secondeabs)- (120*this.p.minute) ;
					this.p.score = true;
					
				scene_courante = "GOG";
				scene_prec = "lvl5";
				
				Q.clearStages();
				Q.stageScene("GoodGame",1, {label: "Victory"});
				
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
			livesLabel.p.label = "Vies x "+this.p.lives;

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
                    livesLabel.p.label = "Vies x "+this.p.lives;
                }
            }
        },
    });