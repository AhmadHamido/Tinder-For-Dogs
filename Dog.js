class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool;
        this.hasBeenSwiped = true;
    }

    getDogHtml() {
        const {name, avatar, age, bio} = this;

        return `
                <div class="dog-details">
                    <div class="badge" id="badge"></div>
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