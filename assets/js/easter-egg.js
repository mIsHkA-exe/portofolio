/* ==========================================================================
   EASTER EGG

   Taper « speed » n'importe où sur la page d'accueil affiche une image
   pendant trois secondes. Fermeture automatique, au clic, ou par Échap.

   Rien n'est présent dans le HTML : la modale est créée à la demande et
   retirée après usage.
   ========================================================================== */

(function () {
    "use strict";

    var SEQUENCE = "speed";
    var DURATION = 3000;
    var IMAGE = "assets/images/speed-easter-egg.jpg";

    var buffer = "";
    var overlay = null;
    var timer = null;


    /**
     * L'utilisateur est-il en train de saisir du texte ?
     * Sans ce garde-fou, écrire « speed » dans un champ déclencherait
     * la modale. Le site n'a pas de formulaire aujourd'hui, mais le jour
     * où il en aura, ce script continuera de se comporter correctement.
     */
    function isTyping(target) {
        if (!target || !target.tagName) {
            return false;
        }

        var tag = target.tagName.toLowerCase();

        return tag === "input"
            || tag === "textarea"
            || tag === "select"
            || target.isContentEditable === true;
    }


    function close() {
        if (!overlay) {
            return;
        }

        clearTimeout(timer);
        timer = null;

        overlay.classList.remove("is-visible");

        // On attend la fin du fondu avant de retirer l'élément du DOM.
        // La durée est volontairement fixée ici plutôt que lue dans le CSS :
        // en mouvement réduit, transitionend arrive presque immédiatement.
        var node = overlay;
        overlay = null;

        setTimeout(function () {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        }, 320);
    }


    function open() {
        // Déjà ouverte : on ignore plutôt que d'empiler deux minuteurs.
        if (overlay) {
            return;
        }

        overlay = document.createElement("div");
        overlay.className = "easter-egg";

        var image = document.createElement("img");
        image.className = "easter-egg__image";
        image.src = IMAGE;

        // Image purement décorative : un alt vide indique aux lecteurs
        // d'écran de l'ignorer, au lieu de leur faire lire un nom de fichier.
        image.alt = "";

        overlay.appendChild(image);
        overlay.addEventListener("click", close);

        document.body.appendChild(overlay);

        // Le navigateur doit avoir enregistré l'état initial avant qu'on
        // change la classe, sinon la transition ne se joue pas. Forcer la
        // lecture d'une propriété calculée provoque ce recalcul.
        window.getComputedStyle(overlay).opacity;

        overlay.classList.add("is-visible");

        timer = setTimeout(close, DURATION);
    }


    document.addEventListener("keyup", function (event) {

        // Échappatoire clavier, prioritaire sur tout le reste.
        if (event.key === "Escape") {
            close();
            return;
        }

        if (isTyping(event.target)) {
            return;
        }

        // event.key vaut « Shift », « ArrowLeft », « F5 »… pour les touches
        // non textuelles. On ne garde que celles d'un seul caractère.
        if (event.key.length !== 1) {
            return;
        }

        // Tampon glissant : on conserve uniquement les derniers caractères
        // utiles. Un index de progression échouerait sur « sspeed », où le
        // second « s » remettrait le compteur à zéro.
        buffer = (buffer + event.key.toLowerCase()).slice(-SEQUENCE.length);

        if (buffer === SEQUENCE) {
            buffer = "";
            open();
        }
    });

})();
