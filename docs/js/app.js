/*----------------------------------------------------------- PAGE RELOAD ----------------------------------------------------------------------------*/

window.onload = function() {
  window.scrollTo(0, 0);
};

const img = document.querySelector('#bg-image');

/*----------------------------------------------------------- ANIMATION SCROLL IMG ----------------------------------------------------------------------------*/

window.addEventListener('scroll', () => {
  img.style.transform = `translateY(-${window.scrollY * 1.5}px)`;
});

/*----------------------------------------------------------- ANIMATION SCROLL PRESENTATION ----------------------------------------------------------------------------*/

var linkClicked = false;

function handleLinkClick() {
  linkClicked = true;
}

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', handleLinkClick);
}

function scrollToSectionOnce(event) {
  if (linkClicked) {
    return;
  }

  event.preventDefault();
  var delta = event.wheelDelta || -event.detail;
  var section = document.getElementById("A-propos");
  if (delta < 0 && section) {
    section.scrollIntoView({ behavior: "smooth" });
    window.removeEventListener("wheel", scrollToSectionOnce);
  }
}

window.addEventListener("wheel", scrollToSectionOnce);

/*----------------------------------------------------------- VOIR PLUS PRESENTATION ----------------------------------------------------------------------------*/


const linkToSalades = document.querySelector('#salades');
const linkToBurger = document.querySelector('#burgers');

linkToSalades.addEventListener('click', (event) => {
  
  btnSalade.click();
});

linkToBurger.addEventListener('click', (event) => {
  
  btnClassicBurger.click();
});

/*----------------------------------------------------------- MENU-NAVIGATION ----------------------------------------------------------------------------*/


const btnClassicBurger = document.querySelector('.btn-classic-burger');
const ClassicBurger = document.querySelector('.option-classic-burger');

const btnPremiumBurger = document.querySelector('.btn-premium-burger');
const PremiumBurger = document.querySelector('.option-premium-burger');

const btnAllStarBurger = document.querySelector('.btn-allstar-burger');
const AllStarBurger = document.querySelector('.option-allstar-burger');

const btnSalade = document.querySelector('.btn-salade');
const Salade = document.querySelector('.option-salade');

const btnViandes = document.querySelector('.btn-viandes');
const Viandes = document.querySelector('.option-viandes');


btnClassicBurger.addEventListener('click', () => {
  ClassicBurger.classList.remove('hidden');
  PremiumBurger.classList.add('hidden');
  AllStarBurger.classList.add('hidden');
  Salade.classList.add('hidden');
  Viandes.classList.add('hidden');

  btnClassicBurger.style.borderBottom = '2px solid #c89446';
  btnPremiumBurger.style.borderBottom = 'none';
  btnAllStarBurger.style.borderBottom = 'none';
  btnSalade.style.borderBottom = 'none';
  btnViandes.style.borderBottom = 'none';
});


btnPremiumBurger.addEventListener('click', () => {
  ClassicBurger.classList.add('hidden');
  PremiumBurger.classList.remove('hidden');
  AllStarBurger.classList.add('hidden');
  Salade.classList.add('hidden');
  Viandes.classList.add('hidden');

  btnClassicBurger.style.borderBottom = 'none';
  btnPremiumBurger.style.borderBottom = '2px solid #c89446';
  btnAllStarBurger.style.borderBottom = 'none';
  btnSalade.style.borderBottom = 'none';
  btnViandes.style.borderBottom = 'none';
});


btnAllStarBurger.addEventListener('click', () => {
  ClassicBurger.classList.add('hidden');
  PremiumBurger.classList.add('hidden');
  AllStarBurger.classList.remove('hidden');
  Salade.classList.add('hidden');
  Viandes.classList.add('hidden');

  btnClassicBurger.style.borderBottom = 'none';
  btnPremiumBurger.style.borderBottom = 'none';
  btnAllStarBurger.style.borderBottom = '2px solid #c89446';
  btnSalade.style.borderBottom = 'none';
  btnViandes.style.borderBottom = 'none';
});


