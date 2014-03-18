<?php  header("Content-type: text/javascript"); ?>

<?php

	session_start();

	$db = mysql_connect('localhost', 'root', ''); 
	mysql_select_db('traps',$db); 

	// on crée la requête SQL 
	$sql = 'SELECT Place, Min(Score) as sco FROM Classement'; 

	$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); 

	$i = 10; // variable pour trouver l'endroit où inserer
	$j = 10;	//  variable qui va faire decaler le 9e à la 10e place par exemple
	$bool = 1; // Arrête une fois que c fait

	$data = mysql_fetch_row($req);

	// IF le score minimum est inferieur au score total du joueur -> ajouté
	// GET DONNEE = SCORE DU JOUEUR

	if($data[1] < $_GET['donnee']){

		while ($bool == 1){

			// Supposer chercher la bonne place
			$sql = ('SELECT * FROM Classement WHERE Place = '.$i); 
			$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); 
			$data = mysql_fetch_row($req);


			// IF RESULTAT A LA PLACE i > SCORE il faut inserer juste en dessous

			if( $data[2]> $_GET['donnee'] ){

			// Enleve la ligne 10 qui forcement va partir
				$sql = 'DELETE FROM Classement WHERE Place = 10'; 
				$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); 

			// Décale les lignes
				while ($j != $i-1){
					$sql = 'UPDATE Classement SET Place ='.($j+1).' WHERE Place = '.$j; 
					$req = mysql_query($sql);
					$j = $j--;
				}

			// Insere score 660 a la ligne juste
				$sql = 'INSERT INTO Classement (Place, Pseudo, Score) Values ('.($i+1).', "Cacao", '.$_GET['donnee'].')'; 
				$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); 
				$bool = 0;
				

			}else{
				$i--;
			}
		}
	}