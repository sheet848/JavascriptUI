/*document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});*/

document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click', () => {
        const accordionItems = document.querySelectorAll('.accordion-item');

        // Close all accordion panels except the clicked one
        accordionItems.forEach((item) => {
            if (item !== button.parentElement) {
                const panel = item.querySelector('.accordion-panel');
                panel.style.display = 'none';
            }
        });

        // Toggle the visibility of the clicked accordion panel
        const panel = button.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});