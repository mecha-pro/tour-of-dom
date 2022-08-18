// 1. where to add
let placesList = document.getElementById('places-list');
// 2. what to be added
let li = document.createElement('li');
li.innerText = "Don't go near it";

// 3. add the child
placesList.appendChild(li);

// 1. where to add
let mainContainer = document.getElementById('main-container');

// 2. what to be added
let section = document.createElement('section');
let h1 = document.createElement('h1');
h1.innerText = 'Some FOod List';
section.appendChild(h1);

let ul = document.createElement('ul');
let li1 = document.createElement('li');
li1.innerText = 'Riamiy';
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.innerText = 'Power';
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.innerText = 'Organic';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);


// set innerHTML directly
let sectionDress = document.createElement('section');

sectionDress.innerHTML = 
`
<h1>
Some Dress section
</h1>
<ul>
<li>Jumbbma</li>
<li>Koabaj</li>
<li>Boots</li>
</ul>
`;

mainContainer.appendChild(sectionDress);









