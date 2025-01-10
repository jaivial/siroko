const form = document.getElementById('form');
const optionsContainer = document.getElementById('options-container');

// Header elements
const headerpilltext = document.getElementById('headerpilltext');
headerpilltext.innerText = 'paso 1 de 2';
const headerp = document.getElementById('headerp');
headerp.innerText = 'Has llegado hasta el test de Siroko. Responde las siguientes preguntas y genera tu código premiado a medida.';
const headertitle = document.getElementById('headertitle');
headertitle.innerText = '!vamos alla!';

// Form elements
const formbutton = document.getElementById('formbutton');
formbutton.innerText = 'Siguiente';
const iconButtonSpan = document.createElement('span');
iconButtonSpan.classList.add('material-symbols-outlined');
iconButtonSpan.innerText = 'trending_flat';
iconButtonSpan.style.fontSize = '30px';
iconButtonSpan.style.fontWeight = '400';

formbutton.appendChild(iconButtonSpan);

const formText = document.getElementById('form-text');
formText.innerText = 'uso siroko desde...';

// Initial options for step 1
let selectedYear = null;
const initialOptions = [2016, 2017, 2018, 2019, 2020, 2021];

// New options for step 2
let selectedOption = null;
const newOptions = [
    'Segaría a navaja',
    'Rechazaría un cachopo',
    'Renunciaría a mis tierras',
    'Regalaría una ternera'
];

// Variable to track the current step
let currentStep = 1;

// Generate initial options
generateOptions(initialOptions);

// Handle button click to go to step 2 and step 3
formbutton.addEventListener('click', () => {

    event.preventDefault(); // Prevent form submission
    if (currentStep === 1 && selectedYear !== null) {
        // Update the step
        currentStep++;
    } else if (currentStep === 1 && selectedYear === null) {
        Toastify({
            text: "Selecciona un año",
            duration: 3000,
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    } else if (currentStep === 2 && selectedOption !== null) {
        // Update the step
        currentStep++;
    } else if (currentStep === 2 && selectedOption === null) {
        Toastify({
            text: "Selecciona una opción",
            duration: 3000,
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    } else if (currentStep === 3) {
        currentStep++;
        window.open('https://www.siroko.com/es/', '_blank', 'noopener noreferrer');
    }

    if (currentStep === 2 && selectedYear !== null) {

        console.log(currentStep);
        // Change header and form text for step 2
        headerpilltext.innerText = 'paso 2 de 2';
        headertitle.innerText = 'vamos, una mas';
        headerp.style.display = 'none';
        formText.innerText = 'por unas gafas siroko, yo...';


        // Clear the current options
        optionsContainer.innerHTML = '';

        // Generate new options for step 2
        generateOptions(newOptions);


        console.log(currentStep);
    }

    if (currentStep === 3 && selectedOption !== null) {

        console.log(currentStep);
        // Change header and form text for step 2
        headerpilltext.innerText = 'tu premio está listo';
        headertitle.innerText = '!enhorabuena!';
        headerp.style.display = 'none';
        formText.innerText = 'lo prometido es deuda';


        // Remove options container
        optionsContainer.innerHTML = '';
        optionsContainer.classList.add('discountcodediv');

        // Generate discount code
        const discountcode = generateDiscountCode(selectedYear, selectedOption);
        const discountcodep = document.createElement('p');
        discountcodep.innerText = discountcode;

        // Create copy to clipboard button
        const copybutton = document.createElement('div');
        copybutton.id = 'copybutton';
        copybutton.classList.add('copybutton');
        copybutton.innerText = 'Copiar';


        // Add click event to copy the text content
        copybutton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent any default behavior

            // Copy the text content of discountcodep to the clipboard
            const textToCopy = discountcodep.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                Toastify({
                    text: `Código copiado ${textToCopy}`,
                    duration: 3000,
                    newWindow: true,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right,rgb(0, 176, 73),rgb(61, 201, 110))",
                    },
                    onClick: function () { } // Callback after click
                }).showToast();
            }).catch(err => {
                Toastify({
                    text: `Error al copiar el código ${err}`,
                    duration: 3000,
                    newWindow: true,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
                    },
                    onClick: function () { } // Callback after click
                }).showToast();
            });
        });

        // Display the text p below the code
        const newtext = document.getElementById('newtext');
        newtext.innerText = 'Introduce este código en tu próxima compra para conseguir tu premio.¡Disponible durante 20 minutos!';
        newtext.style.display = 'flex';

        // Display the countdown with 20 minutes
        startCountdown(20);

        // Change the button text
        const formbuttonanchor = document.createElement('a');
        formbuttonanchor.innerText = 'Ir a siroko.com';
        formbuttonanchor.href = 'https://www.siroko.com/es/';
        formbuttonanchor.target = '_blank'; // Open the link in a new tab
        formbuttonanchor.rel = 'noopener noreferrer'; // Security best practice
        formbuttonanchor.style.color = '#fff';
        formbuttonanchor.style.textDecoration = 'none';

        const iconButtonSpan = document.createElement('span');
        iconButtonSpan.classList.add('material-symbols-outlined');
        iconButtonSpan.innerText = 'trending_flat';
        iconButtonSpan.style.fontSize = '30px';
        iconButtonSpan.style.fontWeight = '400';
        formbutton.innerText = '';
        formbutton.appendChild(formbuttonanchor);
        formbutton.appendChild(iconButtonSpan);

        optionsContainer.appendChild(discountcodep);
        optionsContainer.appendChild(copybutton);



        console.log(currentStep);
    }
});




