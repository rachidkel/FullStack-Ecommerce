import React from "react";
import Slider from "react-slick";


const HomeBanner = ()=>{
   
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return(
        <div className="homeBannerSection">
                <Slider {...settings}>
                        <div className="item">
                          <img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" alt="" className="w-100"/>
                        </div>
                         <div className="item">
                          <img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"  alt="" className="w-100"/>
                        </div>
                         <div className="item">
                          <img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" alt="" className="w-100"/>
                        </div>
                         <div className="item">
                          <img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" alt="" className="w-100"/>
                        </div>
                         <div className="item">
                          <img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" alt="" className="w-100"/>
                        </div>
                </Slider>
              
        </div>

        
    ) 

}

export default HomeBanner;