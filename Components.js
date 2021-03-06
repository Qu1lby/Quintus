// Comportement des cubes du sol  
	Q.component("cube", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.top",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Fraise")) ||  (collision.obj.isA("Ananas"))
				|| (collision.obj.isA("Tomate"))) {  
                  	if (collision.obj.first == 1){
						collision.obj.first = 0 ;
						collision.obj.sol = this;
						this.variable--;
					}else{
						if (this != collision.obj.sol){             
							this.variable--;
							if (collision.obj.sol != null){
						 		if (collision.obj.sol.variable == 0){
									collision.obj.sol.destroy();
								}
							}
							collision.obj.sol = this;
							if (this.variable == 0){
								this.destroy();
							}
						}
					}
				}    
            });
        },
	});
	
		
// Cubes qui s'autodetruisent apres nb passage d'un personnage
	Q.component("AutoCube", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.top",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Fraise")) || (collision.obj.isA("Ananas"))
					|| (collision.obj.isA("Tomate"))){  
					if (this != collision.obj.sol){             
                    	this.variable = this.variable - 1;						
						if (collision.obj.sol.variable == 0){
							collision.obj.sol.destroy();
						}
					collision.obj.sol = this;
				}}
            });
        },
	});
	
	
// Cube du boss
	Q.component("CubeBoss", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.top",function(collision) {
            	if(collision.obj.isA("Grenade")){  
					if (this != collision.obj.sol){             
                    	this.variable = this.variable - 1;						
						if (this.variable == 0){
							collision.obj.destroy();
						}
					collision.obj.sol = this;
				}}
            });
        },
	});
		
	
	// Destruction quand les cubes sont d�truits par le bas
	Q.component("AutoCubeBas", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.bottom",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Fraise"))
				|| (collision.obj.isA("Ananas")) || (collision.obj.isA("Tomate"))){  
					if (this != collision.obj.sol){             
                    	this.variable = this.variable - 1;						
						if (collision.obj.sol.variable == 0){
							collision.obj.sol.destroy();
						}
					collision.obj.sol = this;
				}}
            });
        },
	});

	
// Case qui fait mal au personnage
	Q.component("CaseMal", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.top,bump.bottom,bump.right,bump.left",function(collision) {
  			if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Fraise")) || (collision.obj.isA("Ananas"))
			|| (collision.obj.isA("Tomate"))){  
				collision.obj.damage();
				if(music){
					Q.audio.play('canon.mp3');
				}
				}
            });
        },
	});
	
	
// Cases qui d�truisent autour d'eux
		Q.component("AutoDestruc", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.top",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas")) ||
				(collision.obj.isA("Fraise")) || (collision.obj.isA("Tomate"))){ 
					if (this != collision.obj.sol){             
                    	this.variable = this.variable - 1;						
						if (collision.obj.sol.variable == 0){
							collision.obj.sol.destroy();
						}
					collision.obj.sol = this;
				}}
            });
        },
	});
	
	//Permet au personnage de rester sur la platforme 
	Q.component("stay" ,{
	added: function() {
		var entity = this.entity;				
            entity.on("bump.top",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas")) ||
				(collision.obj.isA("Fraise")) || (collision.obj.isA("Tomate"))){ 
					collision.obj.p.vx = 0;
					
				}
            });
        },
	});
		
// Case qui fait sauter le personnage
	Q.component("CaseJump", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.top",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))
				|| (collision.obj.isA("Tomate"))) {  
					collision.obj.p.vy = -650;
					if (music){
						Q.audio.play("saut.mp3");
					}
					}
            });
        },
	});
	
// -------------------------------SPRITES-------------------------------
	

			
			
