// Fonction POST pour ajouter l'avis au fichier JSON via le serveur
function ajoutAvisJson(nouvelAvis) {
    fetch('http://localhost:3000/avis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nouvelAvis)
    })
    .then(response => response.text())
    .then(data => {
        console.log('Réponse du serveur :', data);
    })
    .catch(error => {
        console.error('Erreur lors de l\'ajout de l\'avis:', error);
    });
}



// Fonction pour récupérer les données du formulaire et envoyer l'avis sur JSON
document.querySelector(".formulaire-avis").addEventListener("submit", event => {
    event.preventDefault();  // Empêche la soumission du formulaire
    //seulement que le serveur ne fonctionne pas

    // Récupérer les données des champs du formulaire
    const pieceId = document.querySelector("[name='piece-id']").value;
    const userName = document.querySelector("[name='utilisateur']").value;
    const userReview = document.querySelector("[name='commentaire']").value;

    // Créer l'objet nouvelAvis
    const nouvelAvis = {
        "piece-id": parseInt(pieceId),
        "utilisateur": userName,
        "commentaire": userReview
    };

    // Afficher les valeurs dans la console
    console.log("Identifiant de la pièce :", pieceId);
    console.log("Nom d'utilisateur :", userName);
    console.log("Avis :", userReview);
    console.log("Avis complet :", nouvelAvis);

    // Appeler la fonction pour ajouter l'avis au fichier JSON via le serveur
    ajoutAvisJson(nouvelAvis);
});