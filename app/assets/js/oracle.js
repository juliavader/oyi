const oracle = [
    {
        "asana" : {
            "name": "Svastikasana",
            "image": "svastikasana.svg"
        },
        "citation": "Toutes les sensations - le froid, le chaud, le plaisir, la douleur - vont et viennent sans perdurer; Endure les avec patience.",
    },
    {
        "asana" : {
            "name": "Balasana",
            "image": "balasana.svg"
        },
        "citation": "Si tu es né, tu dois mourir; Si tu es mort, tu dois renaître. Puisqu'on ne peut y échapper, ta douleur est sans fondement.",
    },
    {
        "asana" : {
            "name": "Utkata Konasana",
            "image": "utkata_konasana.svg"
        },
        "citation": "Voilé par mon puissant mystère, nombre d'Hommes ne me voient pas; Leur esprit leurré rete aveugle à l'ingendré, l'immortel."
    },
    {
        "asana" : {
            "name": "Ustrasana",
            "image": "ustrasana.svg"
        },
        "citation": "Le monde entier devient esclave de son affairement constant; Si tu veux vraiment être libre, que chaque action soit une offrande.",
    }, 
    {
        "asana" : {
            "name": "Utkatasana",
            "image": "utkatasana.svg"
        },
        "citation": "Tu dois savoir différencier action, erreur et inaction. La vraie nature de l'action est subtile autant qu'insondable."
    },
    {
        "asana" : {
            "name": "Vrkshasana",
            "image": "vrksahasana.svg"
        },
        "citation": "Comprends donc quel est ton devoir et remplis le sans hésiter. Rien est plus grand pour un guerrier que de combattre par devoir.",
    },
    {
        "asana" : {
            "name": "Adho Mukha Svasana",
            "image": "adho_mukha_svanasana.svg"
        },
        "citation": "Ce que tu veux aveuglément ne pas le faire tu le fera, même contre ta volonté, car ton karma t'y contraindra.",
    },
];

export function randomOracle() {
   return oracle[Math.floor(Math.random()*oracle.length)];
}

export function setOracle(oracle) {
    const oracle_asana_title = document.getElementById("oracle-asana-title");
    const oracle_asana_image = document.getElementById("oracle-asana-image");
    const oracle_citation = document.getElementById("oracle-text");

    oracle_asana_title.innerHTML = oracle.asana.name; 
    oracle_asana_image.src = "images/" + oracle.asana.image;
    oracle_citation.innerHTML = oracle.citation; 
}