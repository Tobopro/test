// mon-script.js

// Attend que le document soit chargé
document.addEventListener("DOMContentLoaded", function() {
    // Active le dropdown
    $('.dropdown-toggle').dropdown();
})
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
// $(document).ready(function() {
//     // Écoutez le clic sur tous les boutons d'accordéon
//     $('.accordion-button').click(function() {
//         // Fermez tous les éléments d'accordéon sauf celui qui a été cliqué
//         $('.accordion-button').not(this).addClass('collapsed');
//         $('.accordion-collapse').not($(this).attr('data-bs-target')).removeClass('show');
//     });
// });
;