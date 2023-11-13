// // recupèrent les boutons
// const touches=[...document.querySelectorAll('button')];
// const listeKeycode = touches.map(touches => touches.dataset.key);

// document.addEventListener('keydown',(e))

document.addEventListener('DOMContentLoaded', function () {

    const signesOperations = ['+', '-', '*', '/'];

    const ecran = document.querySelector('.ecran');
    const touches = document.querySelector('.touch');
    const egal = document.querySelector('.last');
    const clear = document.querySelector('.primred');
    let opSign = '';



    touches.addEventListener('click', function (e) {
        console.log(e);
        if (e.target.matches('.prim')) {

            addToScreen(e.target.textContent);
        }
        if (e.target.matches('.op_prim')) {
            opSign = e.target.textContent;
            addToScreen(e.target.textContent);
        }

        if (e.target.matches('.primred')) {
            clearScreen();
        }
        if (e.target.matches('.last')) {
            calculate();
        }
    });


    function addToScreen(value) {
        ecran.textContent += value;
    }
    function clearScreen() {
        ecran.textContent = '';
    }



    // Addition
    function addition(a, b) {
        return a + b;
    }

    // Soustraction
    function soustraction(a, b) {
        return a - b;
    }

    // Multiplication
    function multiplication(a, b) {
        return a * b;
    }

    // Division
    function division(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Division par zéro impossible";
        }
    }


    function calculate() {


        let allOperation = ecran.textContent.trim();
        let allNumbers = [];
        let allSign = [];
        let tempNumber = '';
        let numberOne = '';
        let isOperationFind = false;

        if (opSign != '') {
            for (let i = 0; i < allOperation.length; i++) {


                if (signesOperations.includes(allOperation[i])) {
                    isOperationFind = true;

                    allNumbers.push(tempNumber);
                    allSign.push(allOperation[i]);
                    tempNumber = '';

                    console.log(allNumbers, allSign);

                }
                else {
                    tempNumber += allOperation[i];
                    console.log(tempNumber, i);
                    if ((i == allOperation.length - 1) && tempNumber != '') {
                        allNumbers.push(tempNumber)
                        console.log('last number',allNumbers);

                    }
                }

            }
        }



        // try {
        //     // const result = eval(ecran.textContent);

        //     // ecran.textContent = result;
        //     switch (opSign) {
        //         case '+':
        //             {
        //                 const result = addition();
        //                 ecran.textContent = result;

        //                 break;
        //             }

        //     }




        // } catch (error) {
        //     ecran.textContent = 'Erreur';
        // }
    }
});