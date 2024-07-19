document.addEventListener('DOMContentLoaded', function () {  //Permet de charger en priorité le contenu du DOM
    const formulaire = document.getElementById("formulaire"); //relie  l'id du formulaire

    formulaire.addEventListener('submit', function (e) {
        e.preventDefault();//Empeche l'envoi du formulaire sans la verif

        //validation formulaire
        let verif = true;
        verif += validerChamp(/^[a-zA-ZÀ-ÿ-]+$/, document.getElementById("Soc"), 'Veuillez saisir un nom de sociéte valide.');
        verif += validerChamp(/^[a-zA-ZÀ-ÿ-]+$/, document.getElementById("PContact"), 'Caractère invalide');
        verif += validerChamp(/^[0-9]+$/, document.getElementById("codepostal"), 'adresse invalid');
        verif += validerChamp(/^[a-zA-ZÀ-ÿ-]+$/, document.getElementById("Ville"), 'Saisir une ville correct');
        verif += validerChamp(/^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/, document.getElementById("e-mail"), 'Saisir une adresse mail valide');
    });
});
function validerChamp(regex, champ, messageErreur) {
    if (!regex.test(champ.value)) {
        alert(messageErreur);
        champ.focus();
        return false;
    }
    return true;
}