/* ==========================================================================
   APPARITION AU DÉFILEMENT

   L'état de départ (invisible) est posé par ce script, jamais par le CSS.
   Sans JavaScript, aucune classe n'est ajoutée et tout reste visible.
   ========================================================================== */

(function () {
    "use strict";

    // Respecte le réglage système avant toute chose. Une personne qui
    // demande un mouvement réduit ne doit voir aucune animation.
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // IntersectionObserver n'existe pas sur les très anciens navigateurs.
    // Dans ce cas on ne fait rien : le contenu reste simplement visible.
    if (reduced || !("IntersectionObserver" in window)) {
        return;
    }

    var targets = document.querySelectorAll(
        "main > section, .project > section, .card, .feature"
    );

    if (targets.length === 0) {
        return;
    }

    // Le premier bloc de la page est déjà visible au chargement :
    // l'animer produirait un clignotement à l'arrivée.
    var first = targets[0];

    targets.forEach(function (element) {
        if (element !== first) {
            element.classList.add("js-reveal");
        }
    });


    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");

                // Une fois l'élément apparu, il n'y a plus rien à observer.
                // Ne pas s'arrêter ferait travailler le navigateur pour rien.
                observer.unobserve(entry.target);
            });
        },
        {
            // Déclenche un peu avant que l'élément touche le bas de l'écran,
            // pour que l'animation soit terminée quand on le regarde.
            rootMargin: "0px 0px -10% 0px",
            threshold: 0.1
        }
    );

    targets.forEach(function (element) {
        if (element !== first) {
            observer.observe(element);
        }
    });

})();