btnSalade.addEventListener('click', () => {
  ClassicBurger.classList.add('hidden');
  PremiumBurger.classList.add('hidden');
  AllStarBurger.classList.add('hidden');
  Salade.classList.remove('hidden');
  Viandes.classList.add('hidden');

  btnClassicBurger.style.borderBottom = 'none';
  btnPremiumBurger.style.borderBottom = 'none';
  btnAllStarBurger.style.borderBottom = 'none';
  btnSalade.style.borderBottom = '2px solid #c89446';
  btnViandes.style.borderBottom = 'none';
});


btnViandes.addEventListener('click', () => {
  ClassicBurger.classList.add('hidden');
  PremiumBurger.classList.add('hidden');
  AllStarBurger.classList.add('hidden');
  Salade.classList.add('hidden');
  Viandes.classList.remove('hidden');

  btnClassicBurger.style.borderBottom = 'none';
  btnPremiumBurger.style.borderBottom = 'none';
  btnAllStarBurger.style.borderBottom = 'none';
  btnSalade.style.borderBottom = 'none';
  btnViandes.style.borderBottom = '2px solid #c89446';
});


/*---------------------------------------------------------------- BURGERS ---------------------------------------------------------------------------------*/

fetch('docs/json/burgers.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {

      const fiche = document.createElement('div');
      fiche.classList.add('fiche-burger');

      const image = document.createElement('img');
      image.classList.add('img-burger');
      image.src = element.image;;
      fiche.appendChild(image);

      const div = document.createElement('div');
      fiche.appendChild(div);

      const nom = document.createElement('h3');
      nom.textContent = `${element.nom == "" ? `Pas de nom pour l'instant` : element.nom == false ? `Pas de nom pour l'instant` : element.nom}`;;
      div.appendChild(nom);

      const categorie = document.createElement('h4');
      categorie.textContent = element.categorie;
      div.appendChild(categorie);

      const description = document.createElement('p');
      description.textContent =  `${element.description == "" ? `Pas de description pour l'instant` : element.description == false ? `Pas de description pour l'instant` : element.description}`;
      div.appendChild(description);

      if(element.categorie === "Classic Burgers ✩") {
        document.querySelector('.option-classic-burger').appendChild(fiche);
      }

      else if(element.categorie === "Premium Burgers ✩✩") {
        document.querySelector('.option-premium-burger').appendChild(fiche);
      }

      else {
        document.querySelector('.option-allstar-burger').appendChild(fiche);
      }

    });
  }).catch(error => console.error(error));

  fetch('docs/json/salades.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {

      const fiche = document.createElement('div');
      fiche.classList.add('fiche-burger');

      const image = document.createElement('img');
      image.classList.add('img-burger');
      image.src = element.image;;
      fiche.appendChild(image);

      const div = document.createElement('div');
      fiche.appendChild(div);

      const nom = document.createElement('h3');
      nom.textContent = `${element.nom == "" ? `Pas de nom pour l'instant` : element.nom == false ? `Pas de nom pour l'instant` : element.nom}`;;
      div.appendChild(nom);

      const description = document.createElement('p');
      description.textContent =  `${element.description == "" ? `Pas de description pour l'instant` : element.description == false ? `Pas de description pour l'instant` : element.description}`;
      div.appendChild(description);

      document.querySelector('.option-salade').appendChild(fiche);

    });
  }).catch(error => console.error(error));

  fetch('docs/json/viandes&poisson.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {

      const fiche = document.createElement('div');
      fiche.classList.add('fiche-burger');

      const image = document.createElement('img');
      image.classList.add('img-burger');
      image.src = element.image;;
      fiche.appendChild(image);

      const div = document.createElement('div');
      fiche.appendChild(div);

      const nom = document.createElement('h3');
      nom.textContent = `${element.nom == "" ? `Pas de nom pour l'instant` : element.nom == false ? `Pas de nom pour l'instant` : element.nom}`;;
      div.appendChild(nom);

      const description = document.createElement('p');
      description.textContent =  `${element.description == "" ? `Pas de description pour l'instant` : element.description == false ? `Pas de description pour l'instant` : element.description}`;
      div.appendChild(description);

      document.querySelector('.option-viandes').appendChild(fiche);

    });
  }).catch(error => console.error(error));
