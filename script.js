let btnAjout = document.getElementById('btnAjout');
let champSaisie = document.getElementById('champSaisie');
let listeTaches = document.getElementById('listeTaches');

btnAjout.onclick = function ajouterToDoList(){
    if(champSaisie.value !== ""){
        let parag = document.createElement('p'); //CREER 1 NOUVO PARAGRAPHE
        parag.innerText = champSaisie.value; // AJOUTER LA SAISIE AU PARAGRAPHE

        listeTaches.appendChild(parag); //AFFICHER TACHE AJOUTEE

        champSaisie.value = ""; // VIDER LE CHAMP DE SAISIE

        parag.classList.add('styleParag'); // STYLISER LES PARAGRAPHES

        //CHANGER DE COULEUR & BARRER LORSQU'ON CLIQUE DESSUS
        parag.addEventListener('click', function(){
            parag.classList.add('paragClick')
        })

        // SUPPRIMER LORSQU'ON DOUBLE CLIQUE
        parag.addEventListener('dblclick', function(){
            listeTaches.removeChild(parag);
        })
    }
}