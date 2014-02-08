
// Comportement des cubes du sol  
	Q.component("cube", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.top",function(collision) {
            	if(collision.obj.isA("Orange")) { 
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
		
		
//Comportement for common enemy behaviors
	Q.component("commonEnemy", {
    	added: function() {
        	var entity = this.entity;
            entity.on("bump.left,bump.right,bump.bottom",function(collision) {
            	if(collision.obj.isA("Orange")) {                        
                	collision.obj.damage();
                }
            });
				
            entity.on("bump.top",function(collision) {
            	if(collision.obj.isA("Orange")) { 
                	collision.obj.p.vy = -100;
                    this.destroy();
                }
            });
        },        
    });
		
		
// Cube qui s'autodetruise apres nb passage du personnage
	Q.component("AutoCube", {
    	added: function() {
        	var entity = this.entity;				
            entity.on("bump.top",function(collision) {
            	if(collision.obj.isA("Orange")) { 
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
			     
		
		
//Differents sprites de cubes...	
// variable = nb fois que l'on peut marcher sur le cube
   
	Q.Sprite.extend("Sol_1", {
    	init: function(p) {
        	this._super(p,  {gravity : 0, asset : "fond_pierre_haut2.png"});
			this.variable = 1;
			this.add("2d2, cube");
        }
    });
		
	Q.Sprite.extend("Sol_2", {
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
		
	Q.Sprite.extend("Sol_pierre1_D", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "fond_pierre_haut2.png"});
			this.variable = 1;
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