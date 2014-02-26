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
	Q.Sprite.extend("DrawEnemy", {
    	init: function(p) {
        	this._super(p, {vx: 0, defaultDirection: "left"});
            this.add("2d, aiBounce, SpecialEnemy");
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
						Q.stage(0).cannon.fire();
                    }else{
                        this.p.flip = false;
						//Q.stage(0).cannon.fire();
                    }
                } else {
                    if(this.p.defaultDirection == "left") {
                        this.p.flip = "x";
						//Q.stage(0).cannon.fire();
                    }else{
                        this.p.flip = false;
						//Q.stage(0).cannon.fire();
                    }
                }
                this.p.vx = -this.p.vx;
            }
        },
		
		fire: function() {
			var dx = 45,
			dy = 45,
			ball = new Q.CannonBall({ dx: dx, dy: dy, angle: this.p.angle });
			Q.stage().insert(ball);
			ball.physics.velocity(dx*400,dy*400);
    },
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
					
					if(music){
						Q.stage(0).DrawEnemy.fire();
					}
                }
        });
				
        entity.on("bump.top",function(collision) {
              	if((collision.obj.isA("Orange")) || (collision.obj.isA("Fraise")) ||
				   (collision.obj.isA("Banane")) || (collision.obj.isA("Ananas"))) {  
                	collision.obj.p.vy = -100;
                    Q.stage(0).DrawEnemy.fire();
                }
            });
        },        
    });