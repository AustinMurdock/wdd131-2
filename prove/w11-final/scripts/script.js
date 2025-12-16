
const pokeApi = "https://pokeapi.co/api/v2/";
const results_dom = document.getElementById("results");
let pokeArr = [];

function buildRow(poke) {
    return `\
    <tr>
        <td>${poke.id}</td>
        <td>
        <img src="${poke.sprites.front_default}" alt="${poke.name} sprite">
        </td>
        <td>
            <a href="./location/index.html?p=${poke.id}">
                ${String(poke.name).charAt(0).toUpperCase() + String(poke.name).slice(1)}
            </a>
        </td>
        <td class="t-type">
            <p>${poke.types[0].type.name}</p>
            <div class="p-type-${poke.types[0].type.name}"></div>
        </td>
        <td class="t-type">${poke.types[1] ?
            "<p>" + poke.types[1].type.name + "</p>" +
            "<div class=\"p-type-" + poke.types[1].type.name + "\"></div>"
            : ""}
        </td>
        <td>${poke.stats[0].base_stat}</td>
        <td>${poke.stats[1].base_stat}</td>
        <td>${poke.stats[2].base_stat}</td>
        <td>${poke.stats[3].base_stat}</td>
        <td>${poke.stats[4].base_stat}</td>
        <td>${poke.stats[5].base_stat}</td>
        <td>${poke.stats[6].base_stat}</td>
        </tr>\
        `;
}

function display(arr) {
    results_dom.innerHTML = "";
    console.log(arr);
    arr.forEach(p => {
        results_dom.innerHTML += buildRow(p)
    });
    return;
}

async function pCall(query) {
    const p = await fetch(pokeApi + query);
    if (p.ok) {
        let pJson = await p.json();
        if (pJson.stats) {
            pJson.stats.push({
                base_stat: pJson.stats.reduce((s,n) => s + n.base_stat, 0),
                stat: {
                    name: "total"
                }
            });
        }
        /* if (pJson.location_area_encounters) {
            const pL = await fetch(pJson.location_area_encounters);
            if (pL.ok) {
                const pLJson = await pL.json();
                pJson.location_area_encounters = pLJson;
            }
        } */
        // console.log(pJson);
        return pJson;
    }
    return;
}

async function pBuildArr(start, end) {
    let arr = [];
    for (let i=start; i<=end; i++) {
        arr.push(await pCall("pokemon/" + i));
    }
    return arr;
}

function comparator(a, b, direction) {
    if (a > b) {
        return direction;
    }
    else if (a < b) {
        return -direction;
    }
    else {
        return 0;
    }
}

document.querySelectorAll("th").forEach(th => {
    th.addEventListener("click", e => {
        switch (e.target.innerText) {
            case "#":
                pokeArr.sort((pokeA, pokeB) =>
                    comparator(pokeA.id, pokeB.id, -1));
                break;
                case "":
                case "Name":
                    pokeArr.sort((pokeA, pokeB) =>
                        comparator(pokeA.name, pokeB.name, -1));
                    break;
                case "Types":
                    pokeArr.sort((pokeA, pokeB) =>
                        comparator(pokeA.types[0].type.name, pokeB.types[0].type.name, -1));
                    break;
                case "HP":
                    pokeArr.sort((pokeA, pokeB) =>
                        comparator(pokeA.stats[0].base_stat, pokeB.stats[0].base_stat, -1));
                    break;
                case "Atk":
                    pokeArr.sort((pokeA, pokeB) =>
                        comparator(pokeA.stats[1].base_stat, pokeB.stats[1].base_stat, -1));
                    break;
                case "Def":
                    pokeArr.sort((pokeA, pokeB) =>
                        comparator(pokeA.stats[2].base_stat, pokeB.stats[2].base_stat, -1));
                    break;
                case "SpA":
                    pokeArr.sort((pokeA, pokeB) =>
                        comparator(pokeA.stats[3].base_stat, pokeB.stats[3].base_stat, -1));
                    break;
                case "SpD":
                    pokeArr.sort((pokeA, pokeB) =>
                        comparator(pokeA.stats[4].base_stat, pokeB.stats[4].base_stat, -1));
                    break;
                case "Spd":
                    pokeArr.sort((pokeA, pokeB) =>
                        comparator(pokeA.stats[5].base_stat, pokeB.stats[5].base_stat, -1));
                    break;
                case "Total":
                    pokeArr.sort((pokeA, pokeB) =>
                        comparator(pokeA.stats[6].base_stat, pokeB.stats[6].base_stat, -1));
                    break;
                }
            // e.target.innerText += "↑";
        display(pokeArr);
    });
});

pBuildArr(1, 151)
    .then(arr => {
        pokeArr = arr;
        display(pokeArr);
        return;
    });
