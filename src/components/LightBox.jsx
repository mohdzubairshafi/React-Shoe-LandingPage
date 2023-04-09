import close from "../images/icon-close.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function LightBox({ products, slideIndex, nextSlide, previousSlide, setShowLightBox }) {
  return (
    <>
      <article className='bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50 '>
        <div className='  flex items-center justify-center h-screen '>
          <button onClick={() => setShowLightBox(false)}>
            <img src={close} alt='' className='w-6  absolute top-10 right-10 z-40 ' />
          </button>
          {products.map((item, index) => (
            <div
              key={index}
              className={` relative flex align-middle justify-center m-0 p-0 sm:p-9 sm:m-12  ${
                slideIndex === index + 1 ? "relative" : "hidden"
              }`}
            >
              <img src={item.mainImage} alt='' className=' w-full  sm:w-3/4  rounded-2xl' />

              <ul>
                <li>
                  <button
                    onClick={previousSlide}
                    className='bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2'
                  >
                    <FaChevronLeft />
                  </button>
                </li>
                <li>
                  <button
                    onClick={nextSlide}
                    className='bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2'
                  >
                    <FaChevronRight />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
