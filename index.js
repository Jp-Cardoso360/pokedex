setTimeout(function(){
document.querySelector('.inicio').style.display = 'none';
document.querySelector('.conteiner').style.display = 'flex';
},5200)

const picachu = {
  nome: 'Pikachu',
  pokedex: '#001',
  img: 'https://www.pngall.com/wp-content/uploads/5/Pokemon-Pikachu-PNG.png', 
  hp: 'HP: 250',
  ataque: 'Ataque: 75',
  defesa: 'Defesa: 50',
  AtaqueE: 'Ataque Especial: 100',
  velocidade: 'Velocidade: 90',
  total: 'Total: 565',
  Habilidade1: 'Esfera Eletrica',
  Habilidade2: 'Choque do trovão',
  tipo: 'Comun',
  cor: 'yellow'
}
const blastoise = {
  nome: 'Blastoise',
  pokedex: '#010',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
  hp: 'HP: 700',
  ataque: 'Ataque: 110',
  defesa: 'Defesa: 100',
  AtaqueE: 'Ataque Especial: 150',
  velocidade: 'Velocidade: 80',
  total: 'Total: 1140',
  Habilidade1: 'Jato de água',
  Habilidade2: 'Tsunami de água',
  tipo: 'Comun',
   cor: 'rgb(19, 176, 238)'
}
const greninja = {
  nome: 'Greninja',
  pokedex: '#122',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png',
  hp: 'HP: 500',
  ataque: 'Ataque: 90',
  defesa: 'Defesa: 75',
  AtaqueE: 'Ataque Especial: 115',
  velocidade: 'Velocidade: 105',
  total: 'Total: 885',
  Habilidade1: 'Soco de água',
  Habilidade2: 'Mega explosão',
  tipo: 'Comun',
  cor: 'blue'
}
const snolax = {
  nome: 'Snolax',
  pokedex: '#512',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
  hp: 'HP: 850',
  ataque: 'Ataque: 75',
  defesa: 'Defesa: 170',
  AtaqueE: 'Ataque Especial: 120',
  velocidade: 'Velocidade: 40',
  total: 'Total: 1255',
  Habilidade1: 'Barrigada',
  Habilidade2: 'Mega soco',
  tipo: 'Comun',
  cor: 'rgb(19, 77, 238)'
}
const rayquaza = {
  nome: 'Rayquaza',
  pokedex: '#892',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png',
  hp: 'HP: 1220',
  ataque: 'Ataque: 320',
  defesa: 'Defesa: 250',
  AtaqueE: 'Ataque Especial: 410',
  velocidade: 'Velocidade: 170',
  total: 'Total: 2370',
  Habilidade1: 'Chicote de aço',
  Habilidade2: 'Shandow power',
  tipo: 'Lendario',
  cor: 'green'
} 
let valor1 = document.querySelector('.value1');
let valor2= document.querySelector('.value2');
let valor3 = document.querySelector('.value3');
let valor4 = document.querySelector('.value4');
let valor5 = document.querySelector('.value5');
let valor6 = document.querySelector('.value6');
let valor7 = document.querySelector('.value7');
let valor8 = document.querySelector('.value8');
let valor9 = document.querySelector('.value9');
let valor10 = document.querySelector('.value10');
let corFundo = document.querySelector('.corFundo');
let tipo = document.querySelector('.tipo')
const img = document.querySelector('.pokemons');
const conteiner = document.querySelector('.containerPoke');


pok1 = () =>{
valor1.innerHTML = picachu.nome;
valor2.innerHTML = picachu.pokedex;
valor3.innerHTML = picachu.hp;
valor4.innerHTML = picachu.ataque;
valor5.innerHTML = picachu.defesa;
valor6.innerHTML = picachu.AtaqueE;
valor7.innerHTML = picachu.velocidade;
valor8.innerHTML = picachu.total;
valor9.innerHTML = picachu.Habilidade1;
valor10.innerHTML = picachu.Habilidade2;
img.src = picachu.img;
corFundo.style.backgroundColor = picachu.cor;
tipo.innerHTML = picachu.tipo;
tipo.style = `color: black;`
};
pok2 = () =>{
valor1.innerHTML = blastoise.nome;
valor2.innerHTML = blastoise.pokedex;
valor3.innerHTML = blastoise.hp;
valor4.innerHTML = blastoise.ataque;
valor5.innerHTML = blastoise.defesa;
valor6.innerHTML = blastoise.AtaqueE;
valor7.innerHTML = blastoise.velocidade;
valor8.innerHTML = blastoise.total;
valor9.innerHTML = blastoise.Habilidade1;
valor10.innerHTML = blastoise.Habilidade2;
img.src = blastoise.img;
corFundo.style.backgroundColor = blastoise.cor;
tipo.innerHTML = blastoise.tipo;
tipo.style = `color: black;`
};
pok3 = () =>{
valor1.innerHTML = greninja.nome;
valor2.innerHTML = greninja.pokedex;
valor3.innerHTML = greninja.hp;
valor4.innerHTML = greninja.ataque;
valor5.innerHTML = greninja.defesa;
valor6.innerHTML = greninja.AtaqueE;
valor7.innerHTML = greninja.velocidade;
valor8.innerHTML = greninja.total;
valor9.innerHTML = greninja.Habilidade1;
valor10.innerHTML = greninja.Habilidade2;
img.src = greninja.img;
corFundo.style.backgroundColor = greninja.cor;
tipo.innerHTML = greninja.tipo;
tipo.style = `color: black;`

};
pok4 = () =>{
valor1.innerHTML = snolax.nome;
valor2.innerHTML = snolax.pokedex;
valor3.innerHTML = snolax.hp;
valor4.innerHTML = snolax.ataque;
valor5.innerHTML = snolax.defesa;
valor6.innerHTML = snolax.AtaqueE;
valor7.innerHTML = snolax.velocidade;
valor8.innerHTML = snolax.total;
valor9.innerHTML = snolax.Habilidade1;
valor10.innerHTML = snolax.Habilidade2;
img.src = snolax.img;
corFundo.style.backgroundColor = snolax.cor;
tipo.innerHTML = snolax.tipo;
tipo.style = `color: black;`
};
pok5 = () =>{
valor1.innerHTML = rayquaza.nome;
valor2.innerHTML = rayquaza.pokedex;
valor3.innerHTML = rayquaza.hp;
valor4.innerHTML = rayquaza.ataque;
valor5.innerHTML = rayquaza.defesa;
valor6.innerHTML = rayquaza.AtaqueE;
valor7.innerHTML = rayquaza.velocidade;
valor8.innerHTML = rayquaza.total;
valor9.innerHTML = rayquaza.Habilidade1;
valor10.innerHTML = rayquaza.Habilidade2;
img.src = rayquaza.img;
corFundo.style.backgroundColor = rayquaza.cor;
tipo.innerHTML = rayquaza.tipo;
tipo.style = `color: red;`
conteiner.style = ` box-shadow: 3px 3px 5px 1px red;`
};
