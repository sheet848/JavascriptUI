document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingOutput = document.querySelector('.rating-output');
  
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        updateRating(rating);
      });
    });
  
    function updateRating(rating) {
      stars.forEach(star => {
        star.classList.remove('selected');
        if (star.getAttribute('data-value') <= rating) {
          star.classList.add('selected');
        }
      });
      ratingOutput.textContent = `Rating: ${rating}`;
    }
  });
  