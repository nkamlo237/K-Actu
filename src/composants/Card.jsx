import PropTypes from 'prop-types';
import { FaComments } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaShareNodes } from "react-icons/fa6";


const Card = ({_id, category, cover, title, description, author, createdAt, comments, likes, shares}) => {

function displayNumber(n) {
  if (n < 1000) {
    return n;
  } else if (n < 1000000) {
    let k = Math.floor(n / 1000);
    let remainder = n % 1000;
    if (remainder === 0) {
      return k + "k";
    } else if (remainder >= 100) {
      return k + "." + Math.floor(remainder / 100) + "k";
    } else {
      return k + "k+";
    }
  } else {
    let m = Math.floor(n / 1000000);
    let remainder = n % 1000000;
    if (remainder === 0) {
      return m + "M";
    } else if (remainder >= 100000) {
      return m + "." + Math.floor(remainder / 100000) + "M";
    } else {
      return m + "M+";
    }
  }
}

console.log(displayNumber(200)); // Output: 200
console.log(displayNumber(2000)); // Output: 2k
console.log(displayNumber(2500)); // Output: 2.5k
console.log(displayNumber(2005)); // Output: 2k+
console.log(displayNumber(2050)); // Output: 2k+
console.log(displayNumber(200000)); // Output: 200k
console.log(displayNumber(250000)); // Output: 250k
console.log(displayNumber(2000005)); // Output: 2M+
console.log(displayNumber(200000005)); // Output: 200M+
  
  console.log(_id);
  console.log(cover);

  return (
    <div className="text-left rounded-lg bg-white cursor-pointer shadow-md self-start">
      <img className="w-full rounded-t-lg" 
            src={cover} alt="cover" 
      />
      <div className="flex flex-col justify-center space-y-3 p-4">
        <div className='flex space-x-2 items-center'>
          <button className="text-xs text-white font-bold bg-secondary rounded-sm shadow-sm py-1 px-2">
            {category}
          </button>
        </div>
        <h3 className="text-xl font-roboto font-medium text-primary opacity-90">
          {title}
        </h3>
        <p className='font-roboto text-dark-light mt-3 text-md'>
          {description}
        </p>
        <p className='font-sans text-[12px]'>PAR <span className='font-bold text-black opacity-70'>{author}</span> - <span className='font-semibold text-dark-soft'>{createdAt}</span></p>
        <div className='border-b-[1px] border-dark'></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-primary">
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaComments className="w-4 h-4 " />
              <span>{displayNumber(comments)}</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <AiFillLike className="w-4 h-4" />
              <span>{displayNumber(likes)}</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaShareNodes className="w-4 h-4" />
              <span>{displayNumber(shares)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired
};

export default Card