// HorizontalPlatform 
	Q.Sprite.extend("HorizontalPlatform", {
    	init: function(p) {
       		this._super(p, { rangeX : 100,vx : 100 , gravity : 0, defaultDirection: "left" });
            this.add("2d, aiBounce, stay");
            this.p.initialY = this.p.y;
			this.p.initialX = this.p.x;
        },
        
		  step: function(dt) {  

			this.on("bump.top",function(collision) {
				if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
					collision.obj.p.x = this.p.x;
				}
            });
			
          if(this.p.x - this.p.initialX >= this.p.rangeX && this.p.vx > 0) {
        	    this.p.vx = -this.p.vx;
            } 
            else if(-this.p.x + this.p.initialX >= this.p.rangeX && this.p.vx < 0) {
                 	this.p.vx = -this.p.vx;
        	} 
		}
	});

	Q.Sprite.extend("HorizontalPlatform2", {
    	init: function(p) {
       		this._super(p, { rangeX : 100,vx : 100 , gravity : 0, defaultDirection: "left" });
            this.add("2d, aiBounce");
            this.p.initialY = this.p.y;
			this.p.initialX = this.p.x;
        },
        
		  step: function(dt) {  
			
          if(this.p.x - this.p.initialX >= this.p.rangeX && this.p.vx > 0) {
        	    this.p.vx = -this.p.vx;
            } 
            else if(-this.p.x + this.p.initialX >= this.p.rangeX && this.p.vx < 0) {
                 	this.p.vx = -this.p.vx;
        	} 
		}
	});

	
//Pressoir	
	Q.Sprite.extend("Pressoir", {
    	init: function(p) {
			// parametre {vx: , rangeX: }
       		this._super(p, {rangeY : 100, vy : 100 ,gravity: 0 });
            this.add("2d");
            this.p.initialY = this.p.y;
			this.p.cooy = p.cooy;
        },
        
		step: function(dt) {    

			this.on("bump.top,bump.bottom,bump.right,bump.left",function(collision) {
				if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
					collision.obj.mort();

				}
            });
		
			if (this.p.y  >= this.p.cooy) {
				this.p.vy = 0;
			}
		
		}
	});
	
	
	
// ----------------------------------------------------------------------------------------
	Q.animations('pastequeSP', {
        run_left: {frames: [9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0], rate: 1/5},
    });
	
// Piege de la boule qui roule et qui n'amasse pas mousse
	Q.Sprite.extend("pastequeSP", {
    	init: function(p) {
       		this._super(p, { rangeX : 100,vx : 100 , gravity : 1, defaultDirection: "left", sheet: "pasteque", sprite: "pastequeSP"});
            this.add("2d, madBounce, animation");
            this.p.initialY = this.p.y;
			this.p.initialX = this.p.x;
			this.play("run_left");
        },
        
		step: function(dt) {  	  		
			this.on("bump.top, bump.right, bump.left",function(collision) {
				if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
					collision.obj.p.vx = 150;
				}
            });
		}
	});
	

