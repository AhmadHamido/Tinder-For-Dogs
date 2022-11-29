

class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    getDogHtml() {
        const {name, avatar, age, bio} = this;

        return `
                <div class="dog-details">
                    <div class="dog-info">
                        <p class="dog-name" id="dog-name">${name}, ${age}</p>
                        <p class="dog-bio" id="dog-bio">${bio}</p>
                    </div>
                    <img class="dog-img" src="${avatar}">
                </div>
        `
    }
}

export default Dog;