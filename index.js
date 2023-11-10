let submitButton = document.querySelector('.js-submit');
let number;

submitButton.addEventListener('click', () => {
    let main = document.querySelector('.js-main');
    
    if (number === undefined) {
        alert ('Please select a rating.');
    } else {
        setTimeout(() => {
            main.classList.add('thank-you-main')

            main.innerHTML =`
    
            <link rel="stylesheet" href="thank-you.css">

            <img src="illustration-thank-you.svg" class="thank-you-img">

            <div class="rating-div">You selected ${number} out of 5</div>

            <h1 class="thank-you-text">Thank you!</h1>

            <p class="thank-you-p">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>

            `
        }, 1000)
    }
})


let ratingOne = document.querySelector('.one');
let ratingTwo = document.querySelector('.two');
let ratingThree = document.querySelector('.three');
let ratingFour = document.querySelector('.four');
let ratingFive = document.querySelector('.five');

ratingOne.addEventListener('click', () => {
    ratingOne.classList.add("is-selected");
    ratingTwo.classList.remove('is-selected');
    ratingThree.classList.remove('is-selected');
    ratingFour.classList.remove('is-selected');
    ratingFive.classList.remove('is-selected');

    number = document.querySelector('.one').innerHTML;
})

ratingTwo.addEventListener('click', () => {
    ratingOne.classList.remove("is-selected");
    ratingTwo.classList.add('is-selected');
    ratingThree.classList.remove('is-selected');
    ratingFour.classList.remove('is-selected');
    ratingFive.classList.remove('is-selected');

    number = document.querySelector('.two').innerHTML;
})

ratingThree.addEventListener('click', () => {
    ratingOne.classList.remove("is-selected");
    ratingTwo.classList.remove('is-selected');
    ratingThree.classList.add('is-selected');
    ratingFour.classList.remove('is-selected');
    ratingFive.classList.remove('is-selected');

    number = document.querySelector('.three').innerHTML;
})

ratingFour.addEventListener('click', () => {
    ratingOne.classList.remove("is-selected");
    ratingTwo.classList.remove('is-selected');
    ratingThree.classList.remove('is-selected');
    ratingFour.classList.add('is-selected');
    ratingFive.classList.remove('is-selected');

    number = document.querySelector('.four').innerHTML;
})

ratingFive.addEventListener('click', () => {
    ratingOne.classList.remove("is-selected");
    ratingTwo.classList.remove('is-selected');
    ratingThree.classList.remove('is-selected');
    ratingFour.classList.remove('is-selected');
    ratingFive.classList.add('is-selected');

    number = document.querySelector('.five').innerHTML;
})




