const btnSupprimer = document.getElementById('btnSupprimer');

// Fonction pour supprimer le dernier avis
async function supprimerDernierAvis() {
    const users = await recuperationAvisJson(); // Récupère tous les avis
    if (users.length > 0) {
        const dernierAvis = users[users.length - 1]; // Récupère le dernier avis de la liste
        const idDernierAvis = dernierAvis.id; // Récupère l'ID du dernier avis

        // Envoie la requête DELETE pour supprimer cet avis
        fetch(`http://localhost:3000/avis/${idDernierAvis}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                console.log(`L'avis avec l'ID ${idDernierAvis} a été supprimé avec succès.`);
            } else {
                console.log("Erreur lors de la suppression de l'avis.");
            }
        })
        .catch(error => {
            console.error("Erreur lors de la suppression de l'avis :", error);
        });
    } else {
        console.log("Aucun avis à supprimer.");
    }
}



btnSupprimer.addEventListener("click", async(event) => {
    await supprimerDernierAvis();
    // await afficherAvis();
});