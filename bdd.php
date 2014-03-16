<?php  header("Content-type: text/javascript"); ?>
<?php
$db = mysql_connect('localhost', 'root', ''); 

// on sélectionne la base 
mysql_select_db('traps',$db); 

// on crée la requête SQL 
$sql = 'SELECT * FROM Classement'; 

// on envoie la requête 
$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); 

// on fait une boucle qui va faire un tour pour chaque enregistrement 
while($data = mysql_fetch_assoc($req)) 
    { 
	
	}
?>
    // on affiche les informations de l'enregistrement en cours 
	//stage.insert(new Q.UI.Text({ label: "yo", size : 20, family : "comic sans ms", x: hi/2, y: wi/2}));
		
		var background = new Q.TileLayer({ dataAsset: "scaff.tmx",
		layerIndex: 0,
		sheet: "scor",
		tileW: 70, tileH: 70,
		type: Q.SPRITE_NONE });
		
        stage.insert(background);

	
