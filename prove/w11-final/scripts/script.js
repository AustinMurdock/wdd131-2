
const pokeApi = "https://pokeapi.co/api/v2/";
const results = document.getElementById("results");
let pokeArr = [];

function buildRow(poke) {
    return `\
    <tr>
        <td>${poke.id}</td>
        <td>
        <img src="${poke.sprites.front_default}" alt="${poke.name} sprite">
        </td>
        <td>${String(poke.name).charAt(0).toUpperCase() + String(poke.name).slice(1)}</td>
        <td>${poke.types[0].type.name}</td>
        <td>${poke.types[1] ? poke.types[1].type.name : ""}</td>
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
    results.innerHTML = "";
    console.log(arr);
    arr.forEach(p => {
        results.innerHTML += buildRow(p)
    });
    return;
}

async function pCall(item) {
    const p = await fetch(pokeApi + item);
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
        if (pJson.location_area_encounters) {
            const pL = await fetch(pJson.location_area_encounters);
            if (pL.ok) {
                const pLJson = await pL.json();
                pJson.location_area_encounters = pLJson;
            }
        }
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

document.querySelectorAll("th").forEach(th => {
    th.addEventListener("click", e => {
        pokeArr.sort((a, b) => {
            if (a.stats[6].base_stat > b.stats[6].base_stat) {
                return -1;
            }
            else if (a.stats[6].base_stat < b.stats[6].base_stat) {
                return 1
            }
            else {
                return 0;
            }
        });
        display(pokeArr);
    });
});

pBuildArr(1, 20)
    .then(arr => {
        pokeArr = arr;
        display(pokeArr);
        return;
    });