// --- FUNCTIONS ---

// Function to generate options dynamically
function generateOptions(options) {
    options.forEach(option => {
        // Create the option div
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');

        // Create the icon span for the radio button
        const iconSpan = document.createElement('span');
        iconSpan.classList.add('material-symbols-outlined');
        iconSpan.innerText = 'radio_button_unchecked';

        // Create the label
        const label = document.createElement('label');
        label.innerText = option;

        // Append the icon and label to the option div
        optionDiv.appendChild(iconSpan);
        optionDiv.appendChild(label);

        // Add a click event to handle the selection
        optionDiv.addEventListener('click', () => {
            // Uncheck all other options
            document.querySelectorAll('.option').forEach(opt => {
                opt.querySelector('.material-symbols-outlined').innerText = 'radio_button_unchecked';
                opt.classList.remove('checked');
            });

            // Check the clicked option
            iconSpan.innerText = 'radio_button_checked';
            optionDiv.classList.add('checked');

            if (currentStep === 1) {
                selectedYear = option;
                console.log(`Selected value: ${selectedYear}`);
            }
            if (currentStep === 2) {
                selectedOption = option;
                console.log(`Selected value: ${selectedOption}`);
            }
        });

        // Append the option div to the container
        optionsContainer.appendChild(optionDiv);
    });
}


// Function to generate the discount code
function generateDiscountCode(year, text) {
    // 1. Get the sum of the last two digits of the year
    const lastTwoDigitsSum = Math.floor(year % 100 / 10) + (year % 10);

    // 2. Filter the last 4 valid characters from the text
    const validCharacters = text
        .replace(/[aA\s]/g, '') // Remove "a", "A", and spaces
        .slice(-4) // Get the last 4 characters
        .toUpperCase(); // Convert to uppercase

    // Combine the two parts
    return `${lastTwoDigitsSum}${validCharacters}`;
}

// Function to start a countdown timer
function startCountdown(durationInMinutes) {
    const countdownElement = document.createElement('p');
    countdownElement.id = 'countdown';
    const spancountdown = document.createElement('span');
    spancountdown.classList.add('material-symbols-outlined');
    spancountdown.id = 'spancountdown';
    spancountdown.innerText = 'alarm';
    const countdown = document.getElementById('countdowndiv');
    countdown.style.display = 'flex';
    countdown.appendChild(spancountdown);
    countdown.appendChild(countdownElement);



    // Create text and button to reset countdown
    const expiredtext = document.createElement('p');
    expiredtext.id = 'expiredtext';
    expiredtext.innerText = 'Código caducado.';

    const resettext = document.createElement('a');
    resettext.id = 'resettext';
    resettext.innerText = 'Reiniciar';
    resizeTo.href = '#';

    // Add a click event to reload the page
    resettext.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        location.reload(); // Reload the page
    });


    let timeRemaining = durationInMinutes * 60; // Convert minutes to seconds

    // Update the countdown every second
    const interval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        countdownElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        // Check if time has run out
        if (timeRemaining <= 0) {
            countdown.classList.add('timeout');
            countdownElement.style.display = 'none';
            copybutton.style.display = 'none';
            countdown.appendChild(expiredtext);
            countdown.appendChild(resettext);

            clearInterval(interval);
        }

        timeRemaining--;
    }, 1000);
}