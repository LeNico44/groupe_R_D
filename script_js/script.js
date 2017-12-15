$.ajax(
{
	type: "GET",//méthode 
	url : "https://api-adresse.data.gouv.fr/search/?q=10 rue jean moulin",//adrese de l'api ressource
	data : "",//l'élément recherché
	headers : {
		accept : "application/json"// utilisation de json plutôt que de xml pour le farmat des ressources
	},

	success : function( mydata ) {//lance la fonction mydata
			console.log(mydata);//affiche dans la console le résultat de la recherche (brut)
			alert(mydata.query);//affiche dans une alerte le requete envoyée
			$.each(mydata.features, function(i, obj) {//lance une boucle for each pour afficher les objets trouvés
				console.log(obj.properties);// affiche dans la console les propriétés des objets.
			});
			
		}
}
);
