// Day 18 Project - Digital Pet System

console.log("Digital Pet System Started");

const display = document.getElementById("display");


// ES6 CLASS with CONSTRUCTOR

class Pet {

    constructor(name, health, energy) {

        this.name = name;

        this._health = health;
        this._energy = energy;

    }


    // GETTER

    get health() {
        return this._health;
    }

    get energy() {
        return this._energy;
    }


    // SETTER with validation

    set health(value) {

        if (value > 100) this._health = 100;

        else if (value < 0) this._health = 0;

        else this._health = value;

    }


    set energy(value) {

        if (value > 100) this._energy = 100;

        else if (value < 0) this._energy = 0;

        else this._energy = value;

    }



    // METHODS

    feed() {

        this.health += 10;
        this.energy += 5;

        display.innerText = `${this.name} is eating 🍖`;

        updateUI();

    }

    play() {

        this.health -= 5;
        this.energy -= 10;

        display.innerText = `${this.name} is playing ⚽`;

        updateUI();

    }

    rest() {

        this.energy += 15;

        display.innerText = `${this.name} is resting 😴`;

        updateUI();

    }

    getStatus() {

        display.innerText =
            `Health: ${this.health}, Energy: ${this.energy}`;

    }

}



// CREATE OBJECT using CONSTRUCTOR

const myPet = new Pet("Buddy", 80, 60);



// UPDATE UI FUNCTION

function updateUI() {

    document.getElementById("petName").innerText =
        `Pet Name: ${myPet.name}`;

    document.getElementById("health").innerText =
        myPet.health;

    document.getElementById("energy").innerText =
        myPet.energy;

}



// BUTTON FUNCTIONS

function feedPet() {
    myPet.feed();
}

function playPet() {
    myPet.play();
}

function restPet() {
    myPet.rest();
}

function getPetStatus() {
    myPet.getStatus();
}



// INITIAL LOAD

updateUI();

display.innerText = "Pet System Online ✅";
