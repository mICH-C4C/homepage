console.log('Siema');
const name = 'Michał';
const age = 36;
console.log(name);
console.log(age);
console.log(`Nazywam się '${name}' i mam ${age} lat`);

console.log('Witaj przybyszu ! :) :rocket:');
const about = document.querySelector('.about__paragraph--js');
console.log(about.innerHTML);
about.innerHTML = `<strong>Nazywam</strong> się ${name} i mam ${age} lat`;
const paragraps = document.querySelectorAll('p');
console.log(paragraps[1]);
