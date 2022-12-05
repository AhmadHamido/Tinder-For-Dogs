import dogs from './data.js';
import Dog from './Dog.js';

let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex]);

document.getElementById('like-btn').addEventListener('click', dogLiked);
document.getElementById('dislike-btn').addEventListener('click', dogDisliked);

function render () {
    document.getElementById('dog').innerHTML = currentDog.getDogHtml();
}

render();

function getNextDog() {
    if (currentDogIndex < dogs.length -1) {
        currentDogIndex ++;
        currentDog = new Dog(dogs[currentDogIndex]);
        render();
    } else {
        noMoreDogs();
    }
}

function noMoreDogs() {
    document.getElementById('tindog-btns').style.display = 'none';

    document.getElementById('dog').innerHTML = `
        <div class="change-area">
            <img class="profile-pic" src="images/52D331D4-5FCC-4A02-AB72-C904F6AA00B3_1_105_c.jpeg">
            <p class="no-more-dogs">There are no more dogs around you. Expand your discovery settings to see more dogs</p>
            <button class="discovery-btn">DISCOVERY SETTINGS</button>
        </div>
        `
}

function dogLiked() {
    if (currentDogIndex < dogs.length) {
        currentDog.setMatchStatus(true);
        document.getElementById('badge').innerHTML = 
            `<img src="images/badge-like.png">`
    }
    
    setTimeout(getNextDog, 1000);
}

function dogDisliked() {
    if (currentDogIndex < dogs.length) {
        currentDog.setMatchStatus(false);
        document.getElementById('badge').innerHTML = 
            `<img src="images/badge-nope.png">`
    }

    setTimeout(getNextDog, 1000);
}