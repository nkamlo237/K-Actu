import { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import cover from '../assets/cover.jpg'
import profil from '../assets/icon_profil.png'

function People(props) {
  const [slide, setSlide] = useState(true)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setSlide(true);
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setSlide(false);
    }
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <>
      <div className="max-w-sm border border-gray-200 rounded-lg shadow bg-white place-self-stretch">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <img className="rounded-t-lg h-36" src={cover} alt="" />
                <div className="">
                  <img className="w-1/3 inline-block -mt-12 mb-2 border-2 border-white rounded-full" src={profil} alt="" />
                  <h5 className="px-2 text-lg capitalize font-bold text-gray-800 overflow-x-hidden"> {props.nom} </h5>
                  <h5 className="mb-1 tracking-tight text-gray-800 capitalize overflow-x-clip">{props.pays}, {props.ville}</h5>
                  <a href="#" className="btnk my-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium">
                    <i className="fa-solid fa-plus"></i> Inviter
                  </a>
                  <div className="grid grid-cols-3 gap-3 my-2">
                    <div className='text-center'>Klaps <br /><span className='font-bold'>{props.article}</span></div>
                    <div className='text-center'>Relations <br /><span className='font-bold'>{props.abonne}</span></div>
                    <div className='text-center'>Forum <br /><span className='font-bold'>{props.rating}</span></div>
                  </div>
                </div>
              </div>
              <div className="embla__slide">
                <div className="font-semibold w-full text-center p-3"> {props.activite} </div><hr  style={{borderTop: "1px #015A82 solid"}}/>
                <div className="text-right">
                  <h1 className="text-center text-sm text-gray-800 m-3">Presentation de <strong>{props.nom}</strong></h1>
                  <p className="max-h-44 min-h-fit text-ellipsis overflow-hidden text-justify text-sm px-3 mb-5">{props.desc}
                  </p>
                  <a href="#" className="btnk text-right me-5 font-medium my-2 inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm">
                    <i className="fa-solid fa-plus"></i> Details
                  </a>
                </div>
              </div>
            </div>
            <div className='flex justify-center my-3 inset-x-0 bottom-0'>
              <div className="embla__prev bg-transparent cursor-pointer mx-1" id='left' onClick={scrollPrev}>
                {(slide) ? (
                  <i className="block w-2 h-2 rounded-full bg"></i>
                ) : (
                  <i className="block w-2 h-2 rounded-full"></i>
                )}
              </div>
              <div className="embla__next bg-transparent cursor-pointer mx-1" id='right' onClick={scrollNext}>
                {(slide) ? (
                  <i className="block w-2 h-2 rounded-full"></i>
                ) : (
                  <i className="block w-2 h-2 rounded-full bg"></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default People
