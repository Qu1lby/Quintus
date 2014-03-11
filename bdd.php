<?php

// on se connecte à MySQL 
$db = mysql_connect('localhost', 'login', 'password'); 

// on sélectionne la base 
mysql_select_db('nom_de_la_base',$db); 

// on crée la requête SQL 
$sql = 'SELECT Min(total) FROM score where'; 

// on envoie la requête 
$req = mysql_query($sql); 

// on fait une boucle qui va faire un tour pour chaque enregistrement 
while($data = mysql_fetch_assoc($req)){ 
	if ($data['total'] < 2 ){
		
	}
} 

// on ferme la connexion à mysql 
mysql_close(); 
?> 