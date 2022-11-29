import dogs from './data.js';
import Dog from './Dog.js';

document.getElementById('like-btn').addEventListener('click', getNextDog);
document.getElementById('dislike-btn').addEventListener('click', getNextDog);

let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex]);

function render () {
    document.getElementById('dog').innerHTML = currentDog.getDogHtml();
}

render();

function getNextDog() {
    if (currentDogIndex < dogs.length -1) {
        currentDogIndex ++;
        currentDog = new Dog(dogs[currentDogIndex]);
    } else {
        noMoreDogs();
    }
    render();
}

function noMoreDogs() {
    console.log('The array has reached its limit');
}