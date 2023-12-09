import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/Md'
import nasa from '../../assets/nasa.jpg'
import './Carousel.css'

const CarouselComponent = () => {
    return (
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay
        interval={3000}
        stopOnHover
        infiniteLoop
        renderThumbs={() => null}
        renderIndicator={() => null}
        renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? 'absolute' : 'hidden'
                } top-0 bottom-0 left-0 flex justify-center items-center focus:outline-none p-3 opacity-80 hover:opacity-90 z-20`}
                onClick={clickHandler}
              >
                <div className="ml-3 w-10 h-10 border-[1px] flex items-center justify-center cursor-pointer">
                  <MdOutlineArrowBackIos className="w-6 h-6 text-white" />
                </div>
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? 'absolute' : 'hidden'
                } top-0 bottom-0 right-0 flex justify-center items-center focus:outline-none p-3 opacity-80 hover:opacity-90 z-20`}
                onClick={clickHandler}
              >
                <div className="mr-3 w-10 h-10 border-[1px] flex items-center justify-center cursor-pointer">
                  <MdOutlineArrowForwardIos className="w-6 h-6 text-white" />
                </div>
              </div>
            );
          }}
      >
        <div className="mt-4">
          <img src={nasa} className="h-[400px]" alt="Carousel Item" />
          <div className="custom-legend">
            <p className="custom-legend-description">geai francois / 25 juin 2022</p>
            <h3 className="custom-legend-title">son de roche</h3>
          </div>
        </div>
        <div className="mt-4">
          <img src={nasa} className="h-[400px]" alt="Carousel Item" />
          <div className="custom-legend">
            <p className="custom-legend-description">geai francois / 25 juin 2022</p>
            <h3 className="custom-legend-title">son de roche</h3>
          </div>
        </div>
        <div className="mt-4">
          <img src={nasa} className="h-[400px]" alt="Carousel Item" />
          <div className="custom-legend">
            <p className="custom-legend-description">geai francois / 25 juin 2022</p>
            <h3 className="custom-legend-title">son de roche</h3>
          </div>
        </div>
      </Carousel> 
    );
  };
  
  export default CarouselComponent;

