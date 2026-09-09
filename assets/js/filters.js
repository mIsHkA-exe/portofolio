/* ==========================================================================
   FILTRES DE PROJETS

   Le HTML contient déjà toutes les cartes. Ce script ne fait qu'en masquer
   certaines. Sans JavaScript, les cinq projets restent visibles et les
   boutons ne font rien : le contenu reste accessible.
   ========================================================================== */

(function () {
    "use strict";

    var filterBar = document.querySelector(".filter-bar__list");
    var grid = document.querySelector(".card-grid");

    // Sortie immédiate si la page ne contient pas de filtres.
    // Le script est chargé partout, il ne doit rien casser ailleurs.
    if (!filterBar || !grid) {
        return;
    }

    var buttons = filterBar.querySelectorAll(".filter-btn");
    var cards = grid.querySelectorAll(".card");

    // Région d'annonce pour les lecteurs d'écran. Un changement visuel
    // silencieux n'existe pas pour un utilisateur non voyant : on crée
    // une zone dont les modifications sont lues à voix haute.
    var status = document.createElement("p");
    status.className = "visually-hidden";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    filterBar.parentNode.appendChild(status);


    /**
     * Une carte correspond-elle au filtre demandé ?
     * data-category peut contenir plusieurs valeurs séparées par un espace.
     */
    function matches(card, filter) {
        if (filter === "all") {
            return true;
        }

        var categories = (card.dataset.category || "").split(" ");
        return categories.indexOf(filter) !== -1;
    }


    /**
     * Applique un filtre : masque les cartes non concernées et met à jour
     * l'état des boutons.
     */
    function applyFilter(filter) {
        var visible = 0;

        cards.forEach(function (card) {
            var keep = matches(card, filter);

            // L'attribut hidden est préféré à une classe : il retire
            // l'élément de l'arbre d'accessibilité en même temps que
            // de l'affichage. Une carte masquée n'est plus lue.
            card.hidden = !keep;

            if (keep) {
                visible += 1;
            }
        });

        // Le script bascule un état, le CSS décide de l'apparence.
        buttons.forEach(function (button) {
            var isActive = button.dataset.filter === filter;
            button.setAttribute("aria-pressed", isActive ? "true" : "false");
        });

        status.textContent =
            visible + (visible === 1 ? " project shown" : " projects shown");
    }


    // Un seul écouteur posé sur le conteneur plutôt qu'un par bouton.
    // L'événement remonte depuis le bouton cliqué : c'est la délégation.
    filterBar.addEventListener("click", function (event) {
        var button = event.target.closest(".filter-btn");

        if (!button || !filterBar.contains(button)) {
            return;
        }

        applyFilter(button.dataset.filter);
    });

})();
