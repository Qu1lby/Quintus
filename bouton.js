// Creer tous les boutons differents 

	Q.Sprite.extend("bouton", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "push2.png"});
			this.coox = p.coox;
			this.cooy = p.cooy;
			this.add("2d2");
        },

		step: function(dt) {	
            this.on("bump.top,bump.bottom,bump.right,bump.left", function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) ||
				   (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
					if(music){
						Q.audio.play('pop.mp3');
					}
					this.destroy();
					Q.stage().locate(this.coox,this.cooy).destroy();
				}
            });		
		}
    });
	
	// Creer tous les boutons differents 

	Q.Sprite.extend("bouton_boss", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "push2.png"});
			this.coox = p.coox;
			this.cooy = p.cooy;
			this.add("2d2");
        },

		step: function(dt) {	
            this.on("bump.top,bump.bottom,bump.right", function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) ||
				   (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
					if(music){
						Q.audio.stop();
						Q.audio.play('boss.mp3');
					}
					this.destroy();
					Q.stage().locate(this.coox,this.cooy).destroy();
				}
            });		
		}
    });

	Q.Sprite.extend("bouton_bouton", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "push2.png"});
			this.coox = p.coox;
			this.cooy = p.cooy;
			this.add("2d2");
        },

		step: function(dt) {			
            this.on("bump.top",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || 
				   (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
				    if(music){
						Q.audio.play('pop.mp3');
					}
					this.destroy();
					nouvelle_case = new Q.bouton({x: this.coox, y: this.cooy});
					Q.stage().insert(nouvelle_case);
				}
            });
		}
    });
	
	
	Q.Sprite.extend("bouton_case_droite", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "push3.png"});
			this.coox = p.coox;
			this.cooy = p.cooy;
			this.add("2d2");
        },

		step: function(dt) {			
            this.on("bump.right",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || 
				   (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
				    if(music){
						Q.audio.play('pop.mp3');
					}
					this.destroy();
					nouvelle_case = new Q.Sol_G5({x: this.coox, y: this.cooy});
					Q.stage().insert(nouvelle_case);
				}
            });
		}
    });
	
		Q.Sprite.extend("bouton_case_droite_multi", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "push3.png"});
			this.coox = p.coox;
			this.cooy = p.cooy;
			this.coox2 = p.coox2;
			this.cooy2 = p.cooy2;
			this.coox3 = p.coox3;
			this.cooy3 = p.cooy3;
			this.coox4 = p.coox4;
			this.cooy4 = p.cooy4;
			this.variable=1;
			this.add("2d2");
        },

		step: function(dt) {			
            this.on("bump.right, bump.left",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) || 
				   (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) {  
					
					if(this.variable == 1){
						if(music){
							Q.audio.play('pop.mp3');
						}
						nouvelle_case = new Q.Sol_G5({x: this.coox, y: this.cooy});
						nouvelle_case2 = new Q.Sol_G5({x: this.coox2, y: this.cooy2});
						nouvelle_case3 = new Q.Sol_G5({x: this.coox3, y: this.cooy3});
						nouvelle_case4 = new Q.Sol_G5({x: this.coox4, y: this.cooy4});
						Q.stage().insert(nouvelle_case);
						Q.stage().insert(nouvelle_case2);
						Q.stage().insert(nouvelle_case3);
						Q.stage().insert(nouvelle_case4);
						this.variable = 0;
					}
					this.destroy();
				}
            });
		}
    });

	Q.Sprite.extend("bouton_pasteque", {
        init: function(p) {
            this._super(p,  {gravity : 0, asset : "push2.png"});
			this.coox = p.coox;
			this.cooy = p.cooy;
			this.add("2d2, animation");
			this.booleen = true;
        },

		step: function(dt) {			
            this.on("bump.top",function(collision) {
            	if((collision.obj.isA("Orange")) || (collision.obj.isA("Banane")) ||
				   (collision.obj.isA("Ananas")) || (collision.obj.isA("Fraise"))) { 

					if(this.booleen){
						pasteque = new Q.pastequeSP({x: this.coox, y : this.cooy, vx :175, rangeX : 550 ,asset : "boule.png"});
						Q.stage().insert(pasteque);
						this.destroy();
						this.booleen = false;
					}
				}
            });
		}
    });