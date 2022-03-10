import '../scss/card.scss';
import { randomOracle, setOracle } from "./oracle";

window.addEventListener('load', event => {""
    const oracle = randomOracle();
    setOracle(oracle);
    setTimeout(unsetLoader, 1000)
})

function unsetLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = "none";
    const card = document.getElementById('oracle-card');
    card.style.display = "block";
    card.classList.add('fade-in');
}