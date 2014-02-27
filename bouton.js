// Creer tous les boutons differents 

	Q.Sprite.extend("bouton", {
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
						Q.audio.play('pop.mp3');
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
            this.on("bump.top, bump.right",function(collision) {
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
					if(music){
						Q.audio.play('pop.mp3');
					}
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