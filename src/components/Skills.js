import meter1 from "../assets/img/sql.png";
import meter2 from "../assets/img/power.png";
import meter3 from "../assets/img/java.png";
import meter4 from "../assets/img/python.png";
import meter5 from "../assets/img/msexel.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn ">
                        <h2>Skills</h2>
                        <p className="skill-text">Skilled Frontend Developer and UI Designer with expertise<br></br>  in HTML, CSS, JavaScript, and modern frameworks.</p>
                        <Carousel autoPlay="true" autoPlaySpeed="3000" responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} style={{width:"120px", height:"120px"}} alt="Image" />
                                <h5>POWER BI</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5></h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>PYTHON</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>MS EXEL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
