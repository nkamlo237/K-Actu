// import { useEffect } from 'react'
import People from './composants/People';
import logo from './assets/logo.jpg'
import './App.css'
import $ from 'jquery';
window.$ = $;

function App() {

  const sliderRecherche = (() => {
    if ($("#rechercheAvance + i").hasClass("fa-solid fa-angle-up")) {
      $("#rechercheAvance + i").removeClass('fa-solid fa-angle-up').addClass("fa-solid fa-angle-down");
      $("#searchBar").slideUp("slow");
    }
    else {
      $("#rechercheAvance + i").removeClass('fa-solid fa-angle-down').addClass("fa-solid fa-angle-up");
      $("#searchBar").slideDown("slow");
    }
  });

  // #FA9D4F
  // rgb(250,157,79)

  // #EFB98A
  // rgb(239,185,138)

  let data = [
    {
      nom: 'Big Blosom Innovation',
      pays: 'Cameroun',
      ville: 'Kribi',
      article: 34,
      abonne: 455,
      rating: 9.3,
      activite: 'Urgence - centres medico-sociaux - hygiène - santé',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam ",
    },
    {
      nom: 'Innovation Big Blosom',
      pays: 'Cameroun',
      ville: 'Kribi',
      article: 34,
      abonne: 455,
      rating: 9.3,
      activite: 'Informatique',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam ",
    },
    {
      nom: 'Big Blosom Innovation',
      pays: 'Cameroun',
      ville: 'Kribi',
      article: 34,
      abonne: 455,
      rating: 9.3,
      activite: 'Informatique',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam ",
    },
    {
      nom: 'Innovation Big Blosom',
      pays: 'Cameroun',
      ville: 'Kribi',
      article: 34,
      abonne: 455,
      rating: 9.3,
      activite: 'Informatique',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam ",
    },
    {
      nom: 'Big Blosom Innovation',
      pays: 'Cameroun',
      ville: 'Kribi',
      article: 34,
      abonne: 455,
      rating: 9.3,
      activite: 'Informatique',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam ",
    },
    {
      nom: 'Innovation Big Blosom',
      pays: 'Cameroun',
      ville: 'Kribi',
      article: 34,
      abonne: 455,
      rating: 9.3,
      activite: 'Informatique',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam ",
    },
    {
      nom: 'Big Blosom Innovation',
      pays: 'Cameroun',
      ville: 'Kribi',
      article: 34,
      abonne: 455,
      rating: 9.3,
      activite: 'Informatique',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam ",
    },
    {
      nom: 'Innovation Big Blosom',
      pays: 'Cameroun',
      ville: 'Kribi',
      article: 34,
      abonne: 455,
      rating: 9.3,
      activite: 'Informatique',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam ",
    },
    {
      nom: 'Big Blosom Innovation',
      pays: 'Cameroun',
      ville: 'Kribi',
      article: 34,
      abonne: 455,
      rating: 9.3,
      activite: 'Informatique',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam ",
    },
    {
      nom: 'Innovation Big Blosom',
      pays: 'Cameroun',
      ville: 'Kribi',
      article: 34,
      abonne: 455,
      rating: 9.3,
      activite: 'Informatique',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam ",
    },
    {
      nom: 'Big Blosom Innovation',
      pays: 'Cameroun',
      ville: 'Kribi',
      article: 34,
      abonne: 455,
      rating: 9.3,
      activite: 'Informatique',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam ",
    },
    {
      nom: 'Innovation Big Blosom',
      pays: 'Cameroun',
      ville: 'Kribi',
      article: 34,
      abonne: 455,
      rating: 9.3,
      activite: 'Informatique',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam reiciendis error quisquam vero natus rem officia iure mollitia laboriosam nobis laudantium, quaerat odio sint nihil earum tenetur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet provident aliquam ",
    },
  ]

  return (
    <>
      <div className='bg-gray-50 shadow-lg shadow-gray-600 w-full'>
        {/* Navigation */}
        <nav className="p-2 bg-white">
          <div className='flex justify-between py-2 flex-wrap'>
            <div className="text-gray-900 text-start pe-4 mb-5">
              <a href='#'><img src={logo} alt="Logo du K-Guide" className='w-56' /></a>
            </div>
            <div className="text-black hover:text-gray-500 text-end px-4 cursor-pointer" onClick={sliderRecherche}>
              <span id='rechercheAvance'> Recherche avancée </span><i className="fa-solid fa-angle-up"></i>
            </div>
          </div>

          <div id='searchBar' className="grid grid-cols-12 p-4 bg-gray-200 rounded-md lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
            <div className="col-span-5 text-md border border-blue-lighter lg:col-span-5 md:col-span-1 sm:col-span-1 xs:col-span-1 my-1">
              <i className="fa-solid fa-magnifying-glass px-3 py-4 absolute"></i>
              <input type="search" placeholder="Rechercher des entreprises" className="py-3 pl-10 pr-3 text-md border-transparent w-full h-full bg-gray-100 lg:rounded-e-none md:rounded-md sm:rounded-md xs:rounded-md" />
            </div>
            <div className="col-span-2 border-t border-b border-r border-blue-lighter text-blue-dark lg:col-span-2 md:col-span-1 sm:col-span-1 xs:col-span-1 my-1">
              <select className="bg-gray-100 border-transparent px-1 text-gray-900 w-full h-full lg:rounded-none md:rounded-md sm:rounded-md xs:rounded-md md:py-2 sm:py-2 xs:py-2">
                <option selected disabled>Selectionner un pays</option>
                <option value="CMR">Cameroun</option>
                <option value="US">Etats Unis</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Allemagne</option>
              </select>
            </div>
            <div className="col-span-2 border-t border-b border-r border-blue-lighter text-blue-dark lg:col-span-2 md:col-span-1 sm:col-span-1 xs:col-span-1 my-1">
              <select className="bg-gray-100 border-transparent px-1 text-gray-900 w-full h-full lg:rounded-none md:rounded-md sm:rounded-md xs:rounded-md md:py-2 sm:py-2 xs:py-2">
                <option selected disabled>Selectionner une ville</option>
                <option value="KR">Kribi</option>
                <option value="DO">Douala</option>
                <option value="NY">New York</option>
                <option value="PA">Paris</option>
                <option value="BE">Berlin</option>
              </select>
            </div>
            <div className="col-span-2 border-t border-b border-r border-blue-lighter text-blue-dark lg:col-span-2 md:col-span-1 sm:col-span-1 xs:col-span-1 my-1">
              <select className="bg-gray-100 border-transparent px-1 text-gray-900 w-full h-full lg:rounded-none md:rounded-md sm:rounded-md xs:rounded-md md:py-2 sm:py-2 xs:py-2">
                <option selected disabled>Secteur d'activité</option>
                <option value="TE">Tech</option>
                <option value="BE">Beauté</option>
                <option value="AU">Automobile</option>
                <option value="EN">Enseignement</option>
                <option value="AL">Allemagne</option>
              </select>
            </div>
            <div className="justify-items-center border-t border-r border-b border-blue-lighter rounded-r text-blue-dark lg:col-span-1 md:col-span-1 sm:col-span-1 xs:col-span-1 my-1">
              <button type="button" className="btnFiltre text-white w-full h-full font-semibold rounded-s-none rounded-e-md border disabled:opacity-50 disabled:pointer-events-none lg:rounded-s-none md:rounded-s-md sm:rounded-s-md xs:rounded-s-md">
                Filtrer
              </button>
            </div>
          </div>
        </nav>

        {/* Card */}
        <div className="grid grid-cols-4 gap-2 place-items-stretch justify-items-stretch px-1 py-2 bg-slate-100 lg:grid-cols-4 lg:gap-2 md:grid-cols-3 md:gap-2 sm:grid-cols-2 xs:grid-cols-1 xs:justify-items-center">
          {data.map((entreprise, index) => {
            return (
              <People key={index} nom={entreprise.nom} pays={entreprise.pays} ville={entreprise.ville} article={entreprise.article} abonne={entreprise.abonne} rating={entreprise.rating} activite={entreprise.activite} desc={entreprise.desc} />
            );
          })}
        </div>
      </div>
    </>
  )
}

export default App
