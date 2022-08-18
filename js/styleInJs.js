let sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.border = '2px dashed steelblue';
    section.style.margin = '10px';
    section.style.borderRadius = '20px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgrey';
}
// let placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'grey';
let placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');









