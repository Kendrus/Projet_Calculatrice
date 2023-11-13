document.addEventListener('DOMContentLoaded', function () {
    const ecran = document.querySelector('.ecran');
    const touches = document.querySelectorAll('.prim');

    let expression = '';

    touches.forEach((bouton) => {
        bouton.addEventListener('click', () => {
            const keyValue = bouton.getAttribute('data-key');

            if (keyValue === '8') {
    
                expression = '';
            } else if (keyValue === '13') {
                
                try {
                    expression = eval(expression);
                } catch (error) {
                    expression = 'Erreur';
                }
            } else {

                expression += bouton.textContent;
            }

        
            ecran.textContent = expression;
        });
    });
});
