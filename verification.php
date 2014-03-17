<?php  header("Content-type: text/javascript"); ?>

<?php

	session_start();

	$db = mysql_connect('localhost', 'root', ''); 
	mysql_select_db('traps',$db); 

	// on crée la requête SQL 
	$sql = 'SELECT Place, Min(Score) as sco FROM Classement'; 

	$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); 

	$i = 10; // variable pour trouver l'endroit où inserer
	$j = 9;	//  variable qui va faire decaler le 9e à la 10e place par exemple
	$bool = 1; // Arrête une fois que c fait

	$data = mysql_fetch_row($req);

	// IF le score minimum est inferieur au score total du joueur -> ajouté
	// GET DONNEE = SCORE DU JOUEUR
?> 		

	if(<?php echo $data[1] ?> < <?php echo $_GET['donnee']?>){

	<?php 
		while ($bool == 1){

			// Supposer chercher la bonne place
			$sql = ('SELECT * FROM Classement WHERE Place = '.$i); 
			$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); 
			$data = mysql_fetch_row($req);


			// IF RESULTAT A LA PLACE i > SCORE il faut inserer juste en dessous
	?>

		$u = <?php echo $data[2] ?>;
		$v = <?php echo $_GET['donnee']?>;

		if( $u > $v ){

			<?php
			// Enleve la ligne 10 qui forcement va partir
				$sql = 'DELETE FROM Classement WHERE Place = 10'; 
				$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); 

				?>alert(<?php echo $j?>, <?php echo $i-1?>)<?php

			// Décale les lignes
				while ($j != $i-1){
					$sql = 'UPDATE Classement SET Place ='.($j+1).' WHERE Place = '.$j; 
					$req = mysql_query($sql);
					$j = $j--;
				}

			// Insere score 660 a la ligne juste
				$variable = 660;
				$sql = 'INSERT INTO Classement Values ('.$j.', "Cacao", '.$variable.')'; 
				$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); 
				$bool = 0;
				?>

		}else{
			<?php		
			?>alert(<?php echo $i?>)<?php
				$i--;
			?>
		}
<?php
	}
?>
	}