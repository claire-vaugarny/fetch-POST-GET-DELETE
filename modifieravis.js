//Utilisation du verbe PUT pour modifier des données déjà existantes dans un fichier json
//il faut recupérére le fichier et indiquer l'id du tableau que l'on souhaite mettre à jour
function updateAvis(id, avisMisAJour) {
    //l'id doit etre préciser dans lurl dans fetch
    fetch(`http://localhost:3000/avis/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(avisMisAJour)
    })};


let avisMisAJour={
    "id": "00d1",
    "piece-id": 4,
    "utilisateur": "Sarah Pelle",
    "commentaire": "trop fort le jeu de mots !"
  }

// updateAvis('00d1',avisMisAJour);