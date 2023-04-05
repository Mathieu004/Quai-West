const img = document.querySelector('#bg-image');

window.addEventListener('scroll', () => {
  img.style.transform = `translateY(-${window.scrollY * 1.5}px)`;
});

/*----------------------------------------------------------- MENU-NAVIGATION ----------------------------------------------------------------------------*/


const btnClassicBurger = document.querySelector('.btn-classic-burger');
const ClassicBurger = document.querySelector('.option-classic-burger');

const btnPremiumBurger = document.querySelector('.btn-premium-burger');
const PremiumBurger = document.querySelector('.option-premium-burger');

const btnAllStarBurger = document.querySelector('.btn-allstar-burger');
const AllStarBurger = document.querySelector('.option-allstar-burger');

btnClassicBurger.addEventListener('click', () => {
  ClassicBurger.classList.remove('hidden');
  PremiumBurger.classList.add('hidden');
  AllStarBurger.classList.add('hidden');
  btnClassicBurger.style.borderBottom = '2px solid #c89446';
  btnPremiumBurger.style.borderBottom = 'none';
  btnAllStarBurger.style.borderBottom = 'none';
});

btnPremiumBurger.addEventListener('click', () => {
  PremiumBurger.classList.remove('hidden');
  ClassicBurger.classList.add('hidden');
  AllStarBurger.classList.add('hidden');
  btnClassicBurger.style.borderBottom = 'none';
  btnPremiumBurger.style.borderBottom = '2px solid #c89446';
  btnAllStarBurger.style.borderBottom = 'none';
});

btnAllStarBurger.addEventListener('click', () => {
  AllStarBurger.classList.remove('hidden');
  ClassicBurger.classList.add('hidden');
  PremiumBurger.classList.add('hidden');
  btnClassicBurger.style.borderBottom = 'none';
  btnPremiumBurger.style.borderBottom = 'none';
  btnAllStarBurger.style.borderBottom = '2px solid #c89446';
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

