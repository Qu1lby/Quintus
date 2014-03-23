<?php  header("Content-type: text/javascript"); ?>

Q.scene("Classe", function(stage) {
	var background = new Q.TileLayer({ dataAsset: "scaff.tmx",
		layerIndex: 0,
		sheet: "scor",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
			
	stage.insert(background);

	var Opacite = stage.insert(new Q.UI.Button({
	    fill: "rgb(0,0,0)",
		opacity : 0,
	    x: 0,
	    y: 0,
	    w: wi*2,
	    h: hi*2
	    })
	);
			
	Opacite.on("click",function() {
		Q.stageScene('Debut',1);
	});

<?php

	session_start();

	$db = mysql_connect('localhost', 'root', ''); 

	// on sélectionne la base 
	mysql_select_db('traps',$db); 

	// on crée la requête SQL 
	$sql = 'SELECT * FROM Classement'; 

	// on envoie la requête 
	$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); 

	$i = 262;

while($data = mysql_fetch_assoc($req)) { ?>

		var niv = stage.insert(new Q.UI.Text({ 
	        label: "<?php echo $data['Pseudo'] ?>",
			size : 17,
			family : "comic sans ms",
	        x: 250,
	        y: <?php echo $i?>,
			
	        }), Opacite
     );

	    var sc = stage.insert(new Q.UI.Text({ 
	        label: "<?php echo $data['Score'] ?>",
			size : 17,
			family : "comic sans ms",
	        x: 380,
	        y: <?php echo $i?>,
			
	        }), Opacite
	    );

		<?php $i=$i+30; 
	}
    ?>
    
    var lvl = stage.insert(new Q.UI.Text({ 
        label: score_l1tps+"min    ("+score_l1+" pts)",    

        size : 17,
        family : "comic sans ms",
        x: 630,
        y: 410
        
        }), Opacite
    );

	var lvl = stage.insert(new Q.UI.Text({ 
        label: score_l2tps+"min    ("+score_l2+" pts)",    

        size : 17,
        family : "comic sans ms",
        x: 630,
        y: 440
        
        }), Opacite
	    );

    var lvl = stage.insert(new Q.UI.Text({ 
        label: score_l3tps+"min    ("+score_l3+" pts)",    

        size : 17,
        family : "comic sans ms",
        x: 630,
        y: 470
        
        }), Opacite
    );
	        
	var lvl = stage.insert(new Q.UI.Text({ 
        label: score_l4tps+"min    ("+score_l4+" pts)",    

        size : 17,
        family : "comic sans ms",
        x: 630,
        y: 500
        
        }), Opacite
    );

    var lvl = stage.insert(new Q.UI.Text({ 
        label: score_l5tps+"min    ("+score_l5+" pts)",    

        size : 17,
        family : "comic sans ms",
        x: 630,
        y: 530
        
        }), Opacite
    );
});