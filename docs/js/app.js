const img = document.querySelector('#bg-image');

window.addEventListener('scroll', () => {
  img.style.transform = `translateY(-${window.scrollY * 1.5}px)`;
});


/*---------------------------------------------------------------- PLATS ---------------------------------------------------------------------------------*/

fetch('docs/json/burger.json')
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

      document.querySelector('.menu').appendChild(fiche);
    });
  })
  .catch(error => console.error(error));

