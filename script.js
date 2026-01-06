function verifierEmail() {
    let m = document.getElementaryById("email").value;
    let statutEmail = document.getElementById("statutEmail");
    if (m.includes("@") && m.includes(".")) {
        console.log("L'email contient bien un arobase et un point");
        statutEmail.innerHTML = "OK";
        statutEmail.style.color = "green";
    }
    else {
        console.log("Il manque l'arobase ou le point");
        statutEmail.innerHTML = "Ceci n'est pas une adresse mail valide (il manque @ ou .)";
        statutEmail.style.color = "red";
    }
}

function verifierPseudo() {
    let p = document.getElementById("nom").value;
    let statutNom =document.getElementById("nom").value;

    if (p.length >= 8) {
        console.log("Pseudo assez long");
        document.getElementaryById("statutNom").innerHTML = "OK";
        statutNom.style.color = "green";
    }
    else {
        console.log("Pseudo trop court");
        document.getElementaryById("statutNom").innerHTML = "Le pseudo doit contenir au moins 8 caractères";
        statutNom.style.color = "red";
    }
}


function chargerFauxAvis() {
    fetch("https://randomuser.me/api/?results=2")
    .then(response => response.json())
    .then(data => {
        const utilisateurs = data.results;
        const container = document.querySelector(".customer-reviews-grid");

        utilisateurs.forEach(user => {
            const nouvelAvis = document.createElement("div");
            nouvelAvis.className = "customer-review";


            nouvelAvis.innerHTML = `  
                <div style="text-align:center;">
                    <img src="${user.picture.large}" style="border-radius:50%; width:70px;">
                </div>
                <p class="review-text">
                    "Produits Chocoprint incroyables ! Livraison rapide à ${user.location.city}."
                </p>
                <p class="review-author">
                    - <strong>${user.login.username}</strong> (${user.email})
                </p>
            `;


            container.prepend(nouvelAvis);
        })
    })
    .catch(error => console.error("Erreur d'API :", error));
}