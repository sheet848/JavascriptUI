document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const dataContainer = document.getElementById('data-container');

        const result = document.querySelector('.data-container .result');
        let finalscore = 0;
  
        data.forEach(item => {
          const dataItem = document.createElement('div');
          dataItem.classList.add('data-item');
  
          const title = document.createElement('h3');
          title.textContent = item.category;
  
          const description = document.createElement('p');
          description.textContent = item.score + '/100';

          finalscore += item.score;
  
          dataItem.appendChild(title);
          dataItem.appendChild(description);
          dataContainer.appendChild(dataItem);
        });

        result.textContent = (finalscore*100)/400;
      })
      .catch(error => {
        console.error('Error loading data:', error);
      });

  });
  