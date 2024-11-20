const containerAvis = document.querySelector('.containerAvis');

async function recuperationAvisJson() {
    const response = await fetch('http://localhost:3000/avis');
    const users = await response.json();
    console.log(users);
    console.log(users.length);            
    return users;
}
//REMARQUE comme recuperationAvisJson est asynchrone, il faut que la fonction qui l'utilise le soit aussi.
async function afficheAvis(){
    containerAvis.innerHTML = ''; // Efface les anciens avis pour éviter les doublons

    let users = await recuperationAvisJson();
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList="userCard";
        containerAvis.appendChild(userCard);

        // Création du paragraphe pour l'ID
        const paragrapheId = document.createElement('p');
        paragrapheId.textContent = `Id généré automatiquement par le fichier JSON : ${user.id}`;
        userCard.appendChild(paragrapheId);  // Ajout du paragraphe à la carte
        // Création d'un autre paragraphe pour l'ID de la pièce
        const paragraphePieceId = document.createElement('p');
        paragraphePieceId.textContent = `Id de la pièce : ${user['piece-id']}`;  // Utilisation de la notation entre crochets
        userCard.appendChild(paragraphePieceId);  // Ajout du second paragraphe
        // Création d'un autre paragraphe pour le nom d'utlisateur
        const paragrapheUtilisateur = document.createElement('p');
        paragrapheUtilisateur.textContent = `Nom d'utilisateur : ${user.utilisateur}`;
        userCard.appendChild(paragrapheUtilisateur)
        // Création d'un autre paragraphe pour le commentaire de l'utlisateur
        const paragrapheCommentaire = document.createElement('p');
        paragrapheCommentaire.textContent = `Commentaire : ${user.commentaire}`;
        userCard.appendChild(paragrapheCommentaire)
    });
}

afficheAvis();


