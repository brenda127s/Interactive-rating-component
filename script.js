const rateState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const submitButton = document.getElementById('submit');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('#rating-btn');


    submitButton.addEventListener('click', () => {
        thankYouState.classList.remove('hidden');
        rateState.classList.add('hidden');
    });

    rates.forEach((rate) => {
        rate.addEventListener('click', () => {
            rating.innerHTML = rate.innerHTML;
        });
    });