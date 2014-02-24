// Comportement des cubes du sol  
	Q.component("cube", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.top",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Fraise")) ||  (collision.obj.isA("Ananas"))) {  
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
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Fraise")) || (collision.obj.isA("Ananas"))) {  
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
		
	
	// Destruction quand les cubes sont détruits par le bas
	Q.component("AutoCubeBas", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.bottom",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Fraise")) || (collision.obj.isA("Ananas"))) {  
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
  			if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Fraise")) || (collision.obj.isA("Ananas"))) {  
				collision.obj.damage();
				Q.audio.play('canon.mp3');
				}
            });
        },
	});
	

		
// Cases qui détruisent autour d'eux
		Q.component("AutoDestruc", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.top",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
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
	
	
// Case qui fait sauter le personnage
	Q.component("CaseJump", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.top",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
					collision.obj.p.vy = -650;
					Q.audio.play("saut.mp3");
					}
            });
        },
	});
	
		
// HorizontalPlatform ( probleme s'arrete quand percute le joueur)
	Q.Sprite.extend("HorizontalPlatform", {
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

	
//StrangePlatform
	Q.Sprite.extend("StrangePlatform", {
    	init: function(p) {
			// parametre {vx: , rangeX: }
       		this._super(p, {rangeY : 100, vy : 100 ,gravity: 0, defaultDirection: "top" });
            this.add("2d, aiBounce");
            this.p.initialY = this.p.y;
        },
        
		step: function(dt) {                
            if(this.p.y - this.p.initialY >= this.p.rangeY && this.p.vy > 0) {
        	    this.p.vy = -this.p.vy;
            }
            else if(-this.p.y + this.p.initialY >= this.p.rangeY && this.p.vy < 0) {
                 	this.p.vy = -this.p.vy;
        	} 
		}
	});
	
	//VerticalPlatform
	Q.Sprite.extend("VerticalPlatform", {
    	init: function(p) {
			// parametre {vx: , rangeX: }
       		this._super(p, {rangeY : 100, vy : 100 ,gravity: 0 });
            this.add("2d");
            this.p.initialY = this.p.y;
        },
        
		step: function(dt) {                
            if(this.p.y - this.p.initialY >= this.p.rangeY && this.p.vy > 0) {
        	    this.p.vy = -this.p.vy;
            }
            else if(-this.p.y + this.p.initialY >= this.p.rangeY && this.p.vy < 0) {
                 	this.p.vy = -this.p.vy;
        	} 
		}
	});
	
	// Piege de la boule qui roule et qui n'amasse pas mousse
	Q.Sprite.extend("BallTrap", {
    	init: function(p) {
       		this._super(p, { rangeX : 100,vx : 100 , gravity : 0, defaultDirection: "left" });
            this.add("2d, madBounce");
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
			
				this.on("bump.top, bump.right, bump.left",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
					collision.obj.p.vx = 150;
			}
            });
		}
	});
	
// Differents sprites de cubes...	
// variable = nb fois que l'on peut marcher sur le cube
   
	Q.Sprite.extend("Sol_pierre1_D", {
    	init: function(p) {
        	this._super(p,  {gravity : 0, asset : "fond_pierre_haut2.png"});
			this.variable = 1;
			this.add("2d2, cube");
        }
    });
		
	Q.Sprite.extend("Sol_2n", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "neige.png"});
			this.variable = 2;
			this.add("2d2, cube");
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
			this.variable = 3;
			this.add("2d2, cube");
        }
    });	