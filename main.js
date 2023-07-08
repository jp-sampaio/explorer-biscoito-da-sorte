// quando clicar no biscoito aparecer um martelo batendo;

const cookie = document.querySelector(".one .cookie");
const sectionOne = document.querySelector(".one");
const sectionTwo = document.querySelector(".two");
const buttonReset = document.querySelector("button");
const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Você sempre será a sua melhor companhia!",
  "Acredite em milagres, mas não dependa deles.",
  "A inspiração vem dos outros. A motivação vem de dentro de nós.",
  "A maior barreira para o sucesso é o medo do fracasso.",
  "Nós somos o que pensamos.",
  "Deixe de lado as preocupações e seja feliz.",
  "Você é do tamanho do seu sonho.",
  "Os defeitos são mais fortes quando o amor é fraco.",
];
let numberRamdom = Math.round(Math.random() * 10);

document.addEventListener("keydown", handleEnter);
cookie.addEventListener("click", handleClickCookie);
buttonReset.addEventListener("click", handleClickButtonReset);

function handleToggle() {
  sectionOne.classList.toggle("hide");
  sectionTwo.classList.toggle("hide");
}

function handleClickCookie() {
  handleToggle();
  sectionTwo.querySelector("p").innerText = phrases[numberRamdom];
}

function handleClickButtonReset() {
  handleToggle();
  numberRamdom = Math.round(Math.random() * 10);
}

function handleEnter(event) {
  if (event.key == "Enter" && sectionOne.classList.contains("hide")) {
    handleClickButtonReset();
  } else if (event.key == "Enter" && sectionTwo.classList.contains("hide")) {
    handleClickCookie();
  }
}