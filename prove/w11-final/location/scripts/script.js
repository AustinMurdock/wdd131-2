
const pokeApi = "https://pokeapi.co/api/v2/";
const url = new URL(window.location.href);
const query = url.searchParams.get("p");
const pokeImg_dom = document.getElementById("main-img");
const locations_dom = document.getElementById("locations");
let poke = {};
let genArr = [];

async function pCall(query) {
    const p = await fetch(pokeApi + query);
    if (p.ok) {
        let pJson = await p.json();
        return pJson;
    }
    return;
}

async function pGetJson(id) {
    const poke = await pCall("pokemon/" + id);
    return poke;
}

async function pBuildArr(id) {
    const areaArr = await pCall("pokemon/" + id + "/encounters");
    let genArr = [];
    areaArr.forEach(a => {
        a.version_details.forEach(v => {
            let area = a.location_area.name;
            let gen = v.version.name;
            if (!genArr[gen]) {
                genArr[gen] = [];
            }
            genArr[gen].push(area);
        });
    });
    return genArr;
}

function buildListing(gen, areaArr) {
    let html = `\
        <h2>${String(gen).charAt(0).toUpperCase() + String(gen).slice(1)}</h2>
        <ul>
    `
    areaArr.forEach(a => {
        html += `<li>${String(a).replaceAll("-", " ")}</li>`
    });
    html += `</ul>`;
    return html;
}

console.log(query);
pGetJson(query)
    .then(json => {
        poke = json;
        pokeImg_dom.setAttribute("src", poke.sprites.other["official-artwork"].front_default);
        pokeImg_dom.setAttribute("alt", poke.name + " official artwork");
            return;
    });
pBuildArr(query)
    .then(arr => {
        genArr = arr;
        Object.keys(genArr).forEach((g, i) => {
            locations_dom.innerHTML += buildListing(g, genArr[g]);
        });
        if (Object.keys(genArr).length == 0) {
            locations_dom.innerHTML += `\
                <p>
                    - No location data found for ${String(poke.name).charAt(0).toUpperCase() + String(poke.name).slice(1)}. - \
                `;
        }
        return;
    });