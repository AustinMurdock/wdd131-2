
const char_temp = {
    image: "",
    name: "",
    type: "",
    level: 0,
    health: 0,
    attacked: function(dmg) {
        this.health -= dmg;
        return;
    },
    level_up: function() {
        this.level += 1;
        this.health += Math.floor(10 + Math.pow(1.2, this.level));
        return;
    },
}

function buildChar(img_src, name, type, level, health) {
    let char = Object.create(char_temp);
    char.image = img_src;
    char.name = name;
    char.type = type;
    char.level = level;
    char.health = health;
    return char;
}

function displayChars(chars, start_i) {
    for (let i=start_i; i<(start_i + chars.length); i++) {
        let card_e = cards[i];
        card_e.querySelector(".location").setAttribute("value", i);
        card_e.querySelector(".image").setAttribute("src", chars[i].image);
        card_e.querySelector(".name").innerText = chars[i].name;
        let stats = card_e.querySelectorAll(".stats li");
        stats[0].innerHTML = "<strong>Class:</strong> " + chars[i].type;
        stats[1].innerHTML = "<strong>Level:</strong> " + chars[i].level;
        stats[2].innerHTML = "<strong>Health:</strong> " + chars[i].health;
    }
    return;
}

let cards = document.querySelectorAll(".card");
let chars = [];
chars.push(buildChar("./images/pumpkin-boateer.png", "Pumpkin-Boateer", "Funny Little Guy", 10, 200));
chars.push(buildChar("./images/pumpkin-boateer.png", "Strong Pumpkin-Boateer", "Funnier Little Guy", 5, 180));

displayChars(chars, 0);

cards.forEach(e => {
    e.addEventListener("click", event => {
        let i = event.currentTarget.querySelector("input.location").value;
        if (event.target.innerText === "Attacked") {
            if (chars[i].health > 0) {
                chars[i].attacked(20);
            }
            displayChars(chars, 0);
            if (chars[i].health <= 0) {
                setTimeout(() => {
                    alert(chars[i].name + " has fallen and can't get up!");
                });
                cards[i].classList.add("vanquished");
            }
        }
        else if (event.target.innerText === "Level Up") {
            chars[i].level_up();
            displayChars(chars, 0);
            cards[i].classList.remove("vanquished");
        }
    });
});
