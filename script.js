/* =========================================================
   West Baltimore College Pathways — script.js
   Two small interactive features (extra credit):
   1) Mobile navigation toggle
   2) FAQ accordion on the Start Here page
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ----- Mobile nav toggle -----
  var toggleBtn = document.querySelector('.nav-toggle');
  var navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function () {
      navMenu.classList.toggle('is-open');
    });
  }

  // ----- FAQ accordion -----
  var faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      var item = question.parentElement;
      var isOpen = item.classList.contains('is-open');

      // Close every panel first
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('is-open');
      });

      // Open the clicked one if it was closed
      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });

});
