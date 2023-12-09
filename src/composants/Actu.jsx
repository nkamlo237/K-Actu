//import Dropdown from "./Dropdown";
//import { FiSearch } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
//import Card from "./Card";
import CarouselComponent from "./caroussel/Carousel";
import Card from "./Card";
import hatice from '../assets/hatice.jpg';
import post1 from '../assets/post1.jpg';
//import Search from "./Search";

const Actu = () => {

  const posts = [
    {
      _id: 1,
      category: "RESEAU SOCIAL",
      cover: hatice,
      title: "<<KRIBI: UNE VILLE INTELLIGENT>>, désormais une réalité avec Klapeers.",
      description: "C'est par la voix du maire de la ville, ce jeudi 05 mai, que le projet ville intelligente à la salle des actes de la mallee du 2è arrondissement de kribi.",
      author: "ESSOMBA MADELEINE",
      createdAt: "06 MAI 2022",
      comments: 100,
      likes: 2000,
      shares: 50
    },
    {
      _id: 1,
      category: "RESEAU SOCIAL",
      cover: post1,
      title: "<<LES CHUTES DE LA LOBE>>, entre Mystique, détente et commerce.",
      description: "AU cœur du potentiel naturel, de la région du Sud Cameroun, situé à 7km du centre-ville de kribi ce lieu doitson nom au fleuve « LOBE dont les chutes ont laparticularité rare au monde, de se déverser directement",
      author: "MARIE ANTOINE",
      createdAt: "08 JUIN 2022",
      comments: 40,
      likes: 50,
      shares: 20
    },
    {
      _id: 2,
      category: "TECHNOLOGIE",
      cover: hatice,
      title: 'LE MAIRE GUY EMMANUEL SABIKANDA ANNONCE LE LANCEMENT OFFFICIEL DU  PROJET "KRIBI VILLE INTELLIGENTE"',
      description: "Au déla de la médaille d'Honneur du Travail décénée par le Préfet de l'Océan au nom du Président de la République.",
      author: "JACQUELINE MARIE",
      createdAt: "26 JUIN 2022",
      comments: 2,
      likes: 8,
      shares: 3
    },
    {
      _id: 3,
      category: "SANTE",
      cover: post1,
      title: "Conseils pour une vie saine et équilibrée",
      description: "Découvrez des conseils pratiques pour maintenir une bonne santé physique et mentale, et adopter un mode de vie équilibré.",
      author: "PIERRE MOUSSINGA",
      createdAt: "06 JUILLET 2022",
      comments: 4,
      likes: 10,
      shares: 1
    },
    {
        _id: 1,
        category: "RESEAU SOCIAL",
        cover: post1,
        title: "<<LES CHUTES DE LA LOBE>>, entre Mystique, détente et commerce.",
        description: "AU cœur du potentiel naturel, de la région du Sud Cameroun, situé à 7km du centre-ville de kribi ce lieu doitson nom au fleuve « LOBE dont les chutes ont laparticularité rare au monde, de se déverser directement",
        author: "MARIE ANTOINE",
        createdAt: "08 JUIN 2022",
        comments: 40,
        likes: 50,
        shares: 20
      },
      {
        _id: 2,
        category: "TECHNOLOGIE",
        cover: hatice,
        title: 'LE MAIRE GUY EMMANUEL SABIKANDA ANNONCE LE LANCEMENT OFFFICIEL DU  PROJET "KRIBI VILLE INTELLIGENTE"',
        description: "Au déla de la médaille d'Honneur du Travail décénée par le Préfet de l'Océan au nom du Président de la République.",
        author: "JACQUELINE MARIE",
        createdAt: "26 JUIN 2022",
        comments: 2,
        likes: 8,
        shares: 3
      }
  ]

  return (
    <div className="w-full bg-blue-100 bg-opacity-[30%]">
        <div className="mx-3 flex flex-col">
        <div className="flex flex-col px-3 lg:flex-row gap-y-10 lg:gap-y-0 space-x-6 bg-white shadow-[inset_-12px_-8px_40px_#46464620]">
            <div className="w-full lg:w-2/3 h-[400px]">
                <CarouselComponent />
            </div>
            <div className="w-[90%] lg:w-1/3 mb-4 pt-10 flex flex-col h-[400px] items-center justify-center">
                <div className="w-full h-1/3 gap-y-0">
                    <div className="flex items-center justify-center lg:justify-between space-x-4">
                      <div className="w-full lg:w-1/2 flex flex-col gap-y-2">
                        <div className="h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90 rounded-md flex items-center justify-center">
                          <h3 className="text-white px-3 text-sm">Monde</h3>
                        </div>
                        <div className=" h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90  rounded-md flex flex-col items-center justify-center">
                          <h3 className="text-white font-medium text-sm">Culture & Tradition</h3>
                        </div>
                        <div className="flex md:hidden lg:flex xl:hidden h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90  rounded-md items-center justify-center">
                          <h3 className="text-white font-medium text-sm">Culture</h3>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 flex flex-col gap-y-2">
                        <div className="h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90  rounded-md flex items-center justify-center">
                          <h3 className="text-white text-sm">Afrique</h3>
                        </div>
                        <div className="h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90  rounded-md flex items-center justify-center">
                          <h3 className="text-white text-sm">Sport</h3>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="w-full h-1/3">
                    <div className="flex items-center justify-center lg:justify-between gap-x-4">
                      <div className="w-full lg:w-1/2 flex flex-col gap-y-2">
                        <div className="h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90  rounded-md flex items-center justify-center">
                          <h3 className="text-white text-sm">Santé</h3>
                        </div>
                        <div className="hidden md:flex lg:hidden xl:flex h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90  rounded-md flex items-center justify-center">
                          <h3 className="text-white text-sm">Science & Technologie</h3>
                        </div>
                        <div className="flex md:hidden lg:flex xl:hidden h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90  rounded-md items-center justify-center">
                          <h3 className="text-white text-sm">Science</h3>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 flex flex-col gap-y-2">
                        <div className="h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90  rounded-md flex items-center justify-center">
                          <h3 className="text-white text-sm">Réligion</h3>
                        </div>
                        <div className="h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90  rounded-md flex items-center justify-center">
                          <h3 className="text-white text-sm">Innovation</h3>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="w-full h-1/3">
                    <div className="flex items-center justify-center lg:justify-between space-x-4">
                      <div className="w-full lg:w-1/2 flex flex-col gap-y-2">
                        <div className="h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90  rounded-md flex items-center justify-center">
                          <h3 className="text-white text-sm">Société</h3>
                        </div>
                        <div className="h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90  rounded-md flex items-center justify-center">
                          <h3 className="text-white text-sm">Découvertes</h3>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 flex flex-col gap-y-2">
                        <div className="h-1/2 py-3 hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90  rounded-md flex items-center justify-center">
                          <h3 className="text-white text-sm">Economie</h3>
                        </div>
                        <div className="h-1/2 py-3 gap-x-2 text-white font-medium hover:scale-105 cursor-pointer transition-all duration-300 bg-secondary bg-opacity-90 rounded-md flex items-center justify-center">
                            <span className="text-sm">Voir plus</span>
                            <FaArrowRight className='w-3 h-3' />
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-wrap items-stretch md:gap-x-7 px-2 gap-y-5 pb-4 mt-8">
          {posts.length > 0 && posts.map(post => (
            <div 
              key={post.id}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              style={{flex: '1 0 auto'}}
            >
              <Card {...post}  /> 
            </div>
                  
          ))} 
        </div>
      </div>
    </div>
  )
}

export default Actu;