// Differents sprites de cubes...	
// variable = nombre de fois que l'on peut marcher sur le cube

	Q.Sprite.extend("Sol_pierre1_D", {
    	init: function(p) {
        	this._super(p,  {gravity : 0, asset : "fond_pierre_haut2.png"});
			this.variable = 1;
			this.add("2d2, cube");
        }
    });
	
	Q.Sprite.extend("Sol_1", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "fond_pierre2.png"});
			this.variable = 0;
			this.add("2d2, AutoCube");
        }
    });	

	Q.Sprite.extend("Sol_1Boss", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_haut2.png"});
			this.variable = 1;
			this.add("2d2, CubeBoss");
        }
    });		
		
	Q.Sprite.extend("Sol_2n", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "neige.png"});
			this.variable = 2;
			this.add("2d2, cube");
        }
    });	
	
	Q.Sprite.extend("Sol_2", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_haut2.png"});
			this.variable = 2;
			this.add("2d2, AutoCube");
        }
    });
	
	Q.Sprite.extend("Sol_2Boss", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_haut2.png"});
			this.variable = 2;
			this.add("2d2, CubeBoss");
        }
    });
	
		Q.Sprite.extend("Sol_3Boss", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_haut2.png"});
			this.variable = 3;
			this.add("2d2, CubeBoss");
        }
    });
		
	Q.Sprite.extend("Sol_3", {
    	init: function(p) {
        	this._super(p,  {gravity : 0, asset : "fond_pierre_haut2.png"});
			this.variable = 3;
			this.add("2d2, cube");
        }
    });		   
		
	Q.Sprite.extend("Sol_5", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "fond_pierre_haut2.png"});
			this.variable = 5;
			this.add("2d2, cube");
        }
    });
	
	Q.Sprite.extend("Sol_G5", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_haut.png"});
			this.variable = 5;
			this.add("2d2, cube");
        }
    });
		
	Q.Sprite.extend("Sol_pierre1_D", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "fond_pierre_haut.png"});
			this.variable = 1;
			this.add("2d2, AutoCube");
        }
    });
		
	Q.Sprite.extend("Sol_pierre1_DB", {
		init: function(p) {
            this._super(p,  {gravity : 0, asset : "dessous.png"});
			this.variable = 1;
			this.add("2d2, AutoCubeBas");
        }
    });		
		
	Q.Sprite.extend("Sol_pierre1_P", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "fond_pierre2.png"});
			this.variable = 1;
			this.add("2d2, AutoCube");
        }
    });		
	
	Q.Sprite.extend("Sol_pierre1_H", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_haut.png"});
			this.variable = 1;
			this.add("2d2, AutoCube");
        }
    });	

	Q.Sprite.extend("Sol_pierre2_H", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_haut.png"});
			this.variable = 2;
			this.add("2d2, AutoCube");
        }
    });
	
	Q.Sprite.extend("Sol_pierre2_T", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_terre.png"});
			this.variable = 2;
			this.add("2d2, AutoCube");
        }
    });
	
	Q.Sprite.extend("Sol_pierre3_H", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_haut.png"});
			this.variable = 3;
			this.add("2d2, AutoCube");
        }
    });
	
	Q.Sprite.extend("Sol_pierre4_H", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_haut.png"});
			this.variable = 4;
			this.add("2d2, AutoCube");
        }
    });	
	
	Q.Sprite.extend("Sol_pierre2_D", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "fond_pierre_haut.png"});
			this.variable = 2;
			this.add("2d2, AutoCube");
        }
    });
		
	Q.Sprite.extend("Sol_pierre3_D", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "fond_pierre_haut.png"});
			this.variable = 3;
			this.add("2d2, AutoCube");
        }
    });
	
	Q.Sprite.extend("Sol_pierre4_D", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "fond_pierre_haut.png"});
			this.variable = 4;
			this.add("2d2, AutoCube");
        }
    });	
	
	Q.Sprite.extend("Sol_jump", {
        init: function(p) {
            this._super(p,  {vx : -500, gravity : 0, asset : "jump.png"});
			this.variable = 2;
			this.add("2d2, aiBounce, CaseJump");
        }
    });
	
	Q.Sprite.extend("Sol_jump_neige", {
        init: function(p) {
            this._super(p,  {vx : -500, gravity : 0, asset : "jumpn.png"});
			this.variable = 2;
			this.add("2d2, aiBounce, CaseJump");
        }
    });
	
	Q.Sprite.extend("Destruc_double", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "fond_pierre_haut2.png"});
			this.variable = 1;
			this.add("2d2, AutoDestruc");
        }
    });
	
	
	Q.Sprite.extend("Sol_B2", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_haut2.png"});
			this.variable = 2;
			this.add("2d2, AutoCube");
        }
    });
	
	Q.Sprite.extend("Sol_B5", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_haut2.png"});
			this.variable = 5;
			this.add("2d2, AutoCube");
        }
    });
	
	Q.Sprite.extend("Sol_fin", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "fond_pierre_haut2.png"});
			this.variable = 10;
			this.add("2d2, cube");
        }
    });
	
