import  Button  from '@mui/material/Button';
import {IoIosMenu} from "react-icons/io";
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {FaAngleRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from 'react-icons/io';

import Slider from 'react-slick';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import React from "react";


import {TfiFullscreen} from "react-icons/tfi";
import {IoMdHeartEmpty} from "react-icons/io"






const Navigationns=()=>{

  const [isopenSidebarVal, setisopenSidebarVal]= useState(false);



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true
  };


   var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true
  };



    return(
            <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-2 navPart1'>
                           <div className='catWrapper'>
                               <Button className='allCatTab align-items-center'onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>
                            <span className='icon1 mr-2'><IoIosMenu/></span>
                              <span className='text'>ALL CATEGORIES</span> 
                            <span className='icon2 ml-2'><FaAngleDown/></span>
                           </Button>   

                            <div className={`sidebarNav ${isopenSidebarVal===true ? 'open' : ''}`}>
                               <ul>
                                <li><Link to="/"><Button>Fashion  <FaAngleRight className='ml-auto'/> </Button></Link>
                                    <div className='submenu'>
                                       <Link to="/"><Button>MEN</Button></Link>
                                      <Link to="/"><Button>WOMEN</Button></Link>
                                    </div>
                                </li>
                                <li><Link to="/"><Button>BAGS <FaAngleRight className='ml-auto'/> </Button></Link>
                                    <div className='submenu'>
                                    <Link to="/"><Button>MEN BAGS</Button></Link>
                                    <Link to="/"><Button>WOMEN BAGS</Button></Link>
                                 </div>
                                </li>
                                
                                <li><Link to="/"><Button>Electronic <FaAngleRight className='ml-auto'/> </Button></Link>
                                  <div className='submenu'>
                                     <Link to="/"><Button>laptops</Button></Link>
                                     <Link to="/"><Button>Smart Watch</Button></Link>
                                     <Link to="/"><Button>Cameras</Button></Link>
                                  </div>
                                </li>
                                <li><Link to="/"><Button>FOOTWEAR <FaAngleRight className='ml-auto'/> </Button></Link>
                                   <div className='submenu'>
                                    <Link to="/"><Button>MEN FOOTWEAR</Button></Link>
                                    <Link to="/"><Button>WOMEN FOOTWEAR</Button></Link>
                                 </div>
                                </li>
                                <li className='list-inline-item'><Link to="/"><Button>Beauty</Button></Link></li>
                                
                               </ul>
                            </div>

                           </div>   
                        </div>    
                        
                       <div className='col-sm-10 navPart2 d-flex align-items-center'>
                          <ul className='list list-inline ml-auto'>
                             
                             <li className='list-inline-item'><Link to="/"><Button>Fashion</Button></Link>
                                 <div className='submenu shadow'>
                                    <Link to="/"><Button>MEN</Button></Link>
                                    <Link to="/"><Button>WOMEN</Button></Link>
                                 </div>
                             
                             </li>
                             <li className='list-inline-item'><Link to="/"><Button>BAGS</Button></Link>
                                 <div className='submenu shadow'>
                                    <Link to="/"><Button>MEN BAGS</Button></Link>
                                    <Link to="/"><Button>WOMEN BAGS</Button></Link>
                                 </div>
                             </li>
                             <li className='list-inline-item'><Link to="/"><Button>Electronic</Button></Link>
                                 <div className='submenu shadow'>
                                    <Link to="/"><Button>laptops</Button></Link>
                                    <Link to="/"><Button>Smart Watch</Button></Link>
                                    <Link to="/"><Button>Cameras</Button></Link>
                                 </div>
                             </li>
                             <li className='list-inline-item'><Link to="/"><Button>FOOTWEAR</Button></Link>
                                  <div className='submenu shadow'>
                                    <Link to="/"><Button>MEN FOOTWEAR</Button></Link>
                                    <Link to="/"><Button>WOMEN FOOTWEAR</Button></Link>
                                 </div>
                             </li>
                              <li className='list-inline-item'><Link to="/"><Button>Beauty</Button></Link></li>
                               <li className='list-inline-item'><Link to="/"><Button>Contact Us</Button></Link></li>
                              
                            
                          </ul>
                       </div>

                    </div>    
                    
                </div> 
                
            <div className="homeBannerSection">
                <Slider {...settings}>
                        <div className="item">
                          <img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" alt="" className="w-100"/>
                        </div>
                         <div className="item">
                          <img src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg"  alt="" className="w-100"/>
                        </div>
                         <div className="item">
                          <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" alt="" className="w-100"/>
                        </div>
                         <div className="item">
                          <img src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" alt="" className="w-100"/>
                        </div>
                         <div className="item">
                          <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" alt="" className="w-100"/>
                        </div>
                </Slider>
              
            </div>


            <section className="homeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className='banner'>
                           <img src="https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg" className="cursor"/>
                        </div>
                    </div>

                    <div className='col-md-9 productRow'>
                      <div className='d-flex align-iyems-center'>
                         <div className='info w-75'>
                           <h3 className='mb-0 hd'>Popular Products</h3>
                           <p className='text-light text-sml mb-0'>Do not miss the current offers until the end of June.</p>
                         </div>

                         <Button className='viewAllBtn ml-auto'>View all <IoIosArrowRoundForward/> </Button>
                        </div>


                         <div className='product_row w-100 mt-4'>
                            <Swiper
                             slidesPerView={4}
                             spaceBetween={0}
                             pagination={{
                             clickable: true,
                             }}
                             modules={[Navigation]}
                             className="mySwiper"
                             >

                            <SwiperSlide>
                               <div className='item prouctItem'>
                                  <div className='imgWrapper'>
                                   <img src='https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg'className='w-100'/>
                                  
                                     <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                  </div>
                                
                                 <div className='infoo'>
                                   <h4>haja labsaaa</h4>
                                   <span className='text-success d-block'>In Stock </span>
                               
                                  <div className='d-flex'>
                                     <span className='oldprice'>4000 DA</span>
                                     <span className='newprice text-danger ml-3'> 3500 DA</span>
                                   </div>
                                 </div>
                                </div>
                              </SwiperSlide> 

                              <SwiperSlide> 
                                 <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734529876638_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-1-202201130044.jpg'className='w-100'/>
                                           <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                   
                                      </div>

                                     <div className='infoo'>
                                   <h4>haja labsaaa</h4>
                                   <span className='text-success d-block'>In Stock </span>
                               
                                  <div className='d-flex'>
                                     <span className='oldprice'>4000 DA</span>
                                     <span className='newprice text-danger ml-3'> 3500 DA</span>
                                   </div>
                                 </div>                                  
            
                                       
                                 </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734529918447_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp'className='w-100'/>
                                          
                                          <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                     
                                      </div>

                                       <div className='infoo'>
                                   <h4>haja labsaaa</h4>
                                   <span className='text-success d-block'>In Stock </span>
                               
                                  <div className='d-flex'>
                                     <span className='oldprice'>4000 DA</span>
                                     <span className='newprice text-danger ml-3'> 3500 DA</span>
                                   </div>
                                 </div>

                                 </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734527033962_ksc-khatushyam-collection-black-pu-for-women-handheld-bag-product-images-rvkg3apiuk-1-202405282358.jpg'className='w-100'/>
                                          <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                     
                                     
                                      </div>

                                     <div className='infoo'>
                                   <h4>haja labsaaa</h4>
                                   <span className='text-success d-block'>In Stock </span>
                               
                                  <div className='d-flex'>
                                     <span className='oldprice'>4000 DA</span>
                                     <span className='newprice text-danger ml-3'> 3500 DA</span>
                                   </div>
                                 </div>

                                      
                                    
                                 </div>
                                 </SwiperSlide>

                              <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734526702390_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-1-202304131033.webp'className='w-100'/>
                                           <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                      
                                      </div>

                                      <div className='infoo'>
                                        <h4>haja labsaaa</h4>
                                          <span className='text-success d-block'>In Stock </span>
                               
                                        <div className='d-flex'>
                                          <span className='oldprice'>4000 DA</span>
                                          <span className='newprice text-danger ml-3'> 3500 DA</span>
                                       </div>
                                     </div>
                                 </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg'className='w-100'/>
                                            <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                      
                                      </div>

                                       <div className='infoo'>
                                   <h4>haja labsaaa</h4>
                                   <span className='text-success d-block'>In Stock </span>
                               
                                  <div className='d-flex'>
                                     <span className='oldprice'>4000 DA</span>
                                     <span className='newprice text-danger ml-3'> 3500 DA</span>
                                   </div>
                                 </div>

                                 </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734527242808_fabbmate-casual-sports-shoes-white-sneakers-for-women-girls-white-shoes-product-images-rvouh9agls-1-202406162001.webp'className='w-100'/>
                                          <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                      
                                      </div>

                                       <div className='infoo'>
                                             <h4>haja labsaaa</h4>
                                            <span className='text-success d-block'>In Stock </span>
                               
                                          <div className='d-flex'>
                                            <span className='oldprice'>4000 DA</span>
                                            <span className='newprice text-danger ml-3'> 3500 DA</span>
                                          </div>
                                      </div>
                                 </div>
                                 </SwiperSlide>

                                <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734691763157_dd0559-010-brand-print-backpack-model3-469146023_black-3-202206030903.webp'className='w-100'/>
                                          <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                     
                                      </div>

                                       <div className='infoo'>
                                   <h4>haja labsaaa</h4>
                                   <span className='text-success d-block'>In Stock </span>
                               
                                  <div className='d-flex'>
                                     <span className='oldprice'>4000 DA</span>
                                     <span className='newprice text-danger ml-3'> 3500 DA</span>
                                   </div>
                                 </div>

                                 </div>
                                 </SwiperSlide>

                                  <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg'className='w-100'/>
                                          <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                      
                                      
                                      </div>

                                      <div className='infoo'>
                                         <h4>haja labsaaa</h4>
                                        <span className='text-success d-block'>In Stock </span>
                               
                                       <div className='d-flex'>
                                         <span className='oldprice'>4000 DA</span>
                                         <span className='newprice text-danger ml-3'> 3500 DA</span>
                                       </div>
                                     </div>
                                 </div>
                                 </SwiperSlide>
                                 
                            </Swiper>
                         </div>
                     </div>
                </div>
            </div><br></br><br/>

              

              <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className='banner'>
                           <img src="https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg" className="cursor"/>
                        </div>
                    </div>

                    <div className='col-md-9 productRow'>
                      <div className='d-flex align-iyems-center'>
                         <div className='info w-75'>
                           <h3 className='mb-0 hd'>NEW Products</h3>
                           <p className='text-light text-sml mb-0'>Do not miss the current offers until the end of June.</p>
                         </div>

                         <Button className='viewAllBtn ml-auto'>View all <IoIosArrowRoundForward/> </Button>
                        </div>


                         <div className='product_row w-100 mt-4'>
                            <Swiper
                             slidesPerView={4}
                             spaceBetween={0}
                             pagination={{
                             clickable: true,
                             }}
                             modules={[Navigation]}
                             className="mySwiper"
                             >

                            <SwiperSlide>
                               <div className='item prouctItem'>
                                  <div className='imgWrapper'>
                                   <img src='https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg'className='w-100'/>
                                  
                                     <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                  </div>
                                
                                 <div className='infoo'>
                                   <h4>haja labsaaa</h4>
                                   <span className='text-success d-block'>In Stock </span>
                               
                                  <div className='d-flex'>
                                     <span className='oldprice'>4000 DA</span>
                                     <span className='newprice text-danger ml-3'> 3500 DA</span>
                                   </div>
                                 </div>
                                </div>
                              </SwiperSlide> 

                              <SwiperSlide> 
                                 <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734529876638_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-1-202201130044.jpg'className='w-100'/>
                                           <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                   
                                      </div>

                                     <div className='infoo'>
                                   <h4>haja labsaaa</h4>
                                   <span className='text-success d-block'>In Stock </span>
                               
                                  <div className='d-flex'>
                                     <span className='oldprice'>4000 DA</span>
                                     <span className='newprice text-danger ml-3'> 3500 DA</span>
                                   </div>
                                 </div>                                  
            
                                       
                                 </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734529918447_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp'className='w-100'/>
                                          
                                          <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                     
                                      </div>

                                       <div className='infoo'>
                                   <h4>haja labsaaa</h4>
                                   <span className='text-success d-block'>In Stock </span>
                               
                                  <div className='d-flex'>
                                     <span className='oldprice'>4000 DA</span>
                                     <span className='newprice text-danger ml-3'> 3500 DA</span>
                                   </div>
                                 </div>

                                 </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734527033962_ksc-khatushyam-collection-black-pu-for-women-handheld-bag-product-images-rvkg3apiuk-1-202405282358.jpg'className='w-100'/>
                                          <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                     
                                     
                                      </div>

                                     <div className='infoo'>
                                   <h4>haja labsaaa</h4>
                                   <span className='text-success d-block'>In Stock </span>
                               
                                  <div className='d-flex'>
                                     <span className='oldprice'>4000 DA</span>
                                     <span className='newprice text-danger ml-3'> 3500 DA</span>
                                   </div>
                                 </div>

                                      
                                    
                                 </div>
                                 </SwiperSlide>

                              <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734526702390_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-1-202304131033.webp'className='w-100'/>
                                           <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                      
                                      </div>

                                      <div className='infoo'>
                                        <h4>haja labsaaa</h4>
                                          <span className='text-success d-block'>In Stock </span>
                               
                                        <div className='d-flex'>
                                          <span className='oldprice'>4000 DA</span>
                                          <span className='newprice text-danger ml-3'> 3500 DA</span>
                                       </div>
                                     </div>
                                 </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg'className='w-100'/>
                                            <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                      
                                      </div>

                                       <div className='infoo'>
                                   <h4>haja labsaaa</h4>
                                   <span className='text-success d-block'>In Stock </span>
                               
                                  <div className='d-flex'>
                                     <span className='oldprice'>4000 DA</span>
                                     <span className='newprice text-danger ml-3'> 3500 DA</span>
                                   </div>
                                 </div>

                                 </div>
                              </SwiperSlide>

                              <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734527242808_fabbmate-casual-sports-shoes-white-sneakers-for-women-girls-white-shoes-product-images-rvouh9agls-1-202406162001.webp'className='w-100'/>
                                          <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                      
                                      </div>

                                       <div className='infoo'>
                                             <h4>haja labsaaa</h4>
                                            <span className='text-success d-block'>In Stock </span>
                               
                                          <div className='d-flex'>
                                            <span className='oldprice'>4000 DA</span>
                                            <span className='newprice text-danger ml-3'> 3500 DA</span>
                                          </div>
                                      </div>
                                 </div>
                                 </SwiperSlide>

                                <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734691763157_dd0559-010-brand-print-backpack-model3-469146023_black-3-202206030903.webp'className='w-100'/>
                                          <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                     
                                      </div>

                                       <div className='infoo'>
                                   <h4>haja labsaaa</h4>
                                   <span className='text-success d-block'>In Stock </span>
                               
                                  <div className='d-flex'>
                                     <span className='oldprice'>4000 DA</span>
                                     <span className='newprice text-danger ml-3'> 3500 DA</span>
                                   </div>
                                 </div>

                                 </div>
                                 </SwiperSlide>

                                  <SwiperSlide>
                                  <div className='item prouctItem'>
                                      <div className='imgWrapper'>
                                       <img src='https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg'className='w-100'/>
                                          <div className='action'>
                                      <Button><TfiFullscreen/></Button>
                                      <Button><IoMdHeartEmpty/></Button>
                                     </div>
                                      
                                      
                                      </div>

                                      <div className='infoo'>
                                         <h4>haja labsaaa</h4>
                                        <span className='text-success d-block'>In Stock </span>
                               
                                       <div className='d-flex'>
                                         <span className='oldprice'>4000 DA</span>
                                         <span className='newprice text-danger ml-3'> 3500 DA</span>
                                       </div>
                                     </div>
                                 </div>
                                 </SwiperSlide>
                                 
                            </Swiper>
                         </div>
                     </div>
                </div>
            </div>


          </section>


         </nav>

         

          

                        
            
    )
}

export default Navigationns;
