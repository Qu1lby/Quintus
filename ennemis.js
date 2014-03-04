// Initialise les deux type d'ennemis (sol et vol)

//Comportement for ground enemy behaviors
	Q.Sprite.extend("GroundEnemy", {
    	init: function(p) {
        	this._super(p, {vx: -100, defaultDirection: "left"});
            this.add("2d, aiBounce, commonEnemy");
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
        
//Comportement for vertical enemy behaviors	
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
	
	//Comportement des ennemmies qui tirent
	Q.Sprite.extend("DrawEnnemy", {
        init: function(p) {
            this._super(p,  {gravity : 1, asset : "ennemi.png"});
			this.coox = p.coox;
			this.cooy = p.cooy;
			this.add("2d, animation");
			this.frame_number = this.frame_count();
        },
		
		frame_count: function(){
         var count = 0;
         return function(){
            return count += 1;
         }
      },
	  

		update: function(dt) {		
				if(this.p.y != 720){
					if(this.frame_number() % 50 == 0){
						balle = new Q.Bullet({x: this.coox, y : this.cooy, vx :175, rangeX : 550 ,asset : "bullet.png"});
						Q.stage().insert(balle);
						frame_number() = 0;
					}
					}
			this.on("bump.top,bump.bottom,bump.right", function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) ||
				   (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
					this.destroy();
					//Q.stage().locate(this.coox,this.cooy).destroy();
				}
            });	
		}
    });
	
//Comportement for common enemy behaviors
	Q.component("commonEnemy", {
    	added: function() {
        	var entity = this.entity;
            entity.on("bump.left,bump.right,bump.bottom",function(collision) {
           		if((collision.obj.isA("Orange")) || (collision.obj.isA("Fraise")) || 
				   (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas"))) {                   
                	collision.obj.damage();
					
					if(music){
						Q.audio.play('creature.mp3');
					}
                }
        });
				
        entity.on("bump.top",function(collision) {
              	if((collision.obj.isA("Orange")) || (collision.obj.isA("Fraise")) ||
				   (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas"))) {  
                	collision.obj.p.vy = -100;
                    this.destroy();
                }
            });
        },        
    });
	
	//ennemie special
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