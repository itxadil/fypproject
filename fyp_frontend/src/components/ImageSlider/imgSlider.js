import React from "react";
import './dropit.css'
import photo1 from '../../images/img1.jpeg'
import photo2 from '../../images/img2.jpeg'
import photo3 from '../../images/img3.jpeg'
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const slideImages = [
  {
    src: `${photo1}`,
    caption: 'Slide 1'
  },
  {
    src: `${photo2}`,
    caption: 'Slide 2'
  },
  {
    src: `${photo3}`,
    caption: 'Slide 3'
  },
];
const delay = 2500;

function Slideshow(props) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` , marginTop:'50px'}}
      >
        {slideImages.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
          ><img width={props.width} height={props.height} src={backgroundColor.src} /> </div>
        ))}
      </div>

      {/* <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}

    </div>
  );
}

export default Slideshow