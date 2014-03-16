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
	$db = mysql_connect('localhost', 'root', ''); 

	// on sélectionne la base 
	mysql_select_db('traps',$db); 

	// on crée la requête SQL 
	$sql = 'SELECT * FROM Classement'; 

	// on envoie la requête 
	$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); 

	$i = 300;
	while($data = mysql_fetch_assoc($req)) { ?>

		alert (<?php $data['Pseudo'] ?>);

		var niv = stage.insert(new Q.UI.Text({ 
	        label:  "<?php $data['Pseudo'] ?>e",
			size : 15,
			family : "comic sans ms",
	        x: 200,
	        y: 260,
			
	        }), Opacite
	        );

		<?php $i=$i+100; 

	}
	
    ?>    
});