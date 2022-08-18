/**
 * Traversing DOM 
 * option - 1 : getElementsByTagName
 * option - 2 : getElementById
 * option - 3 : getElementsByClassName
 * option - 4 : querySelector
 * option - 5 : querySelectorAll
 */

console.log('Halo infinite');

console.log(document);
console.log(document.body);
let student = {
    name: 'Amon',
    ID: 11,
    study: function name(time) {
        console.log(time, 'studying For phD');
    }
}
let fruitsTitle = document.getElementById('fruits-title');
fruitsTitle.innerText = 'Fruits Changed by JS dom.js'
let places= document.getElementsByClassName('important-places');
for(let place of places){
    console.log(place);
}
let otherPlaces= document.getElementsByClassName('other-places');
for(let place of otherPlaces){
    console.log(place);
}
/**
 * querySelectorAll
*/ 
let oneLi = document.querySelectorAll('.fruits-container li');
for(let li of oneLi){
    console.log(li.innerText);
}


