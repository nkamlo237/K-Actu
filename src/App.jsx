
import { useEffect, useState } from 'react';
import logo from './assets/k-actu.png'
import './App.css';
import $ from 'jquery';
import Actu from './composants/Actu';
window.$ = $;

function App() {

  const [selP, setSel] = useState('')
  const [selV, setVSel] = useState('')
  const [selA, setASel] = useState('')
  const [selM, setMSel] = useState('')

  console.log(selP, selV, selA, selM);

  const handleChoice = ((value) => {
    if (value == 0) setSel(selM);
    if (value == 1) setVSel(selM);
    if (value == 2) setASel(selM);
  })

  useEffect(() => {

    $(function () {

      /*Dropdown Menu*/
      $('.dropdown').on('click', function () {
        $(this).attr('tabindex', 1).triggerHandler("focus");
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideDown(300);
      }).on('focusout', function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
      });

      $('.dropdown .dropdown-menu li').on('click', function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).find('.dropdown-menu').slideUp(300);
        setMSel($(this).attr('value'));
      });

    });

  }, []);


  const sliderRecherche = (() => {
    if ($("#rechercheAvance + i").hasClass("fa-solid fa-square-caret-up")) {
      $("#rechercheAvance + i").removeClass('fa-solid fa-square-caret-up').addClass("fa-solid fa-square-caret-down");
      $("#searchBar").slideUp("fast");
    }
    else {
      $("#rechercheAvance + i").removeClass('fa-solid fa-square-caret-down').addClass("fa-solid fa-square-caret-up");
      $("#searchBar").slideDown("fast");
    }
  });

  // #FA9D4F
  // rgb(250,157,79)

  // #EFB98A
  // rgb(239,185,138)


  return (
    <>
      <div className='bg-gray-50 shadow-lg shadow-gray-600 w-full' style={{ backgroundColor: "#F7F7F7" }}>
        {/* Navigation */}
        <header className="p-2" style={{backgroundColor: "#fff"}}>
          <div className='flex justify-between flex-wrap'>
            <div className="text-gray-900 text-start pe-4 mb-2">
              <a href='#'><img src={logo} alt="Logo du K-People" className='w-56' /></a>
            </div>
            <div className="text-black hover:text-gray-500 text-end px-4 pt-2 cursor-pointer" onClick={sliderRecherche}>
              <span id='rechercheAvance'> Recherche avancée </span><i className="fa-solid fa-square-caret-down"></i>
            </div>
          </div>

          <div id='searchBar' style={{ display: "none" }} className="grid grid-cols-12 px-2 py-1 bg-gray-200 rounded-md lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
            <div className="col-span-5 text-md border border-blue-lighter lg:col-span-5 md:col-span-1 sm:col-span-1 xs:col-span-1 my-1">
              <i className="fa-solid fa-magnifying-glass px-3 py-4 absolute" style={{color: "#015A82"}}></i>
              <input type="search" placeholder="Rechercher des actus" className="py-3 pl-10 pr-3 text-md border-transparent w-full h-full bg-gray-100 lg:rounded-e-none md:rounded-md sm:rounded-md xs:rounded-md" />
            </div>

            <div className="col-span-2 border-t border-b border-r border-blue-lighter text-blue-dark lg:col-span-2 md:col-span-1 sm:col-span-1 xs:col-span-1 my-1">

              <div onClick={() => handleChoice(0)} className="dropdown bg-gray-100 border-transparent px-1 text-gray-900 w-full h-full lg:rounded-none md:rounded-md sm:rounded-md xs:rounded-md">
                <div className="select">
                  <span className='overflow-hidden'>Pays</span>
                  <i className="fa-solid fa-angle-down"></i>
                  <input type="hidden" id="pays" />
                </div>
                <ul className="dropdown-menu">
                  <li value="cmr">Cameroun</li>
                  <li value="us">Etats Unis</li>
                  <li value="cmr">France</li>
                  <li value="us">Canada</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 border-t border-b border-r border-blue-lighter text-blue-dark lg:col-span-2 md:col-span-1 sm:col-span-1 xs:col-span-1 my-1">
              <div onClick={() => handleChoice(1)} className="dropdown bg-gray-100 border-transparent px-1 text-gray-900 w-full h-full lg:rounded-none md:rounded-md sm:rounded-md xs:rounded-md">
                <div className="select">
                  <span>Ville</span>
                  <i className="fa-solid fa-angle-down"></i>
                <input type="hidden" id="ville" />
                </div>
                <ul className="dropdown-menu">
                  <li value="kr">Kribi</li>
                  <li value="do">Douala</li>
                  <li value="ny">New York</li>
                  <li value="pa">Paris</li>
                  <li value="pa">Berlin</li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 border-t border-b border-r border-blue-lighter text-blue-dark lg:col-span-2 md:col-span-1 sm:col-span-1 xs:col-span-1 my-1">
              <div onClick={() => handleChoice(2)} className="dropdown bg-gray-100 border-transparent px-1 text-gray-900 w-full h-full lg:rounded-none md:rounded-md sm:rounded-md xs:rounded-md">
                <div className="select">
                  <span>Catégorie</span>
                  <i className="fa-solid fa-angle-down"></i>
                <input type="hidden" id="activite" />
                </div>
                <ul className="dropdown-menu">
                  <li value="te">Monde</li>
                  <li value="be">Afrique</li>
                  <li value="au">Culture et Tradition</li>
                  <li value="en">Santé</li>
                  <li value="pa">Réligion</li>
                  <li value="pa">Science et Technologie</li>
                  <li value="pa">Innovation</li>
                  <li value="pa">Société</li>
                  <li value="pa">Economie</li>
                  <li value="pa">Découverte</li>
                  <li value="pa">Gros plan</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 justify-items-center border-t border-r border-b border-blue-lighter rounded-r text-blue-dark lg:col-span-1 md:col-span-1 sm:col-span-1 xs:col-span-1 my-1">
              <button type="button" className="btnFiltre text-white w-full h-full font-semibold rounded-s-none rounded-e-md border disabled:opacity-50 disabled:pointer-events-none lg:rounded-s-none md:rounded-s-md sm:rounded-s-md xs:rounded-s-md">
                Filtrer
              </button>
            </div>
          </div>
        </header>

        {/* Card */}
        <div className="w-full">
          <Actu />
        </div>
      </div>
    </>
  )
}

export default App