// Case qui detruit les cases adjacentes
	Q.Sprite.extend("casedestruc", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "pierre_haut.png"});
			this.add("2d2");
		},

		step: function(dt) {
            this.on("bump.top", function(collision) {
			var pass = 0;
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas"))) {
					if(pass == 0){
					Q.stage().locate(this.p.x+70, this.p.y).destroy();
					Q.stage().locate(this.p.x-70, this.p.y).destroy();
					
					if (music){
						Q.audio.play("canon.mp3");
					}
					this.destroy();	

				}
				}
				pass = pass +1;
            });		
		}
    });
	
	Q.Sprite.extend("Mal", {
   	init: function(p) {
       	this._super(p,  {gravity : 0, asset : "mort.png"});
		this.variable = 10;	this.add("2d2, CaseMal");
        }
    }); 
	
	Q.Sprite.extend("mur", {
    	init: function(p) {
        	this._super(p,  {gravity : 0, asset : "fond_pierre.png"});
			this.variable = 1;
			this.add("2d2, cube");
        }
    });
	
	Q.Sprite.extend("grille140", {
    	init: function(p) {
        	this._super(p,  {gravity : 0, asset : "grille140.png" });
			this.variable = 10;
			this.add("2d2, AutoCube");
        }
    });

	Q.Sprite.extend("grille70", {
    	init: function(p) {
        	this._super(p,  {gravity : 0, asset : "grille70.png"});
			this.variable = 10;
			this.add("2d2, AutoCube");
        }
    });
	
		Q.Sprite.extend("grille200", {
    	init: function(p) {
        	this._super(p,  {gravity : 0, asset : "grille200.png"});
			this.variable = 10;
			this.add("2d2, AutoCube");
        }
    });
	
	Q.Sprite.extend("Fin", {
    	init: function(p) {
        	this._super(p,  {gravity : 0, asset : "fond_pierre_haut2.png"});
			this.variable = 1;
			this.add("2d2, cube");
        }
    });	
	
	Q.Sprite.extend("neige", {
		init: function(p) {
			this._super(p, {asset : "flocon.png", type: Q.SPRITE_NONE});
			this.add("2d");
			this.p.initialY = this.p.y;
			this.niveau = p.level;
		},
        
		step: function(dt) {   
			if(this.p.y > 2000){
				if (this.niveau == 1){
					var flocon1 = new Q.neige({x: (Math.random() * (2000 - 100) + 100), vy : 1, rangeY : 2000, level : 1});
					Q.stage().insert(flocon1);
				}else{
					// CODE
				}
				this.destroy();
			}
            if(this.p.y - this.p.initialY >= this.p.rangeY && this.p.vy > 0) {
        	    this.p.vy = -this.p.vy;
            }
            else if(-this.p.y + this.p.initialY >= this.p.rangeY && this.p.vy < 0) {
                 	this.p.vy = -this.p.vy;
        	}
		}
    });
	
// Bullet des boss
	Q.Sprite.extend("Bullet", {
    	init: function(p) {
       		this._super(p, { rangeX : 100,vx : 100 , gravity : 0, defaultDirection: "left" });
            this.add("2d, aiBounce");
            this.p.initialY = this.p.y;
			this.p.initialX = this.p.x;
        },
        
		  step: function(dt) {  
		  
		  	this.p.seconds -= dt;
			if(this.p.seconds < 0) { 
				this.destroy();
			} else if(this.p.seconds < 1) {
				this.set({ "fill-opacity": this.p.seconds });
			}
				           
			this.on("bump.right,bump.left,bump.top,bump.bottom",function(collision) {
				if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) ||
				   (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))
				   || (collision.obj.isA("Tomate"))) {
				   
					collision.obj.damage();
					if(music && scene_courante!="lvl5") {
						Q.audio.play("canon.mp3");
					}
					this.destroy();
				}
				if (!collision.obj.isA("DrawEnnemy")){
					this.destroy();
				}
            });
		},
    });
	
// Boss Final
	Q.Sprite.extend("Grenade", {
    	init: function(p) {
       		this._super(p, { rangeX : 100,vx : 100 , gravity : 0, defaultDirection: "left" });
            this.add("2d, aiBounce");
            this.p.initialY = this.p.y;
			this.p.initialX = this.p.x;
        },
        
		  step: function(dt) {
		  	this.p.seconds -= dt;
			if(this.p.seconds < 0) { 
				this.destroy();
			} else if(this.p.seconds < 1) {
				this.set({ "fill-opacity": this.p.seconds });
			}
				           
			this.on("bump.right,bump.left,bump.top,bump.bottom",function(collision) {
				if((collision.obj.isA("Tomate"))) {
				   
					collision.obj.damage();
					if(music){
						Q.audio.play("canon.mp3");
					}
					this.destroy();
				}else{				
					if (!collision.obj.isA("DrawEnnemy")){
						this.destroy();
						}
				}
				if(collision.obj.isA("Sol_2Boss") || collision.obj.isA("Sol_3Boss")){
					if(collision.obj.variable == 0){
					collision.obj.destroy();
					}
				}				
            });
		},
    });