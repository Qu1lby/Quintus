// Initialise les types d'ennemis

// Comportement for ground enemy behaviors
	Q.Sprite.extend("GroundEnemy", {
    	init: function(p) {
        	this._super(p, {vx: -100, defaultDirection: "left"});
            this.add("2d, aiBounce, commonEnemy");
			this.coox = p.coox;
			this.cooy = p.cooy;
			
        },
        
		step: function(dt) {        
        	var dirX = this.p.vx/Math.abs(this.p.vx);
            var ground = Q.stage().locate(this.p.x, this.p.y + this.p.h/2 + 1, Q.SPRITE_DEFAULT);
            var nextTile = Q.stage().locate(
					this.p.x + dirX * this.p.w/2 + dirX, this.p.y + this.p.h/2 + 1, Q.SPRITE_DEFAULT);   
		
            if(!nextTile && ground) {
            	if(this.p.vx > 0) {
                	if(this.p.defaultDirection == "right") {
                	    this.p.flip = "x";
                    }else{
                        this.p.flip = false;
                    }
                } else {
                    if(this.p.defaultDirection == "left") {
                        this.p.flip = "x";
                    }else{
                        this.p.flip = false;
                    }
                }
                this.p.vx = -this.p.vx;
            }
			
		}
        });
        
// Comportement for vertical enemy behaviors	
	Q.Sprite.extend("VerticalEnemy", {
    	init: function(p) {
       		this._super(p, {vy: -100, rangeY: 100, gravity: 0, asset: "fly.png" });
            this.add("2d, commonEnemy");
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
	
// Comportement des ennemmies qui tirent
	Q.Sprite.extend("DrawEnnemy", {
        init: function(p) {
            this._super(p,  {gravity : 1, asset : "ennemi.png"});
			this.coox = p.coox;
			this.cooy = p.cooy;
			this.tps = p.tps; // A passer en param (seconde)

			this.p.seconde = 0; 
			this.changemusic = false;
			this.init = true;
			this.notdone = true;
			this.p.once = false;
			this.sound = true;
			this.add("2d, animation");
			},
      
		step: function(dt) {
		this.on("hit.sprite",function(collision) {
			if(collision.obj.isA("Sol_fin") || collision.obj.isA("DrawEnnemy")){
			
				if (music && !this.changemusic && scene_courante!="lvl5" && scene_courante!="lvl4" && scene_courante!="GO" && scene_courante!="niveau"){
					Q.audio.stop();
					Q.audio.play("boss.mp3",{ loop: true });
						if (scene_courante == "lvl2"){
							Q.audio.play("rire2.mp3");
						}
					this.changemusic = true;
				}
				if (this.init){
					this.p.maintenant = new Date();
					this.p.date_prec = this.p.maintenant;
					this.init = false;
				}
			
			var now = new Date();	
			
			if (now.getSeconds()>this.p.date_prec.getSeconds()){	
					this.p.seconde++;
					this.p.once = false;
					
			}else{
				if (this.p.seconde == 60){
					this.p.seconde = 0;
				}
			}
			
			this.p.date_prec = now;
			
			// Envoi une balle tous les 'this.tps' secondes
			if(((this.p.seconde % this.tps)==0) && (!this.p.once)){
			
				var balle = new Q.Bullet({x: this.coox, y : this.cooy, vx :175, rangeX : 550 ,asset : "bullet.png"});
				Q.stage().insert(balle);
				this.p.once = true;
				
			// Différents ajouts de complexité selon le niveau
				if (scene_courante == "lvl2"){
					this.p.vy = -500;
					this.p.vx = -5;
				}
				
				if (scene_courante == "lvl3"){
					
				}
			}
			
			}		
			});				

			this.on("bump.top", function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) ||
				   (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
				   
					if ((music)&&(this.sound)){
						Q.audio.play("coup.mp3");
						this.sound = false;
					}
					this.destroy();
					
				// Détruit les cases pour Pierrick
					if ((scene_courante == "lvl2") && (this.notdone)){
						Q.stage().locate(1505, 1155).destroy();
						Q.stage().locate(1505, 1225).destroy();
						this.notdone = false;
					}
				}
            });	
		}

    });
	
// Comportement for common enemy behaviors
	Q.component("commonEnemy", { added: function() { 
		var entity = this.entity; 
		entity.on("bump.left,bump.right,bump.bottom",function(collision) {
			if((collision.obj.isA("Orange")) || (collision.obj.isA("Fraise")) 
				|| (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas"))) { 
					collision.obj.damage(); 
					
					if(music){
						Q.audio.play('creature.mp3'); 
						} 
					} 
				});						
						
				entity.on("bump.top",function(collision) { 
					if((collision.obj.isA("Orange")) || (collision.obj.isA("Fraise")) 
					|| (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas"))) { 
							
							collision.obj.p.vy = -100; 
							this.destroy(); 
							if (scene_courante == "lvl3"){
							Q.stage().locate(this.coox,this.cooy).destroy(); 
							} 
						} 
					}); 
				} 
			});
	
// Ennemi special
	Q.component("SpecialEnemy", {
    	added: function() {
        	var entity = this.entity;
            entity.on("bump.left,bump.right,bump.bottom",function(collision) {
			
           	if((collision.obj.isA("Orange")) || (collision.obj.isA("Fraise")) || 
			   (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas"))) {  
					
				projectile = new Q.HorizontalPlatform({ x: this.x, y: this.y, rangeX : 100,vx : 100 , gravity : 0, defaultDirection: "left" });
				Q.stage().insert(pasteque);
            }
        });
				
        entity.on("bump.top",function(collision) {
              	if((collision.obj.isA("Orange")) || (collision.obj.isA("Fraise")) ||
				   (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas"))) {  
 						projectile = new Q.HorizontalPlatform({ x: this.x, y: this.y, rangeX : 100,vx : 100 , gravity : 0, defaultDirection: "left" });
						Q.stage().insert(pasteque);
                }
            });
        },        
    });
	
	// Comportement du BOSS
	Q.Sprite.extend("Boss", {
        init: function(p) {
            this._super(p,  {vx : -100, gravity : 1, asset : "tomateboss.png", defaultDirection: "right"});
			this.coox = p.coox;
			this.cooy = p.cooy;
			this.tps = p.tps;

			this.p.seconde = 0; 
			this.init = true;
			this.notdone = true;
			this.p.once = false;
			this.sound = true;
			bool = 1;
			
			
			this.add("2d, animation, commonEnemy, aiBounce");
			},
      
		step: function(dt) {

			if(bool == 1) {
				var balle = new Q.Bullet({x: 1350, y : 805, vx :-300, rangeX : 550 ,asset : "bullet.png"});
				Q.stage().insert(balle);
				bool = 2;
			}
			
			if(this.p.x > 1350 || this.p.x < 450) {
				 this.p.vx = -this.p.vx;
				 this.p.flip = 'x';
		}
		
				if(this.p.x < 450) {
				var balle1 = new Q.Bullet({x: 380, y : 805, vx : 300, rangeX : 550 ,asset : "bullet.png"});
				Q.stage().insert(balle1);
		}


		this.on("hit.sprite",function(collision) {
			if(collision.obj.isA("Sol_2Boss") || collision.obj.isA("Sol_3Boss")){
				if (this.init){
					this.p.maintenant = new Date();
					this.p.date_prec = this.p.maintenant;
					this.init = false;
				}
				
			var now = new Date();	
			
			if (now.getSeconds()>this.p.date_prec.getSeconds()){	
					this.p.seconde++;
					this.p.once = false;
					
			}else{
				if (this.p.seconde == 60){
					this.p.seconde = 0;
				}
			}
			
			this.p.date_prec = now;


		// Envoi une balle tous les 'this.tps' secondes
		if(((this.p.seconde % this.tps)==0) && (!this.p.once)){
			if(this.p.vx > 0) {
				var gerard = this.p.x + 65;
			}else{
				var gerard = this.p.x - 65;
			}
			var patrick = this.p.y - 80;
			var balle = new Q.Grenade({x: gerard, y : patrick, vy : -700, vx: -100, rangeY : 550 , speed : 300, asset : "grenade.png"});
			Q.stage().insert(balle);
				this.p.once = true;
				var balle2 = new Q.Grenade({x: (Math.random() * (1505 - 385)), y : 250, vy : (Math.random() * (1505 - 385)), vx: 0, rangeY : 1550 , speed : 300, asset : "grenade.png"});
				Q.stage().insert(balle2);
				if(playerTomate.p.y > 700) {
					var balle3 = new Q.Grenade({x: playerTomate.p.x, y : 250, vy : playerTomate.p.x, vx: 0, rangeY : 1550 , speed : 300, asset : "grenade.png"});
				Q.stage().insert(balle3);
				}
			}
		}			
		});			


            	if(this.p.y > 1600) {  
				score_l5_tmp = 700 - (2*sec5) - (120*min5) + (100*liv5) ;
				score_l5tps_tmp = min5+":"+sec5;
				
				this.destroy();
				Q.clearStages();
				Q.stageScene("GoodGame",1, {label: "Victory"});
				scene_courante = "GO";
				scene_prec = "lvl5";			
				}

				this.on("bump.left, bump.right", function(collision) {
            	if(collision.obj.isA("Tomate")) { 
				this.destroy();
				Q.clearStages();
				Q.stageScene("endGame",1, {label: "Game Over"});
				scene_courante = "GO";
				scene_prec = "lvl5";			
				}
            });
		},

    });
	